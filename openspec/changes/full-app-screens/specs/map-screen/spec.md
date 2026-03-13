## ADDED Requirements

### Requirement: Map displays Google Maps centered on user location
The system SHALL display a Google Map. It SHALL request location permission and center on the user's current position. If permission is denied or unavailable, it SHALL default to La Minerva, Guadalajara (20.6736, -103.3695).

#### Scenario: Location permission granted
- **WHEN** user grants location permission
- **THEN** map centers on user's current GPS coordinates with zoom level ~14

#### Scenario: Location permission denied
- **WHEN** user denies location permission
- **THEN** map centers on La Minerva (20.6736, -103.3695) with zoom level ~13

### Requirement: Map shows event/venue markers
The system SHALL render markers on the map for each event and venue from mock data. Markers SHALL be visually distinct by type (match, hospitality, transport).

#### Scenario: Markers rendered from mock data
- **WHEN** map loads
- **THEN** all mock events/venues appear as markers at their coordinates

### Requirement: Search bar displayed at top
The system SHALL display a search bar with placeholder "Explore Guadalajara..." above the map. The search bar is visual-only (no real search functionality).

#### Scenario: Search bar visible
- **WHEN** map screen is displayed
- **THEN** a glassmorphism search bar appears at the top with a search icon and microphone icon

### Requirement: Category filter pills
The system SHALL display horizontal filter pills below the search bar: Matches, Hospitality, Transport. Active filter has pink border.

#### Scenario: Filter pills displayed
- **WHEN** map screen loads
- **THEN** three filter pills are visible: Matches (active by default), Hospitality, Transport

### Requirement: Upcoming event card at bottom
The system SHALL display a card at the bottom of the map showing the next upcoming event with image, title, subtitle, and a pink arrow button.

#### Scenario: Event card displayed
- **WHEN** map screen loads
- **THEN** a glassmorphism card shows "Upcoming Highlight" with event name, venue, and time

#### Scenario: Event card tap navigates to detail
- **WHEN** user taps the arrow button on the event card
- **THEN** app navigates to the event detail screen for that event

### Requirement: Header with title
The system SHALL display a header with "Guadalajara" in bold and "2026" in pink italic, with a hamburger menu icon (left) and notification bell icon (right).

#### Scenario: Header displayed
- **WHEN** map screen loads
- **THEN** header shows "Guadalajara 2026" with menu and notification icons
