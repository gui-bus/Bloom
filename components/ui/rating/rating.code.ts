export const ratingCode = `"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RatingProps {
  value?: number;
  defaultValue?: number;
  max?: number;
  onValueChange?: (val: number) => void;
  color?: "default" | "primary" | "secondary" | "accent" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  readOnly?: boolean;
  label?: React.ReactNode;
}

const colorMap = {
  default: "text-foreground fill-foreground",
  primary: "text-primary fill-primary",
  secondary: "text-secondary fill-secondary",
  accent: "text-accent fill-accent",
  warning: "text-amber-400 fill-amber-400",
  danger: "text-danger fill-danger",
};

const sizeMap = {
  sm: "size-4",
  md: "size-5",
  lg: "size-7",
};

export function Rating({
  value,
  defaultValue = 0,
  max = 5,
  onValueChange,
  color = "warning",
  size = "md",
  disabled = false,
  readOnly = false,
  label,
}: RatingProps) {
  const [internalVal, setInternalVal] = React.useState<number>(
    value !== undefined ? value : defaultValue
  );
  const [hoverVal, setHoverVal] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalVal(value);
    }
  }, [value]);

  const handleClick = (index: number) => {
    if (disabled || readOnly) return;
    setInternalVal(index);
    onValueChange?.(index);
  };

  const activeVal = hoverVal !== null ? hoverVal : internalVal;

  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-xs font-semibold text-foreground/90 select-none">{label}</label>}
      <div
        className={cn(
          "flex items-center gap-1",
          disabled && "opacity-50 cursor-not-allowed",
          readOnly && "cursor-default"
        )}
      >
        {Array.from({ length: max }).map((_, i) => {
          const starIndex = i + 1;
          const isFilled = starIndex <= activeVal;

          return (
            <button
              key={starIndex}
              type="button"
              disabled={disabled || readOnly}
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => !disabled && !readOnly && setHoverVal(starIndex)}
              onMouseLeave={() => setHoverVal(null)}
              className={cn(
                "p-0.5 outline-none transition-transform focus-visible:scale-125 hover:scale-115 cursor-pointer disabled:cursor-not-allowed",
                readOnly && "cursor-default hover:scale-100"
              )}
              aria-label={`Rate ${starIndex} out of ${max}`}
            >
              <Star
                className={cn(
                  sizeMap[size],
                  "transition-colors duration-150",
                  isFilled ? colorMap[color] : "text-muted-foreground/40 fill-transparent"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
