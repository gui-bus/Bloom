# Documentação Técnica do Bloom

🇺🇸 [English Version](./README.en.md) | 🇧🇷 **Versão em Português**

Esta pasta contém o detalhamento técnico, arquitetura e decisões de design aplicadas no ecossistema Bloom.

---

## 📌 Guias Disponíveis

1. 🏗️ [**Arquitetura do Sistema (`architecture.md`)**](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/docs/architecture.md)
   * Detalhamento sobre a estrutura de diretórios do Next.js.
   * Fluxo de renderização client-side (`"use client"`) e build de otimização estática.
   * Suporte a múltiplos temas e renderização híbrida com Hydration.

2. 🎨 [**Diretrizes do Design System (`design-system.md`)**](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/docs/design-system.md)
   * Estrutura de arquivos e padrões exigidos para cada componente UI (`components/ui/[name]`).
   * Escala de tamanhos (`size`), cantos arredondados (`radius`), estados (`isLoading`, `isDisabled`), e variações visuais.
   * Centralização de tokens em variáveis CSS e no script `lib/design-system.ts`.

3. 💻 [**Instalação e Uso via CLI (`cli.md`)**](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/docs/cli.md)
   * Guia para desenvolvedores consumidores de como inicializar o Bloom em seus projetos (`npx @bloomui/cli init`) e instalar os componentes (`npx @bloomui/cli add [componente]`).

4. 🚀 [**Guia de Desenvolvimento e Publicação (`development.md`)**](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/docs/development.md)
   * Guia do proprietário do Bloom de como gerar o registro de componentes e publicar novas versões da CLI no NPM.

---

## 🚀 Como Expandir a Biblioteca

Ao criar um novo componente:
1. Sempre verifique as diretrizes em [**`design-system.md`**](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/docs/design-system.md).
2. Adicione os arquivos obrigatórios do componente: `[name].tsx`, `[name].code.ts` (código-fonte em string para visualização nas docs) e, opcionalmente, `[name].css.code.ts`.
3. Escreva testes de unidade sob a pasta `__tests__/` do respectivo componente usando o Vitest.
4. Registre o componente na sidebar para fácil acesso na documentação interativa local.
