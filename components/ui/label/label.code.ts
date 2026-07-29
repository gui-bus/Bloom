export const labelCode = `"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-xs font-semibold text-foreground select-none leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  isRequired?: boolean;
}

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, isRequired, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  >
    {children}
    {isRequired && <span className="text-danger ml-0.5">*</span>}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };`;
