"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useInfiniteScroll(options: {
  threshold?: number;
  onLoadMore: () => void;
  hasMore?: boolean;
  isLoading?: boolean;
}) {
  const {
    threshold = 200,
    onLoadMore,
    hasMore = true,
    isLoading = false,
  } = options;
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry?.isIntersecting && hasMore && !isLoading && !triggered) {
        setTriggered(true);
        onLoadMore();
      }
    },
    [hasMore, isLoading, triggered, onLoadMore],
  );

  useEffect(() => {
    if (!isLoading) setTriggered(false);
  }, [isLoading]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: `${threshold}px`,
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [handleIntersect, threshold]);

  return { sentinelRef };
}
