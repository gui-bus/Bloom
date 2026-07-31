"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "lead"
  | "large"
  | "small"
  | "muted"
  | "code";

type TypographyColor =
  | "default"
  | "muted"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  clampLines?: number;
  showExpandToggle?: boolean;
  as?: React.ElementType;
  children?: React.ReactNode;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-zinc-900 dark:text-zinc-100",
  h2: "scroll-m-20 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100",
  h3: "scroll-m-20 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100",
  h4: "scroll-m-20 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100",
  h5: "scroll-m-20 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100",
  h6: "scroll-m-20 text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100",
  p: "leading-7 text-zinc-700 dark:text-zinc-300 font-normal",
  lead: "text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed",
  large: "text-lg font-bold text-zinc-900 dark:text-zinc-100",
  small: "text-xs font-semibold leading-none text-zinc-500 dark:text-zinc-400",
  muted: "text-xs text-zinc-500 dark:text-zinc-400 leading-normal",
  code: "relative rounded-lg bg-zinc-100 dark:bg-zinc-800 px-2 py-1 font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700",
};

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
  code: "code",
};

const colorStyles: Record<TypographyColor, string> = {
  default: "text-zinc-900 dark:text-zinc-100",
  muted: "text-zinc-500 dark:text-zinc-400",
  primary: "text-sky-500",
  secondary: "text-purple-500",
  accent: "text-pink-500",
  success: "text-emerald-500",
  warning: "text-amber-500",
  danger: "text-rose-500",
};

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "p",
      color = "default",
      clampLines,
      showExpandToggle = false,
      as,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || defaultElementMap[variant] || "p";
    const [isExpanded, setIsExpanded] = React.useState(false);

    const shouldClamp = clampLines && !isExpanded;

    return (
      <div className="inline-block w-full">
        <Component
          ref={ref as any}
          style={shouldClamp ? { display: "-webkit-box", WebkitLineClamp: clampLines, WebkitBoxOrient: "vertical", overflow: "hidden" } : undefined}
          className={cn(
            variantStyles[variant],
            color !== "default" && colorStyles[color],
            className
          )}
          {...props}
        >
          {children}
        </Component>

        {clampLines && showExpandToggle && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 text-xs font-bold text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors underline cursor-pointer"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
    );
  }
);
Typography.displayName = "Typography";

export { Typography };
