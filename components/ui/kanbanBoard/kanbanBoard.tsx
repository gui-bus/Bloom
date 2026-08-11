"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface KanbanCard {
  id: string;
  columnId: string;
  title: string;
  description?: string;
  tags?: string[];
  dueDate?: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger";
}

export interface KanbanBoardProps {
  className?: string;
  columns: KanbanColumn[];
  cards: KanbanCard[];
  onCardMove?: (cardId: string, targetColumnId: string) => void;
  onAddCard?: (columnId: string) => void;
  radius?: keyof typeof designRadius;
  variant?: "default" | "flat" | "bordered";
  isDisabled?: boolean;
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  className,
  columns,
  cards,
  onCardMove,
  onAddCard,
  radius = "lg",
  variant = "default",
  isDisabled = false,
}) => {
  const [draggedCardId, setDraggedCardId] = React.useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    if (isDisabled) return;
    setDraggedCardId(cardId);
    e.dataTransfer.setData("text/plain", cardId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (isDisabled) return;
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    if (isDisabled) return;
    e.preventDefault();
    const cardId = e.dataTransfer.getData("text/plain") || draggedCardId;
    if (cardId) {
      onCardMove?.(cardId, targetColumnId);
    }
    setDraggedCardId(null);
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 w-full select-none",
        isDisabled && "opacity-50 pointer-events-none",
        className,
      )}
    >
      {columns.map((column) => {
        const columnCards = cards.filter((card) => card.columnId === column.id);

        return (
          <div
            key={column.id}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
            className={cn(
              "flex flex-col min-h-[400px] border p-4 transition-colors",
              designRadius[radius],
              variant === "default" &&
                "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-xs",
              variant === "bordered" &&
                "bg-transparent border-2 border-zinc-200 dark:border-zinc-800",
              variant === "flat" &&
                "bg-zinc-100 dark:bg-zinc-800/40 border-transparent",
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  {column.title}
                </span>
                <Badge
                  color={column.color || "default"}
                  variant="flat"
                  size="sm"
                  radius="full"
                >
                  {columnCards.length.toString()}
                </Badge>
              </div>

              {onAddCard && !isDisabled && (
                <Button
                  size="sm"
                  variant="light"
                  onClick={() => onAddCard(column.id)}
                  className="h-7 w-7 p-0 rounded-full"
                  aria-label={`Add card to ${column.title}`}
                >
                  <Icon icon="lucide:plus" className="size-4" />
                </Button>
              )}
            </div>

            <div className="flex flex-col gap-3 flex-1 overflow-y-auto max-h-[500px] pr-1">
              {columnCards.map((card) => (
                <div
                  key={card.id}
                  draggable={!isDisabled}
                  onDragStart={(e) => handleDragStart(e, card.id)}
                  className={cn(
                    "p-3 rounded-md border bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800/80 cursor-grab active:cursor-grabbing hover:border-sky-500 dark:hover:border-sky-500 transition-all shadow-xs",
                    draggedCardId === card.id && "opacity-40",
                  )}
                >
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                    {card.title}
                  </h4>
                  {card.description && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-2">
                      {card.description}
                    </p>
                  )}

                  {(card.tags || card.dueDate) && (
                    <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/50">
                      {card.tags && card.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {card.tags.map((tag) => (
                            <Badge
                              key={tag}
                              color="default"
                              variant="flat"
                              size="sm"
                              className="text-[10px] px-1 py-0"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {card.dueDate && (
                        <div className="flex items-center gap-1 text-[10px] text-zinc-400 dark:text-zinc-500">
                          <Icon icon="lucide:calendar" className="size-3" />
                          <span>{card.dueDate}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {columnCards.length === 0 && (
                <div className="flex flex-col items-center justify-center flex-1 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-md p-6 text-center text-zinc-400 dark:text-zinc-500 text-xs">
                  <Icon
                    icon="lucide:inbox"
                    className="size-6 mb-1 opacity-70"
                  />
                  <span>No cards here</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

KanbanBoard.displayName = "KanbanBoard";
