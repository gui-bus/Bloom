"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import { Slider } from "@/components/ui/slider/slider";
import { sliderCode } from "@/components/ui/slider/slider.code";

export default function SliderComponentPage() {
  const [val1, setVal1] = React.useState([45]);
  const [multiVal, setMultiVal] = React.useState([15, 50, 85]);
  const [histogramVal, setHistogramVal] = React.useState([30, 70]);

  const sampleHistogram = [5, 12, 28, 45, 80, 95, 60, 40, 25, 15, 8, 3];

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Slider"
        description="An interactive range slider component supporting multi-thumb controls, graduated marks, floating hover tooltips, and Airbnb-style frequency histogram charts."
      />

      <ImportSnippet
        importCode={`import { Slider } from "@/components/ui/slider/slider";`}
      />

      <InstallationBlock componentName="slider" />

      <CodeBlock
        code={sliderCode}
        componentName="slider.tsx"
        description="Core implementation of the Slider component."
        tags={["React", "Radix UI", "Slider", "Form", "Histogram"]}
      />

      <DocsComponent
        title="Single Thumb & Floating Tooltip"
        description="Standard single value slider with floating hover tooltip ('showTooltip')."
        preview={
          <div className="max-w-md w-full">
            <Slider
              label="Volume Level"
              showValue
              showTooltip
              value={val1}
              onValueChange={setVal1}
              formatTooltip={(v) => `${v}%`}
              formatValue={(v) => `${v[0]}%`}
            />
          </div>
        }
        code={`<Slider label="Volume Level" showValue showTooltip value={val} onValueChange={setVal} formatTooltip={(v) => \`\${v}%\`} />`}
        props={[
          "showTooltip: boolean",
          "formatTooltip: (val: number) => string",
        ]}
      />

      <DocsComponent
        title="Multi-Thumb Range (3+ Thumbs)"
        description="Pass an array of multiple values (e.g., [15, 50, 85]) to render multi-thumb controls."
        preview={
          <div className="max-w-md w-full">
            <Slider
              label="Multi-Zone Bandwidth Control"
              showValue
              showTooltip
              value={multiVal}
              onValueChange={setMultiVal}
              formatValue={(v) => v.join(" | ")}
            />
          </div>
        }
        code={`const [multiVal, setMultiVal] = React.useState([15, 50, 85]);

<Slider label="Multi-Zone" showValue showTooltip value={multiVal} onValueChange={setMultiVal} />`}
        props={["value: number[] (e.g. [15, 50, 85])"]}
      />

      <DocsComponent
        title="Histogram Chart Mode (Airbnb Style)"
        description="Render a background frequency distribution chart above the slider track with live range highlight."
        preview={
          <div className="max-w-md w-full pt-4">
            <Slider
              label="Nightly Price Filter ($)"
              showValue
              showTooltip
              histogramData={sampleHistogram}
              value={histogramVal}
              onValueChange={setHistogramVal}
              formatValue={(v) => `$${v[0]} — $${v[1]}`}
              formatTooltip={(v) => `$${v}`}
            />
          </div>
        }
        code={`const [range, setRange] = React.useState([30, 70]);
const sampleHistogram = [5, 12, 28, 45, 80, 95, 60, 40, 25, 15, 8, 3];

<Slider
  label="Nightly Price Filter"
  showValue
  showTooltip
  histogramData={sampleHistogram}
  value={range}
  onValueChange={setRange}
  formatValue={(v) => \`$\${v[0]} — $\${v[1]}\`}
/>`}
        props={["histogramData: number[]", "histogramHeight?: number"]}
      />

      <DocsComponent
        title="Graduated Marks & Ticks"
        description="Add step markers along the track with label text."
        preview={
          <div className="max-w-md w-full">
            <Slider
              label="System Memory (GB)"
              defaultValue={[8]}
              min={0}
              max={32}
              step={8}
              showTooltip
              marks={[
                { value: 0, label: "0 GB" },
                { value: 8, label: "8 GB" },
                { value: 16, label: "16 GB" },
                { value: 24, label: "24 GB" },
                { value: 32, label: "32 GB" },
              ]}
            />
          </div>
        }
        code={`<Slider
  label="System Memory"
  step={8}
  showTooltip
  marks={[
    { value: 0, label: "0 GB" },
    { value: 16, label: "16 GB" },
    { value: 32, label: "32 GB" },
  ]}
/>`}
        props={["marks: Array<{ value: number, label?: string }>"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Slider"
        description="Supported properties for Slider."
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
                    value / defaultValue
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[0]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of values supporting single thumb, range dual thumbs,
                    or multi-thumbs (3+).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showTooltip
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays a floating tooltip above each thumb on hover.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    histogramData
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Frequency data array to render an Airbnb-style background
                    histogram chart.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">marks</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    SliderMark[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Graduated step markers and labels along the track.
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
