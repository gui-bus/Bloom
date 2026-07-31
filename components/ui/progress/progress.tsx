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

export interface ProgressStep {
  value: number;
  label?: string;
}

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
  size?: "sm" | "md" | "lg";
  color?: ProgressColor;
  type?: "line" | "circle";
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

const circleSizeMap = {
  sm: { size: 48, stroke: 4, font: "text-[10px]" },
  md: { size: 72, stroke: 6, font: "text-xs" },
  lg: { size: 96, stroke: 8, font: "text-sm" },
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

const progressStrokeColors: Record<ProgressColor, string> = {
  default: "stroke-zinc-900 dark:stroke-zinc-100",
  primary: "stroke-sky-500 dark:stroke-sky-400",
  secondary: "stroke-purple-500 dark:stroke-purple-400",
  accent: "stroke-pink-500 dark:stroke-pink-400",
  success: "stroke-emerald-500 dark:stroke-emerald-400",
  warning: "stroke-amber-500 dark:stroke-amber-400",
  danger: "stroke-rose-500 dark:stroke-rose-400",
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
      type = "line",
      isIndeterminate = false,
      isBarberPole = false,
      steps,
      label,
      showValueLabel = false,
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    if (type === "circle") {
      const circleConfig = circleSizeMap[size];
      const radius = (circleConfig.size - circleConfig.stroke) / 2;
      const circumference = 2 * Math.PI * radius;
      const strokeDashoffset = circumference - (clampedValue / 100) * circumference;

      return (
        <div className={cn("inline-flex flex-col items-center gap-1.5", className)}>
          <div className="relative inline-flex items-center justify-center">
            <svg
              width={circleConfig.size}
              height={circleConfig.size}
              className={cn("rotate-[-90deg]", isIndeterminate && "animate-spin")}
            >
              <circle
                cx={circleConfig.size / 2}
                cy={circleConfig.size / 2}
                r={radius}
                className="stroke-zinc-200 dark:stroke-zinc-800 fill-none"
                strokeWidth={circleConfig.stroke}
              />
              <circle
                cx={circleConfig.size / 2}
                cy={circleConfig.size / 2}
                r={radius}
                className={cn("fill-none transition-all duration-500 ease-out", progressStrokeColors[color])}
                strokeWidth={circleConfig.stroke}
                strokeDasharray={circumference}
                strokeDashoffset={isIndeterminate ? circumference * 0.25 : strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            {showValueLabel && !isIndeterminate && (
              <span className={cn("absolute font-bold font-mono text-zinc-900 dark:text-zinc-100", circleConfig.font)}>
                {Math.round(clampedValue)}%
              </span>
            )}
          </div>
          {label && <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{label}</span>}
        </div>
      );
    }

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
              className
            )}
            {...props}
          >
            <ProgressPrimitive.Indicator
              className={cn(
                "h-full w-full flex-1 transition-all duration-300 ease-in-out rounded-full relative",
                progressColors[color],
                isIndeterminate && !isBarberPole && "animate-progress-indeterminate origin-left",
                isBarberPole && "bg-[linear-gradient(45deg,rgba(255,255,255,0.25)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.25)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[stripe-move_1s_linear_infinite]"
              )}
              style={
                isIndeterminate
                  ? undefined
                  : { transform: `translateX(-${100 - clampedValue}%)` }
              }
            />
          </ProgressPrimitive.Root>

          {/* Step Milestone Markers */}
          {steps && steps.length > 0 && (
            <div className="absolute inset-0 pointer-events-none flex items-center px-1">
              {steps.map((stepItem, idx) => {
                const stepVal = typeof stepItem === "number" ? stepItem : stepItem.value;
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
                        isPassed ? "bg-white dark:bg-zinc-900" : "bg-zinc-300 dark:bg-zinc-700"
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
  }
);

Progress.displayName = "Progress";

export { Progress };
