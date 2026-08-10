"use client";

import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const colSpanMap = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  full: "md:col-span-full",
};

const rowSpanMap = {
  1: "md:row-span-1",
  2: "md:row-span-2",
  3: "md:row-span-3",
  4: "md:row-span-4",
  5: "md:row-span-5",
  6: "md:row-span-6",
  full: "md:row-span-full",
};

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface BentoGridItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full" | string;
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full" | string;
  hoverGradient?: boolean;
  radius?: keyof typeof designRadius;
}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-[20rem]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
BentoGrid.displayName = "BentoGrid";

const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  (
    {
      className,
      title,
      description,
      header,
      icon,
      colSpan = 1,
      rowSpan = 1,
      hoverGradient = true,
      radius = "2xl",
      children,
      ...props
    },
    ref,
  ) => {
    const colSpanClass =
      typeof colSpan === "number" || colSpan === "full"
        ? colSpanMap[colSpan as keyof typeof colSpanMap] || ""
        : colSpan;

    const rowSpanClass =
      typeof rowSpan === "number" || rowSpan === "full"
        ? rowSpanMap[rowSpan as keyof typeof rowSpanMap] || ""
        : rowSpan;

    return (
      <div
        ref={ref}
        className={cn(
          "group/bento relative overflow-hidden flex flex-col justify-between p-6",
          "bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80",
          "shadow-xs hover:shadow-md transition-all duration-300",
          designRadius[radius],
          colSpanClass,
          rowSpanClass,
          className,
        )}
        {...props}
      >
        {hoverGradient && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/bento:opacity-100 dark:from-sky-500/15 dark:via-purple-500/10" />
        )}

        {header && (
          <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden mb-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800/20">
            {header}
          </div>
        )}

        <div className="flex flex-col gap-1 transition duration-200 group-hover/bento:translate-x-1">
          {icon && (
            <div className="text-zinc-500 dark:text-zinc-400 mb-2 w-fit">
              {icon}
            </div>
          )}
          {title && (
            <div className="font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
              {title}
            </div>
          )}
          {description && (
            <div className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
              {description}
            </div>
          )}
          {children}
        </div>
      </div>
    );
  },
);
BentoGridItem.displayName = "BentoGridItem";

export { BentoGrid, BentoGridItem };
