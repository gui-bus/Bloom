"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

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

function CharacterCounterDemo() {
  const [bio, setBio] = React.useState(
    "Building modern UI components with ZoeUI.",
  );
  return (
    <div className="max-w-sm w-full space-y-4">
      <FormField
        label="User Bio (Right Counter)"
        description="Brief summary of your professional background."
        maxLength={80}
        currentLength={bio.length}
        helperAlign="between"
      >
        <Input
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Tell us about yourself..."
        />
      </FormField>
    </div>
  );
}

export default function FormFieldComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Form Field"
        description="A wrapper component providing layout structure, label association, helper descriptions, character counter tracking, required asterisk tooltip explanations, and error state validation messaging."
      />

      <ImportSnippet
        importCode={`import { FormField } from "@/components/ui/formField/formField";`}
      />

      <InstallationBlock componentName="formField" />

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
            description="Core implementation of the FormField component with character counter, helper text alignment, and required asterisk tooltips."
            tags={["React", "Form", "FormField", "CharacterCounter", "Tooltip"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard FormField wrapping an Input control."
        preview={
          <div className="max-w-sm w-full">
            <FormField
              label="Account Email"
              description="Enter your primary account login email address."
            >
              <Input type="email" placeholder="alex@company.com" />
            </FormField>
          </div>
        }
        code={`<FormField label="Account Email" description="Enter your primary email.">
  <Input type="email" placeholder="alex@company.com" />
</FormField>`}
      />

      {/* Required Indicator & Tooltip Explanation */}
      <DocsComponent
        title="Required Field & Asterisk Tooltip Explanation"
        description="Renders a red asterisk indicator on the field label with an interactive Tooltip explanation via 'requiredTooltip'."
        preview={
          <div className="max-w-sm w-full">
            <FormField
              label="Full Legal Name"
              isRequired
              requiredTooltip="This field is mandatory for identity verification"
            >
              <Input placeholder="Alex Morgan" />
            </FormField>
          </div>
        }
        code={`<FormField
  label="Full Legal Name"
  isRequired
  requiredTooltip="Mandatory for identity verification"
>
  <Input placeholder="Alex Morgan" />
</FormField>`}
        props={["isRequired: boolean", "requiredTooltip: ReactNode"]}
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

      {/* Character Counter & Helper Text Alignment */}
      <DocsComponent
        title="Character Counter & Helper Text Alignment"
        description="Pass 'maxLength' and 'currentLength' to track input text length with auto-warning highlight colors, and align footer controls with 'helperAlign'."
        preview={<CharacterCounterDemo />}
        code={`<FormField
  label="User Bio"
  description="Brief summary."
  maxLength={80}
  currentLength={bio.length}
  helperAlign="between"
>
  <Input value={bio} onChange={e => setBio(e.target.value)} />
</FormField>`}
        props={[
          "maxLength: number",
          "currentLength: number",
          "helperAlign: 'left' | 'right' | 'between'",
        ]}
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
                    maxLength
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Maximum character limit displayed in footer counter bar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    currentLength
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Current character length count for tracking.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    requiredTooltip
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    'This field is required'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Tooltip explanation rendered when hovering the required
                    asterisk.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isRequired
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Adds required asterisk to the label.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isInvalid
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Highlights field in error state.
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
