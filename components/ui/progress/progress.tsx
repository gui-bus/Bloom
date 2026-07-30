"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export type ProgressColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
  size?: "sm" | "md" | "lg";
  color?: ProgressColor;
  isIndeterminate?: boolean;
  label?: string;
  showValueLabel?: boolean;
}

const progressSizes = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

const progressColors: Record<ProgressColor, string> = {
  default: "bg-zinc-900 dark:bg-zinc-100",
  primary: "bg-sky-500 dark:bg-sky-400",
  secondary: "bg-purple-500 dark:bg-purple-400",
  accent: "bg-pink-500 dark:bg-pink-400",
  success: "bg-emerald-500 dark:bg-emerald-400",
  warning: "bg-amber-500 dark:bg-amber-400",
  danger: "bg-rose-500 dark:bg-rose-400",
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value = 0,
      size = "md",
      color = "primary",
      isIndeterminate = false,
      label,
      showValueLabel = false,
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
      <div className="w-full space-y-1.5">
        {(label || showValueLabel) && (
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            {label ? <span>{label}</span> : <span />}
            {showValueLabel && !isIndeterminate && (
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                {Math.round(clampedValue)}%
              </span>
            )}
          </div>
        )}

        <ProgressPrimitive.Root
          ref={ref}
          aria-label={label || "Progress bar"}
          value={isIndeterminate ? undefined : clampedValue}
          className={cn(
            "relative w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800/50 shrink-0",
            progressSizes[size],
            className
          )}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={cn(
              "h-full w-full flex-1 transition-all duration-300 ease-in-out rounded-full",
              progressColors[color],
              isIndeterminate && "animate-progress-indeterminate origin-left"
            )}
            style={
              isIndeterminate
                ? undefined
                : { transform: `translateX(-${100 - clampedValue}%)` }
            }
          />
        </ProgressPrimitive.Root>
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };
