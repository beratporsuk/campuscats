import { FeedingEvent, StationFeedingData } from './types';

const STORE_PREFIX = 'pati-durak-';

function getKey(stationId: string): string {
  return `${STORE_PREFIX}station-${stationId}`;
}

export function getFeedingData(stationId: string): StationFeedingData {
  if (typeof window === 'undefined') return { events: [] };
  try {
    const raw = localStorage.getItem(getKey(stationId));
    return raw ? JSON.parse(raw) : { events: [] };
  } catch {
    return { events: [] };
  }
}

export function addFeeding(stationId: string): FeedingEvent {
  const data = getFeedingData(stationId);
  const event: FeedingEvent = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    stationId,
    timestamp: new Date().toISOString(),
  };
  data.events = [event, ...data.events].slice(0, 100);
  localStorage.setItem(getKey(stationId), JSON.stringify(data));
  return event;
}

export function getTodayEvents(stationId: string): FeedingEvent[] {
  const data = getFeedingData(stationId);
  const today = new Date().toDateString();
  return data.events.filter(
    (e) => new Date(e.timestamp).toDateString() === today
  );
}

export function getTodayCount(stationId: string): number {
  return getTodayEvents(stationId).length;
}

export function getAllStationsToday(stationIds: string[]): Record<string, number> {
  const result: Record<string, number> = {};
  for (const id of stationIds) {
    result[id] = getTodayCount(id);
  }
  return result;
}

export function getLastFedTime(stationId: string): Date | null {
  const events = getTodayEvents(stationId);
  if (events.length === 0) return null;
  return new Date(events[0].timestamp);
}
