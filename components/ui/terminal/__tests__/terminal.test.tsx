import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Terminal, type TerminalLine } from "../terminal";

describe("Terminal Component", () => {
  const lines: TerminalLine[] = [
    { text: "git commit -m 'initial'", type: "command" },
    { text: "commit successful", type: "success" },
    { text: "fatal error", type: "error" },
  ];

  it("renders command lines and output correctly", () => {
    render(<Terminal lines={lines} title="Git CLI" />);

    expect(screen.getByText("Git CLI")).toBeInTheDocument();
    expect(screen.getByText("git commit -m 'initial'")).toBeInTheDocument();
    expect(screen.getByText("commit successful")).toBeInTheDocument();
    expect(screen.getByText("fatal error")).toBeInTheDocument();
  });

  it("handles copy command clicks", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      configurable: true,
      writable: true,
    });

    render(<Terminal lines={lines} />);

    const copyBtn = screen.getByRole("button", { name: /copy commands/i });
    await act(async () => {
      fireEvent.click(copyBtn);
    });

    expect(writeTextMock).toHaveBeenCalledWith("git commit -m 'initial'");
  });
});
