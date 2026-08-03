"use client";

import { useCallback, useState } from "react";

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
    [timeout],
  );

  const reset = useCallback(() => {
    setCopied(false);
    setError(null);
  }, []);

  return { copy, copied, error, reset };
}
