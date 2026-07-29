import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Tooltip",
  description: "Contextual popup tooltip component built on Radix UI Tooltip primitive.",
};

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
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
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Tooltip"
        description="A popup hint displaying information related to an element when hovered or focused."
      />

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
            tags={["React", "Radix UI", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Hover hint popup."
        preview={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="flat">Hover over me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover over me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — Tooltip"
        description="Available primitives for building tooltips."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">TooltipProvider</td>
                  <td className="px-3 py-2 text-muted-foreground">Global delay and state provider for tooltips.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">TooltipContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Floating text bubble content.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
