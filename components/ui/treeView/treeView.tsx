"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TreeDataItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: TreeDataItem[];
  isDisabled?: boolean;
  isLazy?: boolean;
}

interface TreeViewContextValue {
  expandedIds: Set<string>;
  selectedId: string | null;
  checkedIds: Set<string>;
  toggleExpanded: (id: string) => void;
  selectNode: (id: string) => void;
  toggleChecked?: (id: string, item?: TreeDataItem) => void;
  isCheckable?: boolean;
  onLoadChildren?: (id: string) => Promise<TreeDataItem[] | undefined>;
  loadingIds?: Set<string>;
}

const TreeViewContext = React.createContext<TreeViewContextValue>({
  expandedIds: new Set(),
  selectedId: null,
  checkedIds: new Set(),
  toggleExpanded: () => {},
  selectNode: () => {},
});

interface TreeViewProps {
  defaultExpanded?: string[];
  selectedId?: string;
  onNodeSelect?: (id: string) => void;
  data?: TreeDataItem[];
  isCheckable?: boolean;
  checkedIds?: string[];
  onCheckedChange?: (checkedIds: string[]) => void;
  isReorderable?: boolean;
  onReorder?: (newData: TreeDataItem[]) => void;
  onLoadChildren?: (id: string) => Promise<TreeDataItem[] | undefined>;
  children?: React.ReactNode;
  className?: string;
}

export function TreeView({
  defaultExpanded = [],
  selectedId: controlledSelectedId,
  onNodeSelect,
  data,
  isCheckable = false,
  checkedIds: controlledCheckedIds,
  onCheckedChange,
  isReorderable = false,
  onReorder,
  onLoadChildren,
  children,
  className,
}: TreeViewProps) {
  const [expandedIds, setExpandedIds] = React.useState<Set<string>>(
    new Set(defaultExpanded),
  );
  const [internalSelectedId, setInternalSelectedId] = React.useState<
    string | null
  >(null);
  const [internalCheckedIds, setInternalCheckedIds] = React.useState<
    Set<string>
  >(new Set());
  const [loadingIds, setLoadingIds] = React.useState<Set<string>>(new Set());
  const [draggedId, setDraggedId] = React.useState<string | null>(null);

  const selectedId = controlledSelectedId ?? internalSelectedId;
  const checkedIds = controlledCheckedIds
    ? new Set(controlledCheckedIds)
    : internalCheckedIds;

  const toggleExpanded = React.useCallback(
    async (id: string) => {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });

      if (onLoadChildren && !expandedIds.has(id)) {
        setLoadingIds((prev) => new Set(prev).add(id));
        try {
          await onLoadChildren(id);
        } finally {
          setLoadingIds((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
          });
        }
      }
    },
    [onLoadChildren, expandedIds],
  );

  const selectNode = React.useCallback(
    (id: string) => {
      setInternalSelectedId(id);
      onNodeSelect?.(id);
    },
    [onNodeSelect],
  );

  const toggleChecked = React.useCallback(
    (id: string) => {
      const nextChecked = new Set(checkedIds);
      if (nextChecked.has(id)) {
        nextChecked.delete(id);
      } else {
        nextChecked.add(id);
      }
      setInternalCheckedIds(nextChecked);
      onCheckedChange?.(Array.from(nextChecked));
    },
    [checkedIds, onCheckedChange],
  );

  const handleDragStart = (e: React.DragEvent, id: string) => {
    if (!isReorderable) return;
    setDraggedId(id);
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    if (!isReorderable || !draggedId || draggedId === targetId || !data) return;
    e.preventDefault();
    e.stopPropagation();

    const findAndRemove = (
      items: TreeDataItem[],
    ): { items: TreeDataItem[]; removedItem: TreeDataItem | null } => {
      let removedItem: TreeDataItem | null = null;
      const cleanItems = (list: TreeDataItem[]): TreeDataItem[] => {
        return list.filter((item) => {
          if (item.id === draggedId) {
            removedItem = item;
            return false;
          }
          if (item.children) {
            item.children = cleanItems(item.children);
          }
          return true;
        });
      };
      const result = cleanItems(items);
      return { items: result, removedItem };
    };

    const insertNextToTarget = (
      list: TreeDataItem[],
      targetId: string,
      itemToInsert: TreeDataItem,
    ): TreeDataItem[] => {
      const result: TreeDataItem[] = [];
      for (const item of list) {
        if (item.id === targetId) {
          result.push(item);
          result.push(itemToInsert);
        } else {
          const updatedItem = { ...item };
          if (updatedItem.children && updatedItem.children.length > 0) {
            updatedItem.children = insertNextToTarget(
              updatedItem.children,
              targetId,
              itemToInsert,
            );
          }
          result.push(updatedItem);
        }
      }
      return result;
    };

    const { items: cleanedData, removedItem } = findAndRemove(data);
    if (!removedItem) return;

    const reorderedData = insertNextToTarget(
      cleanedData,
      targetId,
      removedItem,
    );
    onReorder?.(reorderedData);
    setDraggedId(null);
  };

  const renderDataTree = (items: TreeDataItem[]) => {
    return items.map((item) => (
      <div
        key={item.id}
        draggable={isReorderable}
        onDragStart={(e) => handleDragStart(e, item.id)}
        onDragOver={(e) => isReorderable && e.preventDefault()}
        onDrop={(e) => handleDrop(e, item.id)}
        className={cn(isReorderable && "cursor-grab active:cursor-grabbing")}
      >
        <TreeNode
          id={item.id}
          label={item.label}
          icon={item.icon}
          isDisabled={item.isDisabled}
          isLoading={loadingIds.has(item.id)}
          hasChildrenProp={Boolean(
            item.isLazy || (item.children && item.children.length > 0),
          )}
        >
          {item.children && item.children.length > 0
            ? renderDataTree(item.children)
            : null}
        </TreeNode>
      </div>
    ));
  };

  return (
    <TreeViewContext.Provider
      value={{
        expandedIds,
        selectedId,
        checkedIds,
        toggleExpanded,
        selectNode,
        toggleChecked,
        isCheckable,
        onLoadChildren,
        loadingIds,
      }}
    >
      <div className={cn("space-y-0.5", className)} role="tree">
        {data ? renderDataTree(data) : children}
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
  isLoading?: boolean;
  hasChildrenProp?: boolean;
  className?: string;
}

export function TreeNode({
  id,
  label,
  icon,
  children,
  isDisabled = false,
  isLoading = false,
  hasChildrenProp = false,
  className,
}: TreeNodeProps) {
  const {
    expandedIds,
    selectedId,
    checkedIds,
    toggleExpanded,
    selectNode,
    toggleChecked,
    isCheckable,
  } = React.useContext(TreeViewContext);

  const hasChildren = hasChildrenProp || React.Children.count(children) > 0;
  const isExpanded = expandedIds.has(id);
  const isSelected = selectedId === id;
  const isChecked = checkedIds.has(id);

  return (
    <div
      className={cn("select-none", className)}
      role="treeitem"
      tabIndex={0}
      aria-expanded={hasChildren ? isExpanded : undefined}
    >
      <div
        className={cn(
          "flex items-center gap-2 w-full px-2 py-1.5 rounded-lg text-sm transition-colors cursor-pointer",
          isSelected
            ? "bg-sky-500/10 text-sky-500 font-semibold"
            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
          isDisabled && "opacity-40 cursor-not-allowed",
        )}
        onClick={() => {
          if (isDisabled) return;
          selectNode(id);
          if (hasChildren) toggleExpanded(id);
        }}
      >
        {isLoading ? (
          <Icon
            icon="hugeicons:loading-02"
            className="size-4 shrink-0 animate-spin text-sky-500"
          />
        ) : hasChildren ? (
          <Icon
            icon="hugeicons:arrow-right-01"
            className={cn(
              "size-4 shrink-0 transition-transform duration-200",
              isExpanded && "rotate-90",
            )}
          />
        ) : (
          <span className="size-4 shrink-0" />
        )}

        {isCheckable && (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              e.stopPropagation();
              toggleChecked?.(id);
            }}
            onClick={(e) => e.stopPropagation()}
            className="size-4 rounded border-zinc-300 dark:border-zinc-700 text-sky-500 focus:ring-sky-500/20 cursor-pointer"
          />
        )}

        {icon && <span className="shrink-0 text-base">{icon}</span>}

        <span className="truncate flex-1">{label}</span>
      </div>

      {hasChildren && isExpanded && (
        <div className="pl-4 mt-0.5" role="group">
          {children}
        </div>
      )}
    </div>
  );
}
