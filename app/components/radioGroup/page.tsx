import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Radio Group",
  description: "Set of checkable buttons — known as radio buttons — where no more than one button can be checked at a time.",
};

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
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Radio Group"
        description="A set of mutually exclusive choices, built on top of Radix UI Radio Group primitive for keyboard navigation and screen reader support."
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
            tags={["React", "Radix UI", "Tailwind", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard radio group selection."
        preview={
          <RadioGroup defaultValue="comfortable">
            <RadioGroupItem value="default" label="Default" description="Standard compact layout" />
            <RadioGroupItem value="comfortable" label="Comfortable" description="Spacious padding and larger line height" />
            <RadioGroupItem value="compact" label="Compact" description="Dense data density" />
          </RadioGroup>
        }
        code={`<RadioGroup defaultValue="comfortable">
  <RadioGroupItem value="default" label="Default" description="Standard compact layout" />
  <RadioGroupItem value="comfortable" label="Comfortable" description="Spacious padding and larger line height" />
  <RadioGroupItem value="compact" label="Compact" description="Dense data density" />
</RadioGroup>`}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Radio group theme colors."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <RadioGroup defaultValue="1" color="primary">
              <RadioGroupItem value="1" label="Primary Theme" />
            </RadioGroup>
            <RadioGroup defaultValue="1" color="success">
              <RadioGroupItem value="1" label="Success Theme" />
            </RadioGroup>
            <RadioGroup defaultValue="1" color="danger">
              <RadioGroupItem value="1" label="Danger Theme" />
            </RadioGroup>
          </div>
        }
        code={`<RadioGroup defaultValue="1" color="primary">
  <RadioGroupItem value="1" label="Primary Theme" />
</RadioGroup>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — RadioGroup"
        description="Properties to configure the RadioGroup component."
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
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">Color theme applied to active radio items.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">defaultValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Initial selected item value.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
