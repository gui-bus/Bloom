import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Switch",
  description: "A control that allows the user to toggle between checked and unchecked states with iOS/Fluent style animations.",
};

import { Switch } from "@/components/ui/switch/switch";
import { switchCode } from "@/components/ui/switch/switch.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SwitchComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Switch"
        description="An animated toggle switch component powered by Radix UI Switch primitive, featuring semantic colors, scale sizes, and optional helper descriptions."
      />

      <Tabs defaultValue="switch">
        <TabsList background={false}>
          <TabsTrigger
            value="switch"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            switch.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="switch">
          <CodeBlock
            code={switchCode}
            componentName="switch.tsx"
            description="Core implementation of the Switch component."
            tags={["React", "Radix UI", "Tailwind", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard toggle switch."
        preview={
          <div className="flex flex-col gap-3">
            <Switch label="Airplane Mode" defaultChecked />
          </div>
        }
        code={`<Switch label="Airplane Mode" defaultChecked />`}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Available color themes."
        preview={
          <div className="flex flex-wrap gap-6">
            <Switch color="primary" label="Primary" defaultChecked />
            <Switch color="success" label="Success" defaultChecked />
            <Switch color="warning" label="Warning" defaultChecked />
            <Switch color="danger" label="Danger" defaultChecked />
          </div>
        }
        code={`<div className="flex flex-wrap gap-6">
  <Switch color="primary" label="Primary" defaultChecked />
  <Switch color="success" label="Success" defaultChecked />
  <Switch color="warning" label="Warning" defaultChecked />
  <Switch color="danger" label="Danger" defaultChecked />
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scale sizes from small to large."
        preview={
          <div className="flex items-center gap-6">
            <Switch size="sm" label="Small" defaultChecked />
            <Switch size="md" label="Medium" defaultChecked />
            <Switch size="lg" label="Large" defaultChecked />
          </div>
        }
        code={`<div className="flex items-center gap-6">
  <Switch size="sm" label="Small" defaultChecked />
  <Switch size="md" label="Medium" defaultChecked />
  <Switch size="lg" label="Large" defaultChecked />
</div>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Switch"
        description="Properties to configure the Switch component."
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
                  <td className="px-3 py-2 text-muted-foreground">Color theme when enabled.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'sm' | 'md' | 'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Scale size of root track and thumb.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Label text element.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
