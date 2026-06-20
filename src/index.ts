import 'dotenv/config';
import express from 'express';
import { Client, GatewayIntentBits, EmbedBuilder, TextChannel, Message} from 'discord.js';
import { EMBED_COLOR, NORMAL_EVENT_DURATION, ADMIN_EVENT_DURATION, TIMEZONE_OFFSET, events, adminEvents, WEEKDAY_MAP} from './config';
import { AdminEvent, EventData, ParsedEvent} from './types';
import { ADMIN_EVENTS, adminMachineEvents, CHARACTERS, craftingMachineRecipes, GAME_EVENTS, TRAITS, LUCKY_TYPES } from './entities';

const app = express();

app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'SATB bot is running',
    time: new Date().toISOString()
  });
});

app.listen(3000, () => {
  console.log('🌐 Express server running on port 3000');
});

// =========================
// CLIENT
// =========================

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// =========================
// FUNCTIONS
// =========================

function getEventStatus(event: EventData): ParsedEvent {

  const now = new Date();

  // =========================
  // ADMIN EVENTS
  // =========================

  if (event.type === 'admin') {

    let nextStart: Date | null = null;

    for (let i = 0; i <= 7; i++) {

      const testDate = new Date();

      testDate.setDate(now.getDate() + i);
      testDate.setUTCHours(event.hour + TIMEZONE_OFFSET, 0, 0, 0);

      if (testDate.getUTCDay() !== event.weekday) {
        continue;
      }

      const end = new Date(
        testDate.getTime() + ADMIN_EVENT_DURATION * 60 * 1000
      );

      // LIVE
      if (now >= testDate && now < end) {

        return {
          event,
          isLive: true,
          start: testDate,
          end,
          timeUntil: 0
        };
      }

      // NEXT
      if (testDate > now) {

        nextStart = testDate;
        break;
      }
    }

    const adminInfo = ADMIN_EVENTS[event.eventId];

    if (!nextStart) {
      throw new Error(`No next date found for ${adminInfo.name}`);
    }

    return {
      event,
      isLive: false,
      start: nextStart,
      end: null,
      timeUntil: nextStart.getTime() - now.getTime()
    };
  }

  // =========================
  // NORMAL EVENTS
  // =========================

  let closestStart: Date | null = null;

  for (const hour of event.hours) {

    const start = new Date();

    start.setUTCHours(
      hour + TIMEZONE_OFFSET,
      0,
      0,
      0
    );

    const end = new Date(
      start.getTime() + NORMAL_EVENT_DURATION * 60 * 1000
    );

    // LIVE
    if (now >= start && now < end) {

      return {
        event,
        isLive: true,
        start,
        end,
        timeUntil: 0
      };
    }

    // NEXT
    if (start > now) {

      if (!closestStart || start < closestStart) {
        closestStart = start;
      }
    }
  }

  // TOMORROW
  if (!closestStart) {

    closestStart = new Date();

    closestStart.setDate(closestStart.getDate() + 1);
    closestStart.setUTCHours(event.hours[0] + TIMEZONE_OFFSET, 0, 0, 0);
  }

  return {
    event,
    isLive: false,
    start: closestStart,
    end: null,
    timeUntil: closestStart.getTime() - now.getTime()
  };
}

// =========================
// ADMIN MACHINE
// =========================

function getAdminMachineStatus() {

  const now = new Date();

  const dayIndex = WEEKDAY_MAP[now.getUTCDay()];

  const slots = [
    { hour: 3, minute: 30 },
    { hour: 9, minute: 30 },
    { hour: 15, minute: 30 },
    { hour: 21, minute: 30 }
  ];

  for (let i = 0; i < slots.length; i++) {

    const start = new Date();

    start.setUTCHours(
      slots[i].hour,
      slots[i].minute,
      0,
      0
    );

    const end = new Date(
      start.getTime() +
      20 * 60 * 1000
    );

    if (
      now >= start &&
      now < end
    ) {

      return {
        isLive: true,
        start,
        end,
        event:
          adminMachineEvents[
            dayIndex * 4 + i
          ]
      };
    }
  }

  for (let i = 0; i < slots.length; i++) {

    const start = new Date();

    start.setUTCHours(
      slots[i].hour,
      slots[i].minute,
      0,
      0
    );

    if (start > now) {

      return {
        isLive: false,
        start,
        end: null,
        event:
          adminMachineEvents[
            dayIndex * 4 + i
          ]
      };
    }
  }

  const tomorrow = new Date();

  tomorrow.setUTCDate(
    tomorrow.getUTCDate() + 1
  );

  tomorrow.setUTCHours(
    3,
    30,
    0,
    0
  );

  const tomorrowDay =
    (dayIndex + 1) % 7;

  return {
    isLive: false,
    start: tomorrow,
    end: null,
    event:
      adminMachineEvents[
        tomorrowDay * 4
      ]
  };
}

// =========================
// CRAFTING MACHINE
// =========================

function getCurrentCraftingRecipes() {

  const now = new Date();

  const dayIndex = WEEKDAY_MAP[now.getUTCDay()];

  const hourIndex =
    now.getUTCHours() % 12;

  const recipeIndex = dayIndex * 12 + hourIndex;

  return craftingMachineRecipes[
    recipeIndex
  ];
}

function getNextCraftingRefreshUnix() {

  const now = new Date();

  const next = new Date(now);

  next.setUTCMinutes(0, 0, 0);

  next.setUTCHours(
    now.getUTCHours() + 1
  );

  return Math.floor(
    next.getTime() / 1000
  );
}

// =========================
// EMBEDS
// =========================

function buildAdminEventsEmbed(): EmbedBuilder {

  const parsedAdminEvents = adminEvents.map(getEventStatus);

  parsedAdminEvents.sort((a, b) => {
    if (a.isLive && !b.isLive) return -1;
    if (!a.isLive && b.isLive) return 1;
    return a.timeUntil - b.timeUntil;
  });

  const adminSection = parsedAdminEvents.map(data => {

    const event = data.event as AdminEvent;
    const eventInfo = ADMIN_EVENTS[event.eventId];

    if (data.isLive && data.end) {

      const endUnix = Math.floor(data.end.getTime() / 1000);

      return (
        `🟢 **LIVE NOW — ${eventInfo.emoji} ${eventInfo.name}**\n` +
        `⏳ Ends <t:${endUnix}:R>`
      );
    }

    const unix = Math.floor(data.start.getTime() / 1000);

    return (
      `⭐ **${eventInfo.emoji} ${eventInfo.name}**\n` +
      `🕒 <t:${unix}:F> (<t:${unix}:R>)`
    );

  }).join('\n\n');

  return new EmbedBuilder()
    .setTitle('👑 Admin Events')
    .setDescription(adminSection)
    .setColor(EMBED_COLOR)
    .setFooter({ text: 'SATB Events Tracker' })
    .setTimestamp();
}

function buildRegularEventsEmbed(): EmbedBuilder {

  const parsedAdminEvents = adminEvents.map(getEventStatus);
  const hasLiveAdmin = parsedAdminEvents.some(e => e.isLive);

  const parsedEvents = events.map(getEventStatus);

  const adminBlockedEvents = parsedEvents.filter(normalEvent => {

    return !parsedAdminEvents.some(adminEvent => {

      const adminStart = adminEvent.start.getTime();
      const blockEnd = adminStart + (ADMIN_EVENT_DURATION + 60) * 60 * 1000;
      const normalStart = normalEvent.start.getTime();

      return (
        normalStart >= adminStart &&
        normalStart < blockEnd
      );
    });
  });

  parsedEvents.sort((a, b) => {
    if (a.isLive && !b.isLive) return -1;
    if (!a.isLive && b.isLive) return 1;
    return a.timeUntil - b.timeUntil;
  });

  const filteredNormalEvents = hasLiveAdmin
    ? adminBlockedEvents.filter(e => !e.isLive)
    : adminBlockedEvents;

  const normalSection = filteredNormalEvents.map(data => {

    const event = data.event;
    const eventInfo = GAME_EVENTS[event.eventId];

    if (data.isLive && data.end) {

      const endUnix = Math.floor(data.end.getTime() / 1000);

      return (
        `🟢 **LIVE NOW — ${eventInfo.name} Event**\n` +
        `⏳ Ends <t:${endUnix}:R>`
      );
    }

    const unix = Math.floor(data.start.getTime() / 1000);

    return (
      `${eventInfo.emoji} **${eventInfo.name} Event**\n` +
      `🕒 <t:${unix}:t> (<t:${unix}:R>)`
    );

  }).join('\n\n');

  return new EmbedBuilder()
    .setTitle('📅 Regular Events')
    .setDescription(normalSection)
    .setColor(EMBED_COLOR)
    .setFooter({ text: 'SATB Events Tracker' })
    .setTimestamp();
}

function buildCraftingEmbed(): EmbedBuilder {

  const currentRecipes = getCurrentCraftingRecipes();
  const nextRefreshUnix = getNextCraftingRefreshUnix();

  const craftingSection = currentRecipes
    .map(recipeId => {
      const character = CHARACTERS[recipeId];
      return `• ${character.emoji} ${character.name}`.trim();
    })
    .join('\n');

  return new EmbedBuilder()
    .setTitle('🔧 Crafting Machine')
    .setDescription(
      `🔄 Recipes refresh <t:${nextRefreshUnix}:R>\n\n` +
      `**Crafting characters**\n\n` +
      `${craftingSection}`
    )
    .setColor(EMBED_COLOR)
    .setFooter({ text: 'SATB Events Tracker' })
    .setTimestamp();
}

function buildAdminMachineEmbed(): EmbedBuilder {

  const adminMachine = getAdminMachineStatus();

  const character = CHARACTERS[adminMachine.event.guaranteedCharacter];
  const gameEvent = GAME_EVENTS[adminMachine.event.event];
  const luckyType = LUCKY_TYPES[adminMachine.event.luckyType];
  const traitsText = adminMachine.event.traits
    .map(t => {
      const trait = TRAITS[t];
      return `• ${trait.emoji} ${trait.name}`.trim();
    })
    .join('\n');

  const adminMachineSection = adminMachine.isLive
    ? (
        `🟢 **LIVE NOW**\n` +
        `⏳ Ends <t:${Math.floor(adminMachine.end!.getTime() / 1000)}:R>\n\n` +
        `**Guaranteed Character**\n` +
        `• ${character.emoji} ${character.name}\n\n` +
        `**Luck**\n` +
        `• ${luckyType.emoji} ${luckyType.name}\n\n` +
        `**Event**\n` +
        `• ${gameEvent.emoji} ${gameEvent.name}\n\n` +
        `**Traits**\n` +
        traitsText
      )
    : (
        `⭐ **Next Admin Machine**\n` +
        `🕒 <t:${Math.floor(adminMachine.start.getTime() / 1000)}:R>\n\n` +
        `**Guaranteed Character**\n` +
        `• ${character.emoji} ${character.name}\n\n` +
        `**Luck**\n` +
        `• ${luckyType.emoji} ${luckyType.name}\n\n` +
        `**Event**\n` +
        `• ${gameEvent.emoji} ${gameEvent.name}\n\n` +
        `**Traits**\n` +
        traitsText
      );

  return new EmbedBuilder()
    .setTitle('⚙️ Admin Machine')
    .setDescription(adminMachineSection)
    .setColor(EMBED_COLOR)
    .setFooter({ text: 'SATB Events Tracker' })
    .setTimestamp();
}

// =========================
// BOT
// =========================

async function getOrCreateMessage(
  channel: TextChannel,
  messageId: string | undefined,
  embed: EmbedBuilder,
  label: string
): Promise<Message> {

  if (messageId) {

    try {

      const msg = await channel.messages.fetch(messageId);
      console.log(`✅ Mensaje existente encontrado (${label}): ${messageId}`);
      return msg;

    } catch {

      console.log(`⚠️ No se encontró el mensaje (${label}): ${messageId}`);
    }
  }

  const msg = await channel.send({ embeds: [embed] });
  console.log(`🆕 Nuevo mensaje creado (${label})`);
  console.log(`${label}=${msg.id}`);
  return msg;
}

client.once('clientReady', async () => {

  console.log(`✅ Bot conectado como ${client.user?.tag}`);

  try {

    const [fetchedEventsChannel, fetchedMachinesChannel] = await Promise.all([
      client.channels.fetch(process.env.EVENTS_CHANNEL_ID as string),
      client.channels.fetch(process.env.MACHINES_CHANNEL_ID as string),
    ]);

    if (!fetchedEventsChannel || !(fetchedEventsChannel instanceof TextChannel)) {
      throw new Error('Canal de eventos inválido');
    }

    if (!fetchedMachinesChannel || !(fetchedMachinesChannel instanceof TextChannel)) {
      throw new Error('Canal de máquinas inválido');
    }

    const eventsChannel = fetchedEventsChannel;
    const machinesChannel = fetchedMachinesChannel;

    const [adminEventsMsg, regularEventsMsg, craftingMsg, adminMachineMsg] =
      await Promise.all([
        getOrCreateMessage(eventsChannel, process.env.MESSAGE_ADMIN_EVENT_ID, buildAdminEventsEmbed(), 'MESSAGE_ADMIN_EVENT_ID'),
        getOrCreateMessage(eventsChannel, process.env.MESSAGE_REGULAR_EVENT_ID, buildRegularEventsEmbed(), 'MESSAGE_REGULAR_EVENT_ID'),
        getOrCreateMessage(machinesChannel, process.env.MESSAGE_CRAFT_MACHINE_ID, buildCraftingEmbed(), 'MESSAGE_CRAFT_MACHINE_ID'),
        getOrCreateMessage(machinesChannel, process.env.MESSAGE_ADMIN_MACHINE_ID, buildAdminMachineEmbed(), 'MESSAGE_ADMIN_MACHINE_ID'),
      ]);

    // Initial update
    await Promise.all([
      adminEventsMsg.edit({ embeds: [buildAdminEventsEmbed()] }),
      regularEventsMsg.edit({ embeds: [buildRegularEventsEmbed()] }),
      craftingMsg.edit({ embeds: [buildCraftingEmbed()] }),
      adminMachineMsg.edit({ embeds: [buildAdminMachineEmbed()] }),
    ]);

    // Auto update
    setInterval(async () => {

      try {

        await Promise.all([
          adminEventsMsg.edit({ embeds: [buildAdminEventsEmbed()] }),
          regularEventsMsg.edit({ embeds: [buildRegularEventsEmbed()] }),
          craftingMsg.edit({ embeds: [buildCraftingEmbed()] }),
          adminMachineMsg.edit({ embeds: [buildAdminMachineEmbed()] }),
        ]);

        console.log('🔄 Embeds actualizados');

      } catch (err) {

        console.error('❌ Error actualizando embeds:', err);
      }

    }, 5 * 60 * 1000);

  } catch (error) {

    console.error('❌ Error:', error);
  }

});

client.login(process.env.TOKEN);
