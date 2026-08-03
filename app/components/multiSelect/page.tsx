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
import { MultiSelect } from "@/components/ui/multiSelect/multiSelect";
import { multiSelectCode } from "@/components/ui/multiSelect/multiSelect.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

const fruitOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Dragon Fruit", value: "dragon-fruit" },
  { label: "Elderberry", value: "elderberry" },
  { label: "Fig", value: "fig" },
  { label: "Grape", value: "grape" },
];

const techOptions = [
  {
    label: "React",
    value: "react",
    icon: <Icon icon="devicon:react" className="size-4" />,
  },
  {
    label: "TypeScript",
    value: "typescript",
    icon: <Icon icon="devicon:typescript" className="size-4" />,
  },
  {
    label: "Next.js",
    value: "nextjs",
    icon: <Icon icon="devicon:nextjs" className="size-4" />,
  },
  {
    label: "Tailwind CSS",
    value: "tailwind",
    icon: <Icon icon="devicon:tailwindcss" className="size-4" />,
  },
  {
    label: "Node.js",
    value: "nodejs",
    icon: <Icon icon="devicon:nodejs" className="size-4" />,
  },
];

function DefaultDemo() {
  const [value, setValue] = React.useState<string[]>(["apple", "cherry"]);
  return (
    <div className="w-full max-w-sm">
      <MultiSelect
        options={fruitOptions}
        value={value}
        onChange={setValue}
        placeholder="Select fruits..."
        label="Fruits"
      />
    </div>
  );
}

function WithIconsDemo() {
  const [value, setValue] = React.useState<string[]>(["react", "typescript"]);
  return (
    <div className="w-full max-w-sm">
      <MultiSelect
        options={techOptions}
        value={value}
        onChange={setValue}
        placeholder="Select technologies..."
        label="Tech Stack"
      />
    </div>
  );
}

function MaxCountDemo() {
  const [value, setValue] = React.useState<string[]>(["apple"]);
  return (
    <div className="w-full max-w-sm">
      <MultiSelect
        options={fruitOptions}
        value={value}
        onChange={setValue}
        placeholder="Select up to 3 fruits..."
        label="Max 3 Selections"
        maxCount={3}
      />
    </div>
  );
}

const groupedTechOptions = [
  {
    label: "React",
    value: "react",
    category: "Frontend Frameworks",
    icon: <Icon icon="devicon:react" className="size-4" />,
  },
  {
    label: "Vue.js",
    value: "vue",
    category: "Frontend Frameworks",
    icon: <Icon icon="devicon:vuejs" className="size-4" />,
  },
  {
    label: "Next.js",
    value: "nextjs",
    category: "Frontend Frameworks",
    icon: <Icon icon="devicon:nextjs" className="size-4" />,
  },
  {
    label: "Node.js",
    value: "nodejs",
    category: "Backend Runtime",
    icon: <Icon icon="devicon:nodejs" className="size-4" />,
  },
  {
    label: "Python",
    value: "python",
    category: "Backend Runtime",
    icon: <Icon icon="devicon:python" className="size-4" />,
  },
  {
    label: "PostgreSQL",
    value: "postgres",
    category: "Databases",
    icon: <Icon icon="devicon:postgresql" className="size-4" />,
  },
  {
    label: "MongoDB",
    value: "mongodb",
    category: "Databases",
    icon: <Icon icon="devicon:mongodb" className="size-4" />,
  },
];

function GroupedCategoryDemo() {
  const [value, setValue] = React.useState<string[]>([
    "react",
    "nodejs",
    "postgres",
  ]);
  return (
    <div className="w-full max-w-md">
      <MultiSelect
        options={groupedTechOptions}
        value={value}
        onChange={setValue}
        placeholder="Select ecosystem tools..."
        label="Ecosystem Stack (Select All & Collapsible Groups)"
        showSelectAll
      />
    </div>
  );
}

export default function MultiSelectPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Multi Select"
        description="A searchable multi-selection input with removable pill badges, Select All / Deselect All batch actions, collapsible header categories, keyboard navigation, and max count enforcement."
      />

      <ImportSnippet
        importCode={`import { MultiSelect } from "@/components/ui/multiSelect/multiSelect";`}
      />

      <InstallationBlock componentName="multiSelect" />

      <Tabs defaultValue="multiSelect">
        <TabsList background={false}>
          <TabsTrigger
            value="multiSelect"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            multiSelect.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="multiSelect">
          <CodeBlock
            code={multiSelectCode}
            componentName="multiSelect.tsx"
            description="Searchable multi-select input supporting batch select/deselect actions and collapsible category grouping."
            tags={[
              "React",
              "Tailwind",
              "UI Component",
              "Form",
              "Multi Select",
              "Categories",
            ]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A multi-select input with pre-selected items and search filtering."
        preview={<DefaultDemo />}
        code={`const [value, setValue] = React.useState<string[]>(["apple", "cherry"]);

<MultiSelect
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ]}
  value={value}
  onChange={setValue}
  placeholder="Select fruits..."
  label="Fruits"
/>`}
      />

      <DocsComponent
        title="With Icons"
        description="Options can include icons for richer visual context."
        preview={<WithIconsDemo />}
        code={`const [value, setValue] = React.useState<string[]>(["react", "typescript"]);

<MultiSelect
  options={[
    { label: "React", value: "react", icon: <Icon icon="devicon:react" className="size-4" /> },
    { label: "TypeScript", value: "typescript", icon: <Icon icon="devicon:typescript" className="size-4" /> },
  ]}
  value={value}
  onChange={setValue}
  placeholder="Select technologies..."
  label="Tech Stack"
/>`}
      />

      <DocsComponent
        title="Max Count"
        description="Limit the number of selectable items with the maxCount prop."
        preview={<MaxCountDemo />}
        code={`const [value, setValue] = React.useState<string[]>(["apple"]);

<MultiSelect
  options={fruitOptions}
  value={value}
  onChange={setValue}
  placeholder="Select up to 3 fruits..."
  label="Max 3 Selections"
  maxCount={3}
/>`}
      />

      <DocsComponent
        title="Select All Batch Actions & Collapsible Category Headers"
        description="Batch select or clear all filtered options with 'showSelectAll', and group items into collapsible category sections via the 'category' option field."
        preview={<GroupedCategoryDemo />}
        code={`<MultiSelect
  options={[
    { label: "React", value: "react", category: "Frontend Frameworks" },
    { label: "Node.js", value: "nodejs", category: "Backend Runtime" },
  ]}
  value={value}
  onChange={setValue}
  showSelectAll
/>`}
        props={["showSelectAll: boolean", "category?: string (in option)"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Prop
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Type
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Default
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                showSelectAll
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                boolean
              </td>
              <td className="px-4 py-3 text-zinc-400">true</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Renders batch action bar for Select All and Clear.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                options
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                MultiSelectOption[]
              </td>
              <td className="px-4 py-3 text-zinc-400">—</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Array of selectable options (with optional category & icon).
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                value
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                string[]
              </td>
              <td className="px-4 py-3 text-zinc-400">—</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Currently selected values.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                onChange
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                (value: string[]) =&gt; void
              </td>
              <td className="px-4 py-3 text-zinc-400">—</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                Callback when selection changes.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
