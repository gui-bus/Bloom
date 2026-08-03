import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "../label";

describe("Label Component", () => {
  it("renders label content and required asterisk indicator", () => {
    render(
      <Label isRequired htmlFor="email">
        Email Address
      </Label>,
    );
    expect(screen.getByText("Email Address")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });
});
