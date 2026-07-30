export const sliderCode = `"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export interface SliderMark {
  value: number;
  label?: string;
}

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  showValue?: boolean;
  formatValue?: (val: number[]) => string;
  marks?: SliderMark[];
}

const trackColorMap = {
  default: "bg-zinc-900 dark:bg-zinc-100",
  primary: "bg-sky-500",
  secondary: "bg-purple-500",
  accent: "bg-pink-500",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
};

const thumbBorderMap = {
  default: "border-zinc-900 dark:border-zinc-100 focus-visible:ring-sky-500/20",
  primary: "border-sky-500 focus-visible:ring-sky-500/20",
  secondary: "border-purple-500 focus-visible:ring-purple-500/20",
  accent: "border-pink-500 focus-visible:ring-pink-500/20",
  success: "border-emerald-500 focus-visible:ring-emerald-500/20",
  warning: "border-amber-500 focus-visible:ring-amber-500/20",
  danger: "border-rose-500 focus-visible:ring-rose-500/20",
};

const sizeMap = {
  sm: { track: "h-1", thumb: "size-3.5" },
  md: { track: "h-2", thumb: "size-4" },
  lg: { track: "h-3", thumb: "size-5" },
};

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      color = "primary",
      size = "md",
      label,
      showValue = false,
      formatValue,
      marks,
      value,
      defaultValue,
      min = 0,
      max = 100,
      onValueChange,
      ...props
    },
    ref
  ) => {
    const initialVal = React.useMemo(() => {
      if (Array.isArray(value)) return value;
      if (Array.isArray(defaultValue)) return defaultValue;
      return [0];
    }, [value, defaultValue]);

    const [currentVal, setCurrentVal] = React.useState<number[]>(initialVal);

    React.useEffect(() => {
      if (Array.isArray(value)) {
        setCurrentVal(value);
      }
    }, [value]);

    const handleValueChange = (vals: number[]) => {
      if (value === undefined) {
        setCurrentVal(vals);
      }
      onValueChange?.(vals);
    };

    const formattedDisplay = React.useMemo(() => {
      if (formatValue) return formatValue(currentVal);
      return currentVal.join(" - ");
    }, [currentVal, formatValue]);

    return (
      <div className="w-full flex flex-col gap-2">
        {(label || showValue) && (
          <div className="flex justify-between items-center text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
            {label && <span>{label}</span>}
            {showValue && (
              <span className="text-zinc-500 font-mono text-xs">
                {formattedDisplay}
              </span>
            )}
          </div>
        )}
        <div className="relative w-full">
          <SliderPrimitive.Root
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            min={min}
            max={max}
            onValueChange={handleValueChange}
            className={cn(
              "relative flex w-full touch-none select-none items-center cursor-pointer z-10",
              className
            )}
            {...props}
          >
            <SliderPrimitive.Track
              className={cn(
                "relative w-full grow overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800",
                sizeMap[size].track
              )}
            >
              <SliderPrimitive.Range
                className={cn("absolute h-full", trackColorMap[color])}
              />
            </SliderPrimitive.Track>
            {Array.from({ length: currentVal.length }).map((_, i) => (
              <SliderPrimitive.Thumb
                key={i}
                className={cn(
                  "block rounded-full border-2 bg-white dark:bg-zinc-900 shadow-xs transition-transform focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 cursor-pointer",
                  sizeMap[size].thumb,
                  thumbBorderMap[color]
                )}
              />
            ))}
          </SliderPrimitive.Root>
          {marks && marks.length > 0 && (
            <div className="relative w-full mt-2 h-4 select-none">
              {marks.map((mark, i) => {
                const percent = Math.min(
                  100,
                  Math.max(0, ((mark.value - min) / (max - min)) * 100)
                );
                return (
                  <div
                    key={i}
                    style={{ left: percent + "%" }}
                    className="absolute -translate-x-1/2 flex flex-col items-center"
                  >
                    <div className="h-1.5 w-0.5 bg-zinc-300 dark:bg-zinc-700 mb-0.5" />
                    {mark.label && (
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium whitespace-nowrap">
                        {mark.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
`;
