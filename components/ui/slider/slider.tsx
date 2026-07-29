"use client";

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
  default: "bg-foreground",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

const thumbBorderMap = {
  default: "border-foreground focus-visible:ring-foreground/20",
  primary: "border-primary focus-visible:ring-primary/20",
  secondary: "border-secondary focus-visible:ring-secondary/20",
  accent: "border-accent focus-visible:ring-accent/20",
  success: "border-success focus-visible:ring-success/20",
  warning: "border-warning focus-visible:ring-warning/20",
  danger: "border-danger focus-visible:ring-danger/20",
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
          <div className="flex justify-between items-center text-xs font-semibold text-foreground/90 select-none">
            {label && <span>{label}</span>}
            {showValue && (
              <span className="text-muted-foreground font-mono">
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
                "relative w-full grow overflow-hidden rounded-full bg-secondary/20",
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
                  "block rounded-full border-2 bg-background ring-offset-background transition-transform focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 hover:scale-110",
                  sizeMap[size].thumb,
                  thumbBorderMap[color]
                )}
              />
            ))}
          </SliderPrimitive.Root>
          {marks && marks.length > 0 && (
            <div className="relative w-full mt-1.5 h-4 select-none">
              {marks.map((mark, i) => {
                const percent = Math.min(
                  100,
                  Math.max(0, ((mark.value - min) / (max - min)) * 100)
                );
                return (
                  <div
                    key={i}
                    style={{ left: `${percent}%` }}
                    className="absolute -translate-x-1/2 flex flex-col items-center"
                  >
                    <div className="h-1.5 w-0.5 bg-muted-foreground/50 mb-0.5" />
                    {mark.label && (
                      <span className="text-[10px] text-muted-foreground font-medium whitespace-nowrap">
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
