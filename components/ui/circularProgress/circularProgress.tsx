import * as React from "react";
import { cn } from "@/lib/utils";

export interface CircularProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
  color?: string;
  trackColor?: string;
  gradient?: {
    start: string;
    end: string;
  };
}

export function CircularProgress({
  value,
  size = 100,
  strokeWidth = 10,
  showValue = true,
  color = "text-blue-500",
  trackColor = "text-zinc-200 dark:text-zinc-800",
  gradient,
  className,
  ...props
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const clampedValue = Math.min(100, Math.max(0, value));
  const offset = circumference - (clampedValue / 100) * circumference;
  const gradientId = React.useId();

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className,
      )}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg className="transform -rotate-90" width={size} height={size}>
        {gradient && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradient.start} />
              <stop offset="100%" stopColor={gradient.end} />
            </linearGradient>
          </defs>
        )}
        <circle
          className={cn("stroke-current", trackColor)}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={cn(
            "stroke-current transition-all duration-500 ease-in-out",
            !gradient && color,
          )}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={gradient ? { stroke: `url(#${gradientId})` } : undefined}
        />
      </svg>
      {showValue && (
        <span className="absolute text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {Math.round(clampedValue)}%
        </span>
      )}
    </div>
  );
}
