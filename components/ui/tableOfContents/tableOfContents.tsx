"use client";

import * as React from "react";
import { designRadius } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

export type TableOfContentsVariant =
  | "default"
  | "bordered"
  | "flat"
  | "cards"
  | "pills";

export interface TableOfContentsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items?: TOCItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  title?: string;
  variant?: TableOfContentsVariant;
  radius?: keyof typeof designRadius;
  autoScan?: boolean;
  selector?: string;
  className?: string;
}

const variantStyles: Record<
  TableOfContentsVariant,
  {
    container: string;
    header: string;
    list: string;
    item: (isActive: boolean) => string;
  }
> = {
  default: {
    container: "bg-transparent",
    header:
      "text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-1",
    list: "border-l border-zinc-200 dark:border-zinc-800/80 pl-3.5 space-y-1.5",
    item: (isActive) =>
      cn(
        "block w-full text-left py-1 text-xs transition-all duration-200 truncate cursor-pointer select-none",
        isActive
          ? "text-sky-600 dark:text-sky-400 font-semibold -ml-[17px] pl-3.5 border-l-2 border-sky-500"
          : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium",
      ),
  },
  bordered: {
    container:
      "p-4.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xs",
    header:
      "text-xs font-bold text-zinc-900 dark:text-zinc-100 pb-2.5 border-b border-zinc-200/60 dark:border-zinc-800/80",
    list: "space-y-1 pt-2.5",
    item: (isActive) =>
      cn(
        "block w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none",
        isActive
          ? "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400"
          : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-zinc-200",
      ),
  },
  flat: {
    container:
      "p-4.5 bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/40 dark:border-zinc-800/50",
    header:
      "text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2.5 px-0.5",
    list: "space-y-1.5",
    item: (isActive) =>
      cn(
        "block w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none",
        isActive
          ? "bg-white dark:bg-zinc-800 text-sky-600 dark:text-sky-400 shadow-xs border border-zinc-200/60 dark:border-zinc-700/60"
          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100",
      ),
  },
  cards: {
    container: "space-y-3",
    header:
      "text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-1",
    list: "space-y-2",
    item: (isActive) =>
      cn(
        "block w-full text-left px-3.5 py-2.5 text-xs font-semibold rounded-2xl border transition-all duration-200 cursor-pointer select-none shadow-xs",
        isActive
          ? "border-sky-500/40 bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400 dark:border-sky-500/30"
          : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-200",
      ),
  },
  pills: {
    container: "space-y-3",
    header:
      "text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-1",
    list: "flex flex-wrap gap-2",
    item: (isActive) =>
      cn(
        "inline-block px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer border select-none",
        isActive
          ? "bg-sky-500 text-white border-sky-500 shadow-xs"
          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200",
      ),
  },
};

const TableOfContents = React.forwardRef<HTMLDivElement, TableOfContentsProps>(
  (
    {
      items: userItems,
      activeId: propActiveId,
      onItemClick,
      title = "On this page",
      variant = "default",
      radius = "2xl",
      autoScan = false,
      selector = "section[id]",
      className,
      ...props
    },
    ref,
  ) => {
    const [scannedItems, setScannedItems] = React.useState<TOCItem[]>([]);
    const [internalActiveId, setInternalActiveId] = React.useState<string>("");

    const displayItems = userItems ?? (autoScan ? scannedItems : []);
    const activeId = propActiveId ?? internalActiveId;
    const styleConfig = variantStyles[variant] || variantStyles.default;

    React.useEffect(() => {
      if (!autoScan || userItems) return;

      const timer = setTimeout(() => {
        const sections = Array.from(
          document.querySelectorAll<HTMLElement>(selector),
        );
        const scanned: TOCItem[] = [];

        sections.forEach((section) => {
          const heading = section.querySelector("h2, h3, h4");
          if (heading && section.id) {
            scanned.push({
              id: section.id,
              title: heading.textContent || section.id,
            });
          }
        });

        setScannedItems(scanned);
      }, 150);

      return () => clearTimeout(timer);
    }, [autoScan, userItems, selector]);

    React.useEffect(() => {
      if (!autoScan || displayItems.length === 0 || propActiveId) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInternalActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 },
      );

      displayItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }, [autoScan, displayItems, propActiveId]);

    const handleClick = (id: string) => {
      onItemClick?.(id);
      setInternalActiveId(id);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (displayItems.length === 0) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "w-full transition-all duration-200 select-none",
          designRadius[radius],
          styleConfig.container,
          className,
        )}
        {...props}
      >
        {title && <p className={styleConfig.header}>{title}</p>}
        <nav className={cn(styleConfig.list, title && "mt-2.5")}>
          {displayItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className={styleConfig.item(isActive)}
              >
                {item.title}
              </button>
            );
          })}
        </nav>
      </div>
    );
  },
);

TableOfContents.displayName = "TableOfContents";

export { TableOfContents };
