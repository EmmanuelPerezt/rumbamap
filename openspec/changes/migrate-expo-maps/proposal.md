## Why

The app currently fails to bundle on Android because `react-native-maps` cannot resolve `MapMarkerNativeComponent`. We need to fix the native setup and configuration for `react-native-maps` to restore the map screen without changing the map library.

## What Changes

- Keep `react-native-maps` and correct native/config setup to resolve Android bundling errors.
- Adjust map imports and platform guards to avoid loading native modules on web.
- Verify markers and map rendering continue to work with existing mock data.
- Update configuration and dependencies as needed for `react-native-maps` in Expo.

## Capabilities

### New Capabilities
- `map-provider`: Map rendering and marker display powered by `react-native-maps` with a stable native setup.

### Modified Capabilities
- (none)

## Impact

- Affected code: `app/(tabs)/index.tsx`, map-related platform guards.
- Dependencies: keep `react-native-maps`; adjust versions/config as needed.
- Configuration: verify `app.json` and Expo config for Maps support on Android/iOS.
