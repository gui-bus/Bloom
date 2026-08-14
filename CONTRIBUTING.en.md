# Contributing Guidelines — Bloom

🇺🇸 **English Version** | 🇧🇷 [Versão em Português](./CONTRIBUTING.md)

Thank you for your interest in contributing to Bloom! This document provides guidelines for local development, code formatting, and pull request workflows.

---

## 🛠️ Local Environment Setup

### Prerequisites
Make sure you have **Node.js** (version 18+) and the **pnpm** (or npm) package manager installed on your computer.

### Step 1: Clone the Repository
```bash
git clone https://github.com/gui-bus/Bloom.git
cd Bloom
```

### Step 2: Install Dependencies
```bash
pnpm install
```

### Step 3: Run the Documentation Server
```bash
pnpm dev
```
Open your browser at [http://localhost:3000](http://localhost:3000) to view the local interactive documentation.

---

## 🎨 Creating or Modifying Components

When creating a component in the `components/ui/` folder:
1. Strictly follow the design principles in [**`docs/design-system.en.md`**](./docs/design-system.en.md) (neutral colors, Radix UI, and Tailwind v4).
2. Provide the required files in the `components/ui/[component-name]/` folder:
   * `[component-name].tsx` (component React source code).
   * `[component-name].code.ts` (source code exported as string to display on documentation tabs).
3. After creating or editing components, run the synchronization and registry build scripts to update CLI metadata:
```bash
pnpm build:registry
```

---

## 💅 Code Quality (Lint and Formatting)

Bloom uses **Biome** for fast formatting and linting.
Before committing, make sure your code passes formatting checks:

```bash
# Format all modified files
pnpm format

# Verify lints and check for errors
pnpm lint
```

---

## 🧪 Automated Testing

All additions must be validated by corresponding tests:

```bash
# Run unit tests (Vitest)
pnpm test:unit

# Run end-to-end tests (Playwright)
pnpm test:e2e
```

---

## 🚀 Commit Guidelines

Bloom follows the **Conventional Commits** standard to keep commit history clean:
* `feat(component):` Add new components or features.
* `fix(component):` Code fixes or typescript types resolutions.
* `docs:` Improvements or updates to documentation.
* `chore:` Maintenance tasks or dependency updates.
