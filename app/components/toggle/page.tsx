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
import { Toggle } from "@/components/ui/toggle/toggle";
import { toggleCode } from "@/components/ui/toggle/toggle.code";

export default function ToggleComponentPage() {
  const [isBold, setIsBold] = React.useState(true);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Toggle"
        description="A two-state button component that can be toggled on or off for formatting controls, filters, and feature toggles."
      />

      <ImportSnippet
        importCode={`import { Toggle } from "@/components/ui/toggle/toggle";`}
      />

      <InstallationBlock componentName="toggle" />

      <CodeBlock
        code={toggleCode}
        componentName="toggle.tsx"
        description="Core implementation of the Toggle component."
        tags={["React", "Radix UI", "Toggle", "Button"]}
      />

      <DocsComponent
        title="Default"
        description="Standard pressable toggle button."
        preview={
          <div className="flex items-center gap-4">
            <Toggle
              aria-label="Toggle bold"
              pressed={isBold}
              onPressedChange={setIsBold}
            >
              <Icon icon="hugeicons:text-bold" className="size-4" />
              <span>Bold</span>
            </Toggle>
          </div>
        }
        code={`const [isBold, setIsBold] = React.useState(true);

<Toggle aria-label="Toggle bold" pressed={isBold} onPressedChange={setIsBold}>
  <Icon icon="hugeicons:text-bold" className="size-4" />
  <span>Bold</span>
</Toggle>`}
      />

      <DocsComponent
        props={["variant: 'default' | 'bordered' | 'flat'"]}
        title="Variants"
        description="Choose from default styling, thin borders, or flat background presets."
        preview={
          <div className="flex flex-wrap gap-4">
            <Toggle variant="default" defaultPressed>
              <Icon icon="hugeicons:text-bold" className="size-4" />
              <span>Default</span>
            </Toggle>
            <Toggle variant="bordered" defaultPressed>
              <Icon icon="hugeicons:text-italic" className="size-4" />
              <span>Bordered</span>
            </Toggle>
            <Toggle variant="flat" defaultPressed>
              <Icon icon="hugeicons:text-underline" className="size-4" />
              <span>Flat</span>
            </Toggle>
          </div>
        }
        code={`<Toggle variant="default" defaultPressed>Default</Toggle>
<Toggle variant="bordered" defaultPressed>Bordered</Toggle>
<Toggle variant="flat" defaultPressed>Flat</Toggle>`}
      />

      <DocsComponent
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
        title="Colors"
        description="Standard color highlights matching the design system colors palette."
        preview={
          <div className="flex flex-wrap items-center gap-3">
            <Toggle color="default" defaultPressed>
              Default
            </Toggle>
            <Toggle color="primary" defaultPressed>
              Primary
            </Toggle>
            <Toggle color="secondary" defaultPressed>
              Secondary
            </Toggle>
            <Toggle color="accent" defaultPressed>
              Accent
            </Toggle>
            <Toggle color="success" defaultPressed>
              Success
            </Toggle>
            <Toggle color="warning" defaultPressed>
              Warning
            </Toggle>
            <Toggle color="danger" defaultPressed>
              Danger
            </Toggle>
          </div>
        }
        code={`<Toggle color="default" defaultPressed>Default</Toggle>
<Toggle color="primary" defaultPressed>Primary</Toggle>
<Toggle color="secondary" defaultPressed>Secondary</Toggle>
<Toggle color="accent" defaultPressed>Accent</Toggle>
<Toggle color="success" defaultPressed>Success</Toggle>
<Toggle color="warning" defaultPressed>Warning</Toggle>
<Toggle color="danger" defaultPressed>Danger</Toggle>`}
      />

      <DocsComponent
        props={["size: 'sm' | 'md' | 'lg'"]}
        title="Sizes"
        description="Scale toggle dimensions: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Toggle size="sm" defaultPressed>
              Small
            </Toggle>
            <Toggle size="md" defaultPressed>
              Medium
            </Toggle>
            <Toggle size="lg" defaultPressed>
              Large
            </Toggle>
          </div>
        }
        code={`<Toggle size="sm" defaultPressed>Small</Toggle>
<Toggle size="md" defaultPressed>Medium</Toggle>
<Toggle size="lg" defaultPressed>Large</Toggle>`}
      />

      <DocsComponent
        props={[
          "radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
        ]}
        title="Radius"
        description="Apply custom border-radius rounding from completely square to circular pill corners."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Toggle radius="none" defaultPressed>
              None
            </Toggle>
            <Toggle radius="md" defaultPressed>
              Medium
            </Toggle>
            <Toggle radius="xl" defaultPressed>
              Extra Large
            </Toggle>
            <Toggle radius="full" defaultPressed>
              Full
            </Toggle>
          </div>
        }
        code={`<Toggle radius="none" defaultPressed>None</Toggle>
<Toggle radius="md" defaultPressed>Medium</Toggle>
<Toggle radius="xl" defaultPressed>Extra Large</Toggle>
<Toggle radius="full" defaultPressed>Full</Toggle>`}
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
              <td className="px-4 py-3">Visual layout style.</td>
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
              <td className="px-4 py-3">State active color accent theme.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">size</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'sm' | 'md' | 'lg'
              </td>
              <td className="px-4 py-3 text-zinc-400">'md'</td>
              <td className="px-4 py-3">Toggle height dimensions.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                radius
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |
                'full'
              </td>
              <td className="px-4 py-3 text-zinc-400">'lg'</td>
              <td className="px-4 py-3">Rounding border corners.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
