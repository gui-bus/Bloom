export const numberInputCode = `"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export type StepperPosition = "split" | "right" | "inline";
export type NumberFormatType = "number" | "currency" | "percent";

export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "defaultValue"> {
  value?: number;
  defaultValue?: number;
  onChange?: (val: number | undefined) => void;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  stepperPosition?: StepperPosition;
  format?: NumberFormatType;
  currency?: string;
  locale?: string;
  allowMouseWheel?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  isInvalid?: boolean;
  disabled?: boolean;
  className?: string;
}

export function NumberInput({
  value,
  defaultValue,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  precision,
  stepperPosition = "right",
  format = "number",
  currency = "USD",
  locale = "en-US",
  allowMouseWheel = false,
  label,
  description,
  errorMessage,
  isInvalid = false,
  disabled = false,
  className,
  id,
  ...props
}: NumberInputProps) {
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [internalVal, setInternalVal] = React.useState<number | undefined>(
    value !== undefined ? value : defaultValue
  );
  const [displayString, setDisplayString] = React.useState<string>("");
  const [isFocused, setIsFocused] = React.useState(false);

  const currentNum = value !== undefined ? value : internalVal;

  const formatter = React.useMemo(() => {
    if (format === "currency") {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: precision ?? 2,
        maximumFractionDigits: precision ?? 2,
      });
    }
    if (format === "percent") {
      return new Intl.NumberFormat(locale, {
        style: "percent",
        minimumFractionDigits: precision ?? 0,
        maximumFractionDigits: precision ?? 2,
      });
    }
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: precision ?? 0,
      maximumFractionDigits: precision ?? 20,
      useGrouping: false,
    });
  }, [format, currency, locale, precision]);

  const formatNumber = React.useCallback(
    (num: number | undefined): string => {
      if (num === undefined || isNaN(num)) return "";
      try {
        return formatter.format(num);
      } catch {
        return num.toString();
      }
    },
    [formatter]
  );

  React.useEffect(() => {
    if (!isFocused) {
      setDisplayString(formatNumber(currentNum));
    }
  }, [currentNum, formatNumber, isFocused]);

  const updateValue = (nextVal: number | undefined) => {
    let clamped: number | undefined = nextVal;
    if (clamped !== undefined && !isNaN(clamped)) {
      clamped = Math.max(min, Math.min(max, clamped));
      if (precision !== undefined) {
        clamped = Number(clamped.toFixed(precision));
      }
    }

    if (value === undefined) {
      setInternalVal(clamped);
    }
    onChange?.(clamped);
  };

  const handleIncrement = () => {
    if (disabled) return;
    const base = currentNum ?? 0;
    updateValue(base + step);
  };

  const handleDecrement = () => {
    if (disabled) return;
    const base = currentNum ?? 0;
    updateValue(base - step);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setDisplayString(raw);

    const cleanStr = raw.replace(/[^0-9.-]/g, "");
    const parsed = parseFloat(cleanStr);

    if (raw.trim() === "") {
      updateValue(undefined);
    } else if (!isNaN(parsed)) {
      updateValue(parsed);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    setDisplayString(formatNumber(currentNum));
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (currentNum !== undefined) {
      setDisplayString(currentNum.toString());
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (!allowMouseWheel || !isFocused || disabled) return;
    e.preventDefault();
    if (e.deltaY < 0) {
      handleIncrement();
    } else {
      handleDecrement();
    }
  };

  const isMinReached = currentNum !== undefined && currentNum <= min;
  const isMaxReached = currentNum !== undefined && currentNum >= max;

  return (
    <div className={cn("flex flex-col gap-1.5 w-full max-w-xs", className)}>
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
          {label}
        </label>
      )}

      <div
        className={cn(
          "relative flex items-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs transition-all focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20 overflow-hidden",
          isInvalid && "border-rose-500 dark:border-rose-500 focus-within:border-rose-500 focus-within:ring-rose-500/20",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none"
        )}
      >
        {stepperPosition === "split" && (
          <button
            type="button"
            disabled={disabled || isMinReached}
            onClick={handleDecrement}
            className="h-10 px-3 flex items-center justify-center text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-800 transition-colors disabled:opacity-30 cursor-pointer"
          >
            <Icon icon="hugeicons:minus-01" className="size-4" />
          </button>
        )}

        <input
          ref={inputRef}
          id={inputId}
          type="text"
          inputMode="decimal"
          disabled={disabled}
          value={displayString}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onWheel={handleWheel}
          className={cn(
            "w-full h-10 px-3 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 outline-none text-left font-mono",
            stepperPosition === "split" && "text-center"
          )}
          {...props}
        />

        {stepperPosition === "inline" && (
          <div className="flex items-center gap-1 pr-2">
            <button
              type="button"
              disabled={disabled || isMinReached}
              onClick={handleDecrement}
              className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors disabled:opacity-30 cursor-pointer"
            >
              <Icon icon="hugeicons:minus-01" className="size-3.5" />
            </button>
            <button
              type="button"
              disabled={disabled || isMaxReached}
              onClick={handleIncrement}
              className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors disabled:opacity-30 cursor-pointer"
            >
              <Icon icon="hugeicons:plus-sign" className="size-3.5" />
            </button>
          </div>
        )}

        {stepperPosition === "right" && (
          <div className="flex flex-col border-l border-zinc-200 dark:border-zinc-800 h-10 w-7 shrink-0">
            <button
              type="button"
              disabled={disabled || isMaxReached}
              onClick={handleIncrement}
              className="flex-1 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 border-b border-zinc-200 dark:border-zinc-800 transition-colors disabled:opacity-30 cursor-pointer"
            >
              <Icon icon="hugeicons:arrow-up-01" className="size-3" />
            </button>
            <button
              type="button"
              disabled={disabled || isMinReached}
              onClick={handleDecrement}
              className="flex-1 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors disabled:opacity-30 cursor-pointer"
            >
              <Icon icon="hugeicons:arrow-down-01" className="size-3" />
            </button>
          </div>
        )}

        {stepperPosition === "split" && (
          <button
            type="button"
            disabled={disabled || isMaxReached}
            onClick={handleIncrement}
            className="h-10 px-3 flex items-center justify-center text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-l border-zinc-200 dark:border-zinc-800 transition-colors disabled:opacity-30 cursor-pointer"
          >
            <Icon icon="hugeicons:plus-sign" className="size-4" />
          </button>
        )}
      </div>

      {isInvalid && errorMessage ? (
        <p className="text-xs text-rose-500 font-medium">{errorMessage}</p>
      ) : description ? (
        <p className="text-xs text-zinc-400 dark:text-zinc-500">{description}</p>
      ) : null}
    </div>
  );
}
`;
