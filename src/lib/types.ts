export interface Station {
  id: string;
  name: string;
  description: string;
  location: string;
  animals: AnimalType[];
  emoji: string;
}

export type AnimalType = 'kedi' | 'köpek';

export interface FeedingEvent {
  id: string;
  stationId: string;
  timestamp: string;
}

export interface StationFeedingData {
  events: FeedingEvent[];
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  emoji: string;
}
