# Diretrizes do Design System — Bloom

🇺🇸 [English Version](./design-system.en.md) | 🇧🇷 **Versão em Português**

Este documento especifica a arquitetura de design, estrutura de pastas, padrões de propriedades (props) e regras do ecossistema Bloom. Siga sempre estas regras ao criar ou atualizar componentes.

---

## 1. Estrutura de Arquivos

Cada componente de interface interativo na pasta `components/ui/` deve residir em sua própria pasta e seguir estritamente este padrão de arquivos:
* **`[name].tsx`**: O código-fonte React do componente. Deve conter a diretiva `"use client"` se houver hooks ou interatividade direta.
* **`[name].code.ts`**: Contém o código-fonte cru de `[name].tsx` exportado como a string `[name]Code` (essencial para exibir o código completo do componente nas abas de documentação técnica).
* **`[name].css.code.ts`**: (Opcional) Contém strings de animações CSS cruas exportadas como `[name]CSSCode` se o componente possuir animações customizadas necessárias (ex: keyframes de loaders ou ripples).

---

## 2. Arquitetura de Componentes & Regra de Cores Neutras

* **Padronização de Temas Neutros**:
  * Contêineres de cards, modais, gavetas e superfícies devem **SEMPRE** utilizar branco puro (`bg-white`) no modo claro e tons neutros escuros (`bg-zinc-900`, `dark:bg-zinc-900`, `border-zinc-200`, `dark:border-zinc-800`) no modo escuro.
  * **NÃO** utilize fundos azulados ou com tintas coloridas em contêineres de cards.
  * Cores de status (`info`, `success`, `warning`, `danger`, etc.) devem ser aplicadas **APENAS** em títulos, ícones, badges, indicadores de status ou pequenos acentos visuais.
* **Radix UI Primitives**: Sempre utilize primitivos Radix (como `@radix-ui/react-slot` para polimorfismo, `@radix-ui/react-dialog`, `@radix-ui/react-tabs`) como a base estrutural para garantir acessibilidade nativa (WAI-ARIA).
* **Polimorfismo**: Dê suporte à propriedade `asChild?: boolean` utilizando o componente `<Slot>` da Radix para permitir a troca do elemento HTML base preservando as props de estilo.
* **Tailwind & CVA**:
  * Utilize a biblioteca `class-variance-authority` (`cva`) para modelar as variantes visuais e estruturais.
  * Utilize o utilitário `cn(...)` de `@/lib/utils` para combinar classes de forma segura sem conflitos de estilo.

---

## 3. Padrão de Propriedades (Props)

### Escala de Tamanhos (`size`)
Utilize sempre a seguinte escala semântica unificada:
* `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"` | `"2xl"` | `"3xl"`

### Paleta de Cores (`color`)
Variações de cores semânticas padronizadas mapeadas de acordo com o tema:
* `"default"`
* `"primary"`
* `"secondary"`
* `"accent"`
* `"success"`
* `"warning"`
* `"danger"`
* `"custom"` (utilizado em conjunto com `customColor?: string` para suportar códigos HEX arbitrários)

### Variações de Estilo (`variant`)
Estilos visuais padronizados:
* `"default"` (fundos sólidos e sombra moderada)
* `"bordered"` (fundo transparente, borda fina de 1px)
* `"light"` (fundo transparente, sem sombras ou bordas por padrão)
* `"flat"` (fundo sutil com transparência da cor temática, sem borda)
* `"ghost"` (transparente por padrão, migrando para fundo sólido no hover/foco)
* `"shadow"` (sombra projetada acentuada baseada na cor)
* `"link"` (comportamento de texto sublinhado sob hover, sem bordas ou fundos)
* `"underline"` (para indicadores ou abas ativas)
* `"contained"` (para agrupamentos com fundo suavizado)
* `"pills"` (para navegadores em formato pílula com bordas arredondadas)

### Cantos Arredondados (`radius`)
Escala de cantos arredondados:
* `"none"` | `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"` | `"2xl"` | `"3xl"` | `"full"`

### Slots Adicionais
* `startContent?: React.ReactNode` - Elementos (como ícones) renderizados antes do texto filho.
* `endContent?: React.ReactNode` - Elementos renderizados após o texto filho.
* `badgeContent?: string` - Indicador numérico ou de status integrado.
* `badgePosition?: "start" | "end"` - Posição de exibição do badge (padrão é `"end"`).
* `badgeCustomClassname?: string` - Classes adicionais para estilizar o badge.

### Estados Padrão
* `isLoading?: boolean` - Renderiza um indicador giratório (spinner) e opcionalmente atualiza o texto para `loadingText`.
* `isDisabled?: boolean` - Vincula ao atributo nativo `disabled` do HTML, aplica `aria-disabled="true"` e a classe visual `cursor-not-allowed`.
* `isIconOnly?: boolean` - Remove padding excedente e força proporção quadrada (`aspect-square`). Exige `ariaLabel: string` ativa.

---

## 4. Documentação e Tabelas de Props

Toda página de documentação de componente em `app/components/[name]/page.tsx` **deve**:
1. A primeira seção da página **DEVE** ter obrigatoriamente o título **"Default"**.
2. Incluir no final da página uma seção **API Reference / Props Table**, detalhando em tabela HTML todas as propriedades suportadas (Prop, Type, Default, Description).
3. Fornecer obrigatoriamente para cada `<DocsComponent />` uma prop `code` contendo uma string explícita do JSX real do componente (ex: `<Button>`, `<Avatar>`, `<Separator>`). É **proibido** utilizar geradores automáticos ou trechos genéricos/placeholders como `<Component>` e `<Lazy>`.
