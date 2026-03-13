## Context

The Map tab uses `react-native-maps` and fails to bundle on Android because `MapMarkerNativeComponent` cannot be resolved. The app is an Expo Router project with a map-heavy home screen and mock data markers. The goal is to fix the native setup and module resolution for `react-native-maps` in the Expo environment to restore builds without changing the map library.

## Goals / Non-Goals

**Goals:**
- Render the map screen on iOS/Android using `react-native-maps` without bundling errors.
- Preserve current UI/UX: search bar, filters, markers, and event card.
- Maintain the existing web fallback (non-native map placeholder).
- Keep the location permission flow and default region behavior.

**Non-Goals:**
- Migrating to a different map library.
- New map features (routing, clustering, offline maps).
- Reworking mock data or navigation flow.

## Decisions

- **Keep `react-native-maps` and fix native setup/config.**
  - Rationale: The current UI and map features already use `react-native-maps`; fixing configuration avoids a larger refactor.
  - Alternatives: Migrate to `expo-maps`; deferred in favor of the smaller fix.

- **Keep `expo-location` for user location and permission flow.**
  - Rationale: Current UX already depends on location permission; the module is already in use and stable in Expo.
  - Alternatives: Remove permission flow or defer to OS-level location without explicit request; rejected because it changes UX.

- **Retain a web fallback view instead of attempting web maps.**
  - Rationale: The existing design uses a placeholder on web; adding web maps is out of scope and adds complexity.
  - Alternatives: Add a web map provider; deferred for later.

- **Keep mock data structure and marker mapping.**
  - Rationale: Markers are sourced from `data/mock.ts` and should remain compatible with future APIs.
  - Alternatives: Redesign data structures; out of scope.

## Risks / Trade-offs

- [Native config drift] → `react-native-maps` may require native setup or config changes in Expo; mitigate by aligning to Expo/React Native Maps docs and validating config.
- [Web bundling issues] → Importing native modules on web can crash bundling; mitigate with conditional require and platform guards.
- [Android build variability] → Emulator/device differences may surface; mitigate by testing on emulator and real device if possible.

## Migration Plan

1. Verify `react-native-maps` version compatibility with Expo SDK 54.
2. Review and align `app.json` config (Google Maps keys) and any required Expo config plugins.
3. Ensure map imports and platform guards avoid web bundling issues.
4. Validate Android build; confirm `MapMarkerNativeComponent` resolution succeeds.
5. Smoke-check iOS build or simulator if available.

## Open Questions

- What exact `react-native-maps` version/config is recommended for Expo SDK 54?
- Are additional config plugins or Metro settings required to resolve `MapMarkerNativeComponent`?
- What is the expected behavior on web (keep placeholder vs. minimal map)?
