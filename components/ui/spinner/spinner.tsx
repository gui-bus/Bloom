"use client";

import * as React from "react";
import type { designColors, designSizes } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export type SpinnerVariant =
  | "default"
  | "dots"
  | "bars"
  | "pulse"
  | "ring"
  | "gradient";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SpinnerVariant;
  size?: keyof typeof designSizes;
  color?: keyof typeof designColors;
  label?: string;
}

const spinnerSizes = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
  xl: "size-10",
  "2xl": "size-12",
  "3xl": "size-16",
};

const colorClasses = {
  default:
    "text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-800 border-t-zinc-900 dark:border-t-zinc-100",
  primary: "text-sky-500 border-sky-500/20 border-t-sky-500",
  secondary: "text-purple-500 border-purple-500/20 border-t-purple-500",
  accent: "text-pink-500 border-pink-500/20 border-t-pink-500",
  success: "text-emerald-500 border-emerald-500/20 border-t-emerald-500",
  warning: "text-amber-500 border-amber-500/20 border-t-amber-500",
  danger: "text-rose-500 border-rose-500/20 border-t-rose-500",
};

const bgPulseColors = {
  default: "bg-zinc-900 dark:bg-zinc-100",
  primary: "bg-sky-500",
  secondary: "bg-purple-500",
  accent: "bg-pink-500",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
};

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      color = "primary",
      label,
      ...props
    },
    ref,
  ) => {
    const renderSpinnerGraphic = () => {
      switch (variant) {
        case "dots":
          return (
            <div
              className={cn(
                "inline-flex items-center space-x-1 shrink-0",
                spinnerSizes[size],
              )}
            >
              <span
                className={cn(
                  "size-1/3 rounded-full animate-bounce [animation-delay:-0.3s]",
                  bgPulseColors[color],
                )}
              />
              <span
                className={cn(
                  "size-1/3 rounded-full animate-bounce [animation-delay:-0.15s]",
                  bgPulseColors[color],
                )}
              />
              <span
                className={cn(
                  "size-1/3 rounded-full animate-bounce",
                  bgPulseColors[color],
                )}
              />
            </div>
          );
        case "bars":
          return (
            <div
              className={cn(
                "inline-flex items-center space-x-0.5 shrink-0",
                spinnerSizes[size],
              )}
            >
              <span
                className={cn(
                  "h-full w-1/4 rounded-full animate-pulse [animation-delay:-0.4s]",
                  bgPulseColors[color],
                )}
              />
              <span
                className={cn(
                  "h-full w-1/4 rounded-full animate-pulse [animation-delay:-0.2s]",
                  bgPulseColors[color],
                )}
              />
              <span
                className={cn(
                  "h-full w-1/4 rounded-full animate-pulse",
                  bgPulseColors[color],
                )}
              />
            </div>
          );
        case "pulse":
          return (
            <div
              className={cn(
                "relative shrink-0 flex items-center justify-center",
                spinnerSizes[size],
              )}
            >
              <span
                className={cn(
                  "absolute inset-0 rounded-full animate-ping opacity-75",
                  bgPulseColors[color],
                )}
              />
              <span
                className={cn(
                  "relative size-1/2 rounded-full",
                  bgPulseColors[color],
                )}
              />
            </div>
          );
        case "ring":
          return (
            <div
              className={cn(
                "rounded-full animate-spin border-2 border-dashed border-t-transparent shrink-0",
                spinnerSizes[size],
                colorClasses[color],
              )}
            />
          );
        case "gradient":
          return (
            <div
              className={cn(
                "rounded-full animate-spin bg-gradient-to-tr from-transparent via-current to-current p-0.5 shrink-0",
                spinnerSizes[size],
                colorClasses[color],
              )}
            >
              <div className="size-full rounded-full bg-white dark:bg-zinc-900" />
            </div>
          );
        default:
          return (
            <div
              className={cn(
                "rounded-full animate-spin border-2 shrink-0",
                spinnerSizes[size],
                colorClasses[color],
              )}
            />
          );
      }
    };

    return (
      <div
        ref={ref}
        role="status"
        aria-busy="true"
        aria-label={label || "Loading..."}
        className={cn("inline-flex items-center gap-2.5", className)}
        {...props}
      >
        {renderSpinnerGraphic()}
        {label ? (
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            {label}
          </span>
        ) : (
          <span className="sr-only">Loading...</span>
        )}
      </div>
    );
  },
);

Spinner.displayName = "Spinner";

export { Spinner };
