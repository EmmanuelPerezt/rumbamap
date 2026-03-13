# AGENTS.md

Purpose: This file is for agentic coding tools operating in this repo.
Keep changes aligned with existing patterns and avoid inventing new ones.

Repo Summary
- Expo + React Native app using Expo Router (file-based routing).
- Screens live under `app/` with `(tabs)` group and stack routes.
- Styling uses `StyleSheet` and inline objects; icons via `react-native-svg`.
- Mock data and types are centralized in `data/` and `types/`.

Key Paths
- `app/`                Screens and layouts
- `components/`         UI components (tab bar, themed components)
- `data/mock.ts`        Mock data used by screens
- `types/index.ts`      Shared TypeScript interfaces
- `constants/theme.ts`  Theme tokens and font mapping
- `hooks/`              Theme/color scheme hooks

Build / Run / Lint / Test
- Install dependencies: `npm install`
- Start dev server: `npm run start`
- Run on Android: `npm run android`
- Run on iOS: `npm run ios`
- Run on web: `npm run web`
- Lint: `npm run lint`

Tests
- No test runner is configured in `package.json`.
- Single-test execution is not available yet.
- If tests are added later, document the exact command here.

Environment / Config
- Expo config is in `app.json`.
- Google Maps API keys are configured under `expo.ios.config` and `expo.android.config`.
- Do not commit secrets; use environment variables for real keys if requested.

Navigation Architecture
- Root stack layout: `app/_layout.tsx`.
- Login screen: `app/index.tsx`.
- Tabs layout: `app/(tabs)/_layout.tsx` uses a custom `TabBar`.
- Map tab: `app/(tabs)/index.tsx`.
- Chat tab: `app/(tabs)/chat.tsx`.
- Profile tab: `app/(tabs)/profile.tsx`.
- Event detail: `app/event/[id].tsx`.

Code Style Guidelines

General
- Use TypeScript everywhere; keep types explicit for data models and props.
- Prefer functional components and React hooks.
- Keep components in the same file if they are screen-specific.
- Keep reusable components in `components/`.

Imports
- Use absolute imports from root with `@/` alias when available.
  Example: `import { events } from '@/data/mock';`
- Order imports by source:
  1) React / RN / Expo
  2) Third-party packages
  3) Local absolute imports (`@/...`)
  4) Relative imports (avoid unless needed)
- Keep import lists alphabetized when reasonable.

Formatting
- Follow existing formatting in each file.
- Use 2 spaces for indentation (matches existing files).
- Prefer trailing commas in multiline objects and arrays.
- Keep JSX props aligned and readable; avoid overly long lines.
- Use `StyleSheet.create` for large style objects.

Types
- Define shared interfaces in `types/index.ts`.
- Export and reuse types rather than duplicating shapes.
- Prefer `type` for unions and `interface` for object shapes.
- Use string literal unions for constrained values (see `types/index.ts`).

Naming Conventions
- React components: `PascalCase`.
- Hooks: `useSomething`.
- Constants: `UPPER_SNAKE_CASE` or `CamelCase` for color tokens.
- Files: `kebab-case` or existing Expo Router conventions.
- Route files follow Expo Router conventions (e.g., `event/[id].tsx`).

State and Side Effects
- Use `useState`, `useEffect`, `useRef` as shown in screens.
- Keep effects scoped and guarded (e.g., permission checks in map screen).
- Avoid unnecessary state when data is derived from props or constants.

Error Handling
- For async side effects, wrap in `try/catch` and fail gracefully.
- Prefer user-friendly fallbacks (e.g., default location when permission denied).
- Avoid throwing from UI components.

Styling Patterns
- Use `StyleSheet.create` with grouped sections and comments.
- Keep design tokens as constants near the top of the file.
- Reuse colors from `constants/theme.ts` when appropriate.
- Glassmorphism patterns already exist; match those values when extending.

Icons
- Icons are hand-rolled via `react-native-svg` components in each screen.
- Keep icon components near the top of the file, above main UI components.

Mock Data
- Use `data/mock.ts` for any placeholder data.
- Keep mock data realistic and aligned with `types/index.ts`.
- Avoid adding inline mock data inside components.

Expo / Platform Notes
- Map screen uses `react-native-maps` and conditionally loads on web.
- Use `Platform` checks when needed to avoid web-only crashes.
- `expo-location` permissions should be requested only when necessary.

Performance
- Avoid inline style objects in large lists unless necessary.
- Memoize heavy derived values if performance becomes an issue.
- Keep map markers lightweight.

Git Hygiene
- Do not modify unrelated files.
- Avoid committing secrets (API keys, tokens).
- Keep changes focused and explain intent in commits.

Cursor / Copilot Rules
- No Cursor rules found in `.cursor/rules/` or `.cursorrules`.
- No Copilot instructions found in `.github/copilot-instructions.md`.

When Adding New Files
- Place screens in `app/` following Expo Router conventions.
- Add shared components to `components/`.
- Update `types/index.ts` and `data/mock.ts` if new data shapes are needed.

Documentation
- Update `README.md` only if setup commands or workflow change.

Notes for Agents
- This repo is a UI-heavy Expo app; match the visual language already used.
- Maintain Spanish copy where it exists; avoid mixing languages in a screen.
- Keep glassmorphism, shadows, and spacing consistent with existing screens.
