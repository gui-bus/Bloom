import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import React from "react";

vi.mock("@iconify/react", () => ({
  Icon: ({ icon, className, ...props }: any) =>
    React.createElement("span", {
      "data-icon": icon,
      className,
      ...props,
    }),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  if (typeof document !== "undefined") {
    document.body.innerHTML = "";
    document.head.innerHTML = "";
  }
});

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock as any;

if (!global.PointerEvent) {
  class PointerEventMock extends Event {
    constructor(type: string, props?: Record<string, any>) {
      super(type, props);
      if (props) Object.assign(this, props);
    }
  }

  global.PointerEvent = PointerEventMock as any;
}

if (typeof window !== "undefined" && !window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}
