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
 * A visual feedback component that displays a ripple animation on a click/tap event.
 * Typically used inside button components to provide a subtle interaction effect.
 *
 * The ripple expands from the click point and fades out automatically.
 * It is fully React-safe and doesn't manipulate the DOM directly outside React.
 *
 * Props:
 * @param {number} x - The horizontal position of the ripple's center relative to the parent container.
 * @param {number} y - The vertical position of the ripple's center relative to the parent container.
 * @param {number} size - The diameter of the ripple in pixels. Usually based on the larger dimension of the button.
 * @param {() => void} onComplete - Callback executed when the ripple animation finishes. Can be used to remove the ripple from state.
 *
 * Usage example:
 * ```tsx
 * <div className="relative overflow-hidden">
 *   {ripples.map((r) => (
 *     <Ripple key={r.id} x={r.x} y={r.y} size={r.size} onComplete={() => removeRipple(r.id)} />
 *   ))}
 * </div>
 * ```
 *
 * Notes:
 * - This component is usually used in combination with a `useRipples` hook to manage multiple ripple instances.
 * - Fully compatible with SSR as it does not use `document` directly for creation or removal.
 */
export const Ripple = ({ x, y, size, onComplete }: RippleProps) => {
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
};
