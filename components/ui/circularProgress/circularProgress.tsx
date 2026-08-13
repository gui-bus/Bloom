"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CircularProgressColor =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";

export type CircularProgressSize = "sm" | "md" | "lg";

export interface CircularProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  size?: CircularProgressSize;
  color?: CircularProgressColor;
  isIndeterminate?: boolean;
  label?: string;
  showValueLabel?: boolean;
}

const circleSizeMap = {
  sm: { size: 48, stroke: 4, font: "text-[10px]" },
  md: { size: 72, stroke: 6, font: "text-xs" },
  lg: { size: 96, stroke: 8, font: "text-sm" },
};

const progressStrokeColors: Record<CircularProgressColor, string> = {
  default: "stroke-zinc-950 dark:stroke-zinc-50",
  primary: "stroke-sky-500 dark:stroke-sky-400",
  success: "stroke-emerald-500 dark:stroke-emerald-400",
  warning: "stroke-amber-500 dark:stroke-amber-400",
  danger: "stroke-rose-500 dark:stroke-rose-400",
};

const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
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
    ref,
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const circleConfig = circleSizeMap[size];
    const radius = (circleConfig.size - circleConfig.stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
      circumference - (clampedValue / 100) * circumference;

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex flex-col items-center gap-2 select-none",
          className,
        )}
        {...props}
      >
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
              className="stroke-zinc-200 dark:stroke-zinc-800/80 fill-none"
              strokeWidth={circleConfig.stroke}
            />
            <circle
              cx={circleConfig.size / 2}
              cy={circleConfig.size / 2}
              r={radius}
              className={cn(
                "fill-none transition-all duration-500 ease-out",
                progressStrokeColors[color],
              )}
              strokeWidth={circleConfig.stroke}
              strokeDasharray={circumference}
              strokeDashoffset={
                isIndeterminate ? circumference * 0.25 : strokeDashoffset
              }
              strokeLinecap="round"
            />
          </svg>
          {showValueLabel && !isIndeterminate && (
            <span
              className={cn(
                "absolute font-bold font-mono text-zinc-900 dark:text-zinc-100",
                circleConfig.font,
              )}
            >
              {Math.round(clampedValue)}%
            </span>
          )}
        </div>
        {label && (
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            {label}
          </span>
        )}
      </div>
    );
  },
);

CircularProgress.displayName = "CircularProgress";

export { CircularProgress };
