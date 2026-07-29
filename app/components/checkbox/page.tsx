import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Checkbox",
  description: "Accessible checkbox component built with Radix UI, supporting custom colors, labels, and description text.",
};

import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { checkboxCode } from "@/components/ui/checkbox/checkbox.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function CheckboxComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Checkbox"
        description="A control that allows the user to toggle between checked and unchecked states, powered by Radix UI for ARIA accessibility."
      />

      <Tabs defaultValue="checkbox">
        <TabsList background={false}>
          <TabsTrigger
            value="checkbox"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            checkbox.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="checkbox">
          <CodeBlock
            code={checkboxCode}
            componentName="checkbox.tsx"
            description="Core implementation of the Checkbox component built on Radix UI."
            tags={["React", "Radix UI", "Tailwind", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard checkbox with label."
        preview={
          <div className="flex flex-col gap-3">
            <Checkbox label="Accept terms and conditions" defaultChecked />
          </div>
        }
        code={`<Checkbox label="Accept terms and conditions" defaultChecked />`}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Supports primary, secondary, accent, success, warning, and danger themes."
        preview={
          <div className="flex flex-wrap gap-4">
            <Checkbox color="primary" label="Primary" defaultChecked />
            <Checkbox color="secondary" label="Secondary" defaultChecked />
            <Checkbox color="accent" label="Accent" defaultChecked />
            <Checkbox color="success" label="Success" defaultChecked />
            <Checkbox color="warning" label="Warning" defaultChecked />
            <Checkbox color="danger" label="Danger" defaultChecked />
          </div>
        }
        code={`<div className="flex flex-wrap gap-4">
  <Checkbox color="primary" label="Primary" defaultChecked />
  <Checkbox color="secondary" label="Secondary" defaultChecked />
  <Checkbox color="accent" label="Accent" defaultChecked />
  <Checkbox color="success" label="Success" defaultChecked />
  <Checkbox color="warning" label="Warning" defaultChecked />
  <Checkbox color="danger" label="Danger" defaultChecked />
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Description */}
      <DocsComponent
        title="With Description"
        description="Provide additional context below the checkbox label."
        preview={
          <div className="flex flex-col gap-3">
            <Checkbox
              label="Enable push notifications"
              description="Receive instant alerts on your desktop or mobile device."
              defaultChecked
            />
          </div>
        }
        code={`<Checkbox
  label="Enable push notifications"
  description="Receive instant alerts on your desktop or mobile device."
  defaultChecked
/>`}
        props={["description: ReactNode"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Checkbox"
        description="Properties to configure the Checkbox component."
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
                  <td className="px-3 py-2 text-muted-foreground">Color palette when checked.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Clickable label content.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">description</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Secondary text below the label.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
