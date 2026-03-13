## ADDED Requirements

### Requirement: Event detail shows full event info
The system SHALL display event detail with: featured tag, event title, info grid (date, venue), description text, and action buttons.

#### Scenario: Event detail displayed
- **WHEN** user navigates to event detail
- **THEN** full event info is displayed with header, info grid, description, and actions

### Requirement: Info grid with date and venue
The system SHALL display a 2-column grid showing date/time and venue with icons.

#### Scenario: Info grid displayed
- **WHEN** event detail loads
- **THEN** date card shows "June 18, 8:00 PM" and venue card shows "Estadio Akron"

### Requirement: Social proof section
The system SHALL display overlapping user avatars with text like "120+ fans attending".

#### Scenario: Social proof displayed
- **WHEN** event detail loads
- **THEN** 3 overlapping avatar circles and attendance text are visible

### Requirement: Action buttons
The system SHALL display two action buttons: "Navigate" (pink, primary) and "Save" (outline).

#### Scenario: Navigate button displayed
- **WHEN** event detail loads
- **THEN** a pink "Navigate" button and a "Save" button are visible at the bottom

### Requirement: Back navigation
The system SHALL display a back arrow button that returns to the previous screen.

#### Scenario: Back button works
- **WHEN** user taps back button
- **THEN** app navigates back to the map screen

### Requirement: Bottom sheet visual style
The system SHALL display the event content in a card with rounded top corners and a drag handle, simulating a bottom sheet.

#### Scenario: Bottom sheet style
- **WHEN** event detail loads
- **THEN** content appears in a rounded card with a centered drag handle at the top
