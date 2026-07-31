"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input/input";

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

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  label?: React.ReactNode;
  disabled?: boolean;
  isInvalid?: boolean;
  isClearable?: boolean;
  isFuzzySearch?: boolean; // Enable fuzzy matching mode
  className?: string;
}

/**
 * Simple Fuzzy matching algorithm
 * Calculates text similarity score allowing minor typos/misspellings/subsequence matches.
 */
function fuzzyScore(target: string, query: string): number {
  const t = target.toLowerCase();
  const q = query.toLowerCase();

  // Exact match
  if (t === q) return 100;
  // Prefix match
  if (t.startsWith(q)) return 80;
  // Includes match
  if (t.includes(q)) return 60;

  // Subsequence fuzzy match (checking if characters appear in order)
  let qIdx = 0;
  let matches = 0;
  for (let i = 0; i < t.length && qIdx < q.length; i++) {
    if (t[i] === q[qIdx]) {
      matches++;
      qIdx++;
    }
  }

  if (qIdx === q.length) {
    // Percentage of match score
    return Math.floor((matches / t.length) * 40);
  }

  return 0;
}

export function Combobox({
  options,
  value,
  defaultValue = "",
  onValueChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  emptyText = "No options found.",
  label,
  disabled = false,
  isInvalid = false,
  isClearable = false,
  isFuzzySearch = true,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState<string>(
    value !== undefined ? value : defaultValue
  );
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter & score options
  const filteredOptions = React.useMemo(() => {
    if (!search.trim()) return options;

    const q = search.trim();
    if (!isFuzzySearch) {
      return options.filter(
        (o) =>
          o.label.toLowerCase().includes(q.toLowerCase()) ||
          (o.description && o.description.toLowerCase().includes(q.toLowerCase()))
      );
    }

    // Fuzzy matching score & sort
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

  // Group options with sticky headers
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

  const selectedOption = options.find((opt) => opt.value === selected);

  const handleSelect = (option: ComboboxOption) => {
    if (option.disabled) return;
    setSelected(option.value);
    onValueChange?.(option.value);
    setOpen(false);
    setSearch("");
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected("");
    onValueChange?.("");
  };

  return (
    <div ref={containerRef} className={cn("relative w-full max-w-xs flex flex-col gap-1.5", className)}>
      {label && (
        <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
          {label}
        </label>
      )}

      {/* Main Trigger as div with role="button" to prevent nested button issues */}
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
          "h-10 w-full flex items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 shadow-xs outline-none focus:ring-2 focus:ring-sky-500/40 transition-all cursor-pointer select-none",
          isInvalid && "border-rose-500 dark:border-rose-500 text-rose-500",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none"
        )}
      >
        <span className="flex items-center gap-2 truncate">
          {selectedOption?.icon && <Icon icon={selectedOption.icon} className="size-4 shrink-0 text-sky-500" />}
          <span className={cn("truncate", !selectedOption && "text-zinc-400 dark:text-zinc-500")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>

        <div className="flex items-center gap-1 shrink-0 ml-2">
          {isClearable && selected && (
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
          <Icon icon="hugeicons:unfold-more" className="size-4 text-zinc-400 dark:text-zinc-500" />
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl text-zinc-900 dark:text-zinc-100 shadow-2xl outline-none animate-in fade-in-80 p-2 flex flex-col gap-1.5">
          <Input
            size="sm"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            startContent={<Icon icon="hugeicons:search-01" className="size-3.5 text-zinc-400" />}
          />

          <div className="max-h-56 overflow-y-auto space-y-1">
            {filteredOptions.length === 0 ? (
              <p className="py-4 px-3 text-xs text-zinc-400 dark:text-zinc-500 text-center">{emptyText}</p>
            ) : (
              <>
                {/* Grouped Options with Sticky Headers */}
                {Object.entries(groupedOptions.groups).map(([groupName, groupOpts]) => (
                  <div key={groupName} className="space-y-0.5">
                    <div className="sticky top-0 z-10 bg-zinc-100/90 dark:bg-zinc-800/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
                      {groupName}
                    </div>
                    {groupOpts.map((option) =>
                      renderOptionItem(option, selected, handleSelect)
                    )}
                  </div>
                ))}

                {/* Ungrouped Options */}
                {groupedOptions.ungrouped.map((option) =>
                  renderOptionItem(option, selected, handleSelect)
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function renderOptionItem(
  option: ComboboxOption,
  selected: string,
  handleSelect: (opt: ComboboxOption) => void
) {
  const isSelected = selected === option.value;
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
        "w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs text-left transition-colors cursor-pointer select-none",
        isSelected
          ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold"
          : "hover:bg-zinc-100 dark:hover:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300",
        option.disabled && "opacity-40 cursor-not-allowed pointer-events-none"
      )}
    >
      <div className="flex items-center gap-2.5 truncate flex-1 min-w-0 pr-2">
        {option.icon && <Icon icon={option.icon} className="size-4 shrink-0 text-zinc-400" />}
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
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate font-normal">{option.description}</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {option.badge && (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {option.badge}
          </span>
        )}
        {isSelected && <Icon icon="hugeicons:tick-02" className="size-4 text-sky-500 shrink-0 ml-1" />}
      </div>
    </div>
  );
}
