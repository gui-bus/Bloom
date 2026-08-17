# Changelog — Bloom

🇺🇸 [English Version](./CHANGELOG.en.md) | 🇧🇷 **Versão em Português**

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [1.0.1] - 2026-08-17

### Refatorações e Melhorias ⚙️
- **Acessibilidade (A11y)**: Adicionado suporte nativo a navegação e ações por teclado (`Enter` / `Espaço`) nos componentes interativos `Card`, `Badge`, `Avatar` (tanto no componente principal quanto na camada de overlay editável), `Select`, `Combobox` e `DatePicker` (nos botões de gatilho/trigger principais) quando a propriedade `isPressable`, `isEditable` ou o estado ativo estiver configurado. Além disso, corrigido o comportamento dos componentes `AlertDialog`, `Dialog` e `Drawer` para serem modais (`modal = true`) por padrão, bloqueando interações com o fundo e retendo o foco corretamente conforme especificações WAI-ARIA.
- **Hook de Acessibilidade**: Criado e aplicado o hook reutilizável `useKeyboardClick` em `lib/hooks` para gerenciar a interceptação de teclado de forma unificada e limpa em todo o ecossistema.
- **Polimorfismo**: Adicionado suporte à propriedade `asChild` utilizando `@radix-ui/react-slot` nos componentes `Card` e `Badge` para flexibilizar a tag HTML resultante de renderização.
- **Otimização de Performance**: Implementada memoização recursiva (`React.memo`) no nó interno `JsonNode` do componente `JsonTreeViewer`, prevenindo re-renderizações desnecessárias de toda a árvore de dados. Adicionada também a memoização de callbacks (`React.useCallback`) para troca e encerramento de anúncios no componente `Banner`. Otimizado o componente `ColorPicker` removendo a renderização da mira do canvas e recalculando a roda de cores apenas sob mudança de tamanho, reduzindo dramaticamente a carga sobre a CPU no arrasto, além de corrigir dependências do `useMemo` em `ButtonGroup`.
- **Estruturação de Código**: Extraídas as listas de navegação e componentes duplicadas na `Sidebar` e no `DocsPagination` para um local de verdade centralizado em `lib/navigation.ts`, facilitando manutenções futuras.
- **Correções na Sidebar**: Corrigida a dependência do efeito `scrollIntoView` para que a Sidebar role dinamicamente até o link ativo na mudança de rotas, e removido mount effect móvel redundante.
- **Limpeza de Código**: Removida a injeção inline de tags `<style>` no componente `Button`, substituindo o keyframe de desenho da animação de cópia por uma transição CSS reativa nativa.

## [1.0.0] - 2026-08-14

### Lançamento Oficial 🚀
Este é o lançamento oficial estável da versão 1.0.0 do Bloom! 

Esta versão marca a primeira versão estável e de produção de todo o ecossistema Bloom, englobando a suíte de 98 componentes e blocos integrados, testes automatizados unitários e de integração (Vitest e Playwright), documentação técnica internacionalizada e a ferramenta oficial de linha de comando (`@bloomui-react/cli`) para instalação híbrida.
