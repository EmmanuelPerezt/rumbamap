## Why

The app currently shows a login screen that navigates to the default Expo template (demo tabs with React Native boilerplate). We need to replace all placeholder screens with the actual app screens from the Figma design to have a fully functional maqueta with mock data, ready for real API integration. The app is a World Cup 2026 hospitality experience for Guadalajara.

## What Changes

- **Replace default tabs** with 3 real tabs: Map, Chat, Profile
- **Map screen (main)**: Google Maps centered on user location (fallback: La Minerva, Guadalajara), search bar, category filters (Matches, Hospitality, Transport), map markers for venues/events, bottom card showing upcoming highlight event, floating action buttons (compass, layers)
- **Chat screen**: AI assistant "Vibe" with mock conversation UI, message bubbles (user/assistant), typing indicator, message input with send button
- **Profile screen**: User profile card with avatar, name, subtitle, edit button, saved events list with status badges, stats grid (matches count, badges)
- **Event Detail screen**: Modal/push screen with event header, info grid (date, venue), social proof avatars, description text, action buttons (navigate, save)
- **Bottom navigation bar**: Glassmorphism pill-style nav with Map/Chat/Profile tabs, active state with pink highlight
- **Login → Map flow**: Google button on login navigates to the map tab (hardcoded, no real auth)

## Capabilities

### New Capabilities
- `map-screen`: Main map view with Google Maps, location permission, markers for events/venues, search bar, category filters, upcoming event card
- `chat-screen`: AI assistant chat interface with mock messages, typing indicator, message input
- `profile-screen`: User profile with avatar, stats, saved events list
- `event-detail`: Event detail view as modal/push screen with full event info and action buttons
- `bottom-nav`: Custom glassmorphism bottom navigation bar with 3 tabs (Map, Chat, Profile)
- `mock-data`: Centralized mock data for events, venues, user profile, chat messages

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- **Dependencies**: `react-native-maps` (Google Maps), `expo-location` (user location), `react-native-svg` (icons)
- **Navigation**: Root stack restructured — login → tabs (Map, Chat, Profile), event detail as modal
- **Files removed/replaced**: Default `(tabs)/index.tsx` (Home), `(tabs)/explore.tsx` (Explore), related demo components
- **Environment**: Requires `GOOGLE_MAPS_API_KEY` in env for map functionality (will be provided)
