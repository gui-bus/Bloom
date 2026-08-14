"use client";

import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export type TimelineColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger";

export type TimelineVariant = "default" | "bordered" | "flat" | "contained";
export type TimelineSize = "sm" | "md" | "lg";
export type TimelineRadius =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  mode?: "left" | "alternate";
  variant?: TimelineVariant;
  color?: TimelineColor;
  size?: TimelineSize;
  radius?: TimelineRadius;
}

export interface TimelineItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  details?: React.ReactNode;
  time?: string;
  icon?: React.ReactNode;
  status?: TimelineColor | "completed" | "active" | "pending" | "error";
  isLast?: boolean;
  position?: "left" | "right";
  variant?: TimelineVariant;
  color?: TimelineColor;
  size?: TimelineSize;
  radius?: TimelineRadius;
}

interface TimelineContextType {
  variant: TimelineVariant;
  color: TimelineColor;
  size: TimelineSize;
  radius: TimelineRadius;
}

const TimelineContext = React.createContext<TimelineContextType>({
  variant: "default",
  color: "primary",
  size: "md",
  radius: "full",
});

const dotSizes: Record<TimelineSize, string> = {
  sm: "size-6 text-[10px]",
  md: "size-8 text-xs",
  lg: "size-10 text-sm",
};

const innerDotSizes: Record<TimelineSize, string> = {
  sm: "size-1.5",
  md: "size-2.5",
  lg: "size-3.5",
};

const lineWidths: Record<TimelineSize, string> = {
  sm: "w-0.5",
  md: "w-0.5",
  lg: "w-[3px]",
};

const lineOffsets: Record<TimelineSize, string> = {
  sm: "left-[11px] top-[24px]",
  md: "left-[15px] top-[32px]",
  lg: "left-[19px] top-[40px]",
};

const lineOffsetsRight: Record<TimelineSize, string> = {
  sm: "right-[11px] top-[24px]",
  md: "right-[15px] top-[32px]",
  lg: "right-[19px] top-[40px]",
};

const contentPaddings: Record<TimelineSize, string> = {
  sm: "pb-6",
  md: "pb-8",
  lg: "pb-10",
};

const textSizes: Record<
  TimelineSize,
  { title: string; desc: string; time: string }
> = {
  sm: {
    title: "text-xs font-semibold",
    desc: "text-[11px] mt-0.5",
    time: "text-[10px]",
  },
  md: { title: "text-sm font-bold", desc: "text-xs mt-1", time: "text-xs" },
  lg: { title: "text-base font-bold", desc: "text-sm mt-1.5", time: "text-sm" },
};

// Colors mapping for background / borders / text
const colorMap: Record<
  TimelineColor,
  {
    text: string;
    border: string;
    bg: string;
    dotBg: string;
    flatBg: string;
    cardBorder: string;
    cardBg: string;
  }
> = {
  default: {
    text: "text-zinc-650 dark:text-zinc-400",
    border: "border-zinc-300 dark:border-zinc-700",
    bg: "bg-zinc-100 dark:bg-zinc-800",
    dotBg: "bg-zinc-450 dark:bg-zinc-500",
    flatBg: "bg-zinc-100/50 dark:bg-zinc-800/40",
    cardBorder: "border-zinc-200 dark:border-zinc-850",
    cardBg: "bg-zinc-50/50 dark:bg-zinc-900/40",
  },
  primary: {
    text: "text-sky-500",
    border: "border-sky-500",
    bg: "bg-sky-500",
    dotBg: "bg-sky-500",
    flatBg: "bg-sky-500/10 dark:bg-sky-400/10",
    cardBorder: "border-sky-200 dark:border-sky-950/40",
    cardBg: "bg-sky-50/30 dark:bg-sky-950/10",
  },
  secondary: {
    text: "text-violet-500",
    border: "border-violet-500",
    bg: "bg-violet-500",
    dotBg: "bg-violet-500",
    flatBg: "bg-violet-500/10 dark:bg-violet-400/10",
    cardBorder: "border-violet-200 dark:border-violet-950/40",
    cardBg: "bg-violet-50/30 dark:bg-violet-950/10",
  },
  accent: {
    text: "text-pink-500",
    border: "border-pink-500",
    bg: "bg-pink-500",
    dotBg: "bg-pink-500",
    flatBg: "bg-pink-500/10 dark:bg-pink-400/10",
    cardBorder: "border-pink-200 dark:border-pink-950/40",
    cardBg: "bg-pink-50/30 dark:bg-pink-950/10",
  },
  success: {
    text: "text-emerald-500",
    border: "border-emerald-500",
    bg: "bg-emerald-500",
    dotBg: "bg-emerald-500",
    flatBg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    cardBorder: "border-emerald-200 dark:border-emerald-950/40",
    cardBg: "bg-emerald-50/30 dark:bg-emerald-950/10",
  },
  warning: {
    text: "text-amber-500",
    border: "border-amber-500",
    bg: "bg-amber-500",
    dotBg: "bg-amber-500",
    flatBg: "bg-amber-500/10 dark:bg-amber-400/10",
    cardBorder: "border-amber-200 dark:border-amber-950/40",
    cardBg: "bg-amber-50/30 dark:bg-amber-950/10",
  },
  danger: {
    text: "text-rose-500",
    border: "border-rose-500",
    bg: "bg-rose-500",
    dotBg: "bg-rose-500",
    flatBg: "bg-rose-500/10 dark:bg-rose-400/10",
    cardBorder: "border-rose-200 dark:border-rose-950/40",
    cardBg: "bg-rose-50/30 dark:bg-rose-950/10",
  },
};

// Map legacy statuses to standard ones
function resolveStatusColor(
  status: TimelineItemProps["status"],
): TimelineColor {
  if (!status) return "primary";
  if (status === "completed" || status === "success") return "success";
  if (status === "active") return "primary";
  if (status === "error" || status === "danger") return "danger";
  if (status === "warning") return "warning";
  if (status === "pending" || status === "default") return "default";
  return status as TimelineColor;
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
      children,
      mode = "left",
      variant = "default",
      color = "primary",
      size = "md",
      radius = "full",
      className,
      ...props
    },
    ref,
  ) => {
    const items = React.Children.toArray(children);
    return (
      <TimelineContext.Provider value={{ variant, color, size, radius }}>
        <div
          ref={ref}
          className={cn("relative space-y-0 w-full select-none", className)}
          {...props}
        >
          {items.map((child, index) => {
            if (React.isValidElement<TimelineItemProps>(child)) {
              const position =
                mode === "alternate"
                  ? index % 2 === 0
                    ? "left"
                    : "right"
                  : "left";
              return React.cloneElement(child, {
                isLast: index === items.length - 1,
                position: child.props.position || position,
              });
            }
            return child;
          })}
        </div>
      </TimelineContext.Provider>
    );
  },
);

Timeline.displayName = "Timeline";

export const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      title,
      description,
      details,
      time,
      icon,
      status,
      isLast = false,
      position = "left",
      variant,
      color,
      size,
      radius,
      className,
      ...props
    },
    ref,
  ) => {
    const context = React.useContext(TimelineContext);
    const [isExpanded, setIsExpanded] = React.useState(false);

    // Resolve styling properties (local overrides context)
    const activeVariant = variant || context.variant;
    const activeColor = color || context.color;
    const activeSize = size || context.size;
    const activeRadius = radius || context.radius;

    // Determine color set based on item status or context color
    const resolvedColor = status ? resolveStatusColor(status) : activeColor;
    const palette = colorMap[resolvedColor];

    const isRight = position === "right";
    const radiusClass = designRadius[activeRadius] || "rounded-full";

    // CSS styling presets for different variants on the dot indicator
    const dotVariants: Record<TimelineVariant, string> = {
      default: cn(
        "border-2 bg-white dark:bg-zinc-950",
        palette.border,
        palette.text,
      ),
      bordered: cn("border-2 bg-transparent", palette.border, palette.text),
      flat: cn("border-transparent", palette.flatBg, palette.text),
      contained: cn(
        "border-2 bg-white dark:bg-zinc-950",
        palette.border,
        palette.text,
      ),
    };

    const containerStyle = cn(
      "relative flex gap-4",
      contentPaddings[activeSize],
      isRight ? "flex-row-reverse text-right" : "text-left",
      isLast && "pb-0",
      className,
    );

    const lineStyle = cn(
      "absolute bottom-0 bg-zinc-200 dark:bg-zinc-800",
      lineWidths[activeSize],
      isRight ? lineOffsetsRight[activeSize] : lineOffsets[activeSize],
    );

    const textStyle = textSizes[activeSize];

    return (
      <div ref={ref} className={containerStyle} {...props}>
        {/* Connection Track Line */}
        {!isLast && <div className={lineStyle} />}

        {/* Outer Dot Node */}
        <div
          className={cn(
            "relative z-10 flex items-center justify-center shrink-0 shadow-xs transition-all duration-300",
            dotSizes[activeSize],
            radiusClass,
            dotVariants[activeVariant],
          )}
        >
          {icon ? (
            <span className="flex items-center justify-center">{icon}</span>
          ) : (
            <span
              className={cn(
                "transition-all duration-300",
                innerDotSizes[activeSize],
                radiusClass,
                palette.dotBg,
                status === "active" && "animate-pulse",
              )}
            />
          )}
        </div>

        {/* Content Box */}
        <div
          className={cn(
            "flex-1 pt-0.5 min-w-0 transition-all duration-300",
            activeVariant === "contained" &&
              cn(
                "p-4 border rounded-2xl shadow-xs bg-white dark:bg-zinc-900/90",
                palette.cardBorder,
                palette.cardBg,
              ),
          )}
        >
          <div
            className={cn(
              "flex items-baseline gap-2",
              isRight && "justify-end",
            )}
          >
            {isRight ? (
              <>
                {time && (
                  <span className="font-mono text-zinc-400 shrink-0 text-xs">
                    {time}
                  </span>
                )}
                <h4
                  className={cn(
                    "text-zinc-900 dark:text-zinc-100",
                    textStyle.title,
                  )}
                >
                  {title}
                </h4>
              </>
            ) : (
              <>
                <h4
                  className={cn(
                    "text-zinc-900 dark:text-zinc-100",
                    textStyle.title,
                  )}
                >
                  {title}
                </h4>
                {time && (
                  <span className="font-mono text-zinc-400 shrink-0 text-xs">
                    {time}
                  </span>
                )}
              </>
            )}
          </div>

          {description && (
            <p
              className={cn(
                "text-zinc-500 dark:text-zinc-400 leading-relaxed",
                textStyle.desc,
              )}
            >
              {description}
            </p>
          )}

          {details && (
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "text-xs font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-1 cursor-pointer",
                  palette.text,
                )}
              >
                {isExpanded ? "Hide Details" : "Show Details"}
              </button>
              {isExpanded && (
                <div
                  className={cn(
                    "mt-2 p-3 border text-xs text-zinc-700 dark:text-zinc-300 animate-in fade-in-0 duration-200",
                    activeRadius === "full"
                      ? "rounded-sm"
                      : designRadius[activeRadius] || "rounded-sm",
                    activeVariant === "contained"
                      ? "bg-zinc-50/50 dark:bg-zinc-950/40 border-zinc-200/50 dark:border-zinc-800/50"
                      : "bg-zinc-50/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800",
                  )}
                >
                  {details}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  },
);

TimelineItem.displayName = "TimelineItem";
