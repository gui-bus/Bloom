"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
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
import { Separator } from "@/components/ui/separator/separator";
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
        props={["data: FileNode[]", "onNodeClick: (node: FileNode) => void", "onAddNode: (parentId, type, name) => void", "onRenameNode: (nodeId, newName) => void", "onDeleteNode: (nodeId) => void"]}
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — FileExplorer"
        description="Properties for configuring the FileExplorer component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">data</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">FileNode[]</td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">Array of file and folder nodes to display.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onNodeClick</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(node: FileNode) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback fired when a node is clicked.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onAddNode</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(parentId: string | null, type: 'file' | 'folder', name: string) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback to add a new file or folder to a parent node.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onRenameNode</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(nodeId: string, newName: string) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback to rename an existing node.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">onDeleteNode</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(nodeId: string) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback to delete a node by ID.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
