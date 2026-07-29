import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Combobox",
  description: "Autocomplete input and command palette with real-time filtering.",
};

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

export default function ComboboxComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Combobox"
        description="An autocomplete input combo box component allowing users to filter and select from a list of options with live search."
      />

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
            description="Core implementation of the Combobox component."
            tags={["React", "Tailwind", "Autocomplete", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Filterable combobox list."
        preview={
          <div className="w-full max-w-xs">
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

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
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Array of value and label option objects.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">placeholder</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'Select option...'</td>
                  <td className="px-3 py-2 text-muted-foreground">Placeholder text when nothing is selected.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">emptyText</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'No results found.'</td>
                  <td className="px-3 py-2 text-muted-foreground">Message displayed when search query returns no items.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
