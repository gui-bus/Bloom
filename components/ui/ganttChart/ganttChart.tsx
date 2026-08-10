"use client";

import type * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";
import { cn } from "@/lib/utils";

export interface GanttTask {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  progress?: number;
  dependencies?: string[];
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
}

export interface GanttChartProps extends React.HTMLAttributes<HTMLDivElement> {
  tasks: GanttTask[];
  viewStartDate: Date;
  viewEndDate: Date;
  onTaskClick?: (task: GanttTask) => void;
}

const progressColorMap = {
  default: "bg-zinc-500 dark:bg-zinc-400",
  primary: "bg-sky-500 dark:bg-sky-400",
  secondary: "bg-purple-500 dark:bg-purple-400",
  success: "bg-emerald-500 dark:bg-emerald-400",
  warning: "bg-amber-500 dark:bg-amber-400",
  danger: "bg-rose-500 dark:bg-rose-400",
};

const barColorMap = {
  default: "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700",
  primary: "bg-sky-50 dark:bg-sky-950/20 border-sky-100 dark:border-sky-900/30",
  secondary:
    "bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30",
  success:
    "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30",
  warning:
    "bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30",
  danger:
    "bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/30",
};

export function GanttChart({
  tasks,
  viewStartDate,
  viewEndDate,
  onTaskClick,
  className,
  ...props
}: GanttChartProps) {
  const totalDuration = viewEndDate.getTime() - viewStartDate.getTime();

  const getLeftPercentage = (date: Date) => {
    const duration = date.getTime() - viewStartDate.getTime();
    return Math.max(0, Math.min(100, (duration / totalDuration) * 100));
  };

  const getWidthPercentage = (start: Date, end: Date) => {
    const startLeft = getLeftPercentage(start);
    const endLeft = getLeftPercentage(end);
    return Math.max(1, endLeft - startLeft);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          "w-full overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 shadow-xs",
          className,
        )}
        {...props}
      >
        <div className="min-w-[800px] select-none">
          <div className="grid grid-cols-[240px_1fr] border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 font-semibold text-xs text-zinc-500 uppercase tracking-wider">
            <div className="p-4 border-r border-zinc-200 dark:border-zinc-800">
              Task Definition
            </div>
            <div className="p-4 flex justify-between items-center text-zinc-400">
              <span>{formatDate(viewStartDate)}</span>
              <span>{formatDate(viewEndDate)}</span>
            </div>
          </div>

          <div className="divide-y divide-zinc-100 dark:divide-zinc-800/40 relative">
            <div className="absolute inset-y-0 left-[240px] right-0 grid grid-cols-4 pointer-events-none divide-x divide-zinc-100/70 dark:divide-zinc-800/20">
              <div />
              <div />
              <div />
              <div />
            </div>

            {tasks.map((task) => {
              const left = getLeftPercentage(task.startDate);
              const width = getWidthPercentage(task.startDate, task.endDate);
              const colorKey = task.color || "primary";

              const tooltipText = (
                <div className="text-xs space-y-1 p-1">
                  <div className="font-bold text-zinc-900 dark:text-zinc-100">
                    {task.name}
                  </div>
                  <div>
                    Duration: {formatDate(task.startDate)} -{" "}
                    {formatDate(task.endDate)}
                  </div>
                  {task.progress !== undefined && (
                    <div>Progress: {task.progress}%</div>
                  )}
                  {task.dependencies && task.dependencies.length > 0 && (
                    <div className="text-zinc-400">
                      Depends on: {task.dependencies.join(", ")}
                    </div>
                  )}
                </div>
              );

              return (
                <div
                  key={task.id}
                  onClick={() => onTaskClick?.(task)}
                  className={cn(
                    "grid grid-cols-[240px_1fr] group transition-colors",
                    onTaskClick
                      ? "cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                      : "hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20",
                  )}
                >
                  <div className="p-4 text-sm font-medium border-r border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2 overflow-hidden">
                    <span
                      className="truncate text-zinc-800 dark:text-zinc-200"
                      title={task.name}
                    >
                      {task.name}
                    </span>
                    {task.progress !== undefined && (
                      <span className="text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded-full shrink-0 font-mono">
                        {task.progress}%
                      </span>
                    )}
                  </div>

                  <div className="p-4 relative h-14 flex items-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={cn(
                            "absolute h-6 rounded-md border overflow-hidden shadow-2xs transition-all group-hover:scale-[1.02]",
                            barColorMap[colorKey],
                          )}
                          style={{ left: `${left}%`, width: `${width}%` }}
                        >
                          {task.progress !== undefined && (
                            <div
                              className={cn(
                                "h-full transition-all duration-500",
                                progressColorMap[colorKey],
                              )}
                              style={{ width: `${task.progress}%` }}
                            />
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{tooltipText}</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
