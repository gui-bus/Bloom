"use client";

//#region Imports
import * as React from "react";
import { cn } from "@/lib/utils";
//#endregion

//#region Interfaces
interface RippleProps {
  x: number;
  y: number;
  size: number;
  onComplete: () => void;
}
//#endregion

/**
 * Ripple Component
 *
 * A memoized visual feedback component that displays a ripple animation on a click/tap event.
 */
export const Ripple = React.memo(({ x, y, size, onComplete }: RippleProps) => {
  //#region useEffects
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 600);
    return () => clearTimeout(timer);
  }, [onComplete]);
  //#endregion

  return (
    <span
      className={cn("ripple absolute rounded-full bg-white/30 animate-ripple")}
      style={{
        width: size,
        height: size,
        left: x - size / 2,
        top: y - size / 2,
      }}
    />
  );
});

Ripple.displayName = "Ripple";
