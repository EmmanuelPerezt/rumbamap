## ADDED Requirements

### Requirement: Centralized mock data file
The system SHALL provide a single `data/mock.ts` file with all mock data used across screens.

#### Scenario: Mock data importable
- **WHEN** any screen imports from `@/data/mock`
- **THEN** typed mock data for events, venues, profile, and messages is available

### Requirement: TypeScript interfaces for all data
The system SHALL define interfaces in `types/index.ts` for: Event, Venue, UserProfile, ChatMessage, MapMarker.

#### Scenario: Types available
- **WHEN** a component references mock data
- **THEN** TypeScript provides full type checking and autocompletion

### Requirement: Mock events with coordinates
The system SHALL include at least 3 mock events with: id, title, subtitle, description, date, venue name, coordinates (lat/lng), type, image placeholder, and attendee count.

#### Scenario: Events have map coordinates
- **WHEN** map renders markers
- **THEN** each event has valid Guadalajara-area coordinates

### Requirement: Mock chat messages
The system SHALL include at least 4 mock chat messages alternating between user and assistant, with timestamps.

#### Scenario: Chat messages available
- **WHEN** chat screen loads
- **THEN** mock messages render with correct sender and timestamp

### Requirement: Mock user profile
The system SHALL include a mock user profile with name "Alejandro Ortiz", subtitle "Guadalajara Host City Fan", stats (4 matches, 12 badges), and saved event IDs.

#### Scenario: Profile data available
- **WHEN** profile screen loads
- **THEN** user name, subtitle, and stats render from mock data
