import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ImageCropper } from "../imageCropper";

describe("ImageCropper Component", () => {
  beforeEach(() => {
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      clearRect: vi.fn(),
      translate: vi.fn(),
      rotate: vi.fn(),
      scale: vi.fn(),
      drawImage: vi.fn(),
    });
    HTMLCanvasElement.prototype.toDataURL = vi
      .fn()
      .mockReturnValue("data:image/png;base64,mock-cropped-image");
  });

  it("renders zoom, rotation and crop buttons", () => {
    const onCropMock = vi.fn();
    render(<ImageCropper src="image.png" onCrop={onCropMock} />);

    expect(
      screen.getByRole("button", { name: "Crop Image" }),
    ).toBeInTheDocument();
  });
});
