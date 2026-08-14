import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FileInput } from "../fileInput";

describe("FileInput Component", () => {
  it("renders correctly with placeholder", () => {
    render(<FileInput placeholder="Choose your document" />);
    expect(screen.getByText("Choose your document")).toBeInTheDocument();
  });

  it("triggers file input selection on wrapper click", () => {
    render(<FileInput label="Attach files" placeholder="No file selected" />);
    const clickArea = screen.getByText("No file selected").parentElement;

    const input = document.querySelector(
      "input[type='file']",
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();

    const clickSpy = vi.spyOn(input, "click").mockImplementation(() => {});
    if (clickArea) fireEvent.click(clickArea);
    expect(clickSpy).toHaveBeenCalled();
  });

  it("shows label and description messages", () => {
    render(
      <FileInput
        label="Upload Invoice"
        description="PDF format only up to 5MB"
      />,
    );
    expect(screen.getByText("Upload Invoice")).toBeInTheDocument();
    expect(screen.getByText("PDF format only up to 5MB")).toBeInTheDocument();
  });

  it("applies progress indicator percentage bar width", () => {
    const { container } = render(<FileInput progress={60} />);
    const progressBar = container.querySelector("[style*='width: 60%']");
    expect(progressBar).toBeInTheDocument();
  });

  it("displays local file size limit error message", () => {
    render(<FileInput maxSizeMB={2} placeholder="Empty" />);
    const input = document.querySelector(
      "input[type='file']",
    ) as HTMLInputElement;

    const largeFile = new File(["a".repeat(3 * 1024 * 1024)], "huge.pdf", {
      type: "application/pdf",
    });

    fireEvent.change(input, {
      target: { files: [largeFile] },
    });

    expect(screen.getByText(/exceeds the 2MB size limit/)).toBeInTheDocument();
  });
});
