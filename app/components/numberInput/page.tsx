"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
  const [val, setVal] = React.useState(2);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Number Input"
        description="Numeric stepper input control with increment/decrement buttons, min/max limits, custom step sizes, and size options."
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
            tags={["React", "NumberInput", "Stepper", "Form"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard numeric stepper with default value."
        preview={
          <div className="max-w-xs w-full">
            <NumberInput label="Item Quantity" defaultValue={1} min={1} max={10} />
          </div>
        }
        code={`<NumberInput label="Item Quantity" defaultValue={1} min={1} max={10} />`}
      />

      {/* Controlled State */}
      <DocsComponent
        title="Controlled State & Limits"
        description="Controlled number value bound to state with min=0 and max=5 constraints."
        preview={
          <div className="flex flex-col gap-2 max-w-xs w-full">
            <NumberInput
              label="Selected Tickets (Max 5)"
              value={val}
              min={0}
              max={5}
              onValueChange={setVal}
            />
            <span className="text-xs font-mono text-muted-foreground">Current Value: {val}</span>
          </div>
        }
        code={`const [val, setVal] = React.useState(2);

<NumberInput label="Selected Tickets" value={val} min={0} max={5} onValueChange={setVal} />`}
        props={["value: number", "min: number", "max: number", "onValueChange: (val: number) => void"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Control input dimensions using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-4 max-w-xs w-full">
            <NumberInput label="Small (sm)" size="sm" defaultValue={5} />
            <NumberInput label="Medium (md)" size="md" defaultValue={10} />
            <NumberInput label="Large (lg)" size="lg" defaultValue={15} />
          </div>
        }
        code={`<NumberInput size="sm" defaultValue={5} />
<NumberInput size="md" defaultValue={10} />
<NumberInput size="lg" defaultValue={15} />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      {/* Custom Step */}
      <DocsComponent
        title="Custom Step Increment"
        description="Increment or decrement by custom step sizes (e.g. step=5 or step=0.5)."
        preview={
          <div className="max-w-xs w-full">
            <NumberInput label="Volume Level (Step 5)" step={5} defaultValue={50} min={0} max={100} />
          </div>
        }
        code={`<NumberInput label="Volume Level" step={5} defaultValue={50} min={0} max={100} />`}
        props={["step: number"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — NumberInput"
        description="Supported properties for the NumberInput component."
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
                  <td className="px-3 py-2 font-mono text-primary">value / defaultValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">0</td>
                  <td className="px-3 py-2 text-muted-foreground">Current numeric value.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">min / max</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Minimum and maximum numeric bounds.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">step</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">1</td>
                  <td className="px-3 py-2 text-muted-foreground">Step interval for button clicks.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Dimensional scale of the stepper input.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
