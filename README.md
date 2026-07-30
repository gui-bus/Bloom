<div align="center">
  <br/>
  <br/>
  <img src="./public/logo/logo_white.svg" alt="BLOOM Logo" width="280" />
  <br/>
  <br/>
  <img src="https://img.shields.io/badge/Status-Em%20Constru%C3%A7%C3%A3o-orange?style=for-the-badge" alt="Status: Em Construção" />
</div>

<br />

## 🌟 Visão Geral

O **Bloom** é uma biblioteca profissional de componentes de interface (UI) premium baseada em React 19, Next.js 16, Radix UI e Tailwind CSS v4. Desenvolvida sob rígidos padrões de performance e acessibilidade, a biblioteca centraliza tokens de design em variáveis CSS semânticas e mapas de JavaScript estruturados, possibilitando a consistência completa de temas claro/escuro e adaptações visuais instantâneas.

A biblioteca inclui controles de layout robustos, animações fluidas via Framer Motion, e uma suíte completa de testes de regressão de comportamento e integração automatizados.

## 🚀 Deploy & Demonstração

O projeto de documentação e demonstração interativa dos componentes estará disponível no seguinte endereço:
👉 **[https://bloom.guibus.dev/](https://bloom.guibus.dev/)**

---

## 📦 CLI — Instale os Componentes no Seu Projeto

<div align="center">
  <a href="https://www.npmjs.com/package/@bloomui-react/cli">
    <img src="https://img.shields.io/npm/v/@bloomui-react/cli?style=for-the-badge&color=cb3837&logo=npm&logoColor=white" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@bloomui-react/cli">
    <img src="https://img.shields.io/npm/dm/@bloomui-react/cli?style=for-the-badge&color=cb3837&logo=npm&logoColor=white" alt="npm downloads" />
  </a>
</div>

O Bloom disponibiliza uma **CLI oficial** que permite inicializar o design system e adicionar componentes diretamente no seu projeto, sem precisar clonar este repositório.

```bash
# 1. Inicialize o Bloom no seu projeto
npx @bloomui-react/cli init

# 2. Adicione o componente desejado
npx @bloomui-react/cli add button
```

A CLI detecta automaticamente o seu gerenciador de pacotes (`npm`, `pnpm`, `yarn` ou `bun`), instala todas as dependências necessárias e copia o código-fonte do componente com os caminhos de importação já configurados para a sua estrutura de projeto.

👉 **[Veja o guia completo de uso da CLI](./docs/cli.md)**

## 🛠️ Stack Tecnológica

<div align="center">
  <img alt="React" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/React.svg">
  <img alt="NextJS" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/NextJS.svg">
  <img alt="Typescript" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Typescript.svg">
  <img alt="TailwindCSS" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/TailwindCSS.svg">
  <img alt="Radix" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Radix.svg">
  <img alt="Framer Motion" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Framer%20Motion.svg">
  <img alt="pnpm" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/pnpm.svg">
  <img alt="Vitest" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Vitest.svg">
  <img alt="Playwright" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Playwright.svg">
  <img alt="Biome" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Biome.svg">
  <img alt="Github Actions" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Github%20Actions.svg">
</div>

---

## 🏛️ Arquitetura do Sistema

O Bloom baseia sua arquitetura na separação clara entre a camada de lógica estrutural, design tokens compartilhados e infraestrutura de validação:

```mermaid
graph TB
    subgraph Client ["🎨 Frontend & Documentation Page"]
        DocPage["📄 Next.js App Router Pages"]
        DocsComponent["⚙️ DocsComponent (Explicit Code Snippets)"]
        UI["🧩 Component Instances (Button, Accordion, Carousel, Stepper, etc.)"]
    end

    subgraph Core ["💎 Design Tokens & Semantics"]
        Tokens["lib/design-system.ts (Radius, Sizes, Colors)"]
        GlobalsCSS["globals.css (@theme & CSS Variables)"]
    end

    subgraph Engine ["🛠️ Core Component Stack"]
        CVA["class-variance-authority"]
        Radix["@radix-ui/primitives"]
        Motion["framer-motion"]
        Embla["embla-carousel-react"]
    end

    subgraph CI ["🧪 Testing & Quality Gate"]
        Vitest["🧪 Vitest + JSDOM (Unit Tests)"]
        Playwright["🎭 Playwright (E2E Integration)"]
        Actions["🚀 GitHub Actions Workflow"]
    end

    DocPage -->|Exibe| DocsComponent
    DocsComponent -->|Gera visualizações do| UI
    UI -->|Consome tokens de| Tokens
    UI -->|Aplica estilos de| GlobalsCSS
    UI -->|Utiliza| CVA
    UI -->|Baseado em| Radix
    UI -->|Animado por| Motion
    UI -->|Carrosséis por| Embla
    
    UI -.->|Validado por| Vitest
    DocPage -.->|Automatizado por| Playwright
    Vitest -.->|Garante aprovação no| Actions
    Playwright -.->|Garante aprovação no| Actions
```

---

## 🚀 Componentes Implementados

| Componente | Categoria | Descrição |
| :--- | :--- | :--- |
| **🔘 Button** | Inputs & Controles | Ripple effect interno, estados loading/disabled, tamanhos, cores e polimorfismo. |
| **🗂️ Button Group** | Inputs & Controles | Junção fluida de múltiplos botões com propagação automática de propriedades. |
| **📁 Tabs** | Navegação | Abas animadas sincronizadas com `framer-motion` e Radix. |
| **🗺️ Breadcrumb** | Navegação | Trilha hierárquica acessível com ícones e suporte a `DropdownMenu` na elipse. |
| **🔢 Pagination** | Navegação | Controles de paginação sem salto de URL com salto para primeira/última página e modo compacto. |
| **🪜 Stepper** | Navegação | Indicador de etapas para wizards com suporte a clique, estados de erro e modo vertical. |
| **⌨️ Kbd** | Navegação | Indicador visual de teclas e atalhos do teclado. |
| **Dropdown Menu** | Overlays & Feedback | Menu suspenso flutuante com itens, grupos, separadores e atalhos de teclado. |
| **📂 Accordion** | Layout & Exibição | Lista de seções expansíveis/recolhíveis via Radix com rotação animada. |
| **🖼️ Aspect Ratio** | Layout & Exibição | Contêiner de proporção fixa para mídia responsiva. |
| **👤 Avatar / Avatar Group** | Layout & Exibição | Foto de perfil com fallback de iniciais e pilha de avatares com contador. |
| **🏷️ Badge** | Layout & Exibição | Rótulo compacto com variantes, pontos de status e ícones. |
| **🎠 Carousel** | Layout & Exibição | Galeria deslizante via Embla com autoplay, pause no hover, orientação vertical e pontos. |
| **📐 Collapsible** | Layout & Exibição | Elemento expansível/recolhível com animação de altura. |
| **🔲 Resizable** | Layout & Exibição | Painéis redimensionáveis com divisores arrastáveis via `react-resizable-panels`. |
| **📜 Scroll Area** | Layout & Exibição | Área de rolagem estilizada via Radix integrada à barra lateral da aplicação. |
| **➖ Separator** | Layout & Exibição | Divisor visual horizontal ou vertical com suporte a labels e gradientes. |
| **🦴 Skeleton** | Layout & Exibição | Placeholder animado estilo pulse para conteúdos em carregamento. |
| **🌀 Spinner** | Layout & Exibição | Indicador de carregamento rotativo com tamanhos e cores semânticas. |

---

## 🧪 Testes Automatizados

O ecossistema Bloom adota uma cobertura de testes automatizada para assegurar estabilidade em cada refatoração:

```mermaid
flowchart LR
    subgraph Unit ["🧪 Vitest (Suíte Unitária)"]
        U1["21 Arquivos de Teste"]
        U2["57+ Assertivas Unitárias"]
    end

    subgraph E2E ["🎭 Playwright (Suíte E2E)"]
        E1["Navegação da Sidebar"]
        E2["Alternância de Temas"]
        E3["Ações de Cópia de Código"]
    end
```

### 🚀 Comandos de Execução

```bash
# Rodar suíte de testes unitários com Vitest
pnpm test:unit

# Rodar suíte de testes E2E com Playwright
pnpm test:e2e
```

---

## 🏁 Inicialização Local

### 1. Clonar e Instalar

```bash
git clone https://github.com/gui-bus/Bloom.git
cd Bloom
pnpm install
```

### 2. Rodar Ambiente de Desenvolvimento

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para explorar o portal de documentação interativo.

---

## 📑 Documentação Técnica Adicional

Consulte a pasta [`/docs`](./docs/README.md) para detalhamentos adicionais de arquitetura:

* 📦 [**`docs/cli.md`**](./docs/cli.md): Guia de uso da CLI — como inicializar e instalar componentes no seu projeto.
* 🏗️ [**`docs/architecture.md`**](./docs/architecture.md): Especificação do Next.js App Router, layout e pipeline de build.
* 🎨 [**`docs/design-system.md`**](./docs/design-system.md): Detalhamento da paleta de cores, escala de tamanhos, cantos arredondados (radius) e regras para novos componentes.
