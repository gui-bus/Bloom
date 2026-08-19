# Changelog — Bloom

🇺🇸 [English Version](./CHANGELOG.en.md) | 🇧🇷 **Versão em Português**

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [1.0.10] - 2026-08-19

### Novas Funcionalidades e Melhorias 🎨
- **Auto-Configuração de CSS do Tailwind v4**: Adicionada a detecção automática e configuração do arquivo `globals.css` (com suporte a projetos Next.js) durante o `npx @bloomui-react/cli init`, inserindo diretamente as variáveis, animações e classes utilitárias no arquivo de estilos globais do projeto.
- **Injeção Automática da Diretiva `@source`**: O CLI agora injeta automaticamente a diretiva `@source "../node_modules/@bloomui-react/components"` no `globals.css` do projeto host ao rodar `init`, posicionada corretamente após `@import "tw-animate-css"`. Funciona tanto para arquivos CSS existentes quanto para novos — sem necessidade de configuração manual.
- **Validação Inteligente do Gerenciador de Pacotes**: Desenvolvido script de validação executado durante a instalação do pacote `@bloomui-react/components` que impede a execução sob gerenciador incorreto de acordo com os arquivos de lockfile existentes (`pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`), evitando conflitos de pacotes e corrupção de arquivos de lock.
- **Geração de Tipos TypeScript (DTS)**: Ativada a compilação e exportação de arquivos de declaração `.d.ts` na build do pacote de componentes, permitindo sugestões automáticas de importação pelo IDE (auto-import) e tipagem estática integrada.
- **Instalação das Dependências Requeridas no CLI**: Adicionado o pacote `tw-animate-css` à lista de dependências instaladas automaticamente na inicialização (`init`) e verificadas no diagnóstico de saúde (`doctor`), solucionando erros de compilação de CSS nos projetos clientes.
- **Ajuste na Mensagem de Confirmação do CLI**: Corrigida a pergunta de instalação do CLI para listar todas as dependências requeridas (`tailwind-merge`, `clsx`, `lucide-react` e `tw-animate-css`) que serão instaladas caso estejam ausentes.

### Refatorações e Correções ⚙️
- **Correção de Tipos do Menubar**: Envolvidos sub-componentes do `Menubar` herdados do Radix UI em wrappers React funcionais explícitos, corrigindo erros de portabilidade de tipos não nomeados (TS2742).
- **Correção de Require Dinâmico no Next.js**: Configurados `next`, `next/image` e `next/link` como dependências externas na configuração do tsup, prevenindo erros de execução do Turbopack ("dynamic usage of require is not supported") e reduzindo significativamente o tamanho final do bundle.
- **Página de Instalação Simplificada**: Removido o passo manual de configuração da diretiva `@source` do guia de instalação via NPM, já que o CLI agora realiza essa configuração automaticamente ao rodar `init`.

## [1.0.2] - 2026-08-18

### Novas Funcionalidades e Previews 🎨
- **Páginas de Preview de Autenticação**: Adicionada uma nova rota `/preview/auth` com 9 templates e layouts completos de autenticação (Classic Card, Split Screen Banner, Modern Minimalist, Image Split Panel, OTP Verification, Social Login with Recent Accounts, Password Reset, Sign Up with Strength Meter e Multi-Step Registration) integrando os componentes da biblioteca Bloom (incluindo `Card`, `Button`, `Input`, `PasswordInput`, `Stepper`, `Avatar`, `Separator` e `Toast`).
- **Páginas de Preview de Formulários e CRUD**: Criada a nova rota `/preview/forms` contendo 9 templates completos de formulários (Profile Settings, Support Ticket, System Preferences, Project Task Creator, Job Application, Appointment Scheduler, Verification & Terms Pad, Customer Billing e Member CRUD Manager).
- **Validação com Zod e Componente Form**: Integrada a validação de formulários baseada em esquemas Zod e gerenciamento com `react-hook-form` através do componente unificado `<Form>` e `<FormField>` da Bloom, aplicados em todos os 9 exemplos de autenticação e 9 de formulários, proporcionando uma experiência de desenvolvimento tipada e integrada.
- **Simulador de Dispositivos Responsivo (`ResponsivePreview`)**: Criado um novo componente simulador na documentação (`components/core/docsComponent.tsx`) que permite visualizar os componentes em visualizações Mobile (375px), Tablet (768px) e Desktop (100%).
- **Ajuste de Tamanho Manual (Resize)**: Integrado suporte a redimensionamento manual livre por arrasto utilizando eventos de ponteiro nativos, limitado a uma largura mínima de `375px` para preservar a responsividade e integridade dos layouts.
- **Responsividade Inteligente via Contexto**: Desenvolvido um contexto de visualização (`DevicePreviewContext`) para propagar o estado do simulador responsivo para os componentes internos, adaptando colunas e visibilidade de elementos complexos em tempo real durante a simulação.

### Refatorações e Correções ⚙️
- **Ajuste de Quebra de Texto no Checkbox**: Removida a propriedade `truncate` do label interno do componente `Checkbox` e alterado o espaçamento de entrelinhas de `leading-none` para `leading-tight`. Isso permite que textos longos de termos e políticas de privacidade quebrem de linha e se ajustem corretamente em telas mobile.
- **Ajustes de Design Minimalista**: Removido o uso de gradientes chamativos e ícones de *sparkles* nos layouts de preview de autenticação, adotando tons de cinza neutros (`bg-zinc-950` / `text-zinc-400`) e ícones minimalistas (`lucide:command`) para manter o design profissional, limpo e livre de estéticas artificiais (estilo IA).
- **Simplificação e Remoção de Sombras**: Alterados os cartões de preview para o padrão `variant="bordered"`, eliminando sombras pesadas e drop shadows (`shadow-2xl` / `shadow-md`) e mantendo a consistência do sistema de design flat.

## [1.0.1] - 2026-08-17

### Refatorações e Melhorias ⚙️
- **Acessibilidade (A11y)**: Adicionado suporte nativo a navegação e ações por teclado (`Enter` / `Espaço`) nos componentes interativos `Card`, `Badge`, `Avatar` (tanto no componente principal quanto na camada de overlay editável), `Select`, `Combobox` e `DatePicker` (nos botões de gatilho/trigger principais) quando a propriedade `isPressable`, `isEditable` ou o estado ativo estiver configurado. Além disso, corrigido o comportamento dos componentes `AlertDialog`, `Dialog`, `Drawer` e `Sheet` para serem modais (`modal = true`) por padrão, bloqueando interações com o fundo e retendo o foco corretamente conforme especificações WAI-ARIA.
- **Hook de Acessibilidade**: Criado e aplicado o hook reutilizável `useKeyboardClick` em `lib/hooks` para gerenciar a interceptação de teclado de forma unificada e limpa em todo o ecossistema.
- **Polimorfismo**: Adicionado suporte à propriedade `asChild` utilizando `@radix-ui/react-slot` nos componentes `Card` e `Badge` para flexibilizar a tag HTML resultante de renderização.
- **Otimização de Performance**: Implementada memoização recursiva (`React.memo`) no nó interno `JsonNode` do componente `JsonTreeViewer`, prevenindo re-renderizações desnecessárias de toda a árvore de dados. Adicionada também a memoização de callbacks (`React.useCallback`) para troca e encerramento de anúncios no componente `Banner`. Otimizado o componente `ColorPicker` removendo a renderização da mira do canvas e recalculando a roda de cores apenas sob mudança de tamanho, reduzindo dramaticamente a carga sobre a CPU no arrasto, além de corrigir dependências do `useMemo` em `ButtonGroup`. Adicionado também o throttling via `requestAnimationFrame` nos escutadores de scroll e resize do componente `Tour` para mitigar layout thrashing e jank.
- **Estruturação de Código**: Extraídas as listas de navegação e componentes duplicadas na `Sidebar` e no `DocsPagination` para um local de verdade centralizado em `lib/navigation.ts`, facilitando manutenções futuras. Adicionado também suporte a sincronização automática no hook global `useQueryState` ao escutar eventos `"popstate"` de navegação no histórico da URL.
- **Correções na Sidebar**: Corrigida a dependência do efeito `scrollIntoView` para que a Sidebar role dinamicamente até o link ativo na mudança de rotas, e removido mount effect móvel redundante.
- **Limpeza de Código**: Removida a injeção inline de tags `<style>` no componente `Button`, substituindo o keyframe de desenho da animação de cópia por uma transição CSS reativa nativa.

## [1.0.0] - 2026-08-14

### Lançamento Oficial 🚀
Este é o lançamento oficial estável da versão 1.0.0 do Bloom! 

Esta versão marca a primeira versão estável e de produção de todo o ecossistema Bloom, englobando a suíte de 98 componentes e blocos integrados, testes automatizados unitários e de integração (Vitest e Playwright), documentação técnica internacionalizada e a ferramenta oficial de linha de comando (`@bloomui-react/cli`) para instalação híbrida.
