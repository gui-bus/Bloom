"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

const toggleVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 disabled:pointer-events-none disabled:opacity-35 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default: "bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 data-[state=on]:bg-zinc-900 dark:data-[state=on]:bg-zinc-100 data-[state=on]:text-white dark:data-[state=on]:text-zinc-900 shadow-xs",
        outline: "border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 data-[state=on]:border-sky-500 data-[state=on]:bg-sky-500/10 data-[state=on]:text-sky-600 dark:data-[state=on]:text-sky-400",
        flat: "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 data-[state=on]:bg-sky-500 data-[state=on]:text-white shadow-xs",
      },
      size: {
        sm: "h-8 px-2.5 text-xs min-w-8 gap-1.5",
        md: "h-10 px-3.5 text-xs min-w-10 gap-2",
        lg: "h-12 px-4 text-sm min-w-12 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  radius?: keyof typeof designRadius;
}

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, radius = "lg", ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(
      toggleVariants({ variant, size }),
      designRadius[radius],
      className
    )}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
