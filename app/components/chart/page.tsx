"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Chart } from "@/components/ui/chart/chart";
import { chartCode } from "@/components/ui/chart/chart.code";
import { Separator } from "@/components/ui/separator/separator";

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

      <ImportSnippet
        importCode={`import { Chart } from "@/components/ui/chart/chart";`}
      />

      <InstallationBlock componentName="chart" />

      <CodeBlock
        code={chartCode}
        componentName="chart.tsx"
        description="Core implementation of the Chart component supporting responsive Line and Bar visualizations."
        tags={["React", "Recharts", "Tailwind", "Data Visualization", "Chart"]}
      />

      <DocsComponent
        title="Default"
        description="Standard smooth line chart visualizing quantitative time-series data over time."
        preview={
          <div className="w-full">
            <Chart
              type="line"
              data={sampleData}
              xKey="month"
              yKey="revenue"
              color="#0284c7"
            />
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

      <DocsComponent
        title="Bar Chart"
        description="Categorical bar representation for comparing discrete data values."
        preview={
          <div className="w-full">
            <Chart
              type="bar"
              data={sampleData}
              xKey="month"
              yKey="revenue"
              color="#10b981"
            />
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

      <DocsComponent
        title="Color Themes"
        description="Customize the chart series color using the 'color' prop (HEX or CSS color string). Stacked vertically for clear visual comparison."
        preview={
          <div className="w-full flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="#0284c7" (Sky Blue)
              </span>
              <Chart
                type="line"
                data={sampleData}
                xKey="month"
                yKey="revenue"
                color="#0284c7"
                height={220}
              />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="#8b5cf6" (Purple)
              </span>
              <Chart
                type="line"
                data={sampleData}
                xKey="month"
                yKey="users"
                color="#8b5cf6"
                height={220}
              />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="#10b981" (Emerald Green)
              </span>
              <Chart
                type="bar"
                data={sampleData}
                xKey="month"
                yKey="revenue"
                color="#10b981"
                height={220}
              />
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="#f43f5e" (Rose Red)
              </span>
              <Chart
                type="bar"
                data={sampleData}
                xKey="month"
                yKey="users"
                color="#f43f5e"
                height={220}
              />
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

      <DocsComponent
        title="Custom Formatted Tooltips & Axes"
        description="Pass a 'valueFormatter' function to format values as currency, percentages, or custom localized units in tooltips and Y-axis."
        preview={
          <div className="w-full">
            <Chart
              type="line"
              title="Quarterly Revenue ($)"
              data={sampleData}
              xKey="month"
              yKey="revenue"
              color="#0284c7"
              valueFormatter={(val) => `$${val.toLocaleString("en-US")}`}
            />
          </div>
        }
        code={`<Chart
  type="line"
  title="Quarterly Revenue ($)"
  data={sampleData}
  xKey="month"
  yKey="revenue"
  color="#0284c7"
  valueFormatter={(val) => \`$\${val.toLocaleString("en-US")}\`}
/>`}
        props={["valueFormatter: (value: number) => string"]}
      />

      <DocsComponent
        title="Zoom & Pan Control"
        description="Set 'enableZoomPan' to true to display a slider brush control for zooming and panning across dense datasets."
        preview={
          <div className="w-full">
            <Chart
              type="bar"
              title="High-Density User Traffic"
              data={sampleData}
              xKey="month"
              yKey="users"
              color="#8b5cf6"
              enableZoomPan
            />
          </div>
        }
        code={`<Chart
  type="bar"
  title="High-Density User Traffic"
  data={sampleData}
  xKey="month"
  yKey="users"
  color="#8b5cf6"
  enableZoomPan
/>`}
        props={["enableZoomPan: boolean"]}
      />

      <DocsComponent
        title="Export Chart Utility"
        description="Set 'enableExport' to true to show instant SVG and PNG download buttons for saving chart figures."
        preview={
          <div className="w-full">
            <Chart
              type="line"
              title="Sales Performance Overview"
              data={sampleData}
              xKey="month"
              yKey="revenue"
              color="#10b981"
              enableExport
              valueFormatter={(val) => `$${val.toLocaleString()}`}
            />
          </div>
        }
        code={`<Chart
  type="line"
  title="Sales Performance Overview"
  data={sampleData}
  xKey="month"
  yKey="revenue"
  color="#10b981"
  enableExport
  valueFormatter={(val) => \`$\${val.toLocaleString()}\`}
/>`}
        props={["enableExport: boolean"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Chart"
        description="Properties for configuring the Chart component."
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
                  <td className="px-3 py-2 font-mono text-primary">type</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'line' | 'bar'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'line'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Chart visual representation series style.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">data</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    Array&lt;Record&lt;string, any&gt;&gt;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of data point objects to plot on axes.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">xKey</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Object key for horizontal X-axis category labels.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">yKey</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Object key for numerical Y-axis series values.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">height</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">300</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Container height scale in pixels.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'#0284c7'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    HEX or CSS color string for line stroke or bar fill.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">title</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Optional header title text rendered above the chart.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    valueFormatter
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"(value: number) => string"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Formatter function for currency/locale values in tooltips &
                    axes.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    enableZoomPan
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables slider brush control for zooming and panning.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    enableExport
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays SVG and PNG export buttons in the header.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    onExportSVG
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"() => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom callback triggered when clicking the SVG export
                    button.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    onExportPNG
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"() => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom callback triggered when clicking the PNG export
                    button.
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
