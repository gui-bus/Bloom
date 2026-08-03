"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Autocomplete } from "@/components/ui/autocomplete/autocomplete";
import { autocompleteCode } from "@/components/ui/autocomplete/autocomplete.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const sampleFrameworks = [
  {
    label: "Next.js",
    value: "nextjs",
    description: "React framework for production",
  },
  {
    label: "React",
    value: "react",
    description: "UI library for web interfaces",
  },
  {
    label: "Vue.js",
    value: "vue",
    description: "Progressive JavaScript framework",
  },
  {
    label: "Svelte",
    value: "svelte",
    description: "Cybernetically enhanced web apps",
  },
  {
    label: "Angular",
    value: "angular",
    description: "Platform for mobile & desktop",
  },
  { label: "Remix", value: "remix", description: "Full stack web framework" },
];

export default function AutocompletePage() {
  const [selectedFramework, setSelectedFramework] = React.useState("");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Autocomplete"
        description="A search input component with live suggestion filtering, custom value entry, match text highlighting, and debounced query support."
      />

      <ImportSnippet
        importCode={`import { Autocomplete } from "@/components/ui/autocomplete/autocomplete";`}
      />

      <InstallationBlock componentName="autocomplete" />

      <Tabs defaultValue="autocomplete">
        <TabsList background={false}>
          <TabsTrigger
            value="autocomplete"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            autocomplete.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="autocomplete">
          <CodeBlock
            code={autocompleteCode}
            componentName="autocomplete.tsx"
            description="Autocomplete input component with match highlighting and async searching support."
            tags={["React", "Autocomplete", "Input", "Search"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard autocomplete search input filtering options live with match text highlighting."
        preview={
          <div className="w-full max-w-sm">
            <Autocomplete
              label="Select Framework"
              placeholder="Search framework..."
              options={sampleFrameworks}
              onChange={setSelectedFramework}
            />
            {selectedFramework && (
              <p className="text-xs font-mono text-muted-foreground mt-2">
                Selected value:{" "}
                <span className="font-bold text-primary">
                  {selectedFramework}
                </span>
              </p>
            )}
          </div>
        }
        code={`<Autocomplete
  label="Select Framework"
  placeholder="Search framework..."
  options={sampleFrameworks}
  onChange={setSelectedFramework}
/>`}
      />

      {/* Async Searching State */}
      <DocsComponent
        title="Async Loading State (isSearching)"
        description="Renders a loading spinner inside the input when fetching remote suggestions."
        preview={
          <div className="w-full max-w-sm">
            <Autocomplete
              label="Remote User Search"
              placeholder="Type to fetch users..."
              options={[]}
              isSearching
            />
          </div>
        }
        code={`<Autocomplete
  label="Remote User Search"
  placeholder="Type to fetch users..."
  options={[]}
  isSearching
/>`}
        props={["isSearching: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Autocomplete"
        description="Supported properties for Autocomplete."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">options</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    AutocompleteOption[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of label/value suggestion items.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    highlightMatch
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Highlights matching search query text in options.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isSearching
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays loading spinner inside input.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    allowCustomValue
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Allows committing custom typed input text not present in
                    options.
                  </td>
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
