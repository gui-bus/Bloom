export const cardCode = `import { cva, type VariantProps } from "class-variance-authority";
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

type CardVariant = "default" | "bordered" | "flat" | "ghost" | "shadow";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  color?: CardColor;
  radius?: keyof typeof designRadius;
  isHoverable?: boolean;
  isPressable?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

const cardColorMap: Record<CardColor, Record<CardVariant, string>> = {
  default: {
    default: "bg-card text-card-foreground border border-border/50 shadow-xs",
    bordered: "bg-transparent text-card-foreground border border-border",
    flat: "bg-muted/50 text-card-foreground border-transparent",
    ghost: "bg-transparent text-card-foreground border-transparent",
    shadow: "bg-card text-card-foreground border-transparent shadow-md",
  },
  primary: {
    default: "bg-primary text-primary-foreground border-transparent shadow-xs",
    bordered: "bg-transparent text-primary border border-primary",
    flat: "bg-primary/10 text-primary border-transparent",
    ghost: "bg-transparent text-primary border-transparent",
    shadow: "bg-primary text-primary-foreground border-transparent shadow-md shadow-primary/20",
  },
  secondary: {
    default: "bg-secondary text-secondary-foreground border-transparent shadow-xs",
    bordered: "bg-transparent text-secondary border border-secondary",
    flat: "bg-secondary/10 text-secondary border-transparent",
    ghost: "bg-transparent text-secondary border-transparent",
    shadow: "bg-secondary text-secondary-foreground border-transparent shadow-md shadow-secondary/20",
  },
  accent: {
    default: "bg-accent text-accent-foreground border-transparent shadow-xs",
    bordered: "bg-transparent text-accent border border-accent",
    flat: "bg-accent/10 text-accent border-transparent",
    ghost: "bg-transparent text-accent border-transparent",
    shadow: "bg-accent text-accent-foreground border-transparent shadow-md shadow-accent/20",
  },
  success: {
    default: "bg-success text-success-foreground border-transparent shadow-xs",
    bordered: "bg-transparent text-success border border-success",
    flat: "bg-success/10 text-success border-transparent",
    ghost: "bg-transparent text-success border-transparent",
    shadow: "bg-success text-success-foreground border-transparent shadow-md shadow-success/20",
  },
  warning: {
    default: "bg-warning text-warning-foreground border-transparent shadow-xs",
    bordered: "bg-transparent text-warning border border-warning",
    flat: "bg-warning/10 text-warning border-transparent",
    ghost: "bg-transparent text-warning border-transparent",
    shadow: "bg-warning text-warning-foreground border-transparent shadow-md shadow-warning/20",
  },
  danger: {
    default: "bg-danger text-danger-foreground border-transparent shadow-xs",
    bordered: "bg-transparent text-danger border border-danger",
    flat: "bg-danger/10 text-danger border-transparent",
    ghost: "bg-transparent text-danger border-transparent",
    shadow: "bg-danger text-danger-foreground border-transparent shadow-md shadow-danger/20",
  },
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      color = "default",
      radius = "xl",
      isHoverable = false,
      isPressable = false,
      isDisabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        tabIndex={isPressable && !isDisabled ? 0 : undefined}
        role={isPressable ? "button" : undefined}
        aria-disabled={isDisabled ? true : undefined}
        className={cn(
          "relative overflow-hidden transition-all duration-200",
          designRadius[radius],
          cardColorMap[color][variant],
          isHoverable && !isDisabled && "hover:-translate-y-0.5 hover:shadow-lg",
          isPressable && !isDisabled && "cursor-pointer active:scale-[0.98]",
          isDisabled && "opacity-50 pointer-events-none cursor-not-allowed",
          className
        )}
        {...props}
      >
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
      className={cn("font-semibold leading-none tracking-tight text-lg", className)}
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
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardBody.displayName = "CardBody";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
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
};`;
