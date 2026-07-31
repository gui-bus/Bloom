import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import React from "react";

// Mock @iconify/react to prevent network requests during tests
vi.mock("@iconify/react", () => ({
  Icon: ({ icon, className, ...props }: any) =>
    React.createElement("span", { "data-icon": icon, className, ...props }),
}));

afterEach(() => {
  cleanup();
  if (typeof document !== "undefined") {
    document.body.innerHTML = "";
    document.head.innerHTML = "";
  }
  if (typeof global.gc === "function") {
    global.gc();
  }
});

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserverMock;

// Mock PointerEvent in JSDOM
if (!global.PointerEvent) {
  class PointerEventMock extends Event {
    constructor(type: string, props?: Record<string, any>) {
      super(type, props);
      if (props) {
        Object.assign(this, props);
      }
    }
  }
  global.PointerEvent = PointerEventMock as any;
}
