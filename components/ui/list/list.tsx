"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: "default" | "bordered" | "separated";
}

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "w-full flex flex-col list-none p-0 m-0",
        variant === "bordered" &&
          "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800 shadow-xs",
        variant === "separated" && "gap-2",
        className,
      )}
      {...props}
    />
  ),
);
List.displayName = "List";

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
  isHoverable?: boolean;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      className,
      children,
      startContent,
      endContent,
      isActive = false,
      isDisabled = false,
      isHoverable = false,
      ...props
    },
    ref,
  ) => (
    <li
      ref={ref}
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-xs font-medium transition-colors select-none text-zinc-900 dark:text-zinc-100",
        isHoverable &&
          !isDisabled &&
          "cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/60",
        isActive &&
          "bg-zinc-100 dark:bg-zinc-800 font-semibold text-sky-600 dark:text-sky-400",
        isDisabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className,
      )}
      {...props}
    >
      {startContent && (
        <div className="shrink-0 text-zinc-400 dark:text-zinc-500">
          {startContent}
        </div>
      )}
      <div className="flex-1 truncate">{children}</div>
      {endContent && (
        <div className="shrink-0 text-zinc-400 dark:text-zinc-500">
          {endContent}
        </div>
      )}
    </li>
  ),
);
ListItem.displayName = "ListItem";

export { List, ListItem };
