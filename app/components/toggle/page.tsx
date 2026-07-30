"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
  const [isBold, setIsBold] = React.useState(true);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Toggle"
        description="A two-state button component that can be toggled on or off for formatting controls, filters, and feature toggles."
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
            tags={["React", "Radix UI", "Toggle", "Button"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard pressable toggle button."
        preview={
          <div className="flex items-center gap-4">
            <Toggle aria-label="Toggle bold" pressed={isBold} onPressedChange={setIsBold}>
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

      {/* Variants (Default, Outline, Flat) */}
      <DocsComponent
        title="Variants (Default, Outline, Flat)"
        description="Visual style options: 'default', 'outline', or 'flat'."
        preview={
          <div className="flex flex-wrap gap-4">
            <Toggle variant="default" defaultPressed>
              <Icon icon="hugeicons:text-bold" className="size-4" />
              <span>Default</span>
            </Toggle>
            <Toggle variant="outline" defaultPressed>
              <Icon icon="hugeicons:text-italic" className="size-4" />
              <span>Outline</span>
            </Toggle>
            <Toggle variant="flat" defaultPressed>
              <Icon icon="hugeicons:text-underline" className="size-4" />
              <span>Flat</span>
            </Toggle>
          </div>
        }
        code={`<Toggle variant="default" defaultPressed>Default</Toggle>
<Toggle variant="outline" defaultPressed>Outline</Toggle>
<Toggle variant="flat" defaultPressed>Flat</Toggle>`}
        props={["variant: 'default' | 'outline' | 'flat'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scale toggle dimensions: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Toggle size="sm" variant="outline" defaultPressed>Small</Toggle>
            <Toggle size="md" variant="outline" defaultPressed>Medium</Toggle>
            <Toggle size="lg" variant="outline" defaultPressed>Large</Toggle>
          </div>
        }
        code={`<Toggle size="sm">Small</Toggle>
<Toggle size="md">Medium</Toggle>
<Toggle size="lg">Large</Toggle>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Toggle"
        description="Supported properties for Toggle."
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
                  <td className="px-3 py-2 font-mono text-primary">pressed / defaultPressed</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Controlled / uncontrolled pressed toggle state.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'outline' | 'flat'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Visual button border & background style.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Dimension scale of toggle button.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
