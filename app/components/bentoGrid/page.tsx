"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid/bentoGrid";
import { bentoGridCode } from "@/components/ui/bentoGrid/bentoGrid.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

// Mock headers for beautiful visuals in presets
const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800/80 flex-col justify-between p-4">
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
        Server Health: Optimal
      </span>
    </div>
    <div className="space-y-2">
      <div className="h-3 w-3/4 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-3 w-1/2 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
    </div>
  </div>
);

const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800/80 flex-col justify-center items-center gap-2">
    <Icon
      icon="hugeicons:chart-histogram"
      className="size-8 text-primary/70 animate-bounce"
    />
    <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
      +24% growth
    </span>
  </div>
);

const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800/80 p-4 flex-col justify-between">
    <div className="flex justify-between items-center text-xs">
      <span className="text-zinc-500 dark:text-zinc-400 font-medium">
        Memory Usage
      </span>
      <span className="font-bold text-zinc-700 dark:text-zinc-300">42%</span>
    </div>
    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
      <div className="bg-primary h-2 rounded-full" style={{ width: "42%" }} />
    </div>
  </div>
);

const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800/80 p-4 flex-col justify-around">
    <div className="flex items-center gap-3">
      <div className="size-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
        <Icon
          icon="hugeicons:user-multiple"
          className="size-4 text-zinc-600 dark:text-zinc-300"
        />
      </div>
      <div>
        <div className="h-2 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-sm mb-1" />
        <div className="h-1.5 w-10 bg-zinc-200 dark:bg-zinc-800/50 rounded-sm" />
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div className="size-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
        <Icon
          icon="hugeicons:user-multiple"
          className="size-4 text-zinc-600 dark:text-zinc-300"
        />
      </div>
      <div>
        <div className="h-2 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-sm mb-1" />
        <div className="h-1.5 w-8 bg-zinc-200 dark:bg-zinc-800/50 rounded-sm" />
      </div>
    </div>
  </div>
);

export default function BentoGridComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Bento Grid"
        description="A grid layout system designed to showcase content, features, and dashboard widgets in a visually engaging Bento-box style. Supports column and row span configuration, hover gradient effects, icons, and structured headers."
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
            description="Core implementation of the BentoGrid and BentoGridItem components with grid column/row span mappings and interactive styles."
            tags={["React", "Tailwind", "UI Component", "Bento Grid"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default Layout"
        description="A standard 3-column bento grid displaying cards with various column and row span settings."
        preview={
          <div className="w-full">
            <BentoGrid className="max-w-4xl mx-auto">
              <BentoGridItem
                title="System Monitor"
                description="Monitor server uptime, health, logs, and database connection status in real-time."
                header={<SkeletonOne />}
                icon={
                  <Icon
                    icon="hugeicons:dashboard-circle"
                    className="size-5 text-zinc-500"
                  />
                }
                colSpan={2}
              />
              <BentoGridItem
                title="Performance"
                description="Fast and light response benchmarks."
                header={<SkeletonTwo />}
                icon={
                  <Icon
                    icon="hugeicons:activity"
                    className="size-5 text-zinc-500"
                  />
                }
                colSpan={1}
              />
              <BentoGridItem
                title="Resource Allocation"
                description="Track resource utilization metrics."
                header={<SkeletonThree />}
                icon={
                  <Icon
                    icon="hugeicons:chart-line-up"
                    className="size-5 text-zinc-500"
                  />
                }
                colSpan={1}
              />
              <BentoGridItem
                title="User Growth"
                description="List of recently active profiles."
                header={<SkeletonFour />}
                icon={
                  <Icon
                    icon="hugeicons:user-add"
                    className="size-5 text-zinc-500"
                  />
                }
                colSpan={2}
              />
            </BentoGrid>
          </div>
        }
        code={`<BentoGrid>
  <BentoGridItem
    title="System Monitor"
    description="Monitor server uptime, health, logs, and database connection status in real-time."
    header={<SkeletonOne />}
    icon={<Icon icon="hugeicons:dashboard-circle" className="size-5" />}
    colSpan={2}
  />
  <BentoGridItem
    title="Performance"
    description="Fast and light response benchmarks."
    header={<SkeletonTwo />}
    icon={<Icon icon="hugeicons:activity" className="size-5" />}
    colSpan={1}
  />
  <BentoGridItem
    title="Resource Allocation"
    description="Track resource utilization metrics."
    header={<SkeletonThree />}
    icon={<Icon icon="hugeicons:chart-line-up" className="size-5" />}
    colSpan={1}
  />
  <BentoGridItem
    title="User Growth"
    description="List of recently active profiles."
    header={<SkeletonFour />}
    icon={<Icon icon="hugeicons:user-add" className="size-5" />}
    colSpan={2}
  />
</BentoGrid>`}
        props={[
          "colSpan: 1 | 2 | 3 | 4 | 5 | 6 | 'full' | string",
          "rowSpan: 1 | 2 | 3 | 4 | 5 | 6 | 'full' | string",
        ]}
      />

      <DocsComponent
        title="Custom Spans & Row Spans"
        description="A dashboard bento grid showing vertical card layout with rowSpan configuration."
        preview={
          <div className="w-full">
            <BentoGrid className="max-w-4xl mx-auto auto-rows-[12rem]">
              <BentoGridItem
                title="Realtime Logs"
                description="Live logging stream filterable by categories."
                header={<SkeletonOne />}
                icon={
                  <Icon
                    icon="hugeicons:menu-square-dot"
                    className="size-5 text-zinc-500"
                  />
                }
                colSpan={1}
                rowSpan={2}
              />
              <BentoGridItem
                title="Global Revenue"
                description="Track transactions and invoices."
                header={<SkeletonTwo />}
                icon={
                  <Icon
                    icon="hugeicons:money-send-01"
                    className="size-5 text-zinc-500"
                  />
                }
                colSpan={2}
                rowSpan={1}
              />
              <BentoGridItem
                title="Active Sessions"
                description="Real-time user count tracking."
                header={<SkeletonThree />}
                icon={
                  <Icon
                    icon="hugeicons:touch-interaction-02"
                    className="size-5 text-zinc-500"
                  />
                }
                colSpan={1}
                rowSpan={1}
              />
              <BentoGridItem
                title="Security Alert Center"
                description="Threat levels, firewalls, and active warning systems."
                header={<SkeletonFour />}
                icon={
                  <Icon
                    icon="hugeicons:shield-warning"
                    className="size-5 text-zinc-500"
                  />
                }
                colSpan={1}
                rowSpan={1}
              />
            </BentoGrid>
          </div>
        }
        code={`<BentoGrid className="auto-rows-[12rem]">
  <BentoGridItem
    title="Realtime Logs"
    description="Live logging stream filterable by categories."
    header={<SkeletonOne />}
    icon={<Icon icon="hugeicons:menu-square-dot" className="size-5" />}
    colSpan={1}
    rowSpan={2}
  />
  <BentoGridItem
    title="Global Revenue"
    description="Track transactions and invoices."
    header={<SkeletonTwo />}
    icon={<Icon icon="hugeicons:money-send-01" className="size-5" />}
    colSpan={2}
    rowSpan={1}
  />
  ...
</BentoGrid>`}
      />

      <DocsComponent
        title="Interactive Spotlight (hoverGradient)"
        description="Toggle the background spotlight gradient on hover. Enabled by default."
        preview={
          <div className="w-full">
            <BentoGrid className="max-w-4xl mx-auto auto-rows-[12rem] grid-cols-1 md:grid-cols-2">
              <BentoGridItem
                title="With Spotlight"
                description="Features a soft gradient light source originating from corners on hover."
                icon={
                  <Icon
                    icon="hugeicons:flash"
                    className="size-5 text-sky-500"
                  />
                }
                hoverGradient={true}
                colSpan={1}
              />
              <BentoGridItem
                title="Without Spotlight"
                description="Standard flat style card with simple scale/shadow transitions."
                icon={
                  <Icon
                    icon="hugeicons:eye-slash"
                    className="size-5 text-zinc-500"
                  />
                }
                hoverGradient={false}
                colSpan={1}
              />
            </BentoGrid>
          </div>
        }
        code={`<BentoGrid className="grid-cols-2">
  <BentoGridItem
    title="With Spotlight"
    description="Features a soft gradient light source."
    hoverGradient={true}
  />
  <BentoGridItem
    title="Without Spotlight"
    description="Standard flat style card."
    hoverGradient={false}
  />
</BentoGrid>`}
        props={["hoverGradient: boolean"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — BentoGrid"
        description="Properties to configure the BentoGrid container."
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
                  <td className="px-3 py-2 font-mono text-primary">
                    className
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom classes for layout adjustments.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — BentoGridItem"
        description="Properties to configure each grid cell/item."
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
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Heading title of the bento cell.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    description
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Detailed subtitle or descriptive string.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">header</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Preview illustration, list item, or graph node.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">icon</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Iconify icon displayed above the header or title.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">colSpan</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    1 | 2 | 3 | 4 | 5 | 6 | 'full' | string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets cell width column spans on md viewports.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">rowSpan</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    1 | 2 | 3 | 4 | 5 | 6 | 'full' | string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets cell height row spans on md viewports.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    hoverGradient
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Toggles radial spotlight gradient on hover.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    keyof typeof designRadius
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'2xl'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Customizes border radius settings.
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
