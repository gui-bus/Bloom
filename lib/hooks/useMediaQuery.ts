"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * useMediaQuery — Reactive media query detection hook.
 * @param query - CSS media query string (e.g., "(min-width: 768px)")
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** Tailwind-compatible breakpoint hooks */
const breakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const;

export type Breakpoint = keyof typeof breakpoints;

/**
 * useBreakpoint — Check if a Tailwind breakpoint is active.
 */
export function useBreakpoint(bp: Breakpoint): boolean {
  return useMediaQuery(breakpoints[bp]);
}

/**
 * useBreakpoints — Get all active Tailwind breakpoints at once.
 */
export function useBreakpoints() {
  const sm = useMediaQuery(breakpoints.sm);
  const md = useMediaQuery(breakpoints.md);
  const lg = useMediaQuery(breakpoints.lg);
  const xl = useMediaQuery(breakpoints.xl);
  const xxl = useMediaQuery(breakpoints["2xl"]);

  return { sm, md, lg, xl, "2xl": xxl };
}
