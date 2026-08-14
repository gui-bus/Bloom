"use client";

import { Icon } from "@iconify/react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Input } from "@/components/ui/input/input";
import { cn } from "@/lib/utils";

export const comboboxVariants = cva(
  "min-h-10 w-full flex items-center justify-between px-3 py-1.5 text-sm transition-all cursor-pointer select-none outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 text-zinc-900 dark:text-zinc-100 rounded-xl",
        bordered:
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 focus:border-sky-500 text-zinc-900 dark:text-zinc-100 rounded-xl",
        flat: "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-900 focus:border-sky-500 border text-zinc-900 dark:text-zinc-100 rounded-xl",
        underlined:
          "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 px-0 focus:border-sky-500 text-zinc-900 dark:text-zinc-100 rounded-none",
        filled:
          "bg-zinc-100 dark:bg-zinc-800/80 border border-transparent focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 text-zinc-900 dark:text-zinc-100 rounded-xl",
        glassmorphism:
          "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 focus:border-sky-500 shadow-lg text-zinc-900 dark:text-zinc-100 rounded-xl",
        "gradient-border":
          "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 focus:ring-2 focus:ring-indigo-500/30 rounded-xl",
        glow: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus:border-sky-500 focus:shadow-[0_0_12px_rgba(14,165,233,0.35)] text-zinc-900 dark:text-zinc-100 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ComboboxOption {
  value: string;
  label: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
  group?: string;
  badge?: string | React.ReactNode;
  [key: string]: any;
}

export interface ComboboxProps extends VariantProps<typeof comboboxVariants> {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  isMulti?: boolean;
  multiValue?: string[];
  defaultMultiValue?: string[];
  onMultiChange?: (values: string[]) => void;
  allowCreate?: boolean;
  onCreate?: (searchQuery: string) => void;
  isVirtualized?: boolean;
  itemHeight?: number;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  label?: React.ReactNode;
  disabled?: boolean;
  isInvalid?: boolean;
  isClearable?: boolean;
  isFuzzySearch?: boolean;
  isRequired?: boolean;
  className?: string;
}

function fuzzyScore(target: string, query: string): number {
  const t = target.toLowerCase();
  const q = query.toLowerCase();

  if (t === q) return 100;
  if (t.startsWith(q)) return 80;
  if (t.includes(q)) return 60;

  let qIdx = 0;
  let matches = 0;
  for (let i = 0; i < t.length && qIdx < q.length; i++) {
    if (t[i] === q[qIdx]) {
      matches++;
      qIdx++;
    }
  }

  if (qIdx === q.length) {
    return Math.floor((matches / t.length) * 40);
  }

  return 0;
}

export function Combobox({
  options,
  value,
  defaultValue = "",
  onValueChange,
  isMulti = false,
  multiValue,
  defaultMultiValue = [],
  onMultiChange,
  allowCreate = false,
  onCreate,
  isVirtualized = false,
  itemHeight = 44,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  emptyText = "No options found.",
  label,
  disabled = false,
  isInvalid = false,
  isClearable = false,
  isFuzzySearch = true,
  isRequired = false,
  className,
  variant,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [selectedSingle, setSelectedSingle] = React.useState<string>(
    value !== undefined ? value : defaultValue,
  );
  const [selectedMulti, setSelectedMulti] = React.useState<string[]>(
    multiValue !== undefined ? multiValue : defaultMultiValue,
  );

  const containerRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedSingle(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (multiValue !== undefined) {
      setSelectedMulti(multiValue);
    }
  }, [multiValue]);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = React.useMemo(() => {
    if (!search.trim()) return options;

    const q = search.trim();
    if (!isFuzzySearch) {
      return options.filter(
        (o) =>
          o.label.toLowerCase().includes(q.toLowerCase()) ||
          o.description?.toLowerCase().includes(q.toLowerCase()),
      );
    }

    return options
      .map((opt) => {
        const labelScore = fuzzyScore(opt.label, q);
        const descScore = opt.description ? fuzzyScore(opt.description, q) : 0;
        const maxScore = Math.max(labelScore, descScore);
        return { option: opt, score: maxScore };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.option);
  }, [options, search, isFuzzySearch]);

  const exactMatchExists = React.useMemo(() => {
    if (!search.trim()) return true;
    return options.some(
      (opt) => opt.label.toLowerCase() === search.trim().toLowerCase(),
    );
  }, [options, search]);

  const groupedOptions = React.useMemo(() => {
    const groups: Record<string, ComboboxOption[]> = {};
    const ungrouped: ComboboxOption[] = [];

    filteredOptions.forEach((opt) => {
      if (opt.group) {
        if (!groups[opt.group]) groups[opt.group] = [];
        groups[opt.group].push(opt);
      } else {
        ungrouped.push(opt);
      }
    });

    return { groups, ungrouped };
  }, [filteredOptions]);

  const selectedOption = options.find((opt) => opt.value === selectedSingle);

  const selectedMultiOptions = React.useMemo(() => {
    return selectedMulti.map((val) => {
      const found = options.find((o) => o.value === val);
      return found ?? { value: val, label: val };
    });
  }, [selectedMulti, options]);

  const handleSelect = (option: ComboboxOption) => {
    if (option.disabled) return;

    if (isMulti) {
      const isAlreadySelected = selectedMulti.includes(option.value);
      const nextMulti = isAlreadySelected
        ? selectedMulti.filter((v) => v !== option.value)
        : [...selectedMulti, option.value];
      setSelectedMulti(nextMulti);
      onMultiChange?.(nextMulti);
    } else {
      setSelectedSingle(option.value);
      onValueChange?.(option.value);
      setOpen(false);
      setSearch("");
    }
  };

  const handleRemoveTag = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMulti = selectedMulti.filter((v) => v !== val);
    setSelectedMulti(nextMulti);
    onMultiChange?.(nextMulti);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMulti) {
      setSelectedMulti([]);
      onMultiChange?.([]);
    } else {
      setSelectedSingle("");
      onValueChange?.("");
    }
  };

  const handleCreateNew = () => {
    const trimmed = search.trim();
    if (!trimmed) return;
    onCreate?.(trimmed);
    if (isMulti) {
      const nextMulti = [...selectedMulti, trimmed];
      setSelectedMulti(nextMulti);
      onMultiChange?.(nextMulti);
    } else {
      setSelectedSingle(trimmed);
      onValueChange?.(trimmed);
      setOpen(false);
    }
    setSearch("");
  };

  const totalCount = filteredOptions.length;
  const containerHeight = 224;
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 3;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 1);
  const endIndex = Math.min(totalCount, startIndex + visibleCount);
  const visibleOptions = filteredOptions.slice(startIndex, endIndex);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full flex flex-col gap-1.5")}
    >
      {label && (
        <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
          {label}
          {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
        </label>
      )}

      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (!disabled && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setOpen((prev) => !prev);
          }
        }}
        className={cn(
          comboboxVariants({ variant }),
          isInvalid && "border-rose-500 dark:border-rose-500 text-rose-500",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          className,
        )}
      >
        <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 pr-2">
          {isMulti ? (
            selectedMultiOptions.length === 0 ? (
              <span className="text-zinc-400 dark:text-zinc-500 text-sm truncate">
                {placeholder}
              </span>
            ) : (
              selectedMultiOptions.map((opt) => (
                <span
                  key={opt.value}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-xs"
                >
                  {opt.icon && (
                    <Icon
                      icon={opt.icon}
                      className="size-3 text-sky-500 shrink-0"
                    />
                  )}
                  <span className="truncate max-w-28">{opt.label}</span>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => handleRemoveTag(opt.value, e)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleRemoveTag(opt.value, e as any);
                      }
                    }}
                    className="p-0.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Icon icon="hugeicons:cancel-01" className="size-3" />
                  </span>
                </span>
              ))
            )
          ) : (
            <span className="flex items-center gap-2 truncate">
              {selectedOption?.icon && (
                <Icon
                  icon={selectedOption.icon}
                  className="size-4 shrink-0 text-sky-500"
                />
              )}
              <span
                className={cn(
                  "truncate",
                  !selectedOption && "text-zinc-400 dark:text-zinc-500",
                )}
              >
                {selectedOption ? selectedOption.label : placeholder}
              </span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {isClearable &&
            (isMulti ? selectedMulti.length > 0 : Boolean(selectedSingle)) && (
              <span
                role="button"
                tabIndex={0}
                onClick={handleClear}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClear(e as any);
                  }
                }}
                className="p-0.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
              >
                <Icon icon="hugeicons:cancel-01" className="size-3.5" />
              </span>
            )}
          <Icon
            icon="hugeicons:unfold-more"
            className="size-4 text-zinc-400 dark:text-zinc-500"
          />
        </div>
      </div>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl text-zinc-900 dark:text-zinc-100 shadow-2xl outline-none animate-in fade-in-80 p-2 flex flex-col gap-1.5">
          <Input
            size="sm"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            startContent={
              <Icon
                icon="hugeicons:search-01"
                className="size-3.5 text-zinc-400"
              />
            }
          />

          {allowCreate && search.trim() && !exactMatchExists && (
            <button
              type="button"
              onClick={handleCreateNew}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold hover:bg-sky-500/20 transition-colors cursor-pointer"
            >
              <Icon icon="hugeicons:add-01" className="size-3.5" />
              <span>Create "{search.trim()}"</span>
            </button>
          )}

          {isVirtualized ? (
            <div
              ref={listRef}
              onScroll={(e) =>
                setScrollTop((e.target as HTMLDivElement).scrollTop)
              }
              style={{
                height: Math.min(containerHeight, totalCount * itemHeight),
              }}
              className="overflow-y-auto relative w-full"
            >
              {totalCount === 0 ? (
                <p className="py-4 px-3 text-xs text-zinc-400 dark:text-zinc-500 text-center">
                  {emptyText}
                </p>
              ) : (
                <div
                  style={{
                    height: totalCount * itemHeight,
                    position: "relative",
                  }}
                >
                  {visibleOptions.map((option, idx) => {
                    const realIndex = startIndex + idx;
                    const isSelected = isMulti
                      ? selectedMulti.includes(option.value)
                      : selectedSingle === option.value;
                    return (
                      <div
                        key={option.value}
                        style={{
                          position: "absolute",
                          top: realIndex * itemHeight,
                          left: 0,
                          right: 0,
                          height: itemHeight,
                        }}
                        className="px-1 py-0.5"
                      >
                        {renderOptionItem(
                          option,
                          isSelected,
                          isMulti,
                          handleSelect,
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="max-h-56 overflow-y-auto space-y-1">
              {filteredOptions.length === 0 ? (
                <p className="py-4 px-3 text-xs text-zinc-400 dark:text-zinc-500 text-center">
                  {emptyText}
                </p>
              ) : (
                <>
                  {Object.entries(groupedOptions.groups).map(
                    ([groupName, groupOpts]) => (
                      <div key={groupName} className="space-y-0.5">
                        <div className="sticky top-0 z-10 bg-zinc-100/90 dark:bg-zinc-800/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
                          {groupName}
                        </div>
                        {groupOpts.map((option) => {
                          const isSelected = isMulti
                            ? selectedMulti.includes(option.value)
                            : selectedSingle === option.value;
                          return renderOptionItem(
                            option,
                            isSelected,
                            isMulti,
                            handleSelect,
                          );
                        })}
                      </div>
                    ),
                  )}

                  {groupedOptions.ungrouped.map((option) => {
                    const isSelected = isMulti
                      ? selectedMulti.includes(option.value)
                      : selectedSingle === option.value;
                    return renderOptionItem(
                      option,
                      isSelected,
                      isMulti,
                      handleSelect,
                    );
                  })}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function renderOptionItem(
  option: ComboboxOption,
  isSelected: boolean,
  _isMulti: boolean,
  handleSelect: (opt: ComboboxOption) => void,
) {
  return (
    <div
      key={option.value}
      role="button"
      tabIndex={option.disabled ? -1 : 0}
      onClick={() => handleSelect(option)}
      onKeyDown={(e) => {
        if (!option.disabled && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleSelect(option);
        }
      }}
      className={cn(
        "w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs text-left transition-colors cursor-pointer select-none h-full",
        isSelected
          ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold"
          : "hover:bg-zinc-100 dark:hover:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300",
        option.disabled && "opacity-40 cursor-not-allowed pointer-events-none",
      )}
    >
      <div className="flex items-center gap-2.5 truncate flex-1 min-w-0 pr-2">
        {option.icon && (
          <Icon icon={option.icon} className="size-4 shrink-0 text-zinc-400" />
        )}
        <div className="flex flex-col truncate min-w-0">
          <div className="flex items-center gap-1.5 truncate">
            <span className="truncate">{option.label}</span>
            {option.disabled && (
              <span className="text-[9px] uppercase px-1.5 py-0.2 font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md">
                Disabled
              </span>
            )}
          </div>
          {option.description && (
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate font-normal">
              {option.description}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {option.badge && (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {option.badge}
          </span>
        )}
        {isSelected && (
          <Icon
            icon="hugeicons:tick-02"
            className="size-4 text-sky-500 shrink-0 ml-1"
          />
        )}
      </div>
    </div>
  );
}
