"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Form, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import { formCode } from "@/components/ui/form/form.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

interface DemoFormValues {
  username: string;
  email: string;
}

export default function FormComponentPage() {
  const form = useForm<DemoFormValues>({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const [submittedData, setSubmittedData] = React.useState<DemoFormValues | null>(null);

  const onSubmit = (data: DemoFormValues) => {
    setSubmittedData(data);
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Form"
        description="A wrapper component for building forms with React Hook Form integration, validation handlers, and accessible field controls."
      />

      <ImportSnippet importCode={`import { Form } from "@/components/ui/form/form";`} />

      <InstallationBlock componentName="form" />

      <Tabs defaultValue="form">
        <TabsList background={false}>
          <TabsTrigger
            value="form"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            form.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="form">
          <CodeBlock
            code={formCode}
            componentName="form.tsx"
            description="Core implementation of the Form component."
            tags={["React", "Form", "React Hook Form", "Validation"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard Form with submit handler and field inputs."
        preview={
          <div className="max-w-md w-full">
            <Form form={form} onSubmit={onSubmit}>
              <FormField label="Username" isRequired description="Enter your public display name.">
                <Input placeholder="johndoe" {...form.register("username")} />
              </FormField>

              <FormField label="Email Address" isRequired description="We'll never share your email with anyone.">
                <Input type="email" placeholder="john@example.com" {...form.register("email")} />
              </FormField>

              <Button type="submit" color="primary" className="w-full mt-2">
                Submit Account Form
              </Button>
            </Form>

            {submittedData && (
              <div className="mt-4 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-xs font-mono">
                <div>Submitted JSON:</div>
                <pre className="text-sky-500 font-semibold">{JSON.stringify(submittedData, null, 2)}</pre>
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

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Form"
        description="Supported properties for the Form component."
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
                  <td className="px-3 py-2 font-mono text-primary">form</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">UseFormReturn</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">React Hook Form instance created by useForm().</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">onSubmit</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">SubmitHandler</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback function triggered when form submits successfully.</td>
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
