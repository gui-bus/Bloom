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
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full" | string;
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full" | string;
  radius?: keyof typeof designRadius;
  imageSrc?: string;
}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[22rem]",
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
      radius = "2xl",
      imageSrc,
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
          "group/bento relative overflow-hidden flex flex-col justify-between p-8",
          "bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80",
          "shadow-2xs hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300",
          designRadius[radius],
          colSpanClass,
          rowSpanClass,
          className,
        )}
        {...props}
      >
        {imageSrc && (
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src={imageSrc}
              alt=""
              className="size-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>
        )}

        {header && !imageSrc && (
          <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden mb-6 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800/20 z-10">
            {header}
          </div>
        )}

        <div className="flex flex-col gap-1 transition duration-200 z-10 mt-auto">
          {icon && (
            <div
              className={cn(
                "mb-3 w-fit",
                imageSrc
                  ? "text-white"
                  : "text-zinc-500 dark:text-zinc-400 group-hover/bento:text-zinc-900 dark:group-hover/bento:text-zinc-100 transition-colors",
              )}
            >
              {icon}
            </div>
          )}
          {title && (
            <div
              className={cn(
                "font-semibold leading-snug text-lg",
                imageSrc ? "text-white" : "text-zinc-900 dark:text-zinc-100",
              )}
            >
              {title}
            </div>
          )}
          {description && (
            <div
              className={cn(
                "text-sm leading-relaxed font-normal mt-1",
                imageSrc ? "text-zinc-300" : "text-zinc-500 dark:text-zinc-400",
              )}
            >
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
