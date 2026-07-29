import { render } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, beforeEach } from "vitest";
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
