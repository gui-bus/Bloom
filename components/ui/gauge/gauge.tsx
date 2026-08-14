"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type GaugeColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger";

export type GaugeSize = "sm" | "md" | "lg";
export type GaugeType = "semicircle" | "radial";
export type GaugeVariant = "solid" | "dashes";

export interface GaugeProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  size?: GaugeSize;
  color?: GaugeColor;
  type?: GaugeType;
  variant?: GaugeVariant;
  label?: React.ReactNode;
  unit?: string;
  showValueLabel?: boolean;
  showTicks?: boolean;
  showTickLabels?: boolean;
  showGradient?: boolean;
  gradientColors?: string[];
  numTicks?: number;
  numDashes?: number;
  tickStep?: number;
  tickValues?: number[];
}

const sizeMap = {
  sm: {
    size: 120,
    stroke: 8,
    fontValue: "text-lg",
    fontLabel: "text-[10px]",
    tickOffset: 12,
  },
  md: {
    size: 180,
    stroke: 12,
    fontValue: "text-2xl",
    fontLabel: "text-xs",
    tickOffset: 16,
  },
  lg: {
    size: 240,
    stroke: 16,
    fontValue: "text-4xl",
    fontLabel: "text-sm",
    tickOffset: 22,
  },
};

const strokeColors: Record<GaugeColor, string> = {
  default: "stroke-zinc-400 dark:stroke-zinc-500",
  primary: "stroke-sky-500 dark:stroke-sky-400",
  secondary: "stroke-violet-500 dark:stroke-violet-400",
  accent: "stroke-pink-500 dark:stroke-pink-400",
  success: "stroke-emerald-500 dark:stroke-emerald-400",
  warning: "stroke-amber-500 dark:stroke-amber-400",
  danger: "stroke-rose-500 dark:stroke-rose-400",
};

function parseHex(hex: string) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  if (clean.length === 3) {
    return {
      r: ((num >> 8) & 0xf) * 17,
      g: ((num >> 4) & 0xf) * 17,
      b: (num & 0xf) * 17,
    };
  }
  return {
    r: (num >> 16) & 0xff,
    g: (num >> 8) & 0xff,
    b: num & 0xff,
  };
}

function interpolateColor(color1: string, color2: string, factor: number) {
  const c1 = parseHex(color1);
  const c2 = parseHex(color2);
  const r = Math.round(c1.r + factor * (c2.r - c1.r));
  const g = Math.round(c1.g + factor * (c2.g - c1.g));
  const b = Math.round(c1.b + factor * (c2.b - c1.b));
  return `rgb(${r},${g},${b})`;
}

function getMultiGradientColor(colors: string[], ratio: number) {
  if (colors.length === 0) return "";
  if (colors.length === 1) return colors[0];
  const scaledRatio = ratio * (colors.length - 1);
  const index = Math.floor(scaledRatio);
  const nextIndex = Math.min(index + 1, colors.length - 1);
  const factor = scaledRatio - index;
  return interpolateColor(colors[index], colors[nextIndex], factor);
}

export const Gauge = React.forwardRef<HTMLDivElement, GaugeProps>(
  (
    {
      className,
      value = 0,
      min = 0,
      max = 100,
      size = "md",
      color = "primary",
      type = "semicircle",
      variant = "solid",
      label,
      unit = "",
      showValueLabel = true,
      showTicks = false,
      showTickLabels = false,
      showGradient = false,
      gradientColors = ["#10b981", "#f59e0b", "#ef4444"],
      numTicks = 9,
      numDashes = 25,
      tickStep,
      tickValues,
      ...props
    },
    ref,
  ) => {
    const config = sizeMap[size];
    const radius = (config.size - config.stroke) / 2;
    const circumference = 2 * Math.PI * radius;

    const clampedValue = Math.min(max, Math.max(min, value));
    const range = max - min;
    const percentage = range > 0 ? ((clampedValue - min) / range) * 100 : 0;

    const isSemicircle = type === "semicircle";
    const sweepAngle = isSemicircle ? 180 : 240;

    const arcLength = (sweepAngle / 360) * circumference;

    const strokeDashoffset = arcLength - (percentage / 100) * arcLength;

    const svgRotation = isSemicircle ? "rotate-[180deg]" : "rotate-[150deg]";

    const containerHeight = isSemicircle
      ? config.size / 2 + config.stroke / 2
      : config.size;

    const cx = config.size / 2;
    const cy = config.size / 2;

    const startAngle = isSemicircle ? 180 : 150;

    const resolvedTickValues = React.useMemo(() => {
      if (Array.isArray(tickValues)) return tickValues;
      if (typeof tickStep === "number" && tickStep > 0) {
        const values = [];
        for (let v = min; v <= max; v += tickStep) {
          values.push(v);
        }

        if (values[values.length - 1] !== max) {
          values.push(max);
        }
        return values;
      }

      const values = [];
      for (let i = 0; i < numTicks; i++) {
        values.push(Math.round(min + (i / (numTicks - 1)) * range));
      }
      return values;
    }, [tickValues, tickStep, min, max, numTicks, range]);

    const ticksData = React.useMemo(() => {
      const tickItems = [];
      const labelItems = [];

      for (const val of resolvedTickValues) {
        const valRatio = range > 0 ? (val - min) / range : 0;
        const angleDeg = startAngle + valRatio * sweepAngle;
        const angleRad = (angleDeg * Math.PI) / 180;

        const x1 = Number((cx + radius * Math.cos(angleRad)).toFixed(3));
        const y1 = Number((cy + radius * Math.sin(angleRad)).toFixed(3));

        const tickLength = config.stroke * 0.5;
        const x2 = Number(
          (cx + (radius - tickLength) * Math.cos(angleRad)).toFixed(3),
        );
        const y2 = Number(
          (cy + (radius - tickLength) * Math.sin(angleRad)).toFixed(3),
        );

        tickItems.push({ x1, y1, x2, y2 });

        if (showTickLabels) {
          const textRadius = radius - config.stroke - config.tickOffset;
          const tx = Number((cx + textRadius * Math.cos(angleRad)).toFixed(3));
          const ty = Number((cy + textRadius * Math.sin(angleRad)).toFixed(3));
          labelItems.push({ tx, ty, val });
        }
      }

      return { tickItems, labelItems };
    }, [
      resolvedTickValues,
      range,
      min,
      startAngle,
      sweepAngle,
      cx,
      cy,
      radius,
      config.stroke,
      config.tickOffset,
      showTickLabels,
    ]);

    const dashes = React.useMemo(() => {
      if (variant !== "dashes") return [];
      const items = [];
      for (let i = 0; i < numDashes; i++) {
        const angleDeg = startAngle + (i / (numDashes - 1)) * sweepAngle;
        const angleRad = (angleDeg * Math.PI) / 180;

        const active = (i / (numDashes - 1)) * 100 <= percentage;

        const x1 = Number((cx + radius * Math.cos(angleRad)).toFixed(3));
        const y1 = Number((cy + radius * Math.sin(angleRad)).toFixed(3));

        const x2 = Number(
          (cx + (radius - config.stroke) * Math.cos(angleRad)).toFixed(3),
        );
        const y2 = Number(
          (cy + (radius - config.stroke) * Math.sin(angleRad)).toFixed(3),
        );

        let dashColorClass = active
          ? strokeColors[color]
          : "stroke-zinc-150 dark:stroke-zinc-800/80";
        let dashStyle = {};

        if (active && showGradient && gradientColors.length > 0) {
          const ratio = i / (numDashes - 1);
          const colorVal = getMultiGradientColor(gradientColors, ratio);
          dashStyle = { stroke: colorVal };
          dashColorClass = "";
        }

        items.push({ x1, y1, x2, y2, active, dashColorClass, dashStyle });
      }
      return items;
    }, [
      variant,
      numDashes,
      startAngle,
      sweepAngle,
      cx,
      cy,
      radius,
      config.stroke,
      percentage,
      color,
      showGradient,
      gradientColors,
    ]);

    const uniqueGradientId = React.useId().replace(/:/g, "");

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center select-none text-center",
          className,
        )}
        style={{ width: config.size }}
        {...props}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ width: config.size, height: containerHeight }}
        >
          <svg
            width={config.size}
            height={config.size}
            className={cn(
              "transition-transform duration-500",
              isSemicircle && "absolute top-0",
            )}
          >
            {showGradient &&
              variant === "solid" &&
              gradientColors.length > 0 && (
                <defs>
                  <linearGradient
                    id={`gauge-gradient-${uniqueGradientId}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    {gradientColors.map((colorStr, idx) => {
                      const offsetPct = Math.round(
                        (idx / (gradientColors.length - 1)) * 100,
                      );
                      return (
                        <stop
                          key={idx}
                          offset={`${offsetPct}%`}
                          stopColor={colorStr}
                        />
                      );
                    })}
                  </linearGradient>
                </defs>
              )}

            {variant === "solid" && (
              <g
                className={cn(
                  "transition-transform duration-500 origin-center",
                  svgRotation,
                )}
              >
                <circle
                  cx={cx}
                  cy={cy}
                  r={radius}
                  className="stroke-zinc-100 dark:stroke-zinc-800/80 fill-none"
                  strokeWidth={config.stroke}
                  strokeDasharray={`${Number(arcLength.toFixed(3))} ${Number(circumference.toFixed(3))}`}
                  strokeLinecap="round"
                />

                <circle
                  cx={cx}
                  cy={cy}
                  r={radius}
                  className={cn(
                    "fill-none transition-all duration-500 ease-out",
                    !(showGradient && gradientColors.length > 0) &&
                      strokeColors[color],
                  )}
                  stroke={
                    showGradient && gradientColors.length > 0
                      ? `url(#gauge-gradient-${uniqueGradientId})`
                      : undefined
                  }
                  strokeWidth={config.stroke}
                  strokeDasharray={`${Number(arcLength.toFixed(3))} ${Number(circumference.toFixed(3))}`}
                  strokeDashoffset={Number(strokeDashoffset.toFixed(3))}
                  strokeLinecap="round"
                />
              </g>
            )}

            {variant === "dashes" && (
              <g
                strokeWidth={Math.max(
                  2,
                  Number((config.stroke * 0.4).toFixed(1)),
                )}
                strokeLinecap="round"
              >
                {dashes.map((d, idx) => (
                  <line
                    key={idx}
                    x1={d.x1}
                    y1={d.y1}
                    x2={d.x2}
                    y2={d.y2}
                    className={d.dashColorClass}
                    style={d.dashStyle}
                  />
                ))}
              </g>
            )}

            {showTicks && (
              <g
                className="stroke-zinc-300 dark:stroke-zinc-700"
                strokeWidth={1.5}
                strokeLinecap="round"
              >
                {ticksData.tickItems.map((t, idx) => (
                  <line key={idx} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
                ))}
              </g>
            )}

            {showTicks && showTickLabels && (
              <g className="fill-zinc-400 dark:fill-zinc-500 font-mono text-[9px] font-medium">
                {ticksData.labelItems.map((l, idx) => (
                  <text
                    key={idx}
                    x={l.tx}
                    y={l.ty}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {l.val}
                  </text>
                ))}
              </g>
            )}
          </svg>

          <div
            className={cn(
              "absolute flex flex-col items-center justify-center text-zinc-950 dark:text-zinc-50 pointer-events-none",
              isSemicircle ? "bottom-2" : "inset-0",
            )}
          >
            {showValueLabel && (
              <span
                className={cn("font-bold tracking-tight", config.fontValue)}
              >
                {clampedValue}
                {unit && (
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium ml-0.5">
                    {unit}
                  </span>
                )}
              </span>
            )}
            {label && (
              <span
                className={cn(
                  "text-zinc-500 dark:text-zinc-400 font-medium mt-0.5",
                  config.fontLabel,
                )}
              >
                {label}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Gauge.displayName = "Gauge";
