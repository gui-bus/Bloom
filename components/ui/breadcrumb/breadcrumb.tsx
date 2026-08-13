"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { cn } from "@/lib/utils";

export type BreadcrumbVariant =
  | "default"
  | "bordered"
  | "flat"
  | "ghost"
  | "shadow";

const BreadcrumbContext = React.createContext<{
  variant: BreadcrumbVariant;
  separator: React.ReactNode;
}>({ variant: "default", separator: null });

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    maxItems?: number;
    itemsBeforeCollapse?: number;
    itemsAfterCollapse?: number;
    variant?: BreadcrumbVariant;
    separator?: React.ReactNode;
  }
>(
  (
    {
      children,
      maxItems,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 1,
      variant = "default",
      separator,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <BreadcrumbContext.Provider value={{ variant, separator }}>
        <nav ref={ref} aria-label="breadcrumb" className={className} {...props}>
          {children}
        </nav>
      </BreadcrumbContext.Provider>
    );
  },
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol"> & {
    maxItems?: number;
    itemsBeforeCollapse?: number;
    itemsAfterCollapse?: number;
  }
>(
  (
    {
      className,
      children,
      maxItems,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 1,
      ...props
    },
    ref,
  ) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const items = React.Children.toArray(children);
    const totalItems = items.length;

    let renderedItems = items;

    if (maxItems && totalItems > maxItems && !isExpanded) {
      const startItems = items.slice(0, itemsBeforeCollapse * 2);
      const endItems = items.slice(totalItems - (itemsAfterCollapse * 2 - 1));
      const hiddenItems = items.slice(
        itemsBeforeCollapse * 2,
        totalItems - (itemsAfterCollapse * 2 - 1),
      );

      renderedItems = [
        ...startItems,
        <BreadcrumbItem key="ellipsis-collapsed">
          <BreadcrumbEllipsisDropdown
            items={hiddenItems}
            onExpand={() => setIsExpanded(true)}
          />
        </BreadcrumbItem>,
        <BreadcrumbSeparator key="ellipsis-separator" />,
        ...endItems,
      ];
    }

    return (
      <ol
        ref={ref}
        className={cn(
          "flex flex-wrap items-center gap-1.5 break-words text-sm text-zinc-500 dark:text-zinc-400 sm:gap-2",
          className,
        )}
        {...props}
      >
        {renderedItems}
      </ol>
    );
  },
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbEllipsisDropdown = ({
  items,
  onExpand,
}: {
  items: React.ReactNode[];
  onExpand?: () => void;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const cleanItems = items.filter((child) => {
    if (React.isValidElement(child)) {
      return child.type !== BreadcrumbSeparator;
    }
    return true;
  });

  return (
    <div className="relative inline-flex items-center">
      <BreadcrumbEllipsis
        onClick={() => {
          setIsOpen(!isOpen);
          onExpand?.();
        }}
      />
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 z-50 min-w-36 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1.5 shadow-lg animate-in fade-in-0 zoom-in-95">
          <div className="flex flex-col gap-1">
            {cleanItems.map((item, idx) => (
              <div
                key={idx}
                className="px-2 py-1 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
              >
                {React.isValidElement(item) && item.type === BreadcrumbItem
                  ? (item as React.ReactElement<any>).props.children
                  : item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
  const { variant } = React.useContext(BreadcrumbContext);

  const variantStyles: Record<BreadcrumbVariant, string> = {
    default:
      "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium",
    bordered:
      "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium border border-zinc-200 dark:border-zinc-700 rounded-md px-2 py-0.5 hover:bg-zinc-50 dark:hover:bg-zinc-800",
    flat: "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 font-medium bg-zinc-100 dark:bg-zinc-800 rounded-md px-2 py-0.5 hover:bg-zinc-200 dark:hover:bg-zinc-700",
    ghost:
      "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium rounded-md px-2 py-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    shadow:
      "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 font-medium rounded-md px-2 py-0.5 shadow-sm border border-zinc-200/60 dark:border-zinc-700/60 hover:shadow-md bg-white dark:bg-zinc-900",
  };

  return (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors cursor-pointer",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {icon && <Icon icon={icon} className="size-3.5 shrink-0" />}
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
>(({ className, icon, children, ...props }, ref) => {
  const { variant } = React.useContext(BreadcrumbContext);

  const variantStyles: Record<BreadcrumbVariant, string> = {
    default: "font-semibold text-zinc-900 dark:text-zinc-100",
    bordered:
      "font-semibold text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 rounded-md px-2 py-0.5 bg-sky-50 dark:bg-sky-950/40",
    flat: "font-semibold text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/40 rounded-md px-2 py-0.5",
    ghost:
      "font-semibold text-zinc-900 dark:text-zinc-100 rounded-md px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800",
    shadow:
      "font-semibold text-zinc-900 dark:text-zinc-100 rounded-md px-2 py-0.5 shadow-sm border border-zinc-200/60 dark:border-zinc-700/60 bg-white dark:bg-zinc-900",
  };

  return (
    <span
      ref={ref}
      role="link"
      tabIndex={0}
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "inline-flex items-center gap-1.5",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {icon && (
        <Icon
          icon={icon}
          className="size-3.5 shrink-0 text-sky-600 dark:text-sky-400"
        />
      )}
      {children}
    </span>
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => {
  const { separator } = React.useContext(BreadcrumbContext);

  const resolvedSeparator = children ?? separator;

  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn(
        "[&>svg]:size-3.5 text-zinc-400 dark:text-zinc-600 select-none",
        className,
      )}
      {...props}
    >
      {resolvedSeparator ?? (
        <Icon icon="hugeicons:arrow-right-01" className="size-3.5" />
      )}
    </li>
  );
};
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
      "flex size-7 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      className,
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
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
