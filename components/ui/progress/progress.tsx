"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { designColors } from "@/lib/design-system";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
  size?: "sm" | "md" | "lg";
  color?: keyof typeof designColors;
  isIndeterminate?: boolean;
  label?: string;
  showValueLabel?: boolean;
}

const progressSizes = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

const progressColors = {
  default: "bg-foreground",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
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
          <div className="flex items-center justify-between text-sm font-medium text-foreground">
            {label ? <span>{label}</span> : <span />}
            {showValueLabel && !isIndeterminate && (
              <span className="text-xs text-muted-foreground">{Math.round(clampedValue)}%</span>
            )}
          </div>
        )}

        <ProgressPrimitive.Root
          ref={ref}
          aria-label={label || "Progress bar"}
          value={isIndeterminate ? undefined : clampedValue}
          className={cn(
            "relative w-full overflow-hidden rounded-full bg-muted/60 shrink-0",
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
