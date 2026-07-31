"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

import { Icon } from "@iconify/react";

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  orientation?: "vertical" | "horizontal" | "both";
  showScrollButtons?: boolean;
  showProgressBar?: boolean;
}

const ScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors p-0.5 bg-transparent",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 transition-colors" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, orientation = "vertical", showScrollButtons = false, showProgressBar = false, ...props }, ref) => {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [canScrollUp, setCanScrollUp] = React.useState(false);
  const [canScrollDown, setCanScrollDown] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const total = scrollHeight - clientHeight;
    setScrollProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    setCanScrollUp(scrollTop > 20);
    setCanScrollDown(scrollTop + clientHeight < scrollHeight - 20);
  }, []);

  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    handleScroll();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    viewportRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollTo({ top: viewportRef.current.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden group/scrollarea", className)}
      {...props}
    >
      {/* Scroll Progress Bar */}
      {showProgressBar && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-100 dark:bg-zinc-800 z-30">
          <div
            className="h-full bg-sky-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        className="size-full rounded-[inherit] [-webkit-overflow-scrolling:touch]"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>

      {/* Floating Action Scroll Buttons */}
      {showScrollButtons && (
        <div className="absolute bottom-3 right-4 z-30 flex flex-col gap-1.5 opacity-0 group-hover/scrollarea:opacity-100 transition-opacity duration-200">
          {canScrollUp && (
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center justify-center size-8 rounded-full bg-zinc-900/90 dark:bg-zinc-100/90 text-white dark:text-zinc-900 shadow-lg hover:scale-110 active:scale-95 transition-all"
            >
              <Icon icon="hugeicons:arrow-up-01" className="size-4" />
            </button>
          )}
          {canScrollDown && (
            <button
              type="button"
              onClick={scrollToBottom}
              aria-label="Scroll to bottom"
              className="flex items-center justify-center size-8 rounded-full bg-zinc-900/90 dark:bg-zinc-100/90 text-white dark:text-zinc-900 shadow-lg hover:scale-110 active:scale-95 transition-all"
            >
              <Icon icon="hugeicons:arrow-down-01" className="size-4" />
            </button>
          )}
        </div>
      )}

      {(orientation === "vertical" || orientation === "both") && (
        <ScrollBar orientation="vertical" />
      )}
      {(orientation === "horizontal" || orientation === "both") && (
        <ScrollBar orientation="horizontal" />
      )}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea, ScrollBar };
