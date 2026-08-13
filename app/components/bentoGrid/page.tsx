"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid/bentoGrid";
import { bentoGridCode } from "@/components/ui/bentoGrid/bentoGrid.code";
import { Separator } from "@/components/ui/separator/separator";

const VisualHeaderOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] bg-zinc-50 dark:bg-zinc-800/40 p-6 flex-col justify-between">
    <div className="flex items-center gap-2">
      <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
        System Monitor
      </span>
    </div>
    <div className="space-y-2">
      <div className="h-2 w-3/4 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-2 w-1/2 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
    </div>
  </div>
);

const VisualHeaderTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] bg-zinc-50 dark:bg-zinc-800/40 p-6 flex-col justify-center items-center gap-2">
    <Icon
      icon="hugeicons:chart-histogram"
      className="size-8 text-zinc-600 dark:text-zinc-300"
    />
    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
      +48.6% Monthly Growth
    </span>
  </div>
);

export default function BentoGridPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Bento Grid"
        description="A clean, responsive dashboard grid layout inspired by Japanese bento boxes. Great for dashboards, feature showcases, and portfolios."
      />

      <ImportSnippet
        importCode={`import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid/bentoGrid";`}
      />

      <InstallationBlock componentName="bentoGrid" />

      <CodeBlock
        code={bentoGridCode}
        componentName="bentoGrid.tsx"
        description="Clean BentoGrid container and grid items with standard props."
        tags={["React", "Grid", "Layout", "Bento"]}
      />

      <DocsComponent
        title="Default"
        description="A beautiful layout with clean styling, image backgrounds, and custom headers. Uses default gap values and neutral border highlight effects."
        props={[
          "colSpan: number | string",
          "rowSpan: number | string",
          "imageSrc: string",
          "header: ReactNode",
          "icon: ReactNode",
        ]}
        preview={
          <div className="w-full max-w-5xl mx-auto p-4 bg-zinc-50 dark:bg-zinc-950/20 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80">
            <BentoGrid>
              <BentoGridItem
                title="Advanced Analytics"
                description="Monitor key performance indicators and trace database query loads."
                header={<VisualHeaderTwo />}
                icon={<Icon icon="hugeicons:analytics-01" className="size-5" />}
                colSpan={1}
                rowSpan={1}
              />
              <BentoGridItem
                title="Stunning Visual Assets"
                description="Explore high-quality image overlays that adjust readability automatically."
                imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80"
                icon={<Icon icon="hugeicons:image-01" className="size-5" />}
                colSpan={2}
                rowSpan={1}
              />
              <BentoGridItem
                title="Production Staging"
                description="Keep track of deployments and server logs in real-time."
                imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
                icon={<Icon icon="hugeicons:cloud-server" className="size-5" />}
                colSpan={2}
                rowSpan={1}
              />
              <BentoGridItem
                title="Health Dashboard"
                description="Track latency rates and memory leakage limits."
                header={<VisualHeaderOne />}
                icon={
                  <Icon
                    icon="hugeicons:dashboard-speed-01"
                    className="size-5"
                  />
                }
                colSpan={1}
                rowSpan={1}
              />
            </BentoGrid>
          </div>
        }
        code={`<BentoGrid>
  <BentoGridItem
    title="Advanced Analytics"
    description="Monitor key performance indicators..."
    header={<VisualHeaderTwo />}
    icon={<Icon icon="hugeicons:analytics-01" />}
    colSpan={1}
  />
  <BentoGridItem
    title="Stunning Visual Assets"
    description="Explore high-quality image overlays..."
    imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    icon={<Icon icon="hugeicons:image-01" />}
    colSpan={2}
  />
</BentoGrid>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — BentoGridItem"
        description="Props for configuring individual items in the bento grid."
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
                  <td className="px-3 py-2 font-mono text-primary">title</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Card item title or heading string.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    description
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Supporting text or description details.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">imageSrc</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Optional Unsplash image source background overlay.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">header</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom component overlay or section for the top.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">icon</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Icon component shown at the bottom.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">colSpan</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number | string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Responsive column grid span parameter.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">rowSpan</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number | string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Responsive row grid span parameter.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
      <DocsPagination />
    </div>
  );
}
