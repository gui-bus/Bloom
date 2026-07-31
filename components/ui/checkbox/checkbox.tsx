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
  isIndeterminate?: boolean;
  icon?: string;
  badge?: string | React.ReactNode;
}

export interface CheckboxGroupProps {
  children?: React.ReactNode;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  orientation?: "horizontal" | "vertical";
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  label?: React.ReactNode;
  description?: React.ReactNode;
  isInvalid?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const colorMap: Record<NonNullable<CheckboxProps["color"]>, string> = {
  default: "data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-zinc-100 data-[state=checked]:text-white dark:data-[state=checked]:text-zinc-900 data-[state=checked]:border-zinc-900 dark:data-[state=checked]:border-zinc-100 data-[state=indeterminate]:bg-zinc-900 dark:data-[state=indeterminate]:bg-zinc-100 data-[state=indeterminate]:text-white dark:data-[state=indeterminate]:text-zinc-900",
  primary: "data-[state=checked]:bg-sky-600 data-[state=checked]:text-white data-[state=checked]:border-sky-600 data-[state=indeterminate]:bg-sky-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:border-sky-600",
  secondary: "data-[state=checked]:bg-purple-600 data-[state=checked]:text-white data-[state=checked]:border-purple-600 data-[state=indeterminate]:bg-purple-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:border-purple-600",
  accent: "data-[state=checked]:bg-pink-600 data-[state=checked]:text-white data-[state=checked]:border-pink-600 data-[state=indeterminate]:bg-pink-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:border-pink-600",
  success: "data-[state=checked]:bg-emerald-600 data-[state=checked]:text-white data-[state=checked]:border-emerald-600 data-[state=indeterminate]:bg-emerald-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:border-emerald-600",
  warning: "data-[state=checked]:bg-amber-600 data-[state=checked]:text-white data-[state=checked]:border-amber-600 data-[state=indeterminate]:bg-amber-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:border-amber-600",
  danger: "data-[state=checked]:bg-rose-600 data-[state=checked]:text-white data-[state=checked]:border-rose-600 data-[state=indeterminate]:bg-rose-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:border-rose-600",
};

const CheckboxGroupContext = React.createContext<{
  value: string[];
  toggleValue: (val: string) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
} | null>(null);

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      children,
      value,
      defaultValue = [],
      onValueChange,
      orientation = "vertical",
      columns,
      label,
      description,
      isInvalid = false,
      isDisabled = false,
      className,
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue);
    const currentValues = value !== undefined ? value : selectedValues;

    const toggleValue = React.useCallback(
      (val: string) => {
        let next: string[];
        if (currentValues.includes(val)) {
          next = currentValues.filter((v) => v !== val);
        } else {
          next = [...currentValues, val];
        }
        if (value === undefined) setSelectedValues(next);
        onValueChange?.(next);
      },
      [currentValues, value, onValueChange]
    );

    const columnStyles: Record<number, string> = {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
      5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
      6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
    };

    return (
      <CheckboxGroupContext.Provider
        value={{ value: currentValues, toggleValue, isDisabled, isInvalid }}
      >
        <div ref={ref} className={cn("flex flex-col gap-2 w-full", className)}>
          {(label || description) && (
            <div className="flex flex-col gap-0.5 select-none">
              {label && (
                <label
                  className={cn(
                    "text-xs font-semibold text-zinc-900 dark:text-zinc-100",
                    isInvalid && "text-rose-500 dark:text-rose-400"
                  )}
                >
                  {label}
                </label>
              )}
              {description && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{description}</p>
              )}
            </div>
          )}

          <div
            className={cn(
              columns
                ? cn("grid gap-3", columnStyles[columns])
                : orientation === "horizontal"
                ? "flex flex-wrap items-center gap-4"
                : "flex flex-col gap-2.5"
            )}
          >
            {children}
          </div>
        </div>
      </CheckboxGroupContext.Provider>
    );
  }
);
CheckboxGroup.displayName = "CheckboxGroup";

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      color = "primary",
      radius = "md",
      label,
      description,
      isInvalid,
      isCard = false,
      isIndeterminate = false,
      icon,
      badge,
      id,
      disabled,
      value: itemValue,
      checked,
      onCheckedChange,
      ...props
    },
    ref
  ) => {
    const groupContext = React.useContext(CheckboxGroupContext);
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    const isGrouped = groupContext && itemValue !== undefined;
    const isChecked = isGrouped
      ? groupContext.value.includes(itemValue)
      : checked;
    const effectiveDisabled = disabled || groupContext?.isDisabled;
    const effectiveInvalid = isInvalid || groupContext?.isInvalid;

    const checkedState = isIndeterminate ? "indeterminate" : isChecked;

    const handleCheckedChange = (newChecked: CheckboxPrimitive.CheckedState) => {
      if (isGrouped) {
        groupContext.toggleValue(itemValue);
      } else {
        onCheckedChange?.(newChecked);
      }
    };

    const content = (
      <div className="inline-flex items-start gap-2.5 flex-1 min-w-0">
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          disabled={effectiveDisabled}
          checked={checkedState}
          onCheckedChange={handleCheckedChange}
          className={cn(
            "peer size-4 shrink-0 border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer mt-0.5 data-[state=unchecked]:bg-white dark:data-[state=unchecked]:bg-zinc-900 data-[state=unchecked]:border-zinc-300 dark:data-[state=unchecked]:border-zinc-700",
            designRadius[radius],
            colorMap[color],
            effectiveInvalid && "border-rose-500 dark:border-rose-500",
            className
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
            {isIndeterminate ? (
              <Icon icon="hugeicons:minus-sign" className="size-3.5 stroke-[3]" />
            ) : (
              <Icon icon="hugeicons:tick-02" className="size-3.5 stroke-[3]" />
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {(label || description || icon) && (
          <div className="flex flex-col gap-0.5 select-none flex-1 min-w-0">
            <div className="flex items-center gap-2">
              {icon && <Icon icon={icon} className="size-4 text-zinc-500 shrink-0" />}
              {label && (
                <label
                  htmlFor={checkboxId}
                  className={cn(
                    "text-sm font-medium leading-none cursor-pointer text-zinc-900 dark:text-zinc-100 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 truncate",
                    effectiveInvalid && "text-rose-500 dark:text-rose-400"
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
        )}
        {badge && (
          <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            {badge}
          </span>
        )}
      </div>
    );

    if (isCard) {
      return (
        <div
          onClick={() => {
            if (!effectiveDisabled) {
              handleCheckedChange(!isChecked);
            }
          }}
          className={cn(
            "relative flex items-center gap-3 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 cursor-pointer hover:border-sky-500/50 shadow-xs select-none",
            isChecked && "border-sky-500 bg-sky-50/40 dark:bg-sky-950/30 ring-1 ring-sky-500/20",
            effectiveDisabled && "opacity-50 cursor-not-allowed pointer-events-none"
          )}
        >
          {content}
        </div>
      );
    }

    return content;
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, CheckboxGroup };
