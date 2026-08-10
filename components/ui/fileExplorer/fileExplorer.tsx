import {
  ChevronDown,
  ChevronRight,
  Edit2,
  File,
  FilePlus,
  Folder,
  FolderOpen,
  FolderPlus,
  Search,
  Trash2,
} from "lucide-react";
import type React from "react";
import {
  type KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type FileNode = {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
};

export interface FileExplorerProps {
  data: FileNode[];
  onNodeClick?: (node: FileNode) => void;
  onAddNode?: (
    parentId: string | null,
    type: "file" | "folder",
    name: string,
  ) => void;
  onRenameNode?: (nodeId: string, newName: string) => void;
  onDeleteNode?: (nodeId: string) => void;
  className?: string;
}

export function FileExplorer({
  data,
  onNodeClick,
  onAddNode,
  onRenameNode,
  onDeleteNode,
  className = "",
}: FileExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(),
  );

  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);
  const [addingToNodeId, setAddingToNodeId] = useState<string | null>(null);
  const [addingType, setAddingType] = useState<"file" | "folder" | null>(null);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if ((editingNodeId || addingToNodeId !== null) && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingNodeId, addingToNodeId]);

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(folderId)) {
        next.delete(folderId);
      } else {
        next.add(folderId);
      }
      return next;
    });
  };

  const expandAllToMatch = (
    nodes: FileNode[],
    term: string,
    currentPath: string[] = [],
  ): string[] => {
    if (!term) return [];
    const toExpand: string[] = [];
    for (const node of nodes) {
      if (node.type === "folder" && node.children) {
        const matchesInChildren = expandAllToMatch(node.children, term, [
          ...currentPath,
          node.id,
        ]);
        if (
          matchesInChildren.length > 0 ||
          node.name.toLowerCase().includes(term.toLowerCase())
        ) {
          toExpand.push(node.id, ...matchesInChildren);
        }
      }
    }
    return toExpand;
  };

  useEffect(() => {
    if (searchTerm) {
      const expanded = expandAllToMatch(data, searchTerm);
      setExpandedFolders(new Set(expanded));
    }
  }, [searchTerm, data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      commitInput();
    } else if (e.key === "Escape") {
      cancelInput();
    }
  };

  const commitInput = () => {
    if (!inputValue.trim()) {
      cancelInput();
      return;
    }
    if (editingNodeId) {
      onRenameNode?.(editingNodeId, inputValue.trim());
    } else if (addingToNodeId !== null && addingType) {
      const parentId = addingToNodeId === "root" ? null : addingToNodeId;
      onAddNode?.(parentId, addingType, inputValue.trim());
      if (parentId) {
        setExpandedFolders((prev) => new Set(prev).add(parentId));
      }
    }
    cancelInput();
  };

  const cancelInput = () => {
    setEditingNodeId(null);
    setAddingToNodeId(null);
    setAddingType(null);
    setInputValue("");
  };

  const filterNodes = (nodes: FileNode[], term: string): FileNode[] => {
    if (!term) return nodes;
    return nodes
      .map((node) => {
        if (node.type === "folder" && node.children) {
          const filteredChildren = filterNodes(node.children, term);
          const matches =
            node.name.toLowerCase().includes(term.toLowerCase()) ||
            filteredChildren.length > 0;
          return matches ? { ...node, children: filteredChildren } : null;
        }
        return node.name.toLowerCase().includes(term.toLowerCase())
          ? node
          : null;
      })
      .filter(Boolean) as FileNode[];
  };

  const filteredData = useMemo(
    () => filterNodes(data, searchTerm),
    [data, searchTerm],
  );

  const renderNode = (node: FileNode, level: number = 0) => {
    const isFolder = node.type === "folder";
    const isExpanded = expandedFolders.has(node.id);
    const isEditing = editingNodeId === node.id;
    const isAddingHere = addingToNodeId === node.id;

    return (
      <div key={node.id} className="flex flex-col">
        <div
          className="group flex items-center justify-between py-1 px-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer text-sm text-zinc-700 dark:text-zinc-300 transition-colors"
          style={{ paddingLeft: `${level * 12 + 8}px` }}
          onClick={() => {
            if (isFolder) toggleFolder(node.id);
            if (!isFolder && onNodeClick) onNodeClick(node);
          }}
        >
          <div className="flex items-center gap-1.5 flex-1 overflow-hidden">
            {isFolder ? (
              isExpanded ? (
                <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 text-zinc-500 shrink-0" />
              )
            ) : (
              <span className="w-4 h-4 shrink-0" />
            )}

            {isFolder ? (
              isExpanded ? (
                <FolderOpen className="w-4 h-4 text-blue-500 shrink-0" />
              ) : (
                <Folder className="w-4 h-4 text-blue-500 shrink-0" />
              )
            ) : (
              <File className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0" />
            )}

            {isEditing ? (
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={commitInput}
                onClick={(e) => e.stopPropagation()}
                className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-sm outline-none focus:ring-1 focus:ring-blue-500"
              />
            ) : (
              <span className="truncate">{node.name}</span>
            )}
          </div>

          <div className="hidden group-hover:flex items-center gap-1 shrink-0 ml-2">
            {isFolder && onAddNode && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setAddingToNodeId(node.id);
                    setAddingType("file");
                    setInputValue("");
                    setExpandedFolders((prev) => new Set(prev).add(node.id));
                  }}
                  className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded text-zinc-500 dark:text-zinc-400"
                  title="New File"
                >
                  <FilePlus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setAddingToNodeId(node.id);
                    setAddingType("folder");
                    setInputValue("");
                    setExpandedFolders((prev) => new Set(prev).add(node.id));
                  }}
                  className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded text-zinc-500 dark:text-zinc-400"
                  title="New Folder"
                >
                  <FolderPlus className="w-3.5 h-3.5" />
                </button>
              </>
            )}
            {onRenameNode && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setEditingNodeId(node.id);
                  setInputValue(node.name);
                }}
                className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded text-zinc-500 dark:text-zinc-400"
                title="Rename"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            )}
            {onDeleteNode && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteNode(node.id);
                }}
                className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded text-red-500"
                title="Delete"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {isFolder && isExpanded && (
          <div className="flex flex-col">
            {isAddingHere && (
              <div
                className="flex items-center gap-1.5 py-1 px-2"
                style={{ paddingLeft: `${(level + 1) * 12 + 8}px` }}
              >
                <span className="w-4 h-4 shrink-0" />
                {addingType === "folder" ? (
                  <Folder className="w-4 h-4 text-blue-500 shrink-0" />
                ) : (
                  <File className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0" />
                )}
                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={commitInput}
                  className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-sm outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            )}
            {node.children?.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col w-full h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden ${className}`}
    >
      <div className="p-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-8 pr-3 py-1.5 text-sm bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md outline-none focus:ring-1 focus:ring-blue-500 dark:text-zinc-200 placeholder:text-zinc-400"
          />
        </div>
        {onAddNode && (
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => {
                setAddingToNodeId("root");
                setAddingType("file");
                setInputValue("");
              }}
              className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md text-zinc-500 dark:text-zinc-400 transition-colors"
              title="New File"
            >
              <FilePlus className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setAddingToNodeId("root");
                setAddingType("folder");
                setInputValue("");
              }}
              className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md text-zinc-500 dark:text-zinc-400 transition-colors"
              title="New Folder"
            >
              <FolderPlus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-1 py-2">
        {addingToNodeId === "root" && (
          <div className="flex items-center gap-1.5 py-1 px-2 pl-2">
            <span className="w-4 h-4 shrink-0" />
            {addingType === "folder" ? (
              <Folder className="w-4 h-4 text-blue-500 shrink-0" />
            ) : (
              <File className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0" />
            )}
            <input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={commitInput}
              className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-sm outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        )}
        {filteredData.length === 0 ? (
          <div className="text-center text-sm text-zinc-500 py-4">
            No matching nodes
          </div>
        ) : (
          filteredData.map((node) => renderNode(node, 0))
        )}
      </div>
    </div>
  );
}
