"use client";

import { Icon } from "@iconify/react";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { Snippet } from "@/components/ui/snippet/snippet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";

export default function InstallationPage() {
  return (
    <div className="space-y-12 w-full">
      <DocsTitle
        title="Installation"
        description="Choose how to integrate Bloom UI into your React or Next.js application: copy raw components directly into your codebase using our official CLI, or install the compiled @bloomui/react package via NPM."
      />

      <Tabs defaultValue="cli" className="w-full space-y-8">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="cli">Method 1: CLI (Copy-Paste)</TabsTrigger>
          <TabsTrigger value="npm">Method 2: NPM Package</TabsTrigger>
        </TabsList>

        <TabsContent value="cli" className="space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center size-6 rounded-full bg-sky-500 text-white text-xs font-bold shrink-0">
                1
              </span>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Initialize Bloom UI CLI
              </h2>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
              Run the initialization command in your project root to set up design system tokens, helper utilities, and the configuration manifest.
            </p>
            <Snippet variant="mac" symbol="$" prompt="npx @bloomui-react/cli init" text="npx @bloomui-react/cli init" />
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center size-6 rounded-full bg-sky-500 text-white text-xs font-bold shrink-0">
                2
              </span>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Add Components Directly
              </h2>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
              Add any component directly to your project. The CLI downloads raw React source code into <code className="text-sky-500 bg-sky-500/10 px-1.5 py-0.5 rounded font-mono text-xs">components/ui/</code> without hiding logic.
            </p>
            <Snippet variant="mac" symbol="$" prompt="npx @bloomui-react/cli add button switch avatar card tableOfContents" text="npx @bloomui-react/cli add button switch avatar card tableOfContents" />
          </section>
        </TabsContent>

        <TabsContent value="npm" className="space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center size-6 rounded-full bg-sky-500 text-white text-xs font-bold shrink-0">
                1
              </span>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Install @bloomui/react Package
              </h2>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
              Install the pre-compiled library package for traditional dependency management in Vite, Next.js, or Remix.
            </p>
            <Snippet variant="mac" symbol="$" prompt="npm install @bloomui/react" text="npm install @bloomui/react" />
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center size-6 rounded-full bg-sky-500 text-white text-xs font-bold shrink-0">
                2
              </span>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Import Components in Your Code
              </h2>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
              Import any of the 95 components directly into your application views:
            </p>
            <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-2">
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 block">
                Example Usage
              </span>
              <pre className="text-xs font-mono text-zinc-700 dark:text-zinc-300 overflow-x-auto p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
{`import { Button, TableOfContents, Snippet } from "@bloomui/react";

export default function Dashboard() {
  return (
    <div className="p-6">
      <Button color="primary">Welcome to Bloom</Button>
    </div>
  );
}`}
              </pre>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            What gets created in your project
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Standardized files and utilities configured during initialization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            {
              file: "lib/utils.ts",
              title: "Classnames Utility",
              desc: "Provides the cn() helper for merging Tailwind classes cleanly using clsx and tailwind-merge.",
              icon: "hugeicons:code-folder",
            },
            {
              file: "lib/design-system.ts",
              title: "Design Tokens",
              desc: "Defines design radius scales, sizing scales, and neutral theme color tokens.",
              icon: "hugeicons:paint-board",
            },
            {
              file: "bloom.json",
              title: "Project Manifest",
              desc: "Stores project paths so the CLI knows where to copy new components automatically.",
              icon: "hugeicons:file-02",
            },
          ].map(({ file, title, desc, icon }) => (
            <div
              key={file}
              className="group relative overflow-hidden flex flex-col justify-between p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 min-h-[120px]"
            >
              <Icon
                icon={icon}
                className="absolute -right-3 -bottom-3 size-24 text-zinc-900/[0.04] dark:text-zinc-100/[0.03] group-hover:scale-110 group-hover:text-zinc-900/[0.07] dark:group-hover:text-zinc-100/[0.06] transition-all duration-300 pointer-events-none select-none"
              />
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {title}
                  </span>
                  <code className="text-[11px] font-mono font-medium text-sky-500 bg-sky-500/10 px-2 py-0.5 rounded-md">
                    {file}
                  </code>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DocsPagination />
    </div>
  );
}
