"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export type PaginationVariant =
  | "default"
  | "bordered"
  | "flat"
  | "underlined"
  | "filled"
  | "glassmorphism"
  | "gradient-border"
  | "glow";

export type PaginationColor =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";

const PaginationContext = React.createContext<{
  variant: PaginationVariant;
  radius: keyof typeof designRadius;
  color: PaginationColor;
  size: "sm" | "md" | "lg";
}>({
  variant: "default",
  radius: "xl",
  color: "primary",
  size: "md",
});

export interface PaginationProps extends React.ComponentProps<"nav"> {
  variant?: PaginationVariant;
  radius?: keyof typeof designRadius;
  color?: PaginationColor;
  size?: "sm" | "md" | "lg";
}

const Pagination = ({
  className,
  variant = "default",
  radius = "xl",
  color = "primary",
  size = "md",
  ...props
}: PaginationProps) => (
  <PaginationContext.Provider value={{ variant, radius, color, size }}>
    <nav
      aria-label="pagination"
      className={cn("flex w-full justify-start", className)}
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
  default:
    "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700",
  primary: "bg-sky-500 text-white border-sky-500",
  success: "bg-emerald-500 text-white border-emerald-500",
  warning: "bg-amber-500 text-white border-amber-500",
  danger: "bg-rose-500 text-white border-rose-500",
};

const colorTextMap: Record<PaginationColor, string> = {
  default: "text-zinc-900 dark:text-zinc-100",
  primary: "text-sky-600 dark:text-sky-400",
  success: "text-emerald-600 dark:text-emerald-400",
  warning: "text-amber-600 dark:text-amber-400",
  danger: "text-rose-600 dark:text-rose-400",
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
  const { variant, radius, color, size } = React.useContext(PaginationContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  const variantClasses = {
    default: isActive
      ? `${colorActiveMap[color]} font-semibold shadow-xs`
      : "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    bordered: isActive
      ? `border-2 ${colorActiveMap[color]} bg-transparent ${colorTextMap[color]} font-bold`
      : "border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    flat: isActive
      ? `bg-sky-500/10 dark:bg-sky-400/10 ${colorTextMap[color]} font-bold`
      : "border-transparent bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700",
    underlined: isActive
      ? `border-b-2 ${color === "default" ? "border-zinc-900 dark:border-zinc-100" : `border-${color === "primary" ? "sky" : color}-500`} ${colorTextMap[color]} font-bold rounded-none`
      : "border-b-2 border-transparent bg-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-none",
    filled: isActive
      ? `${colorActiveMap[color]} font-semibold`
      : "border-transparent bg-zinc-150 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-750",
    glassmorphism: isActive
      ? "bg-zinc-950/20 dark:bg-white/10 backdrop-blur-md border border-zinc-200/30 dark:border-white/10 shadow-md font-bold text-zinc-900 dark:text-zinc-100"
      : "bg-zinc-100/30 dark:bg-white/5 backdrop-blur-xs border border-zinc-200/20 dark:border-white/5 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/50 dark:hover:bg-white/10",
    "gradient-border": isActive
      ? `border-2 ${colorActiveMap[color]} font-semibold`
      : "border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    glow: isActive
      ? `${colorActiveMap[color]} shadow-[0_0_15px_rgba(56,189,248,0.5)] font-semibold`
      : "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
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
        variant !== "underlined" && designRadius[radius],
        variantClasses[variant],
        className,
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
    className={cn(
      "flex size-9 items-center justify-center text-zinc-400 dark:text-zinc-500",
      className,
    )}
    {...props}
  >
    <Icon icon="hugeicons:more-horizontal" className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export interface PaginationToolbarProps {
  page: number;
  total: number;
  pageSize: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  showTotal?: boolean;
  showRowsPerPage?: boolean;
  showJumper?: boolean;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  variant?: PaginationVariant;
  radius?: keyof typeof designRadius;
  color?: PaginationColor;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PaginationToolbar({
  page,
  total,
  pageSize,
  pageSizeOptions = [10, 25, 50, 100],
  onPageChange,
  onPageSizeChange,
  showTotal = true,
  showRowsPerPage = true,
  showJumper = true,
  showFirstButton = true,
  showLastButton = true,
  variant = "default",
  radius = "xl",
  color = "primary",
  size = "md",
  className,
}: PaginationToolbarProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const startItem = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const endItem = Math.min(total, page * pageSize);

  const [jumperVal, setJumperVal] = React.useState(page.toString());

  React.useEffect(() => {
    setJumperVal(page.toString());
  }, [page]);

  const handleJumperSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPage = parseInt(jumperVal, 10);
    if (
      !Number.isNaN(targetPage) &&
      targetPage >= 1 &&
      targetPage <= totalPages
    ) {
      onPageChange(targetPage);
    } else {
      setJumperVal(page.toString());
    }
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 w-full select-none text-xs text-zinc-600 dark:text-zinc-400",
        className,
      )}
    >
      {showTotal && (
        <div className="flex items-center gap-1 font-medium">
          Showing{" "}
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            {startItem}-{endItem}
          </span>{" "}
          of{" "}
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            {total}
          </span>{" "}
          items
        </div>
      )}

      <div className="flex items-center gap-3">
        {showRowsPerPage && onPageSizeChange && (
          <div className="flex items-center gap-1.5">
            <span>Rows per page:</span>
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-2 font-medium outline-none cursor-pointer focus:ring-2 focus:ring-sky-500/20"
            >
              {pageSizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}

        <Pagination
          variant={variant}
          radius={radius}
          color={color}
          size={size}
          className="w-auto mx-0"
        >
          <PaginationContent>
            {showFirstButton && (
              <PaginationItem>
                <PaginationFirst
                  disabled={page <= 1}
                  onClick={() => onPageChange(1)}
                />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationPrevious
                disabled={page <= 1}
                onClick={() => onPageChange(page - 1)}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const p = idx + 1;
              if (
                p === 1 ||
                p === totalPages ||
                (p >= page - 1 && p <= page + 1)
              ) {
                return (
                  <PaginationItem key={p}>
                    <PaginationLink
                      isActive={p === page}
                      onClick={() => onPageChange(p)}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
              if (p === page - 2 || p === page + 2) {
                return (
                  <PaginationItem key={p}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }
              return null;
            })}

            <PaginationItem>
              <PaginationNext
                disabled={page >= totalPages}
                onClick={() => onPageChange(page + 1)}
              />
            </PaginationItem>

            {showLastButton && (
              <PaginationItem>
                <PaginationLast
                  disabled={page >= totalPages}
                  onClick={() => onPageChange(totalPages)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>

        {showJumper && (
          <form
            onSubmit={handleJumperSubmit}
            className="flex items-center gap-1.5"
          >
            <span>Go to:</span>
            <input
              type="text"
              value={jumperVal}
              onChange={(e) => setJumperVal(e.target.value)}
              className="h-8 w-12 text-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold outline-none focus:ring-2 focus:ring-sky-500/20"
            />
          </form>
        )}
      </div>
    </div>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
