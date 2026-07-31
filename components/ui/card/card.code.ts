export const cardCode = `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { designRadius } from "@/lib/design-system";

type CardColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger";

type CardVariant = "default" | "bordered" | "flat" | "ghost" | "shadow" | "glassmorphism" | "gradient";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  color?: CardColor;
  radius?: keyof typeof designRadius;
  orientation?: "vertical" | "horizontal";
  isHoverable?: boolean;
  isPressable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const cardColorMap: Record<CardColor, Record<CardVariant, string>> = {
  default: {
    default: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs",
    bordered: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800",
    flat: "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 border-transparent",
    ghost: "bg-transparent text-zinc-900 dark:text-zinc-100 border-transparent",
    shadow: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md",
    glassmorphism: "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg",
    gradient: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800",
  },
  primary: {
    default: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-sky-500 shadow-xs",
    bordered: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-sky-500/50 shadow-xs",
    flat: "bg-sky-500/5 dark:bg-sky-500/10 text-zinc-900 dark:text-zinc-100 border border-sky-500/20",
    ghost: "bg-transparent text-zinc-900 dark:text-zinc-100 border-transparent",
    shadow: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-sky-500 shadow-md",
    glassmorphism: "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 border border-sky-500/30 shadow-lg",
    gradient: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-sky-500",
  },
  secondary: {
    default: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-purple-500 shadow-xs",
    bordered: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-purple-500/50 shadow-xs",
    flat: "bg-purple-500/5 dark:bg-purple-500/10 text-zinc-900 dark:text-zinc-100 border border-purple-500/20",
    ghost: "bg-transparent text-zinc-900 dark:text-zinc-100 border-transparent",
    shadow: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-purple-500 shadow-md",
    glassmorphism: "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 border border-purple-500/30 shadow-lg",
    gradient: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-purple-500",
  },
  accent: {
    default: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-pink-500 shadow-xs",
    bordered: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-pink-500/50 shadow-xs",
    flat: "bg-pink-500/5 dark:bg-pink-500/10 text-zinc-900 dark:text-zinc-100 border border-pink-500/20",
    ghost: "bg-transparent text-zinc-900 dark:text-zinc-100 border-transparent",
    shadow: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-pink-500 shadow-md",
    glassmorphism: "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 border border-pink-500/30 shadow-lg",
    gradient: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-pink-500",
  },
  success: {
    default: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-emerald-500 shadow-xs",
    bordered: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-emerald-500/50 shadow-xs",
    flat: "bg-emerald-500/5 dark:bg-emerald-500/10 text-zinc-900 dark:text-zinc-100 border border-emerald-500/20",
    ghost: "bg-transparent text-zinc-900 dark:text-zinc-100 border-transparent",
    shadow: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-emerald-500 shadow-md",
    glassmorphism: "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 border border-emerald-500/30 shadow-lg",
    gradient: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-emerald-500",
  },
  warning: {
    default: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-amber-500 shadow-xs",
    bordered: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-amber-500/50 shadow-xs",
    flat: "bg-amber-500/5 dark:bg-amber-500/10 text-zinc-900 dark:text-zinc-100 border border-amber-500/20",
    ghost: "bg-transparent text-zinc-900 dark:text-zinc-100 border-transparent",
    shadow: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-amber-500 shadow-md",
    glassmorphism: "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 border border-amber-500/30 shadow-lg",
    gradient: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-amber-500",
  },
  danger: {
    default: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-rose-500 shadow-xs",
    bordered: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-rose-500/50 shadow-xs",
    flat: "bg-rose-500/5 dark:bg-rose-500/10 text-zinc-900 dark:text-zinc-100 border border-rose-500/20",
    ghost: "bg-transparent text-zinc-900 dark:text-zinc-100 border-transparent",
    shadow: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-rose-500 shadow-md",
    glassmorphism: "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 border border-rose-500/30 shadow-lg",
    gradient: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-rose-500",
  },
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      color = "default",
      radius = "xl",
      orientation = "vertical",
      isHoverable = false,
      isPressable = false,
      isDisabled = false,
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        tabIndex={isPressable && !isDisabled && !isLoading ? 0 : undefined}
        role={isPressable ? "button" : undefined}
        aria-disabled={isDisabled || isLoading ? true : undefined}
        aria-busy={isLoading || undefined}
        className={cn(
          "relative overflow-hidden transition-all duration-200",
          orientation === "horizontal" ? "flex flex-col sm:flex-row sm:items-center" : "flex flex-col",
          designRadius[radius],
          cardColorMap[color][variant],
          isHoverable && !isDisabled && !isLoading && "hover:-translate-y-0.5 hover:shadow-lg",
          isPressable && !isDisabled && !isLoading && "cursor-pointer hover:scale-[1.01] active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isDisabled && "opacity-50 pointer-events-none cursor-not-allowed",
          isLoading && "opacity-75 cursor-wait pointer-events-none",
          className
        )}
        {...props}
      >
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-[1px]">
            <div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        )}
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight text-lg text-zinc-900 dark:text-zinc-100", className)}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0 text-sm text-zinc-700 dark:text-zinc-300", className)} {...props} />
  )
);
CardBody.displayName = "CardBody";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  isBlurred?: boolean;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, isBlurred = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center p-6 pt-0",
        isBlurred && "backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 absolute bottom-0 left-0 right-0 z-10 rounded-b-xl border-t border-zinc-200/50 dark:border-zinc-800/50",
        className
      )}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardBody,
};
`;
