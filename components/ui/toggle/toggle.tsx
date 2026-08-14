"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-35 cursor-pointer select-none border border-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800",
        bordered:
          "border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
        flat: "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-650 dark:text-zinc-350 hover:bg-zinc-200/60 dark:hover:bg-zinc-800",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        accent: "",
        success: "",
        warning: "",
        danger: "",
      },
      size: {
        sm: "h-8 px-2.5 text-xs min-w-8 gap-1.5",
        md: "h-10 px-3.5 text-xs min-w-10 gap-2",
        lg: "h-12 px-4 text-sm min-w-12 gap-2.5",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        color: "default",
        className:
          "data-[state=on]:bg-default data-[state=on]:text-default-foreground",
      },
      {
        variant: "default",
        color: "primary",
        className:
          "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
      },
      {
        variant: "default",
        color: "secondary",
        className:
          "data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",
      },
      {
        variant: "default",
        color: "accent",
        className:
          "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
      },
      {
        variant: "default",
        color: "success",
        className:
          "data-[state=on]:bg-success data-[state=on]:text-success-foreground",
      },
      {
        variant: "default",
        color: "warning",
        className:
          "data-[state=on]:bg-warning data-[state=on]:text-warning-foreground",
      },
      {
        variant: "default",
        color: "danger",
        className:
          "data-[state=on]:bg-danger data-[state=on]:text-danger-foreground",
      },

      {
        variant: "bordered",
        color: "default",
        className:
          "data-[state=on]:border-default data-[state=on]:bg-default/10 data-[state=on]:text-default-foreground",
      },
      {
        variant: "bordered",
        color: "primary",
        className:
          "data-[state=on]:border-primary data-[state=on]:bg-primary/10 data-[state=on]:text-primary",
      },
      {
        variant: "bordered",
        color: "secondary",
        className:
          "data-[state=on]:border-secondary data-[state=on]:bg-secondary/10 data-[state=on]:text-secondary",
      },
      {
        variant: "bordered",
        color: "accent",
        className:
          "data-[state=on]:border-accent data-[state=on]:bg-accent/10 data-[state=on]:text-accent",
      },
      {
        variant: "bordered",
        color: "success",
        className:
          "data-[state=on]:border-success data-[state=on]:bg-success/10 data-[state=on]:text-success",
      },
      {
        variant: "bordered",
        color: "warning",
        className:
          "data-[state=on]:border-warning data-[state=on]:bg-warning/10 data-[state=on]:text-warning",
      },
      {
        variant: "bordered",
        color: "danger",
        className:
          "data-[state=on]:border-danger data-[state=on]:bg-danger/10 data-[state=on]:text-danger",
      },

      {
        variant: "flat",
        color: "default",
        className:
          "data-[state=on]:bg-default/20 data-[state=on]:text-default-foreground",
      },
      {
        variant: "flat",
        color: "primary",
        className: "data-[state=on]:bg-primary/20 data-[state=on]:text-primary",
      },
      {
        variant: "flat",
        color: "secondary",
        className:
          "data-[state=on]:bg-secondary/20 data-[state=on]:text-secondary",
      },
      {
        variant: "flat",
        color: "accent",
        className: "data-[state=on]:bg-accent/20 data-[state=on]:text-accent",
      },
      {
        variant: "flat",
        color: "success",
        className: "data-[state=on]:bg-success/20 data-[state=on]:text-success",
      },
      {
        variant: "flat",
        color: "warning",
        className: "data-[state=on]:bg-warning/20 data-[state=on]:text-warning",
      },
      {
        variant: "flat",
        color: "danger",
        className: "data-[state=on]:bg-danger/20 data-[state=on]:text-danger",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "default",
      size: "md",
    },
  },
);

export interface ToggleProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
      "color" | "size"
    >,
    VariantProps<typeof toggleVariants> {
  radius?: keyof typeof designRadius;
}

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, color, radius = "lg", ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(
      toggleVariants({ variant, size, color }),
      designRadius[radius],
      className,
    )}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
