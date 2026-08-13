"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import * as z from "zod";
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
import { toast } from "@/components/ui/toast/toast";

// --- Demos ---

// 1. Default Demo
interface DemoFormValues {
  username: string;
}

function DefaultFormDemo() {
  const form = useForm<DemoFormValues>({
    defaultValues: { username: "" },
  });
  const [submitted, setSubmitted] = React.useState<string | null>(null);

  return (
    <div className="max-w-md w-full">
      <Form form={form} onSubmit={(data) => setSubmitted(JSON.stringify(data))}>
        <FormField
          label="Username"
          isRequired
          description="Enter your public display name."
        >
          <Input placeholder="johndoe" {...form.register("username")} />
        </FormField>
        <Button type="submit" color="primary" className="w-full mt-2">
          Submit
        </Button>
      </Form>
      {submitted && (
        <pre className="mt-4 p-3 bg-zinc-150 dark:bg-zinc-800 rounded-xl text-xs font-mono text-sky-500">
          {submitted}
        </pre>
      )}
    </div>
  );
}

// 2. Zod Validation Demo
const zodSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  age: z
    .number({ invalid_type_error: "Age must be a number." })
    .min(18, "You must be at least 18 years old."),
});

type ZodFormValues = z.infer<typeof zodSchema>;

function ZodValidationFormDemo() {
  const form = useForm<ZodFormValues>({
    resolver: zodResolver(zodSchema),
    defaultValues: { email: "", age: 18 },
  });
  const [submitted, setSubmitted] = React.useState<string | null>(null);

  return (
    <div className="max-w-md w-full">
      <Form
        form={form}
        onSubmit={(data) => setSubmitted(JSON.stringify(data))}
        className="space-y-4"
      >
        <FormField
          label="Email Address"
          isRequired
          isInvalid={!!form.formState.errors.email}
          errorMessage={form.formState.errors.email?.message}
        >
          <Input
            type="email"
            placeholder="john@example.com"
            {...form.register("email")}
          />
        </FormField>

        <FormField
          label="Age"
          isRequired
          isInvalid={!!form.formState.errors.age}
          errorMessage={form.formState.errors.age?.message}
        >
          <Input
            type="number"
            {...form.register("age", { valueAsNumber: true })}
          />
        </FormField>

        <Button type="submit" color="primary" className="w-full mt-2">
          Register Account
        </Button>
      </Form>
      {submitted && (
        <pre className="mt-4 p-3 bg-zinc-150 dark:bg-zinc-800 rounded-xl text-xs font-mono text-sky-500">
          {submitted}
        </pre>
      )}
    </div>
  );
}

// 3. Auto Scroll Demo
const errorSchema = z.object({
  fieldA: z.string().min(1, "Field A is required."),
  fieldB: z.string().min(1, "Field B is required."),
});

type ErrorFormValues = z.infer<typeof errorSchema>;

function AutoScrollFormDemo() {
  const form = useForm<ErrorFormValues>({
    resolver: zodResolver(errorSchema),
    defaultValues: { fieldA: "", fieldB: "" },
  });

  return (
    <div className="max-w-md w-full">
      <Form
        form={form}
        onSubmit={(data) => {
          toast.success("Submitted successfully!", {
            description: JSON.stringify(data),
          });
        }}
        scrollToFirstError
        className="space-y-4"
      >
        <FormField
          label="Field A"
          isInvalid={!!form.formState.errors.fieldA}
          errorMessage={form.formState.errors.fieldA?.message}
        >
          <Input
            placeholder="Enter something..."
            {...form.register("fieldA")}
          />
        </FormField>

        <div className="h-20 flex items-center justify-center bg-zinc-100/50 dark:bg-zinc-900/30 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-400 font-mono">
          Spacer Block (Simulates height)
        </div>

        <FormField
          label="Field B"
          isInvalid={!!form.formState.errors.fieldB}
          errorMessage={form.formState.errors.fieldB?.message}
        >
          <Input
            placeholder="Enter something..."
            {...form.register("fieldB")}
          />
        </FormField>

        <Button type="submit" color="primary" className="w-full mt-2">
          Submit Form
        </Button>
      </Form>
    </div>
  );
}

// --- Page Main ---

export default function FormComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Form"
        description="A wrapper component for building forms with React Hook Form integration, Zod schema validation, and automatic smooth scroll to first error."
      />

      <ImportSnippet
        importCode={`import { Form } from "@/components/ui/form/form";`}
      />

      <InstallationBlock componentName="form" />

      <CodeBlock
        code={formCode}
        componentName="form.tsx"
        description="Core implementation of the Form component."
        tags={["React", "Form", "React Hook Form", "Zod", "Validation"]}
      />

      <DocsComponent
        title="Default"
        description="Basic Form with submit handler and field inputs."
        preview={<DefaultFormDemo />}
        code={`const form = useForm<FormValues>();

<Form form={form} onSubmit={(data) => console.log(data)}>
  <FormField label="Username" isRequired>
    <Input {...form.register("username")} />
  </FormField>
  <Button type="submit">Submit</Button>
</Form>`}
      />

      <DocsComponent
        title="Schema Validation with Zod"
        description="Integrate Zod schemas and zodResolver to validate data types, email formats, and custom error boundaries."
        preview={<ZodValidationFormDemo />}
        code={`import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const zodSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  age: z.number().min(18, "You must be at least 18 years old."),
});

const form = useForm<FormValues>({
  resolver: zodResolver(zodSchema),
  defaultValues: { email: "", age: 18 },
});

<Form form={form} onSubmit={onSubmit}>
  <FormField
    label="Email Address"
    isInvalid={!!form.formState.errors.email}
    errorMessage={form.formState.errors.email?.message}
  >
    <Input type="email" {...form.register("email")} />
  </FormField>
</Form>`}
      />

      <DocsComponent
        title="Auto Scroll to First Error"
        description="Submitting a form with validation errors automatically scrolls the window viewport to center and focus the first invalid field using smooth behavior."
        preview={<AutoScrollFormDemo />}
        code={`<Form
  form={form}
  onSubmit={onSubmit}
  scrollToFirstError
>
  <FormField label="Field A" isInvalid={!!errors.fieldA} errorMessage={errors.fieldA?.message}>
    <Input {...form.register("fieldA")} />
  </FormField>
</Form>`}
        props={["scrollToFirstError: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Form"
        description="Supported properties for the Form component."
        preview={
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    scrollToFirstError
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">true</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Automatically scrolls viewport smoothly to first invalid
                    field input on submit.
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
