## ADDED Requirements

### Requirement: Native map rendering
The Map screen SHALL render a map view on iOS and Android using `react-native-maps`.

#### Scenario: Map screen loads on native
- **WHEN** the user opens the Map tab on iOS or Android
- **THEN** a native map view is displayed without runtime import or bundling errors

### Requirement: Marker display from mock data
The Map screen SHALL render markers for each entry in the `mapMarkers` dataset with visual styling based on marker type.

#### Scenario: Markers render for all entries
- **WHEN** the map view is displayed
- **THEN** all `mapMarkers` entries are visible as markers with type-based styling

### Requirement: Location centering and fallback
The Map screen SHALL request foreground location permission and center the map on the user location when granted, otherwise fall back to the default location.

#### Scenario: Permission granted
- **WHEN** the user grants foreground location permission
- **THEN** the map centers on the current device location

#### Scenario: Permission denied or unavailable
- **WHEN** the user denies permission or location is unavailable
- **THEN** the map centers on the default location
