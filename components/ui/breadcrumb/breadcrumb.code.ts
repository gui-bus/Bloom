export const breadcrumbCode = `"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
    maxItems?: number;
    itemsBeforeCollapse?: number;
    itemsAfterCollapse?: number;
    enableJsonLdSchema?: boolean;
  }
>(({ children, separator, maxItems, itemsBeforeCollapse = 1, itemsAfterCollapse = 1, enableJsonLdSchema = false, className, ...props }, ref) => {
  const generateJsonLd = () => {
    if (!enableJsonLdSchema) return null;
    const itemListElement: any[] = [];
    let position = 1;

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === BreadcrumbList) {
        React.Children.forEach(child.props.children, (item) => {
          if (React.isValidElement(item) && item.type === BreadcrumbItem) {
            React.Children.forEach(item.props.children, (link) => {
              if (React.isValidElement(link)) {
                if (link.type === BreadcrumbLink && link.props.href) {
                  itemListElement.push({
                    "@type": "ListItem",
                    position: position++,
                    name: link.props.children,
                    item: link.props.href,
                  });
                } else if (link.type === BreadcrumbPage) {
                  itemListElement.push({
                    "@type": "ListItem",
                    position: position++,
                    name: link.props.children,
                  });
                }
              }
            });
          }
        });
      }
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  };

  return (
    <nav ref={ref} aria-label="breadcrumb" className={className} {...props}>
      {generateJsonLd()}
      {children}
    </nav>
  );
});
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol"> & {
    maxItems?: number;
    itemsBeforeCollapse?: number;
    itemsAfterCollapse?: number;
  }
>(({ className, children, maxItems, itemsBeforeCollapse = 1, itemsAfterCollapse = 1, ...props }, ref) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const items = React.Children.toArray(children);
  const totalItems = items.length;

  let renderedItems = items;

  if (maxItems && totalItems > maxItems && !isExpanded) {
    const startItems = items.slice(0, itemsBeforeCollapse * 2);
    const endItems = items.slice(totalItems - (itemsAfterCollapse * 2 - 1));
    const hiddenItems = items.slice(itemsBeforeCollapse * 2, totalItems - (itemsAfterCollapse * 2 - 1));

    renderedItems = [
      ...startItems,
      <BreadcrumbItem key="ellipsis-collapsed">
        <BreadcrumbEllipsisDropdown items={hiddenItems} onExpand={() => setIsExpanded(true)} />
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
        className
      )}
      {...props}
    >
      {renderedItems}
    </ol>
  );
});
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbEllipsisDropdown = ({
  items,
  onExpand,
}: {
  items: React.ReactNode[];
  onExpand: () => void;
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
      <BreadcrumbEllipsis onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 z-50 min-w-36 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1.5 shadow-lg animate-in fade-in-0 zoom-in-95">
          <div className="flex flex-col gap-1">
            {cleanItems.map((item, idx) => (
              <div key={idx} className="px-2 py-1 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg">
                {React.isValidElement(item) && item.type === BreadcrumbItem
                  ? item.props.children
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
  return (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 cursor-pointer font-medium",
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
    className={cn("inline-flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-100", className)}
    {...props}
  >
    {icon && <Icon icon={icon} className="size-4 shrink-0 text-sky-600 dark:text-sky-400" />}
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
    className={cn("[&>svg]:size-3.5 text-zinc-400 dark:text-zinc-600 select-none", className)}
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
      "flex size-7 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
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
