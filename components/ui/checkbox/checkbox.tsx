"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
  radius?: keyof typeof designRadius;
  label?: React.ReactNode;
  description?: React.ReactNode;
  isInvalid?: boolean;
  isCard?: boolean;
}

const colorMap = {
  default: "data-[state=checked]:bg-foreground data-[state=checked]:text-background border-input",
  primary: "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary border-input",
  secondary: "data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=checked]:border-secondary border-input",
  accent: "data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[state=checked]:border-accent border-input",
  success: "data-[state=checked]:bg-success data-[state=checked]:text-success-foreground data-[state=checked]:border-success border-input",
  warning: "data-[state=checked]:bg-warning data-[state=checked]:text-warning-foreground data-[state=checked]:border-warning border-input",
  danger: "data-[state=checked]:bg-danger data-[state=checked]:text-danger-foreground data-[state=checked]:border-danger border-input",
};

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, color = "primary", radius = "md", label, description, isInvalid, isCard = false, id, disabled, ...props }, ref) => {
  const generatedId = React.useId();
  const checkboxId = id || generatedId;

  const content = (
    <div className="inline-flex items-start gap-2.5">
      <CheckboxPrimitive.Root
        ref={ref}
        id={checkboxId}
        disabled={disabled}
        className={cn(
          "peer size-4 shrink-0 border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer mt-0.5",
          designRadius[radius],
          colorMap[color],
          isInvalid && "border-danger",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
          <Check className="size-3 stroke-[3]" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {(label || description) && (
        <div className="flex flex-col gap-0.5 select-none">
          {label && (
            <label
              htmlFor={checkboxId}
              className={cn(
                "text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                isInvalid && "text-danger"
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      )}
    </div>
  );

  if (isCard) {
    return (
      <div
        className={cn(
          "relative flex items-center gap-3 p-4 rounded-xl border border-border bg-card transition-all duration-200 cursor-pointer hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 shadow-xs",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none"
        )}
      >
        {content}
      </div>
    );
  }

  return content;
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
