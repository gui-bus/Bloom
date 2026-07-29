import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Label",
  description: "Accessible form field label component built on Radix UI Label primitive.",
};

import { Label } from "@/components/ui/label/label";
import { labelCode } from "@/components/ui/label/label.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function LabelComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Label"
        description="Renders an accessible form label with optional required field indicators."
      />

      <Tabs defaultValue="label">
        <TabsList background={false}>
          <TabsTrigger
            value="label"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            label.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="label">
          <CodeBlock
            code={labelCode}
            componentName="label.tsx"
            description="Core implementation of the Label component."
            tags={["React", "Radix UI", "Tailwind", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard label and required label."
        preview={
          <div className="flex flex-col gap-4">
            <Label htmlFor="username">Username</Label>
            <Label isRequired htmlFor="password">Password</Label>
          </div>
        }
        code={`<div className="flex flex-col gap-4">
  <Label htmlFor="username">Username</Label>
  <Label isRequired htmlFor="password">Password</Label>
</div>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Label"
        description="Properties to configure the Label component."
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
                  <td className="px-3 py-2 font-mono text-primary">isRequired</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Displays a red required asterisk next to the label.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
