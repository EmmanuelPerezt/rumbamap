import type { ChatMessage, Event, MapMarker, UserProfile, Venue } from '@/types';

// La Minerva, Guadalajara - default center
export const DEFAULT_LOCATION = {
  latitude: 20.6736,
  longitude: -103.3695,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export const events: Event[] = [
  {
    id: '1',
    title: 'México vs Alemania',
    subtitle: 'Group Stage',
    description:
      'Vive la atmósfera eléctrica en el Estadio Akron cuando los favoritos locales México se enfrenten a la potencia Alemania en un enfrentamiento crucial de la fase de grupos. Espera una noche de fútbol de alta intensidad, talento de clase mundial y momentos inolvidables en Guadalajara.',
    date: 'June 18',
    time: '8:00 PM',
    venueName: 'Estadio Akron',
    coordinate: { latitude: 20.6819, longitude: -103.4624 },
    type: 'match',
    attendeeCount: 120,
    isFeatured: true,
    status: 'tickets-secured',
  },
  {
    id: '2',
    title: 'FIFA Fan Festival™',
    subtitle: 'Fan Zone',
    description:
      'Disfruta de la fiesta oficial de la FIFA con pantallas gigantes, música en vivo, y la mejor comida de Guadalajara. Un evento gratuito para todos los aficionados.',
    date: 'June 20',
    time: '12:00 PM',
    venueName: 'Plaza de la Liberación',
    coordinate: { latitude: 20.6775, longitude: -103.3472 },
    type: 'festival',
    attendeeCount: 500,
    status: 'interested',
  },
  {
    id: '3',
    title: 'Brasil vs Japón',
    subtitle: 'Group Stage',
    description:
      'Un emocionante encuentro entre la selección brasileña y Japón en la fase de grupos del Mundial 2026.',
    date: 'June 22',
    time: '4:00 PM',
    venueName: 'Estadio Akron',
    coordinate: { latitude: 20.6819, longitude: -103.4624 },
    type: 'match',
    attendeeCount: 95,
    status: 'going',
  },
  {
    id: '4',
    title: 'Cultural Night GDL',
    subtitle: 'Hospitality Event',
    description:
      'Una noche de cultura tapatía con mariachi, tequila y gastronomía local en el corazón de Guadalajara.',
    date: 'June 19',
    time: '7:00 PM',
    venueName: 'Instituto Cultural Cabañas',
    coordinate: { latitude: 20.6742, longitude: -103.3396 },
    type: 'fanzone',
    attendeeCount: 200,
  },
];

export const venues: Venue[] = [
  {
    id: 'v1',
    name: 'Estadio Akron',
    type: 'stadium',
    coordinate: { latitude: 20.6819, longitude: -103.4624 },
    address: 'Av. Circunvalación Nte 3250, Zapopan',
  },
  {
    id: 'v2',
    name: 'Hotel Demetria',
    type: 'hotel',
    coordinate: { latitude: 20.6717, longitude: -103.3782 },
    address: 'Av. de la Paz 2219, Col. Lafayette',
  },
  {
    id: 'v3',
    name: 'Estación de Tren Ligero',
    type: 'transport',
    coordinate: { latitude: 20.6753, longitude: -103.3647 },
    address: 'Av. Federalismo Sur, Guadalajara',
  },
];

export const mapMarkers: MapMarker[] = [
  ...events.map((e) => ({
    id: `event-${e.id}`,
    coordinate: e.coordinate,
    type: e.type === 'match' ? ('match' as const) : ('hospitality' as const),
    title: e.title,
    subtitle: `${e.date} • ${e.venueName}`,
  })),
  ...venues
    .filter((v) => v.type === 'transport')
    .map((v) => ({
      id: `venue-${v.id}`,
      coordinate: v.coordinate,
      type: 'transport' as const,
      title: v.name,
      subtitle: v.address,
    })),
];

export const userProfile: UserProfile = {
  id: 'u1',
  name: 'Alejandro Ortiz',
  subtitle: 'Guadalajara Host City Fan',
  matchesCount: 4,
  badgesCount: 12,
  savedEventIds: ['1', '2'],
};

export const chatMessages: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'assistant',
    text: '¡Hola Alejandro! 👋 Soy Vibe, tu asistente personal para el Mundial 2026 en Guadalajara. ¿En qué puedo ayudarte hoy? Puedo recomendarte eventos, restaurantes o ayudarte con transporte.',
    timestamp: '10:30 AM',
  },
  {
    id: 'm2',
    sender: 'user',
    text: '¡Hola! Quiero conocer lugares típicos de Guadalajara para visitar entre los partidos. ¿Qué me recomiendas?',
    timestamp: '10:32 AM',
  },
  {
    id: 'm3',
    sender: 'assistant',
    text: '¡Excelente pregunta! Guadalajara tiene lugares increíbles. Te recomiendo visitar el centro histórico: la Catedral, el Teatro Degollado y el Instituto Cultural Cabañas (Patrimonio de la Humanidad).',
    timestamp: '10:33 AM',
  },
  {
    id: 'm4',
    sender: 'assistant',
    text: 'También te recomiendo Tlaquepaque para artesanías y El Parián para disfrutar de mariachi en vivo. ¡Es una experiencia única!',
    timestamp: '10:33 AM',
    imageUrl: 'https://picsum.photos/200/128',
    imageCaption: 'El Parián, Tlaquepaque',
  },
];
