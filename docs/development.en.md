# Development & Publishing Guide (Bloom Owner)

🇺🇸 **English Version** | 🇧🇷 [Versão em Português](./development.md)

This guide is exclusively for the owner/maintainer of the Bloom repository. It details how to generate the component registry and publish CLI updates on NPM.

---

## 📦 1. Compiling the Registry (Component Registry)

Bloom does not distribute compiled components; it distributes source code via JSON. The script `scripts/build-registry.js` scans the components in the `components/ui/` folder and generates static JSON files in the `public/registry/` folder for the CLI to read.

Every time you update a component's source code (e.g. `button.tsx`) or create a new component, the registry must be updated:
```bash
# Run the registry generator
pnpm build:registry
```
*On deployment (e.g. Vercel), this compilation runs automatically as part of the build script (`pnpm build`).*

---

## 🚀 2. Publishing the CLI on NPM

The CLI package is located in the `packages/cli/` folder and is published under the public scope `@bloomui-react/cli`.

### Step 1: Login to NPM
If you are not logged in, run the command:
```bash
npm login
```

### Step 2: Update the Version and Publish
1. Open the [packages/cli/package.json](file:///c:/Users/Guilherme/Desktop/PROJETOS/ZoeUI/packages/cli/package.json) file and increment the version (e.g. from `1.0.0` to `1.0.1`).
2. Run the build and publication from the project root folder:
```bash
# Compile the CLI
pnpm --filter @bloomui-react/cli build

# Enter the folder and publish
cd packages/cli
pnpm publish --no-git-checks --access public
```
