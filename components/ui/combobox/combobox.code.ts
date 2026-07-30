export const comboboxCode = `"use client";

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
  className?: string;
}

export function Combobox({
  options,
  value,
  defaultValue = "",
  onValueChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  label,
  disabled = false,
  isInvalid = false,
  isClearable = false,
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

  const filteredOptions = options.filter(
    (option) =>
      option.label.toLowerCase().includes(search.toLowerCase()) ||
      (option.description && option.description.toLowerCase().includes(search.toLowerCase()))
  );

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

      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "h-10 w-full flex items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 shadow-xs outline-none focus:ring-2 focus:ring-sky-500/40 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          isInvalid && "border-rose-500 dark:border-rose-500 text-rose-500"
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
              className="p-0.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
            >
              <Icon icon="hugeicons:cancel-01" className="size-3.5" />
            </span>
          )}
          <Icon icon="hugeicons:unfold-more" className="size-4 text-zinc-400 dark:text-zinc-500" />
        </div>
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xl outline-none animate-in fade-in-80 p-2 flex flex-col gap-1.5">
          <Input
            size="sm"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            startContent={<Icon icon="hugeicons:search-01" className="size-3.5 text-zinc-400" />}
          />

          <div className="max-h-48 overflow-y-auto space-y-0.5">
            {filteredOptions.length === 0 ? (
              <p className="py-3 px-3 text-xs text-zinc-400 dark:text-zinc-500 text-center">{emptyText}</p>
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  disabled={option.disabled}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs text-left transition-colors cursor-pointer",
                    selected === option.value
                      ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300",
                    option.disabled && "opacity-50 cursor-not-allowed pointer-events-none bg-zinc-50/50 dark:bg-zinc-900/50"
                  )}
                >
                  <div className="flex items-center gap-2 truncate">
                    {option.icon && <Icon icon={option.icon} className="size-4 shrink-0" />}
                    <div className="flex flex-col truncate">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-medium truncate">{option.label}</span>
                        {option.disabled && (
                          <span className="text-[9px] uppercase px-1.5 py-0.2 font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md">
                            Disabled
                          </span>
                        )}
                      </div>
                      {option.description && (
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate">{option.description}</span>
                      )}
                    </div>
                  </div>
                  {selected === option.value && <Icon icon="hugeicons:tick-02" className="size-4 text-sky-500 shrink-0 ml-2" />}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
`;
