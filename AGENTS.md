# Antigravity AI Agent Rules & Context

Welcome, Agent. This file acts as the primary reference point to maintain the consistency of Bloom's design system and components development.

## 📌 Critical Guidelines

* **Design System Reference**: Always check and follow the guidelines in [docs/design-system.md](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/docs/design-system.md) before creating, modifying, or refactoring components.
* **Consistency**: Do not introduce ad-hoc sizes, colors, or file architectures. Every component folder must strictly follow the `[name].tsx`, `[name].code.ts`, and optionally `[name].css.code.ts` file patterns.
* **Convention**: Ensure all components export their raw source code as strings in `[name].code.ts` so they can be consumed by the documentation site.
* **Documentation & Props Tables**: Every component page (`app/components/[name]/page.tsx`) must include a full API Reference table detailing all supported props (Name, Type, Default, Description).

