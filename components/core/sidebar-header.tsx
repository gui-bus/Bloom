"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export function SidebarHeader() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex flex-col gap-4 mb-2">
      <div className="flex items-center justify-center w-full">
        <Link href="/" className="relative h-32 w-44 block">
          <Image
            src={isDark ? "/logo/logo_white.svg" : "/logo/logo_black.svg"}
            alt="Bloom Logo"
            fill
            className="object-contain cursor-pointer"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
