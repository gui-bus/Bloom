import { Icon } from "@iconify/react";
import Link from "next/link";
import { DocsPagination } from "@/components/core/docsPagination";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import { Terminal, type TerminalLine } from "@/components/ui/terminal/terminal";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <Card backgroundIcon={icon} isHoverable className="min-h-[130px]">
    <CardHeader className="p-6">
      <CardTitle className="text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </CardTitle>
      <CardDescription className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal mt-1">
        {description}
      </CardDescription>
    </CardHeader>
  </Card>
);

const terminalCliLines: TerminalLine[] = [
  { text: "npx @bloomui-react/cli init", type: "command" },
  { text: "Design system tokens initialized in project", type: "success" },
  {
    text: "npx @bloomui-react/cli add button tableOfContents snippet",
    type: "command",
  },
  { text: "Components added directly into components/ui", type: "success" },
];

const terminalNpmLines: TerminalLine[] = [
  { text: "npm install @bloomui-react/components", type: "command" },
  {
    text: "Installed @bloomui-react/components v0.1.0 (95 components included)",
    type: "success",
  },
];

export default function Home() {
  return (
    <main className="w-full space-y-16">
      <section id="introduction" className="space-y-8 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-xs font-medium tracking-tight">
          <span className="size-1.5 rounded-full bg-sky-500" />
          Bloom UI v1.0 — 95 React 19 Components
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
            Craft sleek, accessible UI with total flexibility.
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
            A high-performance React component library available in a hybrid
            model: use our official CLI to own the code, or install the compiled
            package via NPM. Powered by Radix UI and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/components/accordion"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm transition-colors duration-150 shadow-xs"
          >
            <Icon icon="hugeicons:grid-view" className="size-4" />
            Explore 90+ Components
          </Link>
          <Link
            href="/installation"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-150 shadow-xs"
          >
            <Icon
              icon="hugeicons:download-01"
              className="size-4 text-zinc-500"
            />
            Installation Guide
          </Link>
          <a
            href="https://github.com/gui-bus/Bloom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-150 shadow-xs"
          >
            <Icon icon="hugeicons:github" className="size-4 text-zinc-500" />
            GitHub
          </a>
        </div>
      </section>

      <section id="quickstart" className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Installation Methods
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Choose between full source code ownership using our CLI or a
            standard NPM package dependency.
          </p>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center size-7 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold font-mono">
                  01
                </span>
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  CLI — Full Source Code Ownership
                </h4>
              </div>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                Recommended for Customization
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Use our CLI to download raw React component code directly into
              your repository. Modify styling, logic, and structure freely
              without third-party wrapper constraints.
            </p>
            <Terminal variant="mac" lines={terminalCliLines} />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center size-7 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold font-mono">
                  02
                </span>
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  NPM Package — Standard Dependency
                </h4>
              </div>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                Pre-compiled ESM & CJS
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Install pre-compiled components via NPM if you prefer traditional
              version management across your applications.
            </p>
            <Terminal variant="mac" lines={terminalNpmLines} />
          </div>
        </div>
      </section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      <section id="principles" className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Design System Principles
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Engineered for clarity, consistency, and complete developer control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <FeatureCard
            icon="hugeicons:source-code"
            title="Hybrid Ownership"
            description="Copy raw source code directly via CLI or import as a compiled NPM package (@bloomui/react). Zero lock-in."
          />
          <FeatureCard
            icon="hugeicons:paint-board"
            title="Neutral Architecture"
            description="Standardized neutral palette with precise light and dark theme tokens. Clean, uncluttered, and adaptable to any brand."
          />
          <FeatureCard
            icon="hugeicons:view"
            title="WAI-ARIA Standard"
            description="Built on top of Radix UI primitives ensuring full keyboard navigation, focus management, and screen reader compatibility."
          />
          <FeatureCard
            icon="hugeicons:flash"
            title="Micro-Interactions"
            description="Subtle, fluid motion powered by Framer Motion to enhance user experience without compromising responsiveness."
          />
          <FeatureCard
            icon="hugeicons:moon-02"
            title="Semantic Dark Mode"
            description="Built-in dark mode support using CSS variables and Tailwind classes. Seamless integration with next-themes."
          />
          <FeatureCard
            icon="hugeicons:package"
            title="95 Modular Components"
            description="Independent components designed for composition. Zero bloated dependencies and optimized bundle size."
          />
        </div>
      </section>

      <DocsPagination />

      <div className="h-4" />
    </main>
  );
}
