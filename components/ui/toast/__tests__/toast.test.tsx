import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Toast, toast } from "../toast";

describe("Toast Component", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  });

  it("renders toaster container correctly", () => {
    const { container } = render(<Toast />);
    expect(container).toBeInTheDocument();
  });

  it("triggers custom toasts and renders content correctly", async () => {
    render(<Toast />);

    toast("Welcome aboard", {
      description: "Setup completed successfully.",
      variant: "bordered",
      size: "lg",
    });

    expect(await screen.findByText("Welcome aboard")).toBeInTheDocument();
    expect(
      await screen.findByText("Setup completed successfully."),
    ).toBeInTheDocument();
  });

  it("applies richColors correctly", async () => {
    render(<Toast />);

    toast.success("Transaction Confirmed", {
      richColors: true,
    });

    const titleElement = await screen.findByText("Transaction Confirmed");
    const container = titleElement.closest("div.relative");

    expect(container).toHaveClass("bg-success");
  });
});
