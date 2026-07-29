export const stepperCode = `"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  activeStep?: number;
  onStepClick?: (step: number) => void;
  variant?: "default" | "circle" | "line";
}

const StepperContext = React.createContext<{
  activeStep: number;
  orientation: "horizontal" | "vertical";
  onStepClick?: (step: number) => void;
  variant?: "default" | "circle" | "line";
}>({
  activeStep: 0,
  orientation: "horizontal",
  variant: "default",
});

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      orientation = "horizontal",
      activeStep = 0,
      onStepClick,
      variant = "default",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StepperContext.Provider value={{ activeStep, orientation, onStepClick, variant }}>
        <div
          ref={ref}
          className={cn(
            "flex w-full",
            orientation === "horizontal"
              ? "flex-row items-center justify-between"
              : "flex-col space-y-4",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </StepperContext.Provider>
    );
  }
);
Stepper.displayName = "Stepper";

export interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
  isCompleted?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
}

const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  (
    { className, step, isCompleted, isDisabled, isError, children, onClick, ...props },
    ref
  ) => {
    const { activeStep, orientation, onStepClick } = React.useContext(StepperContext);
    const isActive = activeStep === step;
    const completed = isCompleted ?? activeStep > step;
    const isClickable = Boolean(onStepClick) && !isDisabled;

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) onClick(e);
      if (isClickable && onStepClick) {
        onStepClick(step);
      }
    };

    return (
      <div
        ref={ref}
        data-state={isError ? "error" : completed ? "completed" : isActive ? "active" : "inactive"}
        onClick={handleClick}
        className={cn(
          "flex items-center gap-3 relative transition-colors",
          orientation === "horizontal" ? "flex-1 last:flex-none" : "w-full",
          isClickable && "cursor-pointer group",
          isDisabled && "opacity-50 pointer-events-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
StepperItem.displayName = "StepperItem";

export interface StepperIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
  icon?: string;
  isError?: boolean;
}

const StepperIndicator = React.forwardRef<HTMLDivElement, StepperIndicatorProps>(
  ({ className, step, icon, isError, children, ...props }, ref) => {
    const { activeStep } = React.useContext(StepperContext);
    const isActive = activeStep === step;
    const isCompleted = activeStep > step;

    return (
      <div
        ref={ref}
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 select-none",
          isError
            ? "border-danger bg-danger/10 text-danger ring-4 ring-danger/15"
            : isCompleted
            ? "border-primary bg-primary text-primary-foreground shadow-xs"
            : isActive
            ? "border-primary bg-primary/10 text-primary ring-4 ring-primary/15"
            : "border-border bg-muted/50 text-muted-foreground",
          className
        )}
        {...props}
      >
        {isError ? (
          <Icon icon="hugeicons:alert-circle" className="size-4 text-danger" />
        ) : isCompleted ? (
          <Icon icon="hugeicons:tick-02" className="size-4 stroke-[3]" />
        ) : icon ? (
          <Icon icon={icon} className="size-4" />
        ) : (
          children ?? step + 1
        )}
      </div>
    );
  }
);
StepperIndicator.displayName = "StepperIndicator";

const StepperTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "text-xs font-semibold text-foreground tracking-tight leading-tight group-hover:text-primary transition-colors",
      className
    )}
    {...props}
  />
));
StepperTitle.displayName = "StepperTitle";

const StepperDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[11px] text-muted-foreground leading-tight mt-0.5", className)}
    {...props}
  />
));
StepperDescription.displayName = "StepperDescription";

const StepperSeparator = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const { orientation } = React.useContext(StepperContext);

  if (orientation === "vertical") {
    return <div className={cn("ml-4 my-1 w-px h-6 bg-border", className)} />;
  }

  return <div className={cn("flex-1 mx-3 h-px bg-border", className)} />;
};
StepperSeparator.displayName = "StepperSeparator";

export {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
};
`;
