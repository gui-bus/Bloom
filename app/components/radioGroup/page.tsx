"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radioGroup/radioGroup";
import { radioGroupCode } from "@/components/ui/radioGroup/radioGroup.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function RadioGroupComponentPage() {
  const [selectedPlan, setSelectedPlan] = React.useState("starter");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Radio Group"
        description="A set of checkable radio buttons where only one option can be checked at a time, featuring card selection styles and descriptions."
      />

      <Tabs defaultValue="radioGroup">
        <TabsList background={false}>
          <TabsTrigger
            value="radioGroup"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            radioGroup.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="radioGroup">
          <CodeBlock
            code={radioGroupCode}
            componentName="radioGroup.tsx"
            description="Core implementation of the RadioGroup component."
            tags={["React", "Radix UI", "RadioGroup", "Form"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard vertical radio group selection."
        preview={
          <div className="max-w-xs w-full">
            <RadioGroup defaultValue="default">
              <RadioGroupItem value="default" label="Default Option" />
              <RadioGroupItem value="comfortable" label="Comfortable Layout" />
              <RadioGroupItem value="compact" label="Compact Grid" />
            </RadioGroup>
          </div>
        }
        code={`<RadioGroup defaultValue="default">
  <RadioGroupItem value="default" label="Default Option" />
  <RadioGroupItem value="comfortable" label="Comfortable Layout" />
  <RadioGroupItem value="compact" label="Compact Grid" />
</RadioGroup>`}
      />

      {/* Card Selection */}
      <DocsComponent
        title="Card Selection Cards"
        description="Renders items inside interactive selection cards with descriptions using 'isCard'."
        preview={
          <div className="max-w-md w-full">
            <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
              <RadioGroupItem
                isCard
                value="starter"
                label="Starter Plan — Free"
                description="Ideal for individual developers & hobby projects."
              />
              <RadioGroupItem
                isCard
                value="pro"
                label="Pro Team — $29/mo"
                description="Unlimited team members, priority support & custom domains."
              />
              <RadioGroupItem
                isCard
                value="enterprise"
                label="Enterprise — Custom"
                description="Dedicated SLA, custom SSO authentication & security audit."
              />
            </RadioGroup>
          </div>
        }
        code={`<RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
  <RadioGroupItem
    isCard
    value="starter"
    label="Starter Plan"
    description="Ideal for individual developers."
  />
  <RadioGroupItem
    isCard
    value="pro"
    label="Pro Team"
    description="Unlimited team members."
  />
</RadioGroup>`}
        props={["isCard: boolean", "label: ReactNode", "description: ReactNode"]}
      />

      {/* Disabled State */}
      <DocsComponent
        title="Disabled Option"
        description="Disable individual radio items or the entire group with 'disabled'."
        preview={
          <div className="max-w-xs w-full">
            <RadioGroup defaultValue="opt1">
              <RadioGroupItem value="opt1" label="Available Region (US-East)" />
              <RadioGroupItem value="opt2" label="Maintenance Region (EU-Central)" disabled />
            </RadioGroup>
          </div>
        }
        code={`<RadioGroupItem value="opt2" label="Maintenance Region" disabled />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — RadioGroup & RadioGroupItem"
        description="Supported properties for RadioGroup components."
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
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Value of currently selected radio option.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isCard</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders radio option as an interactive card container.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Main title text for the option.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">description</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Secondary description text for the option.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
