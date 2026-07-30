"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Icon } from "@iconify/react";
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

const colorMap: Record<NonNullable<CheckboxProps["color"]>, string> = {
  default: "data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-zinc-100 data-[state=checked]:text-white dark:data-[state=checked]:text-zinc-900 data-[state=checked]:border-zinc-900 dark:data-[state=checked]:border-zinc-100",
  primary: "data-[state=checked]:bg-sky-600 data-[state=checked]:text-white data-[state=checked]:border-sky-600",
  secondary: "data-[state=checked]:bg-purple-600 data-[state=checked]:text-white data-[state=checked]:border-purple-600",
  accent: "data-[state=checked]:bg-pink-600 data-[state=checked]:text-white data-[state=checked]:border-pink-600",
  success: "data-[state=checked]:bg-emerald-600 data-[state=checked]:text-white data-[state=checked]:border-emerald-600",
  warning: "data-[state=checked]:bg-amber-600 data-[state=checked]:text-white data-[state=checked]:border-amber-600",
  danger: "data-[state=checked]:bg-rose-600 data-[state=checked]:text-white data-[state=checked]:border-rose-600",
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
          "peer size-4 shrink-0 border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer mt-0.5 data-[state=unchecked]:bg-white dark:data-[state=unchecked]:bg-zinc-900 data-[state=unchecked]:border-zinc-300 dark:data-[state=unchecked]:border-zinc-700",
          designRadius[radius],
          colorMap[color],
          isInvalid && "border-rose-500 dark:border-rose-500",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
          <Icon icon="hugeicons:tick-02" className="size-3.5 stroke-[3]" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {(label || description) && (
        <div className="flex flex-col gap-0.5 select-none">
          {label && (
            <label
              htmlFor={checkboxId}
              className={cn(
                "text-sm font-medium leading-none cursor-pointer text-zinc-900 dark:text-zinc-100 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                isInvalid && "text-rose-500 dark:text-rose-400"
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{description}</p>
          )}
        </div>
      )}
    </div>
  );

  if (isCard) {
    return (
      <div
        className={cn(
          "relative flex items-center gap-3 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 cursor-pointer hover:border-sky-500/50 has-[:checked]:border-sky-500 has-[:checked]:bg-sky-500/5 dark:has-[:checked]:bg-sky-500/10 shadow-xs",
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
