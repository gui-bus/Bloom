"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface SliderMark {
  value: number;
  label?: string;
}

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  showValue?: boolean;
  showTooltip?: boolean;
  formatTooltip?: (value: number) => string;
  formatValue?: (val: number[]) => string;
  marks?: SliderMark[];
  histogramData?: number[];
  histogramHeight?: number;
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
      showTooltip = false,
      formatTooltip,
      formatValue,
      marks,
      histogramData,
      histogramHeight = 40,
      value,
      defaultValue,
      min = 0,
      max = 100,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const initialVal = React.useMemo(() => {
      if (Array.isArray(value)) return value;
      if (Array.isArray(defaultValue)) return defaultValue;
      return [min];
    }, [value, defaultValue, min]);

    const [currentVal, setCurrentVal] = React.useState<number[]>(initialVal);
    const [hoveredThumbIndex, setHoveredThumbIndex] = React.useState<
      number | null
    >(null);

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

    const maxHistogramVal = React.useMemo(() => {
      if (!histogramData || histogramData.length === 0) return 1;
      return Math.max(...histogramData);
    }, [histogramData]);

    const activeRange = React.useMemo(() => {
      if (currentVal.length === 0) return [min, max];
      if (currentVal.length === 1) return [min, currentVal[0]];
      const sorted = [...currentVal].sort((a, b) => a - b);
      return [sorted[0], sorted[sorted.length - 1]];
    }, [currentVal, min, max]);

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

        <div className="relative w-full flex flex-col items-center">
          {histogramData && histogramData.length > 0 && (
            <div
              style={{ height: `${histogramHeight}px` }}
              className="w-full flex items-end gap-1 px-1 mb-1 select-none pointer-events-none"
            >
              {histogramData.map((val, idx) => {
                const stepSize = (max - min) / histogramData.length;
                const barMin = min + idx * stepSize;
                const barMax = barMin + stepSize;
                const heightPercent = Math.max(
                  8,
                  (val / maxHistogramVal) * 100,
                );

                const isActive =
                  barMax >= activeRange[0] && barMin <= activeRange[1];

                return (
                  <div
                    key={idx}
                    style={{ height: `${heightPercent}%` }}
                    className={cn(
                      "flex-1 rounded-t transition-colors duration-200",
                      isActive
                        ? "bg-sky-500/80 dark:bg-sky-400/80"
                        : "bg-zinc-200/80 dark:bg-zinc-800/80",
                    )}
                  />
                );
              })}
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
                className,
              )}
              {...props}
            >
              <SliderPrimitive.Track
                className={cn(
                  "relative w-full grow overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800",
                  sizeMap[size].track,
                )}
              >
                <SliderPrimitive.Range
                  className={cn("absolute h-full", trackColorMap[color])}
                />
              </SliderPrimitive.Track>

              {currentVal.map((val, i) => {
                const _percent = Math.min(
                  100,
                  Math.max(0, ((val - min) / (max - min)) * 100),
                );
                const isHovered = hoveredThumbIndex === i;

                return (
                  <React.Fragment key={i}>
                    <SliderPrimitive.Thumb
                      onMouseEnter={() => setHoveredThumbIndex(i)}
                      onMouseLeave={() => setHoveredThumbIndex(null)}
                      className={cn(
                        "block rounded-full border-2 bg-white dark:bg-zinc-900 shadow-xs transition-transform focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 cursor-pointer relative",
                        sizeMap[size].thumb,
                        thumbBorderMap[color],
                      )}
                    >
                      {showTooltip && (
                        <div
                          className={cn(
                            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-[10px] font-bold font-mono shadow-md whitespace-nowrap pointer-events-none transition-all duration-150 origin-bottom",
                            isHovered
                              ? "opacity-100 scale-100 translate-y-0"
                              : "opacity-0 scale-95 translate-y-1",
                          )}
                        >
                          {formatTooltip ? formatTooltip(val) : val}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100" />
                        </div>
                      )}
                    </SliderPrimitive.Thumb>
                  </React.Fragment>
                );
              })}
            </SliderPrimitive.Root>

            {marks && marks.length > 0 && (
              <div className="relative w-full mt-2 h-4 select-none">
                {marks.map((mark, i) => {
                  const percent = Math.min(
                    100,
                    Math.max(0, ((mark.value - min) / (max - min)) * 100),
                  );
                  return (
                    <div
                      key={i}
                      style={{ left: `${percent}%` }}
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
      </div>
    );
  },
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
