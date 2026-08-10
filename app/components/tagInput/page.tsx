"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { TagInput } from "@/components/ui/tagInput/tagInput";
import { tagInputCode } from "@/components/ui/tagInput/tagInput.code";

export default function TagInputPage() {
  const [tags1, setTags1] = React.useState<string[]>([
    "React",
    "Tailwind",
    "Next.js",
  ]);
  const [tags2a, setTags2a] = React.useState<string[]>(["Bloom"]);
  const [tags2b, setTags2b] = React.useState<string[]>(["Bloom"]);
  const [tags2c, setTags2c] = React.useState<string[]>(["Bloom"]);
  const [tags2d, setTags2d] = React.useState<string[]>(["Bloom"]);
  const [tags2e, setTags2e] = React.useState<string[]>(["Bloom"]);
  const [tags2f, setTags2f] = React.useState<string[]>(["Bloom"]);

  const [tags3a, setTags3a] = React.useState<string[]>([]);
  const [tags3b, setTags3b] = React.useState<string[]>([]);
  const [tags3c, setTags3c] = React.useState<string[]>([]);

  const [tags4a, setTags4a] = React.useState<string[]>([]);
  const [tags4b, setTags4b] = React.useState<string[]>([]);
  const [tags4c, setTags4c] = React.useState<string[]>([]);

  const [tags5a, setTags5a] = React.useState<string[]>([]);
  const [tags5b, setTags5b] = React.useState<string[]>([]);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Tag Input"
        description="An interactive tag input field allowing users to add, manage, and delete tags or chips dynamically."
      />

      <ImportSnippet
        importCode={`import { TagInput } from "@/components/ui/tagInput/tagInput";`}
      />

      <InstallationBlock componentName="tagInput" />

      <Tabs defaultValue="tagInput">
        <TabsList background={false}>
          <TabsTrigger
            value="tagInput"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            tagInput.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tagInput">
          <CodeBlock
            code={tagInputCode}
            componentName="tagInput.tsx"
            description="Core implementation of the TagInput component with styling variants, colors, sizes, tag styling, and input validation."
            tags={["React", "Tailwind", "Form", "TagInput", "Badge"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A standard tag input with interactive tag addition and deletion."
        preview={
          <div className="w-full max-w-md">
            <TagInput
              value={tags1}
              onChange={setTags1}
              placeholder="Type and press Enter or comma..."
            />
          </div>
        }
        code={`const [tags, setTags] = React.useState<string[]>(["React", "Tailwind", "Next.js"]);

<TagInput
  value={tags}
  onChange={setTags}
  placeholder="Type and press Enter or comma..."
/>`}
      />

      <DocsComponent
        title="Variants"
        description="Supports different visual variations matching the Bloom design system."
        preview={
          <div className="w-full max-w-md space-y-4">
            <TagInput
              variant="default"
              value={tags2a}
              onChange={setTags2a}
              label="Default Variant"
            />
            <TagInput
              variant="bordered"
              value={tags2b}
              onChange={setTags2b}
              label="Bordered Variant"
            />
            <TagInput
              variant="flat"
              value={tags2c}
              onChange={setTags2c}
              label="Flat Variant"
            />
            <TagInput
              variant="underlined"
              value={tags2d}
              onChange={setTags2d}
              label="Underlined Variant"
            />
            <TagInput
              variant="filled"
              value={tags2e}
              onChange={setTags2e}
              label="Filled Variant"
            />
            <TagInput
              variant="glow"
              value={tags2f}
              onChange={setTags2f}
              label="Glow Variant"
            />
          </div>
        }
        code={`<TagInput variant="default" value={tags} onChange={setTags} label="Default Variant" />
<TagInput variant="bordered" value={tags} onChange={setTags} label="Bordered Variant" />
<TagInput variant="flat" value={tags} onChange={setTags} label="Flat Variant" />
<TagInput variant="underlined" value={tags} onChange={setTags} label="Underlined Variant" />
<TagInput variant="filled" value={tags} onChange={setTags} label="Filled Variant" />
<TagInput variant="glow" value={tags} onChange={setTags} label="Glow Variant" />`}
      />

      <DocsComponent
        title="Sizes"
        description="Available in sm, md, and lg sizes."
        preview={
          <div className="w-full max-w-md space-y-4">
            <TagInput
              size="sm"
              value={tags3a}
              onChange={setTags3a}
              placeholder="Small size"
            />
            <TagInput
              size="md"
              value={tags3b}
              onChange={setTags3b}
              placeholder="Medium size"
            />
            <TagInput
              size="lg"
              value={tags3c}
              onChange={setTags3c}
              placeholder="Large size"
            />
          </div>
        }
        code={`<TagInput size="sm" value={tags} onChange={setTags} placeholder="Small size" />
<TagInput size="md" value={tags} onChange={setTags} placeholder="Medium size" />
<TagInput size="lg" value={tags} onChange={setTags} placeholder="Large size" />`}
      />

      <DocsComponent
        title="Tag Customizations"
        description="You can customize the color and variant of the tags rendered inside the input."
        preview={
          <div className="w-full max-w-md space-y-4">
            <TagInput
              value={tags4a}
              onChange={setTags4a}
              tagColor="success"
              tagVariant="flat"
              placeholder="Success Flat tags..."
            />
            <TagInput
              value={tags4b}
              onChange={setTags4b}
              tagColor="danger"
              tagVariant="default"
              placeholder="Danger Solid tags..."
            />
            <TagInput
              value={tags4c}
              onChange={setTags4c}
              tagColor="secondary"
              tagVariant="bordered"
              placeholder="Secondary Bordered tags..."
            />
          </div>
        }
        code={`<TagInput value={tags} onChange={setTags} tagColor="success" tagVariant="flat" />
<TagInput value={tags} onChange={setTags} tagColor="danger" tagVariant="default" />
<TagInput value={tags} onChange={setTags} tagColor="secondary" tagVariant="bordered" />`}
      />

      <DocsComponent
        title="Validation & Constraints"
        description="Limit maximum tags, disable duplicates, or pass a validation function (e.g. Email validation)."
        preview={
          <div className="w-full max-w-md space-y-4">
            <TagInput
              value={tags5a}
              onChange={setTags5a}
              maxTags={5}
              placeholder="Max 5 tags allowed..."
              label="Max Tags Limit"
            />
            <TagInput
              value={tags5b}
              onChange={setTags5b}
              validate={(tag) => {
                const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tag);
                return isEmail ? true : "Must be a valid email address.";
              }}
              placeholder="Enter emails..."
              label="Email Validation Only"
            />
          </div>
        }
        code={`<TagInput
  value={tags}
  onChange={setTags}
  maxTags={5}
  label="Max Tags Limit"
/>

<TagInput
  value={tags}
  onChange={setTags}
  validate={(tag) => {
    const isEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(tag);
    return isEmail ? true : "Must be a valid email address.";
  }}
  label="Email Validation Only"
/>`}
      />

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Prop
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Type
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Default
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  value
                </td>
                <td className="px-4 py-3 font-mono text-primary">string[]</td>
                <td className="px-4 py-3 font-mono">[]</td>
                <td className="px-4 py-3">The array of tags to display.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onChange
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (value: string[]) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Callback fired when tags are added or removed.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  variant
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "default" | "bordered" | "flat" | "underlined" | "filled" |
                  "glow"
                </td>
                <td className="px-4 py-3 font-mono">"default"</td>
                <td className="px-4 py-3">
                  The styling variant of the input wrapper.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  size
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "sm" | "md" | "lg"
                </td>
                <td className="px-4 py-3 font-mono">"md"</td>
                <td className="px-4 py-3">
                  Height and padding size of the input wrapper.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  tagColor
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "default" | "primary" | "secondary" | "accent" | "success" |
                  "warning" | "danger"
                </td>
                <td className="px-4 py-3 font-mono">"primary"</td>
                <td className="px-4 py-3">
                  The semantic color of the rendered tag badges.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  tagVariant
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "default" | "bordered" | "flat" | "ghost" | "shadow"
                </td>
                <td className="px-4 py-3 font-mono">"flat"</td>
                <td className="px-4 py-3">
                  The badge variant style of the rendered tags.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  maxTags
                </td>
                <td className="px-4 py-3 font-mono text-primary">number</td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">Maximum number of tags allowed.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  allowDuplicates
                </td>
                <td className="px-4 py-3 font-mono text-primary">boolean</td>
                <td className="px-4 py-3 font-mono">false</td>
                <td className="px-4 py-3">
                  Whether duplicate tags are allowed.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  validate
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (tag: string) =&gt; boolean | string
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Custom validation function. Return false or a string to block
                  adding the tag.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
