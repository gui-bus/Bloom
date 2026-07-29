export const toggleCode = `"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

const toggleVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default: "bg-transparent data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        flat: "bg-muted/50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
      },
      size: {
        sm: "h-8 px-2 text-xs min-w-8",
        md: "h-10 px-3 text-sm min-w-10",
        lg: "h-12 px-4 text-base min-w-12",
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

export { Toggle, toggleVariants };`;
