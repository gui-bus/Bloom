import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Chart",
  description: "Interactive line and bar chart components built on Recharts.",
};

import { ChartDemo } from "./chart-demo";
import { chartCode } from "@/components/ui/chart/chart.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ChartComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Chart"
        description="A responsive data visualization chart component supporting line and bar series with tooltips."
      />

      <Tabs defaultValue="chart">
        <TabsList background={false}>
          <TabsTrigger
            value="chart"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            chart.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chart">
          <CodeBlock
            code={chartCode}
            componentName="chart.tsx"
            description="Core implementation of the Chart component."
            tags={["React", "Recharts", "Tailwind", "Data Visualization"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Line and bar series charts."
        preview={<ChartDemo />}
        code={`<Chart type="line" data={data} xKey="month" yKey="revenue" color="#0284c7" />
<Chart type="bar" data={data} xKey="month" yKey="revenue" color="#10b981" />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Chart"
        description="Properties to configure the Chart component."
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
                  <td className="px-3 py-2 font-mono text-primary">type</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'line' | 'bar'</td>
                  <td className="px-3 py-2 text-muted-foreground">'line'</td>
                  <td className="px-3 py-2 text-muted-foreground">Chart visual representation series style.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'#3b82f6'</td>
                  <td className="px-3 py-2 text-muted-foreground">HEX or CSS color string for series fill/stroke.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
