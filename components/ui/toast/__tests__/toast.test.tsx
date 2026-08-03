import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Toast } from "../toast";

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

  it("renders toaster container", () => {
    const { container } = render(<Toast />);
    expect(container).toBeInTheDocument();
  });
});
