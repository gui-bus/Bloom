"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Kbd } from "@/components/ui/kbd/kbd";
import { kbdCode } from "@/components/ui/kbd/kbd.code";
import { Separator } from "@/components/ui/separator/separator";

export default function KbdComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Kbd"
        description="Display key bindings and keyboard shortcuts with sleek typography, variants, and size scales."
      />

      <ImportSnippet
        importCode={`import { Kbd } from "@/components/ui/kbd/kbd";`}
      />

      <InstallationBlock componentName="kbd" />

      <CodeBlock
        code={kbdCode}
        componentName="kbd.tsx"
        description="Core implementation of the Kbd component."
        tags={["React", "Tailwind", "Typography", "Kbd"]}
      />

      <DocsComponent
        title="Default"
        description="Standard key binding badge."
        preview={
          <div className="flex items-center gap-2">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </div>
        }
        code={`<div className="flex items-center gap-2">
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</div>`}
      />

      <DocsComponent
        title="Variants"
        description="Style variants using the 'variant' prop: 'flat', 'bordered', or 'solid'."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mr-1">
                Flat:
              </span>
              <Kbd variant="flat">Ctrl</Kbd>
              <Kbd variant="flat">C</Kbd>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mr-1">
                Bordered:
              </span>
              <Kbd variant="bordered">Alt</Kbd>
              <Kbd variant="bordered">F4</Kbd>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mr-1">
                Solid:
              </span>
              <Kbd variant="solid">Shift</Kbd>
              <Kbd variant="solid">Enter</Kbd>
            </div>
          </div>
        }
        code={`<Kbd variant="flat">Ctrl</Kbd>
<Kbd variant="bordered">Alt</Kbd>
<Kbd variant="solid">Shift</Kbd>`}
        props={["variant: 'flat' | 'bordered' | 'solid'"]}
      />

      <DocsComponent
        title="Sizes"
        description="Scale badge dimensions using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex items-end gap-3">
            <Kbd size="sm">⌘ Shift P</Kbd>
            <Kbd size="md">⌘ Shift P</Kbd>
            <Kbd size="lg">⌘ Shift P</Kbd>
          </div>
        }
        code={`<Kbd size="sm">⌘ Shift P</Kbd>
<Kbd size="md">⌘ Shift P</Kbd>
<Kbd size="lg">⌘ Shift P</Kbd>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="Keyboard Shortcuts List"
        description="Combining Kbd badges into a clean user interface reference list."
        preview={
          <div className="flex flex-col gap-2 max-w-sm w-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 rounded-2xl">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Command Palette
              </span>
              <div className="flex items-center gap-1">
                <Kbd size="sm">⌘</Kbd>
                <Kbd size="sm">K</Kbd>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Copy Code
              </span>
              <div className="flex items-center gap-1">
                <Kbd size="sm">Ctrl</Kbd>
                <Kbd size="sm">C</Kbd>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Quick Search
              </span>
              <div className="flex items-center gap-1">
                <Kbd size="sm">/</Kbd>
              </div>
            </div>
          </div>
        }
        code={`<div className="flex flex-col gap-2 max-w-sm border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 rounded-2xl">
  <div className="flex items-center justify-between">
    <span>Command Palette</span>
    <div className="flex items-center gap-1">
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="sm">K</Kbd>
    </div>
  </div>
</div>`}
      />

      <DocsComponent
        title="Key Combination Sequence Formatter"
        description="Pass an array of key names via 'keys' to automatically render symbols like ⌘, ⇧, ⌃, ⌥, ↵, and Esc."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">Shortcut:</span>
              <Kbd keys={["command", "shift", "k"]} size="md" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">Navigation:</span>
              <Kbd keys={["option", "enter"]} size="md" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">Cancel:</span>
              <Kbd keys={["escape"]} size="md" />
            </div>
          </div>
        }
        code={`<Kbd keys={["command", "shift", "k"]} size="md" />
<Kbd keys={["option", "enter"]} size="md" />
<Kbd keys={["escape"]} size="md" />`}
        props={["keys: KbdKey[]"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Kbd"
        description="Supported properties for the Kbd component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">keys</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    KbdKey[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of key names formatted with mac/windows shortcut
                    symbols.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'flat' | 'bordered' | 'solid'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'flat'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual surface style variant.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Dimensional scale for key badge.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsPagination />
    </div>
  );
}
