# Antigravity AI Agent Rules & Context

Welcome, Agent. This file acts as the primary reference point to maintain the consistency of Bloom's design system and components development.

## 📌 Critical Guidelines

* **Design System Reference**: Always check and follow the guidelines in [docs/design-system.md](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/docs/design-system.md) before creating, modifying, or refactoring components.
* **Consistency**: Do not introduce ad-hoc sizes, colors, or file architectures. Every component folder must strictly follow the `[name].tsx`, `[name].code.ts`, and optionally `[name].css.code.ts` file patterns.
* **Neutral Theme Color Standardization**: Card and container backgrounds must ALWAYS use pure white (`bg-white`) for light mode and neutral dark grays (`bg-zinc-900`, `dark:bg-zinc-900`, `border-zinc-200`, `dark:border-zinc-800`) for dark mode. Do NOT use bluish or tinted background colors for card containers. Status colors (`info`, `success`, `warning`, `danger`, etc.) must ONLY be applied to titles, icons, badges, or small accents, keeping card backgrounds clean and neutral.
* **Convention**: Ensure all components export their EXACT, 100% FULL and COMPLETE raw source code as strings in `[name].code.ts` matching `[name].tsx` line-for-line without any truncation, placeholders, or abbreviated snippets, so users can copy-paste the entire working component.
* **Documentation & Props Tables**: Every component page (`app/components/[name]/page.tsx`) must include a full API Reference table detailing all supported props (Name, Type, Default, Description).
* **Explicit Code Snippets**: Every `DocsComponent` in documentation pages must provide an explicit string for the `code` prop showcasing real JSX components (e.g. `<Button>`, `<Avatar>`). Auto-generated string representations or generic placeholders like `<Component>` and `<Lazy>` are strictly forbidden.
* **Language Standardization**: ALWAYS use English for ALL text across all components, UI strings, labels, placeholders, documentation pages, toast messages, and code comments. Portuguese text is strictly forbidden.
* **No Non-Essential Comments**: Do NOT add non-essential, decorative, section-header, or explanatory comments inside component code files. Keep code clean, concise, and comment-free unless strictly required.
* **Preserve Existing Functionality & Docs**: ALWAYS retain all pre-existing component props, variants, features, and documentation examples when fulfilling feature requests. Never remove or truncate existing capabilities or page sections unless explicitly directed by the user.



