## ADDED Requirements

### Requirement: Profile displays user info card
The system SHALL display a profile card with user avatar (circular with pink border), name "Alejandro Ortiz", subtitle "Guadalajara Host City Fan", and an "Edit Profile" pink button.

#### Scenario: Profile card displayed
- **WHEN** profile screen loads
- **THEN** user avatar, name, subtitle, and edit button are visible in a glassmorphism card

### Requirement: Saved events list
The system SHALL display a "Saved Events" section with mock events. Each event shows an image, title, location/date, and a status badge (e.g. "Tickets Secured", "Interested").

#### Scenario: Events list displayed
- **WHEN** profile screen loads
- **THEN** saved events appear with title, subtitle, status badge, and a heart icon

### Requirement: Stats grid
The system SHALL display a 2-column grid with "4 Matches" and a badges count.

#### Scenario: Stats displayed
- **WHEN** profile screen loads
- **THEN** two stat cards show match count and badges count with pink accent

### Requirement: Settings icon
The system SHALL display a settings gear icon in the top-right corner of the profile card.

#### Scenario: Settings icon visible
- **WHEN** profile screen loads
- **THEN** a gear icon appears top-right of the card

### Requirement: Background with blur overlay
The system SHALL display the profile content over a blurred map background with dark overlay, matching the Figma design.

#### Scenario: Background rendered
- **WHEN** profile screen loads
- **THEN** a blurred background image with dark overlay is visible behind the card
