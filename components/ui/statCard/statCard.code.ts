export const statCardCode = `"use client";

import * as React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
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
        "flex flex-col gap-2 rounded-2xl border border-border bg-background p-5 shadow-xs transition-shadow hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </span>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>

      <div className="flex items-baseline justify-between gap-2 mt-1">
        <span className="text-2xl font-extrabold tracking-tight text-foreground">
          {value}
        </span>

        {change !== undefined && (
          <div
            className={cn(
              "inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full",
              trend === "up" && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
              trend === "down" && "bg-rose-500/10 text-rose-600 dark:text-rose-400",
              trend === "neutral" && "bg-muted text-muted-foreground"
            )}
          >
            {trend === "up" && <TrendingUp className="size-3" />}
            {trend === "down" && <TrendingDown className="size-3" />}
            <span>{change}</span>
          </div>
        )}
      </div>

      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}`;
