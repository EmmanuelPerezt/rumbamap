## 1. Dependencies & Config

- [x] 1.1 Verify `react-native-maps` version compatibility with Expo SDK 54
- [x] 1.2 Review `app.json` and Expo config for required Maps settings and keys

## 2. Map Screen Fixes

- [x] 2.1 Adjust map imports and platform guards to avoid web bundling issues
- [x] 2.2 Confirm map props/markers remain compatible with `react-native-maps`
- [x] 2.3 Verify location permission flow and fallback to `DEFAULT_LOCATION`
- [x] 2.4 Keep web fallback view behavior consistent with current UI

## 3. Verification

- [ ] 3.1 Validate Map tab renders on Android emulator without bundling errors
- [ ] 3.2 Smoke-check iOS build or simulator if available
