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
import { Input } from "@/components/ui/input/input";
import { inputCode } from "@/components/ui/input/input.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { Toast } from "@/components/ui/toast/toast";

export default function InputComponentPage() {
  const [debouncedVal, setDebouncedVal] = React.useState("");

  return (
    <div className="space-y-8">
      <Toast />
      <DocsTitle
        title="Input"
        description="A flexible, accessible text input field supporting visual style variants, label placements, native formatting masks, copy shortcuts, debounced search, clearable buttons, and character counters."
      />

      <ImportSnippet
        importCode={`import { Input } from "@/components/ui/input/input";`}
      />

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
            description="Core implementation of the Input component with CVA variants, masks, and interactive features."
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

      {/* Label Placement */}
      <DocsComponent
        title="Label Placement"
        description="Position the label on top, left, inside (floating style), or outside."
        preview={
          <div className="flex flex-col gap-5 w-full max-w-md">
            <Input
              label="Top Placement"
              labelPlacement="top"
              placeholder="Label placed on top"
            />
            <Input
              label="Left Placement"
              labelPlacement="left"
              placeholder="Label placed on left"
            />
            <Input
              label="Inside Placement"
              labelPlacement="inside"
              placeholder="Floating inside label"
            />
          </div>
        }
        code={`<Input label="Top Placement" labelPlacement="top" placeholder="Label placed on top" />
<Input label="Left Placement" labelPlacement="left" placeholder="Label placed on left" />
<Input label="Inside Placement" labelPlacement="inside" placeholder="Floating inside label" />`}
        props={["labelPlacement: 'top' | 'left' | 'inside' | 'outside'"]}
      />

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Choose between default, bordered, flat, filled, glow, glassmorphism, gradient-border, and underlined styles."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Input
              variant="default"
              label="Default"
              placeholder="Default style"
            />
            <Input
              variant="bordered"
              label="Bordered"
              placeholder="Bordered style"
            />
            <Input variant="flat" label="Flat" placeholder="Flat style" />
            <Input variant="filled" label="Filled" placeholder="Filled style" />
            <Input variant="glow" label="Glow" placeholder="Glow focus style" />
            <Input
              variant="glassmorphism"
              label="Glassmorphism text"
              placeholder="Glassmorphism style"
            />
            <Input
              variant="gradient-border"
              label="Gradient Border"
              placeholder="Gradient border style"
            />
            <Input
              variant="underlined"
              label="Underlined"
              placeholder="Underlined style"
            />
          </div>
        }
        code={`<Input variant="default" label="Default" placeholder="Default style" />
<Input variant="bordered" label="Bordered" placeholder="Bordered style" />
<Input variant="flat" label="Flat" placeholder="Flat style" />
<Input variant="filled" label="Filled" placeholder="Filled style" />
<Input variant="glow" label="Glow" placeholder="Glow focus style" />
<Input variant="glassmorphism" label="Glassmorphism" placeholder="Glassmorphism style" />
<Input variant="gradient-border" label="Gradient Border" placeholder="Gradient border style" />
<Input variant="underlined" label="Underlined" placeholder="Underlined style" />`}
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'filled' | 'glow' | 'glassmorphism' | 'gradient-border' | 'underlined'",
        ]}
      />

      {/* Prefix & Suffix */}
      <DocsComponent
        title="Prefix & Suffix"
        description="Embedded inline prefixes and suffixes for URLs, currency, domains, etc."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              prefix="https://"
              suffix=".com"
              label="Website URL"
              placeholder="mycompany"
            />
            <Input prefix="R$" label="Amount" placeholder="1.250,00" />
            <Input
              suffix="@company.com"
              label="Corporate Email"
              placeholder="john"
            />
          </div>
        }
        code={`<Input prefix="https://" suffix=".com" label="Website URL" placeholder="mycompany" />
<Input prefix="R$" label="Amount" placeholder="1.250,00" />
<Input suffix="@company.com" label="Corporate Email" placeholder="john" />`}
        props={["prefix: ReactNode", "suffix: ReactNode"]}
      />

      {/* Native Formatting Masks */}
      <DocsComponent
        title="Native Formatting Masks"
        description="Built-in formatting masks for CPF, CNPJ, Phone, ZIP (CEP), Credit Card, or Custom patterns."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Input mask="CPF" label="CPF Mask" placeholder="000.000.000-00" />
            <Input
              mask="CNPJ"
              label="CNPJ Mask"
              placeholder="00.000.000/0000-00"
            />
            <Input
              mask="Phone"
              label="Phone Mask"
              placeholder="(11) 99999-9999"
            />
            <Input mask="ZIP" label="ZIP (CEP) Mask" placeholder="00000-000" />
            <Input
              mask="CreditCard"
              label="Credit Card Mask"
              placeholder="0000 0000 0000 0000"
            />
            <Input
              mask="Custom"
              customMaskPattern="999-AAA"
              label="Custom Mask (999-AAA)"
              placeholder="123-ABC"
            />
          </div>
        }
        code={`<Input mask="CPF" label="CPF Mask" placeholder="000.000.000-00" />
<Input mask="CNPJ" label="CNPJ Mask" placeholder="00.000.000/0000-00" />
<Input mask="Phone" label="Phone Mask" placeholder="(11) 99999-9999" />
<Input mask="ZIP" label="ZIP (CEP) Mask" placeholder="00000-000" />
<Input mask="CreditCard" label="Credit Card Mask" placeholder="0000 0000 0000 0000" />
<Input mask="Custom" customMaskPattern="999-AAA" label="Custom Mask" placeholder="123-ABC" />`}
        props={[
          "mask: 'CPF' | 'CNPJ' | 'Phone' | 'ZIP' | 'CreditCard' | 'Custom' | Function",
          "customMaskPattern: string",
        ]}
      />

      {/* Interactive Features */}
      <DocsComponent
        title="Clearable, Password Toggle & Copyable"
        description="Built-in triggers for 1-click clear (ESC shortcut), animated password eye toggle, and copy-to-clipboard with toast notification."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              isClearable
              label="Clearable Field (Press ESC to clear)"
              defaultValue="Click X or press ESC to clear me"
            />
            <Input
              isPasswordToggle
              label="Password Field"
              defaultValue="super-secret-password"
            />
            <Input
              isCopyable
              label="Copyable Code"
              defaultValue="ZOE-UI-2026-TOKEN-XYZ"
            />
          </div>
        }
        code={`<Input isClearable label="Clearable Field" defaultValue="Click X or press ESC" />
<Input isPasswordToggle label="Password Field" defaultValue="super-secret-password" />
<Input isCopyable label="Copyable Code" defaultValue="ZOE-UI-2026-TOKEN-XYZ" />`}
        props={[
          "isClearable: boolean",
          "isPasswordToggle: boolean",
          "isCopyable: boolean",
        ]}
      />

      {/* Character Counter & Debounce */}
      <DocsComponent
        title="Character Counter & Debounced Search"
        description="Dynamic character counter with warning color near limit, and debounced callback support."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              showCharacterCount
              maxLength={20}
              label="Bio (Max 20 chars)"
              defaultValue="Hello world Zoe UI"
            />
            <div className="space-y-2">
              <Input
                debouncedOnChange={(val) => setDebouncedVal(val)}
                debounceTimeout={400}
                label="Debounced Search (400ms)"
                placeholder="Type something to test debounce..."
                startContent={
                  <Icon icon="hugeicons:search-01" className="size-4" />
                }
              />
              {debouncedVal && (
                <p className="text-xs text-sky-500 font-mono">
                  Debounced output: <strong>{debouncedVal}</strong>
                </p>
              )}
            </div>
          </div>
        }
        code={`<Input showCharacterCount maxLength={20} label="Bio" defaultValue="Hello world Zoe UI" />
<Input debouncedOnChange={(val) => console.log(val)} debounceTimeout={400} label="Debounced Search" />`}
        props={[
          "showCharacterCount: boolean",
          "maxLength: number",
          "debouncedOnChange: (val: string) => void",
          "debounceTimeout: number",
        ]}
      />

      {/* Accessibility & ARIA Section */}
      <AccessibilityCard />

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
                  <td className="px-3 py-2 font-mono text-primary">
                    labelPlacement
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'top' | 'left' | 'inside' | 'outside'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'top'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Label positioning mode.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'flat' | 'underlined' | 'filled' |
                    'glassmorphism' | 'gradient-border' | 'glow'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual style variant.
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
                    Clear button with 1-click action & ESC key shortcut.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isPasswordToggle
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Animated password visibility toggle button.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">prefix</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Embedded text/element prefix inside the input.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">suffix</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Embedded text/element suffix inside the input.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">mask</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'CPF' | 'CNPJ' | 'Phone' | 'ZIP' | 'CreditCard' | 'Custom' |
                    Function
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Native input formatting mask.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showCharacterCount
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays live character counter with warning color states.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isCopyable
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Quick button to copy content with automatic toast feedback.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    debouncedOnChange
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (value: string) =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback function called after debounceTimeout.
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
