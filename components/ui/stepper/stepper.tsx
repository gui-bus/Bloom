"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export type StepperVariant = "default" | "circle" | "line" | "cards";
export type StepperSize = "sm" | "md" | "lg";
export type StepperColor = "primary" | "secondary" | "success" | "warning" | "danger" | "default";

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  activeStep?: number;
  onStepClick?: (step: number) => void;
  variant?: StepperVariant;
  size?: StepperSize;
  color?: StepperColor;
  isClickable?: boolean;
}

const StepperContext = React.createContext<{
  activeStep: number;
  orientation: "horizontal" | "vertical";
  onStepClick?: (step: number) => void;
  variant: StepperVariant;
  size: StepperSize;
  color: StepperColor;
  isClickable: boolean;
}>({
  activeStep: 0,
  orientation: "horizontal",
  variant: "default",
  size: "md",
  color: "primary",
  isClickable: true,
});

const colorThemeMap: Record<
  StepperColor,
  {
    bgActive: string;
    bgCompleted: string;
    textActive: string;
    ringActive: string;
    borderActive: string;
    borderCompleted: string;
    lineCompleted: string;
    hoverText: string;
  }
> = {
  primary: {
    bgActive: "bg-sky-500/10 dark:bg-sky-500/20",
    bgCompleted: "bg-sky-500 text-white",
    textActive: "text-sky-500 dark:text-sky-400",
    ringActive: "ring-sky-500/20",
    borderActive: "border-sky-500 dark:border-sky-400",
    borderCompleted: "border-sky-500 dark:border-sky-400",
    lineCompleted: "bg-sky-500 dark:bg-sky-400",
    hoverText: "group-hover:text-sky-500",
  },
  secondary: {
    bgActive: "bg-purple-500/10 dark:bg-purple-500/20",
    bgCompleted: "bg-purple-500 text-white",
    textActive: "text-purple-500 dark:text-purple-400",
    ringActive: "ring-purple-500/20",
    borderActive: "border-purple-500 dark:border-purple-400",
    borderCompleted: "border-purple-500 dark:border-purple-400",
    lineCompleted: "bg-purple-500 dark:bg-purple-400",
    hoverText: "group-hover:text-purple-500",
  },
  success: {
    bgActive: "bg-emerald-500/10 dark:bg-emerald-500/20",
    bgCompleted: "bg-emerald-500 text-white",
    textActive: "text-emerald-500 dark:text-emerald-400",
    ringActive: "ring-emerald-500/20",
    borderActive: "border-emerald-500 dark:border-emerald-400",
    borderCompleted: "border-emerald-500 dark:border-emerald-400",
    lineCompleted: "bg-emerald-500 dark:bg-emerald-400",
    hoverText: "group-hover:text-emerald-500",
  },
  warning: {
    bgActive: "bg-amber-500/10 dark:bg-amber-500/20",
    bgCompleted: "bg-amber-500 text-white",
    textActive: "text-amber-500 dark:text-amber-400",
    ringActive: "ring-amber-500/20",
    borderActive: "border-amber-500 dark:border-amber-400",
    borderCompleted: "border-amber-500 dark:border-amber-400",
    lineCompleted: "bg-amber-500 dark:bg-amber-400",
    hoverText: "group-hover:text-amber-500",
  },
  danger: {
    bgActive: "bg-rose-500/10 dark:bg-rose-500/20",
    bgCompleted: "bg-rose-500 text-white",
    textActive: "text-rose-500 dark:text-rose-400",
    ringActive: "ring-rose-500/20",
    borderActive: "border-rose-500 dark:border-rose-400",
    borderCompleted: "border-rose-500 dark:border-rose-400",
    lineCompleted: "bg-rose-500 dark:bg-rose-400",
    hoverText: "group-hover:text-rose-500",
  },
  default: {
    bgActive: "bg-zinc-900/10 dark:bg-zinc-100/10",
    bgCompleted: "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900",
    textActive: "text-zinc-900 dark:text-zinc-100",
    ringActive: "ring-zinc-500/20",
    borderActive: "border-zinc-900 dark:border-zinc-100",
    borderCompleted: "border-zinc-900 dark:border-zinc-100",
    lineCompleted: "bg-zinc-900 dark:bg-zinc-100",
    hoverText: "group-hover:text-zinc-900 dark:group-hover:text-zinc-100",
  },
};

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      orientation = "horizontal",
      activeStep = 0,
      onStepClick,
      variant = "default",
      size = "md",
      color = "primary",
      isClickable = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StepperContext.Provider
        value={{ activeStep, orientation, onStepClick, variant, size, color, isClickable }}
      >
        <div
          ref={ref}
          className={cn(
            "flex w-full",
            orientation === "horizontal"
              ? "flex-row items-center justify-between"
              : "flex-col space-y-4",
            variant === "cards" && "gap-3",
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
    const { activeStep, orientation, onStepClick, variant, color, isClickable: globalClickable } = React.useContext(StepperContext);
    const isActive = activeStep === step;
    const completed = isCompleted ?? activeStep > step;
    const canClick = globalClickable && Boolean(onStepClick) && !isDisabled;
    const theme = colorThemeMap[color];

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) onClick(e);
      if (canClick && onStepClick) {
        onStepClick(step);
      }
    };

    return (
      <div
        ref={ref}
        data-state={isError ? "error" : completed ? "completed" : isActive ? "active" : "inactive"}
        onClick={handleClick}
        className={cn(
          "flex items-center gap-3 relative transition-all duration-200",
          orientation === "horizontal" ? "flex-1 last:flex-none" : "w-full",
          variant === "cards" &&
            "p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs flex-1",
          variant === "cards" && isActive && cn("ring-2", theme.borderActive, theme.ringActive),
          variant === "cards" && completed && theme.borderCompleted,
          canClick && "cursor-pointer group hover:opacity-90",
          isDisabled && "opacity-40 pointer-events-none select-none",
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

const sizeStyles: Record<StepperSize, { box: string; font: string; icon: string }> = {
  sm: { box: "size-7", font: "text-xs", icon: "size-3.5" },
  md: { box: "size-9", font: "text-sm", icon: "size-4" },
  lg: { box: "size-11", font: "text-base", icon: "size-5" },
};

const StepperIndicator = React.forwardRef<HTMLDivElement, StepperIndicatorProps>(
  ({ className, step, icon, isError, children, ...props }, ref) => {
    const { activeStep, color, size } = React.useContext(StepperContext);
    const isActive = activeStep === step;
    const isCompleted = activeStep > step;
    const theme = colorThemeMap[color];

    return (
      <div
        ref={ref}
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full border font-bold transition-all duration-300 select-none",
          sizeStyles[size].box,
          sizeStyles[size].font,
          isError
            ? "border-rose-500 bg-rose-500/10 text-rose-500 ring-4 ring-rose-500/15"
            : isCompleted
            ? cn("border-transparent shadow-xs", theme.bgCompleted)
            : isActive
            ? cn("ring-4", theme.bgActive, theme.borderActive, theme.textActive, theme.ringActive)
            : "border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-400 dark:text-zinc-500",
          className
        )}
        {...props}
      >
        {isError ? (
          <Icon icon="hugeicons:alert-circle" className={cn(sizeStyles[size].icon, "text-rose-500")} />
        ) : isCompleted ? (
          <Icon icon="hugeicons:tick-02" className={cn(sizeStyles[size].icon, "stroke-[3]")} />
        ) : icon ? (
          <Icon icon={icon} className={sizeStyles[size].icon} />
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
>(({ className, ...props }, ref) => {
  const { color } = React.useContext(StepperContext);
  const theme = colorThemeMap[color];

  return (
    <h4
      ref={ref}
      className={cn(
        "text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight transition-colors",
        theme.hoverText,
        className
      )}
      {...props}
    />
  );
});
StepperTitle.displayName = "StepperTitle";

const StepperDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight mt-0.5", className)}
    {...props}
  />
));
StepperDescription.displayName = "StepperDescription";

export interface StepperSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: number;
}

const StepperSeparator = ({ className, step }: StepperSeparatorProps) => {
  const { orientation, activeStep, color, variant } = React.useContext(StepperContext);

  if (variant === "cards") return null;

  const isCompletedLine = step !== undefined ? activeStep > step : false;
  const theme = colorThemeMap[color];

  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "ml-4 my-1 w-0.5 h-6 transition-colors duration-300",
          isCompletedLine ? theme.lineCompleted : "bg-zinc-200 dark:bg-zinc-800",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex-1 mx-3 h-0.5 transition-colors duration-300 rounded-full",
        isCompletedLine ? theme.lineCompleted : "bg-zinc-200 dark:bg-zinc-800",
        className
      )}
    />
  );
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
