"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

export function SidebarHeader() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme to correctly determine if we are in dark/light even if set to 'system'
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="relative h-10 w-28">
          <Image
            src={isDark ? "/logo/logo_white.svg" : "/logo/logo_black.svg"}
            alt="Bloom Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="p-2 rounded-md hover:bg-muted border border-border text-foreground transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-amber-500" />
          ) : (
            <Moon className="h-4 w-4 text-neutral-800" />
          )}
        </button>
      </div>
    </div>
  );
}
