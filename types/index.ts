export interface MapMarker {
  id: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  type: 'match' | 'hospitality' | 'transport';
  title: string;
  subtitle?: string;
}

export interface Event {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  time: string;
  venueName: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  type: 'match' | 'festival' | 'fanzone';
  imageUrl?: string;
  attendeeCount: number;
  isFeatured?: boolean;
  status?: 'tickets-secured' | 'interested' | 'going';
}

export interface Venue {
  id: string;
  name: string;
  type: 'stadium' | 'restaurant' | 'hotel' | 'transport';
  coordinate: {
    latitude: number;
    longitude: number;
  };
  address: string;
}

export interface UserProfile {
  id: string;
  name: string;
  subtitle: string;
  avatarUrl?: string;
  matchesCount: number;
  badgesCount: number;
  savedEventIds: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  imageUrl?: string;
  imageCaption?: string;
}
