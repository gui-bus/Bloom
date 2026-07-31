"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  type SelectOption,
} from "@/components/ui/select/select";
import { selectCode } from "@/components/ui/select/select.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const sampleOptions: SelectOption[] = [
  { value: "react", label: "React.js", description: "UI Library by Meta", icon: "devicon:react", badge: "Popular" },
  { value: "next", label: "Next.js 16", description: "The React Framework", icon: "devicon:nextjs", badge: "Vercel" },
  { value: "vue", label: "Vue 3", description: "Progressive Framework", icon: "devicon:vuejs" },
  { value: "tailwind", label: "Tailwind CSS", description: "Utility-first CSS", icon: "devicon:tailwindcss" },
  { value: "typescript", label: "TypeScript", description: "Typed JavaScript", icon: "devicon:typescript" },
];

const userOptions: SelectOption[] = [
  {
    value: "guilherme",
    label: "Guilherme S.",
    description: "Lead UI Engineer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    badge: "Admin",
  },
  {
    value: "sarah",
    label: "Sarah Connor",
    description: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    badge: "Design",
  },
  {
    value: "alex",
    label: "Alex Vance",
    description: "DevOps Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    badge: "Ops",
  },
];

export default function SelectComponentPage() {
  const [multiVal, setMultiVal] = React.useState<string[]>(["react", "next", "typescript"]);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Select"
        description="A powerful select dropdown supporting single & multi-selection, removable tags, max visible chips, rich item rendering (avatars, descriptions, badges), batch actions, search filter, and 5 visual variants."
      />

      <ImportSnippet importCode={`import { Select } from "@/components/ui/select/select";`} />

      <InstallationBlock componentName="select" />

      <Tabs defaultValue="select">
        <TabsList background={false}>
          <TabsTrigger
            value="select"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            select.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="select">
          <CodeBlock
            code={selectCode}
            componentName="select.tsx"
            description="Core implementation of the Select component."
            tags={["React", "Select", "Form", "MultiSelect"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard dropdown select list."
        preview={
          <div className="max-w-xs w-full">
            <Select options={sampleOptions} defaultValue="react" label="Select Tech Stack" />
          </div>
        }
        code={`<Select options={sampleOptions} defaultValue="react" label="Select Tech Stack" />`}
      />

      {/* Multi-Selection & Max Tags */}
      <DocsComponent
        title="Multi-Selection & maxTagsVisible"
        description="Multi-selection mode with removable chip tags, search filter inside the menu, and customizable max visible chips limit."
        preview={
          <div className="flex flex-col gap-4 max-w-md w-full">
            <Select
              isMultiSelect
              isSearchable
              maxTagsVisible={2}
              options={sampleOptions}
              multiValue={multiVal}
              onMultiValueChange={setMultiVal}
              label="Frameworks (Max 2 tags visible)"
            />
          </div>
        }
        code={`<Select
  isMultiSelect
  isSearchable
  maxTagsVisible={2}
  options={sampleOptions}
  multiValue={multiVal}
  onMultiValueChange={setMultiVal}
  label="Frameworks (Max 2 tags visible)"
/>`}
        props={["isMultiSelect: boolean", "maxTagsVisible: number", "isSearchable: boolean"]}
      />

      {/* Rich Rendering & Avatars */}
      <DocsComponent
        title="Rich Option & Value Rendering"
        description="Render avatars, sub-descriptions, icons, and badges using built-in option properties or renderOption custom slots."
        preview={
          <div className="max-w-sm w-full">
            <Select
              options={userOptions}
              defaultValue="guilherme"
              label="Assign Team Member"
            />
          </div>
        }
        code={`<Select options={userOptions} defaultValue="guilherme" label="Assign Team Member" />`}
        props={["renderOption: (option) => ReactNode", "renderValue: (option) => ReactNode"]}
      />

      {/* Batch Selection (Select / Deselect All) */}
      <DocsComponent
        title="Batch Selection (Select / Deselect All)"
        description="Enable quick 1-click 'Select All' and 'Deselect All' actions at the top of the multi-select dropdown."
        preview={
          <div className="max-w-md w-full">
            <Select
              isMultiSelect
              showBatchActions
              isSearchable
              options={sampleOptions}
              label="Batch Option Picker"
              placeholder="Choose multiple options..."
            />
          </div>
        }
        code={`<Select
  isMultiSelect
  showBatchActions
  isSearchable
  options={sampleOptions}
  label="Batch Option Picker"
/>`}
        props={["showBatchActions: boolean", "selectAllLabel: string", "deselectAllLabel: string"]}
      />

      {/* Visual Variants */}
      <DocsComponent
        title="Visual Variants"
        description="5 available design variants: default, bordered, flat, underlined, and faded."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Select variant="default" label="Default" options={sampleOptions} defaultValue="react" />
            <Select variant="bordered" label="Bordered" options={sampleOptions} defaultValue="react" />
            <Select variant="flat" label="Flat" options={sampleOptions} defaultValue="react" />
            <Select variant="faded" label="Faded" options={sampleOptions} defaultValue="react" />
            <Select variant="underlined" label="Underlined" options={sampleOptions} defaultValue="react" />
          </div>
        }
        code={`<Select variant="default" label="Default" options={sampleOptions} />
<Select variant="bordered" label="Bordered" options={sampleOptions} />
<Select variant="flat" label="Flat" options={sampleOptions} />
<Select variant="faded" label="Faded" options={sampleOptions} />
<Select variant="underlined" label="Underlined" options={sampleOptions} />`}
        props={["variant: 'default' | 'bordered' | 'flat' | 'underlined' | 'faded'"]}
      />

      {/* Legacy Radix Syntax */}
      <DocsComponent
        title="Legacy Compositional Syntax (Radix UI)"
        description="Full backward compatibility with Radix UI Select primitive trigger and item components."
        preview={
          <div className="max-w-xs w-full">
            <Select defaultValue="light">
              <SelectTrigger>
                <SelectValue placeholder="Select theme..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light Theme</SelectItem>
                <SelectItem value="dark">Dark Theme</SelectItem>
                <SelectItem value="system">System Default</SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
        code={`<Select defaultValue="light">
  <SelectTrigger><SelectValue placeholder="Select theme..." /></SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light Theme</SelectItem>
    <SelectItem value="dark">Dark Theme</SelectItem>
  </SelectContent>
</Select>`}
      />

      {/* Option Search Filter */}
      <DocsComponent
        title="Option Search Filter"
        description="Filter options dynamically using an inline search input inside the popover with 'isSearchable'."
        preview={
          <div className="max-w-xs w-full">
            <Select
              isSearchable
              options={sampleOptions}
              label="Filter Technologies"
              defaultValue="react"
            />
          </div>
        }
        code={`<Select isSearchable options={sampleOptions} label="Filter Technologies" />`}
        props={["isSearchable: boolean"]}
      />

      {/* Sticky Category Headers */}
      <DocsComponent
        title="Sticky Category Headers"
        description="Group options under category headers that stick to the top of the popover menu during scroll."
        preview={
          <div className="max-w-xs w-full">
            <Select
              options={[
                { value: "react", label: "React.js", group: "Frontend Frameworks", icon: "devicon:react" },
                { value: "vue", label: "Vue 3", group: "Frontend Frameworks", icon: "devicon:vuejs" },
                { value: "next", label: "Next.js 16", group: "Fullstack Frameworks", icon: "devicon:nextjs" },
                { value: "nuxt", label: "Nuxt 3", group: "Fullstack Frameworks", icon: "devicon:nuxtjs" },
                { value: "node", label: "Node.js", group: "Backend Runtimes", icon: "devicon:nodejs" },
                { value: "bun", label: "Bun", group: "Backend Runtimes", icon: "devicon:bun" },
              ]}
              label="Ecosystem Stack (Grouped)"
              defaultValue="react"
            />
          </div>
        }
        code={`<Select
  options={[
    { value: "react", label: "React.js", group: "Frontend Frameworks" },
    { value: "next", label: "Next.js 16", group: "Fullstack Frameworks" },
  ]}
  label="Ecosystem Stack"
/>`}
        props={["group?: string (in option)"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Select"
        description="Supported properties for the Select component."
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
                  <td className="px-3 py-2 font-mono text-primary">isSearchable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Adds search input filter inside the select popover.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">renderOption</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">(option: SelectOption) =&gt; ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Custom item template slot for option items inside popover.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">group (in option)</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Category name to group options with sticky headers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    
      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
