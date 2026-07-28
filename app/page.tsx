import Link from "next/link";
import { Icon } from "@iconify/react";

const CLIStep = ({
  step,
  label,
  code,
}: {
  step: number;
  label: string;
  code: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
        {step}
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
    <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3 font-mono text-sm border border-border">
      <Icon
        icon="hugeicons:terminal"
        className="size-4 text-muted-foreground shrink-0"
      />
      <code className="text-foreground">{code}</code>
    </div>
  </div>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="group flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
    <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
      <Icon icon={icon} className="size-5" />
    </div>
    <div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const ComponentCard = ({
  name,
  href,
}: {
  name: string;
  href: string;
}) => (
  <Link
    href={href}
    className="group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
  >
    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
      {name}
    </span>
    <Icon
      icon="hugeicons:arrow-right-01"
      className="size-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
    />
  </Link>
);

export default function Home() {
  return (
    <main className="p-5 space-y-16">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Under construction — contributions are welcome
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Welcome to <span className="text-primary">Bloom UI</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A premium React component library built on top of{" "}
            <strong className="text-foreground">Radix UI</strong>,{" "}
            <strong className="text-foreground">Tailwind CSS v4</strong>, and{" "}
            <strong className="text-foreground">Framer Motion</strong>. Copy the
            source code directly into your project — no package to install, no
            black-box, full ownership over your components.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/components/button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity duration-200"
          >
            <Icon icon="hugeicons:grid-view" className="size-4" />
            Browse Components
          </Link>
          <a
            href="https://github.com/gui-bus/Bloom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card text-foreground font-medium text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
          >
            <Icon icon="hugeicons:github" className="size-4" />
            GitHub
          </a>
        </div>
      </section>

      <hr className="border-border" />

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Why Bloom?</h2>
          <p className="text-muted-foreground mt-1 text-sm">
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

      <hr className="border-border" />

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Installation via CLI
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Use the official Bloom CLI to add components to your project in
            seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 p-6 rounded-2xl border border-border bg-card">
            <CLIStep
              step={1}
              label="Initialize Bloom in your project"
              code="npx @bloomui-react/cli init"
            />
            <CLIStep
              step={2}
              label="Add the component you need"
              code="npx @bloomui-react/cli add button"
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">What does <code className="font-mono bg-muted px-1.5 py-0.5 rounded-md text-xs">init</code> set up?</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                {
                  code: "lib/utils.ts",
                  desc: "the cn() utility for class name merging",
                },
                {
                  code: "lib/design-system.ts",
                  desc: "size, color, and radius design tokens",
                },
                {
                  code: "lib/ripple/",
                  desc: "ripple effect component and hook",
                },
                {
                  code: "clsx, tailwind-merge",
                  desc: "styling dependencies, auto-installed",
                },
              ].map(({ code, desc }) => (
                <li key={code} className="flex items-start gap-2">
                  <Icon
                    icon="hugeicons:checkmark-circle-02"
                    className="size-4 text-primary shrink-0 mt-0.5"
                  />
                  <span>
                    <code className="font-mono bg-muted px-1.5 py-0.5 rounded-md text-xs text-foreground">
                      {code}
                    </code>{" "}
                    — {desc}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground pt-2">
              <Icon
                icon="hugeicons:information-circle"
                className="size-4 inline mr-1.5 text-muted-foreground"
              />
              Bloom requires{" "}
              <strong className="text-foreground">Tailwind CSS v4</strong> to be
              already configured in your project before running{" "}
              <code className="font-mono bg-muted px-1.5 py-0.5 rounded-md text-xs">
                init
              </code>
              .
            </p>
          </div>
        </div>
      </section>

      <hr className="border-border" />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Available components
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              The library is actively growing. More components coming soon.
            </p>
          </div>

          <div className="space-y-2">
            <ComponentCard
              name="Badge"
              href="/components/badge"
            />
            <ComponentCard
              name="Button"
              href="/components/button"
            />
            <ComponentCard
              name="Button Group"
              href="/components/buttonGroup"
            />
            <ComponentCard
              name="Tabs"
              href="/components/tabs"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            <a
              href="https://github.com/gui-bus/Bloom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Follow progress on GitHub →
            </a>
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Built with</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Bloom is built on the best tools in the modern React ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "React", icon: "devicon:react", desc: "UI library" },
              { name: "Next.js", icon: "devicon:nextjs", desc: "Docs framework" },
              { name: "TypeScript", icon: "devicon:typescript", desc: "Static typing" },
              { name: "Tailwind CSS v4", icon: "devicon:tailwindcss", desc: "Utility-first CSS" },
              { name: "Radix UI", icon: "devicon:radixui", desc: "Accessible primitives" },
              { name: "Framer Motion", icon: "devicon:framermotion", desc: "Animations" },
            ].map(({ name, icon, desc }) => (
              <div
                key={name}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <Icon icon={icon} className="size-6 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-8" />
    </main>
  );
}
