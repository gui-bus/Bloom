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

    expect(firstButton).toHaveClass("px-5");
    expect(secondButton).toHaveClass("px-5");
  });

  it("propagates isLoading and isDisabled to children buttons", () => {
    render(
      <ButtonGroup isLoading isDisabled>
        <Button>Loading 1</Button>
        <Button>Loading 2</Button>
      </ButtonGroup>
    );

    const firstButton = screen.getByRole("button", { name: "Loading 1" });
    expect(firstButton).toBeDisabled();
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

    expect(btnA).toHaveClass("rounded-none", "rounded-l-xl");
    expect(btnB).toHaveClass("rounded-none");
    expect(btnC).toHaveClass("rounded-none", "rounded-r-xl");
  });
});
