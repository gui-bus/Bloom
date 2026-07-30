"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Chart } from "@/components/ui/chart/chart";
import { chartCode } from "@/components/ui/chart/chart.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const sampleData = [
  { month: "Jan", revenue: 4200, users: 2100 },
  { month: "Feb", revenue: 3800, users: 2400 },
  { month: "Mar", revenue: 6500, users: 3100 },
  { month: "Apr", revenue: 8100, users: 4200 },
  { month: "May", revenue: 7400, users: 3900 },
  { month: "Jun", revenue: 9800, users: 5100 },
];

export default function ChartComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Chart"
        description="A responsive data visualization chart component built on Recharts supporting line and bar series with customizable height, colors, and tooltips."
      />

      <ImportSnippet importCode={`import { Chart } from "@/components/ui/chart/chart";`} />

      <InstallationBlock componentName="chart" />

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
            description="Core implementation of the Chart component supporting responsive Line and Bar visualizations."
            tags={["React", "Recharts", "Tailwind", "Data Visualization", "Chart"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard smooth line chart visualizing quantitative time-series data over time."
        preview={
          <div className="w-full">
            <Chart type="line" data={sampleData} xKey="month" yKey="revenue" color="#0284c7" />
          </div>
        }
        code={`<Chart
  type="line"
  data={data}
  xKey="month"
  yKey="revenue"
  color="#0284c7"
/>`}
      />

      {/* Bar Chart */}
      <DocsComponent
        title="Bar Chart"
        description="Categorical bar representation for comparing discrete data values."
        preview={
          <div className="w-full">
            <Chart type="bar" data={sampleData} xKey="month" yKey="revenue" color="#10b981" />
          </div>
        }
        code={`<Chart
  type="bar"
  data={data}
  xKey="month"
  yKey="revenue"
  color="#10b981"
/>`}
        props={["type: 'line' | 'bar'"]}
      />

      {/* Color Themes */}
      <DocsComponent
        title="Color Themes"
        description="Customize the chart series color using the 'color' prop (HEX or CSS color string). Stacked vertically for clear visual comparison."
        preview={
          <div className="w-full flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="#0284c7" (Sky Blue)</span>
              <Chart type="line" data={sampleData} xKey="month" yKey="revenue" color="#0284c7" height={220} />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="#8b5cf6" (Purple)</span>
              <Chart type="line" data={sampleData} xKey="month" yKey="users" color="#8b5cf6" height={220} />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="#10b981" (Emerald Green)</span>
              <Chart type="bar" data={sampleData} xKey="month" yKey="revenue" color="#10b981" height={220} />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="#f43f5e" (Rose Red)</span>
              <Chart type="bar" data={sampleData} xKey="month" yKey="users" color="#f43f5e" height={220} />
            </div>
          </div>
        }
        code={`<div className="space-y-6 w-full">
  <Chart type="line" data={data} xKey="month" yKey="revenue" color="#0284c7" />
  <Chart type="line" data={data} xKey="month" yKey="users" color="#8b5cf6" />
  <Chart type="bar" data={data} xKey="month" yKey="revenue" color="#10b981" />
  <Chart type="bar" data={data} xKey="month" yKey="users" color="#f43f5e" />
</div>`}
        props={["color: string"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Chart Table */}
      <DocsComponent
        title="Props — Chart"
        description="Properties for configuring the Chart component."
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
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">data</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">Array&lt;Record&lt;string, any&gt;&gt;</td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">Array of data point objects to plot on axes.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">xKey</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">Object key for horizontal X-axis category labels.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">yKey</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">Object key for numerical Y-axis series values.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">height</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">300</td>
                  <td className="px-3 py-2 text-muted-foreground">Container height scale in pixels.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'#0284c7'</td>
                  <td className="px-3 py-2 text-muted-foreground">HEX or CSS color string for line stroke or bar fill.</td>
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
