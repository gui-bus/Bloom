"use client";

import { Button } from "@/components/ui/button/button";
import { Form, useForm } from "@/components/ui/form/form";
import { FormField } from "@/components/ui/formField/formField";
import { Input } from "@/components/ui/input/input";

export function FormDemo() {
  const form = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <Form form={form} onSubmit={onSubmit} className="w-full max-w-sm">
      <FormField label="Email">
        <Input {...form.register("email")} placeholder="you@domain.com" />
      </FormField>
      <FormField label="Password">
        <Input
          type="password"
          {...form.register("password")}
          placeholder="••••••••"
        />
      </FormField>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </Form>
  );
}
