"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Slider } from "@/components/ui/slider/slider";
import { sliderCode } from "@/components/ui/slider/slider.code";

export default function SliderComponentPage() {
  const [val1, setVal1] = React.useState([45]);
  const [val2, setVal2] = React.useState([60]);
  const [colorVal, setColorVal] = React.useState([50]);
  const [multiVal, setMultiVal] = React.useState([15, 50, 85]);
  const [histogramVal, setHistogramVal] = React.useState([30, 70]);

  const sampleHistogram = [5, 12, 28, 45, 80, 95, 60, 40, 25, 15, 8, 3];

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Slider"
        description="An interactive range slider component supporting multi-thumb controls, graduated marks, floating hover tooltips, and frequency histogram charts."
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
        title="Default"
        description="Standard single value slider track."
        preview={
          <div className="max-w-md w-full">
            <Slider
              label="Sensitivity Level"
              showValue
              value={val1}
              onValueChange={setVal1}
              formatValue={(v) => `${v[0]}`}
            />
          </div>
        }
        code={`const [val, setVal] = React.useState([45]);

<Slider label="Sensitivity Level" showValue value={val} onValueChange={setVal} />`}
      />

      <DocsComponent
        title="Colors"
        description="Style active range fill with theme alert colors: primary, success, warning, danger, and default."
        preview={
          <div className="max-w-md w-full space-y-5">
            <Slider
              color="primary"
              label="Primary"
              value={colorVal}
              onValueChange={setColorVal}
            />
            <Slider
              color="success"
              label="Success"
              value={colorVal}
              onValueChange={setColorVal}
            />
            <Slider
              color="warning"
              label="Warning"
              value={colorVal}
              onValueChange={setColorVal}
            />
            <Slider
              color="danger"
              label="Danger"
              value={colorVal}
              onValueChange={setColorVal}
            />
            <Slider
              color="default"
              label="Default"
              value={colorVal}
              onValueChange={setColorVal}
            />
          </div>
        }
        code={`<Slider color="primary" defaultValue={[50]} />
<Slider color="success" defaultValue={[50]} />
<Slider color="warning" defaultValue={[50]} />
<Slider color="danger" defaultValue={[50]} />
<Slider color="default" defaultValue={[50]} />`}
        props={[
          "color: 'primary' | 'success' | 'warning' | 'danger' | 'default'",
        ]}
      />

      <DocsComponent
        title="Single Thumb with Tooltip"
        description="Standard single value slider with floating hover tooltip."
        preview={
          <div className="max-w-md w-full">
            <Slider
              label="Volume Level"
              showValue
              showTooltip
              value={val2}
              onValueChange={setVal2}
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
        title="Multi-Thumb Range"
        description="Pass an array of multiple values to render multi-thumb controls."
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
        props={["value: number[]"]}
      />

      <DocsComponent
        title="Histogram Chart Mode"
        description="Render a background frequency distribution chart above the slider track with live range highlight."
        preview={
          <div className="max-w-md w-full pt-4">
            <Slider
              label="Nightly Price Filter"
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
              label="Temperature Range"
              min={0}
              max={100}
              step={10}
              defaultValue={[30]}
              marks={[
                { value: 0, label: "0°C" },
                { value: 25, label: "25°C" },
                { value: 50, label: "50°C" },
                { value: 75, label: "75°C" },
                { value: 100, label: "100°C" },
              ]}
            />
          </div>
        }
        code={`<Slider
  label="Temperature Range"
  min={0}
  max={100}
  step={10}
  defaultValue={[30]}
  marks={[
    { value: 0, label: "0°C" },
    { value: 25, label: "25°C" },
    { value: 50, label: "50°C" },
    { value: 75, label: "75°C" },
    { value: 100, label: "100°C" }
  ]}
/>`}
        props={["marks: SliderMark[]"]}
      />

      <DocsComponent
        title="Props — Slider"
        description="Supported properties for the Slider component."
        preview={
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    color
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    'default' | 'primary' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-4 py-3 text-zinc-400">'primary'</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Background fill track and thumb border color theme.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    size
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-4 py-3 text-zinc-400">'md'</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Dimension height for track and width for thumb.
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
