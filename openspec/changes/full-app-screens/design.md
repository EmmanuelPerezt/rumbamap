## Context

Expo Router app with file-based routing. Currently: login screen (`app/index.tsx`) → default Expo demo tabs. Stack uses `expo-router`, styling via `StyleSheet`, icons via `react-native-svg`. The Figma design shows 4 main screens (Map, Chat, Profile, Event Detail) plus a custom bottom nav with glassmorphism style. All data will be mocked for now but structured for future API integration.

**Design system from Figma:**
- Primary color: `#f1277b` (pink)
- Text: `#0f172a` (dark), `#475569` (body), `#64748b` (muted), `#94a3b8` (light)
- Glassmorphism: `rgba(255,255,255,0.7)` bg + `backdrop-blur(6px)` + white border
- Fonts: Plus Jakarta Sans (body), Playfair Display Bold Italic (accents)
- Border radius: 16px (cards), 24px (buttons/large cards), 9999px (pills/nav)

## Goals / Non-Goals

**Goals:**
- Replace all demo screens with Figma-matching screens using mock data
- Implement Google Maps on main screen with location permission flow
- Structure mock data centrally for easy swap to real APIs later
- Custom bottom tab bar matching Figma glassmorphism design
- Event detail as push/modal screen from map

**Non-Goals:**
- Real authentication (Google button is hardcoded)
- Real AI chat (mock conversation only)
- Real-time data or API integration
- Push notifications
- Custom fonts (will use system fonts, can add later)

## Decisions

### 1. Navigation structure
```
app/
  index.tsx              → Login screen
  (tabs)/
    _layout.tsx          → Custom tab bar (Map, Chat, Profile)
    index.tsx            → Map screen (main tab)
    chat.tsx             → Chat screen
    profile.tsx          → Profile screen
  event/[id].tsx         → Event detail (push screen from map)
```
**Rationale:** Expo Router file-based routing. Tabs group for the 3 main screens. Event detail outside tabs as a stack push so it covers the full screen.

### 2. Map implementation
- Use `react-native-maps` with Google Maps provider
- `expo-location` for user permission + current position
- Default coordinates: La Minerva, Guadalajara (20.6736, -103.3695)
- Map markers from mock data array with coordinates, type, and label
- Google Maps API key via `EXPO_PUBLIC_GOOGLE_MAPS_API_KEY` env var

**Rationale:** `react-native-maps` is the standard for Expo. La Minerva is a recognizable Guadalajara landmark as default fallback.

### 3. Mock data layer
- Single file `data/mock.ts` exporting typed arrays/objects
- Events, venues, user profile, chat messages all in one place
- TypeScript interfaces for all data types in `types/index.ts`

**Rationale:** Centralized mock data makes it trivial to swap for API calls later. Types ensure consistency.

### 4. Custom tab bar
- Custom `TabBar` component replacing default Expo Router tab bar
- Glassmorphism style: blurred white background, rounded pill shape
- Active tab: pink background with white icon/text
- Inactive tab: gray icon/text

**Rationale:** The Figma design has a very specific tab bar that can't be achieved with default styling options.

### 5. Event detail navigation
- Route: `app/event/[id].tsx` — dynamic route with event ID
- Presented as stack push (full screen, with back button)
- Bottom sheet style with drag handle (visual only for now)

## Risks / Trade-offs

- [Google Maps on Android emulator can be slow] → Acceptable for maqueta, real device testing recommended
- [No real auth means no session state] → Login just navigates to tabs, `router.replace` prevents back to login
- [Mock data won't reflect real API shapes] → Mitigated by defining TypeScript interfaces upfront
- [System fonts instead of Plus Jakarta Sans] → Visual difference from Figma is minor, fonts can be added later via `expo-font`
