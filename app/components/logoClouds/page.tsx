"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { LogoClouds } from "@/components/ui/logoClouds/logoClouds";
import { logoCloudsCode } from "@/components/ui/logoClouds/logoClouds.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

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

      <Tabs defaultValue="logoClouds">
        <TabsList background={false}>
          <TabsTrigger
            value="logoClouds"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            logoClouds.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="logoClouds">
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
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A clean, responsive grid layout for displaying client or partner logos. Each card features subtle shadows, borders, and hover scale transitions."
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

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Prop
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Type
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Default
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  variant
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "marquee" | "grid" | "swap"
                </td>
                <td className="px-4 py-3 font-mono">"grid"</td>
                <td className="px-4 py-3">
                  Exhibits marquee scroll, grid cards, or batch swap options.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  speed
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">40</td>
                <td className="px-4 py-3">
                  Speed multiplier for infinite marquee sliding motion.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  swapCount
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">4</td>
                <td className="px-4 py-3">
                  Number of visible partner items shown at once in swap batch.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  interval
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">3000</td>
                <td className="px-4 py-3">
                  Cooldown timer miliseconds to transition next batch.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
