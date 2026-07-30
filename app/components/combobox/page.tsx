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
import { Combobox } from "@/components/ui/combobox/combobox";
import { comboboxCode } from "@/components/ui/combobox/combobox.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React.js" },
  { value: "vue", label: "Vue.js" },
  { value: "svelte", label: "Svelte" },
  { value: "astro", label: "Astro" },
];

const techStack = [
  { value: "react", label: "React", description: "UI Library for Web Apps", icon: "logos:react" },
  { value: "typescript", label: "TypeScript", description: "Typed JavaScript at scale", icon: "logos:typescript-icon" },
  { value: "tailwind", label: "Tailwind CSS", description: "Utility-first CSS framework", icon: "logos:tailwindcss-icon" },
  { value: "nextjs", label: "Next.js", description: "Full-stack React framework", icon: "logos:nextjs-icon" },
  { value: "node", label: "Node.js", description: "JavaScript backend runtime", icon: "logos:nodejs-icon" },
];

export default function ComboboxComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Combobox"
        description="An autocomplete input combo box component allowing users to filter and select options with live search, support for icons, descriptions, clearable values, and individual disabled items."
      />

      <ImportSnippet importCode={`import { Combobox } from "@/components/ui/combobox/combobox";`} />

      <InstallationBlock componentName="combobox" />

      <Tabs defaultValue="combobox">
        <TabsList background={false}>
          <TabsTrigger
            value="combobox"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            combobox.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="combobox">
          <CodeBlock
            code={comboboxCode}
            componentName="combobox.tsx"
            description="Core implementation of the Combobox component supporting search filtering, custom icons, descriptions, and disabled options."
            tags={["React", "Tailwind", "Autocomplete", "Forms", "Combobox"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard filterable combobox list."
        preview={
          <div className="w-full">
            <Combobox
              label="Framework"
              options={frameworks}
              placeholder="Select framework..."
            />
          </div>
        }
        code={`<Combobox
  label="Framework"
  options={[
    { value: "next", label: "Next.js" },
    { value: "react", label: "React.js" },
    { value: "vue", label: "Vue.js" },
    { value: "svelte", label: "Svelte" },
    { value: "astro", label: "Astro" },
  ]}
  placeholder="Select framework..."
/>`}
      />

      {/* With Icons and Descriptions */}
      <DocsComponent
        title="With Icons and Descriptions"
        description="Provide custom icons and secondary descriptions for rich list items."
        preview={
          <div className="w-full">
            <Combobox
              label="Primary Tech Stack"
              options={techStack}
              placeholder="Choose technology..."
              defaultValue="react"
            />
          </div>
        }
        code={`<Combobox
  label="Primary Tech Stack"
  options={[
    { value: "react", label: "React", description: "UI Library for Web Apps", icon: "logos:react" },
    { value: "typescript", label: "TypeScript", description: "Typed JavaScript at scale", icon: "logos:typescript-icon" },
    { value: "tailwind", label: "Tailwind CSS", description: "Utility-first CSS framework", icon: "logos:tailwindcss-icon" },
    { value: "nextjs", label: "Next.js", description: "Full-stack React framework", icon: "logos:nextjs-icon" },
  ]}
  placeholder="Choose technology..."
  defaultValue="react"
/>`}
        props={["options: ComboboxOption[] (with icon and description)"]}
      />

      {/* Disabled Option */}
      <DocsComponent
        title="Disabled Individual Options"
        description="Disable specific items within the options array by setting 'disabled: true' on target options."
        preview={
          <div className="w-full">
            <Combobox
              label="Select Framework"
              options={[
                { value: "next", label: "Next.js" },
                { value: "react", label: "React.js" },
                { value: "vue", label: "Vue.js", disabled: true },
                { value: "svelte", label: "Svelte" },
                { value: "angular", label: "Angular", disabled: true },
              ]}
              placeholder="Select framework..."
            />
          </div>
        }
        code={`<Combobox
  label="Select Framework"
  options={[
    { value: "next", label: "Next.js" },
    { value: "react", label: "React.js" },
    { value: "vue", label: "Vue.js", disabled: true },
    { value: "svelte", label: "Svelte" },
    { value: "angular", label: "Angular", disabled: true },
  ]}
/>`}
        props={["options[].disabled: boolean"]}
      />

      {/* Clearable State */}
      <DocsComponent
        title="Clearable State"
        description="Set 'isClearable' to true to render a clear action button when an option is selected."
        preview={
          <div className="w-full">
            <Combobox
              isClearable
              label="Select Framework (Clearable)"
              options={frameworks}
              defaultValue="next"
            />
          </div>
        }
        code={`<Combobox
  isClearable
  label="Select Framework (Clearable)"
  options={frameworks}
  defaultValue="next"
/>`}
        props={["isClearable: boolean"]}
      />

      {/* Invalid State */}
      <DocsComponent
        title="Invalid State"
        description="Applies error border and text styling for form validation errors."
        preview={
          <div className="w-full">
            <Combobox
              isInvalid
              label="Framework (Required)"
              options={frameworks}
              placeholder="Framework selection is required"
            />
          </div>
        }
        code={`<Combobox
  isInvalid
  label="Framework (Required)"
  options={frameworks}
  placeholder="Framework selection is required"
/>`}
        props={["isInvalid: boolean"]}
      />

      {/* Disabled State */}
      <DocsComponent
        title="Disabled Component State"
        description="Disables user interaction for the entire combobox component."
        preview={
          <div className="w-full">
            <Combobox
              disabled
              label="Framework (Disabled)"
              options={frameworks}
              defaultValue="react"
            />
          </div>
        }
        code={`<Combobox
  disabled
  label="Framework (Disabled)"
  options={frameworks}
  defaultValue="react"
/>`}
        props={["disabled: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Combobox Table */}
      <DocsComponent
        title="Props — Combobox"
        description="Properties to configure the Combobox component."
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
                  <td className="px-3 py-2 font-mono text-primary">options</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ComboboxOption[]</td>
                  <td className="px-3 py-2 text-muted-foreground">required</td>
                  <td className="px-3 py-2 text-muted-foreground">Array of value, label, description, icon, and disabled option objects.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">value</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Controlled selected option value.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">defaultValue</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">''</td>
                  <td className="px-3 py-2 text-muted-foreground">Initial selected option value when uncontrolled.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onValueChange</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(value: string) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback fired when option selection changes.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">placeholder</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'Select option...'</td>
                  <td className="px-3 py-2 text-muted-foreground">Placeholder text when nothing is selected.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">searchPlaceholder</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'Search...'</td>
                  <td className="px-3 py-2 text-muted-foreground">Placeholder text inside the search input.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">emptyText</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'No results found.'</td>
                  <td className="px-3 py-2 text-muted-foreground">Message displayed when search query returns no items.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isClearable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders a clear button to reset selected value.</td>
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
                  <td className="px-3 py-2 text-muted-foreground">Disables user interaction for the entire combobox component.</td>
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
