"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  FilterBuilder,
  type FilterGroup,
  type FilterField,
} from "@/components/ui/filterBuilder/filterBuilder";
import { filterBuilderCode } from "@/components/ui/filterBuilder/filterBuilder.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const defaultFields: FilterField[] = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "text" },
  { id: "age", label: "Age", type: "number" },
  {
    id: "role",
    label: "Role",
    type: "select",
    options: [
      { label: "Admin", value: "admin" },
      { label: "Editor", value: "editor" },
      { label: "Viewer", value: "viewer" },
    ],
  },
];

function DefaultDemo() {
  const [filter, setFilter] = React.useState<FilterGroup>({
    conjunction: "AND",
    rules: [{ field: "name", operator: "contains", value: "" }],
  });
  return (
    <div className="w-full max-w-2xl">
      <FilterBuilder fields={defaultFields} value={filter} onChange={setFilter} />
    </div>
  );
}

function MultipleRulesDemo() {
  const [filter, setFilter] = React.useState<FilterGroup>({
    conjunction: "AND",
    rules: [
      { field: "name", operator: "contains", value: "John" },
      { field: "age", operator: "greater_than", value: 18 },
      { field: "role", operator: "equals", value: "admin" },
    ],
  });
  return (
    <div className="w-full max-w-2xl">
      <FilterBuilder fields={defaultFields} value={filter} onChange={setFilter} />
    </div>
  );
}

export default function FilterBuilderPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Filter Builder"
        description="A visual query builder for creating conditional filters with AND/OR conjunctions, dynamic field selectors, comparison operators, and value inputs."
      />

      <ImportSnippet importCode={`import { FilterBuilder } from "@/components/ui/filterBuilder/filterBuilder";`} />

      <InstallationBlock componentName="filterBuilder" />

      <Tabs defaultValue="filterBuilder">
        <TabsList background={false}>
          <TabsTrigger
            value="filterBuilder"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            filterBuilder.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="filterBuilder">
          <CodeBlock
            code={filterBuilderCode}
            componentName="filterBuilder.tsx"
            description="Visual query builder with AND/OR conjunctions, dynamic fields, and operator support."
            tags={["React", "Tailwind", "UI Component", "Filter", "Query Builder"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A single-rule filter builder with field, operator, and value selectors."
        preview={<DefaultDemo />}
        code={`const [filter, setFilter] = React.useState<FilterGroup>({
  conjunction: "AND",
  rules: [{ field: "name", operator: "contains", value: "" }],
});

<FilterBuilder
  fields={[
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "text" },
    { id: "age", label: "Age", type: "number" },
    { id: "role", label: "Role", type: "select", options: [...] },
  ]}
  value={filter}
  onChange={setFilter}
/>`}
      />

      {/* Multiple Rules */}
      <DocsComponent
        title="Multiple Rules"
        description="Complex filter with multiple conditions and a toggleable AND/OR conjunction."
        preview={<MultipleRulesDemo />}
        code={`const [filter, setFilter] = React.useState<FilterGroup>({
  conjunction: "AND",
  rules: [
    { field: "name", operator: "contains", value: "John" },
    { field: "age", operator: "greater_than", value: 18 },
    { field: "role", operator: "equals", value: "admin" },
  ],
});

<FilterBuilder fields={fields} value={filter} onChange={setFilter} />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">FilterBuilder</h3>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">fields</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">FilterField[]</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Available fields for filter rules.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">value</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">FilterGroup</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Current filter state with conjunction and rules.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">onChange</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">(filter: FilterGroup) =&gt; void</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Callback when filter changes.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">FilterField</h3>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">id</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Unique field identifier.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">label</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Display label for the field.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">type</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{`"text" | "number" | "select"`}</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Input type for the value field.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">options</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{`{ label: string; value: string }[]`}</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Options for select-type fields.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
