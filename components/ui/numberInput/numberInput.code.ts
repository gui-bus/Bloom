export const numberInputCode = `"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

export interface NumberInputProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (val: number) => void;
  label?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: keyof typeof designRadius;
  disabled?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "h-8 text-xs px-1 gap-1",
  md: "h-10 text-sm px-1.5 gap-2",
  lg: "h-12 text-base px-2 gap-3",
};

const buttonSizeMap = {
  sm: "size-6 text-xs",
  md: "size-7 text-sm",
  lg: "size-8 text-base",
};

export function NumberInput({
  value,
  defaultValue = 0,
  min,
  max,
  step = 1,
  onValueChange,
  label,
  size = "md",
  radius = "lg",
  disabled = false,
  className,
}: NumberInputProps) {
  const [internalVal, setInternalVal] = React.useState<number>(
    value !== undefined ? value : defaultValue
  );

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalVal(value);
    }
  }, [value]);

  const updateValue = (newVal: number) => {
    let clamped = newVal;
    if (min !== undefined && clamped < min) clamped = min;
    if (max !== undefined && clamped > max) clamped = max;

    setInternalVal(clamped);
    onValueChange?.(clamped);
  };

  const handleIncrement = () => updateValue(internalVal + step);
  const handleDecrement = () => updateValue(internalVal - step);

  const isMinDisabled = disabled || (min !== undefined && internalVal <= min);
  const isMaxDisabled = disabled || (max !== undefined && internalVal >= max);

  return (
    <div className={cn("flex flex-col gap-1.5 w-full max-w-xs", className)}>
      {label && (
        <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
          {label}
        </label>
      )}
      <div
        className={cn(
          "flex items-center justify-between border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs transition-colors focus-within:ring-2 focus-within:ring-sky-500/20",
          sizeMap[size],
          designRadius[radius],
          disabled && "opacity-50 pointer-events-none"
        )}
      >
        <button
          type="button"
          aria-label="Decrement value"
          disabled={isMinDisabled}
          onClick={handleDecrement}
          className={cn(
            "flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 transition-all shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
            buttonSizeMap[size]
          )}
        >
          <Icon icon="lucide:minus" className="size-3.5 shrink-0 stroke-[2.5]" />
        </button>

        <input
          type="number"
          value={internalVal}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          onChange={(e) => updateValue(Number(e.target.value))}
          className="w-full text-center bg-transparent outline-none font-mono font-bold text-zinc-900 dark:text-zinc-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          aria-label="Increment value"
          disabled={isMaxDisabled}
          onClick={handleIncrement}
          className={cn(
            "flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 transition-all shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
            buttonSizeMap[size]
          )}
        >
          <Icon icon="lucide:plus" className="size-3.5 shrink-0 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
`;
