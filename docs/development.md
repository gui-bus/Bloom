# Guia de Desenvolvimento e Publicação (Bloom Owner)

🇺🇸 [English Version](./development.en.md) | 🇧🇷 **Versão em Português**

Este guia é de uso exclusivo para o proprietário/mantenedor do repositório do Bloom. Ele detalha como gerar o registro de componentes e como publicar atualizações da CLI no NPM.

---

## 📦 1. Compilação do Registro (Component Registry)

O Bloom não distribui componentes compilados; ele distribui o código-fonte via JSON. O script `scripts/build-registry.js` varre os componentes da pasta `components/ui/` e gera arquivos JSON estáticos na pasta `public/registry/` para a CLI ler.

Toda vez que você atualizar o código-fonte de um componente (ex: `button.tsx`) ou criar um novo componente, o registro deve ser atualizado:
```bash
# Rodar o gerador de registro
pnpm build:registry
```
*No deploy (ex: Vercel), essa compilação roda automaticamente como parte do script de build (`pnpm build`).*

---

## 🚀 2. Publicação da CLI no NPM

O pacote da CLI está localizado na pasta `packages/cli/` e é publicado sob o escopo público `@bloomui-react/cli`.

### Passo 1: Fazer Login no NPM
Caso não esteja logado, execute o comando:
```bash
npm login
```

### Passo 2: Atualizar a Versão e Publicar
1. Abra o arquivo [packages/cli/package.json](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/packages/cli/package.json) e aumente a versão (ex: de `0.1.0` para `0.1.1`).
2. Execute o build e a publicação a partir da pasta raiz do projeto:
```bash
# Compilar a CLI
pnpm --filter @bloomui-react/cli build

# Entrar na pasta e publicar
cd packages/cli
pnpm publish --no-git-checks --access public
```
