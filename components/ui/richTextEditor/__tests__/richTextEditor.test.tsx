import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { RichTextEditor } from "../richTextEditor";

describe("RichTextEditor Component", () => {
  it("renders toolbar buttons and editor area", () => {
    render(<RichTextEditor placeholder="Type your text..." />);

    expect(screen.getByTitle("Bold")).toBeInTheDocument();
    expect(screen.getByTitle("Italic")).toBeInTheDocument();
    expect(screen.getByTitle("Heading 1")).toBeInTheDocument();
  });

  it("disables toolbar buttons when isDisabled is true", () => {
    render(<RichTextEditor isDisabled />);

    const boldBtn = screen.getByTitle("Bold");
    expect(boldBtn).toBeDisabled();
  });
});
