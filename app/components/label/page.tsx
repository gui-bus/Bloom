"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { labelCode } from "@/components/ui/label/label.code";
import { Separator } from "@/components/ui/separator/separator";

export default function LabelComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Label"
        description="Renders an accessible label associated with form controls using Radix UI primitives."
      />

      <ImportSnippet
        importCode={`import { Label } from "@/components/ui/label/label";`}
      />

      <InstallationBlock componentName="label" />

      <CodeBlock
        code={labelCode}
        componentName="label.tsx"
        description="Core implementation of the Label component."
        tags={["React", "Radix UI", "Tailwind", "Form", "Label"]}
      />

      <DocsComponent
        title="Default"
        description="Standard form label component associated with an input."
        preview={
          <div className="flex flex-col gap-2 max-w-sm w-full">
            <Label htmlFor="email-default">Email Address</Label>
            <Input id="email-default" placeholder="john@example.com" />
          </div>
        }
        code={`<div className="flex flex-col gap-2 max-w-sm">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" placeholder="john@example.com" />
</div>`}
      />

      <DocsComponent
        title="Required Indicator"
        description="Add a red asterisk indicator to required field labels using the 'isRequired' prop."
        preview={
          <div className="flex flex-col gap-2 max-w-sm w-full">
            <Label htmlFor="username-required" isRequired>
              Username
            </Label>
            <Input id="username-required" placeholder="johndoe" />
          </div>
        }
        code={`<Label htmlFor="username" isRequired>Username</Label>`}
        props={["isRequired: boolean"]}
      />

      <DocsComponent
        title="Sizes"
        description="Set label font size using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-4 max-w-sm w-full">
            <Label size="sm">Small Label (sm)</Label>
            <Label size="md">Medium Label (md)</Label>
            <Label size="lg">Large Label (lg)</Label>
          </div>
        }
        code={`<Label size="sm">Small Label</Label>
<Label size="md">Medium Label</Label>
<Label size="lg">Large Label</Label>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Label"
        description="Supported properties for the Label component."
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
                    isRequired
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders a red asterisk required indicator.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'sm'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Font size variant for label text.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">htmlFor</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    ID of the associated form control input.
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
