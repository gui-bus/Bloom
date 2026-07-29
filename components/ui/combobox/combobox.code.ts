export const comboboxCode = `"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input/input";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  emptyText?: string;
  label?: React.ReactNode;
  disabled?: boolean;
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
  emptyText = "No results found.",
  label,
  disabled = false,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState<string>(value || "");
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

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedOption = options.find((opt) => opt.value === selected);

  const handleSelect = (val: string) => {
    setSelected(val);
    onValueChange?.(val);
    setOpen(false);
    setSearch("");
  };

  return (
    <div ref={containerRef} className="relative w-full flex flex-col gap-1.5">
      {label && <label className="text-xs font-semibold text-foreground/90 select-none">{label}</label>}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className="h-10 w-full flex items-center justify-between rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus:ring-2 focus:ring-ring cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className={cn("truncate", !selectedOption && "text-muted-foreground")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronsUpDown className="size-4 shrink-0 opacity-50 ml-2" />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-xl border border-border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-80 p-1.5 flex flex-col gap-1">
          <Input
            size="sm"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <div className="max-h-48 overflow-y-auto space-y-0.5">
            {filteredOptions.length === 0 ? (
              <p className="py-2 px-3 text-xs text-muted-foreground text-center">{emptyText}</p>
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className="w-full flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground cursor-pointer"
                >
                  <span>{option.label}</span>
                  {selected === option.value && <Check className="size-3.5 text-primary" />}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}`;
