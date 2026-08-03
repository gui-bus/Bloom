import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Link } from "../link";

describe("Link Component", () => {
  it("renders internal link correctly", () => {
    render(<Link href="/components/button">Button Component</Link>);
    const link = screen.getByText("Button Component");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/components/button");
  });

  it("renders external link with target _blank and rel attributes", () => {
    render(
      <Link href="https://google.com" isExternal>
        Google
      </Link>,
    );
    const link = screen.getByText("Google").closest("a");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
