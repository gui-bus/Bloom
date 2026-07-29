import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
} from "../card";

describe("Card Component", () => {
  it("renders card with children correctly", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardBody>Card Body Content</CardBody>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Body Content")).toBeInTheDocument();
    expect(screen.getByText("Card Footer")).toBeInTheDocument();
  });

  it("applies variant and color classes correctly", () => {
    render(
      <Card variant="bordered" color="primary" data-testid="card">
        Bordered Primary Card
      </Card>
    );
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("border", "border-primary", "text-primary");
  });

  it("handles isHoverable and isPressable props", () => {
    const handleClick = vi.fn();
    render(
      <Card isHoverable isPressable onClick={handleClick} data-testid="card">
        Interactive Card
      </Card>
    );
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("hover:-translate-y-0.5", "cursor-pointer");
    expect(card).toHaveAttribute("role", "button");
    expect(card).toHaveAttribute("tabIndex", "0");

    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("handles isDisabled state", () => {
    const handleClick = vi.fn();
    render(
      <Card isPressable isDisabled onClick={handleClick} data-testid="card">
        Disabled Card
      </Card>
    );
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("opacity-50", "pointer-events-none");
    expect(card).toHaveAttribute("aria-disabled", "true");
    expect(card).not.toHaveAttribute("tabIndex");
  });
});
