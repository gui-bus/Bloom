"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

interface TreeViewContextValue {
  expandedIds: Set<string>;
  selectedId: string | null;
  toggleExpanded: (id: string) => void;
  selectNode: (id: string) => void;
}

const TreeViewContext = React.createContext<TreeViewContextValue>({
  expandedIds: new Set(),
  selectedId: null,
  toggleExpanded: () => {},
  selectNode: () => {},
});

interface TreeViewProps {
  defaultExpanded?: string[];
  selectedId?: string;
  onNodeSelect?: (id: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function TreeView({
  defaultExpanded = [],
  selectedId: controlledSelectedId,
  onNodeSelect,
  children,
  className,
}: TreeViewProps) {
  const [expandedIds, setExpandedIds] = React.useState<Set<string>>(
    new Set(defaultExpanded)
  );
  const [internalSelectedId, setInternalSelectedId] = React.useState<string | null>(null);

  const selectedId = controlledSelectedId ?? internalSelectedId;

  const toggleExpanded = React.useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const selectNode = React.useCallback(
    (id: string) => {
      setInternalSelectedId(id);
      onNodeSelect?.(id);
    },
    [onNodeSelect]
  );

  return (
    <TreeViewContext.Provider
      value={{ expandedIds, selectedId, toggleExpanded, selectNode }}
    >
      <div className={cn("space-y-0.5", className)} role="tree">
        {children}
      </div>
    </TreeViewContext.Provider>
  );
}

interface TreeNodeProps {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
}

export function TreeNode({
  id,
  label,
  icon,
  children,
  isDisabled = false,
  className,
}: TreeNodeProps) {
  const { expandedIds, selectedId, toggleExpanded, selectNode } =
    React.useContext(TreeViewContext);

  const hasChildren = React.Children.count(children) > 0;
  const isExpanded = expandedIds.has(id);
  const isSelected = selectedId === id;

  return (
    <div className={cn("select-none", className)} role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
      <button
        type="button"
        disabled={isDisabled}
        className={cn(
          "flex items-center gap-2 w-full px-2 py-1.5 rounded-lg text-sm text-left transition-colors",
          isSelected
            ? "bg-sky-500/10 text-sky-500 font-semibold"
            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
          isDisabled && "opacity-40 cursor-not-allowed"
        )}
        onClick={() => {
          if (isDisabled) return;
          selectNode(id);
          if (hasChildren) toggleExpanded(id);
        }}
      >
        {/* Chevron */}
        {hasChildren ? (
          <Icon
            icon="hugeicons:arrow-right-01"
            className={cn(
              "size-4 shrink-0 transition-transform duration-200",
              isExpanded && "rotate-90"
            )}
          />
        ) : (
          <span className="size-4 shrink-0" />
        )}

        {/* Icon */}
        {icon && <span className="shrink-0 text-base">{icon}</span>}

        {/* Label */}
        <span className="truncate">{label}</span>
      </button>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="pl-4 mt-0.5" role="group">
          {children}
        </div>
      )}
    </div>
  );
}
