"use client";

import { useState } from "react";
import { DocsComponent } from "@/components/core/docsComponent";
import {
  FileExplorer,
  type FileNode,
} from "@/components/ui/fileExplorer/fileExplorer";
import { fileExplorerCode } from "@/components/ui/fileExplorer/fileExplorer.code";

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
          return {
            ...node,
            children: [...(node.children || []), newNode],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: addNode(node.children),
          };
        }
        return node;
      });
    };
    setData(addNode(data));
  };

  const handleRenameNode = (nodeId: string, newName: string) => {
    const renameNode = (nodes: FileNode[]): FileNode[] => {
      return nodes.map((node) => {
        if (node.id === nodeId) {
          return { ...node, name: newName };
        }
        if (node.children) {
          return {
            ...node,
            children: renameNode(node.children),
          };
        }
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
          if (node.children) {
            return {
              ...node,
              children: deleteNode(node.children),
            };
          }
          return node;
        });
    };
    setData(deleteNode(data));
  };

  return (
    <DocsComponent
      title="File Explorer"
      description="A tree-based file explorer component for nested file structures, supporting expand/collapse, rename, delete, add, and search."
      code={fileExplorerCode}
      props={[
        {
          name: "data",
          type: "FileNode[]",
          description: "Array of file and folder nodes.",
          required: true,
        },
        {
          name: "onNodeClick",
          type: "(node: FileNode) => void",
          description: "Callback when a node is clicked.",
        },
        {
          name: "onAddNode",
          type: "(parentId: string | null, type: 'file' | 'folder', name: string) => void",
          description: "Callback to add a new file or folder.",
        },
        {
          name: "onRenameNode",
          type: "(nodeId: string, newName: string) => void",
          description: "Callback to rename a node.",
        },
        {
          name: "onDeleteNode",
          type: "(nodeId: string) => void",
          description: "Callback to delete a node.",
        },
        {
          name: "className",
          type: "string",
          description: "Additional class names.",
        },
      ]}
    >
      <div className="w-full max-w-md h-[400px]">
        <FileExplorer
          data={data}
          onNodeClick={(node) => console.log("Clicked", node)}
          onAddNode={handleAddNode}
          onRenameNode={handleRenameNode}
          onDeleteNode={handleDeleteNode}
        />
      </div>
    </DocsComponent>
  );
}
