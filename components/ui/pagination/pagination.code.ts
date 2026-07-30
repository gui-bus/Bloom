export const paginationCode = `"use client";

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
  href?: string;
}

const colorActiveMap: Record<PaginationColor, string> = {
  default: "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100",
  primary: "bg-sky-500 text-white border-sky-500",
  secondary: "bg-purple-500 text-white border-purple-500",
  accent: "bg-pink-500 text-white border-pink-500",
  success: "bg-emerald-500 text-white border-emerald-500",
  warning: "bg-amber-500 text-white border-amber-500",
  danger: "bg-rose-500 text-white border-rose-500",
};

const shapeMap: Record<PaginationShape, string> = {
  square: "rounded-none",
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
      ? \`\${colorActiveMap[color]} font-semibold shadow-xs\`
      : "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    bordered: isActive
      ? \`border-2 \${colorActiveMap[color]} font-semibold\`
      : "border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    flat: isActive
      ? \`\${colorActiveMap[color]} font-semibold\`
      : "border-transparent bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700",
    light: isActive
      ? \`border-transparent \${colorActiveMap[color]} font-semibold\`
      : "border-transparent bg-transparent text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    pills: isActive
      ? \`\${colorActiveMap[color]} font-semibold rounded-full\`
      : "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full",
  };

  return (
    <button
      type="button"
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 disabled:pointer-events-none disabled:opacity-50",
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
    className={cn("flex size-9 items-center justify-center text-zinc-400 dark:text-zinc-500", className)}
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
`;
