import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Textarea",
  description: "Multiline text input component with character counter, validation states, auto-resize, and variants.",
};

import { Textarea } from "@/components/ui/textarea/textarea";
import { textareaCode } from "@/components/ui/textarea/textarea.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function TextareaComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Textarea"
        description="A multiline text area component supporting character limit counters, visual variants, responsive height scales, and validation states."
      />

      <Tabs defaultValue="textarea">
        <TabsList background={false}>
          <TabsTrigger
            value="textarea"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            textarea.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="textarea">
          <CodeBlock
            code={textareaCode}
            componentName="textarea.tsx"
            description="Core implementation of the Textarea component."
            tags={["React", "Tailwind", "UI Component", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard textarea with label and placeholder."
        preview={
          <div className="w-full max-w-sm">
            <Textarea label="Description" placeholder="Enter detailed description..." />
          </div>
        }
        code={`<div className="w-full max-w-sm">
  <Textarea label="Description" placeholder="Enter detailed description..." />
</div>`}
      />

      {/* Character Counter */}
      <DocsComponent
        title="Character Counter"
        description="Pass maxCount to automatically display character usage limit."
        preview={
          <div className="w-full max-w-sm">
            <Textarea
              label="Bio"
              placeholder="Tell us a little bit about yourself..."
              maxCount={200}
              description="Keep it short and friendly."
            />
          </div>
        }
        code={`<div className="w-full max-w-sm">
  <Textarea
    label="Bio"
    placeholder="Tell us a little bit about yourself..."
    maxCount={200}
    description="Keep it short and friendly."
  />
</div>`}
        props={["maxCount: number"]}
      />

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Available in default, bordered, flat, and underlined styles."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <Textarea variant="default" label="Default" placeholder="Default style" />
            <Textarea variant="bordered" label="Bordered" placeholder="Bordered style" />
            <Textarea variant="flat" label="Flat" placeholder="Flat style" />
            <Textarea variant="underlined" label="Underlined" placeholder="Underlined style" />
          </div>
        }
        code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
  <Textarea variant="default" label="Default" placeholder="Default style" />
  <Textarea variant="bordered" label="Bordered" placeholder="Bordered style" />
  <Textarea variant="flat" label="Flat" placeholder="Flat style" />
  <Textarea variant="underlined" label="Underlined" placeholder="Underlined style" />
</div>`}
        props={["variant: 'default' | 'bordered' | 'flat' | 'underlined'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Textarea"
        description="Properties to configure the Textarea component."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'flat' | 'underlined'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Visual style variant.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">maxCount</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Maximum character length counter limit.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isInvalid</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Applies error state styles.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">errorMessage</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Error message string displayed when invalid.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
