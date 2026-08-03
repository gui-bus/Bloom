"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import { StatCard } from "@/components/ui/statCard/statCard";
import { statCardCode } from "@/components/ui/statCard/statCard.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function StatCardComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Stat Card"
        description="Displays key performance metrics, numeric values, trend indicators (+/-), icons, and contextual descriptions."
      />

      <ImportSnippet
        importCode={`import { StatCard } from "@/components/ui/statCard/statCard";`}
      />

      <InstallationBlock componentName="statCard" />

      <Tabs defaultValue="statCard">
        <TabsList background={false}>
          <TabsTrigger
            value="statCard"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            statCard.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="statCard">
          <CodeBlock
            code={statCardCode}
            componentName="statCard.tsx"
            description="Core implementation of the StatCard component."
            tags={["React", "StatCard", "Metrics", "Dashboard"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard KPI metric summary card."
        preview={
          <div className="max-w-sm w-full">
            <StatCard
              title="Total Revenue"
              value="$124,500.00"
              change="+14.2%"
              trend="up"
              icon={<Icon icon="hugeicons:dollar-02" className="size-5" />}
              description="Compared to $108,900.00 last month"
            />
          </div>
        }
        code={`<StatCard
  title="Total Revenue"
  value="$124,500.00"
  change="+14.2%"
  trend="up"
  icon={<Icon icon="hugeicons:dollar-02" className="size-5" />}
  description="Compared to $108,900.00 last month"
/>`}
      />

      {/* Metrics Dashboard Grid */}
      <DocsComponent
        title="Metrics Dashboard Grid"
        description="Multiple KPI cards arranged in a responsive grid layout."
        preview={
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <StatCard
              title="Active Users"
              value="18,420"
              change="+8.4%"
              trend="up"
              icon={<Icon icon="hugeicons:user-group" className="size-5" />}
            />
            <StatCard
              title="Bounce Rate"
              value="34.2%"
              change="-2.1%"
              trend="down"
              icon={
                <Icon
                  icon="hugeicons:chart-breakout-square"
                  className="size-5"
                />
              }
            />
            <StatCard
              title="Avg Session"
              value="4m 12s"
              change="0.0%"
              trend="neutral"
              icon={<Icon icon="hugeicons:clock-01" className="size-5" />}
            />
          </div>
        }
        code={`<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <StatCard title="Active Users" value="18,420" change="+8.4%" trend="up" />
  <StatCard title="Bounce Rate" value="34.2%" change="-2.1%" trend="down" />
  <StatCard title="Avg Session" value="4m 12s" change="0.0%" trend="neutral" />
</div>`}
      />

      {/* Accessibility & ARIA Section */}
      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — StatCard"
        description="Supported properties for StatCard."
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
                    Header title label of the metric card.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">value</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Primary numeric value or formatted string.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">change</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string | number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Percentage or value change badge label.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">trend</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'up' | 'down' | 'neutral'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'neutral'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Trend indicator color & arrow direction.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">icon</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Header icon graphic element.
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
