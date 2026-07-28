export const separatorCode = `"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";
import { cn } from "@/lib/utils";

type SeparatorColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger";

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  label?: React.ReactNode;
  gradient?: boolean;
  color?: SeparatorColor;
}

const colorSolidMap: Record<SeparatorColor, string> = {
  default: "bg-border",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

const colorGradientMap: Record<SeparatorColor, { line: string; left: string; right: string }> = {
  default: {
    line: "bg-linear-to-r from-transparent via-border to-transparent",
    left: "bg-linear-to-r from-transparent to-border",
    right: "bg-linear-to-r from-border to-transparent",
  },
  primary: {
    line: "bg-linear-to-r from-transparent via-primary to-transparent",
    left: "bg-linear-to-r from-transparent to-primary",
    right: "bg-linear-to-r from-primary to-transparent",
  },
  secondary: {
    line: "bg-linear-to-r from-transparent via-secondary to-transparent",
    left: "bg-linear-to-r from-transparent to-secondary",
    right: "bg-linear-to-r from-secondary to-transparent",
  },
  accent: {
    line: "bg-linear-to-r from-transparent via-accent to-transparent",
    left: "bg-linear-to-r from-transparent to-accent",
    right: "bg-linear-to-r from-accent to-transparent",
  },
  success: {
    line: "bg-linear-to-r from-transparent via-success to-transparent",
    left: "bg-linear-to-r from-transparent to-success",
    right: "bg-linear-to-r from-success to-transparent",
  },
  warning: {
    line: "bg-linear-to-r from-transparent via-warning to-transparent",
    left: "bg-linear-to-r from-transparent to-warning",
    right: "bg-linear-to-r from-warning to-transparent",
  },
  danger: {
    line: "bg-linear-to-r from-transparent via-danger to-transparent",
    left: "bg-linear-to-r from-transparent to-danger",
    right: "bg-linear-to-r from-danger to-transparent",
  },
};

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      label,
      gradient = false,
      color = "default",
      ...props
    },
    ref
  ) => {
    if (label && orientation === "horizontal") {
      const colors = colorGradientMap[color];
      return (
        <div className="flex w-full items-center gap-3">
          <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation="horizontal"
            className={cn(
              "h-px w-full rounded-full shrink",
              gradient ? colors.left : colorSolidMap[color],
              className
            )}
            {...props}
          />
          <div className="w-fit text-nowrap text-xs font-medium text-muted-foreground uppercase shrink-0">
            {label}
          </div>
          <SeparatorPrimitive.Root
            decorative={decorative}
            orientation="horizontal"
            className={cn(
              "h-px w-full rounded-full shrink",
              gradient ? colors.right : colorSolidMap[color],
              className
            )}
          />
        </div>
      );
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 rounded-full",
          orientation === "horizontal"
            ? "h-px w-full"
            : "h-full w-px",
          gradient ? colorGradientMap[color].line : colorSolidMap[color],
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

export { Separator };
`;
