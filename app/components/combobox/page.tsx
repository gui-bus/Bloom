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
  Combobox,
  type ComboboxOption,
} from "@/components/ui/combobox/combobox";
import { comboboxCode } from "@/components/ui/combobox/combobox.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const groupedTechStack: ComboboxOption[] = [
  {
    value: "react",
    label: "React",
    description: "UI Library for Web",
    icon: "logos:react",
    group: "Frontend",
  },
  {
    value: "nextjs",
    label: "Next.js 16",
    description: "Full-stack React Framework",
    icon: "logos:nextjs-icon",
    group: "Frontend",
  },
  {
    value: "vue",
    label: "Vue.js",
    description: "Progressive Framework",
    icon: "logos:vue",
    group: "Frontend",
  },
  {
    value: "nodejs",
    label: "Node.js",
    description: "Async JavaScript Runtime",
    icon: "logos:nodejs-icon",
    group: "Backend",
  },
  {
    value: "fastapi",
    label: "FastAPI",
    description: "High Performance Python Framework",
    icon: "logos:fastapi",
    group: "Backend",
  },
  {
    value: "postgresql",
    label: "PostgreSQL",
    description: "Relational Database Engine",
    icon: "logos:postgresql",
    group: "Database",
  },
  {
    value: "redis",
    label: "Redis",
    description: "In-memory Data Store",
    icon: "logos:redis",
    group: "Database",
  },
];

function MultiSelectDemo() {
  const [selected, setSelected] = React.useState(["react", "nextjs"]);
  return (
    <div className="w-full max-w-sm">
      <Combobox
        isMulti
        isClearable
        label="Select Frameworks (Multi-Select)"
        options={groupedTechStack}
        multiValue={selected}
        onMultiChange={setSelected}
      />
    </div>
  );
}

function CreateOnFlyDemo() {
  const [options, setOptions] = React.useState<ComboboxOption[]>([
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
  ]);
  const [selected, setSelected] = React.useState("react");

  const handleCreate = (newTag: string) => {
    const newOption: ComboboxOption = {
      value: newTag.toLowerCase().replace(/\s+/g, "-"),
      label: newTag,
    };
    setOptions((prev) => [...prev, newOption]);
    setSelected(newOption.value);
  };

  return (
    <div className="w-full max-w-sm">
      <Combobox
        allowCreate
        label="Create Custom Option on the Fly"
        options={options}
        value={selected}
        onValueChange={setSelected}
        onCreate={handleCreate}
        placeholder="Select or type to create..."
      />
    </div>
  );
}

function VirtualizedListDemo() {
  const [selected, setSelected] = React.useState("item-42");

  const thousandOptions: ComboboxOption[] = React.useMemo(() => {
    return Array.from({ length: 10000 }, (_, i) => ({
      value: `item-${i + 1}`,
      label: `Option #${i + 1} — Dataset Item`,
      description: `Virtualized item index ${i + 1}`,
    }));
  }, []);

  return (
    <div className="w-full max-w-sm">
      <Combobox
        isVirtualized
        label="Virtualized List (10,000 Items)"
        options={thousandOptions}
        value={selected}
        onValueChange={setSelected}
        placeholder="Scroll through 10,000 options smoothly..."
      />
    </div>
  );
}

export default function ComboboxComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Combobox"
        description="An autocomplete combo box featuring smart fuzzy text similarity search, multi-select mode with tag pills, on-the-fly option creation, virtualized rendering for 10,000+ items, and sticky section headers."
      />

      <ImportSnippet
        importCode={`import { Combobox } from "@/components/ui/combobox/combobox";`}
      />

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
            description="Core implementation of the Combobox component with multi-select tag pills, creation on the fly, and virtualized list rendering."
            tags={[
              "React",
              "Tailwind",
              "Autocomplete",
              "Fuzzy Search",
              "Virtualized",
              "Combobox",
            ]}
          />
        </TabsContent>
      </Tabs>

      {/* Multi Select Mode */}
      <DocsComponent
        title="Multi-Select Mode with Tag Pills"
        description="Set 'isMulti' to enable selecting multiple items rendered as removable tag pills inside the input trigger."
        preview={<MultiSelectDemo />}
        code={`const [selected, setSelected] = React.useState(["react", "nextjs"]);

<Combobox
  isMulti
  isClearable
  label="Select Frameworks"
  options={groupedTechStack}
  multiValue={selected}
  onMultiChange={setSelected}
/>`}
        props={[
          "isMulti: boolean",
          "multiValue: string[]",
          "onMultiChange: (values: string[]) => void",
        ]}
      />

      {/* Create Option on the Fly */}
      <DocsComponent
        title="Create New Option on the Fly"
        description="Enable 'allowCreate' to allow users to add new custom options directly from the search input via the 'onCreate' callback."
        preview={<CreateOnFlyDemo />}
        code={`<Combobox
  allowCreate
  label="Create Custom Option"
  options={options}
  value={selected}
  onValueChange={setSelected}
  onCreate={(newTag) => {
    setOptions((prev) => [...prev, { value: newTag.toLowerCase(), label: newTag }]);
  }}
/>`}
        props={[
          "allowCreate: boolean",
          "onCreate: (searchQuery: string) => void",
        ]}
      />

      {/* Virtualized List for 1,000+ Items */}
      <DocsComponent
        title="Virtualized List (10,000+ Items)"
        description="Enable 'isVirtualized' for high-performance rendering of datasets with thousands of items without DOM lag."
        preview={<VirtualizedListDemo />}
        code={`const thousandOptions = Array.from({ length: 10000 }, (_, i) => ({
  value: \`item-\${i + 1}\`,
  label: \`Option #\${i + 1} — Dataset Item\`,
}));

<Combobox
  isVirtualized
  label="Virtualized List"
  options={thousandOptions}
  value={selected}
  onValueChange={setSelected}
/>`}
        props={["isVirtualized: boolean", "itemHeight: number"]}
      />

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
                  <td className="px-3 py-2 font-mono text-primary">isMulti</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables multi-selection mode with tag pills inside trigger.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    multiValue
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Selected values array in multi-select mode.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    onMultiChange
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (values: string[]) =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback fired when selected values array changes in
                    multi-select mode.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    allowCreate
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables creating new options on the fly when search term
                    doesn't match existing options.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onCreate</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (query: string) =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback fired when user clicks to create a new option.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isVirtualized
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables virtualized list rendering for large datasets
                    (1,000+ items).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isFuzzySearch
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables fuzzy matching text search and sorting algorithm.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isClearable
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays a clear button to reset selected value(s).
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
