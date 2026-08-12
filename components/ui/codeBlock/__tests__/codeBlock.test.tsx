import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CodeBlock } from "../codeBlock";

describe("CodeBlock Component", () => {
  it("renders filename and code correctly", () => {
    render(
      <CodeBlock
        code="const greeting = 'Hello World';"
        filename="example.ts"
      />,
    );
    expect(screen.getByText("example.ts")).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === "code" &&
          content.includes("greeting")
        );
      }),
    ).toBeInTheDocument();
  });

  it("renders copy button and handles clipboard action", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      configurable: true,
      writable: true,
    });

    render(
      <CodeBlock
        code="console.log('test');"
        filename="test.ts"
        showCopy
      />,
    );

    const copyBtn = screen.getByRole("button", { name: /copy/i });
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);
    expect(writeTextMock).toHaveBeenCalledWith("console.log('test');");
  });
});
