"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { designColors, designSizes } from "@/lib/design-system";

export type SpinnerVariant = "default" | "dots" | "bars" | "pulse" | "ring" | "gradient";

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
  default: "text-foreground border-foreground/20 border-t-foreground",
  primary: "text-primary border-primary/20 border-t-primary",
  secondary: "text-secondary border-secondary/20 border-t-secondary",
  accent: "text-accent border-accent/20 border-t-accent",
  success: "text-emerald-500 border-emerald-500/20 border-t-emerald-500",
  warning: "text-amber-500 border-amber-500/20 border-t-amber-500",
  danger: "text-rose-500 border-rose-500/20 border-t-rose-500",
};

const bgPulseColors = {
  default: "bg-foreground",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
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
    ref
  ) => {
    const renderSpinnerGraphic = () => {
      switch (variant) {
        case "dots":
          return (
            <div className={cn("inline-flex items-center space-x-1 shrink-0", spinnerSizes[size])}>
              <span className={cn("size-1/3 rounded-full animate-bounce [animation-delay:-0.3s]", bgPulseColors[color])} />
              <span className={cn("size-1/3 rounded-full animate-bounce [animation-delay:-0.15s]", bgPulseColors[color])} />
              <span className={cn("size-1/3 rounded-full animate-bounce", bgPulseColors[color])} />
            </div>
          );
        case "bars":
          return (
            <div className={cn("inline-flex items-center space-x-0.5 shrink-0", spinnerSizes[size])}>
              <span className={cn("h-full w-1/4 rounded-full animate-pulse [animation-delay:-0.4s]", bgPulseColors[color])} />
              <span className={cn("h-full w-1/4 rounded-full animate-pulse [animation-delay:-0.2s]", bgPulseColors[color])} />
              <span className={cn("h-full w-1/4 rounded-full animate-pulse", bgPulseColors[color])} />
            </div>
          );
        case "pulse":
          return (
            <div className={cn("relative shrink-0 flex items-center justify-center", spinnerSizes[size])}>
              <span className={cn("absolute inset-0 rounded-full animate-ping opacity-75", bgPulseColors[color])} />
              <span className={cn("relative size-1/2 rounded-full", bgPulseColors[color])} />
            </div>
          );
        case "ring":
          return (
            <div
              className={cn(
                "rounded-full animate-spin border-2 border-dashed border-t-transparent shrink-0",
                spinnerSizes[size],
                colorClasses[color]
              )}
            />
          );
        case "gradient":
          return (
            <div
              className={cn(
                "rounded-full animate-spin bg-gradient-to-tr from-transparent via-current to-current p-0.5 shrink-0",
                spinnerSizes[size],
                colorClasses[color]
              )}
            >
              <div className="size-full rounded-full bg-background" />
            </div>
          );
        case "default":
        default:
          return (
            <div
              className={cn(
                "rounded-full animate-spin border-2 shrink-0",
                spinnerSizes[size],
                colorClasses[color]
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
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
        ) : (
          <span className="sr-only">Loading...</span>
        )}
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner };
