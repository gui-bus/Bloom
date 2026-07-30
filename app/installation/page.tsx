"use client";

import * as React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import DocsTitle from "@/components/core/docsTitle";
import { DocsComponent } from "@/components/core/docsComponent";
import { Separator } from "@/components/ui/separator/separator";
import { toast } from "@/components/ui/toast/toast";
import { DocsPagination } from "@/components/core/docsPagination";

const CopyableCommand = ({ command }: { command: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Command copied!", { description: command });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-3 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl px-4 py-3 font-mono text-sm border border-zinc-200 dark:border-zinc-700/80 shadow-xs">
      <div className="flex items-center gap-3 overflow-x-auto">
        <Icon icon="hugeicons:terminal" className="size-4 text-sky-500 shrink-0" />
        <span className="text-zinc-400 select-none">$</span>
        <code className="text-zinc-900 dark:text-zinc-100 font-bold">{command}</code>
      </div>
      <button
        onClick={handleCopy}
        className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shrink-0 cursor-pointer"
        title="Copy Command"
      >
        <Icon
          icon={copied ? "hugeicons:checkmark-circle-02" : "hugeicons:copy-01"}
          className={`size-4 ${copied ? "text-emerald-500" : ""}`}
        />
      </button>
    </div>
  );
};

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Installation"
        description="Learn how to initialize Bloom UI in your React or Next.js project using our official CLI, and add components directly into your codebase."
      />

      {/* Quick Start CLI */}
      <DocsComponent
        title="Quick Start via CLI"
        description="The recommended way to use Bloom UI is through our official CLI package (@bloomui-react/cli)."
        preview={
          <div className="space-y-6 w-full max-w-2xl">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center size-6 rounded-full bg-sky-500 text-white text-xs font-bold shrink-0">
                  1
                </span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  Initialize Bloom in your project
                </span>
              </div>
              <CopyableCommand command="npx @bloomui-react/cli init" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center size-6 rounded-full bg-sky-500 text-white text-xs font-bold shrink-0">
                  2
                </span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  Add the component you need
                </span>
              </div>
              <CopyableCommand command="npx @bloomui-react/cli add button" />
            </div>
          </div>
        }
        code={`# 1. Initialize Bloom in your project
npx @bloomui-react/cli init

# 2. Add any component (e.g., button, switch, drawer, toast)
npx @bloomui-react/cli add button`}
      />

      {/* What init sets up */}
      <DocsComponent
        title="What does `init` set up?"
        description="When you run `npx @bloomui-react/cli init`, the CLI creates essential support files and installs core utilities."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {[
              {
                file: "lib/utils.ts",
                desc: "Contains the cn() utility function for merging Tailwind CSS classes cleanly.",
              },
              {
                file: "lib/design-system.ts",
                desc: "Contains design tokens for radius, size scales, and semantic color palettes.",
              },
              {
                file: "bloom.json",
                desc: "Stores your project configuration paths for automated component additions.",
              },
              {
                file: "clsx & tailwind-merge",
                desc: "Auto-installs essential helper packages for dynamic class merging.",
              },
            ].map(({ file, desc }) => (
              <div
                key={file}
                className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs"
              >
                <code className="text-xs font-mono font-bold text-sky-500 bg-sky-500/10 px-2 py-0.5 rounded-md">
                  {file}
                </code>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        }
      />

      {/* Prerequisites */}
      <DocsComponent
        title="Prerequisites & Requirements"
        description="Make sure your project satisfies the minimum requirements before initializing Bloom."
        preview={
          <div className="space-y-3 w-full max-w-xl text-xs text-zinc-600 dark:text-zinc-300">
            <div className="flex items-start gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <Icon icon="devicon:react" className="size-5 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-900 dark:text-zinc-100">React 18 / 19 or Next.js 14 / 15 / 16</strong>
                <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">Compatible with React Server Components (RSC) and Client Components.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <Icon icon="devicon:tailwindcss" className="size-5 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-900 dark:text-zinc-100">Tailwind CSS v4</strong>
                <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">Bloom UI uses Tailwind v4 theme variables and utilities.</p>
              </div>
            </div>
          </div>
        }
      />

      <DocsPagination />
    </div>
  );
}
