export type Entity = {
    id: string;
    name: string;
    emoji: string;
  };
  
export const CHARACTERS: Record<string, Entity> = {
    TIC_TAC: { id: 'TIC_TAC', name: 'TIC TAC', emoji: '<:character_tictac:1517528722117234738>' },
    MONEY_MONEY_PUGGY: { id: 'MONEY_MONEY_PUGGY', name: 'Money Money Puggy', emoji: '<:character_moneymoneypuggy:1517528900329013439>' },
    ILLUMINATI_PYRAMID: { id: 'ILLUMINATI_PYRAMID', name: 'Illuminati Pyramid', emoji: '<:character_illuminatipryramid:1517528862114713680>' },
    CHARACTER_21: { id: 'CHARACTER_21', name: 'Character 21', emoji: '<:character_21:1517528714827796711>' },
    DUGDUGDUG_SAHUR: { id: 'DUGDUGDUG_SAHUR', name: 'Dug Dug Dug Sahur', emoji: '<:character_dugdugdugsahur:1517528712721989632>' },
    BURGUERINI_BEARINI: { id: 'BURGUERINI_BEARINI', name: 'Burguerini Bearini', emoji: '<:character_burguerinibearini:1517527568620716174>' },
    ESOK_SEKOLAH: { id: 'ESOK_SEKOLAH', name: 'Esok Sekolah', emoji: '<:character_esoksekolah:1517527539852116090>' },
    W_OR_L: { id: 'W_OR_L', name: 'W Or L', emoji: '<:character_worl:1517527519660609677>' },
    RANG_RING_BUS: { id: 'RANG_RING_BUS', name: 'Rang Ring Bus', emoji: '<:character_rangringbugs:1517527493278699652>' },
    CHARACTER_67: { id: 'CHARACTER_67', name: 'Character 67', emoji: '<:character_67:1517527462194446486>' },
    CHARACTER_68: { id: 'CHARACTER_68', name: 'Character 68', emoji: '<:character_68:1517527442301124678>' },
    MECCAVALHO: { id: 'MECCAVALHO', name: 'Meccavalho', emoji: '<:character_meccavalho:1517527416183066767>' },
    DUL_DUL_DUL: { id: 'DUL_DUL_DUL', name: 'Dul Dul Dul', emoji: '<:character_dulduldul:1517527392850284694>' },
    CACASITO_SATALITO: { id: 'CACASITO_SATALITO', name: 'Cacasito Satalito', emoji: '<:character_cacasitosatelito:1517527338445705409>' },
    LA_GINGER_SEKOLAH: { id: 'LA_GINGER_SEKOLAH', name: 'La Ginger Sekolah', emoji: '<:character_lagingersekolah:1517527373845889116>' },
    KETUPAT_KEPAT_PREKUPAT: { id: 'KETUPAT_KEPAT_PREKUPAT', name: 'Ketupat Kepat Prekupat', emoji: '<:character_ketupat:1517527314274062517>' },
    SPINNY_HAMMY: { id: 'SPINNY_HAMMY', name: 'Spinny Hammy', emoji: '<:character_spinnyhammy:1517527293717778564>' },
    ARCADOPUS: { id: 'ARCADOPUS', name: 'Arcadopus', emoji: '<:character_arcadopus:1522701428521439513>' },
    SPAGHETTI_TUALETTI: { id: 'SPAGHETTI_TUALETTI', name: 'Spaghetti Tualetti', emoji: '<:character_spagettitueletti:1517527249463808110>' },
    LOS_BROS: { id: 'LOS_BROS', name: 'Los Bros', emoji: '<:character_losbros:1517527219381997733>' },
    GYM_BROS: { id: 'GYM_BROS', name: 'Gym Bros', emoji: '<:character_gymbros:1517527092940509345>' },
    LOS_COUPLES: { id: 'LOS_COUPLES', name: 'Los Couples', emoji: '<:character_loscouples:1517527195919061013>' },
    LOS_NUMBERS: { id: 'LOS_NUMBERS', name: 'Los Numbers', emoji: '<:character_losnumbers:1517527148565500035>' },
    LOS_RIDERS: { id: 'LOS_RIDERS', name: 'Los Riders', emoji: '<:character_losriders:1517527173882318988>' },
    LOS_PUGGIES: { id: 'LOS_PUGGIES', name: 'Los Puggies', emoji: '<:character_lospuggies:1517527064738140394>' },
    LA_KARKUR_COMBINAZIONE: { id: 'LA_KARKUR_COMBINAZIONE', name: 'La Karkur Combinazione', emoji: '<:character_lakarkurcombinazione:1517526980348874934>' },
    LA_SAHUR_COMBINAZIONE: { id: 'LA_SAHUR_COMBINAZIONE', name: 'La Sahur Combinazione', emoji: '<:character_lasahurcombinazione:1517527000506564688>' },
    WORMINI_DRAGONINI: { id: 'WORMINI_DRAGONINI', name: 'Wormini Dragonini', emoji: '<:character_worminidragonini:1517556961984516208>' },
    LOS_GIGALITRAKTOS: { id: 'LOS_GIGALITRAKTOS', name: 'Los Gigalitraktos', emoji: '<:character_losgigalitraktos:1517527031628435537>' },
    GARAMA: { id: 'GARAMA', name: 'Garama And Madundung', emoji: '<:character_garama:1520175084977917952>' },
    HYDRA_DRAGON: { id: 'HYDRA_DRAGON', name: 'Hydra Dragon', emoji: '<:character_hydradragon:1520175032435740843>' }
};
  
export const TRAITS: Record<string, Entity> = {
  UFO:        { id: 'UFO',        name: 'UFO',        emoji: '<:trait_ufo:1517520571443970091>' },
  TORNADO:    { id: 'TORNADO',    name: 'Tornado',    emoji: '<:trait_tornado:1517520665127813180>' },
  WAVE:       { id: 'WAVE',       name: 'Wave',       emoji: '<:trait_wave:1517520905964879903>' },
  LIGHTNING:  { id: 'LIGHTNING',  name: 'Lightning',  emoji: '<:trait_lightning:1517520684274679829>' },
  STRAWBERRY: { id: 'STRAWBERRY', name: 'Strawberry', emoji: '<:trait_strawberry:1517520639278190722>' },
  CHRISTMAS:  { id: 'CHRISTMAS',  name: 'Christmas',  emoji: '<:trait_christmas:1517520800704630875>' },
  BUNNY:      { id: 'BUNNY',      name: 'Bunny',      emoji: '<:trait_bunny:1517520890256953354>' },
  NYAN_CAT:   { id: 'NYAN_CAT',   name: 'Nyan Cat',   emoji: '<:trait_nyancat:1517520709235249375>' },
  FIREWORKS:  { id: 'FIREWORKS',  name: 'Fireworks',  emoji: '<:trait_fireworks:1517520828059881673>' },
  TUNGTUNG:   { id: 'TUNGTUNG',   name: 'Tungtung',   emoji: '<:trait_tungtung:1517520620093702184>' },
  TRALALERO:  { id: 'TRALALERO',  name: 'Tralalero',  emoji: '<:trait_tralalero:1517520596731297985>' },
};

export const LUCKY_TYPES: Record<string, Entity> = {
  LUCKY_X4:  { id: 'LUCKY_X4',  name: 'Luck x4',  emoji: '<:luck_x4:1517519825637871846>' },
  LUCKY_X8:  { id: 'LUCKY_X8',  name: 'Luck x8',  emoji: '<:luck_x8:1517519899843629228>' },
  LUCKY_X16: { id: 'LUCKY_X16', name: 'Luck x16', emoji: '<:luck_x16:1517519949097074738>' },
  LUCKY_X32: { id: 'LUCKY_X32', name: 'Luck x32', emoji: '<:luck_x32:1517519989366718644>' },
};
  
export const GAME_EVENTS: Record<string, Entity> = {
    RAINBOW: {
      id: 'RAINBOW',
      name: 'Rainbow',
      emoji: '<:event_rainbow:1517513608433762344>',
    },
    NEON: {
      id: 'NEON',
      name: 'Neon',
      emoji: '<:event_neon:1517513667816456272>',
    },
    GALAXY: {
      id: 'GALAXY',
      name: 'Galaxy',
      emoji: '<:event_galaxy:1517513850881183860>',
    },
    CANDY: {
      id: 'CANDY',
      name: 'Candy',
      emoji: '<:event_candy:1517514061246500865>',
    },
    RADIOACTIVE: {
      id: 'RADIOACTIVE',
      name: 'Radioactive',
      emoji: '<:event_radioactive:1517513733423763556>',
    },
    GHOST: {
      id: 'GHOST',
      name: 'Ghost',
      emoji: '<:event_ghost:1517513930430349416>',
    },
    LAVA_AND_FROZEN: {
      id: 'LAVA_AND_FROZEN',
      name: 'Frozen & Lava',
      emoji: '<:event_lavafrozen:1517514024919634000>',
    },
    YIN_YANG: {
      id: 'YIN_YANG',
      name: 'Yin Yang',
      emoji: '<:event_yinyang:1517514113918439594>',
    },
    SOCCER: {
      id: 'SOCCER',
      name: 'Soccer',
      emoji: '<:event_soccer:1519886165761593424>',
    }
    
};

export const ADMIN_EVENTS = {
    ADMIN_ABUSE_1: {
      id: 'ADMIN_ABUSE_1',
      name: 'Admin Abuse 1',
      emoji: '👑'
    },
  
    ADMIN_ABUSE_2: {
      id: 'ADMIN_ABUSE_2',
      name: 'Admin Abuse 2',
      emoji: '👑'
    },
  
    TACO_TUESDAY: {
      id: 'TACO_TUESDAY',
      name: 'Taco Tuesday',
      emoji: '🌮'
    }
} as const;

export const craftingMachineRecipes: string[][] = [
    // Saturday
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LA_SAHUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LOS_PUGGIES', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LA_KARKUR_COMBINAZIONE', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'WORMINI_DRAGONINI', 'LOS_PUGGIES'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'WORMINI_DRAGONINI', 'LOS_PUGGIES'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_PUGGIES', 'WORMINI_DRAGONINI', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LA_KARKUR_COMBINAZIONE', 'LA_SAHUR_COMBINAZIONE'],
    // Sunday
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'WORMINI_DRAGONINI', 'LOS_PUGGIES'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LA_KARKUR_COMBINAZIONE', 'LA_SAHUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'WORMINI_DRAGONINI', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LOS_PUGGIES'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LA_KARKUR_COMBINAZIONE', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_NUMBERS', 'LA_KARKUR_COMBINAZIONE', 'LA_SAHUR_COMBINAZIONE'],
    // Monday
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LA_SAHUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_NUMBERS', 'LOS_PUGGIES', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'WORMINI_DRAGONINI', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LA_SAHUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'WORMINI_DRAGONINI', 'LOS_PUGGIES'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_NUMBERS', 'WORMINI_DRAGONINI', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    // Tuesday
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LA_SAHUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'LOS_PUGGIES'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'WORMINI_DRAGONINI', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'WORMINI_DRAGONINI', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LA_KARKUR_COMBINAZIONE', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'WORMINI_DRAGONINI', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LA_SAHUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LA_KARKUR_COMBINAZIONE', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_NUMBERS', 'LOS_PUGGIES', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_PUGGIES', 'WORMINI_DRAGONINI', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    // Wednesday
    ['LOS_BROS', 'GYM_BROS', 'LOS_NUMBERS', 'LA_KARKUR_COMBINAZIONE', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'WORMINI_DRAGONINI', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LOS_PUGGIES'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'WORMINI_DRAGONINI', 'LOS_PUGGIES'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'WORMINI_DRAGONINI', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LA_SAHUR_COMBINAZIONE', 'WORMINI_DRAGONINI', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LA_KARKUR_COMBINAZIONE', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LOS_PUGGIES', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    // Thursday
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LA_SAHUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'WORMINI_DRAGONINI', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LA_KARKUR_COMBINAZIONE', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LA_SAHUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_NUMBERS', 'WORMINI_DRAGONINI', 'LOS_PUGGIES'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'WORMINI_DRAGONINI', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LOS_PUGGIES', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    // Friday
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LA_KARKUR_COMBINAZIONE', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'WORMINI_DRAGONINI', 'LOS_PUGGIES'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LOS_PUGGIES', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_PUGGIES', 'LA_KARKUR_COMBINAZIONE'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'WORMINI_DRAGONINI', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_PUGGIES', 'WORMINI_DRAGONINI', 'LOS_GIGALITRAKTOS'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LOS_NUMBERS', 'HYDRA_DRAGON'],
    ['LOS_BROS', 'GYM_BROS', 'LOS_COUPLES', 'LA_KARKUR_COMBINAZIONE', 'WORMINI_DRAGONINI'],
    ['LOS_BROS', 'LOS_COUPLES', 'LOS_RIDERS', 'LA_KARKUR_COMBINAZIONE', 'LA_SAHUR_COMBINAZIONE'],
];

export const adminMachineEvents = [
  // Saturday
  {
    guaranteedCharacter: 'GARAMA',
    luckyType: 'LUCKY_X4',
    event: 'RAINBOW',
    traits: ['UFO', 'FIREWORKS', 'TUNGTUNG', 'WAVE']
  },
  {
    guaranteedCharacter: 'CHARACTER_67',
    luckyType: 'LUCKY_X8',
    event: 'GHOST',
    traits: ['TRALALERO', 'STRAWBERRY', 'LIGHTNING']
  },
  {
    guaranteedCharacter: 'BURGUERINI_BEARINI',
    luckyType: 'LUCKY_X32',
    event: 'NEON',
    traits: ['NYAN_CAT', 'TORNADO', 'UFO', 'FIREWORKS', 'TUNGTUNG']
  },
  {
    guaranteedCharacter: 'KETUPAT_KEPAT_PREKUPAT',
    luckyType: 'LUCKY_X4',
    event: 'CANDY',
    traits: ['WAVE', 'TRALALERO']
  },

  // Sunday
  {
    guaranteedCharacter: 'ILLUMINATI_PYRAMID',
    luckyType: 'LUCKY_X8',
    event: 'LAVA_AND_FROZEN',
    traits: ['TUNGTUNG', 'UFO', 'STRAWBERRY', 'LIGHTNING']
  },
  {
    guaranteedCharacter: 'SPAGHETTI_TUALETTI',
    luckyType: 'LUCKY_X4',
    event: 'GALAXY',
    traits: ['FIREWORKS', 'WAVE', 'NYAN_CAT', 'TRALALERO']
  },
  {
    guaranteedCharacter: 'ESOK_SEKOLAH',
    luckyType: 'LUCKY_X16',
    event: 'RADIOACTIVE',
    traits: ['TORNADO', 'UFO', 'FIREWORKS']
  },
  {
    guaranteedCharacter: 'CHARACTER_21',
    luckyType: 'LUCKY_X4',
    event: 'RAINBOW',
    traits: ['STRAWBERRY', 'TUNGTUNG', 'WAVE']
  },

  // Monday
  {
    guaranteedCharacter: 'ARCADOPUS',
    luckyType: 'LUCKY_X8',
    event: 'CANDY',
    traits: ['UFO', 'LIGHTNING', 'NYAN_CAT']
  },
  {
    guaranteedCharacter: 'DUL_DUL_DUL',
    luckyType: 'LUCKY_X4',
    event: 'GHOST',
    traits: ['TRALALERO', 'TORNADO', 'STRAWBERRY']
  },
  {
    guaranteedCharacter: 'MECCAVALHO',
    luckyType: 'LUCKY_X8',
    event: 'NEON',
    traits: ['WAVE', 'FIREWORKS', 'TUNGTUNG', 'UFO']
  },
  {
    guaranteedCharacter: 'TIC_TAC',
    luckyType: 'LUCKY_X32',
    event: 'GALAXY',
    traits: ['NYAN_CAT', 'TRALALERO', 'LIGHTNING', 'STRAWBERRY']
  },

  // Tuesday
  {
    guaranteedCharacter: 'RANG_RING_BUS',
    luckyType: 'LUCKY_X4',
    event: 'RADIOACTIVE',
    traits: ['UFO', 'WAVE', 'FIREWORKS']
  },
  {
    guaranteedCharacter: 'MONEY_MONEY_PUGGY',
    luckyType: 'LUCKY_X8',
    event: 'LAVA_AND_FROZEN',
    traits: ['TUNGTUNG', 'TORNADO', 'NYAN_CAT', 'STRAWBERRY']
  },
  {
    guaranteedCharacter: 'CHARACTER_68',
    luckyType: 'LUCKY_X4',
    event: 'RAINBOW',
    traits: ['LIGHTNING', 'TRALALERO']
  },
  {
    guaranteedCharacter: 'LA_GINGER_SEKOLAH',
    luckyType: 'LUCKY_X4',
    event: 'NEON',
    traits: ['UFO', 'FIREWORKS']
  },

  // Wednesday
  {
    guaranteedCharacter: 'DUGDUGDUG_SAHUR',
    luckyType: 'LUCKY_X4',
    event: 'GALAXY',
    traits: ['STRAWBERRY', 'TUNGTUNG', 'WAVE']
  },
  {
    guaranteedCharacter: 'CHARACTER_21',
    luckyType: 'LUCKY_X8',
    event: 'CANDY',
    traits: ['NYAN_CAT', 'UFO', 'TORNADO']
  },
  {
    guaranteedCharacter: 'ILLUMINATI_PYRAMID',
    luckyType: 'LUCKY_X4',
    event: 'GHOST',
    traits: ['FIREWORKS', 'TRALALERO', 'LIGHTNING', 'WAVE']
  },
  {
    guaranteedCharacter: 'W_OR_L',
    luckyType: 'LUCKY_X4',
    event: 'RADIOACTIVE',
    traits: ['UFO', 'STRAWBERRY', 'TUNGTUNG', 'NYAN_CAT']
  },

  // Thursday
  {
    guaranteedCharacter: 'BURGUERINI_BEARINI',
    luckyType: 'LUCKY_X8',
    event: 'RAINBOW',
    traits: ['WAVE', 'LIGHTNING', 'FIREWORKS', 'TRALALERO']
  },
  {
    guaranteedCharacter: 'GARAMA',
    luckyType: 'LUCKY_X4',
    event: 'NEON',
    traits: ['UFO', 'STRAWBERRY', 'TORNADO', 'NYAN_CAT']
  },
  {
    guaranteedCharacter: 'ESOK_SEKOLAH',
    luckyType: 'LUCKY_X16',
    event: 'GHOST',
    traits: ['TUNGTUNG', 'WAVE', 'FIREWORKS']
  },
  {
    guaranteedCharacter: 'SPINNY_HAMMY',
    luckyType: 'LUCKY_X4',
    event: 'GALAXY',
    traits: ['UFO', 'LIGHTNING', 'TRALALERO', 'STRAWBERRY']
  },

  // Friday
  {
    guaranteedCharacter: 'GARAMA',
    luckyType: 'LUCKY_X8',
    event: 'LAVA_AND_FROZEN',
    traits: ['NYAN_CAT', 'WAVE', 'TUNGTUNG']
  },
  {
    guaranteedCharacter: 'RANG_RING_BUS',
    luckyType: 'LUCKY_X4',
    event: 'CANDY',
    traits: ['TORNADO', 'UFO', 'FIREWORKS', 'LIGHTNING']
  },
  {
    guaranteedCharacter: 'CACASITO_SATALITO',
    luckyType: 'LUCKY_X16',
    event: 'NEON',
    traits: ['TRALALERO', 'STRAWBERRY', 'WAVE', 'TUNGTUNG']
  },
  {
    guaranteedCharacter: 'MONEY_MONEY_PUGGY',
    luckyType: 'LUCKY_X4',
    event: 'RADIOACTIVE',
    traits: ['UFO', 'NYAN_CAT', 'FIREWORKS']
  }
];