"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  FileExplorer,
  type FileNode,
} from "@/components/ui/fileExplorer/fileExplorer";
import { fileExplorerCode } from "@/components/ui/fileExplorer/fileExplorer.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const initialData: FileNode[] = [
  {
    id: "1",
    name: "src",
    type: "folder",
    children: [
      {
        id: "2",
        name: "components",
        type: "folder",
        children: [
          { id: "3", name: "Button.tsx", type: "file" },
          { id: "4", name: "Input.tsx", type: "file" },
        ],
      },
      { id: "5", name: "App.tsx", type: "file" },
      { id: "6", name: "index.ts", type: "file" },
    ],
  },
  {
    id: "7",
    name: "public",
    type: "folder",
    children: [
      { id: "8", name: "favicon.ico", type: "file" },
      { id: "9", name: "logo.svg", type: "file" },
    ],
  },
  { id: "10", name: "package.json", type: "file" },
  { id: "11", name: "README.md", type: "file" },
];

export default function FileExplorerPage() {
  const [data, setData] = useState<FileNode[]>(initialData);

  const handleAddNode = (
    parentId: string | null,
    type: "file" | "folder",
    name: string,
  ) => {
    const newNode: FileNode = {
      id: Date.now().toString(),
      name,
      type,
      children: type === "folder" ? [] : undefined,
    };

    if (!parentId) {
      setData([...data, newNode]);
      return;
    }

    const addNode = (nodes: FileNode[]): FileNode[] => {
      return nodes.map((node) => {
        if (node.id === parentId) {
          return { ...node, children: [...(node.children || []), newNode] };
        }
        if (node.children) {
          return { ...node, children: addNode(node.children) };
        }
        return node;
      });
    };
    setData(addNode(data));
  };

  const handleRenameNode = (nodeId: string, newName: string) => {
    const renameNode = (nodes: FileNode[]): FileNode[] => {
      return nodes.map((node) => {
        if (node.id === nodeId) return { ...node, name: newName };
        if (node.children)
          return { ...node, children: renameNode(node.children) };
        return node;
      });
    };
    setData(renameNode(data));
  };

  const handleDeleteNode = (nodeId: string) => {
    const deleteNode = (nodes: FileNode[]): FileNode[] => {
      return nodes
        .filter((node) => node.id !== nodeId)
        .map((node) => {
          if (node.children)
            return { ...node, children: deleteNode(node.children) };
          return node;
        });
    };
    setData(deleteNode(data));
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="File Explorer"
        description="A tree-based file explorer component for nested file structures, supporting expand/collapse, rename, delete, add, and search."
      />

      <ImportSnippet
        importCode={`import { FileExplorer } from "@/components/ui/fileExplorer/fileExplorer";`}
      />

      <InstallationBlock componentName="fileExplorer" />

      <Tabs defaultValue="fileExplorer">
        <TabsList background={false}>
          <TabsTrigger
            value="fileExplorer"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            fileExplorer.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="fileExplorer">
          <CodeBlock
            code={fileExplorerCode}
            componentName="fileExplorer.tsx"
            description="Nested file tree explorer with expand/collapse, rename, delete, add node, and search capabilities."
            tags={[
              "React",
              "Tailwind",
              "UI Component",
              "Tree",
              "File Explorer",
            ]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Interactive file tree with expand/collapse folders, inline rename, delete, and add file or folder actions."
        preview={
          <div className="w-full max-w-md">
            <FileExplorer
              data={data}
              onNodeClick={(node) => console.log("Clicked", node)}
              onAddNode={handleAddNode}
              onRenameNode={handleRenameNode}
              onDeleteNode={handleDeleteNode}
            />
          </div>
        }
        code={`<FileExplorer
  data={data}
  onNodeClick={(node) => console.log("Clicked", node)}
  onAddNode={(parentId, type, name) => {}}
  onRenameNode={(nodeId, newName) => {}}
  onDeleteNode={(nodeId) => {}}
/>`}
      />

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
              <tr>
                <th className="px-4 py-3">Prop</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Default</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  data
                </td>
                <td className="px-4 py-3 font-mono text-primary">FileNode[]</td>
                <td className="px-4 py-3 font-mono">—</td>
                <td className="px-4 py-3">
                  Array of file and folder nodes to display.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onNodeClick
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (node: FileNode) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">—</td>
                <td className="px-4 py-3">
                  Callback fired when a node is clicked.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onAddNode
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (parentId, type, name) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">—</td>
                <td className="px-4 py-3">
                  Callback to add a new file or folder to a parent node.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onRenameNode
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (nodeId, newName) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">—</td>
                <td className="px-4 py-3">
                  Callback to rename an existing node.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onDeleteNode
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (nodeId) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">—</td>
                <td className="px-4 py-3">Callback to delete a node by ID.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
