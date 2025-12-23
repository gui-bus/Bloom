export const useRippleCode = `//#region Imports
import * as React from "react";
//#endregion

/**
 * useRipples Hook
 *
 * A React hook to manage ripple animations in interactive components such as buttons.
 * Handles creation, tracking, and automatic removal of ripple elements.
 *
 * Provides a clean state-driven approach to ripples, avoiding direct DOM manipulation.
 *
 * Returns:
 * @returns {{
 *   ripples: Array<{ x: number; y: number; size: number; id: number }>,
 *   addRipple: (x: number, y: number, size: number) => void
 * }}
 *
 * - ripples - An array of ripple objects currently active. Each ripple has a unique id, x and y position, and size.
 * - addRipple - Function to create a new ripple. Accepts the click coordinates and size.
 *
 * Usage example:
 * tsx
 * const { ripples, addRipple } = useRipples();
 *
 * const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
 *   const rect = e.currentTarget.getBoundingClientRect();
 *   const size = Math.max(rect.width, rect.height);
 *   addRipple(e.clientX - rect.left, e.clientY - rect.top, size);
 * };
 * 
 *
 * Notes:
 * - Ripples are automatically removed after 600ms.
 * - Fully compatible with React's SSR since no direct DOM manipulation is performed.
 * - Can be used in any interactive component that requires visual click feedback.
 */
export const useRipples = () => {
  const [ripples, setRipples] = React.useState<
    { x: number; y: number; size: number; id: number }[]
  >([]);

  const addRipple = (x: number, y: number, size: number) => {
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, size, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return { ripples, addRipple };
};
`;
