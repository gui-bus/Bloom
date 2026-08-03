"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { TreeNode, TreeView } from "@/components/ui/treeView/treeView";
import { treeViewCode } from "@/components/ui/treeView/treeView.code";

export default function TreeViewPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Tree View"
        description="A hierarchical tree component for displaying nested data structures like file systems, categories, and document outlines with expand/collapse and selection support."
      />

      <ImportSnippet
        importCode={`import { TreeView, TreeNode } from "@/components/ui/treeView/treeView";`}
      />

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
            tags={[
              "React",
              "Tailwind",
              "UI Component",
              "Navigation",
              "Tree View",
            ]}
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
                icon={
                  <Icon
                    icon="hugeicons:folder-01"
                    className="size-4 text-amber-500"
                  />
                }
              >
                <TreeNode
                  id="getting-started"
                  label="Getting Started"
                  icon={
                    <Icon
                      icon="hugeicons:book-open-01"
                      className="size-4 text-sky-500"
                    />
                  }
                />
                <TreeNode
                  id="api-reference"
                  label="API Reference"
                  icon={
                    <Icon
                      icon="hugeicons:code"
                      className="size-4 text-emerald-500"
                    />
                  }
                />
                <TreeNode
                  id="changelog"
                  label="Changelog"
                  icon={
                    <Icon
                      icon="hugeicons:clock-01"
                      className="size-4 text-violet-500"
                    />
                  }
                />
              </TreeNode>
              <TreeNode
                id="settings"
                label="Settings"
                icon={
                  <Icon
                    icon="hugeicons:settings-01"
                    className="size-4 text-zinc-500"
                  />
                }
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

      {/* Checkbox Multi-Selection */}
      <DocsComponent
        title="Checkbox Multi-Selection"
        description="Enable checkbox selection on nodes with isCheckable={true} and monitor selected nodes with onCheckedChange."
        preview={
          <div className="w-full max-w-sm p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
            <TreeView isCheckable defaultExpanded={["src"]}>
              <TreeNode id="src" label="src">
                <TreeNode id="components" label="components.tsx" />
                <TreeNode id="styles" label="globals.css" />
              </TreeNode>
              <TreeNode id="readme" label="README.md" />
            </TreeView>
          </div>
        }
        code={`<TreeView isCheckable defaultExpanded={["src"]} onCheckedChange={(ids) => console.log(ids)}>
  <TreeNode id="src" label="src">
    <TreeNode id="components" label="components.tsx" />
  </TreeNode>
</TreeView>`}
        props={[
          "isCheckable: boolean",
          "onCheckedChange?: (ids: string[]) => void",
        ]}
      />

      {/* Drag & Drop Reordering */}
      <DocsComponent
        title="Drag & Drop Node Reordering"
        description="Enable interactive drag-and-drop node reordering and nesting with isReorderable={true} and save state with onReorder."
        preview={(() => {
          const ReorderDemo = () => {
            const [treeData, setTreeData] = React.useState<
              import("@/components/ui/treeView/treeView").TreeDataItem[]
            >([
              {
                id: "folder-1",
                label: "Folder 1",
                children: [
                  { id: "file-1", label: "File A.tsx" },
                  { id: "file-2", label: "File B.tsx" },
                ],
              },
              {
                id: "folder-2",
                label: "Folder 2",
                children: [{ id: "file-3", label: "File C.tsx" }],
              },
            ]);

            return (
              <div className="w-full max-w-sm p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <p className="text-xs text-zinc-400 mb-2 font-mono">
                  Drag nodes to reorder
                </p>
                <TreeView
                  isReorderable
                  defaultExpanded={["folder-1", "folder-2"]}
                  data={treeData}
                  onReorder={(newData) => setTreeData(newData)}
                />
              </div>
            );
          };
          return <ReorderDemo />;
        })()}
        code={`const [treeData, setTreeData] = useState(initialTree);

<TreeView
  isReorderable
  data={treeData}
  onReorder={(newData) => setTreeData(newData)}
/>`}
        props={["isReorderable: boolean", "onReorder: (newData) => void"]}
      />

      {/* Async Lazy Loading */}
      <DocsComponent
        title="Async Lazy Loading"
        description="Fetch child nodes dynamically on demand when expanding folders using onLoadChildren."
        preview={
          <div className="w-full max-w-sm p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <TreeView
              data={[
                { id: "remote-1", label: "Remote Server Logs (Click to load)" },
                { id: "remote-2", label: "Cloud Backups (Click to load)" },
              ]}
              onLoadChildren={async (_id) => {
                await new Promise((resolve) => setTimeout(resolve, 1500));
              }}
            />
          </div>
        }
        code={`<TreeView
  data={initialData}
  onLoadChildren={async (nodeId) => {
    const children = await fetchChildNodes(nodeId);
    return children;
  }}
/>`}
        props={["onLoadChildren: (id: string) => Promise<TreeDataItem[]>"]}
      />

      <Separator label={<span className="px-2">Accessibility</span>} gradient />

      <AccessibilityCard
        shortcuts={[
          {
            key: "Enter / Space",
            description: "Select and toggle expand/collapse of focused node",
          },
          {
            key: "Tab",
            description: "Move focus to the next focusable element",
          },
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
          TreeView
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                  Prop
                </th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                  Default
                </th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-sky-500">
                  defaultExpanded
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  string[]
                </td>
                <td className="px-4 py-3 text-zinc-400">[]</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  IDs of nodes expanded by default.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-sky-500">
                  selectedId
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  string
                </td>
                <td className="px-4 py-3 text-zinc-400">—</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  Controlled selected node ID.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-sky-500">
                  onNodeSelect
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  (id: string) =&gt; void
                </td>
                <td className="px-4 py-3 text-zinc-400">—</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  Callback on node selection.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
          TreeNode
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                  Prop
                </th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                  Default
                </th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-sky-500">id</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  string
                </td>
                <td className="px-4 py-3 text-zinc-400">—</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  Unique node identifier.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-sky-500">
                  label
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  ReactNode
                </td>
                <td className="px-4 py-3 text-zinc-400">—</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  Node label content.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-sky-500">
                  icon
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  ReactNode
                </td>
                <td className="px-4 py-3 text-zinc-400">—</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  Optional icon next to label.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-sky-500">
                  children
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  ReactNode
                </td>
                <td className="px-4 py-3 text-zinc-400">—</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  Nested TreeNode children.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-sky-500">
                  isDisabled
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-zinc-400">false</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                  Disables the node interaction.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
