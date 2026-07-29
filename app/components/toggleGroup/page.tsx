import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Toggle Group",
  description: "A set of two-state buttons that can be toggled on or off.",
};

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggleGroup/toggleGroup";
import { toggleGroupCode } from "@/components/ui/toggleGroup/toggleGroup.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ToggleGroupComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Toggle Group"
        description="A group of toggle buttons supporting single or multiple selections, built on Radix UI Toggle Group."
      />

      <Tabs defaultValue="toggleGroup">
        <TabsList background={false}>
          <TabsTrigger
            value="toggleGroup"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            toggleGroup.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="toggleGroup">
          <CodeBlock
            code={toggleGroupCode}
            componentName="toggleGroup.tsx"
            description="Core implementation of the ToggleGroup component."
            tags={["React", "Radix UI", "Tailwind", "Buttons"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Single alignment selection group."
        preview={
          <ToggleGroup type="single" defaultValue="center" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="lucide:align-left" className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="lucide:align-center" className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="lucide:align-right" className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        }
        code={`<ToggleGroup type="single" defaultValue="center" variant="outline">
  <ToggleGroupItem value="left" aria-label="Align left">
    <Icon icon="lucide:align-left" className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <Icon icon="lucide:align-center" className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <Icon icon="lucide:align-right" className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — ToggleGroup"
        description="Properties to configure the ToggleGroup component."
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
                  <td className="px-3 py-2 font-mono text-primary">type</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'single' | 'multiple'</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Determines whether single or multiple items can be pressed simultaneously.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'default' | 'outline' | 'flat'</td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Visual variant style propagated to child items.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
