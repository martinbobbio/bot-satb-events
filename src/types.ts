import { ADMIN_EVENTS, GAME_EVENTS } from "./entities";

export type NormalEvent = {
    type: 'normal';
    eventId: keyof typeof GAME_EVENTS;
    hours: number[];
};
  
export type AdminEvent = {
    type: 'admin';
    eventId: keyof typeof ADMIN_EVENTS;
    weekday: number;
    hour: number;
  };
  
export type EventData = NormalEvent | AdminEvent;
  
export type ParsedEvent = {
    event: EventData;
    isLive: boolean;
    start: Date;
    end: Date | null;
    timeUntil: number;
};