import * as React from "react";

export function useKeyboardClick<T extends HTMLElement>(enabled = true) {
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<T>) => {
      if (!enabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        (e.currentTarget as HTMLElement).click();
      }
    },
    [enabled],
  );

  return enabled
    ? {
        role: "button" as const,
        tabIndex: 0,
        onKeyDown: handleKeyDown,
      }
    : {};
}
