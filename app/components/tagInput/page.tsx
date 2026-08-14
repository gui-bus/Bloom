"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
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
  const [tags2g, setTags2g] = React.useState<string[]>(["Bloom"]);
  const [tags2h, setTags2h] = React.useState<string[]>(["Bloom"]);

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

      <CodeBlock
        code={tagInputCode}
        componentName="tagInput.tsx"
        description="Core implementation of the TagInput component with styling variants, colors, sizes, tag styling, and input validation."
        tags={["React", "Tailwind", "Form", "TagInput", "Badge"]}
      />

      <DocsComponent
        title="Default"
        description="A standard tag input with interactive tag addition and deletion."
        props={["value: string[]", "onChange: (value: string[]) => void"]}
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
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'filled' | 'glow' | 'glassmorphism' | 'gradient-border' | 'underlined'",
        ]}
        title="Variants"
        description="Defines the visual appearance of the tag input using the 'variant' prop."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <TagInput
              variant="default"
              value={tags2a}
              onChange={setTags2a}
              label="Default"
            />
            <TagInput
              variant="bordered"
              value={tags2b}
              onChange={setTags2b}
              label="Bordered"
            />
            <TagInput
              variant="flat"
              value={tags2c}
              onChange={setTags2c}
              label="Flat"
            />
            <TagInput
              variant="filled"
              value={tags2e}
              onChange={setTags2e}
              label="Filled"
            />
            <TagInput
              variant="glow"
              value={tags2f}
              onChange={setTags2f}
              label="Glow"
            />
            <TagInput
              variant="glassmorphism"
              value={tags2g}
              onChange={setTags2g}
              label="Glassmorphism"
            />
            <TagInput
              variant="gradient-border"
              value={tags2h}
              onChange={setTags2h}
              label="Gradient Border"
            />
            <TagInput
              variant="underlined"
              value={tags2d}
              onChange={setTags2d}
              label="Underlined"
            />
          </div>
        }
        code={`<TagInput variant="default" value={tags} onChange={setTags} label="Default" />
<TagInput variant="bordered" value={tags} onChange={setTags} label="Bordered" />
<TagInput variant="flat" value={tags} onChange={setTags} label="Flat" />
<TagInput variant="filled" value={tags} onChange={setTags} label="Filled" />
<TagInput variant="glow" value={tags} onChange={setTags} label="Glow" />
<TagInput variant="glassmorphism" value={tags} onChange={setTags} label="Glassmorphism" />
<TagInput variant="gradient-border" value={tags} onChange={setTags} label="Gradient Border" />
<TagInput variant="underlined" value={tags} onChange={setTags} label="Underlined" />`}
      />

      <DocsComponent
        title="Sizes"
        description="Available in sm, md, and lg sizes."
        props={["size: 'sm' | 'md' | 'lg'"]}
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
        props={[
          "tagColor: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
          "tagVariant: 'default' | 'bordered' | 'flat' | 'ghost' | 'shadow'",
        ]}
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
        props={[
          "maxTags: number",
          "allowDuplicates: boolean",
          "validate: (tag: string) => boolean | string",
        ]}
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

      <DocsComponent
        title="Required State"
        description="Displays an asterisk next to the label indicating that adding tags is mandatory."
        preview={
          <div className="max-w-xs w-full">
            <TagInput
              isRequired
              label="Skills & Expertise"
              placeholder="Type and press enter..."
            />
          </div>
        }
        code={`<TagInput isRequired label="Skills & Expertise" placeholder="Type and press enter..." />`}
        props={["isRequired: boolean"]}
      />

      <DocsComponent
        title="Props — TagInput"
        description="Properties for configuring the TagInput component."
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
                  <td className="px-3 py-2 font-mono text-primary">value</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The array of tags to display.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onChange</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (value: string[]) =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback fired when tags are added or removed.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "default" | "bordered" | "flat" | "underlined" | "filled" |
                    "glow"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"default"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The styling variant of the input wrapper.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "sm" | "md" | "lg"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"md"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Height and padding size of the input wrapper.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">tagColor</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "default" | "primary" | "secondary" | "accent" | "success" |
                    "warning" | "danger"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"primary"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The semantic color of the rendered tag badges.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    tagVariant
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    "default" | "bordered" | "flat" | "ghost" | "shadow"
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">"flat"</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The badge variant style of the rendered tags.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">maxTags</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Maximum number of tags allowed.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    allowDuplicates
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Whether duplicate tags are allowed.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">validate</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (tag: string) =&gt; boolean | string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom validation function. Return false or a string to
                    block adding the tag.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
      <DocsPagination />
    </div>
  );
}
