"use client";

import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { Form, useForm } from "@/components/ui/form/form";
import { formCode } from "@/components/ui/form/form.code";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { Separator } from "@/components/ui/separator/separator";

interface DemoFormValues {
  username: string;
  email: string;
}

function AdvancedFormDemo() {
  const form = useForm({
    defaultValues: {
      bio: "Software Engineer",
      website: "https://example.com",
    },
  });

  return (
    <Form
      form={form}
      onSubmit={(data) => alert(`Saved: ${JSON.stringify(data)}`)}
      confirmUnsavedChanges
      showResetButton
      scrollToFirstError
    >
      <FormField label="Bio" description="Short biography for profile.">
        <Input {...form.register("bio", { required: true })} />
      </FormField>
      <FormField label="Website URL">
        <Input {...form.register("website")} />
      </FormField>
      <Button type="submit" color="primary">
        Save Profile
      </Button>
    </Form>
  );
}

export default function FormComponentPage() {
  const form = useForm<DemoFormValues>({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const [submittedData, setSubmittedData] =
    React.useState<DemoFormValues | null>(null);

  const onSubmit = (data: DemoFormValues) => {
    setSubmittedData(data);
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Form"
        description="A wrapper component for building forms with React Hook Form integration, automatic scroll to first error, unsaved changes confirmation guard, and reset button support."
      />

      <ImportSnippet
        importCode={`import { Form } from "@/components/ui/form/form";`}
      />

      <InstallationBlock componentName="form" />

      <CodeBlock
        code={formCode}
        componentName="form.tsx"
        description="Core implementation of the Form component with scroll-to-error, dirty state guard, and reset button."
        tags={["React", "Form", "React Hook Form", "Validation"]}
      />

      <DocsComponent
        title="Default"
        description="Standard Form with submit handler and field inputs."
        preview={
          <div className="max-w-md w-full">
            <Form form={form} onSubmit={onSubmit}>
              <FormField
                label="Username"
                isRequired
                description="Enter your public display name."
              >
                <Input placeholder="johndoe" {...form.register("username")} />
              </FormField>

              <FormField
                label="Email Address"
                isRequired
                description="We'll never share your email with anyone."
              >
                <Input
                  type="email"
                  placeholder="john@example.com"
                  {...form.register("email")}
                />
              </FormField>

              <Button type="submit" color="primary" className="w-full mt-2">
                Submit Account Form
              </Button>
            </Form>

            {submittedData && (
              <div className="mt-4 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-xs font-mono">
                <div>Submitted JSON:</div>
                <pre className="text-sky-500 font-semibold">
                  {JSON.stringify(submittedData, null, 2)}
                </pre>
              </div>
            )}
          </div>
        }
        code={`const form = useForm<FormValues>();

<Form form={form} onSubmit={(data) => console.log(data)}>
  <FormField label="Username" isRequired>
    <Input {...form.register("username")} />
  </FormField>
  <Button type="submit">Submit</Button>
</Form>`}
      />

      <DocsComponent
        title="Dirty State Guard, Auto Scroll & Reset Button"
        description="Features automatic scroll-to-invalid-input, confirm unsaved changes navigation guard when dirty, and a reset button."
        preview={
          <div className="max-w-md w-full">
            <AdvancedFormDemo />
          </div>
        }
        code={`<Form
  form={form}
  onSubmit={onSubmit}
  scrollToFirstError
  confirmUnsavedChanges
  showResetButton
>
  <FormField label="Bio">
    <Input {...form.register("bio")} />
  </FormField>
</Form>`}
        props={[
          "scrollToFirstError: boolean",
          "confirmUnsavedChanges: boolean",
          "showResetButton: boolean",
        ]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Form"
        description="Supported properties for the Form component."
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
                    scrollToFirstError
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Automatically scrolls viewport to first invalid field input
                    on submit.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    confirmUnsavedChanges
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Adds beforeunload navigation guard and unsaved changes
                    banner when form is dirty.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showResetButton
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders a button to restore initial default values when form
                    is dirty.
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
