import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "../input";

describe("Input Component", () => {
  it("renders input correctly with label", () => {
    render(<Input label="Email Address" placeholder="enter email" />);
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
  });

  it("handles user typing input", () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Type here");

    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe("Hello");
  });

  it("displays error message when isInvalid is true", () => {
    render(
      <Input
        label="Password"
        isInvalid
        errorMessage="Password is required"
      />
    );
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  it("renders startContent and endContent", () => {
    render(
      <Input
        startContent={<span data-testid="start-icon">@</span>}
        endContent={<span data-testid="end-icon">✓</span>}
      />
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });
});
