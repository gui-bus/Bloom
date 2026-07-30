"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
    <div className="space-y-8">
      <DocsTitle
        title="Checkbox"
        description="An accessible control that allows toggling between checked and unchecked states, powered by Radix UI with support for colors, labels, descriptions, and card mode."
      />

      <ImportSnippet importCode={`import { Checkbox } from "@/components/ui/checkbox/checkbox";`} />

      <InstallationBlock componentName="checkbox" />

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
            tags={["React", "Radix UI", "Tailwind", "Forms", "Checkbox"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard checkbox control displaying an active state with label."
        preview={
          <div className="w-full">
            <Checkbox label="Accept terms and conditions" defaultChecked />
          </div>
        }
        code={`<Checkbox label="Accept terms and conditions" defaultChecked />`}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Defines the checked color theme using the 'color' prop. Stacked vertically for clear visual comparison."
        preview={
          <div className="w-full flex flex-col gap-4">
            <Checkbox color="default" label="Default Theme" defaultChecked />
            <Checkbox color="primary" label="Primary Theme" defaultChecked />
            <Checkbox color="secondary" label="Secondary Theme" defaultChecked />
            <Checkbox color="accent" label="Accent Theme" defaultChecked />
            <Checkbox color="success" label="Success Theme" defaultChecked />
            <Checkbox color="warning" label="Warning Theme" defaultChecked />
            <Checkbox color="danger" label="Danger Theme" defaultChecked />
          </div>
        }
        code={`<div className="space-y-4 w-full">
  <Checkbox color="default" label="Default Theme" defaultChecked />
  <Checkbox color="primary" label="Primary Theme" defaultChecked />
  <Checkbox color="secondary" label="Secondary Theme" defaultChecked />
  <Checkbox color="accent" label="Accent Theme" defaultChecked />
  <Checkbox color="success" label="Success Theme" defaultChecked />
  <Checkbox color="warning" label="Warning Theme" defaultChecked />
  <Checkbox color="danger" label="Danger Theme" defaultChecked />
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Card Mode (isCard) */}
      <DocsComponent
        title="Card Mode (isCard)"
        description="Encloses the checkbox and label inside an interactive neutral card container."
        preview={
          <div className="w-full flex flex-col gap-4">
            <Checkbox
              isCard
              color="primary"
              label="Standard Delivery"
              description="Delivered in 3-5 business days"
              defaultChecked
            />
            <Checkbox
              isCard
              color="success"
              label="Express Courier"
              description="Guaranteed next-day delivery with live tracking"
            />
          </div>
        }
        code={`<div className="space-y-4 w-full">
  <Checkbox
    isCard
    color="primary"
    label="Standard Delivery"
    description="Delivered in 3-5 business days"
    defaultChecked
  />
  <Checkbox
    isCard
    color="success"
    label="Express Courier"
    description="Guaranteed next-day delivery with live tracking"
  />
</div>`}
        props={["isCard: boolean"]}
      />

      {/* With Description */}
      <DocsComponent
        title="With Description"
        description="Provides secondary descriptive text below the main checkbox label."
        preview={
          <div className="w-full flex flex-col gap-4">
            <Checkbox
              label="Enable push notifications"
              description="Receive instant security alerts and account activity updates on your devices."
              defaultChecked
            />
          </div>
        }
        code={`<Checkbox
  label="Enable push notifications"
  description="Receive instant security alerts and account activity updates on your devices."
  defaultChecked
/>`}
        props={["description: ReactNode"]}
      />

      {/* Disabled State */}
      <DocsComponent
        title="Disabled State"
        description="Disables user interaction and applies muted opacity styling."
        preview={
          <div className="w-full flex flex-col gap-4">
            <Checkbox label="Disabled unchecked" disabled />
            <Checkbox label="Disabled checked" defaultChecked disabled />
          </div>
        }
        code={`<div className="space-y-4 w-full">
  <Checkbox label="Disabled unchecked" disabled />
  <Checkbox label="Disabled checked" defaultChecked disabled />
</div>`}
        props={["disabled: boolean"]}
      />

      {/* Invalid State */}
      <DocsComponent
        title="Invalid State"
        description="Applies error border and text styling for form validation errors."
        preview={
          <div className="w-full flex flex-col gap-4">
            <Checkbox
              isInvalid
              label="You must agree to the privacy policy to proceed"
            />
          </div>
        }
        code={`<Checkbox
  isInvalid
  label="You must agree to the privacy policy to proceed"
/>`}
        props={["isInvalid: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Checkbox Table */}
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
                  <td className="px-3 py-2 text-muted-foreground">Clickable text or element for the checkbox.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">description</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Secondary text rendered below the label.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isCard</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Encloses the control inside an interactive card container.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isInvalid</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Applies red error border and text styling.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">disabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Disables user interaction and applies muted opacity styling.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    
      <DocsPagination />
    </div>
  );
}
