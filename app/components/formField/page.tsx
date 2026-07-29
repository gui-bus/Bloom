import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Form Field",
  description: "Form field wrapper layout component integrating label, control, helper text and validation errors.",
};

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
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Form Field"
        description="A composite form layout wrapper that connects labels, input fields, helper text, and validation error messages."
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
            tags={["React", "Tailwind", "Forms", "UI Layout"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Form field with label, description and error states."
        preview={
          <div className="w-full max-w-sm flex flex-col gap-4">
            <FormField
              label="Work Email"
              isRequired
              description="We will send a confirmation email here."
            >
              <Input placeholder="john@company.com" />
            </FormField>

            <FormField
              label="Username"
              isInvalid
              errorMessage="Username is already taken"
            >
              <Input defaultValue="john_doe" />
            </FormField>
          </div>
        }
        code={`<FormField label="Work Email" isRequired description="We will send a confirmation email here.">
  <Input placeholder="john@company.com" />
</FormField>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — FormField"
        description="Properties to configure the FormField component."
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
                  <td className="px-3 py-2 text-muted-foreground">Label title text.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">errorMessage</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Error message shown when invalid.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
