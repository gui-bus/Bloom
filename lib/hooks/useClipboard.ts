"use client";

import { useState, useCallback } from "react";

/**
 * useClipboard — Hook for copying text to clipboard with timed confirmation state.
 * @param timeout - Duration in ms for the "copied" state (default 2000ms)
 */
export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setError(null);
        setTimeout(() => setCopied(false), timeout);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to copy"));
        setCopied(false);
      }
    },
    [timeout]
  );

  const reset = useCallback(() => {
    setCopied(false);
    setError(null);
  }, []);

  return { copy, copied, error, reset };
}
