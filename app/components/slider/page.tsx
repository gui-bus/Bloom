"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Slider } from "@/components/ui/slider/slider";
import { sliderCode } from "@/components/ui/slider/slider.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SliderComponentPage() {
  const [val1, setVal1] = React.useState([45]);
  const [rangeVal, setRangeVal] = React.useState([20, 80]);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Slider"
        description="An interactive range slider input allowing users to select single values or range spans with marks, tooltips, and custom formatting."
      />

      <ImportSnippet importCode={`import { Slider } from "@/components/ui/slider/slider";`} />

      <InstallationBlock componentName="slider" />

      <Tabs defaultValue="slider">
        <TabsList background={false}>
          <TabsTrigger
            value="slider"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            slider.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="slider">
          <CodeBlock
            code={sliderCode}
            componentName="slider.tsx"
            description="Core implementation of the Slider component."
            tags={["React", "Radix UI", "Slider", "Form"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard single value slider."
        preview={
          <div className="max-w-md w-full">
            <Slider
              label="Volume Level"
              showValue
              value={val1}
              onValueChange={setVal1}
              formatValue={(v) => `${v[0]}%`}
            />
          </div>
        }
        code={`const [val, setVal] = React.useState([45]);

<Slider label="Volume Level" showValue value={val} onValueChange={setVal} formatValue={(v) => \`\${v[0]}%\`} />`}
      />

      {/* Range Dual Thumbs */}
      <DocsComponent
        title="Range Dual Thumbs"
        description="Select a minimum and maximum range span with two thumbs."
        preview={
          <div className="max-w-md w-full">
            <Slider
              label="Price Range Filter"
              showValue
              value={rangeVal}
              onValueChange={setRangeVal}
              formatValue={(v) => `$${v[0]} — $${v[1]}`}
            />
          </div>
        }
        code={`const [range, setRange] = React.useState([20, 80]);

<Slider label="Price Range" showValue value={range} onValueChange={setRange} formatValue={(v) => \`$\${v[0]} — $\${v[1]}\`} />`}
      />

      {/* Slider Marks */}
      <DocsComponent
        title="Slider Marks & Ticks"
        description="Add step markers along the track with label text."
        preview={
          <div className="max-w-md w-full">
            <Slider
              label="System Memory (GB)"
              defaultValue={[8]}
              min={0}
              max={32}
              step={8}
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
  marks={[
    { value: 0, label: "0 GB" },
    { value: 16, label: "16 GB" },
    { value: 32, label: "32 GB" },
  ]}
/>`}
        props={["marks: Array<{ value: number, label?: string }>"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Slider"
        description="Supported properties for Slider."
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
                  <td className="px-3 py-2 font-mono text-primary">value / defaultValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number[]</td>
                  <td className="px-3 py-2 text-muted-foreground">[0]</td>
                  <td className="px-3 py-2 text-muted-foreground">Array of values for single thumb or range thumbs.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Displays formatted numeric value in header label.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">Active track and thumb highlight color variant.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Track and thumb size scale.</td>
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
