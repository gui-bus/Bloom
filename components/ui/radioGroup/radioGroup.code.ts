export const radioGroupCode = `"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

export type RadioColor = "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";

const colorMap: Record<RadioColor, string> = {
  default: "data-[state=checked]:border-zinc-900 dark:data-[state=checked]:border-zinc-100 [&>span]:data-[state=checked]:bg-zinc-900 dark:[&>span]:data-[state=checked]:bg-zinc-100",
  primary: "data-[state=checked]:border-sky-500 [&>span]:data-[state=checked]:bg-sky-500",
  secondary: "data-[state=checked]:border-purple-500 [&>span]:data-[state=checked]:bg-purple-500",
  accent: "data-[state=checked]:border-pink-500 [&>span]:data-[state=checked]:bg-pink-500",
  success: "data-[state=checked]:border-emerald-500 [&>span]:data-[state=checked]:bg-emerald-500",
  warning: "data-[state=checked]:border-amber-500 [&>span]:data-[state=checked]:bg-amber-500",
  danger: "data-[state=checked]:border-rose-500 [&>span]:data-[state=checked]:bg-rose-500",
};

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  orientation?: "horizontal" | "vertical";
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  color?: RadioColor;
}

const RadioGroupContext = React.createContext<{
  color: RadioColor;
  isInvalid?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
}>({
  color: "primary",
});

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      className,
      orientation = "vertical",
      columns,
      label,
      description,
      errorMessage,
      isInvalid = false,
      color = "primary",
      value,
      defaultValue,
      onValueChange,
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = (val: string) => {
      if (value === undefined) setInternalValue(val);
      onValueChange?.(val);
    };

    const columnStyles: Record<number, string> = {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
      5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
      6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
    };

    return (
      <RadioGroupContext.Provider value={{ color, isInvalid, value: currentValue, onValueChange: handleValueChange }}>
        <div className="flex flex-col gap-2 w-full">
          {(label || description) && (
            <div className="flex flex-col gap-0.5 select-none">
              {label && (
                <label className={cn("text-xs font-semibold text-zinc-900 dark:text-zinc-100", isInvalid && "text-rose-500")}>
                  {label}
                </label>
              )}
              {description && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{description}</p>
              )}
            </div>
          )}

          <RadioGroupPrimitive.Root
            ref={ref}
            value={currentValue}
            onValueChange={handleValueChange}
            className={cn(
              columns
                ? cn("grid gap-3", columnStyles[columns])
                : orientation === "horizontal"
                ? "flex flex-wrap items-center gap-4"
                : "flex flex-col gap-2.5",
              className
            )}
            {...props}
          >
            {children}
          </RadioGroupPrimitive.Root>

          {isInvalid && errorMessage && (
            <p className="text-xs text-rose-500 font-medium">{errorMessage}</p>
          )}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  icon?: string;
  badge?: string | React.ReactNode;
  isCard?: boolean;
  radius?: keyof typeof designRadius;
}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      className,
      label,
      description,
      icon,
      badge,
      isCard = false,
      radius = "2xl",
      id,
      value,
      disabled,
      ...props
    },
    ref
  ) => {
    const { color, isInvalid, value: groupValue, onValueChange } = React.useContext(RadioGroupContext);
    const generatedId = React.useId();
    const radioId = id || generatedId;
    const isChecked = groupValue === value;

    const radioCircle = (
      <RadioGroupPrimitive.Item
        ref={ref}
        id={radioId}
        value={value}
        disabled={disabled}
        className={cn(
          "aspect-square size-4 shrink-0 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-xs transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/30 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer flex items-center justify-center bg-white dark:bg-zinc-900",
          colorMap[color],
          isInvalid && "border-rose-500",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className="size-2 rounded-full transition-transform duration-200" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );

    const labelContent = (
      <div className="flex flex-col gap-0.5 select-none flex-1 min-w-0">
        <div className="flex items-center gap-2">
          {icon && <Icon icon={icon} className="size-4 text-zinc-500 shrink-0" />}
          {label && (
            <label
              htmlFor={radioId}
              className={cn(
                "text-sm font-medium leading-none cursor-pointer text-zinc-900 dark:text-zinc-100 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 truncate",
                isInvalid && "text-rose-500"
              )}
            >
              {label}
            </label>
          )}
        </div>
        {description && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{description}</p>
        )}
      </div>
    );

    if (isCard) {
      return (
        <div
          onClick={() => {
            if (!disabled && onValueChange) {
              onValueChange(value);
            }
          }}
          className={cn(
            "relative flex items-center gap-3 p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 cursor-pointer hover:border-sky-500/50 shadow-xs select-none",
            designRadius[radius],
            isChecked && "border-sky-500 bg-sky-50/40 dark:bg-sky-950/30 ring-1 ring-sky-500/20",
            disabled && "opacity-40 cursor-not-allowed pointer-events-none"
          )}
        >
          {radioCircle}
          {labelContent}
          {badge && (
            <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              {badge}
            </span>
          )}
        </div>
      );
    }

    return (
      <div className="inline-flex items-start gap-2.5">
        {radioCircle}
        {labelContent}
        {badge && (
          <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            {badge}
          </span>
        )}
      </div>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
`;
