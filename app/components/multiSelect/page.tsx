"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
  { label: "React", value: "react", icon: <Icon icon="devicon:react" className="size-4" /> },
  { label: "TypeScript", value: "typescript", icon: <Icon icon="devicon:typescript" className="size-4" /> },
  { label: "Next.js", value: "nextjs", icon: <Icon icon="devicon:nextjs" className="size-4" /> },
  { label: "Tailwind CSS", value: "tailwind", icon: <Icon icon="devicon:tailwindcss" className="size-4" /> },
  { label: "Node.js", value: "nodejs", icon: <Icon icon="devicon:nodejs" className="size-4" /> },
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

export default function MultiSelectPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Multi Select"
        description="A searchable multi-selection input with removable pill badges, keyboard navigation, and limit enforcement for controlled selection of multiple items."
      />

      <ImportSnippet importCode={`import { MultiSelect } from "@/components/ui/multiSelect/multiSelect";`} />

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
            description="Searchable multi-select input with pill badges, search filter, and keyboard support."
            tags={["React", "Tailwind", "UI Component", "Form", "Multi Select"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
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

      {/* With Icons */}
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

      {/* Max Count */}
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

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
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">options</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">MultiSelectOption[]</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Array of selectable options.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">value</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string[]</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Currently selected values.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">onChange</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">(value: string[]) =&gt; void</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Callback when selection changes.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">placeholder</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">&quot;Select options...&quot;</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Placeholder text when empty.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">label</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">ReactNode</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Label displayed above the input.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">maxCount</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">number</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Maximum number of selectable items.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">isDisabled</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">boolean</td><td className="px-4 py-3 text-zinc-400">false</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Disables the component.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">isInvalid</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">boolean</td><td className="px-4 py-3 text-zinc-400">false</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Applies error styling.</td></tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
