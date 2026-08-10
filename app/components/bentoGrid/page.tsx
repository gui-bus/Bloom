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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

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

      <Tabs defaultValue="bentoGrid">
        <TabsList background={false}>
          <TabsTrigger
            value="bentoGrid"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            bentoGrid.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bentoGrid">
          <CodeBlock
            code={bentoGridCode}
            componentName="bentoGrid.tsx"
            description="Clean BentoGrid container and grid items with standard props."
            tags={["React", "Grid", "Layout", "Bento"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A beautiful layout with clean styling, image backgrounds, and custom headers. Uses default gap values and neutral border highlight effects."
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
                  title
                </td>
                <td className="px-4 py-3 font-mono text-primary">ReactNode</td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Card item title or heading string.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  description
                </td>
                <td className="px-4 py-3 font-mono text-primary">ReactNode</td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Supporting text or description details.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  imageSrc
                </td>
                <td className="px-4 py-3 font-mono text-primary">string</td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Optional Unsplash image source background overlay.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  colSpan
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  number | string
                </td>
                <td className="px-4 py-3 font-mono">1</td>
                <td className="px-4 py-3">
                  Responsive column grid span parameter.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  rowSpan
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  number | string
                </td>
                <td className="px-4 py-3 font-mono">1</td>
                <td className="px-4 py-3">
                  Responsive row grid span parameter.
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
