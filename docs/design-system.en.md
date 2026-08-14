# Design System Guidelines — Bloom

🇺🇸 **English Version** | 🇧🇷 [Versão em Português](./design-system.md)

This document specifies the design architecture, folder structure, properties (props) standards, and rules of the Bloom ecosystem. Always follow these rules when creating or updating components.

---

## 1. File Structure

Each interactive UI component in the `components/ui/` folder must reside in its own folder and strictly follow this file pattern:
* **`[name].tsx`**: The component's React source code. It must contain the `"use client"` directive if there are hooks or direct interactivity.
* **`[name].code.ts`**: Contains the raw source code of `[name].tsx` exported as the string `[name]Code` (essential for displaying the complete component code in the technical documentation tabs).
* **`[name].css.code.ts`**: (Optional) Contains raw CSS animation strings exported as `[name]CSSCode` if the component has custom animations needed (e.g. keyframes for loaders or ripples).

---

## 2. Component Architecture & Neutral Color Rule

* **Neutral Themes Standardization**:
  * Containers for cards, modals, drawers, and surfaces must **ALWAYS** use pure white (`bg-white`) in light mode and neutral dark tones (`bg-zinc-900`, `dark:bg-zinc-900`, `border-zinc-200`, `dark:border-zinc-800`) in dark mode.
  * **DO NOT** use bluish or color-tinted backgrounds in card containers.
  * Status colors (`info`, `success`, `warning`, `danger`, etc.) must be applied **ONLY** to titles, icons, badges, status indicators, or small visual accents.
* **Radix UI Primitives**: Always use Radix primitives (such as `@radix-ui/react-slot` for polymorphism, `@radix-ui/react-dialog`, `@radix-ui/react-tabs`) as the structural base to guarantee native accessibility (WAI-ARIA).
* **Polymorphism**: Support the `asChild?: boolean` property using Radix's `<Slot>` component to allow changing the base HTML element while preserving styling props.
* **Tailwind & CVA**:
  * Use the `class-variance-authority` (`cva`) library to model visual and structural variants.
  * Use the `cn(...)` utility from `@/lib/utils` to safely combine classes without style conflicts.

---

## 3. Properties (Props) Standards

### Size Scale (`size`)
Always use the following unified semantic scale:
* `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"` | `"2xl"` | `"3xl"`

### Color Palette (`color`)
Standardized semantic color variations mapped according to the theme:
* `"default"`
* `"primary"`
* `"secondary"`
* `"accent"`
* `"success"`
* `"warning"`
* `"danger"`
* `"custom"` (used in conjunction with `customColor?: string` to support arbitrary HEX codes)

### Style Variations (`variant`)
Standardized visual styles:
* `"default"` (solid backgrounds and moderate shadow)
* `"bordered"` (transparent background, thin 1px border)
* `"light"` (transparent background, no shadows or borders by default)
* `"flat"` (subtle background with theme color transparency, no border)
* `"ghost"` (transparent by default, transition to solid background on hover/focus)
* `"shadow"` (pronounced projected shadow based on color)
* `"link"` (underlined text behavior on hover, no borders or backgrounds)
* `"underline"` (for active indicators or tabs)
* `"contained"` (for groupings with a softened background)
* `"pills"` (for pill-format navigators with rounded borders)

### Rounded Corners (`radius`)
Rounded corners scale:
* `"none"` | `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"` | `"2xl"` | `"3xl"` | `"full"`

### Additional Slots
* `startContent?: React.ReactNode` - Elements (like icons) rendered before the child text.
* `endContent?: React.ReactNode` - Elements rendered after the child text.
* `badgeContent?: string` - Integrated numerical or status indicator.
* `badgePosition?: "start" | "end"` - Badge display position (default is `"end"`).
* `badgeCustomClassname?: string` - Additional classes to style the badge.

### Standard States
* `isLoading?: boolean` - Renders a rotating indicator (spinner) and optionally updates the text to `loadingText`.
* `isDisabled?: boolean` - Binds to the native HTML `disabled` attribute, applies `aria-disabled="true"`, and the visual `cursor-not-allowed` class.
* `isIconOnly?: boolean` - Removes excess padding and forces a square aspect ratio (`aspect-square`). Requires active `ariaLabel: string`.

---

## 4. Documentation and Props Tables

Every component documentation page in `app/components/[name]/page.tsx` **must**:
1. The first section of the page **MUST** have the title **"Default"**.
2. Include at the end of the page an **API Reference / Props Table** section, detailing in an HTML table all supported properties (Prop, Type, Default, Description).
3. Always provide a `code` prop for each `<DocsComponent />` containing an explicit string of the actual JSX component (e.g. `<Button>`, `<Avatar>`, `<Separator>`). It is **forbidden** to use automatic generators or generic/placeholder snippets like `<Component>` and `<Lazy>`.
