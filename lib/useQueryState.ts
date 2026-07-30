"use client";

import * as React from "react";

interface UseQueryStateOptions {
  history?: "replace" | "push";
  shallow?: boolean;
}

export function useQueryState(
  key: string,
  options: UseQueryStateOptions = { history: "replace", shallow: true }
) {
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const initial = params.get(key);
      if (initial) {
        setValue(initial);
      }
    }
  }, [key]);

  const setQueryValue = React.useCallback(
    (newValue: string | null) => {
      const val = newValue || "";
      setValue(val);

      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        if (val) {
          url.searchParams.set(key, val);
        } else {
          url.searchParams.delete(key);
        }

        if (options.history === "push") {
          window.history.pushState(null, "", url.toString());
        } else {
          window.history.replaceState(null, "", url.toString());
        }
      }
    },
    [key, options.history]
  );

  return [value, setQueryValue] as const;
}
