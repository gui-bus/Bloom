import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DiffViewer } from "../diffViewer";

describe("DiffViewer Component", () => {
  const oldVal = "Hello\nWorld";
  const newVal = "Hello\nBeautiful\nWorld";

  it("renders inline diff correctly", () => {
    render(<DiffViewer oldValue={oldVal} newValue={newVal} />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Beautiful")).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
  });

  it("renders split diff correctly", () => {
    render(<DiffViewer oldValue={oldVal} newValue={newVal} splitView />);

    expect(screen.getByText("Original")).toBeInTheDocument();
    expect(screen.getByText("Modified")).toBeInTheDocument();
  });
});
