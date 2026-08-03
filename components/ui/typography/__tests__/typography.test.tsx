import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Typography } from "../typography";

describe("Typography Component", () => {
  it("renders paragraph text by default", () => {
    render(<Typography>Hello World</Typography>);
    const text = screen.getByText("Hello World");
    expect(text.tagName).toBe("P");
    expect(text).toHaveClass("leading-7");
  });

  it("renders heading variants with correct elements", () => {
    render(<Typography variant="h1">Title H1</Typography>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Title H1");
  });

  it("supports custom polymorphic element via 'as' prop", () => {
    render(
      <Typography variant="h2" as="span">
        Custom Span Heading
      </Typography>,
    );
    const element = screen.getByText("Custom Span Heading");
    expect(element.tagName).toBe("SPAN");
    expect(element).toHaveClass("text-3xl", "font-bold");
  });

  it("applies color classes correctly", () => {
    render(<Typography color="primary">Primary Text</Typography>);
    const text = screen.getByText("Primary Text");
    expect(text).toHaveClass("text-sky-500");
  });

  it("renders code variant properly", () => {
    render(<Typography variant="code">const x = 10;</Typography>);
    const code = screen.getByText("const x = 10;");
    expect(code.tagName).toBe("CODE");
    expect(code).toHaveClass("font-mono", "bg-zinc-100");
  });

  it("handles line clamping with Read More toggle", () => {
    render(
      <Typography clampLines={2} showExpandToggle>
        Long clamped paragraph text...
      </Typography>,
    );
    const button = screen.getByRole("button", { name: "Read More" });
    expect(button).toBeInTheDocument();
  });
});
