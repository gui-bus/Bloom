"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * useScrollPosition — Track scroll position with direction detection.
 * @param threshold - Minimum scroll distance in px to trigger "scrolled" (default 10)
 */
export function useScrollPosition(threshold = 10) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrollY(currentY);
    setIsScrolled(currentY > threshold);
    setDirection(currentY > lastScrollY.current ? "down" : "up");
    lastScrollY.current = currentY;
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { scrollY, isScrolled, direction };
}
