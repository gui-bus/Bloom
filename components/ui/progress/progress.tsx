"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";
import { cn } from "@/lib/utils";

export type ProgressColor =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";

export interface ProgressStep {
  value: number;
  label?: string;
}

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
  size?: "sm" | "md" | "lg";
  color?: ProgressColor;
  isIndeterminate?: boolean;
  isBarberPole?: boolean;
  steps?: (number | ProgressStep)[];
  label?: string;
  showValueLabel?: boolean;
}

const progressSizes = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

const progressColors: Record<ProgressColor, string> = {
  default: "bg-zinc-300 dark:bg-zinc-700",
  primary: "bg-sky-500 dark:bg-sky-400",
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
      isBarberPole = false,
      steps,
      label,
      showValueLabel = false,
      ...props
    },
    ref,
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

        <div className="relative w-full">
          <ProgressPrimitive.Root
            ref={ref}
            aria-label={label || "Progress bar"}
            value={isIndeterminate ? undefined : clampedValue}
            className={cn(
              "relative w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800/50 shrink-0",
              progressSizes[size],
              className,
            )}
            {...props}
          >
            <ProgressPrimitive.Indicator
              className={cn(
                "h-full w-full flex-1 transition-all duration-300 ease-in-out rounded-full relative",
                progressColors[color],
                isIndeterminate &&
                  !isBarberPole &&
                  "animate-progress-indeterminate origin-left",
                isBarberPole &&
                  "bg-[linear-gradient(45deg,rgba(255,255,255,0.25)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.25)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-stripe-move",
              )}
              style={
                isIndeterminate
                  ? undefined
                  : { transform: `translateX(-${100 - clampedValue}%)` }
              }
            />
          </ProgressPrimitive.Root>

          {steps && steps.length > 0 && (
            <div className="absolute inset-0 pointer-events-none flex items-center px-1">
              {steps.map((stepItem, idx) => {
                const stepVal =
                  typeof stepItem === "number" ? stepItem : stepItem.value;
                const isPassed = clampedValue >= stepVal;
                return (
                  <div
                    key={idx}
                    className="absolute -translate-x-1/2 flex flex-col items-center"
                    style={{ left: `${stepVal}%` }}
                  >
                    <div
                      className={cn(
                        "size-2 rounded-full border border-white dark:border-zinc-900 transition-colors",
                        isPassed
                          ? "bg-white dark:bg-zinc-900"
                          : "bg-zinc-300 dark:bg-zinc-700",
                      )}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  },
);

Progress.displayName = "Progress";

export { Progress };
