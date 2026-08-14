"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { NumberInput } from "@/components/ui/numberInput/numberInput";
import { numberInputCode } from "@/components/ui/numberInput/numberInput.code";

export default function NumberInputComponentPage() {
  const [val, setVal] = React.useState(2500);
  const [defaultVal, setDefaultVal] = React.useState(0);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Number Input"
        description="Numeric stepper input control supporting stepper positions (split, right, inline), native internationalized currency & percentage formatting, and mouse wheel scroll adjustments."
      />

      <ImportSnippet
        importCode={`import { NumberInput } from "@/components/ui/numberInput/numberInput";`}
      />

      <InstallationBlock componentName="numberInput" />

      <CodeBlock
        code={numberInputCode}
        componentName="numberInput.tsx"
        description="Core implementation of the NumberInput component."
        tags={["React", "NumberInput", "Stepper", "Currency", "Intl"]}
      />

      <DocsComponent
        title="Default"
        description="Standard numeric stepper input with default settings."
        preview={
          <div className="max-w-xs w-full">
            <NumberInput
              label="Standard Number Input"
              defaultValue={0}
              onValueChange={setDefaultVal}
            />
            <p className="text-xs text-muted-foreground mt-2 font-mono">
              Current value: {defaultVal}
            </p>
          </div>
        }
        code={`const [value, setValue] = React.useState(0);

<NumberInput
  label="Standard Number Input"
  defaultValue={0}
  onValueChange={setValue}
/>`}
      />

      <DocsComponent
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'filled' | 'glow' | 'glassmorphism' | 'gradient-border' | 'underlined'",
        ]}
        title="Variants"
        description="Defines the visual appearance of the number input using the 'variant' prop."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <NumberInput label="Default" defaultValue={10} variant="default" />
            <NumberInput
              label="Bordered"
              defaultValue={20}
              variant="bordered"
            />
            <NumberInput label="Flat" defaultValue={30} variant="flat" />
            <NumberInput label="Filled" defaultValue={40} variant="filled" />
            <NumberInput label="Glow" defaultValue={50} variant="glow" />
            <NumberInput
              label="Glassmorphism"
              defaultValue={60}
              variant="glassmorphism"
            />
            <NumberInput
              label="Gradient Border"
              defaultValue={70}
              variant="gradient-border"
            />
            <NumberInput
              label="Underlined"
              defaultValue={80}
              variant="underlined"
            />
          </div>
        }
        code={`<NumberInput variant="default" label="Default" />
<NumberInput variant="bordered" label="Bordered" />
<NumberInput variant="flat" label="Flat" />
<NumberInput variant="filled" label="Filled" />
<NumberInput variant="glow" label="Glow" />
<NumberInput variant="glassmorphism" label="Glassmorphism" />
<NumberInput variant="gradient-border" label="Gradient Border" />
<NumberInput variant="underlined" label="Underlined" />`}
      />

      <DocsComponent
        title="Stepper Positions"
        description="Choose stepper button layout: 'split' (left & right), 'right' (both buttons on right), or 'inline' (compact up/down arrows)."
        preview={
          <div className="flex flex-col gap-4 max-w-xs w-full">
            <NumberInput
              label="Split Stepper (Default)"
              stepperPosition="split"
              defaultValue={5}
            />
            <NumberInput
              label="Right Stepper"
              stepperPosition="right"
              defaultValue={10}
            />
            <NumberInput
              label="Inline Vertical Arrows"
              stepperPosition="inline"
              defaultValue={15}
            />
          </div>
        }
        code={`<NumberInput label="Split Stepper" stepperPosition="split" />
<NumberInput label="Right Stepper" stepperPosition="right" />
<NumberInput label="Inline Vertical Arrows" stepperPosition="inline" />`}
        props={["stepperPosition: 'split' | 'right' | 'inline'"]}
      />

      <DocsComponent
        title="Currency Formatting"
        description="Format numeric values as currency using format='currency', currency='BRL' / 'USD', and locale='pt-BR' / 'en-US'."
        preview={
          <div className="flex flex-col gap-4 max-w-xs w-full">
            <NumberInput
              label="Brazilian Real (pt-BR)"
              format="currency"
              currency="BRL"
              locale="pt-BR"
              defaultValue={1499.9}
              step={100}
            />
            <NumberInput
              label="US Dollar (en-US)"
              format="currency"
              currency="USD"
              locale="en-US"
              defaultValue={2500}
              step={500}
            />
          </div>
        }
        code={`<NumberInput
  label="Brazilian Real"
  format="currency"
  currency="BRL"
  locale="pt-BR"
  defaultValue={1499.90}
/>
<NumberInput
  label="US Dollar"
  format="currency"
  currency="USD"
  locale="en-US"
  defaultValue={2500}
/>`}
        props={["format: 'currency'", "currency: string", "locale: string"]}
      />

      <DocsComponent
        title="Percentage Formatting"
        description="Format numeric values as percentages using format='percent' and precision={2}."
        preview={
          <div className="max-w-xs w-full">
            <NumberInput
              label="Discount Percentage"
              format="percent"
              defaultValue={15}
              step={5}
              min={0}
              max={100}
            />
          </div>
        }
        code={`<NumberInput label="Discount Percentage" format="percent" defaultValue={15} step={5} />`}
        props={["format: 'percent'", "precision?: number"]}
      />

      <DocsComponent
        title="Mouse Wheel Scroll Control"
        description="Enable value adjustments by hovering and scrolling the mouse wheel."
        preview={
          <div className="max-w-xs w-full">
            <NumberInput
              allowMouseWheel
              label="Scroll with Mouse Wheel"
              description="Hover over the input and scroll up or down to adjust value"
              defaultValue={50}
              step={5}
              min={0}
              max={100}
            />
          </div>
        }
        code={`<NumberInput
  allowMouseWheel
  label="Scroll with Mouse Wheel"
  defaultValue={50}
  step={5}
/>`}
        props={["allowMouseWheel: boolean"]}
      />

      <DocsComponent
        props={[
          "val: any",
          "min: any",
          "max: any",
          "step: any",
          "onValueChange: any",
          "setVal: any",
        ]}
        title="Controlled State & Limits"
        description="Controlled number value bound to state with min/max constraints."
        preview={
          <div className="flex flex-col gap-2 max-w-xs w-full">
            <NumberInput
              label="Budget Limit ($)"
              value={val}
              min={0}
              max={10000}
              step={500}
              onValueChange={setVal}
            />
            <span className="text-xs font-mono text-muted-foreground">
              Current Value: ${val}
            </span>
          </div>
        }
        code={`const [val, setVal] = React.useState(2500);

<NumberInput label="Budget Limit" value={val} min={0} max={10000} step={500} onValueChange={setVal} />`}
      />

      <DocsComponent
        title="Required State"
        description="Displays an asterisk next to the label indicating that a numeric value is mandatory."
        preview={
          <div className="max-w-xs w-full">
            <NumberInput isRequired label="Total Quantity" defaultValue={1} />
          </div>
        }
        code={`<NumberInput isRequired label="Total Quantity" defaultValue={1} />`}
        props={["isRequired: boolean"]}
      />

      <DocsComponent
        title="Props — NumberInput"
        description="Supported properties for the NumberInput component."
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
                    stepperPosition
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'split' | 'right' | 'inline'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'split'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Layout position for increment/decrement stepper controls.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">format</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'decimal' | 'currency' | 'percent'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Formulas for native Intl currency and percentage formatting.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    locale / currency
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    'en-US' / 'USD'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    BCC 47 locale (e.g. 'pt-BR') and ISO 4217 currency code
                    (e.g. 'BRL').
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    allowMouseWheel
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables mouse wheel scroll to increment/decrement numeric
                    value.
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
