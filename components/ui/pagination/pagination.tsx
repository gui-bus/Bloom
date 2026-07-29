"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type PaginationVariant = "default" | "bordered" | "flat" | "light" | "pills";
type PaginationShape = "square" | "rounded" | "circle";
type PaginationColor = "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";

const PaginationContext = React.createContext<{
  variant: PaginationVariant;
  shape: PaginationShape;
  color: PaginationColor;
  size: "sm" | "md" | "lg";
}>({
  variant: "default",
  shape: "rounded",
  color: "primary",
  size: "md",
});

export interface PaginationProps extends React.ComponentProps<"nav"> {
  variant?: PaginationVariant;
  shape?: PaginationShape;
  color?: PaginationColor;
  size?: "sm" | "md" | "lg";
}

const Pagination = ({
  className,
  variant = "default",
  shape = "rounded",
  color = "primary",
  size = "md",
  ...props
}: PaginationProps) => (
  <PaginationContext.Provider value={{ variant, shape, color, size }}>
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  </PaginationContext.Provider>
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-wrap items-center gap-1.5", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

export interface PaginationLinkProps extends React.ComponentProps<"button"> {
  isActive?: boolean;
}

const colorActiveMap: Record<PaginationColor, string> = {
  default: "border-default bg-default text-default-foreground",
  primary: "border-primary bg-primary text-primary-foreground",
  secondary: "border-secondary bg-secondary text-secondary-foreground",
  accent: "border-accent bg-accent text-accent-foreground",
  success: "border-success bg-success text-success-foreground",
  warning: "border-warning bg-warning text-warning-foreground",
  danger: "border-danger bg-danger text-danger-foreground",
};

const shapeMap: Record<PaginationShape, string> = {
  square: "rounded-md",
  rounded: "rounded-xl",
  circle: "rounded-full",
};

const sizeMap = {
  sm: "h-8 min-w-8 text-xs px-2.5",
  md: "h-9 min-w-9 text-sm px-3",
  lg: "h-10 min-w-10 text-base px-3.5",
};

const PaginationLink = ({
  className,
  isActive,
  onClick,
  children,
  ...props
}: PaginationLinkProps) => {
  const { variant, shape, color, size } = React.useContext(PaginationContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  const variantClasses = {
    default: isActive
      ? `${colorActiveMap[color]} font-semibold shadow-xs`
      : "border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
    bordered: isActive
      ? `border-2 ${colorActiveMap[color]} font-semibold`
      : "border border-border bg-transparent text-foreground hover:bg-muted",
    flat: isActive
      ? `${colorActiveMap[color]} font-semibold`
      : "border-transparent bg-muted/50 text-foreground hover:bg-muted",
    light: isActive
      ? `border-transparent ${colorActiveMap[color]} font-semibold`
      : "border-transparent bg-transparent text-foreground hover:text-foreground/80",
    pills: isActive
      ? `${colorActiveMap[color]} font-semibold rounded-full`
      : "border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground rounded-full",
  };

  return (
    <button
      type="button"
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        sizeMap[size],
        variant !== "pills" && shapeMap[shape],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
PaginationLink.displayName = "PaginationLink";

const PaginationFirst = ({
  className,
  label,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { label?: string }) => (
  <PaginationLink
    aria-label="Go to first page"
    className={cn("gap-1 px-2.5", className)}
    {...props}
  >
    <Icon icon="hugeicons:arrow-left-double" className="size-4" />
    {label && <span>{label}</span>}
  </PaginationLink>
);
PaginationFirst.displayName = "PaginationFirst";

const PaginationLast = ({
  className,
  label,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { label?: string }) => (
  <PaginationLink
    aria-label="Go to last page"
    className={cn("gap-1 px-2.5", className)}
    {...props}
  >
    {label && <span>{label}</span>}
    <Icon icon="hugeicons:arrow-right-double" className="size-4" />
  </PaginationLink>
);
PaginationLast.displayName = "PaginationLast";

const PaginationPrevious = ({
  className,
  label = "Previous",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { label?: string }) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("gap-1.5 pl-2.5", className)}
    {...props}
  >
    <Icon icon="hugeicons:arrow-left-01" className="size-4" />
    {label && <span>{label}</span>}
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  label = "Next",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { label?: string }) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("gap-1.5 pr-2.5", className)}
    {...props}
  >
    {label && <span>{label}</span>}
    <Icon icon="hugeicons:arrow-right-01" className="size-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex size-9 items-center justify-center text-muted-foreground", className)}
    {...props}
  >
    <Icon icon="hugeicons:more-horizontal" className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
};
