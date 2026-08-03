"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export type StepperPosition = "split" | "right" | "inline";
export type NumberFormatMode = "decimal" | "currency" | "percent";

export interface NumberInputProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (val: number) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: keyof typeof designRadius;
  disabled?: boolean;
  isInvalid?: boolean;
  stepperPosition?: StepperPosition;
  format?: NumberFormatMode;
  currency?: string;
  locale?: string;
  precision?: number;
  allowMouseWheel?: boolean;
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
  description,
  size = "md",
  radius = "lg",
  disabled = false,
  isInvalid = false,
  stepperPosition = "split",
  format,
  currency = "USD",
  locale = "en-US",
  precision,
  allowMouseWheel = false,
  className,
}: NumberInputProps) {
  const [internalVal, setInternalVal] = React.useState<number>(
    value !== undefined ? value : defaultValue,
  );
  const [isFocused, setIsFocused] = React.useState(false);
  const [rawInputValue, setRawInputValue] = React.useState<string>("");

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalVal(value);
    }
  }, [value]);

  const updateValue = React.useCallback(
    (newVal: number) => {
      let clamped = newVal;
      if (min !== undefined && clamped < min) clamped = min;
      if (max !== undefined && clamped > max) clamped = max;

      if (precision !== undefined) {
        clamped = Number(clamped.toFixed(precision));
      }

      setInternalVal(clamped);
      onValueChange?.(clamped);
    },
    [min, max, precision, onValueChange],
  );

  const handleIncrement = () => updateValue(internalVal + step);
  const handleDecrement = () => updateValue(internalVal - step);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!allowMouseWheel || disabled) return;
    e.preventDefault();
    if (e.deltaY < 0) {
      handleIncrement();
    } else {
      handleDecrement();
    }
  };

  const formattedDisplay = React.useMemo(() => {
    if (!format) return internalVal.toString();

    try {
      if (format === "currency") {
        return new Intl.NumberFormat(locale, {
          style: "currency",
          currency: currency,
          minimumFractionDigits: precision !== undefined ? precision : 2,
          maximumFractionDigits: precision !== undefined ? precision : 2,
        }).format(internalVal);
      }

      if (format === "percent") {
        return new Intl.NumberFormat(locale, {
          style: "percent",
          minimumFractionDigits: precision !== undefined ? precision : 0,
          maximumFractionDigits: precision !== undefined ? precision : 2,
        }).format(internalVal / 100);
      }

      return new Intl.NumberFormat(locale, {
        minimumFractionDigits: precision !== undefined ? precision : 0,
        maximumFractionDigits: precision !== undefined ? precision : 2,
      }).format(internalVal);
    } catch {
      return internalVal.toString();
    }
  }, [internalVal, format, currency, locale, precision]);

  const isMinDisabled = disabled || (min !== undefined && internalVal <= min);
  const isMaxDisabled = disabled || (max !== undefined && internalVal >= max);

  const renderButtons = () => {
    const decBtn = (
      <button
        type="button"
        aria-label="Decrement value"
        disabled={isMinDisabled}
        onClick={handleDecrement}
        className={cn(
          "flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 transition-all shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
          buttonSizeMap[size],
        )}
      >
        <Icon
          icon="hugeicons:minus-sign"
          className="size-3.5 shrink-0 stroke-[2.5]"
        />
      </button>
    );

    const incBtn = (
      <button
        type="button"
        aria-label="Increment value"
        disabled={isMaxDisabled}
        onClick={handleIncrement}
        className={cn(
          "flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 transition-all shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
          buttonSizeMap[size],
        )}
      >
        <Icon
          icon="hugeicons:plus-sign"
          className="size-3.5 shrink-0 stroke-[2.5]"
        />
      </button>
    );

    if (stepperPosition === "split") {
      return { left: decBtn, right: incBtn };
    }

    if (stepperPosition === "right") {
      return {
        left: null,
        right: (
          <div className="flex items-center gap-1">
            {decBtn}
            {incBtn}
          </div>
        ),
      };
    }

    if (stepperPosition === "inline") {
      return {
        left: null,
        right: (
          <div className="flex flex-col gap-0.5 justify-center h-full">
            <button
              type="button"
              disabled={isMaxDisabled}
              onClick={handleIncrement}
              className="p-0.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 disabled:opacity-30 cursor-pointer"
            >
              <Icon icon="hugeicons:arrow-up-01" className="size-3" />
            </button>
            <button
              type="button"
              disabled={isMinDisabled}
              onClick={handleDecrement}
              className="p-0.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 disabled:opacity-30 cursor-pointer"
            >
              <Icon icon="hugeicons:arrow-down-01" className="size-3" />
            </button>
          </div>
        ),
      };
    }

    return { left: decBtn, right: incBtn };
  };

  const { left, right } = renderButtons();

  return (
    <div className={cn("flex flex-col gap-1.5 w-full max-w-xs", className)}>
      {label && (
        <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
          {label}
        </label>
      )}

      <div
        onWheel={handleWheel}
        className={cn(
          "flex items-center justify-between border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs transition-colors focus-within:ring-2 focus-within:ring-sky-500/20",
          sizeMap[size],
          designRadius[radius],
          isInvalid && "border-rose-500 dark:border-rose-500",
          disabled && "opacity-50 pointer-events-none",
        )}
      >
        {left}

        <input
          type="text"
          value={isFocused ? rawInputValue : formattedDisplay}
          disabled={disabled}
          onFocus={() => {
            setIsFocused(true);
            setRawInputValue(internalVal.toString());
          }}
          onBlur={() => {
            setIsFocused(false);
            const parsed = parseFloat(rawInputValue);
            if (!Number.isNaN(parsed)) {
              updateValue(parsed);
            }
          }}
          onChange={(e) => {
            setRawInputValue(e.target.value);
            const parsed = parseFloat(e.target.value);
            if (!Number.isNaN(parsed)) {
              updateValue(parsed);
            }
          }}
          className="w-full text-center bg-transparent outline-none font-mono font-bold text-zinc-900 dark:text-zinc-100"
        />

        {right}
      </div>

      {description && (
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
