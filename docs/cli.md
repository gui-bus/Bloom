# Bloom UI CLI (`@bloomui/cli`)

Este documento descreve como publicar a ferramenta CLI oficial do Bloom no NPM, e como os desenvolvedores podem utilizá-la em seus próprios projetos para instalar componentes de forma automatizada.

---

## 🚀 Guia de Publicação no NPM (Para Você)

Para publicar o pacote `@bloomui/cli` pela primeira vez ou atualizar a versão na loja de pacotes do Node (NPM), siga os passos abaixo:

### Passo 1: Fazer Login no NPM
Caso ainda não esteja logado no seu terminal, execute o comando abaixo e siga as instruções no navegador:
```bash
npm login
```

### Passo 2: Compilar e Publicar a CLI
Entre no diretório da CLI e publique o pacote usando o `pnpm`:
```bash
# Navegar até a pasta da CLI
cd packages/cli

# Compilar o código TypeScript em JavaScript executável
pnpm build

# Publicar o pacote no NPM (o --no-git-checks ignora avisos de commits locais pendentes)
pnpm publish --no-git-checks --access public
```

> [!TIP]
> **Como Atualizar a Versão**: Toda vez que fizer alterações no código da CLI e quiser atualizar, lembre-se de mudar a propriedade `"version"` no arquivo [packages/cli/package.json](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/packages/cli/package.json) (ex: de `0.1.0` para `0.1.1`), compilar com `pnpm build` e rodar `pnpm publish` novamente.

---

## 💻 Guia de Uso da CLI (Para os Usuários do Bloom)

Qualquer desenvolvedor com um projeto React/Next.js configurado pode usar o Bloom CLI seguindo estes comandos:

### 1. Inicializar o Bloom no Projeto
Na raiz do projeto consumidor, o usuário deve rodar:
```bash
npx @bloomui/cli init
```
A CLI abrirá uma interface interativa no terminal perguntando:
1. Onde deseja instalar os componentes (Padrão: `components/ui`).
2. Onde deseja colocar os utilitários de design (Padrão: `lib`).
3. Se deseja instalar as dependências de estilização necessárias (`clsx`, `tailwind-merge` e `lucide-react`).

Este comando criará o arquivo de configuração `bloom.json` na raiz do projeto dele, além de criar os arquivos fundamentais de suporte `lib/utils.ts` (função `cn`) e `lib/design-system.ts` (tokens visuais).

### 2. Adicionar Componentes
Para adicionar um componente e todas as suas dependências automaticamente ao projeto dele, basta rodar:
```bash
npx @bloomui/cli add [nome-do-componente]
```

**Exemplo:**
```bash
npx @bloomui/cli add button
```

**O que a CLI faz por baixo dos panos:**
1. Cria a pasta `components/ui/button/`.
2. Baixa e cria o arquivo `button.tsx` contendo o código fonte original.
3. Altera dinamicamente os caminhos de importação do cabeçalho do arquivo para coincidir com a estrutura de diretórios do usuário (ex: traduz `@/lib/utils` para caminhos relativos como `../../../lib/utils`).
4. Detecta qual gerenciador de pacotes o usuário está usando (`pnpm`, `npm`, `yarn` ou `bun`) e instala automaticamente as dependências do Radix UI necessárias para aquele componente (no caso do botão, `@radix-ui/react-slot`).
