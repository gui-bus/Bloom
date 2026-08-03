import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "@/components/ui/input/input";
import { FormField } from "../formField";

describe("FormField Component", () => {
  it("renders label, child input and error message", () => {
    render(
      <FormField label="Email" errorMessage="Invalid email address" isInvalid>
        <Input placeholder="user@example.com" />
      </FormField>,
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
  });
});
