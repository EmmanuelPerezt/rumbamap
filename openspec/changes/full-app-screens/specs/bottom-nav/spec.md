## ADDED Requirements

### Requirement: Custom glassmorphism tab bar
The system SHALL replace the default tab bar with a custom pill-shaped glassmorphism navigation bar with 3 tabs: Map, Chat, Profile.

#### Scenario: Tab bar displayed
- **WHEN** any tab screen is active
- **THEN** a rounded pill tab bar with blurred white background appears at the bottom

### Requirement: Active tab highlight
The system SHALL highlight the active tab with a pink (#f1277b) background pill, white icon and text. Inactive tabs show gray icons and text.

#### Scenario: Active tab styling
- **WHEN** Map tab is selected
- **THEN** Map tab has pink background with white icon/text, Chat and Profile are gray

### Requirement: Tab bar icons
The system SHALL display icons for each tab: Map (location/pin icon), Chat (message bubble icon), Profile (person icon).

#### Scenario: Icons match design
- **WHEN** tab bar renders
- **THEN** each tab shows its corresponding SVG icon with label below
