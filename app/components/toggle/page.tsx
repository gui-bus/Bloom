import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Toggle",
  description: "A two-state button that can be either on or off.",
};

import { Toggle } from "@/components/ui/toggle/toggle";
import { toggleCode } from "@/components/ui/toggle/toggle.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ToggleComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Toggle"
        description="A binary toggle button built on Radix UI Toggle primitive. Supports icon states, outline/flat variants, and size scales."
      />

      <Tabs defaultValue="toggle">
        <TabsList background={false}>
          <TabsTrigger
            value="toggle"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            toggle.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="toggle">
          <CodeBlock
            code={toggleCode}
            componentName="toggle.tsx"
            description="Core implementation of the Toggle component."
            tags={["React", "Radix UI", "Tailwind", "Buttons"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Toggle button with icon."
        preview={
          <div className="flex gap-3">
            <Toggle aria-label="Toggle italic" variant="outline">
              <Icon icon="lucide:italic" className="size-4" />
            </Toggle>
            <Toggle aria-label="Toggle bold" variant="flat">
              <Icon icon="lucide:bold" className="size-4" />
            </Toggle>
          </div>
        }
        code={`<Toggle aria-label="Toggle italic" variant="outline">
  <Icon icon="lucide:italic" className="size-4" />
</Toggle>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Toggle"
        description="Properties to configure the Toggle component."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'default' | 'outline' | 'flat'</td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Visual button variant style.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'sm' | 'md' | 'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Button height and padding scale.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
