"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TimelineStatus =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "completed"
  | "active"
  | "pending"
  | "error";

interface TimelineProps {
  children: React.ReactNode;
  mode?: "left" | "alternate";
  className?: string;
}

interface TimelineItemProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  details?: React.ReactNode;
  time?: string;
  icon?: React.ReactNode;
  status?: TimelineStatus;
  isLast?: boolean;
  position?: "left" | "right";
  className?: string;
}

const statusColors: Record<TimelineStatus, string> = {
  default: "border-zinc-300 dark:border-zinc-600 text-zinc-500",
  primary: "border-sky-500 text-sky-500",
  success: "border-emerald-500 text-emerald-500",
  completed: "border-emerald-500 text-emerald-500",
  warning: "border-amber-500 text-amber-500",
  active: "border-sky-500 text-sky-500 animate-pulse",
  danger: "border-rose-500 text-rose-500",
  error: "border-rose-500 text-rose-500",
  pending: "border-zinc-300 dark:border-zinc-700 text-zinc-400",
};

const statusDotBg: Record<TimelineStatus, string> = {
  default: "bg-zinc-400",
  primary: "bg-sky-500",
  success: "bg-emerald-500",
  completed: "bg-emerald-500",
  warning: "bg-amber-500",
  active: "bg-sky-500",
  danger: "bg-rose-500",
  error: "bg-rose-500",
  pending: "bg-zinc-300 dark:bg-zinc-700",
};

export function Timeline({ children, mode = "left", className }: TimelineProps) {
  const items = React.Children.toArray(children);
  return (
    <div className={cn("relative space-y-0 w-full", className)}>
      {items.map((child, index) => {
        if (React.isValidElement<TimelineItemProps>(child)) {
          const position = mode === "alternate" ? (index % 2 === 0 ? "left" : "right") : "left";
          return React.cloneElement(child, {
            isLast: index === items.length - 1,
            position: child.props.position || position,
          });
        }
        return child;
      })}
    </div>
  );
}

export function TimelineItem({
  title,
  description,
  details,
  time,
  icon,
  status = "default",
  isLast = false,
  position = "left",
  className,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (position === "right") {
    return (
      <div className={cn("relative flex gap-4 pb-8 flex-row-reverse text-right", isLast && "pb-0", className)}>
        {/* Vertical Line */}
        {!isLast && (
          <div className="absolute right-[15px] top-[32px] bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" />
        )}

        {/* Icon Circle */}
        <div
          className={cn(
            "relative z-10 flex items-center justify-center size-8 rounded-full border-2 bg-white dark:bg-zinc-900 shrink-0 shadow-xs",
            statusColors[status]
          )}
        >
          {icon ? (
            <span className="text-sm">{icon}</span>
          ) : (
            <span className={cn("size-2.5 rounded-full", statusDotBg[status])} />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pt-0.5 min-w-0">
          <div className="flex items-center justify-end gap-3">
            {time && (
              <span className="font-mono text-xs text-zinc-400 shrink-0">
                {time}
              </span>
            )}
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {title}
            </p>
          </div>
          {description && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
              {description}
            </p>
          )}

          {details && (
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-semibold text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                {isExpanded ? "Hide Details" : "Show Details"}
              </button>
              {isExpanded && (
                <div className="mt-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 text-left animate-in fade-in-0">
                  {details}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative flex gap-4 pb-8", isLast && "pb-0", className)}>
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[15px] top-[32px] bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" />
      )}

      {/* Icon Circle */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center size-8 rounded-full border-2 bg-white dark:bg-zinc-900 shrink-0 shadow-xs",
          statusColors[status]
        )}
      >
        {icon ? (
          <span className="text-sm">{icon}</span>
        ) : (
          <span className={cn("size-2.5 rounded-full", statusDotBg[status])} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-0.5 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            {title}
          </p>
          {time && (
            <span className="font-mono text-xs text-zinc-400 shrink-0">
              {time}
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
            {description}
          </p>
        )}

        {details && (
          <div className="mt-2">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-semibold text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              {isExpanded ? "Hide Details" : "Show Details"}
            </button>
            {isExpanded && (
              <div className="mt-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 animate-in fade-in-0">
                {details}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
