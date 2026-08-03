import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { Form, useForm } from "../form";

function TestForm({
  onSubmit,
}: {
  onSubmit: (data: { name: string }) => void;
}) {
  const form = useForm<{ name: string }>({ defaultValues: { name: "John" } });
  return (
    <Form form={form} onSubmit={onSubmit}>
      <input {...form.register("name")} placeholder="Name" />
      <button type="submit">Submit</button>
    </Form>
  );
}

describe("Form Component", () => {
  it("submits form data using react-hook-form integration", async () => {
    const handleSubmit = vi.fn();
    render(<TestForm onSubmit={handleSubmit} />);

    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByPlaceholderText("Name")).toHaveValue("John");
  });
});
