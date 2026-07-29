import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Number Input",
  description: "Numeric entry field with increment and decrement control buttons.",
};

import { NumberInput } from "@/components/ui/numberInput/numberInput";
import { numberInputCode } from "@/components/ui/numberInput/numberInput.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function NumberInputComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Number Input"
        description="A specialized numeric input featuring stepper buttons for incrementing and decrementing values, min/max bounds, step intervals, and custom sizes."
      />

      <Tabs defaultValue="numberInput">
        <TabsList background={false}>
          <TabsTrigger
            value="numberInput"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            numberInput.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="numberInput">
          <CodeBlock
            code={numberInputCode}
            componentName="numberInput.tsx"
            description="Core implementation of the NumberInput component."
            tags={["React", "Tailwind", "Forms", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard numeric stepper."
        preview={
          <div className="w-full max-w-xs">
            <NumberInput label="Quantity" defaultValue={1} min={1} max={10} />
          </div>
        }
        code={`<NumberInput label="Quantity" defaultValue={1} min={1} max={10} />`}
      />

      {/* Step Intervals */}
      <DocsComponent
        title="Step Intervals"
        description="Configure custom increment steps."
        preview={
          <div className="w-full max-w-xs">
            <NumberInput label="Price (in $5 increments)" defaultValue={20} step={5} min={0} />
          </div>
        }
        code={`<NumberInput label="Price (in $5 increments)" defaultValue={20} step={5} min={0} />`}
        props={["step: number"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — NumberInput"
        description="Properties to configure the NumberInput component."
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
                  <td className="px-3 py-2 font-mono text-primary">min</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Minimum allowed numeric bound.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">max</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Maximum allowed numeric bound.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">step</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">Increment/decrement step size interval.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
