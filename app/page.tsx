import { Icon } from "@iconify/react";
import Link from "next/link";
import { DocsPagination } from "@/components/core/docsPagination";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="group flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all duration-300 shadow-xs">
    <div className="flex items-center justify-center size-10 rounded-xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500/20 transition-colors duration-300">
      <Icon icon={icon} className="size-5" />
    </div>
    <div>
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="p-5 space-y-12">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-500 text-xs font-semibold">
          <span className="size-1.5 rounded-full bg-sky-500 animate-pulse" />
          Bloom UI — Modern React 19 Component Library
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
            Welcome to <span className="text-sky-500">Bloom UI</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            A professional React component library built on top of{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">
              Radix UI
            </strong>
            ,{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">
              Tailwind CSS v4
            </strong>
            , and{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">
              Framer Motion
            </strong>
            . Clean neutral theme tokens, full accessibility standards, and
            high-performance micro-animations.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/components/button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-white font-semibold text-sm hover:bg-sky-600 transition-colors duration-200 shadow-xs"
          >
            <Icon icon="hugeicons:grid-view" className="size-4" />
            Browse Components
          </Link>
          <Link
            href="/installation"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 shadow-xs"
          >
            <Icon
              icon="hugeicons:download-01"
              className="size-4 text-sky-500"
            />
            Installation Guide
          </Link>
          <a
            href="https://github.com/gui-bus/Bloom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold text-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 shadow-xs"
          >
            <Icon icon="hugeicons:github" className="size-4" />
            GitHub
          </a>
        </div>
      </section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Why Bloom?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">
            Core principles behind every component in the library.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard
            icon="hugeicons:source-code"
            title="You own the code"
            description="Unlike traditional libraries, you copy the source directly into your project. Customize freely with no black-box limitations."
          />
          <FeatureCard
            icon="hugeicons:paint-board"
            title="Consistent design system"
            description="Centralized tokens for colors, sizes, and border-radius guarantee visual consistency across all components."
          />
          <FeatureCard
            icon="hugeicons:view"
            title="Accessibility out of the box"
            description="Built on top of Radix UI — every component follows WAI-ARIA standards with zero extra configuration required."
          />
          <FeatureCard
            icon="hugeicons:flash"
            title="Fluid animations"
            description="Framer Motion integration for transitions and effects (like the ripple click feedback) that make your interface feel alive."
          />
          <FeatureCard
            icon="hugeicons:moon-02"
            title="Native dark mode"
            description="Full light and dark theme support via semantic CSS variables. Works automatically with next-themes out of the box."
          />
          <FeatureCard
            icon="hugeicons:package"
            title="CLI for fast installation"
            description="Use the official CLI to initialize the design system and add components without any manual setup work."
          />
        </div>
      </section>

      <DocsPagination />

      <div className="h-4" />
    </main>
  );
}
