"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";
import { Icon } from "@iconify/react";

export interface AutocompleteOption {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearchChange?: (search: string) => void;
  placeholder?: string;
  label?: React.ReactNode;
  allowCustomValue?: boolean;
  isSearching?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  errorMessage?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: keyof typeof designRadius;
  variant?: "default" | "bordered" | "flat" | "underlined";
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  highlightMatch?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "h-8 px-2.5 text-xs",
  md: "h-10 px-3 text-sm",
  lg: "h-12 px-4 text-base",
};

export const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options = [],
      value: customValue,
      defaultValue = "",
      onChange,
      onSearchChange,
      placeholder = "Search...",
      label,
      allowCustomValue = false,
      isSearching = false,
      isDisabled = false,
      isInvalid = false,
      errorMessage,
      size = "md",
      radius = "lg",
      variant = "default",
      startContent,
      endContent,
      highlightMatch = true,
      className,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState(defaultValue);
    const [isOpen, setIsOpen] = React.useState(false);
    const [highlightedIndex, setHighlightedIndex] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const filteredOptions = React.useMemo(() => {
      if (!inputValue) return options;
      return options.filter((opt) =>
        opt.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    }, [options, inputValue]);

    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: AutocompleteOption) => {
      if (option.disabled) return;
      setInputValue(option.label);
      onChange?.(option.value);
      setIsOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInputValue(val);
      onSearchChange?.(val);
      setIsOpen(true);
      setHighlightedIndex(0);
      if (allowCustomValue) {
        onChange?.(val);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          setIsOpen(true);
        }
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % Math.max(1, filteredOptions.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev === 0 ? Math.max(0, filteredOptions.length - 1) : prev - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex]);
        }
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const renderHighlightedText = (text: string, query: string) => {
      if (!query || !highlightMatch) return text;
      const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
      return (
        <span>
          {parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? (
              <mark key={i} className="bg-amber-200/80 dark:bg-amber-500/40 text-amber-900 dark:text-amber-100 rounded-xs px-0.5 font-bold">
                {part}
              </mark>
            ) : (
              part
            )
          )}
        </span>
      );
    };

    return (
      <div ref={containerRef} className="relative w-full flex flex-col gap-1.5">
        {label && <label className="text-xs font-semibold text-foreground/90">{label}</label>}
        <div
          className={cn(
            "relative flex items-center w-full border border-input bg-background transition-all focus-within:ring-1 focus-within:ring-ring",
            sizeMap[size],
            designRadius[radius],
            isInvalid && "border-danger text-danger",
            isDisabled && "opacity-50 pointer-events-none",
            className
          )}
        >
          {startContent && <span className="mr-2 text-muted-foreground">{startContent}</span>}
          <input
            ref={ref}
            type="text"
            value={customValue !== undefined ? customValue : inputValue}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isDisabled}
            className="w-full h-full bg-transparent outline-none placeholder:text-muted-foreground"
          />
          {isSearching ? (
            <Icon icon="hugeicons:loading-01" className="size-4 animate-spin text-muted-foreground ml-2" />
          ) : (
            <Icon icon="hugeicons:arrow-down-01" className="size-4 text-muted-foreground ml-2 cursor-pointer" />
          )}
          {endContent}
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-xl border border-border bg-popover p-1 shadow-md animate-in fade-in-0 zoom-in-95">
            {filteredOptions.length === 0 ? (
              <div className="p-2 text-xs text-muted-foreground text-center">
                {isSearching ? "Searching..." : "No results found"}
              </div>
            ) : (
              filteredOptions.map((opt, idx) => (
                <div
                  key={opt.value}
                  onClick={() => handleSelect(opt)}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  className={cn(
                    "flex flex-col px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors",
                    highlightedIndex === idx && "bg-accent text-accent-foreground",
                    opt.disabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <span className="font-medium">{renderHighlightedText(opt.label, inputValue)}</span>
                  {opt.description && (
                    <span className="text-xs text-muted-foreground">{opt.description}</span>
                  )}
                </div>
              ))
            )}
          </div>
        )}
        {isInvalid && errorMessage && <p className="text-xs text-danger font-medium">{errorMessage}</p>}
      </div>
    );
  }
);
Autocomplete.displayName = "Autocomplete";
