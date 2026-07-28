# Arquitetura do Sistema — Bloom

Este documento especifica a infraestrutura técnica do portal de documentação e da biblioteca de componentes do Bloom.

---

## 🏛️ Estrutura de Pastas do Monorepo

```bash
├── .github/workflows/    # Esteira de Integração Contínua (GitHub Actions)
├── __tests__/           # Configurações globais e mocks do Vitest
├── app/                  # Rotas e páginas da documentação (Next.js App Router)
│   ├── components/       # Páginas de visualização dos componentes (Button, Tabs, etc.)
│   ├── globals.css       # Estilos globais e tokens dinâmicos do Tailwind v4
│   └── layout.tsx        # Layout mestre com Sidebar e Providers
├── components/           # Componentes do ecossistema
│   ├── core/             # Componentes da Doc (Sidebar, CodeBlock, DocsComponent)
│   ├── ui/               # Biblioteca de componentes exportável (Button, Tabs)
│   └── utils/            # Utilitários globais de comportamento (Ripple)
├── e2e/                  # Testes funcionais de ponta a ponta (Playwright)
├── hooks/                # Hooks globais de comportamento (useRipple)
├── lib/                  # Utilitários de estilo (cn) e Tokens (design-system.ts)
└── public/               # Ativos estáticos e logotipos (logo_white.svg, logo_black.svg)
```

---

## 🎨 Gerenciamento de Temas (Claro e Escuro)

Para alternar de forma fluida entre o tema claro e escuro, o Bloom utiliza o `next-themes`:
1. **Hydration Guard:** Todos os cabeçalhos de imagem dinâmica (como os logotipos SVG preto e branco da marca) utilizam um estado de montagem (`mounted`) para evitar incompatibilidades de renderização (Hydration mismatch) na primeira carga do servidor.
2. **Design Tokens:** As cores básicas do sistema estão mapeadas como variáveis de ambiente CSS sob as diretrizes `@theme` do Tailwind CSS v4 no arquivo `globals.css`. Desta forma, classes do Tailwind como `bg-background` e `text-foreground` se adaptam instantaneamente ao tema ativo sem custo de processamento Javascript.

---

## ⚙️ Visualizador de Código Dinâmico e Automatizado

Para evitar a necessidade de reescrever e atualizar manualmente trechos de código representados em strings estáticas na documentação de uso do componente, o Bloom utiliza uma engine baseada em `react-element-to-jsx-string`:

* O componente **`DocsComponent`** intercepta o nó React do `preview` do exemplo.
* Converte esse nó em string JSX dinâmica, limpando propriedades redundantes e callbacks de simulação.
* Envelopa o resultado em um componente de cópia interativa e destaque de sintaxe (`CodeBlock` com `highlight.js`).
* Isso garante que qualquer correção de design ou refatoração no componente físico seja automaticamente atualizada nas abas de código de uso das páginas de documentação.

---

## 🧪 Estrutura de Qualidade e Testes

A qualidade do ecossistema é validada em duas frentes de execução:
1. **Vitest (Unidade):** Roda sob um ambiente emulado de DOM (`jsdom`). Para que os componentes da Radix UI (como o `Tabs`) executem sem estourar exceções, o arquivo global de setup injeta mocks locais de `ResizeObserver` e `PointerEvent`.
2. **Playwright (E2E):** Sobe um servidor de teste temporário, inicia instâncias reais do navegador Chromium e realiza fluxos de testes de clique de sidebar, alternâncias de tema físico e chamadas do clipboard da máquina (com mock injetado em script inicial da página).
