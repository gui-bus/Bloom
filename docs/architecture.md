# Arquitetura do Sistema — Bloom

Este documento especifica a infraestrutura técnica do portal de documentação e da biblioteca de componentes do Bloom.

---

## 🏛️ Estrutura de Pastas do Monorepo

```bash
├── __tests__/           # Configurações globais e mocks do Vitest
├── app/                  # Rotas e páginas da documentação (Next.js App Router)
│   ├── components/       # Páginas de visualização dos componentes (Button, Tabs, Stepper, etc.)
│   ├── globals.css       # Estilos globais e tokens dinâmicos do Tailwind v4
│   └── layout.tsx        # Layout mestre com Sidebar, SEO Metadata e Providers
├── components/           # Componentes do ecossistema
│   ├── core/             # Componentes da Doc (Sidebar, CodeBlock, DocsComponent)
│   ├── ui/               # Biblioteca de componentes exportável (Button, Carousel, Breadcrumb, etc.)
│   └── utils/            # Utilitários globais de comportamento (Ripple)
├── docs/                 # Documentação técnica e arquitetura do projeto
├── e2e/                  # Testes funcionais de ponta a ponta (Playwright)
├── hooks/                # Hooks globais de comportamento (useRipple)
├── lib/                  # Utilitários de estilo (cn) e Tokens (design-system.ts)
├── public/               # Ativos estáticos, logotipos e registro estático de componentes
│   └── registry/         # JSONs do registro de componentes consumidos pela CLI
├── scripts/              # Scripts de build do registro de componentes (build-registry.js)
└── todo/                 # Lista e acompanhamento de tarefas (components.md)
```

---

## 🎨 Gerenciamento de Temas (Claro e Escuro) & SEO Dinâmico

1. **Gestão de Temas (`next-themes`):**
   * **Hydration Guard:** Cabeçalhos dinâmicos e logotipos SVG utilizam verificação de montagem (`mounted`) para evitar divergências de servidor/cliente (Hydration Mismatch).
   * **Design Tokens CSS:** Variáveis sob `@theme` no `globals.css` garantem troca de cor instantânea sem custo computacional em JS.

2. **SEO & Títulos da Aba do Navegador:**
   * O layout raiz (`app/layout.tsx`) define a máscara de título `%s — Bloom UI` e meta tags OpenGraph/Twitter.
   * Páginas de componentes exportam metadados de servidor (`export const metadata: Metadata`) enquanto a lógica interativa (como `useState`) é encapsulada em sub-componentes client-side dedicados.

---

## ⚙️ Exibição Explícita de Código

Para garantir precisão total na documentação:
* Todo `DocsComponent` consome trechos explícitos de código JSX com componentes reais (`<Button>`, `<Carousel>`, `<Breadcrumb>`, `<Stepper>`).
* Trechos genéricos ou placeholders auto-gerados como `<Component>` e `<Lazy>` são estritamente evitados.
* O componente `CodeBlock` oferece syntax highlighting formatado e botão de cópia em um clique.

---

## 🧪 Estrutura de Qualidade e Testes

A qualidade do ecossistema é validada em duas frentes de execução:
1. **Vitest (Unidade):** Executa suítes de testes para cada componente UI (`components/ui/[name]/__tests__/`) rodando sob `jsdom` com mocks de `ResizeObserver` e `PointerEvent`.
2. **Playwright (E2E):** Sobe servidor local estático para validar fluxos de navegação na sidebar, responsividade e interações.
