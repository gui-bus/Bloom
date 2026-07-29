"use client";

import * as React from "react";
import * as ResizablePanelsPrimitive from "react-resizable-panels";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePanelsPrimitive.Group>) => (
  <ResizablePanelsPrimitive.Group
    className={cn(
      "flex size-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePanelsPrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePanelsPrimitive.Separator> & {
  withHandle?: boolean;
}) => (
  <ResizablePanelsPrimitive.Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-border bg-background shadow-xs">
        <Icon icon="hugeicons:drag-drop-vertical" className="size-2.5 text-muted-foreground" />
      </div>
    )}
  </ResizablePanelsPrimitive.Separator>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
