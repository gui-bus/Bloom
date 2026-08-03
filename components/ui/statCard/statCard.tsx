"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface StatCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  value: React.ReactNode;
  change?: string | number;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  description?: React.ReactNode;
}

export function StatCard({
  className,
  title,
  value,
  change,
  trend = "neutral",
  icon,
  description,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-xs transition-all hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
          {title}
        </span>
        {icon && (
          <div className="size-9 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center text-zinc-600 dark:text-zinc-300 shrink-0">
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-2 mt-1">
        <span className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          {value}
        </span>

        {change !== undefined && (
          <div
            className={cn(
              "inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full shrink-0",
              trend === "up" &&
                "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
              trend === "down" &&
                "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20",
              trend === "neutral" &&
                "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700",
            )}
          >
            {trend === "up" && (
              <Icon icon="hugeicons:trade-up-02" className="size-3.5" />
            )}
            {trend === "down" && (
              <Icon icon="hugeicons:trade-down-02" className="size-3.5" />
            )}
            <span>{change}</span>
          </div>
        )}
      </div>

      {description && (
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
          {description}
        </p>
      )}
    </div>
  );
}
