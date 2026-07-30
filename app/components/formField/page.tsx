"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { formFieldCode } from "@/components/ui/formField/formField.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function FormFieldComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Form Field"
        description="A wrapper component providing layout structure, label association, helper descriptions, and error state validation messaging for inputs."
      />

      <Tabs defaultValue="formField">
        <TabsList background={false}>
          <TabsTrigger
            value="formField"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            formField.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="formField">
          <CodeBlock
            code={formFieldCode}
            componentName="formField.tsx"
            description="Core implementation of the FormField component."
            tags={["React", "Form", "FormField", "Validation"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard FormField wrapping an Input control."
        preview={
          <div className="max-w-sm w-full">
            <FormField label="Account Email" description="Enter your primary account login email address.">
              <Input type="email" placeholder="alex@company.com" />
            </FormField>
          </div>
        }
        code={`<FormField label="Account Email" description="Enter your primary email.">
  <Input type="email" placeholder="alex@company.com" />
</FormField>`}
      />

      {/* Required */}
      <DocsComponent
        title="Required Field Indicator"
        description="Renders a red asterisk indicator on the field label with the 'isRequired' prop."
        preview={
          <div className="max-w-sm w-full">
            <FormField label="Full Name" isRequired>
              <Input placeholder="Alex Morgan" />
            </FormField>
          </div>
        }
        code={`<FormField label="Full Name" isRequired>
  <Input placeholder="Alex Morgan" />
</FormField>`}
        props={["isRequired: boolean"]}
      />

      {/* Validation Error State */}
      <DocsComponent
        title="Validation Error State"
        description="Display validation failure messages in red using 'isInvalid' and 'errorMessage'."
        preview={
          <div className="max-w-sm w-full">
            <FormField
              label="Password"
              isRequired
              isInvalid
              errorMessage="Password must be at least 8 characters long and contain a symbol."
            >
              <Input type="password" value="123" />
            </FormField>
          </div>
        }
        code={`<FormField
  label="Password"
  isRequired
  isInvalid
  errorMessage="Password must be at least 8 characters long."
>
  <Input type="password" value="123" />
</FormField>`}
        props={["isInvalid: boolean", "errorMessage: ReactNode"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — FormField"
        description="Supported properties for the FormField component."
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
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Text or element for field label.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isRequired</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Adds required asterisk to the label.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">description</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Helper description text displayed beneath the field control.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isInvalid</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Highlights field in error state.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">errorMessage</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Error message text displayed when isInvalid is true.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
