"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
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
        importCode={`import { Tooltip } from "@/components/ui/tooltip/tooltip";`}
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
                <Button color="primary">Hover Me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Add project to favorites</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button color="primary">Hover Me</Button></TooltipTrigger>
    <TooltipContent>Add project to favorites</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      />

      <DocsComponent
        title="Placements (Top, Right, Bottom, Left)"
        description="Position tooltips using the 'side' prop."
        preview={
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="bordered">Top Placement</Button>
                </TooltipTrigger>
                <TooltipContent side="top">Tooltip on Top</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="bordered">Right Placement</Button>
                </TooltipTrigger>
                <TooltipContent side="right">Tooltip on Right</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="bordered">Bottom Placement</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Tooltip on Bottom</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="bordered">Left Placement</Button>
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
        props={["side: 'top' | 'right' | 'bottom' | 'left'"]}
      />

      <DocsComponent
        title="Rich HTML Content & Interactive Links"
        description="Render rich formatted HTML inside tooltips with interactive links and buttons using interactive={true}."
        preview={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="primary" variant="flat">
                  Interactive Card Tooltip
                </Button>
              </TooltipTrigger>
              <TooltipContent interactive side="top" className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon
                    icon="hugeicons:information-circle"
                    className="size-4 text-sky-400"
                  />
                  <span className="font-bold text-xs">
                    Bloom UI Design System
                  </span>
                </div>
                <p className="text-[11px] text-zinc-300">
                  Explore full component specifications and interactive
                  playground in our official docs.
                </p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  View Documentation →
                </a>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        code={`<TooltipContent interactive side="top">
  <div className="font-bold text-xs">Bloom UI Design System</div>
  <p className="text-[11px]">Explore full component specifications...</p>
  <a href="https://github.com" target="_blank" className="text-sky-400 underline">View Docs →</a>
</TooltipContent>`}
        props={["interactive: boolean"]}
      />

      <DocsComponent
        title="Arrow Pointer Toggle & Custom Offsets"
        description="Toggle pointing arrow visibility with showArrow={false} and adjust sideOffset distance."
        preview={
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="bordered">No Arrow</Button>
                </TooltipTrigger>
                <TooltipContent showArrow={false}>
                  Clean tooltip without pointing arrow
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="bordered">Custom Offset (20px)</Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={20}>
                  Positioned 20px away from trigger
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        }
        code={`<TooltipContent showArrow={false}>No Arrow</TooltipContent>
<TooltipContent sideOffset={20}>20px Offset</TooltipContent>`}
        props={["showArrow: boolean", "sideOffset: number"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — TooltipContent"
        description="Supported properties for TooltipContent."
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
                  <td className="px-3 py-2 font-mono text-primary">side</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'top' | 'right' | 'bottom' | 'left'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'top'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Preferred tooltip anchor placement relative to trigger.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showArrow
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders pointing arrow indicator.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    sideOffset
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">6</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Pixel distance offset from trigger element.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
