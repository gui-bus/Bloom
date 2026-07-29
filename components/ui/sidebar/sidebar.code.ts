export const sidebarCode = `"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export interface UiSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultCollapsed?: boolean;
  isCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  collapsible?: boolean;
}

export function UiSidebar({
  className,
  children,
  defaultCollapsed = false,
  isCollapsed: controlledCollapsed,
  onCollapseChange,
  header,
  footer,
  collapsible = true,
  ...props
}: UiSidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed);

  const collapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  const toggleCollapse = () => {
    const next = !collapsed;
    if (controlledCollapsed === undefined) {
      setInternalCollapsed(next);
    }
    onCollapseChange?.(next);
  };

  return (
    <aside
      className={cn(
        "relative flex flex-col justify-between border-r border-border bg-background transition-all duration-300 h-full select-none",
        collapsed ? "w-16 px-2 py-4" : "w-64 px-4 py-6",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4 overflow-hidden flex-1">
        {header && <div className="px-1 flex items-center justify-between">{header}</div>}

        <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-1">
          {children}
        </div>
      </div>

      {footer && <div className="border-t border-border pt-3 mt-3">{footer}</div>}

      {collapsible && (
        <button
          type="button"
          onClick={toggleCollapse}
          className="absolute -right-3 top-6 flex size-6 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-xs hover:bg-accent transition-transform cursor-pointer"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="size-3.5" /> : <ChevronLeft className="size-3.5" />}
        </button>
      )}
    </aside>
  );
}`;
