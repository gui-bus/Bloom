import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { JsonTreeViewer } from "../jsonTreeViewer";

describe("JsonTreeViewer Component", () => {
  const testData = {
    name: "John Doe",
    age: 30,
    isDeveloper: true,
  };

  it("renders JSON data structure correctly", () => {
    render(<JsonTreeViewer data={testData} name="root" />);

    expect(screen.getByText(/"name"/)).toBeInTheDocument();
    expect(screen.getByText(/"John Doe"/)).toBeInTheDocument();
    expect(screen.getByText(/"age"/)).toBeInTheDocument();
    expect(screen.getByText(/30/)).toBeInTheDocument();
  });

  it("handles copy to clipboard", () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      configurable: true,
      writable: true,
    });

    render(<JsonTreeViewer data={testData} />);

    const copyBtn = screen.getByRole("button", { name: /copy/i });
    fireEvent.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalledWith(
      JSON.stringify(testData, null, 2),
    );
  });
});
