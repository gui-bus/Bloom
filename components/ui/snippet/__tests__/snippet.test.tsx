import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Snippet } from "../snippet";

describe("Snippet Component", () => {
  it("renders snippet code correctly", () => {
    render(<Snippet code="npm install @bloomui/react" variant="flat" />);

    expect(screen.getByText("npm install @bloomui/react")).toBeInTheDocument();
    expect(screen.getByText("$")).toBeInTheDocument();
  });

  it("handles copy to clipboard", () => {
    const onCopyMock = vi.fn();
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      configurable: true,
      writable: true,
    });

    render(<Snippet code="npm install" onCopy={onCopyMock} />);

    const copyBtn = screen.getByRole("button", { name: /copy/i });
    fireEvent.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalledWith("npm install");
    expect(onCopyMock).toHaveBeenCalled();
  });
});
