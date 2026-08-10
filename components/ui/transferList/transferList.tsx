"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { Button } from "@/components/ui/button/button";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Input } from "@/components/ui/input/input";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface TransferItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TransferListProps {
  className?: string;
  leftTitle?: string;
  rightTitle?: string;
  leftItems: TransferItem[];
  rightItems: TransferItem[];
  onChange?: (left: TransferItem[], right: TransferItem[]) => void;
  variant?: "default" | "bordered" | "flat";
  radius?: keyof typeof designRadius;
  isDisabled?: boolean;
  showSearch?: boolean;
}

export const TransferList: React.FC<TransferListProps> = ({
  className,
  leftTitle = "Available Items",
  rightTitle = "Selected Items",
  leftItems,
  rightItems,
  onChange,
  variant = "default",
  radius = "md",
  isDisabled = false,
  showSearch = true,
}) => {
  const [leftChecked, setLeftChecked] = React.useState<string[]>([]);
  const [rightChecked, setRightChecked] = React.useState<string[]>([]);
  const [leftSearch, setLeftSearch] = React.useState("");
  const [rightSearch, setRightSearch] = React.useState("");

  const filteredLeft = React.useMemo(() => {
    return leftItems.filter((item) =>
      item.label.toLowerCase().includes(leftSearch.toLowerCase()),
    );
  }, [leftItems, leftSearch]);

  const filteredRight = React.useMemo(() => {
    return rightItems.filter((item) =>
      item.label.toLowerCase().includes(rightSearch.toLowerCase()),
    );
  }, [rightItems, rightSearch]);

  const nonDisabledLeft = React.useMemo(() => {
    return filteredLeft.filter((item) => !item.disabled);
  }, [filteredLeft]);

  const nonDisabledRight = React.useMemo(() => {
    return filteredRight.filter((item) => !item.disabled);
  }, [filteredRight]);

  const isAllLeftChecked = React.useMemo(() => {
    return (
      nonDisabledLeft.length > 0 &&
      nonDisabledLeft.every((item) => leftChecked.includes(item.id))
    );
  }, [nonDisabledLeft, leftChecked]);

  const isSomeLeftChecked = React.useMemo(() => {
    const checkedCount = nonDisabledLeft.filter((item) =>
      leftChecked.includes(item.id),
    ).length;
    return checkedCount > 0 && checkedCount < nonDisabledLeft.length;
  }, [nonDisabledLeft, leftChecked]);

  const isAllRightChecked = React.useMemo(() => {
    return (
      nonDisabledRight.length > 0 &&
      nonDisabledRight.every((item) => rightChecked.includes(item.id))
    );
  }, [nonDisabledRight, rightChecked]);

  const isSomeRightChecked = React.useMemo(() => {
    const checkedCount = nonDisabledRight.filter((item) =>
      rightChecked.includes(item.id),
    ).length;
    return checkedCount > 0 && checkedCount < nonDisabledRight.length;
  }, [nonDisabledRight, rightChecked]);

  const handleToggleLeft = (id: string) => {
    if (isDisabled) return;
    setLeftChecked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleToggleRight = (id: string) => {
    if (isDisabled) return;
    setRightChecked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleToggleAllLeft = () => {
    if (isDisabled) return;
    if (isAllLeftChecked) {
      setLeftChecked((prev) =>
        prev.filter((id) => !nonDisabledLeft.some((item) => item.id === id)),
      );
    } else {
      setLeftChecked((prev) => {
        const added = nonDisabledLeft
          .map((item) => item.id)
          .filter((id) => !prev.includes(id));
        return [...prev, ...added];
      });
    }
  };

  const handleToggleAllRight = () => {
    if (isDisabled) return;
    if (isAllRightChecked) {
      setRightChecked((prev) =>
        prev.filter((id) => !nonDisabledRight.some((item) => item.id === id)),
      );
    } else {
      setRightChecked((prev) => {
        const added = nonDisabledRight
          .map((item) => item.id)
          .filter((id) => !prev.includes(id));
        return [...prev, ...added];
      });
    }
  };

  const moveCheckedRight = () => {
    const toMove = leftItems.filter(
      (item) => leftChecked.includes(item.id) && !item.disabled,
    );
    const newLeft = leftItems.filter(
      (item) => !leftChecked.includes(item.id) || item.disabled,
    );
    const newRight = [...rightItems, ...toMove];

    onChange?.(newLeft, newRight);
    setLeftChecked([]);
  };

  const moveCheckedLeft = () => {
    const toMove = rightItems.filter(
      (item) => rightChecked.includes(item.id) && !item.disabled,
    );
    const newRight = rightItems.filter(
      (item) => !rightChecked.includes(item.id) || item.disabled,
    );
    const newLeft = [...leftItems, ...toMove];

    onChange?.(newLeft, newRight);
    setRightChecked([]);
  };

  const moveAllRight = () => {
    const toMove = leftItems.filter((item) => !item.disabled);
    const newLeft = leftItems.filter((item) => item.disabled);
    const newRight = [...rightItems, ...toMove];

    onChange?.(newLeft, newRight);
    setLeftChecked([]);
  };

  const moveAllLeft = () => {
    const toMove = rightItems.filter((item) => !item.disabled);
    const newRight = rightItems.filter((item) => item.disabled);
    const newLeft = [...leftItems, ...toMove];

    onChange?.(newLeft, newRight);
    setRightChecked([]);
  };

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center gap-4 w-full select-none",
        isDisabled && "opacity-50 pointer-events-none",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col w-full sm:w-1/2 min-h-[360px] max-h-[460px] border overflow-hidden",
          designRadius[radius],
          variant === "default" &&
            "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-xs",
          variant === "bordered" &&
            "bg-transparent border-2 border-zinc-200 dark:border-zinc-800",
          variant === "flat" &&
            "bg-zinc-100 dark:bg-zinc-800/80 border-transparent",
        )}
      >
        <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={isAllLeftChecked}
              isIndeterminate={isSomeLeftChecked}
              onCheckedChange={handleToggleAllLeft}
              disabled={nonDisabledLeft.length === 0 || isDisabled}
            />
            <span>{leftTitle}</span>
          </div>
          <span>
            {
              leftChecked.filter((id) => leftItems.some((i) => i.id === id))
                .length
            }{" "}
            of {leftItems.length} selected
          </span>
        </div>
        {showSearch && (
          <div className="p-2 border-b border-zinc-200 dark:border-zinc-800">
            <Input
              size="sm"
              placeholder="Search..."
              value={leftSearch}
              onChange={(e) => setLeftSearch(e.target.value)}
              isClearable
              startContent={
                <Icon icon="lucide:search" className="size-3.5 text-zinc-400" />
              }
            />
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredLeft.map((item) => (
            <label
              key={item.id}
              className={cn(
                "flex items-center gap-3 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 cursor-pointer text-sm text-zinc-700 dark:text-zinc-300",
                item.disabled &&
                  "opacity-50 pointer-events-none cursor-not-allowed",
              )}
            >
              <Checkbox
                checked={leftChecked.includes(item.id)}
                onCheckedChange={() => handleToggleLeft(item.id)}
                disabled={item.disabled || isDisabled}
              />
              <span>{item.label}</span>
            </label>
          ))}
          {filteredLeft.length === 0 && (
            <div className="text-center text-xs text-zinc-400 dark:text-zinc-500 py-16">
              No items found
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row sm:flex-col gap-2">
        <Button
          size="sm"
          variant="bordered"
          onClick={moveAllRight}
          isDisabled={
            leftItems.filter((i) => !i.disabled).length === 0 || isDisabled
          }
          aria-label="Move all right"
          className="h-9 w-9 p-0"
        >
          <Icon icon="lucide:chevrons-right" className="size-4" />
        </Button>
        <Button
          size="sm"
          variant="bordered"
          onClick={moveCheckedRight}
          isDisabled={leftChecked.length === 0 || isDisabled}
          aria-label="Move selected right"
          className="h-9 w-9 p-0"
        >
          <Icon icon="lucide:chevron-right" className="size-4" />
        </Button>
        <Button
          size="sm"
          variant="bordered"
          onClick={moveCheckedLeft}
          isDisabled={rightChecked.length === 0 || isDisabled}
          aria-label="Move selected left"
          className="h-9 w-9 p-0"
        >
          <Icon icon="lucide:chevron-left" className="size-4" />
        </Button>
        <Button
          size="sm"
          variant="bordered"
          onClick={moveAllLeft}
          isDisabled={
            rightItems.filter((i) => !i.disabled).length === 0 || isDisabled
          }
          aria-label="Move all left"
          className="h-9 w-9 p-0"
        >
          <Icon icon="lucide:chevrons-left" className="size-4" />
        </Button>
      </div>

      <div
        className={cn(
          "flex flex-col w-full sm:w-1/2 min-h-[360px] max-h-[460px] border overflow-hidden",
          designRadius[radius],
          variant === "default" &&
            "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-xs",
          variant === "bordered" &&
            "bg-transparent border-2 border-zinc-200 dark:border-zinc-800",
          variant === "flat" &&
            "bg-zinc-100 dark:bg-zinc-800/80 border-transparent",
        )}
      >
        <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={isAllRightChecked}
              isIndeterminate={isSomeRightChecked}
              onCheckedChange={handleToggleAllRight}
              disabled={nonDisabledRight.length === 0 || isDisabled}
            />
            <span>{rightTitle}</span>
          </div>
          <span>
            {
              rightChecked.filter((id) => rightItems.some((i) => i.id === id))
                .length
            }{" "}
            of {rightItems.length} selected
          </span>
        </div>
        {showSearch && (
          <div className="p-2 border-b border-zinc-200 dark:border-zinc-800">
            <Input
              size="sm"
              placeholder="Search..."
              value={rightSearch}
              onChange={(e) => setRightSearch(e.target.value)}
              isClearable
              startContent={
                <Icon icon="lucide:search" className="size-3.5 text-zinc-400" />
              }
            />
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredRight.map((item) => (
            <label
              key={item.id}
              className={cn(
                "flex items-center gap-3 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 cursor-pointer text-sm text-zinc-700 dark:text-zinc-300",
                item.disabled &&
                  "opacity-50 pointer-events-none cursor-not-allowed",
              )}
            >
              <Checkbox
                checked={rightChecked.includes(item.id)}
                onCheckedChange={() => handleToggleRight(item.id)}
                disabled={item.disabled || isDisabled}
              />
              <span>{item.label}</span>
            </label>
          ))}
          {filteredRight.length === 0 && (
            <div className="text-center text-xs text-zinc-400 dark:text-zinc-500 py-16">
              No items selected
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TransferList.displayName = "TransferList";
