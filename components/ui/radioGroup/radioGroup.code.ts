export const radioGroupCode = `"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
}

const colorMap = {
  default: "text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-zinc-900 dark:data-[state=checked]:border-zinc-100",
  primary: "text-sky-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-sky-500",
  secondary: "text-purple-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-purple-500",
  accent: "text-pink-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-pink-500",
  success: "text-emerald-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-emerald-500",
  warning: "text-amber-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-amber-500",
  danger: "text-rose-500 border-zinc-300 dark:border-zinc-700 data-[state=checked]:border-rose-500",
};

const RadioGroupContext = React.createContext<{ color?: RadioGroupProps["color"] }>({});

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, color = "primary", ...props }, ref) => {
  return (
    <RadioGroupContext.Provider value={{ color }}>
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2.5", className)}
        {...props}
        ref={ref}
      />
    </RadioGroupContext.Provider>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  isCard?: boolean;
}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, label, description, isCard = false, id, disabled, ...props }, ref) => {
  const generatedId = React.useId();
  const itemId = id || generatedId;
  const { color = "primary" } = React.useContext(RadioGroupContext);

  const innerContent = (
    <>
      <RadioGroupPrimitive.Item
        ref={ref}
        id={itemId}
        disabled={disabled}
        className={cn(
          "aspect-square size-4 rounded-full border bg-white dark:bg-zinc-900 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 disabled:cursor-not-allowed cursor-pointer mt-0.5 flex items-center justify-center shrink-0",
          colorMap[color],
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <div className="size-2 rounded-full bg-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {(label || description) && (
        <div className="flex flex-col gap-0.5 select-none w-full">
          {label && (
            <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
              {label}
              {disabled && (
                <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 ml-2">
                  (Disabled)
                </span>
              )}
            </span>
          )}
          {description && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{description}</p>
          )}
        </div>
      )}
    </>
  );

  if (isCard) {
    return (
      <label
        htmlFor={itemId}
        className={cn(
          "relative flex items-start gap-3 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 cursor-pointer hover:border-sky-500/50 has-[:checked]:border-sky-500 has-[:checked]:bg-sky-500/5 shadow-xs select-none",
          disabled && "opacity-35 grayscale bg-zinc-100/50 dark:bg-zinc-800/30 border-zinc-200/50 dark:border-zinc-800/50 cursor-not-allowed pointer-events-none"
        )}
      >
        {innerContent}
      </label>
    );
  }

  return (
    <label
      htmlFor={itemId}
      className={cn(
        "inline-flex items-start gap-2.5 cursor-pointer select-none",
        disabled && "opacity-35 grayscale cursor-not-allowed pointer-events-none"
      )}
    >
      {innerContent}
    </label>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
`;
