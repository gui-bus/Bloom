import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Rating } from "../rating";

describe("Rating Component", () => {
  it("renders correct number of star buttons", () => {
    render(<Rating max={5} defaultValue={3} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(5);
  });

  it("updates value on star click", () => {
    const handleChange = vi.fn();
    render(<Rating max={5} onValueChange={handleChange} />);

    const thirdStar = screen.getByLabelText("Rate 3 out of 5");
    fireEvent.click(thirdStar);

    expect(handleChange).toHaveBeenCalledWith(3);
  });
});
