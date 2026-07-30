export const virtualizedListCode = `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface VirtualizedListProps<T> {
  items: T[];
  itemHeight: number;
  height: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
  className?: string;
}

export function VirtualizedList<T>({
  items, itemHeight, height, renderItem, overscan = 5, className,
}: VirtualizedListProps<T>) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = React.useState(0);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const visibleCount = Math.ceil(height / itemHeight) + 2 * overscan;
  const endIndex = Math.min(items.length, startIndex + visibleCount);

  const handleScroll = React.useCallback(() => {
    if (containerRef.current) setScrollTop(containerRef.current.scrollTop);
  }, []);

  const visibleItems = [];
  for (let i = startIndex; i < endIndex; i++) {
    visibleItems.push(
      <div key={i} style={{ position: "absolute", top: i * itemHeight, left: 0, right: 0, height: itemHeight }}>
        {renderItem(items[i], i)}
      </div>
    );
  }

  return (
    <div ref={containerRef} onScroll={handleScroll}
      className={cn("overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900", className)}
      style={{ height, position: "relative" }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>{visibleItems}</div>
    </div>
  );
}`;
