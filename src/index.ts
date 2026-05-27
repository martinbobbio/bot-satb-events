import 'dotenv/config';

import {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  TextChannel,
  Message
} from 'discord.js';

// =========================
// TYPES
// =========================

type NormalEvent = {
  type: 'normal';
  name: string;
  emoji: string;
  hours: number[];
};

type AdminEvent = {
  type: 'admin';
  name: string;
  emoji: string;
  weekday: number;
  hour: number;
};

type EventData = NormalEvent | AdminEvent;

type ParsedEvent = {
  event: EventData;
  isLive: boolean;
  start: Date;
  end: Date | null;
  timeUntil: number;
};

// =========================
// CONFIG
// =========================

const EMBED_COLOR = 0xA78BFA;

const NORMAL_EVENT_DURATION = 20;
const ADMIN_EVENT_DURATION = 60;

const events: NormalEvent[] = [
  {
    type: 'normal',
    name: 'Frozen & Lava',
    emoji: '❄️🌋',
    hours: [2, 17, 23]
  },
  {
    type: 'normal',
    name: 'Neon',
    emoji: '💡',
    hours: [4, 12, 20]
  },
  {
    type: 'normal',
    name: 'Rainbow',
    emoji: '🌈',
    hours: [5, 16]
  },
  {
    type: 'normal',
    name: 'Ghost',
    emoji: '👻',
    hours: [9, 13, 21]
  },
  {
    type: 'normal',
    name: 'Radioactive',
    emoji: '☢️',
    hours: [3, 6, 10, 15]
  },
  {
    type: 'normal',
    name: 'Candy',
    emoji: '🍭',
    hours: [0, 7, 11, 18]
  },
  {
    type: 'normal',
    name: 'Galaxy',
    emoji: '🌌',
    hours: [1, 8, 14, 19]
  }
];

const adminEvents: AdminEvent[] = [
  {
    type: 'admin',
    name: 'Admin Abuse 1',
    emoji: '👑',
    weekday: 6,
    hour: 15
  },
  {
    type: 'admin',
    name: 'Admin Abuse 2',
    emoji: '👑',
    weekday: 0,
    hour: 10
  },
  {
    type: 'admin',
    name: 'Taco Tuesday',
    emoji: '🌮',
    weekday: 2,
    hour: 20
  }
];

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

    for (let i = 0; i < 7; i++) {

      const testDate = new Date();

      testDate.setDate(now.getDate() + i);
      testDate.setHours(event.hour, 0, 0, 0);

      if (testDate.getDay() !== event.weekday) {
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

    if (!nextStart) {
      throw new Error(`No next date found for ${event.name}`);
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

    start.setHours(hour, 0, 0, 0);

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
    closestStart.setHours(event.hours[0], 0, 0, 0);
  }

  return {
    event,
    isLive: false,
    start: closestStart,
    end: null,
    timeUntil: closestStart.getTime() - now.getTime()
  };
}

function buildEmbed(): EmbedBuilder {

  // =========================
  // ADMIN EVENTS
  // =========================

  const parsedAdminEvents = adminEvents.map(getEventStatus);

  parsedAdminEvents.sort((a, b) => {

    if (a.isLive && !b.isLive) return -1;
    if (!a.isLive && b.isLive) return 1;

    return a.timeUntil - b.timeUntil;
  });

  const hasLiveAdmin = parsedAdminEvents.some(e => e.isLive);

  // =========================
  // NORMAL EVENTS
  // =========================

  const parsedEvents = events.map(getEventStatus);

  parsedEvents.sort((a, b) => {

    if (a.isLive && !b.isLive) return -1;
    if (!a.isLive && b.isLive) return 1;

    return a.timeUntil - b.timeUntil;
  });

  // Hide live normal events if admin event is live
  const filteredNormalEvents = hasLiveAdmin
    ? parsedEvents.filter(e => !e.isLive)
    : parsedEvents;

  // =========================
  // ADMIN SECTION
  // =========================

  const adminSection = parsedAdminEvents.map(data => {

    const event = data.event;

    // LIVE
    if (data.isLive && data.end) {

      const endUnix = Math.floor(
        data.end.getTime() / 1000
      );

      return (
        `🟢 **LIVE NOW — ${event.emoji} ${event.name}**\n` +
        `⏳ Ends <t:${endUnix}:R>`
      );
    }

    // NEXT
    const unix = Math.floor(
      data.start.getTime() / 1000
    );

    return (
      `⭐ **${event.emoji} ${event.name}**\n` +
      `🕒 <t:${unix}:F> (<t:${unix}:R>)`
    );

  }).join('\n\n');

  // =========================
  // NORMAL SECTION
  // =========================

  const normalSection = filteredNormalEvents.map(data => {

    const event = data.event;

    // LIVE
    if (data.isLive && data.end) {

      const endUnix = Math.floor(
        data.end.getTime() / 1000
      );

      return (
        `🟢 **LIVE NOW — ${event.emoji} ${event.name} Event**\n` +
        `⏳ Ends <t:${endUnix}:R>`
      );
    }

    // NEXT
    const unix = Math.floor(
      data.start.getTime() / 1000
    );

    return (
      `${event.emoji} **${event.name} Event**\n` +
      `🕒 <t:${unix}:t> (<t:${unix}:R>)`
    );

  }).join('\n\n');

  return new EmbedBuilder()
    .setTitle('📅 SATB Events schedules')
    .setDescription(
      `# Admin Events\n\n${adminSection}\n\n` +
      `# Regular Events\n\n${normalSection}`
    )
    .setColor(EMBED_COLOR)
    .setFooter({
      text: 'SATB Events Tracker'
    })
    .setTimestamp();
}

// =========================
// BOT
// =========================

client.once('clientReady', async () => {

  console.log(`✅ Bot conectado como ${client.user?.tag}`);

  try {

    const fetchedChannel = await client.channels.fetch(
      process.env.CHANNEL_ID as string
    );

    if (!fetchedChannel || !(fetchedChannel instanceof TextChannel)) {
      throw new Error('Canal inválido');
    }

    const channel = fetchedChannel;

    let message: Message;

    // Try existing message
    if (process.env.MESSAGE_ID) {

      try {

        message = await channel.messages.fetch(
          process.env.MESSAGE_ID
        );

        console.log('✅ Mensaje existente encontrado');

      } catch {

        console.log('⚠️ No se encontró el mensaje');

        message = await channel.send({
          embeds: [buildEmbed()]
        });

        console.log(`🆕 Nuevo mensaje creado`);
        console.log(`MESSAGE_ID=${message.id}`);
      }

    } else {

      message = await channel.send({
        embeds: [buildEmbed()]
      });

      console.log(`🆕 Nuevo mensaje creado`);
      console.log(`MESSAGE_ID=${message.id}`);
    }

    // Initial update
    await message.edit({
      embeds: [buildEmbed()]
    });

    // Auto update
    setInterval(async () => {

      try {

        await message.edit({
          embeds: [buildEmbed()]
        });

        console.log('🔄 Embed actualizado');

      } catch (err) {

        console.error('❌ Error actualizando embed:', err);
      }

    }, 5 * 60 * 1000);

  } catch (error) {

    console.error('❌ Error:', error);
  }

});

client.login(process.env.TOKEN);