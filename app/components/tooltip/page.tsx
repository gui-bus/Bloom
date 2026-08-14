"use client";

import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";
import { tooltipCode } from "@/components/ui/tooltip/tooltip.code";

export default function TooltipComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Tooltip"
        description="A popup hint label displaying contextual text when hovering or focusing an interactive element."
      />

      <ImportSnippet
        importCode={`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip/tooltip";`}
      />

      <InstallationBlock componentName="tooltip" />

      <CodeBlock
        code={tooltipCode}
        componentName="tooltip.tsx"
        description="Core implementation of the Tooltip component."
        tags={["React", "Radix UI", "Tooltip", "Popover"]}
      />

      <DocsComponent
        title="Default"
        description="Standard tooltip hint on hover."
        preview={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="default" variant="flat">
                  Hover Me
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Add project to favorites</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button color="default" variant="flat">Hover Me</Button>
    </TooltipTrigger>
    <TooltipContent>Add project to favorites</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      />

      <DocsComponent
        props={["variant: 'default' | 'bordered' | 'flat'"]}
        title="Variants"
        description="Choose between default solid backgrounds, bordered outline cards, or flat translucent styles."
        preview={
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Default Variant
                  </Button>
                </TooltipTrigger>
                <TooltipContent variant="default">
                  Solid dark layout theme.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Bordered Variant
                  </Button>
                </TooltipTrigger>
                <TooltipContent variant="bordered">
                  Thick colored outline layout.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Flat Variant
                  </Button>
                </TooltipTrigger>
                <TooltipContent variant="flat">
                  Soft translucent design.
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        }
        code={`<TooltipContent variant="default">Solid Layout</TooltipContent>
<TooltipContent variant="bordered">Bordered Layout</TooltipContent>
<TooltipContent variant="flat">Flat Layout</TooltipContent>`}
      />

      <DocsComponent
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
        title="Colors"
        description="Apply theme colors to match the design system color scheme."
        preview={
          <TooltipProvider>
            <div className="flex flex-wrap gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Default Color
                  </Button>
                </TooltipTrigger>
                <TooltipContent color="default">
                  Default zinc layout
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Primary
                  </Button>
                </TooltipTrigger>
                <TooltipContent color="primary">
                  Primary color theme
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Secondary
                  </Button>
                </TooltipTrigger>
                <TooltipContent color="secondary">
                  Secondary color highlight
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Accent
                  </Button>
                </TooltipTrigger>
                <TooltipContent color="accent">
                  Accent color highlight
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Success
                  </Button>
                </TooltipTrigger>
                <TooltipContent color="success">
                  Task completed successfully
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Warning
                  </Button>
                </TooltipTrigger>
                <TooltipContent color="warning">
                  Warning status notification
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Danger
                  </Button>
                </TooltipTrigger>
                <TooltipContent color="danger">
                  Failed validation rules
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        }
        code={`<TooltipContent color="default">Default</TooltipContent>
<TooltipContent color="primary">Primary</TooltipContent>
<TooltipContent color="secondary">Secondary</TooltipContent>
<TooltipContent color="accent">Accent</TooltipContent>
<TooltipContent color="success">Success</TooltipContent>
<TooltipContent color="warning">Warning</TooltipContent>
<TooltipContent color="danger">Danger</TooltipContent>`}
      />

      <DocsComponent
        props={["size: 'sm' | 'md' | 'lg'"]}
        title="Sizes"
        description="Toggle different height and padding values for tooltips."
        preview={
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Small Size
                  </Button>
                </TooltipTrigger>
                <TooltipContent size="sm">Small tooltip details</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Medium Size
                  </Button>
                </TooltipTrigger>
                <TooltipContent size="md">
                  Medium standard tooltip
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Large Size
                  </Button>
                </TooltipTrigger>
                <TooltipContent size="lg">
                  Large details layout box
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        }
        code={`<TooltipContent size="sm">Small</TooltipContent>
<TooltipContent size="md">Medium</TooltipContent>
<TooltipContent size="lg">Large</TooltipContent>`}
      />

      <DocsComponent
        props={[
          "radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
        ]}
        title="Radius"
        description="Adjust border rounding configurations of tooltip cards."
        preview={
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Radius None
                  </Button>
                </TooltipTrigger>
                <TooltipContent radius="none">Square corners</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Radius MD
                  </Button>
                </TooltipTrigger>
                <TooltipContent radius="md">Subtle rounding</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Radius XL
                  </Button>
                </TooltipTrigger>
                <TooltipContent radius="xl">
                  Default rounded corners
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Radius Full
                  </Button>
                </TooltipTrigger>
                <TooltipContent radius="full">
                  Pill rounded style
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        }
        code={`<TooltipContent radius="none">Square</TooltipContent>
<TooltipContent radius="md">Medium</TooltipContent>
<TooltipContent radius="xl">Extra Large</TooltipContent>
<TooltipContent radius="full">Full</TooltipContent>`}
      />

      <DocsComponent
        title="Placements"
        description="Position tooltips using the 'side' prop."
        preview={
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Top Placement
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Tooltip on Top</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Right Placement
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Tooltip on Right</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Bottom Placement
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Tooltip on Bottom</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Left Placement
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">Tooltip on Left</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        }
        code={`<TooltipContent side="top">Top</TooltipContent>
<TooltipContent side="right">Right</TooltipContent>
<TooltipContent side="bottom">Bottom</TooltipContent>
<TooltipContent side="left">Left</TooltipContent>`}
        props={["side?: 'top' | 'right' | 'bottom' | 'left'"]}
      />

      <DocsComponent
        props={["delayDuration: number", "closeDelay: number"]}
        title="Delay Durations"
        description="Control hover entry and exit delay properties."
        preview={
          <div className="flex flex-wrap gap-4">
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Instant Tooltip
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Appears immediately on enter (0ms)
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip delayDuration={1200}>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Delayed Entry (1.2s)
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Takes 1200ms of hover time to open
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip delayDuration={200} closeDelay={600}>
                <TooltipTrigger asChild>
                  <Button color="default" variant="flat">
                    Delayed Exit (600ms)
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Stays open for 600ms after cursor leaves
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        }
        code={`<!-- Individual TooltipProviders are used to prevent Radix warm-up synchronization -->
<TooltipProvider>
  <Tooltip delayDuration={0}>
    <TooltipTrigger asChild><Button color="default" variant="flat">Instant</Button></TooltipTrigger>
    <TooltipContent>Appears immediately</TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip delayDuration={1200}>
    <TooltipTrigger asChild><Button color="default" variant="flat">Delayed Entry</Button></TooltipTrigger>
    <TooltipContent>Takes 1.2s</TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip delayDuration={200} closeDelay={600}>
    <TooltipTrigger asChild><Button color="default" variant="flat">Delayed Exit</Button></TooltipTrigger>
    <TooltipContent>Stays open for 600ms after leaving</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
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
              <td className="px-4 py-3">Visual layout theme.</td>
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
              <td className="px-4 py-3">Background color theme highlights.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">size</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'sm' | 'md' | 'lg'
              </td>
              <td className="px-4 py-3 text-zinc-400">'md'</td>
              <td className="px-4 py-3">
                Container height and margins sizing.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                radius
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |
                'full'
              </td>
              <td className="px-4 py-3 text-zinc-400">'xl'</td>
              <td className="px-4 py-3">Rounded corners intensity token.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                delayDuration
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                number
              </td>
              <td className="px-4 py-3 text-zinc-400">200</td>
              <td className="px-4 py-3">
                Tooltip hover entry delay duration in milliseconds.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                closeDelay
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                number
              </td>
              <td className="px-4 py-3 text-zinc-400">0</td>
              <td className="px-4 py-3">
                Tooltip hover exit delay duration in milliseconds.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
