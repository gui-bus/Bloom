"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface MultiSelectOption {
  label: string;
  value: string;
  category?: string;
  icon?: React.ReactNode;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  label?: React.ReactNode;
  maxCount?: number;
  showSelectAll?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  className?: string;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select options...",
  label,
  maxCount,
  showSelectAll = true,
  isDisabled = false,
  isInvalid = false,
  className,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [collapsedCategories, setCollapsedCategories] = React.useState<
    Record<string, boolean>
  >({});
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      if (maxCount && value.length >= maxCount) return;
      onChange([...value, optionValue]);
    }
  };

  const removeOption = (optionValue: string) => {
    onChange(value.filter((v) => v !== optionValue));
  };

  const selectAll = () => {
    const availableValues = filteredOptions.map((opt) => opt.value);
    const newValues = Array.from(new Set([...value, ...availableValues]));
    onChange(maxCount ? newValues.slice(0, maxCount) : newValues);
  };

  const deselectAll = () => {
    onChange([]);
  };

  const toggleCategoryCollapse = (category: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && search === "" && value.length > 0) {
      onChange(value.slice(0, -1));
    }
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearch("");
    }
  };

  const filteredOptions = options.filter(
    (opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase()) ||
      opt.category?.toLowerCase().includes(search.toLowerCase()),
  );

  const selectedOptions = options.filter((opt) => value.includes(opt.value));

  // Group options by category if category field exists
  const groupedOptions = React.useMemo(() => {
    const groups: Record<string, MultiSelectOption[]> = {};
    const ungrouped: MultiSelectOption[] = [];

    filteredOptions.forEach((opt) => {
      if (opt.category) {
        if (!groups[opt.category]) groups[opt.category] = [];
        groups[opt.category].push(opt);
      } else {
        ungrouped.push(opt);
      }
    });

    return { groups, ungrouped };
  }, [filteredOptions]);

  const isAllSelected =
    filteredOptions.length > 0 &&
    filteredOptions.every((opt) => value.includes(opt.value));

  return (
    <div className={cn("relative w-full", className)} ref={containerRef}>
      {label && (
        <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
          {label}
        </label>
      )}
      <div
        className={cn(
          "flex flex-wrap items-center gap-1.5 min-h-[42px] px-3 py-2 rounded-2xl border bg-white dark:bg-zinc-900 transition-colors cursor-text",
          isInvalid
            ? "border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20"
            : "border-zinc-200 dark:border-zinc-800 focus-within:ring-2 focus-within:ring-sky-500/20 focus-within:border-sky-500",
          isDisabled && "opacity-50 cursor-not-allowed",
        )}
        onClick={() => {
          if (!isDisabled) {
            setIsOpen(true);
            inputRef.current?.focus();
          }
        }}
      >
        {selectedOptions.map((opt) => (
          <span
            key={opt.value}
            className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            {opt.icon && <span className="shrink-0">{opt.icon}</span>}
            {opt.label}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeOption(opt.value);
              }}
              className="ml-0.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 p-0.5 transition-colors"
              disabled={isDisabled}
            >
              <Icon icon="hugeicons:cancel-01" className="size-3" />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => !isDisabled && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ""}
          disabled={isDisabled}
          className="flex-1 min-w-[80px] bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 outline-none disabled:cursor-not-allowed"
        />
      </div>

      {/* Dropdown Panel */}
      {isOpen && !isDisabled && (
        <div className="absolute z-50 mt-2 w-full max-h-72 overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-1 space-y-1">
          {/* Batch Select All / Deselect All Action Bar */}
          {showSelectAll && filteredOptions.length > 0 && (
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30 rounded-xl mb-1">
              <span className="text-xs text-zinc-500 font-medium">
                {value.length} selected
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={isAllSelected ? deselectAll : selectAll}
                  className="text-xs font-semibold text-sky-500 hover:text-sky-600 transition-colors"
                >
                  {isAllSelected ? "Deselect All" : "Select All"}
                </button>
                {value.length > 0 && !isAllSelected && (
                  <button
                    type="button"
                    onClick={deselectAll}
                    className="text-xs text-rose-500 hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          )}

          {filteredOptions.length === 0 ? (
            <div className="px-4 py-3 text-sm text-zinc-400">
              No options found.
            </div>
          ) : (
            <>
              {/* Render Grouped Category Sections */}
              {Object.entries(groupedOptions.groups).map(
                ([categoryName, groupOpts]) => {
                  const isCollapsed = collapsedCategories[categoryName];
                  const categorySelectedCount = groupOpts.filter((opt) =>
                    value.includes(opt.value),
                  ).length;

                  return (
                    <div key={categoryName} className="space-y-0.5">
                      <button
                        type="button"
                        onClick={() => toggleCategoryCollapse(categoryName)}
                        className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 rounded-xl transition-colors select-none"
                      >
                        <span className="flex items-center gap-1.5">
                          <Icon
                            icon="hugeicons:arrow-down-01"
                            className={cn(
                              "size-3 transition-transform duration-200",
                              isCollapsed && "-rotate-90",
                            )}
                          />
                          {categoryName}
                        </span>
                        {categorySelectedCount > 0 && (
                          <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-sky-500/10 text-sky-500 font-semibold">
                            {categorySelectedCount}/{groupOpts.length}
                          </span>
                        )}
                      </button>

                      {!isCollapsed &&
                        groupOpts.map((opt) => renderOptionItem(opt))}
                    </div>
                  );
                },
              )}

              {/* Render Ungrouped Options */}
              {groupedOptions.ungrouped.map((opt) => renderOptionItem(opt))}
            </>
          )}
        </div>
      )}
    </div>
  );

  function renderOptionItem(opt: MultiSelectOption) {
    const isSelected = value.includes(opt.value);
    const isLimitReached = maxCount
      ? value.length >= maxCount && !isSelected
      : false;

    return (
      <button
        key={opt.value}
        type="button"
        onClick={() => toggleOption(opt.value)}
        disabled={isLimitReached}
        className={cn(
          "flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors rounded-xl",
          isSelected
            ? "text-sky-500 bg-sky-500/5 font-medium"
            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50",
          isLimitReached && "opacity-40 cursor-not-allowed",
        )}
      >
        <span
          className={cn(
            "flex items-center justify-center size-4 rounded border transition-colors",
            isSelected
              ? "bg-sky-500 border-sky-500 text-white"
              : "border-zinc-300 dark:border-zinc-600",
          )}
        >
          {isSelected && (
            <Icon icon="hugeicons:checkmark-circle-02" className="size-3" />
          )}
        </span>
        {opt.icon && <span className="shrink-0">{opt.icon}</span>}
        <span className="flex-1">{opt.label}</span>
      </button>
    );
  }
}
