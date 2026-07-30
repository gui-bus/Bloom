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
  default: "bg-zinc-200 dark:bg-zinc-800",
  primary: "bg-sky-500",
  secondary: "bg-purple-500",
  accent: "bg-pink-500",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
};

const colorGradientMap: Record<SeparatorColor, { line: string; left: string; right: string }> = {
  default: {
    line: "bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent",
    left: "bg-gradient-to-r from-transparent to-zinc-300 dark:to-zinc-700",
    right: "bg-gradient-to-r from-zinc-300 dark:from-zinc-700 to-transparent",
  },
  primary: {
    line: "bg-gradient-to-r from-transparent via-sky-500 to-transparent",
    left: "bg-gradient-to-r from-transparent to-sky-500",
    right: "bg-gradient-to-r from-sky-500 to-transparent",
  },
  secondary: {
    line: "bg-gradient-to-r from-transparent via-purple-500 to-transparent",
    left: "bg-gradient-to-r from-transparent to-purple-500",
    right: "bg-gradient-to-r from-purple-500 to-transparent",
  },
  accent: {
    line: "bg-gradient-to-r from-transparent via-pink-500 to-transparent",
    left: "bg-gradient-to-r from-transparent to-pink-500",
    right: "bg-gradient-to-r from-pink-500 to-transparent",
  },
  success: {
    line: "bg-gradient-to-r from-transparent via-emerald-500 to-transparent",
    left: "bg-gradient-to-r from-transparent to-emerald-500",
    right: "bg-gradient-to-r from-emerald-500 to-transparent",
  },
  warning: {
    line: "bg-gradient-to-r from-transparent via-amber-500 to-transparent",
    left: "bg-gradient-to-r from-transparent to-amber-500",
    right: "bg-gradient-to-r from-amber-500 to-transparent",
  },
  danger: {
    line: "bg-gradient-to-r from-transparent via-rose-500 to-transparent",
    left: "bg-gradient-to-r from-transparent to-rose-500",
    right: "bg-gradient-to-r from-rose-500 to-transparent",
  },
};

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
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
          <div className="w-fit text-nowrap text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider shrink-0">
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
