import { cva, type VariantProps } from "class-variance-authority";
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
  as?: React.ElementType;
  children?: React.ReactNode;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  h6: "scroll-m-20 text-base font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-4",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
  code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
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
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
};

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "p",
      color = "default",
      as,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || defaultElementMap[variant] || "p";

    return (
      <Component
        ref={ref as any}
        className={cn(
          variantStyles[variant],
          color !== "default" && colorStyles[color],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Typography.displayName = "Typography";

export { Typography };
