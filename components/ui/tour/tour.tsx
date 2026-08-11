"use client";

import * as React from "react";
import { Button } from "@/components/ui/button/button";
import { Confetti } from "@/components/ui/confetti/confetti";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface TourStep {
  target: string;
  title: string;
  content: string;
  placement?: "top" | "bottom" | "left" | "right";
}

export interface TourProps {
  steps: TourStep[];
  run: boolean;
  onClose?: () => void;
  radius?: keyof typeof designRadius;
  showConfetti?: boolean;
}

export const Tour: React.FC<TourProps> = ({
  steps,
  run,
  onClose,
  radius = "md",
  showConfetti = false,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const [coords, setCoords] = React.useState<DOMRect | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [fireConfetti, setFireConfetti] = React.useState(0);

  const activeStep = steps[currentStepIndex];

  const updateCoords = React.useCallback(() => {
    if (!run || !activeStep) return;
    const element = document.querySelector(activeStep.target);
    if (element) {
      setCoords(element.getBoundingClientRect());
    } else {
      setCoords(null);
    }
  }, [run, activeStep]);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    if (!run || !activeStep) return;
    const element = document.querySelector(activeStep.target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      const timer = setTimeout(() => {
        setCoords(element.getBoundingClientRect());
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [run, currentStepIndex, activeStep]);

  React.useEffect(() => {
    updateCoords();
    window.addEventListener("resize", updateCoords);
    window.addEventListener("scroll", updateCoords);
    return () => {
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords);
    };
  }, [updateCoords]);

  if (!run || !activeStep) return null;

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      if (showConfetti) {
        setFireConfetti((prev) => prev + 1);
        setTimeout(() => {
          onClose?.();
          setCurrentStepIndex(0);
          setFireConfetti(0);
        }, 600);
      } else {
        onClose?.();
        setCurrentStepIndex(0);
      }
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    onClose?.();
    setCurrentStepIndex(0);
  };

  const getPopoverStyle = (): React.CSSProperties => {
    if (isMobile) {
      return {
        position: "fixed",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: "360px",
      };
    }

    if (!coords) {
      return {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
    }

    const margin = 12;
    const placement = activeStep.placement || "bottom";

    switch (placement) {
      case "top":
        return {
          position: "fixed",
          top: `${coords.top - margin}px`,
          left: `${coords.left + coords.width / 2}px`,
          transform: "translate(-50%, -100%)",
        };
      case "left":
        return {
          position: "fixed",
          top: `${coords.top + coords.height / 2}px`,
          left: `${coords.left - margin}px`,
          transform: "translate(-100%, -50%)",
        };
      case "right":
        return {
          position: "fixed",
          top: `${coords.top + coords.height / 2}px`,
          left: `${coords.right + margin}px`,
          transform: "translate(0, -50%)",
        };
      default:
        return {
          position: "fixed",
          top: `${coords.bottom + margin}px`,
          left: `${coords.left + coords.width / 2}px`,
          transform: "translate(-50%, 0)",
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none">
      {fireConfetti > 0 && <Confetti fire={fireConfetti} variant="cannon" />}
      <div className="absolute inset-0 bg-transparent pointer-events-auto" />

      {coords && (
        <div
          style={{
            position: "fixed",
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            width: `${coords.width}px`,
            height: `${coords.height}px`,
          }}
          className={cn(
            "ring-[9999px] ring-black/60 dark:ring-black/80 shadow-[0_0_15px_rgba(255,255,255,0.4)] pointer-events-none transition-all duration-300",
            designRadius[radius],
          )}
        />
      )}

      <div
        style={getPopoverStyle()}
        className={cn(
          "w-80 p-4 pointer-events-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl transition-all duration-300 z-50",
          designRadius[radius],
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
            {activeStep.title}
          </h3>
          <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
            {currentStepIndex + 1} / {steps.length}
          </span>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
          {activeStep.content}
        </p>

        <div className="flex items-center justify-between">
          <Button
            size="sm"
            variant="light"
            onClick={handleSkip}
            className="text-xs text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300"
          >
            Skip
          </Button>

          <div className="flex items-center gap-1.5">
            {currentStepIndex > 0 && (
              <Button
                size="sm"
                variant="bordered"
                onClick={handleBack}
                className="h-7 text-xs px-2.5"
              >
                Back
              </Button>
            )}
            <Button
              size="sm"
              variant="default"
              color="primary"
              onClick={handleNext}
              className="h-7 text-xs px-3"
            >
              {currentStepIndex === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Tour.displayName = "Tour";
