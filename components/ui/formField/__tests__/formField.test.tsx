import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { FormField } from "../formField";
import { Input } from "@/components/ui/input/input";

describe("FormField Component", () => {
  it("renders label, child input and error message", () => {
    render(
      <FormField label="Email" errorMessage="Invalid email address" isInvalid>
        <Input placeholder="user@example.com" />
      </FormField>
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
  });
});
