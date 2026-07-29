import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Input",
  description: "Text input component supporting visual variants, sizes, icon slots, validation states, and helper descriptions.",
};

import { Input } from "@/components/ui/input/input";
import { inputCode } from "@/components/ui/input/input.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function InputComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Input"
        description="A flexible, accessible text input field. Supports visual variants, size scales, prefix/suffix icon slots, validation feedback, and descriptions."
      />

      <Tabs defaultValue="input">
        <TabsList background={false}>
          <TabsTrigger
            value="input"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            input.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="input">
          <CodeBlock
            code={inputCode}
            componentName="input.tsx"
            description="Core implementation of the Input component with CVA variants and accessibility tags."
            tags={["React", "Tailwind", "UI Component", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Standard input field with label and placeholder."
        preview={
          <div className="w-full max-w-sm">
            <Input label="Email" placeholder="you@example.com" />
          </div>
        }
        code={`<div className="w-full max-w-sm">
  <Input label="Email" placeholder="you@example.com" />
</div>`}
      />

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Choose between default, bordered, flat, and underlined styles."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <Input variant="default" label="Default" placeholder="Default style" />
            <Input variant="bordered" label="Bordered" placeholder="Bordered style" />
            <Input variant="flat" label="Flat" placeholder="Flat style" />
            <Input variant="underlined" label="Underlined" placeholder="Underlined style" />
          </div>
        }
        code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
  <Input variant="default" label="Default" placeholder="Default style" />
  <Input variant="bordered" label="Bordered" placeholder="Bordered style" />
  <Input variant="flat" label="Flat" placeholder="Flat style" />
  <Input variant="underlined" label="Underlined" placeholder="Underlined style" />
</div>`}
        props={["variant: 'default' | 'bordered' | 'flat' | 'underlined'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Available in small (sm), medium (md), and large (lg)."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input size="sm" label="Small" placeholder="Small size" />
            <Input size="md" label="Medium" placeholder="Medium size" />
            <Input size="lg" label="Large" placeholder="Large size" />
          </div>
        }
        code={`<div className="flex flex-col gap-4 w-full max-w-sm">
  <Input size="sm" label="Small" placeholder="Small size" />
  <Input size="md" label="Medium" placeholder="Medium size" />
  <Input size="lg" label="Large" placeholder="Large size" />
</div>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      {/* Start/End Content */}
      <DocsComponent
        title="Icon Slots"
        description="Pass icons or prefix/suffix elements via startContent and endContent."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              label="Username"
              placeholder="gui-bus"
              startContent={<Icon icon="lucide:user" className="size-4" />}
            />
            <Input
              label="Search"
              placeholder="Search components..."
              endContent={<Icon icon="lucide:search" className="size-4" />}
            />
          </div>
        }
        code={`<div className="flex flex-col gap-4 w-full max-w-sm">
  <Input
    label="Username"
    placeholder="gui-bus"
    startContent={<Icon icon="lucide:user" className="size-4" />}
  />
  <Input
    label="Search"
    placeholder="Search components..."
    endContent={<Icon icon="lucide:search" className="size-4" />}
  />
</div>`}
        props={["startContent: ReactNode", "endContent: ReactNode"]}
      />

      {/* Validation & Description */}
      <DocsComponent
        title="Validation & Description"
        description="Display helper text or error messages when invalid."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              description="Must be at least 8 characters long."
            />
            <Input
              label="Email"
              placeholder="invalid-email"
              isInvalid
              errorMessage="Please enter a valid email address."
            />
          </div>
        }
        code={`<div className="flex flex-col gap-4 w-full max-w-sm">
  <Input
    label="Password"
    type="password"
    placeholder="••••••••"
    description="Must be at least 8 characters long."
  />
  <Input
    label="Email"
    placeholder="invalid-email"
    isInvalid
    errorMessage="Please enter a valid email address."
  />
</div>`}
        props={["description: ReactNode", "isInvalid: boolean", "errorMessage: ReactNode"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Input"
        description="Properties to configure the Input component."
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
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual style variant.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'sm' | 'md' | 'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Height and text size scale.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Text label placed above the field.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">startContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Prefix icon or element.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">endContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Suffix icon or element.</td>
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
