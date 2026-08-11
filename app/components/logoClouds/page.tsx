"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { LogoClouds } from "@/components/ui/logoClouds/logoClouds";
import { logoCloudsCode } from "@/components/ui/logoClouds/logoClouds.code";
import { Separator } from "@/components/ui/separator/separator";

export default function LogoCloudsComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Logo Clouds"
        description="A beautiful and highly customizable logo showcase component. Supports static/hoverable grids, infinite sliding marquees, and batch crossfade swap animations."
      />

      <ImportSnippet
        importCode={`import { LogoClouds } from "@/components/ui/logoClouds/logoClouds";`}
      />

      <InstallationBlock componentName="logoClouds" />

      <CodeBlock
        code={logoCloudsCode}
        componentName="logoClouds.tsx"
        description="Core implementation of the LogoClouds component supporting multiple layouts, customized SVG partners, and animation effects."
        tags={[
          "React",
          "Tailwind",
          "UI Component",
          "Framer Motion",
          "Marquee",
          "Logo Clouds",
        ]}
      />

      <DocsComponent
        title="Default"
        description="A clean, responsive grid layout for displaying client or partner logos. Each card features subtle shadows, borders, and hover scale transitions."
        props={[
          "variant: 'marquee' | 'grid' | 'swap'",
          "cols: number",
          "title: string",
          "subtitle: string",
        ]}
        preview={
          <div className="w-full rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/20 p-6">
            <LogoClouds
              variant="grid"
              title="TRUSTED BY THE BEST"
              subtitle="Powering businesses of all sizes"
              cols={4}
            />
          </div>
        }
        code={`<LogoClouds
  variant="grid"
  title="TRUSTED BY THE BEST"
  subtitle="Powering businesses of all sizes"
  cols={4}
/>`}
      />

      <DocsComponent
        title="Infinite Marquee Scroll"
        description="An infinite sliding marquee rendering partner logos with adjustable speed, pause on hover, and smooth css border gradients."
        props={[
          "variant: 'marquee' | 'grid' | 'swap'",
          "speed: number",
          "pauseOnHover: boolean",
        ]}
        preview={
          <div className="w-full rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/20 p-6">
            <LogoClouds
              variant="marquee"
              title="OUR PARTNERS"
              subtitle="Integrates with your favorite tools"
              speed={50}
              pauseOnHover={true}
            />
          </div>
        }
        code={`<LogoClouds
  variant="marquee"
  title="OUR PARTNERS"
  subtitle="Integrates with your favorite tools"
  speed={50}
  pauseOnHover={true}
/>`}
      />

      <DocsComponent
        title="Batch Swap Animation"
        description="Transitions all cards concurrently at set intervals using a crossfade and y-axis translation spring effect."
        props={[
          "variant: 'marquee' | 'grid' | 'swap'",
          "swapCount: number",
          "interval: number",
        ]}
        preview={
          <div className="w-full rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/20 p-6">
            <LogoClouds
              variant="swap"
              title="INNOVATING CONSTANTLY"
              subtitle="Backed by industry leaders"
              swapCount={4}
              interval={2500}
            />
          </div>
        }
        code={`<LogoClouds
  variant="swap"
  title="INNOVATING CONSTANTLY"
  subtitle="Backed by industry leaders"
  swapCount={4}
  interval={2500}
/>`}
      />

      <DocsComponent
        title="Minimal Fast Marquee"
        description="A lightweight, high-speed marquee with no title boundaries or styling constraints."
        props={["gradient: boolean"]}
        preview={
          <div className="w-full rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/20 p-6">
            <LogoClouds variant="marquee" speed={80} gradient={true} />
          </div>
        }
        code={`<LogoClouds
  variant="marquee"
  speed={80}
  gradient={true}
/>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — LogoClouds"
        description="Props for customizing the LogoClouds component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "marquee" | "grid" | "swap"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"grid"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Exhibits marquee scroll, grid cards, or batch swap options.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">speed</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">40</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Speed multiplier for infinite marquee sliding motion.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    swapCount
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">4</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Number of visible partner items shown at once in swap batch.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">interval</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">3000</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Cooldown timer miliseconds to transition next batch.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">cols</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">4</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Number of columns in grid layout
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">title</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Section heading label rendered above the grid
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">subtitle</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Supporting subtext rendered below the title
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    pauseOnHover
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Pauses marquee motion when hovered
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">gradient</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Adds fade edge gradient overlay to marquee edges
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
