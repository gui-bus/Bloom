import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../navigationMenu";

describe("NavigationMenu Component", () => {
  it("renders navigation items correctly", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(screen.getByText("Getting Started")).toBeInTheDocument();
  });
});
