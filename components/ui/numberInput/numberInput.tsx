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
  variant?:
    | "default"
    | "bordered"
    | "flat"
    | "underlined"
    | "filled"
    | "glassmorphism"
    | "gradient-border"
    | "glow";
  disabled?: boolean;
  isInvalid?: boolean;
  stepperPosition?: StepperPosition;
  format?: NumberFormatMode;
  currency?: string;
  locale?: string;
  precision?: number;
  allowMouseWheel?: boolean;
  isRequired?: boolean;
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

const variantMap = {
  default:
    "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
  bordered:
    "bg-transparent border-2 border-zinc-200 dark:border-zinc-800 focus-within:border-sky-500 text-zinc-900 dark:text-zinc-100",
  flat: "bg-zinc-100 dark:bg-zinc-800/60 border-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 focus-within:bg-white dark:focus-within:bg-zinc-900 focus-within:border-sky-500 border text-zinc-900 dark:text-zinc-100",
  underlined:
    "bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 rounded-none px-0 focus-within:border-sky-500 text-zinc-900 dark:text-zinc-100",
  filled:
    "bg-zinc-100 dark:bg-zinc-800/80 border border-transparent focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 text-zinc-900 dark:text-zinc-100",
  glassmorphism:
    "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 focus-within:border-sky-500 shadow-lg text-zinc-900 dark:text-zinc-100",
  "gradient-border":
    "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative [background-clip:padding-box] border border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-sky-500 before:via-indigo-500 before:to-pink-500 focus-within:ring-2 focus-within:ring-indigo-500/30",
  glow: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs focus-within:border-sky-500 focus-within:shadow-[0_0_12px_rgba(14,165,233,0.35)] text-zinc-900 dark:text-zinc-100",
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
  variant = "default",
  disabled = false,
  isInvalid = false,
  stepperPosition = "split",
  format,
  currency = "USD",
  locale = "en-US",
  precision,
  allowMouseWheel = true,
  isRequired = false,
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
          "flex items-center justify-center rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 transition-all shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
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
          "flex items-center justify-center rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 transition-all shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
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
          {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
        </label>
      )}

      <div
        onWheel={handleWheel}
        className={cn(
          "flex items-center justify-between transition-colors",
          variantMap[variant],
          sizeMap[size],
          variant !== "underlined" && designRadius[radius],
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
