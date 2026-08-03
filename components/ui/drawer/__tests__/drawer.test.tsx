import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from "../drawer";

describe("Drawer Component", () => {
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

  it("renders trigger button and opens bottom drawer on click", () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Bottom Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Bottom Drawer Title</DrawerTitle>
        </DrawerContent>
      </Drawer>,
    );

    expect(screen.getByText("Open Bottom Drawer")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Open Bottom Drawer"));
    expect(screen.getByText("Bottom Drawer Title")).toBeInTheDocument();
  });
});
