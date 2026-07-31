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
import { Combobox, type ComboboxOption } from "@/components/ui/combobox/combobox";
import { comboboxCode } from "@/components/ui/combobox/combobox.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const groupedTechStack: ComboboxOption[] = [
  { value: "react", label: "React", description: "UI Library for Web", icon: "logos:react", group: "Frontend" },
  { value: "nextjs", label: "Next.js 16", description: "Full-stack React Framework", icon: "logos:nextjs-icon", group: "Frontend" },
  { value: "vue", label: "Vue.js", description: "Progressive Framework", icon: "logos:vue", group: "Frontend" },
  { value: "nodejs", label: "Node.js", description: "Async JavaScript Runtime", icon: "logos:nodejs-icon", group: "Backend" },
  { value: "fastapi", label: "FastAPI", description: "High Performance Python Framework", icon: "logos:fastapi", group: "Backend" },
  { value: "postgresql", label: "PostgreSQL", description: "Relational Database Engine", icon: "logos:postgresql", group: "Database" },
  { value: "redis", label: "Redis", description: "In-memory Data Store", icon: "logos:redis", group: "Database" },
];

export default function ComboboxComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Combobox"
        description="An autocomplete combo box featuring smart fuzzy text similarity search, grouped sections with sticky headers, custom icons, descriptions, and quick clear triggers."
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
            description="Core implementation of the Combobox component with fuzzy search and sticky group headers."
            tags={["React", "Tailwind", "Autocomplete", "Fuzzy Search", "Combobox"]}
          />
        </TabsContent>
      </Tabs>

      {/* Fuzzy Matching Search */}
      <DocsComponent
        title="Smart Fuzzy Search Filter"
        description="Fuzzy matching algorithm enabled by default. Try searching with minor typos or partial terms (e.g. 'rct', 'nxt', 'pstgrs') to see approximate results."
        preview={
          <div className="w-full max-w-sm">
            <Combobox
              isFuzzySearch
              isClearable
              label="Technology (Fuzzy Search)"
              options={groupedTechStack}
              placeholder="Search with or without typos..."
            />
          </div>
        }
        code={`<Combobox
  isFuzzySearch
  isClearable
  label="Technology (Fuzzy Search)"
  options={groupedTechStack}
  placeholder="Search with or without typos..."
/>`}
        props={["isFuzzySearch: boolean"]}
      />

      {/* Section Grouping Sticky */}
      <DocsComponent
        title="Section Grouping with Sticky Headers"
        description="Group options by providing the 'group' property. Headers remain fixed (sticky position) while scrolling through options."
        preview={
          <div className="w-full max-w-sm">
            <Combobox
              label="Grouped Tech Stack"
              options={groupedTechStack}
              placeholder="Select by category..."
              defaultValue="react"
            />
          </div>
        }
        code={`<Combobox
  label="Grouped Tech Stack"
  options={[
    { value: "react", label: "React", group: "Frontend" },
    { value: "nextjs", label: "Next.js", group: "Frontend" },
    { value: "nodejs", label: "Node.js", group: "Backend" },
    { value: "postgresql", label: "PostgreSQL", group: "Database" },
  ]}
/>`}
        props={["options[].group: string"]}
      />

      {/* Clearable and Invalid State */}
      <DocsComponent
        title="Clearable Action & Validation State"
        description="One-click clear button to reset selection and visual validation error state."
        preview={
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl">
            <Combobox
              isClearable
              label="Clearable Field"
              options={groupedTechStack}
              defaultValue="nextjs"
            />
            <Combobox
              isInvalid
              label="Required Selection"
              options={groupedTechStack}
              placeholder="Selection required"
            />
          </div>
        }
        code={`<Combobox isClearable label="Clearable Field" options={groupedTechStack} defaultValue="nextjs" />
<Combobox isInvalid label="Required Selection" options={groupedTechStack} />`}
        props={["isClearable: boolean", "isInvalid: boolean"]}
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
                  <td className="px-3 py-2 font-mono text-primary">isFuzzySearch</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">Enables fuzzy matching text search and sorting algorithm.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">options[].group</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Group/category label name for rendering sticky section headers.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isClearable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Displays a clear button to reset the selected value.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isInvalid</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Applies error validation state styling.</td>
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
