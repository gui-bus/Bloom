"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

export interface Logo {
  id: string;
  name: string;
  logo: React.ReactNode;
}

// 8 custom SVG logoipsum partners that look clean and modern
const DEFAULT_LOGOS: Logo[] = [
  {
    id: "designo",
    name: "Designo",
    logo: (
      <svg
        className="h-8 w-auto fill-current"
        viewBox="0 0 134 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.6 16c0 5-3.6 9-8.6 9S1.4 21 1.4 16s3.6-9 8.6-9 8.6 4 8.6 9zm-2.8 0c0-3.3-2.3-5.8-5.8-5.8S4.2 12.7 4.2 16s2.3 5.8 5.8 5.8 5.8-2.5 5.8-5.8zM24 7.5h2.6v17H24zM32.5 16c0 5-3.6 9-8.6 9s-8.6-4-8.6-9 3.6-9 8.6-9 8.6 4 8.6 9zm-2.8 0c0-3.3-2.3-5.8-5.8-5.8S18 12.7 18 16s2.3 5.8 5.8 5.8 5.8-2.5 5.8-5.8zM42.2 16c0-5-3.6-9-8.6-9s-8.6 4-8.6 9 3.6 9 8.6 9c2.4 0 4.6-1 6-2.6v2.1h2.6V7.5h-2.6v2c-1.4-1.6-3.6-2.6-6-2.6-5 0-8.6 4-8.6 9s3.6 9 8.6 9 8.6-4 8.6-9zm-2.8 0c0 3.3-2.3 5.8-5.8 5.8S27.8 19.3 27.8 16s2.3-5.8 5.8-5.8 5.8 2.5 5.8 5.8zM56.4 16c0 5-3.6 9-8.6 9s-8.6-4-8.6-9 3.6-9 8.6-9 8.6 4 8.6 9zm-2.8 0c0-3.3-2.3-5.8-5.8-5.8S42 12.7 42 16s2.3 5.8 5.8 5.8 5.8-2.5 5.8-5.8z" />
        <circle cx="68" cy="16" r="8" className="text-sky-500 fill-current" />
        <text
          x="82"
          y="22"
          className="font-bold text-xl tracking-tight fill-current text-foreground"
        >
          DESIGNO
        </text>
      </svg>
    ),
  },
  {
    id: "aethelgard",
    name: "Aethelgard",
    logo: (
      <svg
        className="h-8 w-auto fill-current"
        viewBox="0 0 150 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 22h7l3-6h8l3 6h7L20 2H12zm2 6l3 6h-6l3-6z"
          className="text-purple-500 fill-current"
        />
        <text
          x="36"
          y="22"
          className="font-bold text-xl tracking-tight fill-current text-foreground"
        >
          AETHEL
        </text>
      </svg>
    ),
  },
  {
    id: "crypton",
    name: "Crypton",
    logo: (
      <svg
        className="h-8 w-auto fill-current"
        viewBox="0 0 140 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6h10v6H4V6zm14 0h10v6H18V6zM4 16h24v10H4V16z"
          className="text-pink-500 fill-current"
        />
        <text
          x="36"
          y="23"
          className="font-bold text-xl tracking-tight fill-current text-foreground"
        >
          CRYPTON
        </text>
      </svg>
    ),
  },
  {
    id: "nexa",
    name: "Nexa",
    logo: (
      <svg
        className="h-8 w-auto fill-current"
        viewBox="0 0 120 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2L2 16l14 14h8L10 16 24 2h-8z"
          className="text-emerald-500 fill-current"
        />
        <text
          x="32"
          y="22"
          className="font-bold text-xl tracking-tight fill-current text-foreground"
        >
          NEXA
        </text>
      </svg>
    ),
  },
  {
    id: "lumina",
    name: "Lumina",
    logo: (
      <svg
        className="h-8 w-auto fill-current"
        viewBox="0 0 130 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16"
          cy="16"
          r="10"
          className="text-amber-500 fill-current"
        />
        <path
          d="M16 6v20M6 16h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text
          x="36"
          y="22"
          className="font-bold text-xl tracking-tight fill-current text-foreground"
        >
          LUMINA
        </text>
      </svg>
    ),
  },
  {
    id: "vertex",
    name: "Vertex",
    logo: (
      <svg
        className="h-8 w-auto fill-current"
        viewBox="0 0 130 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2l14 24H2L16 2zm0 6L7 22h18L16 8z"
          className="text-violet-500 fill-current"
        />
        <text
          x="38"
          y="22"
          className="font-bold text-xl tracking-tight fill-current text-foreground"
        >
          VERTEX
        </text>
      </svg>
    ),
  },
  {
    id: "apex",
    name: "Apex",
    logo: (
      <svg
        className="h-8 w-auto fill-current"
        viewBox="0 0 120 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="20"
          height="20"
          rx="4"
          className="text-indigo-500 fill-current"
        />
        <path
          d="M10 18l3-3 3 3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="32"
          y="22"
          className="font-bold text-xl tracking-tight fill-current text-foreground"
        >
          APEX
        </text>
      </svg>
    ),
  },
  {
    id: "sovereign",
    name: "Sovereign",
    logo: (
      <svg
        className="h-8 w-auto fill-current"
        viewBox="0 0 160 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2l6 6v10l-6 6-6-6V8l6-6z"
          className="text-rose-500 fill-current"
        />
        <text
          x="32"
          y="22"
          className="font-bold text-xl tracking-tight fill-current text-foreground"
        >
          SOVEREIGN
        </text>
      </svg>
    ),
  },
];

export interface LogoCloudsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "marquee" | "grid" | "swap";
  logos?: Logo[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  // Marquee-specific options
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  gradient?: boolean;
  // Grid-specific options
  cols?: 2 | 3 | 4 | 5 | 6;
  // Swap-specific options
  swapCount?: number;
  interval?: number;
}

export function LogoClouds({
  variant = "grid",
  logos = DEFAULT_LOGOS,
  title,
  subtitle,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  gradient = true,
  cols = 4,
  swapCount = 4,
  interval = 3000,
  className,
  ...props
}: LogoCloudsProps) {
  // Setup state for swap animation
  const [visibleLogos, setVisibleLogos] = React.useState<Logo[]>([]);
  const [pool, setPool] = React.useState<Logo[]>([]);

  // Initialize swap state when logos change or mount
  React.useEffect(() => {
    if (variant === "swap") {
      const activeCount = Math.min(swapCount, logos.length);
      setVisibleLogos(logos.slice(0, activeCount));
      setPool(logos.slice(activeCount));
    }
  }, [variant, logos, swapCount]);

  // Periodic swap animation trigger
  React.useEffect(() => {
    if (variant !== "swap" || visibleLogos.length === 0 || pool.length === 0)
      return;

    const timer = setInterval(() => {
      setVisibleLogos((currentVisible) => {
        const currentPool = [...pool];
        if (currentPool.length === 0) return currentVisible;

        // Choose a random slot to replace
        const indexToSwap = Math.floor(Math.random() * currentVisible.length);
        // Choose a random logo from the pool
        const poolIndex = Math.floor(Math.random() * currentPool.length);
        const nextLogo = currentPool[poolIndex];

        // Perform swap
        const prevLogo = currentVisible[indexToSwap];
        const nextVisible = [...currentVisible];
        nextVisible[indexToSwap] = nextLogo;

        // Update the pool
        currentPool[poolIndex] = prevLogo;
        setPool(currentPool);

        return nextVisible;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [variant, pool, interval, visibleLogos.length]);

  const gridColsClass = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
  }[cols];

  return (
    <div
      className={cn("w-full py-12 px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {(title || subtitle) && (
        <div className="text-center mb-10 max-w-3xl mx-auto space-y-3">
          {title && (
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="relative w-full">
        {variant === "marquee" && (
          <div
            className={cn(
              "w-full overflow-hidden",
              gradient &&
                "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
            )}
          >
            <Marquee
              speed={speed}
              direction={direction}
              pauseOnHover={pauseOnHover}
              className="flex items-center"
            >
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="mx-8 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
                >
                  {logo.logo}
                </div>
              ))}
            </Marquee>
          </div>
        )}

        {variant === "grid" && (
          <div
            className={cn(
              "grid gap-8 items-center justify-items-center",
              gridColsClass,
            )}
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="w-full flex items-center justify-center p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-zinc-100 dark:border-neutral-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 hover:shadow-md hover:border-zinc-200 dark:hover:border-neutral-700"
              >
                {logo.logo}
              </div>
            ))}
          </div>
        )}

        {variant === "swap" && (
          <div
            className={cn(
              "grid gap-8 items-center justify-items-center",
              {
                2: "grid-cols-2",
                3: "grid-cols-3",
                4: "grid-cols-2 md:grid-cols-4",
                5: "grid-cols-2 md:grid-cols-5",
                6: "grid-cols-3 md:grid-cols-6",
              }[Math.min(swapCount, 6) as 2 | 3 | 4 | 5 | 6],
            )}
          >
            {visibleLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-full h-24 flex items-center justify-center p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-zinc-100 dark:border-neutral-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 hover:shadow-md hover:border-zinc-200 dark:hover:border-neutral-700 overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={logo.id}
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center p-6"
                  >
                    {logo.logo}
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
