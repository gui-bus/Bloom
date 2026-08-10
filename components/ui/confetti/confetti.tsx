"use client";

import confetti from "canvas-confetti";
import * as React from "react";

export interface ConfettiProps {
  fire?: boolean | number;
  variant?: "cannon" | "fireworks" | "shower" | "school-pride";
  onComplete?: () => void;
  particleCount?: number;
  angle?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  ticks?: number;
  colors?: string[];
  scalar?: number;
  zIndex?: number;
  options?: confetti.Options;
}

export const Confetti: React.FC<ConfettiProps> = ({
  fire = true,
  variant = "cannon",
  onComplete,
  particleCount,
  angle,
  spread,
  startVelocity,
  decay,
  gravity,
  drift,
  ticks,
  colors,
  scalar,
  zIndex,
  options,
}) => {
  const fireAnimation = React.useCallback(() => {
    if (!fire) return;

    const baseOptions = {
      disableForReducedMotion: true,
      ...(particleCount !== undefined && { particleCount }),
      ...(angle !== undefined && { angle }),
      ...(spread !== undefined && { spread }),
      ...(startVelocity !== undefined && { startVelocity }),
      ...(decay !== undefined && { decay }),
      ...(gravity !== undefined && { gravity }),
      ...(drift !== undefined && { drift }),
      ...(ticks !== undefined && { ticks }),
      ...(colors !== undefined && { colors }),
      ...(scalar !== undefined && { scalar }),
      ...(zIndex !== undefined && { zIndex }),
      ...options,
    };

    if (variant === "cannon") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        ...baseOptions,
      });
      onComplete?.();
    } else if (variant === "fireworks") {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 1000,
      };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval: NodeJS.Timeout = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          onComplete?.();
          return;
        }

        const currentParticleCount =
          (particleCount || 50) * (timeLeft / duration);
        confetti({
          ...defaults,
          ...baseOptions,
          particleCount: currentParticleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          ...baseOptions,
          particleCount: currentParticleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
    } else if (variant === "shower") {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          ...baseOptions,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          ...baseOptions,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        } else {
          onComplete?.();
        }
      };
      frame();
    } else if (variant === "school-pride") {
      const duration = 2 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#bb0000", "#ffffff"],
          ...baseOptions,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#bb0000", "#ffffff"],
          ...baseOptions,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        } else {
          onComplete?.();
        }
      };
      frame();
    }
  }, [
    fire,
    variant,
    particleCount,
    angle,
    spread,
    startVelocity,
    decay,
    gravity,
    drift,
    ticks,
    colors,
    scalar,
    zIndex,
    options,
    onComplete,
  ]);

  React.useEffect(() => {
    fireAnimation();
  }, [fireAnimation]);

  return null;
};

Confetti.displayName = "Confetti";
