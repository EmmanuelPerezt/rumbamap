## 1. Foundation

- [ ] 1.1 Install dependencies: react-native-maps, expo-location
- [ ] 1.2 Create TypeScript interfaces in `types/index.ts`
- [ ] 1.3 Create mock data file `data/mock.ts` with events, venues, profile, chat messages

## 2. Navigation & Tab Bar

- [ ] 2.1 Create custom glassmorphism tab bar component `components/tab-bar.tsx`
- [ ] 2.2 Restructure `app/(tabs)/_layout.tsx` with Map/Chat/Profile tabs and custom tab bar
- [ ] 2.3 Remove old demo files (explore.tsx, demo components)
- [ ] 2.4 Update `app/_layout.tsx` to add event detail route

## 3. Map Screen

- [ ] 3.1 Create `app/(tabs)/index.tsx` — Google Map with location permission, default to La Minerva
- [ ] 3.2 Add header with "Guadalajara 2026" title, menu and notification icons
- [ ] 3.3 Add search bar (visual only) with glassmorphism style
- [ ] 3.4 Add category filter pills (Matches, Hospitality, Transport)
- [ ] 3.5 Add map markers from mock data
- [ ] 3.6 Add upcoming event card at bottom with navigation to event detail
- [ ] 3.7 Add floating action buttons (compass, layers)

## 4. Chat Screen

- [ ] 4.1 Create `app/(tabs)/chat.tsx` with chat header (Vibe assistant info)
- [ ] 4.2 Add message list with user/assistant bubbles from mock data
- [ ] 4.3 Add typing indicator with animated dots
- [ ] 4.4 Add message input bar with attachment and send buttons

## 5. Profile Screen

- [ ] 5.1 Create `app/(tabs)/profile.tsx` with blurred background overlay
- [ ] 5.2 Add profile card with avatar, name, subtitle, edit button
- [ ] 5.3 Add saved events list with status badges
- [ ] 5.4 Add stats grid (matches, badges)
- [ ] 5.5 Add settings icon and section header with "See All"

## 6. Event Detail

- [ ] 6.1 Create `app/event/[id].tsx` with bottom sheet visual style
- [ ] 6.2 Add event header (featured tag, title)
- [ ] 6.3 Add info grid (date, venue)
- [ ] 6.4 Add social proof section (avatars, attendance count)
- [ ] 6.5 Add description and action buttons (Navigate, Save)
- [ ] 6.6 Add back navigation

## 7. Integration & Polish

- [ ] 7.1 Verify login → map navigation flow
- [ ] 7.2 Verify event card → event detail navigation
- [ ] 7.3 Test build compiles successfully
