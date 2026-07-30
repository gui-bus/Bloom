"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { TreeView, TreeNode } from "@/components/ui/treeView/treeView";
import { treeViewCode } from "@/components/ui/treeView/treeView.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function TreeViewPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Tree View"
        description="A hierarchical tree component for displaying nested data structures like file systems, categories, and document outlines with expand/collapse and selection support."
      />

      <ImportSnippet importCode={`import { TreeView, TreeNode } from "@/components/ui/treeView/treeView";`} />

      <InstallationBlock componentName="treeView" />

      <Tabs defaultValue="treeView">
        <TabsList background={false}>
          <TabsTrigger
            value="treeView"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            treeView.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="treeView">
          <CodeBlock
            code={treeViewCode}
            componentName="treeView.tsx"
            description="Hierarchical tree component with expand/collapse, selection, and ARIA tree role support."
            tags={["React", "Tailwind", "UI Component", "Navigation", "Tree View"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A file system tree with expandable folders and selectable files."
        preview={
          <div className="w-full max-w-sm p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <TreeView defaultExpanded={["src", "components"]}>
              <TreeNode id="src" label="src">
                <TreeNode id="components" label="components">
                  <TreeNode id="button" label="button.tsx" />
                  <TreeNode id="input" label="input.tsx" />
                  <TreeNode id="dialog" label="dialog.tsx" />
                </TreeNode>
                <TreeNode id="utils" label="utils">
                  <TreeNode id="cn" label="cn.ts" />
                  <TreeNode id="helpers" label="helpers.ts" />
                </TreeNode>
                <TreeNode id="app" label="app.tsx" />
              </TreeNode>
              <TreeNode id="public" label="public">
                <TreeNode id="favicon" label="favicon.ico" />
              </TreeNode>
              <TreeNode id="package" label="package.json" />
            </TreeView>
          </div>
        }
        code={`<TreeView defaultExpanded={["src", "components"]}>
  <TreeNode id="src" label="src">
    <TreeNode id="components" label="components">
      <TreeNode id="button" label="button.tsx" />
      <TreeNode id="input" label="input.tsx" />
      <TreeNode id="dialog" label="dialog.tsx" />
    </TreeNode>
    <TreeNode id="utils" label="utils">
      <TreeNode id="cn" label="cn.ts" />
    </TreeNode>
    <TreeNode id="app" label="app.tsx" />
  </TreeNode>
  <TreeNode id="package" label="package.json" />
</TreeView>`}
      />

      {/* With Icons */}
      <DocsComponent
        title="With Icons"
        description="Tree nodes with custom icons for folders, files, and specialized content types."
        preview={
          <div className="w-full max-w-sm p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <TreeView defaultExpanded={["docs"]}>
              <TreeNode
                id="docs"
                label="Documentation"
                icon={<Icon icon="hugeicons:folder-01" className="size-4 text-amber-500" />}
              >
                <TreeNode
                  id="getting-started"
                  label="Getting Started"
                  icon={<Icon icon="hugeicons:book-open-01" className="size-4 text-sky-500" />}
                />
                <TreeNode
                  id="api-reference"
                  label="API Reference"
                  icon={<Icon icon="hugeicons:code" className="size-4 text-emerald-500" />}
                />
                <TreeNode
                  id="changelog"
                  label="Changelog"
                  icon={<Icon icon="hugeicons:clock-01" className="size-4 text-violet-500" />}
                />
              </TreeNode>
              <TreeNode
                id="settings"
                label="Settings"
                icon={<Icon icon="hugeicons:settings-01" className="size-4 text-zinc-500" />}
              />
            </TreeView>
          </div>
        }
        code={`<TreeView defaultExpanded={["docs"]}>
  <TreeNode id="docs" label="Documentation" icon={<Icon icon="hugeicons:folder-01" className="size-4 text-amber-500" />}>
    <TreeNode id="getting-started" label="Getting Started" icon={<Icon icon="hugeicons:book-open-01" className="size-4 text-sky-500" />} />
    <TreeNode id="api-reference" label="API Reference" icon={<Icon icon="hugeicons:code" className="size-4 text-emerald-500" />} />
    <TreeNode id="changelog" label="Changelog" icon={<Icon icon="hugeicons:clock-01" className="size-4 text-violet-500" />} />
  </TreeNode>
  <TreeNode id="settings" label="Settings" icon={<Icon icon="hugeicons:settings-01" className="size-4 text-zinc-500" />} />
</TreeView>`}
      />

      <Separator label={<span className="px-2">Accessibility</span>} gradient />

      <AccessibilityCard
        keyboardShortcuts={[
          { keys: ["Enter", "Space"], description: "Select and toggle expand/collapse of focused node" },
          { keys: ["Tab"], description: "Move focus to the next focusable element" },
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">TreeView</h3>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">defaultExpanded</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string[]</td><td className="px-4 py-3 text-zinc-400">[]</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">IDs of nodes expanded by default.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">selectedId</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Controlled selected node ID.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">onNodeSelect</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">(id: string) =&gt; void</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Callback on node selection.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">TreeNode</h3>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">id</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Unique node identifier.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">label</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">ReactNode</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Node label content.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">icon</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">ReactNode</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Optional icon next to label.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">children</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">ReactNode</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Nested TreeNode children.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">isDisabled</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">boolean</td><td className="px-4 py-3 text-zinc-400">false</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Disables the node interaction.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
