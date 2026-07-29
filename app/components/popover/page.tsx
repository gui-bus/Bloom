import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Popover",
  description: "Floating popover card component built on Radix UI Popover primitive.",
};

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover/popover";
import { Button } from "@/components/ui/button/button";
import { popoverCode } from "@/components/ui/popover/popover.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function PopoverComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Popover"
        description="Displays rich content in a portal, triggered by a button click."
      />

      <Tabs defaultValue="popover">
        <TabsList background={false}>
          <TabsTrigger
            value="popover"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            popover.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="popover">
          <CodeBlock
            code={popoverCode}
            componentName="popover.tsx"
            description="Core implementation of the Popover component."
            tags={["React", "Radix UI", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Floating card content."
        preview={
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="bordered">Dimensions</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Dimensions</h4>
                <p className="text-xs text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        }
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button>Dimensions</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div>Set the dimensions for the layer.</div>
  </PopoverContent>
</Popover>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — Popover"
        description="Available primitives for building popovers."
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
                  <td className="px-3 py-2 font-mono text-primary">Popover</td>
                  <td className="px-3 py-2 text-muted-foreground">Root popover container.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">PopoverContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Floating overlay container element.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
