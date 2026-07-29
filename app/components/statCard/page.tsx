import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Stat Card",
  description: "Metric KPI stat card component with trend indicators.",
};

import { StatCard } from "@/components/ui/statCard/statCard";
import { statCardCode } from "@/components/ui/statCard/statCard.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function StatCardComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Stat Card"
        description="A dashboard card component for displaying metrics, numbers, and trend directional indicators."
      />

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
            tags={["React", "Tailwind", "Dashboard", "Metrics"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Metric cards with trends."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <StatCard
              title="Total Revenue"
              value="$45,231.89"
              change="+20.1%"
              trend="up"
              description="from last month"
            />
            <StatCard
              title="Active Users"
              value="2,350"
              change="-4.5%"
              trend="down"
              description="from last week"
            />
            <StatCard
              title="Conversion Rate"
              value="3.2%"
              change="0.0%"
              trend="neutral"
              description="same as yesterday"
            />
          </div>
        }
        code={`<StatCard title="Total Revenue" value="$45,231.89" change="+20.1%" trend="up" />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — StatCard"
        description="Properties to configure the StatCard component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">trend</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'up' | 'down' | 'neutral'</td>
                  <td className="px-3 py-2 text-muted-foreground">'neutral'</td>
                  <td className="px-3 py-2 text-muted-foreground">Directional trend indicator styling.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">change</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string | number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Percentage or value delta text string.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
