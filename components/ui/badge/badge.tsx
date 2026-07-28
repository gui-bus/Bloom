import { cva, type VariantProps } from "class-variance-authority";
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

type BadgeVariant = "default" | "bordered" | "flat" | "light";

type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  variant?: BadgeVariant;
  size?: BadgeSize;
  radius?: keyof typeof designRadius;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  dot?: boolean;
  /**
   * When true, wraps the badge in a live region that announces
   * content changes to screen readers (e.g. notification counters).
   */
  live?: boolean;
}

const badgeSizes: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-2.5 py-1 text-xs gap-1.5",
  lg: "px-3 py-1.5 text-sm gap-2",
};

const badgeColorMap: Record<BadgeColor, Record<BadgeVariant, string>> = {
  default: {
    default: "bg-default text-default-foreground",
    bordered: "border border-default text-default-foreground bg-transparent",
    flat: "bg-default/20 text-default-foreground",
    light: "bg-transparent text-default-foreground",
  },
  primary: {
    default: "bg-primary text-primary-foreground",
    bordered: "border border-primary text-primary bg-transparent",
    flat: "bg-primary/20 text-primary",
    light: "bg-transparent text-primary",
  },
  secondary: {
    default: "bg-secondary text-secondary-foreground",
    bordered: "border border-secondary text-secondary bg-transparent",
    flat: "bg-secondary/20 text-secondary",
    light: "bg-transparent text-secondary",
  },
  accent: {
    default: "bg-accent text-accent-foreground",
    bordered: "border border-accent text-accent bg-transparent",
    flat: "bg-accent/20 text-accent",
    light: "bg-transparent text-accent",
  },
  success: {
    default: "bg-success text-success-foreground",
    bordered: "border border-success text-success bg-transparent",
    flat: "bg-success/20 text-success",
    light: "bg-transparent text-success",
  },
  warning: {
    default: "bg-warning text-warning-foreground",
    bordered: "border border-warning text-warning bg-transparent",
    flat: "bg-warning/20 text-warning",
    light: "bg-transparent text-warning",
  },
  danger: {
    default: "bg-danger text-danger-foreground",
    bordered: "border border-danger text-danger bg-transparent",
    flat: "bg-danger/20 text-danger",
    light: "bg-transparent text-danger",
  },
};

const dotColorMap: Record<BadgeColor, string> = {
  default: "bg-default-foreground",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
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
      live = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        // aria-live="polite" allows screen readers to announce badge content
        // changes without interrupting the current reading flow.
        // Use live=true for dynamic counters (e.g. notification badges).
        aria-live={live ? "polite" : undefined}
        aria-atomic={live ? "true" : undefined}
        className={cn(
          "inline-flex items-center font-medium",
          badgeSizes[size],
          designRadius[radius],
          badgeColorMap[color][variant],
          className
        )}
        {...props}
      >
        {dot && (
          // aria-hidden: the dot is a purely decorative visual indicator.
          // The badge's text content already conveys the status.
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full shrink-0",
              dotColorMap[color]
            )}
          />
        )}
        {startContent && (
          // aria-hidden: icons inside badges are decorative.
          // The badge text is the accessible label.
          <span aria-hidden="true" className="shrink-0">
            {startContent}
          </span>
        )}
        {children}
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
