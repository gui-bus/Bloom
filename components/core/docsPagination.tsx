"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  blocksNavigationList,
  componentsNavigationList,
  docNavigationList,
  overviewNavigationList,
} from "@/lib/navigation";

export interface DocsPaginationProps {
  category?: "components" | "blocks" | "overview";
}

export function DocsPagination({ category }: DocsPaginationProps) {
  const pathname = usePathname();

  const targetList = React.useMemo(() => {
    if (category === "blocks") return blocksNavigationList;
    if (category === "components") return componentsNavigationList;
    if (category === "overview") return overviewNavigationList;

    if (blocksNavigationList.some((item) => item.href === pathname)) {
      return blocksNavigationList;
    }
    if (componentsNavigationList.some((item) => item.href === pathname)) {
      return componentsNavigationList;
    }
    return docNavigationList;
  }, [category, pathname]);

  const currentIndex = targetList.findIndex((item) => item.href === pathname);

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? targetList[currentIndex - 1] : null;
  const next =
    currentIndex < targetList.length - 1 ? targetList[currentIndex + 1] : null;

  return (
    <div className="pt-8 mt-12 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4 w-full">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col items-start gap-1 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all duration-200 shadow-xs max-w-[48%] w-full"
        >
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
            <Icon
              icon="hugeicons:arrow-left-01"
              className="size-3.5 group-hover:-translate-x-1 transition-transform"
            />
            Previous
          </span>
          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 transition-colors">
            {prev.label}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end text-right gap-1 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all duration-200 shadow-xs max-w-[48%] w-full ml-auto"
        >
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
            Next
            <Icon
              icon="hugeicons:arrow-right-01"
              className="size-3.5 group-hover:translate-x-1 transition-transform"
            />
          </span>
          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 transition-colors">
            {next.label}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
