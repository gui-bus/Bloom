# System Architecture — Bloom

🇺🇸 **English Version** | 🇧🇷 [Versão em Português](./architecture.md)

This document specifies the technical infrastructure of the documentation portal and the Bloom component library.

---

## 🏛️ Monorepo Folder Structure

```bash
├── __tests__/           # Global Vitest configuration and mocks
├── app/                  # Documentation pages and routes (Next.js App Router)
│   ├── components/       # Component preview pages (Button, Tabs, Stepper, etc.)
│   ├── globals.css       # Global styles and Tailwind v4 dynamic tokens
│   └── layout.tsx        # Master layout with Sidebar, SEO Metadata, and Providers
├── components/           # Ecosystem components
│   ├── core/             # Doc components (Sidebar, CodeBlock, DocsComponent)
│   ├── ui/               # Exportable component library (Button, Carousel, Breadcrumb, etc.)
│   └── utils/            # Global behavior utilities (Ripple)
├── docs/                 # Technical documentation and project architecture
├── e2e/                  # End-to-end functional tests (Playwright)
├── hooks/                # Global behavior hooks (useRipple)
├── lib/                  # Style utilities (cn) and Tokens (design-system.ts)
├── public/               # Static assets, logos, and static component registry
│   └── registry/         # Component registry JSONs consumed by the CLI
├── scripts/              # Component registry build scripts (build-registry.js)
└── todo/                 # Task list and tracking (components.md)
```

---

## 🎨 Theme Management (Light and Dark) & Dynamic SEO

1. **Theme Management (`next-themes`):**
   * **Hydration Guard:** Dynamic headers and SVG logos use mount checks (`mounted`) to prevent server/client discrepancies (Hydration Mismatch).
   * **CSS Design Tokens:** Variables under `@theme` in `globals.css` guarantee instant color switching with zero JS computational cost.

2. **SEO & Browser Tab Titles:**
   * The root layout (`app/layout.tsx`) defines the `%s — Bloom UI` title template and OpenGraph/Twitter meta tags.
   * Component pages export server metadata (`export const metadata: Metadata`) while interactive logic (like `useState`) is encapsulated in dedicated client-side sub-components.

---

## ⚙️ Explicit Code Display

To guarantee absolute accuracy in the documentation:
* Every `DocsComponent` consumes explicit JSX code snippets containing actual components (`<Button>`, `<Carousel>`, `<Breadcrumb>`, `<Stepper>`).
* Generic code snippets or auto-generated placeholders like `<Component>` and `<Lazy>` are strictly avoided.
* The `CodeBlock` component provides formatted syntax highlighting and a one-click copy button.

---

## 🧪 Quality and Testing Structure

Ecosystem quality is validated in two execution fronts:
1. **Vitest (Unit):** Runs unit test suites for each UI component (`components/ui/[name]/__tests__/`) under `jsdom` with mocks for `ResizeObserver` and `PointerEvent`.
2. **Playwright (E2E):** Starts a local static server to validate sidebar navigation flows, responsiveness, and copy actions.
