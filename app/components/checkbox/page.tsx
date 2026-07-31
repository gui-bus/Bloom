"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Checkbox, CheckboxGroup, useCheckboxGroup } from "@/components/ui/checkbox/checkbox";
import { Button } from "@/components/ui/button/button";
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

  const allItems = ["react", "nextjs", "tailwind", "typescript"];
  const {
    selected: selectedTech,
    setSelected: setSelectedTech,
    isAllSelected,
    isSomeSelected,
    toggleAll,
    selectAll,
    deselectAll,
  } = useCheckboxGroup({
    items: allItems,
    defaultSelected: ["react", "tailwind"],
  });

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Checkbox & Checkbox Group"
        description="An accessible set of selection controls supporting individual checkboxes, group management, grid layout columns, selectable card mode, custom check icons, and helper hooks."
      />

      <ImportSnippet importCode={`import { Checkbox, CheckboxGroup, useCheckboxGroup } from "@/components/ui/checkbox/checkbox";`} />

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
            description="Core implementation of Checkbox, CheckboxGroup, and useCheckboxGroup."
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

      {/* useCheckboxGroup Hook */}
      <DocsComponent
        title="Group Select All / Deselect All Hook (useCheckboxGroup)"
        description="Easily manage batch select all and deselect all state using the 'useCheckboxGroup' hook."
        preview={
          <div className="flex flex-col gap-3 w-full max-w-md">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <Checkbox
                checked={isAllSelected}
                isIndeterminate={isSomeSelected}
                onCheckedChange={toggleAll}
                label="Select All Technologies"
              />
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="xs" onClick={selectAll}>Select All</Button>
                <Button variant="ghost" size="xs" onClick={deselectAll}>Clear</Button>
              </div>
            </div>
            <CheckboxGroup
              value={selectedTech}
              onValueChange={(vals) => setSelectedTech(vals as typeof allItems)}
              columns={2}
            >
              <Checkbox value="react" label="React" icon="devicon:react" />
              <Checkbox value="nextjs" label="Next.js" icon="devicon:nextjs" />
              <Checkbox value="tailwind" label="Tailwind CSS" icon="devicon:tailwindcss" />
              <Checkbox value="typescript" label="TypeScript" icon="devicon:typescript" />
            </CheckboxGroup>
          </div>
        }
        code={`const { selected, setSelected, isAllSelected, isSomeSelected, toggleAll } = useCheckboxGroup({
  items: ["react", "nextjs", "tailwind", "typescript"],
  defaultSelected: ["react", "tailwind"],
});

<Checkbox
  checked={isAllSelected}
  isIndeterminate={isSomeSelected}
  onCheckedChange={toggleAll}
  label="Select All"
/>
<CheckboxGroup value={selected} onValueChange={setSelected}>
  <Checkbox value="react" label="React" />
  <Checkbox value="nextjs" label="Next.js" />
</CheckboxGroup>`}
        props={["useCheckboxGroup({ items, defaultSelected })"]}
      />

      {/* Custom Checkmark Icon */}
      <DocsComponent
        title="Custom Checkmark Icon (checkIcon)"
        description="Pass custom icons into the 'checkIcon' slot to customize the checked indicator symbol."
        preview={
          <div className="flex flex-wrap gap-4 w-full">
            <Checkbox
              defaultChecked
              color="success"
              label="Heart Icon"
              checkIcon={<Icon icon="hugeicons:favourite" className="size-3 text-white fill-white" />}
            />
            <Checkbox
              defaultChecked
              color="warning"
              label="Star Icon"
              checkIcon={<Icon icon="hugeicons:star" className="size-3 text-white fill-white" />}
            />
            <Checkbox
              defaultChecked
              color="danger"
              label="Shield Check Icon"
              checkIcon={<Icon icon="hugeicons:shield-01" className="size-3 text-white" />}
            />
          </div>
        }
        code={`<Checkbox
  defaultChecked
  color="success"
  label="Heart Icon"
  checkIcon={<Icon icon="hugeicons:favourite" className="size-3" />}
/>`}
        props={["checkIcon: ReactNode"]}
      />

      {/* Card Variant with Slots */}
      <DocsComponent
        title="Selectable Card Mode with Start / End Content Slots"
        description="Custom positions for start/end content slots and checkbox control placement inside card containers."
        preview={
          <div className="w-full">
            <CheckboxGroup columns={2} defaultValue={["pro"]}>
              <Checkbox
                isCard
                value="basic"
                label="Basic Plan"
                description="Essential tools for small teams"
                badge="$19/mo"
                startContent={<Icon icon="hugeicons:user-group" className="size-6 text-sky-500" />}
              />
              <Checkbox
                isCard
                value="pro"
                label="Pro Unlimited"
                description="Advanced AI & high speed cluster"
                badge="$49/mo"
                checkboxPosition="end"
                startContent={<Icon icon="hugeicons:rocket" className="size-6 text-purple-500" />}
              />
            </CheckboxGroup>
          </div>
        }
        code={`<CheckboxGroup columns={2} defaultValue={["pro"]}>
  <Checkbox
    isCard
    value="basic"
    label="Basic Plan"
    description="Essential tools"
    badge="$19/mo"
    startContent={<Icon icon="hugeicons:user-group" className="size-6 text-sky-500" />}
  />
  <Checkbox
    isCard
    value="pro"
    label="Pro Unlimited"
    description="Advanced AI"
    badge="$49/mo"
    checkboxPosition="end"
    startContent={<Icon icon="hugeicons:rocket" className="size-6 text-purple-500" />}
  />
</CheckboxGroup>`}
        props={["startContent: ReactNode", "endContent: ReactNode", "checkboxPosition: 'start' | 'end'"]}
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
                  <td className="px-3 py-2 font-mono text-primary">checkIcon</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Custom checked indicator icon component.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">startContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Content slot rendered at the start of the layout.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">endContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Content slot rendered at the end of the layout.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">checkboxPosition</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'start' | 'end'</td>
                  <td className="px-3 py-2 text-muted-foreground">'start'</td>
                  <td className="px-3 py-2 text-muted-foreground">Placement of the checkbox input root element inside the layout.</td>
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
                <tr>
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
