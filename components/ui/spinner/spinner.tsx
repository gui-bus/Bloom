"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { designColors, designSizes } from "@/lib/design-system";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof designSizes;
  color?: keyof typeof designColors;
  label?: string;
}

const spinnerSizes = {
  xs: "size-3.5 border",
  sm: "size-4 border-2",
  md: "size-6 border-2",
  lg: "size-8 border-3",
  xl: "size-10 border-3",
  "2xl": "size-12 border-4",
  "3xl": "size-16 border-4",
};

const spinnerColors = {
  default: "border-foreground/20 border-t-foreground",
  primary: "border-primary/20 border-t-primary",
  secondary: "border-secondary/20 border-t-secondary",
  accent: "border-accent/20 border-t-accent",
  success: "border-emerald-500/20 border-t-emerald-500",
  warning: "border-amber-500/20 border-t-amber-500",
  danger: "border-rose-500/20 border-t-rose-500",
};

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      size = "md",
      color = "primary",
      label,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-busy="true"
        aria-label={label || "Loading..."}
        className={cn("inline-flex items-center gap-2.5", className)}
        {...props}
      >
        <div
          className={cn(
            "rounded-full animate-spin shrink-0",
            spinnerSizes[size],
            spinnerColors[color]
          )}
        />
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
