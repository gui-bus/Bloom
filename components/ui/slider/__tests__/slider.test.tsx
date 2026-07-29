import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Slider } from "../slider";

describe("Slider Component", () => {
  it("renders correctly with label and value", () => {
    render(<Slider label="Volume" showValue defaultValue={[50]} />);
    expect(screen.getByText("Volume")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
  });
});
