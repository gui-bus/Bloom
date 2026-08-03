import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { ScrollArea } from "../scrollArea";

describe("ScrollArea Component", () => {
  it("renders children content correctly", () => {
    render(
      <ScrollArea className="h-40 w-40">
        <div>Test Scroll Content</div>
      </ScrollArea>,
    );
    expect(screen.getByText("Test Scroll Content")).toBeInTheDocument();
  });
});
