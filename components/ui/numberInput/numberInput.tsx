"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button/button";
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
}

const sizeMap = {
  sm: "h-8 text-xs px-2 gap-1",
  md: "h-10 text-sm px-3 gap-2",
  lg: "h-12 text-base px-4 gap-3",
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

  return (
    <div className="flex flex-col gap-1.5 w-full max-w-xs">
      {label && <label className="text-xs font-semibold text-foreground/90 select-none">{label}</label>}
      <div
        className={cn(
          "flex items-center justify-between border border-input bg-background shadow-xs",
          sizeMap[size],
          designRadius[radius]
        )}
      >
        <Button
          type="button"
          size="sm"
          variant="light"
          isIconOnly
          ariaLabel="Decrement value"
          disabled={disabled || (min !== undefined && internalVal <= min)}
          onClick={handleDecrement}
          aria-label="Decrement value"
        >
          <Minus className="size-3.5" />
        </Button>
        <input
          type="number"
          value={internalVal}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          onChange={(e) => updateValue(Number(e.target.value))}
          className="w-full text-center bg-transparent outline-none font-mono font-medium text-foreground [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Button
          type="button"
          size="sm"
          variant="light"
          isIconOnly
          ariaLabel="Increment value"
          disabled={disabled || (max !== undefined && internalVal >= max)}
          onClick={handleIncrement}
          aria-label="Increment value"
        >
          <Plus className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
