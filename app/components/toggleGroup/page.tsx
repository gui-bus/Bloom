"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggleGroup/toggleGroup";
import { toggleGroupCode } from "@/components/ui/toggleGroup/toggleGroup.code";

export default function ToggleGroupComponentPage() {
  const [align, setAlign] = React.useState("left");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Toggle Group"
        description="A group of two-state toggle buttons used for single-choice segmented selection or multi-choice formatting toolbars."
      />

      <ImportSnippet
        importCode={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggleGroup/toggleGroup";`}
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
  <ToggleGroupItem value="left">
    <Icon icon="hugeicons:text-align-left" className="size-4" />
    <span>Left</span>
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <Icon icon="hugeicons:text-align-center" className="size-4" />
    <span>Center</span>
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <Icon icon="hugeicons:text-align-right" className="size-4" />
    <span>Right</span>
  </ToggleGroupItem>
</ToggleGroup>`}
      />

      <DocsComponent
        props={["variant: 'default' | 'bordered' | 'flat'"]}
        title="Variants"
        description="Choose from default styling, bordered outline borders, or flat background segments."
        preview={
          <div className="flex flex-col gap-4">
            <ToggleGroup type="single" variant="default" defaultValue="a">
              <ToggleGroupItem value="a">Default A</ToggleGroupItem>
              <ToggleGroupItem value="b">Default B</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" variant="bordered" defaultValue="a">
              <ToggleGroupItem value="a">Bordered A</ToggleGroupItem>
              <ToggleGroupItem value="b">Bordered B</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" variant="flat" defaultValue="a">
              <ToggleGroupItem value="a">Flat A</ToggleGroupItem>
              <ToggleGroupItem value="b">Flat B</ToggleGroupItem>
            </ToggleGroup>
          </div>
        }
        code={`<ToggleGroup type="single" variant="default" defaultValue="a">
  <ToggleGroupItem value="a">Default A</ToggleGroupItem>
  <ToggleGroupItem value="b">Default B</ToggleGroupItem>
</ToggleGroup>`}
      />

      <DocsComponent
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
        title="Colors"
        description="Apply custom active theme colors across all selected segments."
        preview={
          <div className="flex flex-col gap-4 items-start">
            <ToggleGroup type="single" color="default" defaultValue="a">
              <ToggleGroupItem value="a">Default Color</ToggleGroupItem>
              <ToggleGroupItem value="b">Option B</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" color="primary" defaultValue="a">
              <ToggleGroupItem value="a">Primary</ToggleGroupItem>
              <ToggleGroupItem value="b">Option B</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" color="success" defaultValue="a">
              <ToggleGroupItem value="a">Success</ToggleGroupItem>
              <ToggleGroupItem value="b">Option B</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" color="danger" defaultValue="a">
              <ToggleGroupItem value="a">Danger</ToggleGroupItem>
              <ToggleGroupItem value="b">Option B</ToggleGroupItem>
            </ToggleGroup>
          </div>
        }
        code={`<ToggleGroup type="single" color="primary" defaultValue="a">
  <ToggleGroupItem value="a">Primary</ToggleGroupItem>
  <ToggleGroupItem value="b">Option B</ToggleGroupItem>
</ToggleGroup>`}
      />

      <DocsComponent
        props={["size: 'sm' | 'md' | 'lg'"]}
        title="Sizes"
        description="Scale toggle group button dimensions: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-4 items-start">
            <ToggleGroup type="single" size="sm" defaultValue="grid">
              <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
              <ToggleGroupItem value="list">List View</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" size="md" defaultValue="grid">
              <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
              <ToggleGroupItem value="list">List View</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" size="lg" defaultValue="grid">
              <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
              <ToggleGroupItem value="list">List View</ToggleGroupItem>
            </ToggleGroup>
          </div>
        }
        code={`<ToggleGroup type="single" size="sm" defaultValue="grid">
  <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
  <ToggleGroupItem value="list">List View</ToggleGroupItem>
</ToggleGroup>`}
      />

      <DocsComponent
        props={[
          "radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
        ]}
        title="Radius"
        description="Alter the border radius of the toggle group outer container."
        preview={
          <div className="flex flex-col gap-4 items-start">
            <ToggleGroup type="single" radius="none" defaultValue="grid">
              <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
              <ToggleGroupItem value="list">List View</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" radius="lg" defaultValue="grid">
              <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
              <ToggleGroupItem value="list">List View</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" radius="full" defaultValue="grid">
              <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
              <ToggleGroupItem value="list">List View</ToggleGroupItem>
            </ToggleGroup>
          </div>
        }
        code={`<ToggleGroup type="single" radius="none" defaultValue="grid">
  <ToggleGroupItem value="grid">Grid View</ToggleGroupItem>
</ToggleGroup>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
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
                variant
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'default' | 'bordered' | 'flat'
              </td>
              <td className="px-4 py-3 text-zinc-400">'default'</td>
              <td className="px-4 py-3">Visual layout style of items.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                color
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'default' | 'primary' | 'secondary' | 'accent' | 'success' |
                'warning' | 'danger'
              </td>
              <td className="px-4 py-3 text-zinc-400">'default'</td>
              <td className="px-4 py-3">Active segments color highlights.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">size</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'sm' | 'md' | 'lg'
              </td>
              <td className="px-4 py-3 text-zinc-400">'md'</td>
              <td className="px-4 py-3">Segment dimensions sizing.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                radius
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |
                'full'
              </td>
              <td className="px-4 py-3 text-zinc-400">'2xl'</td>
              <td className="px-4 py-3">
                Rounding border corners on the group container.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
