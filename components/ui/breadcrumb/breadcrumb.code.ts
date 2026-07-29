export const breadcrumbCode = `import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: string;
  }
>(({ className, icon, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors hover:text-foreground cursor-pointer font-medium",
        className
      )}
      {...props}
    >
      {icon && <Icon icon={icon} className="size-4 shrink-0" />}
      {children}
    </a>
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span"> & {
    icon?: string;
  }
>(({ className, icon, children, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("inline-flex items-center gap-1.5 font-semibold text-foreground", className)}
    {...props}
  >
    {icon && <Icon icon={icon} className="size-4 shrink-0 text-primary" />}
    {children}
  </span>
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-muted-foreground/70", className)}
    {...props}
  >
    {children ?? <Icon icon="hugeicons:arrow-right-01" className="size-3.5" />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) => (
  <button
    type="button"
    aria-label="Toggle collapsed breadcrumbs"
    className={cn(
      "flex size-7 items-center justify-center rounded-md border border-border bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
      className
    )}
    {...props}
  >
    <Icon icon="hugeicons:more-horizontal" className="size-4" />
    <span className="sr-only">Toggle menu</span>
  </button>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
`;
