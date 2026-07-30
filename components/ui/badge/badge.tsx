"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

type BadgeColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger";

type BadgeVariant = "default" | "bordered" | "flat" | "ghost" | "shadow" | "dot";

type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  variant?: BadgeVariant;
  size?: BadgeSize;
  radius?: keyof typeof designRadius;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  dot?: boolean;
  isPressable?: boolean;
  isDisabled?: boolean;
  isInvisible?: boolean;
  live?: boolean;
}

const badgeSizes: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-2.5 py-1 text-xs gap-1.5",
  lg: "px-3 py-1.5 text-sm gap-2",
};

const badgeColorMap: Record<BadgeColor, Record<BadgeVariant, string>> = {
  default: {
    default: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
    bordered: "border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 bg-transparent",
    flat: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-transparent",
    ghost: "bg-transparent text-zinc-900 dark:text-zinc-100 border border-transparent",
    shadow: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md",
    dot: "bg-transparent text-zinc-900 dark:text-zinc-100 border border-transparent",
  },
  primary: {
    default: "bg-sky-600 text-white dark:bg-sky-500 dark:text-white",
    bordered: "border border-sky-500 text-sky-600 dark:text-sky-400 bg-transparent",
    flat: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-transparent",
    ghost: "bg-transparent text-sky-600 dark:text-sky-400 border border-transparent",
    shadow: "bg-sky-600 text-white dark:bg-sky-500 shadow-md shadow-sky-500/20",
    dot: "bg-transparent text-sky-600 dark:text-sky-400 border border-transparent",
  },
  secondary: {
    default: "bg-purple-600 text-white dark:bg-purple-500 dark:text-white",
    bordered: "border border-purple-500 text-purple-600 dark:text-purple-400 bg-transparent",
    flat: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-transparent",
    ghost: "bg-transparent text-purple-600 dark:text-purple-400 border border-transparent",
    shadow: "bg-purple-600 text-white dark:bg-purple-500 shadow-md shadow-purple-500/20",
    dot: "bg-transparent text-purple-600 dark:text-purple-400 border border-transparent",
  },
  accent: {
    default: "bg-pink-600 text-white dark:bg-pink-500 dark:text-white",
    bordered: "border border-pink-500 text-pink-600 dark:text-pink-400 bg-transparent",
    flat: "bg-pink-500/15 text-pink-600 dark:text-pink-400 border border-transparent",
    ghost: "bg-transparent text-pink-600 dark:text-pink-400 border border-transparent",
    shadow: "bg-pink-600 text-white dark:bg-pink-500 shadow-md shadow-pink-500/20",
    dot: "bg-transparent text-pink-600 dark:text-pink-400 border border-transparent",
  },
  success: {
    default: "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-white",
    bordered: "border border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-transparent",
    flat: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-transparent",
    ghost: "bg-transparent text-emerald-600 dark:text-emerald-400 border border-transparent",
    shadow: "bg-emerald-600 text-white dark:bg-emerald-500 shadow-md shadow-emerald-500/20",
    dot: "bg-transparent text-emerald-600 dark:text-emerald-400 border border-transparent",
  },
  warning: {
    default: "bg-amber-600 text-white dark:bg-amber-500 dark:text-white",
    bordered: "border border-amber-500 text-amber-600 dark:text-amber-400 bg-transparent",
    flat: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-transparent",
    ghost: "bg-transparent text-amber-600 dark:text-amber-400 border border-transparent",
    shadow: "bg-amber-600 text-white dark:bg-amber-500 shadow-md shadow-amber-500/20",
    dot: "bg-transparent text-amber-600 dark:text-amber-400 border border-transparent",
  },
  danger: {
    default: "bg-rose-600 text-white dark:bg-rose-500 dark:text-white",
    bordered: "border border-rose-500 text-rose-600 dark:text-rose-400 bg-transparent",
    flat: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-transparent",
    ghost: "bg-transparent text-rose-600 dark:text-rose-400 border border-transparent",
    shadow: "bg-rose-600 text-white dark:bg-rose-500 shadow-md shadow-rose-500/20",
    dot: "bg-transparent text-rose-600 dark:text-rose-400 border border-transparent",
  },
};

const dotColorMap: Record<BadgeColor, string> = {
  default: "bg-zinc-600 dark:bg-zinc-400",
  primary: "bg-sky-500",
  secondary: "bg-purple-500",
  accent: "bg-pink-500",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      color = "default",
      variant = "flat",
      size = "md",
      radius = "full",
      startContent,
      endContent,
      dot = false,
      isPressable = false,
      isDisabled = false,
      isInvisible = false,
      live = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    if (isInvisible) return null;

    const isDotMode = dot || variant === "dot";

    return (
      <span
        ref={ref}
        aria-live={live ? "polite" : undefined}
        aria-atomic={live ? "true" : undefined}
        className={cn(
          "inline-flex items-center font-semibold select-none transition-all duration-200 ease-in-out",
          badgeSizes[size],
          designRadius[radius],
          badgeColorMap[color][variant],
          isPressable &&
            !isDisabled &&
            "cursor-pointer hover:scale-105 active:scale-95 hover:opacity-90 will-change-transform outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",
          isDisabled && "opacity-50 grayscale cursor-not-allowed pointer-events-none",
          className
        )}
        {...props}
      >
        {isDotMode && (
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full shrink-0",
              dotColorMap[color]
            )}
          />
        )}
        {startContent && (
          <span aria-hidden="true" className="shrink-0">
            {startContent}
          </span>
        )}
        {children && <span>{children}</span>}
        {endContent && (
          <span aria-hidden="true" className="shrink-0">
            {endContent}
          </span>
        )}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
export type { BadgeColor, BadgeVariant, BadgeSize };
