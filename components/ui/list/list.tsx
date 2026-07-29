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
        variant === "bordered" && "border border-border rounded-2xl overflow-hidden divide-y divide-border",
        variant === "separated" && "gap-2",
        className
      )}
      {...props}
    />
  )
);
List.displayName = "List";

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode;
  isActive?: boolean;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, children, icon, isActive = false, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-xs font-medium transition-colors bg-background text-foreground",
        isActive && "bg-accent/60 text-accent-foreground font-semibold",
        className
      )}
      {...props}
    >
      {icon && <div className="shrink-0 text-muted-foreground">{icon}</div>}
      <div className="flex-1">{children}</div>
    </li>
  )
);
ListItem.displayName = "ListItem";

export { List, ListItem };
