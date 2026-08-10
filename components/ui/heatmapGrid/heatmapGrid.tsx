"use client";

import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface HeatmapValue {
  date: Date | string;
  count: number;
}

export interface HeatmapGridProps {
  className?: string;
  data?: HeatmapValue[];
  startDate?: Date;
  endDate?: Date;
  colorTheme?: "emerald" | "sky" | "indigo" | "rose" | "amber";
  radius?: keyof typeof designRadius;
}

const themeColorMap = {
  emerald: [
    "bg-zinc-100 dark:bg-zinc-800/60",
    "bg-emerald-200 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400",
    "bg-emerald-300 dark:bg-emerald-800/60 text-white",
    "bg-emerald-400 dark:bg-emerald-600 text-white",
    "bg-emerald-500 dark:bg-emerald-400 text-white",
  ],
  sky: [
    "bg-zinc-100 dark:bg-zinc-800/60",
    "bg-sky-200 dark:bg-sky-950/40 text-sky-800 dark:text-sky-400",
    "bg-sky-300 dark:bg-sky-800/60 text-white",
    "bg-sky-400 dark:bg-sky-600 text-white",
    "bg-sky-500 dark:bg-sky-400 text-white",
  ],
  indigo: [
    "bg-zinc-100 dark:bg-zinc-800/60",
    "bg-indigo-200 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-400",
    "bg-indigo-300 dark:bg-indigo-800/60 text-white",
    "bg-indigo-400 dark:bg-indigo-600 text-white",
    "bg-indigo-500 dark:bg-indigo-400 text-white",
  ],
  rose: [
    "bg-zinc-100 dark:bg-zinc-800/60",
    "bg-rose-200 dark:bg-rose-950/40 text-rose-800 dark:text-rose-400",
    "bg-rose-300 dark:bg-rose-800/60 text-white",
    "bg-rose-400 dark:bg-rose-600 text-white",
    "bg-rose-500 dark:bg-rose-400 text-white",
  ],
  amber: [
    "bg-zinc-100 dark:bg-zinc-800/60",
    "bg-amber-200 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400",
    "bg-amber-300 dark:bg-amber-800/60 text-white",
    "bg-amber-400 dark:bg-emerald-600 text-white",
    "bg-amber-500 dark:bg-emerald-400 text-white",
  ],
};

export const HeatmapGrid: React.FC<HeatmapGridProps> = ({
  className,
  data = [],
  startDate = new Date(new Date().getFullYear(), 0, 1),
  endDate = new Date(new Date().getFullYear(), 11, 31),
  colorTheme = "emerald",
  radius = "xs",
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const getDaysArray = (start: Date, end: Date) => {
    const arr = [];
    const dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  };

  const dates = React.useMemo(
    () => getDaysArray(startDate, endDate),
    [startDate, endDate],
  );

  const dataMap = React.useMemo(() => {
    const map = new Map<string, number>();
    for (const val of data) {
      const dateStr =
        val.date instanceof Date
          ? val.date.toISOString().split("T")[0]
          : new Date(val.date).toISOString().split("T")[0];
      map.set(dateStr, val.count);
    }
    return map;
  }, [data]);

  const getIntensityIndex = (count: number) => {
    if (!count) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 8) return 3;
    return 4;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-full h-32 bg-zinc-50 dark:bg-zinc-900/10 animate-pulse rounded-lg border border-dashed border-zinc-200 dark:border-zinc-800",
          className,
        )}
      />
    );
  }

  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex flex-col gap-2 w-full overflow-x-auto p-4 select-none",
          className,
        )}
      >
        <div className="flex gap-[3px] min-w-max">
          {Array.from({ length: 53 }).map((_, colIdx) => {
            const colDates = dates.slice(colIdx * 7, (colIdx + 1) * 7);
            if (colDates.length === 0) return null;

            return (
              <div key={colIdx} className="flex flex-col gap-[3px]">
                {colDates.map((date) => {
                  const dateStr = date.toISOString().split("T")[0];
                  const count = dataMap.get(dateStr) || 0;
                  const intensity = getIntensityIndex(count);
                  const colorClass = themeColorMap[colorTheme][intensity];

                  return (
                    <Tooltip key={dateStr}>
                      <TooltipTrigger asChild>
                        <div
                          className={cn(
                            "size-3 transition-colors cursor-pointer border border-transparent hover:border-zinc-400 dark:hover:border-zinc-500",
                            designRadius[radius],
                            colorClass,
                          )}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        {`${count} activities on ${formatDate(date)}`}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 mt-2 justify-end">
          <span>Less</span>
          {themeColorMap[colorTheme].map((colorClass, idx) => (
            <div
              key={idx}
              className={cn(
                "size-3 border border-transparent",
                designRadius[radius],
                colorClass,
              )}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </TooltipProvider>
  );
};

HeatmapGrid.displayName = "HeatmapGrid";
