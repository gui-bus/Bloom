import "@testing-library/jest-dom/vitest";

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
