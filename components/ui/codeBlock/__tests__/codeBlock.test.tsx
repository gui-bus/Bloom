import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { CodeBlock } from "../codeBlock";

describe("CodeBlock Component", () => {
  it("renders component name and code correctly", () => {
    render(
      <CodeBlock
        code="const greeting = 'Hello World';"
        componentName="example.ts"
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
        componentName="test.ts"
        showCopy
      />,
    );

    const copyBtn = screen.getByRole("button", { name: /copy code/i });
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);
    expect(writeTextMock).toHaveBeenCalledWith("console.log('test');");
  });

  it("renders tags when provided", () => {
    render(<CodeBlock code="<div />" tags={["React", "UI"]} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("UI")).toBeInTheDocument();
  });
});
