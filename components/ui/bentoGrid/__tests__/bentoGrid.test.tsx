import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BentoGrid, BentoGridItem } from "../bentoGrid";

describe("BentoGrid Component", () => {
  it("renders bento grid and items correctly", () => {
    render(
      <BentoGrid data-testid="bento-grid">
        <BentoGridItem
          title="Item Title 1"
          description="Item Description 1"
          colSpan={2}
          rowSpan={2}
          imageSrc="image.png"
        />
        <BentoGridItem
          title="Item Title 2"
          description="Item Description 2"
          colSpan="md:col-span-1"
          header={<div data-testid="item-header" />}
        />
      </BentoGrid>,
    );

    expect(screen.getByTestId("bento-grid")).toBeInTheDocument();
    expect(screen.getByText("Item Title 1")).toBeInTheDocument();
    expect(screen.getByText("Item Description 1")).toBeInTheDocument();
    expect(screen.getByText("Item Title 2")).toBeInTheDocument();
    expect(screen.getByTestId("item-header")).toBeInTheDocument();
  });
});
