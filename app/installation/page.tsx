"use client";

import { Icon } from "@iconify/react";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { Terminal, type TerminalLine } from "@/components/ui/terminal/terminal";

const terminalInitLines: TerminalLine[] = [
  { text: "npx bloom-ui init", type: "command" },
  { text: "Created lib/utils.ts", type: "success" },
  { text: "Created lib/design-system.ts", type: "success" },
  { text: "Created bloom.json project manifest", type: "success" },
  { text: "Bloom UI initialized successfully!", type: "info" },
];

const terminalAddLines: TerminalLine[] = [
  { text: "npx bloom-ui add button switch avatar card", type: "command" },
  { text: "Fetching component definitions from registry...", type: "info" },
  { text: "Created components/ui/button/button.tsx", type: "success" },
  { text: "Created components/ui/switch/switch.tsx", type: "success" },
  { text: "Created components/ui/avatar/avatar.tsx", type: "success" },
  { text: "Created components/ui/card/card.tsx", type: "success" },
  {
    text: "All components added directly into your codebase!",
    type: "success",
  },
];

export default function InstallationPage() {
  return (
    <div className="space-y-12 w-full">
      <DocsTitle
        title="Installation"
        description="Initialize Bloom UI in your React or Next.js project using our official CLI, and add components directly into your codebase."
      />

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center size-6 rounded-full bg-sky-500 text-white text-xs font-bold shrink-0">
            1
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Initialize Bloom UI
          </h2>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
          Run the initialization command in your project root to set up design
          system tokens, helper utilities, and configuration manifests.
        </p>
        <Terminal variant="mac" lines={terminalInitLines} />
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center size-6 rounded-full bg-sky-500 text-white text-xs font-bold shrink-0">
            2
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Add Components
          </h2>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
          Add any component directly to your project. The CLI downloads raw
          React source code without hiding logic behind third-party packages.
        </p>
        <Terminal variant="mac" lines={terminalAddLines} />
      </section>

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
