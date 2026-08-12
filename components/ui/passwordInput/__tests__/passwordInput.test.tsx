import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PasswordInput } from "../passwordInput";

describe("PasswordInput Component", () => {
  it("renders password input field", () => {
    render(<PasswordInput placeholder="Enter password" />);
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });

  it("checks password strength validation rules", () => {
    const onValidityChangeMock = vi.fn();
    render(
      <PasswordInput
        placeholder="Enter password"
        onValidityChange={onValidityChangeMock}
        showRequirements="always"
      />,
    );

    const input = screen.getByPlaceholderText("Enter password");

    fireEvent.change(input, { target: { value: "abc" } });
    expect(onValidityChangeMock).toHaveBeenLastCalledWith(false);
    expect(screen.getByText("Weak")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Abc12345!" } });
    expect(onValidityChangeMock).toHaveBeenLastCalledWith(true);
    expect(screen.getByText("Strong")).toBeInTheDocument();
  });
});
