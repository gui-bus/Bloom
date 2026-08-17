# Changelog — Bloom

🇺🇸 **English Version** | 🇧🇷 [Versão em Português](./CHANGELOG.md)

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.1] - 2026-08-17

### Refactorings and Improvements ⚙️
- **Accessibility (A11y)**: Added native keyboard navigation and action support (`Enter` / `Space`) to interactive `Card`, `Badge`, `Avatar` (both the main component and the editable overlay layer), `Select`, `Combobox`, and `DatePicker` (on main trigger buttons) components when the `isPressable`, `isEditable` or trigger active state is set. Additionally corrected `AlertDialog`, `Dialog`, `Drawer`, and `Sheet` behaviour to default to modal (`modal = true`) conforming with WAI-ARIA specs to restrict background interaction and trap focus correctly.
- **Accessibility Hook**: Created and applied a reusable `useKeyboardClick` hook in `lib/hooks` to manage keyboard click event interception cleanly and uniformly across the codebase.
- **Polymorphism**: Added support for the `asChild` property using `@radix-ui/react-slot` in `Card` and `Badge` components for flexible rendering of the output HTML element.
- **Performance Optimization**: Implemented recursive memoization (`React.memo`) on the internal `JsonNode` of the `JsonTreeViewer` component, preventing unnecessary re-renders of the entire data tree. Also memoized announcement carousel and dismissal callbacks (`React.useCallback`) in the `Banner` component. Optimized `ColorPicker` component by decoupling selector pointer state from canvas redraws and only re-rendering the HSL wheel on size changes, dramatically lowering drag CPU workload, and fixed `useMemo` dependency array bugs in `ButtonGroup`.
- **Code Structuring**: Extracted duplicate navigation lists from `Sidebar` and `DocsPagination` components into a single centralized source of truth in `lib/navigation.ts` for cleaner future maintenance.
- **Sidebar Fixes**: Corrected the `scrollIntoView` effect dependency array to scroll dynamically to the active link on page navigation, and removed a redundant mobile mount effect.
- **Code Cleanup**: Removed inline `<style>` tag injection from the `Button` component, replacing the copy animation draw keyframe with a reactive native CSS transition.

## [1.0.0] - 2026-08-14

### Official Stable Release 🚀
This is the official stable release of Bloom version 1.0.0!

This version marks the first production-ready and stable release of the entire Bloom ecosystem, encompassing the suite of 98 UI components and integrated blocks, automated unit and integration tests (Vitest and Playwright), bilingual technical documentation, and the official command-line interface tool (`@bloomui-react/cli`) for hybrid installation.
