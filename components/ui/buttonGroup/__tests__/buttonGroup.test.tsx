import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Button } from "../../button/button";
import { ButtonGroup } from "../buttonGroup";

describe("ButtonGroup Component", () => {
  it("renders children buttons within group structure", () => {
    render(
      <ButtonGroup>
        <Button>First</Button>
        <Button>Second</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole("button", { name: "First" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Second" })).toBeInTheDocument();
  });

  it("propagates size, color, and variant traits to children buttons", () => {
    render(
      <ButtonGroup size="lg" color="primary" variant="ghost">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );
    const firstButton = screen.getByRole("button", { name: "Button 1" });
    const secondButton = screen.getByRole("button", { name: "Button 2" });

    // Verify size lg
    expect(firstButton).toHaveClass("px-5");
    expect(secondButton).toHaveClass("px-5");

    // Verify variant and color primary classes propagated
    expect(firstButton).toHaveClass("border-primary");
    expect(secondButton).toHaveClass("border-primary");
  });

  it("applies border-radius classes correctly for edge buttons", () => {
    render(
      <ButtonGroup>
        <Button>Button A</Button>
        <Button>Button B</Button>
        <Button>Button C</Button>
      </ButtonGroup>
    );

    const btnA = screen.getByRole("button", { name: "Button A" });
    const btnB = screen.getByRole("button", { name: "Button B" });
    const btnC = screen.getByRole("button", { name: "Button C" });

    // First button has rounded-l-xl and rounded-none
    expect(btnA).toHaveClass("rounded-none", "rounded-l-xl");
    // Middle button has rounded-none
    expect(btnB).toHaveClass("rounded-none");
    expect(btnB).not.toHaveClass("rounded-l-xl");
    expect(btnB).not.toHaveClass("rounded-r-xl");
    // Last button has rounded-none and rounded-r-xl
    expect(btnC).toHaveClass("rounded-none", "rounded-r-xl");
  });
});
