# Changelog

Todo o histórico de alterações notáveis do projeto **Bloom** será registrado neste arquivo.

O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e este projeto segue o versionamento semântico.

---

## [Unreleased]

### Added
* Criada toda a suíte de testes unitários com **Vitest** e **React Testing Library** sob JSDOM.
* Criada a bateria de testes de ponta a ponta (E2E) com o **Playwright**.
* Adicionado workflow automatizado de CI/CD via **GitHub Actions** (`ci.yml`) para validar builds, tipos e testes a cada push ou PR.
* Adicionados mocks globais de `ResizeObserver` e `PointerEvent` para viabilizar testes estáveis com componentes Radix UI.
* Criada a aba de visualização automática de código JSX no componente genérico `DocsComponent` utilizando o pacote `react-element-to-jsx-string`.
* Criada aba de visualização do código-fonte para o componente `ButtonGroup`.

### Changed
* **Redesenho da Sidebar:** Layout redesenhado para visual premium, com nova navegação de categorias, efeito glassmorphic e botões adaptativos.
* **Alternador de Tema Premium:** O alternador simples do cabeçalho foi removido e substituído por um controle deslizante segmentado de luz/escuridão fixado no rodapé da sidebar.
* **Internacionalização da Doc:** Traduzida e padronizada toda a página de documentação do componente `Tabs` para o idioma inglês.
* **Refatoração de Performance:** Extraídos mapas de classes de variantes CVA para fora dos escopos de renderização nos componentes `Button`, `ButtonGroup` e `Tabs` para mitigar overhead de Garbage Collection.
* **Centralização de Design Tokens:** Unificados todos os mapeamentos de tamanhos, cores semânticas e cantos arredondados sob o arquivo compartilhado `lib/design-system.ts`.
* **Estrutura de Cabeçalhos:** Ajustado o componente `DocsTitle` para renderizar títulos principais como tag `h1` em vez de `h2`, otimizando a indexação SEO.

### Removed
* Removido o rótulo de rodapé `"Version v0.1.0"` da sidebar.
* **Limpeza de Código:** Criado e executado um script utilitário em Node.js (`clean-comments.js`) que removeu todos os comentários de linha legados (`//`), diretivas de região (`#region`) e comentários JSX desnecessários de toda a base de código, mantendo exclusivamente JSDocs relevantes.

---

## [0.1.0] - 2026-07-28

### Added
* Criação inicial da biblioteca de componentes e do portal de documentação local.
* Implementação dos componentes iniciais: `Button`, `ButtonGroup` e `Tabs`.
* Integração estrutural com o `next-themes` para suporte a temas claro/escuro.
* Migração do ecossistema de pacotes de `npm` para **`pnpm`** visando velocidade e resolução estrita de dependências fantasmas.
* Atualização em lote de todas as dependências do projeto para as versões seguras mais recentes.
* Travamento da versão do TypeScript em `~6.0.3` para manter compatibilidade estrita com a compilação do Next.js.
