"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SidebarHeader } from "./sidebar-header";
import { LayoutDashboard, Radio, Layers, Keyboard } from "lucide-react";

interface SidebarLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

export function Sidebar() {
  const pathname = usePathname();

  const sections: SidebarSection[] = [
    {
      title: "Overview",
      links: [
        { href: "/", label: "Introduction", icon: LayoutDashboard },
      ],
    },
    {
      title: "Components",
      links: [
        { href: "/components/button", label: "Button", icon: Radio },
        { href: "/components/buttonGroup", label: "Button Group", icon: Keyboard },
        { href: "/components/tabs", label: "Tabs", icon: Layers },
      ],
    },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 border-r border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/70 dark:bg-zinc-950/70 backdrop-blur-xl px-5 py-6 flex flex-col justify-between transition-all duration-300 z-50">
      <div className="flex flex-col gap-6">
        {/* Header containing Logo & Theme Toggle */}
        <SidebarHeader />

        {/* Search placeholder to feel premium */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search documentation..."
            disabled
            className="w-full text-xs px-3 py-2 bg-zinc-200/50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/60 rounded-lg text-zinc-400 dark:text-zinc-500 cursor-not-allowed select-none focus:outline-none"
          />
          <kbd className="absolute right-2 top-2 text-[10px] bg-zinc-300/50 dark:bg-zinc-800/50 text-zinc-500 px-1.5 py-0.2 rounded border border-zinc-400/20">
            ⌘K
          </kbd>
        </div>

        {/* Navigation list */}
        <nav className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400/80 dark:text-zinc-500/80 px-2">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.links.map((link) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer relative",
                        isActive
                          ? "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400"
                          : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900/50"
                      )}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-md bg-sky-500 dark:bg-sky-400" />
                      )}

                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110",
                          isActive
                            ? "text-sky-600 dark:text-sky-400"
                            : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300"
                        )}
                      />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Info */}
      <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-4 px-2">
        <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
          <span>Version</span>
          <span className="font-mono bg-zinc-200/60 dark:bg-zinc-800/60 px-2 py-0.5 rounded text-[10px] font-semibold text-zinc-600 dark:text-zinc-400">
            v0.1.0
          </span>
        </div>
      </div>
    </aside>
  );
}
