import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SignatureInput } from "../signatureInput";

describe("SignatureInput Component", () => {
  beforeEach(() => {
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      stroke: vi.fn(),
      clearRect: vi.fn(),
      fillRect: vi.fn(),
    });
    HTMLCanvasElement.prototype.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({
        width: 400,
        height: 200,
        left: 0,
        top: 0,
      });
  });

  it("renders signature canvas and buttons", () => {
    render(<SignatureInput placeholder="Please sign here" />);

    expect(screen.getByText("Please sign here")).toBeInTheDocument();
  });
});
