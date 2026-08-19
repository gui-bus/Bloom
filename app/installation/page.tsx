"use client";

import { Icon } from "@iconify/react";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { CodeBlock as PublicCodeBlock } from "@/components/ui/codeBlock/codeBlock";
import { Terminal, type TerminalLine } from "@/components/ui/terminal/terminal";

const terminalInitLines: TerminalLine[] = [
  { text: "npx @bloomui-react/cli init", type: "command" },
  { text: "Created lib/utils.ts", type: "success" },
  { text: "Created lib/design-system.ts", type: "success" },
  { text: "Created bloom.json project manifest", type: "success" },
  { text: "Bloom UI initialized successfully!", type: "info" },
];

const terminalAddLines: TerminalLine[] = [
  {
    text: "npx @bloomui-react/cli add button switch avatar card tableOfContents",
    type: "command",
  },
  { text: "Fetching component definitions from registry...", type: "info" },
  { text: "Created components/ui/button/button.tsx", type: "success" },
  { text: "Created components/ui/switch/switch.tsx", type: "success" },
  { text: "Created components/ui/avatar/avatar.tsx", type: "success" },
  { text: "Created components/ui/card/card.tsx", type: "success" },
  {
    text: "Created components/ui/tableOfContents/tableOfContents.tsx",
    type: "success",
  },
  {
    text: "All components added directly into your codebase!",
    type: "success",
  },
];

const terminalAiLines: TerminalLine[] = [
  { text: "npx @bloomui-react/cli setup-ai", type: "command" },
  {
    text: "? Select the AI assistants you use: Antigravity, Cursor",
    type: "info",
  },
  { text: "Generating AI context rules...", type: "info" },
  { text: "Created AGENTS.md (for Antigravity)", type: "success" },
  { text: "Created .cursorrules (for Cursor)", type: "success" },
  { text: "AI rules files generated successfully!", type: "success" },
];

const terminalUpdateLines: TerminalLine[] = [
  { text: "npx @bloomui-react/cli update", type: "command" },
  { text: "? Select components to update: button, avatar", type: "info" },
  { text: "Updating button component...", type: "info" },
  { text: "Updated button component files", type: "success" },
  { text: "Updating avatar component...", type: "info" },
  { text: "Updated avatar component files", type: "success" },
  { text: "Successfully updated components in your project!", type: "success" },
];

const terminalDoctorLines: TerminalLine[] = [
  { text: "npx @bloomui-react/cli doctor", type: "command" },
  { text: "Analyzing Bloom UI project health...", type: "info" },
  { text: "✔ bloom.json manifest exists and is valid JSON.", type: "success" },
  { text: "✔ Component directory exists at: components/ui", type: "success" },
  { text: "✔ Utility directory exists at: lib", type: "success" },
  { text: "✔ Utility file found: lib/utils.ts", type: "success" },
  { text: "✔ Utility file found: lib/design-system.ts", type: "success" },
  {
    text: "✔ Ripple animations directory found at: lib/ripple",
    type: "success",
  },
  {
    text: "✔ Local markdown documentation directory found at: lib/docs",
    type: "success",
  },
  { text: "✔ Dependency 'clsx' is installed.", type: "success" },
  {
    text: "✔ Perfect! Your Bloom UI setup is completely healthy.",
    type: "success",
  },
];

const terminalNpmLines: TerminalLine[] = [
  { text: "npm install @bloomui-react/components", type: "command" },
  {
    text: "Installed @bloomui-react/components v1.0.4 (ESM & CJS bundles)",
    type: "success",
  },
];

const terminalSourceLines: TerminalLine[] = [
  {
    text: `@source "../node_modules/@bloomui-react/components";`,
    type: "command",
  },
];

export default function InstallationPage() {
  return (
    <div className="space-y-12 w-full">
      <DocsTitle
        title="Installation"
        description="Choose how to use Bloom UI in your React or Next.js project: copy components directly using our official CLI, or install the compiled @bloomui/react package via NPM."
      />

      <section className="space-y-6">
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center size-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-bold font-mono">
                01
              </span>
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  CLI — Full Source Code Ownership
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Download raw React component code directly into your
                  repository.
                </p>
              </div>
            </div>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md hidden sm:inline-block">
              Recommended for Customization
            </span>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                1. Initialize Bloom UI
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Run the initialization command in your project root to set up
                design system tokens and helper utilities.
              </p>
              <Terminal variant="mac" lines={terminalInitLines} />
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                2. Add Components
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Add any of our 95 components directly to your project codebase.
              </p>
              <Terminal variant="mac" lines={terminalAddLines} />
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                3. Configure AI Assistant Rules (Optional)
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Generate dynamic context files for AI Coding Tools (Antigravity,
                Cursor, Windsurf, Copilot, or llms.txt). The generated rules
                list all components, exact props, and path imports customized to
                your project.
              </p>
              <Terminal variant="mac" lines={terminalAiLines} />
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                4. Update Components
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Keep your components and dynamic markdown docs up-to-date with
                the latest versions from our registry.
              </p>
              <Terminal variant="mac" lines={terminalUpdateLines} />
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                5. Health Check / Diagnostics
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Validate imports, files, configurations, and peer dependencies
                in your workspace.
              </p>
              <Terminal variant="mac" lines={terminalDoctorLines} />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center size-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-bold font-mono">
                02
              </span>
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  NPM Package — Standard Dependency
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Install pre-compiled components via NPM package management.
                </p>
              </div>
            </div>
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-md hidden sm:inline-block">
              Pre-compiled ESM & CJS
            </span>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                1. Initialize Theme & CSS Config
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Initialize Bloom UI using the CLI in your project root to
                automatically configure Tailwind CSS v4 variables, keyframes,
                and utilities. The CLI will append the{" "}
                <code className="text-sky-500 font-mono">@source</code>{" "}
                directive to your globals CSS file to ensure Tailwind v4 scans
                the pre-compiled package.
              </p>
              <Terminal variant="mac" lines={terminalInitLines} />
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                2. Install Dependency
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Install the pre-compiled library as a dependency in your
                project.
              </p>
              <Terminal variant="mac" lines={terminalNpmLines} />
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                3. Update your globals.css file
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Update your globals.css file to include the @source directive
                for the pre-compiled components.
              </p>
              <Terminal variant="mac" lines={terminalSourceLines} />
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                4. Import Components
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Import any component directly from{" "}
                <code className="text-sky-500 font-mono">
                  @bloomui-react/components
                </code>
                :
              </p>
              <PublicCodeBlock
                variant="mac"
                filename="App.tsx"
                language="typescript"
                code={`import { Button, TableOfContents, Snippet } from "@bloomui-react/components";

export default function App() {
  return <Button color="primary">Hello Bloom</Button>;
}`}
              />
            </div>
          </div>
        </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
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
              file: "lib/docs/",
              title: "Local Markdown Docs",
              desc: "Stores full markdown documentation files for each installed component to give detailed context for AI Coding Assistants.",
              icon: "hugeicons:file-attachment",
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
