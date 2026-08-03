import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FileUpload } from "../fileUpload";

describe("FileUpload Component", () => {
  it("renders drag and drop dropzone with label", () => {
    render(
      <FileUpload label="Upload Document" description="Drop files here" />,
    );
    expect(screen.getByText("Upload Document")).toBeInTheDocument();
    expect(screen.getByText("Drop files here")).toBeInTheDocument();
  });
});
