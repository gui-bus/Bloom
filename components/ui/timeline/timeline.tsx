"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TimelineStatus = "default" | "primary" | "success" | "warning" | "danger";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

interface TimelineItemProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  time?: string;
  icon?: React.ReactNode;
  status?: TimelineStatus;
  isLast?: boolean;
  className?: string;
}

const statusColors: Record<TimelineStatus, string> = {
  default: "border-zinc-300 dark:border-zinc-600 text-zinc-500",
  primary: "border-sky-500 text-sky-500",
  success: "border-emerald-500 text-emerald-500",
  warning: "border-amber-500 text-amber-500",
  danger: "border-rose-500 text-rose-500",
};

const statusDotBg: Record<TimelineStatus, string> = {
  default: "bg-zinc-400",
  primary: "bg-sky-500",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
};

export function Timeline({ children, className }: TimelineProps) {
  const items = React.Children.toArray(children);
  return (
    <div className={cn("relative space-y-0", className)}>
      {items.map((child, index) => {
        if (React.isValidElement<TimelineItemProps>(child)) {
          return React.cloneElement(child, {
            isLast: index === items.length - 1,
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
  time,
  icon,
  status = "default",
  isLast = false,
  className,
}: TimelineItemProps) {
  return (
    <div className={cn("relative flex gap-4 pb-8", isLast && "pb-0", className)}>
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[15px] top-[32px] bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" />
      )}

      {/* Icon Circle */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center size-8 rounded-full border-2 bg-white dark:bg-zinc-900 shrink-0",
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
      </div>
    </div>
  );
}
