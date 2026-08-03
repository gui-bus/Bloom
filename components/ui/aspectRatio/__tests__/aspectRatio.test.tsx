import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AspectRatio } from "../aspectRatio";

describe("AspectRatio Component", () => {
  it("renders children elements within container", () => {
    render(
      <div className="w-80">
        <AspectRatio ratio={16 / 9}>
          <img src="test.jpg" alt="Test Aspect Ratio" />
        </AspectRatio>
      </div>,
    );
    expect(screen.getByAltText("Test Aspect Ratio")).toBeInTheDocument();
  });
});
