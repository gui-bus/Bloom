# Changelog — Bloom

🇺🇸 **English Version** | 🇧🇷 [Versão em Português](./CHANGELOG.md)

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.3] - 2026-08-19

### New Features and Improvements 🎨
- **Tailwind v4 CSS Auto-Setup**: Added automatic detection and setup of `globals.css` (supporting Next.js structures) during `npx @bloomui-react/cli init`, provisioning custom components animations, variables, and utility classes directly into the project's globals file.
- **Smart Package Manager Enforcement**: Implemented a package manager verification script during `@bloomui-react/components` installation that checks the current running client against existing lockfiles (`pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`) to prevent package manager mismatches and lockfile corruption.
- **TypeScript Declarations Support**: Enabled TypeScript `.d.ts` declaration file generation during compilation of the `@bloomui-react/components` library for full, seamless IDE auto-import suggestions and type safety.

### Refactorings and Fixes ⚙️
- **Menubar Portability Fix**: Wrapped Radix UI sub-components in the `Menubar` to ensure complete, clean types definition and avoid TypeScript portable type compilation errors (TS2742).

## [1.0.2] - 2026-08-18

### New Features and Previews 🎨
- **Authentication Preview Route**: Added a new `/preview/auth` page showcasing 9 complete, production-ready auth layouts (Classic Card, Split Screen Banner, Modern Minimalist, Image Split Panel, OTP Verification, Social Login with Recent Accounts, Password Reset, Sign Up with Strength Meter, and Multi-Step Registration) fully built using Bloom components (`Card`, `Button`, `Input`, `PasswordInput`, `Stepper`, `Avatar`, `Separator`, and `Toast`).
- **Forms & CRUD Preview Route**: Created a new `/preview/forms` route containing 9 comprehensive form and data management templates (Profile Settings, Support Ticket, System Preferences, Project Task Creator, Job Application, Appointment Scheduler, Verification & Terms Pad, Customer Billing, and Member CRUD Manager).
- **Zod Validation & Form Wrapper**: Integrated schema-based Zod validation and `react-hook-form` state management using Bloom's native `<Form>` and `<FormField>` components across all 9 authentication and 9 form layouts for type-safe and realistic templates.
- **Responsive Device Simulator (`ResponsivePreview`)**: Designed a new preview simulator component in the docs (`components/core/docsComponent.tsx`) to preview components under Mobile (375px), Tablet (768px), and Desktop (100%) views.
- **Manual Drag Resizing**: Added native pointer-based drag handles allowing users to manually resize simulated device widths, restricted to a safe minimum width of `375px` (Mobile) to preserve layout responsiveness.
- **Context-Aware Simulation**: Introduced `DevicePreviewContext` to propagate the simulator's size state down to preview components, enabling dynamic column collapse and elements hiding in real-time during simulation.

### Refactorings and Fixes ⚙️
- **Checkbox Label Wrapping**: Removed `truncate` class from the `Checkbox` component's label and updated line-height from `leading-none` to `leading-tight`. This allows long terms and privacy policy labels to wrap correctly on mobile viewports.
- **Minimalist Clean Aesthetics**: Removed high-contrast gradients and sparkles icons from preview layouts, shifting to premium solid dark gray backgrounds (`bg-zinc-950` / `text-zinc-400`) and modern symbols (`lucide:command`) to prevent generic "AI-generated" looks.
- **Flat Border Styling**: Updated card preview variants from `"shadow"` to `"bordered"`, removing heavy shadows (`shadow-2xl` / `shadow-md`) to ensure consistent, premium flat design system aesthetics.

## [1.0.1] - 2026-08-17

### Refactorings and Improvements ⚙️
- **Accessibility (A11y)**: Added native keyboard navigation and action support (`Enter` / `Space`) to interactive `Card`, `Badge`, `Avatar` (both the main component and the editable overlay layer), `Select`, `Combobox`, and `DatePicker` (on main trigger buttons) components when the `isPressable`, `isEditable` or trigger active state is set. Additionally corrected `AlertDialog`, `Dialog`, `Drawer`, and `Sheet` behaviour to default to modal (`modal = true`) conforming with WAI-ARIA specs to restrict background interaction and trap focus correctly.
- **Accessibility Hook**: Created and applied a reusable `useKeyboardClick` hook in `lib/hooks` to manage keyboard click event interception cleanly and uniformly across the codebase.
- **Polymorphism**: Added support for the `asChild` property using `@radix-ui/react-slot` in `Card` and `Badge` components for flexible rendering of the output HTML element.
- **Performance Optimization**: Implemented recursive memoization (`React.memo`) on the internal `JsonNode` of the `JsonTreeViewer` component, preventing unnecessary re-renders of the entire data tree. Also memoized announcement carousel and dismissal callbacks (`React.useCallback`) in the `Banner` component. Optimized `ColorPicker` component by decoupling selector pointer state from canvas redraws and only re-rendering the HSL wheel on size changes, dramatically lowering drag CPU workload, and fixed `useMemo` dependency array bugs in `ButtonGroup`. Also added `requestAnimationFrame` throttling to `Tour` component scroll and resize listeners to prevent layout thrashing and scroll jank.
- **Code Structuring**: Extracted duplicate navigation lists from `Sidebar` and `DocsPagination` components into a single centralized source of truth in `lib/navigation.ts` for cleaner future maintenance. Added auto-sync support to global `useQueryState` hook by subscribing to window `"popstate"` history navigation events.
- **Sidebar Fixes**: Corrected the `scrollIntoView` effect dependency array to scroll dynamically to the active link on page navigation, and removed a redundant mobile mount effect.
- **Code Cleanup**: Removed inline `<style>` tag injection from the `Button` component, replacing the copy animation draw keyframe with a reactive native CSS transition.

## [1.0.0] - 2026-08-14

### Official Stable Release 🚀
This is the official stable release of Bloom version 1.0.0!

This version marks the first production-ready and stable release of the entire Bloom ecosystem, encompassing the suite of 98 UI components and integrated blocks, automated unit and integration tests (Vitest and Playwright), bilingual technical documentation, and the official command-line interface tool (`@bloomui-react/cli`) for hybrid installation.
