"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox/checkbox";
import { checkboxCode } from "@/components/ui/checkbox/checkbox.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function CheckboxComponentPage() {
  const [selectedGroup, setSelectedGroup] = React.useState<string[]>(["email", "push"]);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Checkbox & Checkbox Group"
        description="An accessible set of selection controls supporting individual checkboxes, group management, grid layout columns, selectable card mode, and indeterminate states."
      />

      <ImportSnippet importCode={`import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox/checkbox";`} />

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
            description="Core implementation of Checkbox & CheckboxGroup."
            tags={["React", "Radix UI", "Tailwind", "CheckboxGroup", "Checkbox"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default Single */}
      <DocsComponent
        title="Single Checkbox"
        description="Standard individual checkbox."
        preview={
          <div className="w-full">
            <Checkbox label="Accept terms and conditions" defaultChecked />
          </div>
        }
        code={`<Checkbox label="Accept terms and conditions" defaultChecked />`}
      />

      {/* Indeterminate State */}
      <DocsComponent
        title="Indeterminate State (isIndeterminate)"
        description="Used for parent checkboxes representing partial selection in hierarchical trees."
        preview={
          <div className="flex flex-col gap-2 w-full max-w-sm">
            <Checkbox
              isIndeterminate
              label="Select All Components"
              description="3 of 5 components selected"
            />
            <div className="ml-6 flex flex-col gap-2">
              <Checkbox label="Input" defaultChecked />
              <Checkbox label="Select" defaultChecked />
              <Checkbox label="Checkbox" defaultChecked />
              <Checkbox label="Slider" />
              <Checkbox label="DatePicker" />
            </div>
          </div>
        }
        code={`<Checkbox
  isIndeterminate
  label="Select All Components"
  description="3 of 5 selected"
/>`}
        props={["isIndeterminate: boolean"]}
      />

      {/* Checkbox Group & Grid Layout */}
      <DocsComponent
        title="Checkbox Group with Grid Columns (columns={3})"
        description="Manage group selection with controlled value array and grid layout columns."
        preview={
          <div className="w-full">
            <CheckboxGroup
              label="Notification Channels"
              description="Choose where to receive activity updates"
              columns={3}
              value={selectedGroup}
              onValueChange={setSelectedGroup}
            >
              <Checkbox value="email" label="Email Digest" icon="hugeicons:mail-01" />
              <Checkbox value="push" label="Mobile Push" icon="hugeicons:notification-01" />
              <Checkbox value="sms" label="SMS Message" icon="hugeicons:smart-phone-01" />
              <Checkbox value="slack" label="Slack Hook" icon="hugeicons:bubble-chat-delay" />
              <Checkbox value="webhook" label="Custom Webhook" icon="hugeicons:link-01" />
            </CheckboxGroup>
          </div>
        }
        code={`const [values, setValues] = React.useState(["email", "push"]);

<CheckboxGroup
  label="Notification Channels"
  columns={3}
  value={values}
  onValueChange={setValues}
>
  <Checkbox value="email" label="Email Digest" />
  <Checkbox value="push" label="Mobile Push" />
  <Checkbox value="sms" label="SMS Message" />
</CheckboxGroup>`}
        props={["columns: 1 | 2 | 3 | 4 | 5 | 6", "orientation: 'horizontal' | 'vertical'"]}
      />

      {/* Selectable Card Mode in Group */}
      <DocsComponent
        title="Selectable Card Mode (isCard) in Grid"
        description="Render group items as interactive cards with animated borders and highlight rings."
        preview={
          <div className="w-full">
            <CheckboxGroup
              columns={2}
              defaultValue={["standard"]}
              label="Shipping Preferences"
            >
              <Checkbox
                isCard
                value="standard"
                label="Standard Shipping"
                description="Delivered in 3-5 business days (Free)"
                badge="Popular"
              />
              <Checkbox
                isCard
                value="express"
                label="Express Courier"
                description="Guaranteed next-day delivery (+$15.00)"
                badge="Fast"
              />
            </CheckboxGroup>
          </div>
        }
        code={`<CheckboxGroup columns={2} defaultValue={["standard"]}>
  <Checkbox isCard value="standard" label="Standard Shipping" description="3-5 days" badge="Popular" />
  <Checkbox isCard value="express" label="Express Courier" description="Next-day" badge="Fast" />
</CheckboxGroup>`}
        props={["isCard: boolean", "badge: ReactNode"]}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Defines the checked color theme using the 'color' prop."
        preview={
          <div className="w-full flex flex-wrap gap-4">
            <Checkbox color="default" label="Default" defaultChecked />
            <Checkbox color="primary" label="Primary" defaultChecked />
            <Checkbox color="secondary" label="Secondary" defaultChecked />
            <Checkbox color="accent" label="Accent" defaultChecked />
            <Checkbox color="success" label="Success" defaultChecked />
            <Checkbox color="warning" label="Warning" defaultChecked />
            <Checkbox color="danger" label="Danger" defaultChecked />
          </div>
        }
        code={`<Checkbox color="primary" label="Primary Theme" defaultChecked />
<Checkbox color="success" label="Success Theme" defaultChecked />`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Checkbox & CheckboxGroup"
        description="Supported properties for Checkbox & CheckboxGroup."
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
                  <td className="px-3 py-2 font-mono text-primary">isCard</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Encloses control inside interactive card container with animated borders.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isIndeterminate</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Applies partial selection dash indicator for hierarchical parent items.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">columns (Group)</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">1 | 2 | 3 | 4 | 5 | 6</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Arranges group checkboxes into grid columns.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">orientation (Group)</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'horizontal' | 'vertical'</td>
                  <td className="px-3 py-2 text-muted-foreground">'vertical'</td>
                  <td className="px-3 py-2 text-muted-foreground">Layout direction for non-grid group items.</td>
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
