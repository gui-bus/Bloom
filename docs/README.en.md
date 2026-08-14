# Bloom Technical Documentation

🇺🇸 **English Version** | 🇧🇷 [Versão em Português](./README.md)

This folder contains technical details, architecture guidelines, and design decisions applied in the Bloom ecosystem.

---

## 📌 Available Guides

1. 🏗️ [**System Architecture (`architecture.en.md`)**](./architecture.en.md)
   * Details on Next.js folder structure.
   * Client-side rendering flow (`"use client"`) and static optimization builds.
   * Support for multiple themes and hybrid hydration rendering.

2. 🎨 [**Design System Guidelines (`design-system.en.md`)**](./design-system.en.md)
   * File structure and patterns required for each UI component (`components/ui/[name]`).
   * Size scale (`size`), rounded corners (`radius`), states (`isLoading`, `isDisabled`), and visual variations.
   * Centralizing tokens in CSS variables and the `lib/design-system.ts` script.

3. 💻 [**Installation and CLI Usage (`cli.en.md`)**](./cli.en.md)
   * Guide for developers on how to initialize Bloom in their projects (`npx @bloomui/cli init`) and install components (`npx @bloomui/cli add [component]`).

4. 🚀 [**Development & Publishing Guide (`development.en.md`)**](./development.en.md)
   * Maintainer guide on how to compile the component registry and publish new CLI versions on NPM.

---

## 🚀 How to Expand the Library

When creating a new component:
1. Always check the guidelines in [**`design-system.en.md`**](./design-system.en.md).
2. Add the required component files: `[name].tsx`, `[name].code.ts` (source code as string for docs page view), and optionally `[name].css.code.ts`.
3. Write unit tests under the component's `__tests__/` folder using Vitest.
4. Register the component in the sidebar for easy access in the local interactive docs.
