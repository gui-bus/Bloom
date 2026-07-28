# Bloom Design System Guidelines

This document specifies the architecture, folder structure, prop standards, and design system rules for Bloom components. Always adhere to these rules when creating or updating components.

## 1. Folder & File Structure

Every interactive UI component in `components/ui/` must reside in its own folder and follow this structure:
* **`[name].tsx`**: The React component source code. Uses `"use client"` if it has interactivity or hooks.
* **`[name].code.ts`**: Contains the raw string representation of `[name].tsx` exported as `[name]Code` (useful for displaying code snippets in documentation).
* **`[name].css.code.ts`**: (Optional) Exports raw CSS animation strings as `[name]CSSCode` if the component uses custom animations (e.g., keyframes for ripples, loaders).

## 2. Component Architecture & Stacking

* **Radix UI Primitives**: Use Radix primitives (e.g., `@radix-ui/react-slot` for polimorphism, `@radix-ui/react-tabs`) as base primitives.
* **Polymorphism**: Support `asChild?: boolean` prop using Radix's `<Slot>` component.
* **Tailwind & CVA**: 
  * Use `class-variance-authority` (`cva`) to handle structural and styling variants.
  * Use `cn(...)` from `@/lib/utils` to combine Tailwind classes.

## 3. Standard Prop Definitions

### Sizing (`size`)
Always use a subset or the full range of this semantic scale:
* `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"` | `"2xl"` | `"3xl"`

### Colors (`color`)
Standard color variants mapping to theme tokens:
* `"default"`
* `"primary"`
* `"secondary"`
* `"accent"`
* `"success"`
* `"warning"`
* `"danger"`
* `"custom"` (with optional `customColor?: string` supporting hex/arbitrary values)

### Styling Variants (`variant`)
Standard style variants where appropriate:
* `"default"` (solid backgrounds, shadow-md)
* `"bordered"` (transparent, border-2)
* `"light"` (transparent background, shadow-none, border-transparent)
* `"flat"` (subtle background tint, border-transparent)
* `"ghost"` (transparent, border-2, transitions to solid on hover/action)
* `"shadow"` (prominent shadow)
* `"link"` (behaves like a link, underlined text, transparent)
* `"underline"` (primarily for active tab indicators/borders)

### Radius (`radius`)
Standard border-radius:
* `"none"` | `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"` | `"2xl"` | `"3xl"` | `"full"`

### Content Slots
* `startContent?: React.ReactNode` - Elements (like icons) rendered before children.
* `endContent?: React.ReactNode` - Elements (like icons) rendered after children.
* `badgeContent?: string` - Small badge/count indicator.
* `badgePosition?: "start" | "end"` - Where to render the badge (defaults to `"end"`).
* `badgeCustomClassname?: string` - Optional Tailwind classes to style the badge.

### States
* `isLoading?: boolean` - Render a spinner (default or custom `loadingIcon`) and optionally replace/prepend to the text with `loadingText`.
* `isDisabled?: boolean` - Map to the native `disabled` attribute, set `aria-disabled`, and dim opacity with `cursor-not-allowed`.
* `isIconOnly?: boolean` - Removes extra padding and sets `aspect-square`. Requires `ariaLabel: string` for accessibility.

### Micro-Interactions (Ripples)
* Standard interactive components (buttons, tabs, items) should support ripples unless `disableRipple?: boolean` is set.
* Use `Ripple` from `@/components/utils/ripple/ripple` and the `useRipples` hook from `@/hooks/ripple/useRipple`.
