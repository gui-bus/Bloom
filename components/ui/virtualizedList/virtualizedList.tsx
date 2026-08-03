"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface VirtualizedListRef {
  scrollToIndex: (index: number) => void;
}

export interface VirtualizedListProps<T = any> {
  items: T[];
  itemHeight?: number;
  getItemHeight?: (item: T, index: number) => number;
  height: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
  onEndReached?: () => void;
  endReachedThreshold?: number;
  className?: string;
}

const VirtualizedListRender = <T,>(
  {
    items,
    itemHeight = 40,
    getItemHeight,
    height,
    renderItem,
    overscan = 5,
    onEndReached,
    endReachedThreshold = 100,
    className,
  }: VirtualizedListProps<T>,
  ref: React.Ref<VirtualizedListRef>,
) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = React.useState(0);
  const isEndReachedFiredRef = React.useRef(false);

  const calculateHeight = (index: number) => {
    if (getItemHeight) {
      return getItemHeight(items[index], index);
    }
    return itemHeight;
  };

  const itemOffsets = React.useMemo(() => {
    const offsets: number[] = [0];
    for (let i = 0; i < items.length; i++) {
      offsets.push(offsets[i] + calculateHeight(i));
    }
    return offsets;
  }, [items, getItemHeight, itemHeight]);

  const totalHeight = itemOffsets[items.length] || 0;

  React.useImperativeHandle(ref, () => ({
    scrollToIndex: (index: number) => {
      if (containerRef.current && index >= 0 && index < items.length) {
        containerRef.current.scrollTop = itemOffsets[index];
      }
    },
  }));

  const handleScroll = React.useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      setScrollTop(scrollTop);

      if (
        onEndReached &&
        scrollHeight - (scrollTop + clientHeight) < endReachedThreshold
      ) {
        if (!isEndReachedFiredRef.current) {
          isEndReachedFiredRef.current = true;
          onEndReached();
        }
      } else {
        isEndReachedFiredRef.current = false;
      }
    }
  }, [onEndReached, endReachedThreshold]);

  let startIndex = 0;
  while (
    startIndex < items.length &&
    itemOffsets[startIndex + 1] <= scrollTop
  ) {
    startIndex++;
  }
  startIndex = Math.max(0, startIndex - overscan);

  let endIndex = startIndex;
  while (
    endIndex < items.length &&
    itemOffsets[endIndex] < scrollTop + height
  ) {
    endIndex++;
  }
  endIndex = Math.min(items.length - 1, endIndex + overscan);

  const visibleItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    if (i >= 0 && i < items.length) {
      visibleItems.push(
        <div
          key={i}
          style={{
            position: "absolute",
            top: itemOffsets[i],
            height: calculateHeight(i),
            left: 0,
            right: 0,
          }}
        >
          {renderItem(items[i], i)}
        </div>,
      );
    }
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className={cn(
        "overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
        className,
      )}
      style={{ height, position: "relative" }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems}
      </div>
    </div>
  );
};

export const VirtualizedList = React.forwardRef(VirtualizedListRender) as <T>(
  props: VirtualizedListProps<T> & { ref?: React.Ref<VirtualizedListRef> },
) => React.ReactElement;
