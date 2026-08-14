"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggleGroup/toggleGroup";
import { toggleGroupCode } from "@/components/ui/toggleGroup/toggleGroup.code";

export default function ToggleGroupComponentPage() {
  const [align, setAlign] = React.useState("left");
  const [format, setFormat] = React.useState(["bold"]);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Toggle Group"
        description="A group of two-state toggle buttons used for single-choice segmented selection or multi-choice formatting toolbars."
      />

      <ImportSnippet
        importCode={`import { ToggleGroup } from "@/components/ui/toggleGroup/toggleGroup";`}
      />

      <InstallationBlock componentName="toggleGroup" />

      <CodeBlock
        code={toggleGroupCode}
        componentName="toggleGroup.tsx"
        description="Core implementation of the ToggleGroup component."
        tags={["React", "Radix UI", "ToggleGroup", "SegmentedControl"]}
      />

      <DocsComponent
        title="Default"
        description="Single-selection segmented toggle group."
        preview={
          <div className="flex flex-col gap-3">
            <ToggleGroup
              type="single"
              value={align}
              onValueChange={(val) => val && setAlign(val)}
            >
              <ToggleGroupItem value="left" aria-label="Align left">
                <Icon icon="hugeicons:text-align-left" className="size-4" />
                <span>Left</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <Icon icon="hugeicons:text-align-center" className="size-4" />
                <span>Center</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <Icon icon="hugeicons:text-align-right" className="size-4" />
                <span>Right</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        }
        code={`const [align, setAlign] = React.useState("left");

<ToggleGroup type="single" value={align} onValueChange={(val) => val && setAlign(val)}>
  <ToggleGroupItem value="left"><Icon icon="hugeicons:text-align-left" className="size-4" /> Left</ToggleGroupItem>
  <ToggleGroupItem value="center"><Icon icon="hugeicons:text-align-center" className="size-4" /> Center</ToggleGroupItem>
  <ToggleGroupItem value="right"><Icon icon="hugeicons:text-align-right" className="size-4" /> Right</ToggleGroupItem>
</ToggleGroup>`}
      />

      <DocsComponent
        title="Sizes"
        description="Scale toggle group button dimensions: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-4 items-start">
            <div>
              <p className="text-xs font-semibold text-zinc-500 mb-2">
                Small Size (sm)
              </p>
              <ToggleGroup type="single" size="sm" defaultValue="grid">
                <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
                <ToggleGroupItem value="list">List View</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-500 mb-2">
                Medium Size (md)
              </p>
              <ToggleGroup type="single" size="md" defaultValue="grid">
                <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
                <ToggleGroupItem value="list">List View</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-500 mb-2">
                Large Size (lg)
              </p>
              <ToggleGroup type="single" size="lg" defaultValue="grid">
                <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
                <ToggleGroupItem value="list">List View</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        }
        code={`<ToggleGroup type="single" size="sm" defaultValue="grid">...</ToggleGroup>
<ToggleGroup type="single" size="md" defaultValue="grid">...</ToggleGroup>
<ToggleGroup type="single" size="lg" defaultValue="grid">...</ToggleGroup>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="Variants (Default, Outline, Flat)"
        description="Visual button style variants: 'default', 'outline', or 'flat'."
        preview={
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-semibold text-zinc-500 mb-2">
                Default Variant
              </p>
              <ToggleGroup type="single" variant="default" defaultValue="day">
                <ToggleGroupItem value="day">Day</ToggleGroupItem>
                <ToggleGroupItem value="week">Week</ToggleGroupItem>
                <ToggleGroupItem value="month">Month</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-500 mb-2">
                Outline Variant
              </p>
              <ToggleGroup type="single" variant="outline" defaultValue="week">
                <ToggleGroupItem value="day">Day</ToggleGroupItem>
                <ToggleGroupItem value="week">Week</ToggleGroupItem>
                <ToggleGroupItem value="month">Month</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-500 mb-2">
                Flat Variant
              </p>
              <ToggleGroup type="single" variant="flat" defaultValue="month">
                <ToggleGroupItem value="day">Day</ToggleGroupItem>
                <ToggleGroupItem value="week">Week</ToggleGroupItem>
                <ToggleGroupItem value="month">Month</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        }
        code={`<ToggleGroup type="single" variant="default" defaultValue="day">...</ToggleGroup>
<ToggleGroup type="single" variant="outline" defaultValue="week">...</ToggleGroup>
<ToggleGroup type="single" variant="flat" defaultValue="month">...</ToggleGroup>`}
        props={["variant: 'default' | 'outline' | 'flat'"]}
      />

      <DocsComponent
        title="Multiple Selection Mode"
        description="Allow users to select multiple active toggle items simultaneously."
        preview={
          <div className="flex flex-col gap-3">
            <ToggleGroup
              type="multiple"
              value={format}
              onValueChange={setFormat}
            >
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Icon icon="hugeicons:text-bold" className="size-4" />
                <span>Bold</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Icon icon="hugeicons:text-italic" className="size-4" />
                <span>Italic</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Icon icon="hugeicons:text-underline" className="size-4" />
                <span>Underline</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        }
        code={`const [format, setFormat] = React.useState(["bold"]);

<ToggleGroup type="multiple" value={format} onValueChange={setFormat}>
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
</ToggleGroup>`}
        props={["type: 'single' | 'multiple'"]}
      />

      <DocsComponent
        title="Props — ToggleGroup"
        description="Supported properties for ToggleGroup."
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
                    'single' | 'multiple'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'single'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Selection mode constraint (single vs multiple).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    value / defaultValue
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string | string[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Controlled / uncontrolled active selected value(s).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'outline' | 'flat'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual style applied across all group items.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Dimensions scale of group toggle items.
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
