import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Form",
  description: "Form wrapper component integrating React Hook Form state management and validation.",
};

import { FormDemo } from "./form-demo";
import { formCode } from "@/components/ui/form/form.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function FormComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Form"
        description="A form container component providing seamless integration with React Hook Form for state management and submit handling."
      />

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
            tags={["React", "React Hook Form", "Tailwind", "Forms"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Form validation and submit workflow."
        preview={<FormDemo />}
        code={`const form = useForm({ defaultValues: { email: '', password: '' } });

<Form form={form} onSubmit={(data) => console.log(data)}>
  <FormField label="Email">
    <Input {...form.register("email")} />
  </FormField>
  <Button type="submit">Submit</Button>
</Form>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Form"
        description="Properties to configure the Form component."
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
                  <td className="px-3 py-2 text-muted-foreground">React Hook Form instance returned from useForm().</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">onSubmit</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">SubmitHandler</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback function executed on valid form submit.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
