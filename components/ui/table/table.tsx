"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  density?: "default" | "compact";
  stickyHeader?: boolean;
  stickyFirstColumn?: boolean;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      striped = false,
      density = "default",
      stickyHeader = false,
      stickyFirstColumn = false,
      ...props
    },
    ref,
  ) => (
    <div
      className={cn(
        "relative w-full overflow-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs",
        stickyHeader && "max-h-80",
      )}
    >
      <table
        ref={ref}
        className={cn(
          "w-full caption-bottom text-sm border-collapse",
          striped &&
            "[&_tbody_tr:nth-child(even)]:bg-zinc-50/70 dark:[&_tbody_tr:nth-child(even)]:bg-zinc-800/30",
          density === "compact" &&
            "[&_td]:py-2 [&_td]:px-3 [&_th]:py-2 [&_th]:px-3 [&_th]:h-8",
          stickyFirstColumn &&
            "[&_th:first-child]:sticky [&_th:first-child]:left-0 [&_th:first-child]:z-20 [&_th:first-child]:bg-zinc-100 dark:[&_th:first-child]:bg-zinc-800 [&_td:first-child]:sticky [&_td:first-child]:left-0 [&_td:first-child]:z-10 [&_td:first-child]:bg-white dark:[&_td:first-child]:bg-zinc-900 [&_td:first-child]:shadow-r",
          className,
        )}
        {...props}
      />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { isSticky?: boolean }
>(({ className, isSticky = false, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "[&_tr]:border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40",
      isSticky &&
        "sticky top-0 z-20 shadow-xs backdrop-blur-md bg-zinc-100/90 dark:bg-zinc-800/90",
      className,
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 font-semibold text-zinc-900 dark:text-zinc-100 [&>tr]:last-child:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50 data-[state=selected]:bg-sky-500/10 dark:data-[state=selected]:bg-sky-500/20",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { isStickyColumn?: boolean }
>(({ className, isStickyColumn = false, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-11 px-4 text-left align-middle font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 [&:has([role=checkbox])]:pr-0",
      isStickyColumn &&
        "sticky left-0 z-30 bg-zinc-100 dark:bg-zinc-800 shadow-r",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & { isStickyColumn?: boolean }
>(({ className, isStickyColumn = false, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle text-xs font-semibold text-zinc-800 dark:text-zinc-200 [&:has([role=checkbox])]:pr-0",
      isStickyColumn && "sticky left-0 z-10 bg-white dark:bg-zinc-900 shadow-r",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "my-3 text-xs text-zinc-400 dark:text-zinc-500 font-medium",
      className,
    )}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
