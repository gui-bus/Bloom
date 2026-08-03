import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Skeleton } from "../skeleton";

describe("Skeleton Component", () => {
  it("renders with role status and aria-busy attribute", () => {
    const { container } = render(<Skeleton className="w-20 h-5" />);
    const skeleton = container.querySelector('[role="status"]');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute("aria-busy", "true");
  });

  it("applies variant classes correctly", () => {
    const { container: circleContainer } = render(
      <Skeleton variant="circle" className="size-10" />,
    );
    expect(circleContainer.querySelector(".rounded-full")).toBeInTheDocument();

    const { container: textContainer } = render(<Skeleton variant="text" />);
    expect(textContainer.querySelector(".h-4")).toBeInTheDocument();
  });

  it("renders children when isLoaded is true", () => {
    render(
      <Skeleton isLoaded>
        <div data-testid="loaded-content">Loaded Content</div>
      </Skeleton>,
    );
    expect(screen.getByTestId("loaded-content")).toBeInTheDocument();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
