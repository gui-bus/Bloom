# @bloomui-react/cli

The official Command Line Interface (CLI) for **Bloom UI** — a premium React component library built with Tailwind CSS v4, Radix UI, and Framer Motion.

This CLI allows you to initialize the design system and add components directly into your codebase, offering full code ownership and easy customization.

---

## 🚀 Quick Start

### 1. Initialize Bloom in your project
Run the initialization command in the root of your project:
```bash
npx @bloomui-react/cli init
```
This interactive command will:
* Prompt you to configure directories for components and utilities (creates `bloom.json` config).
* Generate core utility files: `lib/utils.ts` (the `cn` utility) and `lib/design-system.ts` (design tokens).
* Install required styling dependencies (`clsx`, `tailwind-merge`, and `lucide-react`).

### 2. Add components
Add components along with their radix primitives and dependency files automatically:
```bash
npx @bloomui-react/cli add [component-name]
```

**Example:**
```bash
npx @bloomui-react/cli add button
```

---

## ⚙️ Configuration (`bloom.json`)

After initialization, a `bloom.json` file is generated in the root of your project to specify paths:
```json
{
  "componentDir": "components/ui",
  "utilsDir": "lib"
}
```

---

## 📄 License
This project is licensed under the MIT License.
