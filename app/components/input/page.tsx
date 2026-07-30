"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
    <div className="space-y-8">
      <DocsTitle
        title="Input"
        description="A flexible, accessible text input field supporting visual style variants, size scales, prefix/suffix icon slots, clearable buttons, password toggles, and validation feedback."
      />

      <ImportSnippet importCode={`import { Input } from "@/components/ui/input/input";`} />

      <InstallationBlock componentName="input" />

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
            description="Core implementation of the Input component with CVA variants."
            tags={["React", "Tailwind", "UI Component", "Forms", "Input"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard input field with label and placeholder."
        preview={
          <div className="w-full max-w-sm">
            <Input label="Email Address" placeholder="you@example.com" />
          </div>
        }
        code={`<Input label="Email Address" placeholder="you@example.com" />`}
      />

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Choose between default, bordered, flat, filled, glow, glassmorphism, and underlined styles."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Input variant="default" label="Default" placeholder="Default style" />
            <Input variant="bordered" label="Bordered" placeholder="Bordered style" />
            <Input variant="flat" label="Flat" placeholder="Flat style" />
            <Input variant="filled" label="Filled" placeholder="Filled style" />
            <Input variant="glow" label="Glow" placeholder="Glow focus style" />
            <Input variant="underlined" label="Underlined" placeholder="Underlined style" />
          </div>
        }
        code={`<Input variant="default" label="Default" placeholder="Default style" />
<Input variant="bordered" label="Bordered" placeholder="Bordered style" />
<Input variant="flat" label="Flat" placeholder="Flat style" />
<Input variant="filled" label="Filled" placeholder="Filled style" />
<Input variant="glow" label="Glow" placeholder="Glow focus style" />
<Input variant="underlined" label="Underlined" placeholder="Underlined style" />`}
        props={["variant: 'default' | 'bordered' | 'flat' | 'filled' | 'glow' | 'underlined'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Available in small (sm), medium (md), and large (lg) height scales."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input size="sm" label="Small (sm)" placeholder="Small size input" />
            <Input size="md" label="Medium (md)" placeholder="Medium size input" />
            <Input size="lg" label="Large (lg)" placeholder="Large size input" />
          </div>
        }
        code={`<Input size="sm" label="Small (sm)" placeholder="Small size input" />
<Input size="md" label="Medium (md)" placeholder="Medium size input" />
<Input size="lg" label="Large (lg)" placeholder="Large size input" />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      {/* Icon Slots */}
      <DocsComponent
        title="Icon Slots & Clearable"
        description="Pass start/end content icons, enable quick clearing with 'isClearable', or password visibility toggle."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              label="Username"
              placeholder="guilherme"
              startContent={<Icon icon="hugeicons:user-02" className="size-4" />}
            />
            <Input
              isClearable
              label="Search Query"
              placeholder="Type to filter..."
              defaultValue="Component Library"
              startContent={<Icon icon="hugeicons:search-01" className="size-4" />}
            />
            <Input
              isPasswordToggle
              label="Password"
              placeholder="Enter your password"
              defaultValue="super-secret-pass"
            />
          </div>
        }
        code={`<Input
  label="Username"
  placeholder="guilherme"
  startContent={<Icon icon="hugeicons:user-02" className="size-4" />}
/>

<Input
  isClearable
  label="Search Query"
  defaultValue="Component Library"
  startContent={<Icon icon="hugeicons:search-01" className="size-4" />}
/>

<Input
  isPasswordToggle
  label="Password"
  defaultValue="super-secret-pass"
/>`}
        props={["startContent: ReactNode", "endContent: ReactNode", "isClearable: boolean", "isPasswordToggle: boolean"]}
      />

      {/* Validation & Description */}
      <DocsComponent
        title="Validation & Description"
        description="Display helper text descriptions or error validation feedback."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              label="Account Name"
              placeholder="e.g. Workspace Admin"
              description="Used for internal workspace identification."
            />
            <Input
              isInvalid
              label="Email Address"
              placeholder="invalid-email"
              errorMessage="Please enter a valid email address."
            />
          </div>
        }
        code={`<Input
  label="Account Name"
  placeholder="e.g. Workspace Admin"
  description="Used for internal workspace identification."
/>

<Input
  isInvalid
  label="Email Address"
  placeholder="invalid-email"
  errorMessage="Please enter a valid email address."
/>`}
        props={["description: ReactNode", "isInvalid: boolean", "errorMessage: ReactNode"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Input Table */}
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
                    'default' | 'bordered' | 'flat' | 'filled' | 'glow' | 'underlined' | 'glassmorphism'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Visual style variant.</td>
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
                  <td className="px-3 py-2 text-muted-foreground">Text label placed above or inside the field.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">startContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Prefix icon or element slot inside input.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">endContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Suffix icon or element slot inside input.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isClearable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders a clear button to reset input value.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isPasswordToggle</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders an eye toggle button to show/hide password text.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isInvalid</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Applies error state border and text styles.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">errorMessage</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Error message paragraph displayed when invalid.</td>
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
