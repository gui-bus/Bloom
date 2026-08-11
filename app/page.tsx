import { Icon } from "@iconify/react";
import Link from "next/link";
import { DocsPagination } from "@/components/core/docsPagination";

import { Snippet } from "@/components/ui/snippet/snippet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";

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

export default function Home() {
  return (
    <main className="w-full space-y-16">
      <section id="introduction" className="space-y-8 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-xs font-medium tracking-tight">
          <span className="size-1.5 rounded-full bg-sky-500" />
          Bloom UI v1.0 — 95 Premium React 19 Components
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
            Craft sleek, accessible UI with total flexibility.
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
            A high-performance React component library available in a hybrid model:
            use our official CLI to own the code, or install the compiled package via NPM. Powered by Radix UI and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/components/button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm transition-colors duration-150 shadow-xs"
          >
            <Icon icon="hugeicons:grid-view" className="size-4" />
            Explore 95 Components
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

      <section id="quickstart" className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Quick Installation
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Choose your preferred integration method to get started in seconds.
          </p>
        </div>

        <Tabs defaultValue="cli" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-xs mb-4">
            <TabsTrigger value="cli">CLI (Copy-Paste)</TabsTrigger>
            <TabsTrigger value="npm">NPM Package</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cli" className="space-y-3">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Initialize Bloom in your project and copy raw source code directly:
            </p>
            <div className="space-y-2">
              <Snippet variant="mac" symbol="$" prompt="npx @bloomui-react/cli init" text="npx @bloomui-react/cli init" />
              <Snippet variant="mac" symbol="$" prompt="npx @bloomui-react/cli add button tableOfContents snippet" text="npx @bloomui-react/cli add button tableOfContents snippet" />
            </div>
          </TabsContent>
          
          <TabsContent value="npm" className="space-y-3">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Install the pre-compiled package for traditional dependency management:
            </p>
            <Snippet variant="mac" symbol="$" prompt="npm install @bloomui/react" text="npm install @bloomui/react" />
          </TabsContent>
        </Tabs>
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
