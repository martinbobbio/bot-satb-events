import { NormalEvent, AdminEvent } from './types';

export const EMBED_COLOR = 0xA78BFA;

export const NORMAL_EVENT_DURATION = 20;
export const ADMIN_EVENT_DURATION = 60;

export const TIMEZONE_OFFSET = 0;

export const WEEKDAY_MAP = [0,1,2,3,4,5,6];

export const events: NormalEvent[] = [
  {
    type: 'normal',
    eventId: 'LAVA_AND_FROZEN',
    hours: [2, 17, 23]
  },
  {
    type: 'normal',
    eventId: 'NEON',
    hours: [4, 12, 20]
  },
  {
    type: 'normal',
    eventId: 'RAINBOW',
    hours: [5, 16]
  },
  {
    type: 'normal',
    eventId: 'GHOST',
    hours: [9, 13, 21]
  },
  {
    type: 'normal',
    eventId: 'RADIOACTIVE',
    hours: [3, 6, 10, 15]
  },
  {
    type: 'normal',
    eventId: 'CANDY',
    hours: [0, 7, 11, 18]
  },
  {
    type: 'normal',
    eventId: 'YIN_YANG',
    hours: [1, 8, 14, 19]
  }
];

export const adminEvents: AdminEvent[] = [
  {
    type: 'admin',
    eventId: 'ADMIN_ABUSE_1',
    weekday: 6,
    hour: 18
  },
  {
    type: 'admin',
    eventId: 'ADMIN_ABUSE_2',
    weekday: 0,
    hour: 12
  },
  {
    type: 'admin',
    eventId: 'TACO_TUESDAY',
    weekday: 2,
    hour: 23
  }
];