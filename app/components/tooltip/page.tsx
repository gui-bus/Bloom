"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip/tooltip";
import { Button } from "@/components/ui/button/button";
import { tooltipCode } from "@/components/ui/tooltip/tooltip.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function TooltipComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Tooltip"
        description="A popup hint label displaying contextual text when hovering or focusing an interactive element."
      />

      <InstallationBlock componentName="tooltip" />

      <Tabs defaultValue="tooltip">
        <TabsList background={false}>
          <TabsTrigger
            value="tooltip"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            tooltip.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tooltip">
          <CodeBlock
            code={tooltipCode}
            componentName="tooltip.tsx"
            description="Core implementation of the Tooltip component."
            tags={["React", "Radix UI", "Tooltip", "Popover"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
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

      {/* Placements (Top, Right, Bottom, Left) */}
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — TooltipContent"
        description="Supported properties for TooltipContent."
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
                  <td className="px-3 py-2 font-mono text-primary">side</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'top' | 'right' | 'bottom' | 'left'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'top'</td>
                  <td className="px-3 py-2 text-muted-foreground">Preferred tooltip anchor placement relative to trigger.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showArrow</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders pointing arrow indicator.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">sideOffset</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">6</td>
                  <td className="px-3 py-2 text-muted-foreground">Pixel distance offset from trigger element.</td>
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
