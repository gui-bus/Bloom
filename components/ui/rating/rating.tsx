"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export type RatingColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger";

export interface RatingProps {
  value?: number;
  defaultValue?: number;
  max?: number;
  allowHalf?: boolean;
  onValueChange?: (val: number) => void;
  color?: RatingColor;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  readOnly?: boolean;
  label?: React.ReactNode;
  icon?: string;
  emojiMap?: Record<number, string>;
  showTooltip?: boolean;
  className?: string;
}

const colorActiveMap: Record<RatingColor, string> = {
  default: "text-zinc-900 dark:text-zinc-100 fill-zinc-900 dark:fill-zinc-100",
  primary: "text-sky-500 fill-sky-500",
  secondary: "text-purple-500 fill-purple-500",
  accent: "text-pink-500 fill-pink-500",
  success: "text-emerald-500 fill-emerald-500",
  warning: "text-amber-400 fill-amber-400",
  danger: "text-rose-500 fill-rose-500",
};

const sizeMap = {
  sm: "size-4 text-sm",
  md: "size-5 text-base",
  lg: "size-7 text-2xl",
};

const DEFAULT_EMOJIS: Record<number, string> = {
  1: "😠",
  2: "🙁",
  3: "😐",
  4: "😃",
  5: "😍",
};

export function Rating({
  value,
  defaultValue = 0,
  max = 5,
  allowHalf = false,
  onValueChange,
  color = "warning",
  size = "md",
  disabled = false,
  readOnly = false,
  label,
  icon = "hugeicons:star",
  emojiMap,
  showTooltip = false,
  className,
}: RatingProps) {
  const [internalVal, setInternalVal] = React.useState<number>(
    value !== undefined ? value : defaultValue,
  );
  const [hoverVal, setHoverVal] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalVal(value);
    }
  }, [value]);

  const activeVal = hoverVal !== null ? hoverVal : internalVal;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    starIndex: number,
  ) => {
    if (disabled || readOnly) return;
    if (!allowHalf) {
      setHoverVal(starIndex);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const isLeftHalf = e.clientX - rect.left < rect.width / 2;
    setHoverVal(isLeftHalf ? starIndex - 0.5 : starIndex);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    starIndex: number,
  ) => {
    if (disabled || readOnly) return;
    let selectedVal = starIndex;
    if (allowHalf) {
      const rect = e.currentTarget.getBoundingClientRect();
      const isLeftHalf = e.clientX - rect.left < rect.width / 2;
      selectedVal = isLeftHalf ? starIndex - 0.5 : starIndex;
    }
    setInternalVal(selectedVal);
    onValueChange?.(selectedVal);
  };

  const activeEmoji = React.useMemo(() => {
    if (!emojiMap && !DEFAULT_EMOJIS) return null;
    const map = emojiMap || DEFAULT_EMOJIS;
    const roundedIndex = Math.ceil(activeVal);
    return map[roundedIndex] || null;
  }, [emojiMap, activeVal]);

  return (
    <div className={cn("flex flex-col gap-1.5 select-none", className)}>
      {(label || showTooltip) && (
        <div className="flex items-center justify-between text-xs font-semibold text-zinc-900 dark:text-zinc-100">
          {label && <span>{label}</span>}
          {showTooltip && (
            <span className="font-mono text-zinc-500 dark:text-zinc-400">
              {activeVal} / {max}
            </span>
          )}
        </div>
      )}

      <div
        className={cn(
          "flex items-center gap-1.5",
          disabled && "opacity-50 cursor-not-allowed",
          readOnly && "cursor-default",
        )}
      >
        {emojiMap ? (
          <div className="flex items-center gap-2">
            {Array.from({ length: max }).map((_, i) => {
              const itemVal = i + 1;
              const isSelected = activeVal >= itemVal;
              const emojiChar =
                emojiMap[itemVal] || DEFAULT_EMOJIS[itemVal] || "⭐";

              return (
                <button
                  key={itemVal}
                  type="button"
                  disabled={disabled || readOnly}
                  onClick={() => {
                    if (disabled || readOnly) return;
                    setInternalVal(itemVal);
                    onValueChange?.(itemVal);
                  }}
                  onMouseEnter={() =>
                    !disabled && !readOnly && setHoverVal(itemVal)
                  }
                  onMouseLeave={() => setHoverVal(null)}
                  className={cn(
                    "transition-all duration-200 cursor-pointer outline-none focus-visible:scale-125 select-none",
                    isSelected
                      ? "scale-110 opacity-100 filter drop-shadow-md"
                      : "scale-90 opacity-40 grayscale",
                    readOnly && "cursor-default hover:scale-100",
                  )}
                >
                  <span className={cn(sizeMap[size])}>{emojiChar}</span>
                </button>
              );
            })}
          </div>
        ) : (
          Array.from({ length: max }).map((_, i) => {
            const starIndex = i + 1;
            const isFull = activeVal >= starIndex;
            const isHalf = !isFull && activeVal >= starIndex - 0.5;

            return (
              <button
                key={starIndex}
                type="button"
                disabled={disabled || readOnly}
                onClick={(e) => handleClick(e, starIndex)}
                onMouseMove={(e) => handleMouseMove(e, starIndex)}
                onMouseLeave={() => setHoverVal(null)}
                className={cn(
                  "relative inline-flex items-center justify-center p-0.5 outline-none transition-transform focus-visible:scale-125 hover:scale-115 cursor-pointer disabled:cursor-not-allowed",
                  readOnly && "cursor-default hover:scale-100",
                )}
                aria-label={`Rate ${starIndex} out of ${max}`}
              >
                <Icon
                  icon={icon}
                  className={cn(
                    sizeMap[size],
                    "text-zinc-300 dark:text-zinc-700 fill-transparent",
                  )}
                />

                {(isFull || isHalf) && (
                  <div
                    className="absolute left-0.5 top-0.5 overflow-hidden transition-all duration-150"
                    style={{ width: isHalf ? "50%" : "100%" }}
                  >
                    <Icon
                      icon={icon}
                      className={cn(sizeMap[size], colorActiveMap[color])}
                    />
                  </div>
                )}
              </button>
            );
          })
        )}

        {emojiMap && activeEmoji && (
          <span className="ml-2 text-xs font-semibold text-zinc-500 animate-in fade-in-50">
            {activeEmoji}
          </span>
        )}
      </div>
    </div>
  );
}
