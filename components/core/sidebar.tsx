"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { SidebarHeader } from "./sidebar-header";
import { Sun, Moon } from "lucide-react";

interface SidebarLink {
  href: string;
  label: string;
}

interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

export function Sidebar() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const sections: SidebarSection[] = [
    {
      title: "Overview",
      links: [
        { href: "/", label: "Introduction" },
      ],
    },
    {
      title: "Components",
      links: [
        { href: "/components/avatar", label: "Avatar" },
        { href: "/components/avatarGroup", label: "Avatar Group" },
        { href: "/components/badge", label: "Badge" },
        { href: "/components/button", label: "Button" },
        { href: "/components/buttonGroup", label: "Button Group" },
        { href: "/components/separator", label: "Separator" },
        { href: "/components/skeleton", label: "Skeleton" },
        { href: "/components/tabs", label: "Tabs" },
      ],
    },
  ];

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 border-r border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-xl px-5 py-6 flex flex-col justify-between transition-all duration-300 z-50">
      <div className="flex flex-col gap-6">
        <SidebarHeader />

        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search documentation..."
            disabled
            className="w-full text-xs px-3 py-2.5 bg-zinc-200/40 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl text-zinc-400 dark:text-zinc-500 cursor-not-allowed select-none focus:outline-none"
          />
          <kbd className="absolute right-2.5 top-2.5 text-[10px] bg-zinc-300/40 dark:bg-zinc-850 text-zinc-500 px-1.5 py-0.5 rounded-md border border-zinc-400/10">
            ⌘K
          </kbd>
        </div>

        <nav className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="space-y-1">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400/80 dark:text-zinc-500/80 px-3 mb-2">
                {section.title}
              </h4>
              {section.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "group flex items-center rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer relative",
                      isActive
                        ? "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/40 dark:text-zinc-450 dark:hover:text-zinc-100 dark:hover:bg-zinc-900/40"
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r-md bg-sky-500 dark:bg-sky-400" />
                    )}
                    <span className="pl-1">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-4">
        {!mounted ? (
          <div className="h-9 w-full bg-zinc-200/40 dark:bg-zinc-900/40 rounded-xl animate-pulse" />
        ) : (
          <div className="flex items-center justify-between w-full p-1 bg-zinc-200/45 dark:bg-zinc-900/45 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl">
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer",
                !isDark
                  ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
              )}
            >
              <Sun className="h-3.5 w-3.5" />
              <span>Light</span>
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer",
                isDark
                  ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
              )}
            >
              <Moon className="h-3.5 w-3.5" />
              <span>Dark</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
