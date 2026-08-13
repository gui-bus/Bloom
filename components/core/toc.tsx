"use client";

import { usePathname } from "next/navigation";
import * as React from "react";
import { useQueryState } from "@/lib/useQueryState";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
}

export function TableOfContents() {
  const _pathname = usePathname();
  const [items, setItems] = React.useState<TOCItem[]>([]);
  const [sectionParam, setSectionParam] = useQueryState("section", {
    history: "replace",
    shallow: true,
  });

  const [activeId, setActiveId] = React.useState<string>(sectionParam || "");

  React.useEffect(() => {
    setItems([]);
    setActiveId("");

    const timer = setTimeout(() => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]"),
      );
      const tocItems: TOCItem[] = [];

      sections.forEach((section) => {
        const heading = section.querySelector("h3");
        if (heading && section.id) {
          tocItems.push({
            id: section.id,
            title: heading.textContent || section.id,
          });
        }
      });

      setItems(tocItems);

      if (sectionParam) {
        setActiveId(sectionParam);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [_pathname]);

  React.useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(id);
            setSectionParam(id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.1,
      },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items, setSectionParam]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      setSectionParam(id);
    }
  };

  return (
    <aside className="hidden lg:block w-64 shrink-0 px-4 py-8 sticky top-8 h-[calc(100vh-4rem)] overflow-y-auto select-none">
      {items.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            On this page
          </p>

          <nav className="space-y-1 text-xs border-l border-zinc-200 dark:border-zinc-800 pl-3">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    "block w-full text-left py-1 transition-all duration-200 truncate cursor-pointer",
                    isActive
                      ? "text-sky-600 dark:text-sky-400 font-semibold -ml-3.5 pl-3 border-l-2 border-sky-500"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200",
                  )}
                >
                  {item.title}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </aside>
  );
}
