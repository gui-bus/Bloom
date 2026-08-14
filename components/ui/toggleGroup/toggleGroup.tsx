"use client";

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { toggleVariants } from "@/components/ui/toggle/toggle";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "md",
  variant: "default",
  color: "default",
});

const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants> & { radius?: keyof typeof designRadius }
>(
  (
    { className, variant, size, color, radius = "2xl", children, ...props },
    ref,
  ) => (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-1 p-1 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shadow-xs w-fit",
        designRadius[radius],
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, color }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  ),
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants> & { radius?: keyof typeof designRadius }
>(
  (
    { className, children, variant, size, color, radius = "lg", ...props },
    ref,
  ) => {
    const context = React.useContext(ToggleGroupContext);

    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size,
            color: context.color || color,
          }),
          designRadius[radius],
          className,
        )}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    );
  },
);

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
