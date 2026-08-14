"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Gauge } from "@/components/ui/gauge/gauge";
import { gaugeCode } from "@/components/ui/gauge/gauge.code";

export default function GaugeComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Gauge"
        description="Gauges display metrics like temperature, speed, or system resources in a radial arc container, offering a dashboard-style visualization."
      />

      <ImportSnippet
        importCode={`import { Gauge } from "@/components/ui/gauge/gauge";`}
      />

      <InstallationBlock componentName="gauge" />

      <CodeBlock
        code={gaugeCode}
        componentName="gauge.tsx"
        description="Core implementation of the Gauge component."
        tags={["React", "Tailwind", "UI Component", "Dashboard", "Progress"]}
      />

      <DocsComponent
        title="Default"
        description="Standard semicircle gauge showing a completion percentage."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Gauge value={60} label="System Load" unit="%" />
          </div>
        }
        code={`<Gauge value={60} label="System Load" unit="%" />`}
      />

      <DocsComponent
        props={["type: 'semicircle' | 'radial'"]}
        title="Variants"
        description="Choose between a semicircle (180-degree sweep) or a radial gauge (240-degree sweep)."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Gauge value={75} type="semicircle" label="Semicircle" unit="%" />
            <Gauge value={75} type="radial" label="Radial" unit="%" />
          </div>
        }
        code={`<Gauge value={75} type="semicircle" label="Semicircle" />
<Gauge value={75} type="radial" label="Radial" />`}
      />

      <DocsComponent
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
        title="Colors"
        description="Choose from theme-aligned brand and status alert colors."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Gauge value={80} color="primary" label="Primary" />
            <Gauge value={70} color="secondary" label="Secondary" />
            <Gauge value={60} color="accent" label="Accent" />
            <Gauge value={90} color="success" label="Success" />
            <Gauge value={45} color="warning" label="Warning" />
            <Gauge value={15} color="danger" label="Danger" />
            <Gauge value={50} color="default" label="Default" />
          </div>
        }
        code={`<Gauge value={80} color="primary" />
<Gauge value={70} color="secondary" />
<Gauge value={60} color="accent" />
<Gauge value={90} color="success" />
<Gauge value={45} color="warning" />
<Gauge value={15} color="danger" />
<Gauge value={50} color="default" />`}
      />

      <DocsComponent
        props={["size: 'sm' | 'md' | 'lg'"]}
        title="Sizes"
        description="Choose from small, medium, and large gauge dimensions."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Gauge value={50} size="sm" label="Small" />
            <Gauge value={50} size="md" label="Medium" />
            <Gauge value={50} size="lg" label="Large" />
          </div>
        }
        code={`<Gauge value={50} size="sm" />
<Gauge value={50} size="md" />
<Gauge value={50} size="lg" />`}
      />

      <DocsComponent
        props={["min: number", "max: number"]}
        title="Custom Ranges"
        description="Set custom min and max bounds for tracking speeds, temperatures, or custom metrics."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Gauge
              value={180}
              min={0}
              max={240}
              type="radial"
              label="Speedometer"
              unit="km/h"
            />
            <Gauge
              value={36.5}
              min={35}
              max={42}
              type="semicircle"
              label="Body Temp"
              unit="°C"
            />
          </div>
        }
        code={`<Gauge
  value={180}
  min={0}
  max={240}
  type="radial"
  label="Speedometer"
  unit="km/h"
/>
<Gauge
  value={36.5}
  min={35}
  max={42}
  type="semicircle"
  label="Body Temp"
  unit="°C"
/>`}
      />

      <DocsComponent
        props={["showTicks: boolean", "numTicks: number"]}
        title="Ticked Scales"
        description="Add ticks along the sweep arc to represent gauge sub-divisions or meter scale markers."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Gauge value={40} showTicks label="Standard Ticks" />
            <Gauge
              value={75}
              showTicks
              numTicks={13}
              type="radial"
              label="Detailed Ticks"
            />
          </div>
        }
        code={`<Gauge value={40} showTicks />
<Gauge value={75} showTicks numTicks={13} type="radial" />`}
      />

      <DocsComponent
        props={["showGradient: boolean", "gradientColors: string[]"]}
        title="Gradient Arc Tracker"
        description="Fill the active value arc with a smooth colorful gradient. Supports setting custom hex colors arrays to customize dashboard safety zones."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Gauge value={85} showGradient label="Standard Spectrum" />
            <Gauge
              value={65}
              showGradient
              gradientColors={["#06b6d4", "#3b82f6"]}
              label="Custom Dual Hex"
            />
          </div>
        }
        code={`<Gauge value={85} showGradient />
<Gauge value={65} showGradient gradientColors={["#06b6d4", "#3b82f6"]} />`}
      />

      <DocsComponent
        props={[
          "variant: 'solid' | 'dashes'",
          "numDashes: number",
          "gradientColors: string[]",
        ]}
        title="Dashes / LED Bar Style"
        description="Render the indicator track using discrete segment dashes/bars. You can customize the active segments to use custom gradient colors."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Gauge value={86} variant="dashes" label="Led Semicircle" />
            <Gauge
              value={70}
              variant="dashes"
              type="radial"
              showGradient
              gradientColors={["#ec4899", "#8b5cf6"]}
              label="Led Custom Colors"
            />
          </div>
        }
        code={`<Gauge value={86} variant="dashes" />
<Gauge value={70} variant="dashes" type="radial" showGradient gradientColors={["#ec4899", "#8b5cf6"]} />`}
      />

      <DocsComponent
        props={[
          "showTickLabels: boolean",
          "tickStep: number",
          "tickValues: number[]",
        ]}
        title="Scale Numbering / Labels"
        description="Print coordinate text values directly alongside the tick markers. Custom ranges can be mapped using 'tickStep' or an explicit 'tickValues' array."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Gauge
              value={40}
              showTicks
              showTickLabels
              tickStep={20}
              label="Step-based Scale"
            />
            <Gauge
              value={75}
              showTicks
              showTickLabels
              tickValues={[0, 25, 50, 75, 100]}
              type="radial"
              label="Explicit Ticks array"
            />
          </div>
        }
        code={`<Gauge value={40} showTicks showTickLabels tickStep={20} />
<Gauge value={75} showTicks showTickLabels tickValues={[0, 25, 50, 75, 100]} type="radial" />`}
      />

      <DocsComponent
        title="Props — Gauge"
        description="Properties to configure the Gauge component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-250 dark:border-zinc-800">
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-800 dark:text-zinc-300">
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    value
                  </td>
                  <td className="px-3 py-2 text-xs">number</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">0</td>
                  <td className="px-3 py-2">
                    The current value level of the gauge.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    min
                  </td>
                  <td className="px-3 py-2 text-xs">number</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">0</td>
                  <td className="px-3 py-2">The minimum boundary limits.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    max
                  </td>
                  <td className="px-3 py-2 text-xs">number</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">100</td>
                  <td className="px-3 py-2">The maximum boundary limits.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    size
                  </td>
                  <td className="px-3 py-2 text-xs">'sm' | 'md' | 'lg'</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">'md'</td>
                  <td className="px-3 py-2">
                    Visual dimensions of the component.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    color
                  </td>
                  <td className="px-3 py-2 text-xs">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' |
                    'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-xs text-zinc-400">'primary'</td>
                  <td className="px-3 py-2">
                    Visual brand or alert stroke color option.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    type
                  </td>
                  <td className="px-3 py-2 text-xs">'semicircle' | 'radial'</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">
                    'semicircle'
                  </td>
                  <td className="px-3 py-2">
                    The sweep layout mode (180° vs 240°).
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    variant
                  </td>
                  <td className="px-3 py-2 text-xs">'solid' | 'dashes'</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">'solid'</td>
                  <td className="px-3 py-2">
                    Visual indicator style configuration.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    label
                  </td>
                  <td className="px-3 py-2 text-xs">ReactNode</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">undefined</td>
                  <td className="px-3 py-2">
                    Central display label under the value.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    unit
                  </td>
                  <td className="px-3 py-2 text-xs">string</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">""</td>
                  <td className="px-3 py-2">
                    Measurement unit tag next to the value.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    showTicks
                  </td>
                  <td className="px-3 py-2 text-xs">boolean</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">false</td>
                  <td className="px-3 py-2">
                    Renders tick line indicators along the arc.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    showTickLabels
                  </td>
                  <td className="px-3 py-2 text-xs">boolean</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">false</td>
                  <td className="px-3 py-2">
                    Renders tick scale text labels next to the ticks.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    showGradient
                  </td>
                  <td className="px-3 py-2 text-xs">boolean</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">false</td>
                  <td className="px-3 py-2">
                    Uses a multi-color gradient sequence for the active value
                    tracker.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    gradientColors
                  </td>
                  <td className="px-3 py-2 text-xs">string[]</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">
                    ['#10b981', '#f59e0b', '#ef4444']
                  </td>
                  <td className="px-3 py-2">
                    Array of custom color hex values representing the gradient
                    spectrum.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    numTicks
                  </td>
                  <td className="px-3 py-2 text-xs">number</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">9</td>
                  <td className="px-3 py-2">
                    Number of graduation tick lines to render (fallback when
                    tickStep or tickValues are omitted).
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    numDashes
                  </td>
                  <td className="px-3 py-2 text-xs">number</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">25</td>
                  <td className="px-3 py-2">
                    Number of segment dashes to render in 'dashes' mode.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    tickStep
                  </td>
                  <td className="px-3 py-2 text-xs">number</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">undefined</td>
                  <td className="px-3 py-2">
                    Custom scale interval step value (e.g. 20) for tick numbers
                    generation.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-xs text-sky-500">
                    tickValues
                  </td>
                  <td className="px-3 py-2 text-xs">number[]</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">undefined</td>
                  <td className="px-3 py-2">
                    Explicit array of numbers to generate custom tick marks and
                    labels at specific coordinates.
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
