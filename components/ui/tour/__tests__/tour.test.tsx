import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Tour, type TourStep } from "../tour";

describe("Tour Component", () => {
  const steps: TourStep[] = [
    { target: "#step-1", title: "Step 1 Title", content: "Step 1 Content" },
    { target: "#step-2", title: "Step 2 Title", content: "Step 2 Content" },
  ];

  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();

    document.querySelector = vi.fn().mockReturnValue({
      getBoundingClientRect: () => ({
        top: 100,
        left: 100,
        width: 100,
        height: 50,
        bottom: 150,
        right: 200,
      }),
      scrollIntoView: vi.fn(),
    });
  });

  it("renders tour steps and navigates correctly", () => {
    const onCloseMock = vi.fn();
    render(<Tour steps={steps} run={true} onClose={onCloseMock} />);

    expect(screen.getByText("Step 1 Title")).toBeInTheDocument();
    expect(screen.getByText("Step 1 Content")).toBeInTheDocument();

    const nextBtn = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextBtn);

    expect(screen.getByText("Step 2 Title")).toBeInTheDocument();
    expect(screen.getByText("Step 2 Content")).toBeInTheDocument();

    const finishBtn = screen.getByRole("button", { name: "Finish" });
    fireEvent.click(finishBtn);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
