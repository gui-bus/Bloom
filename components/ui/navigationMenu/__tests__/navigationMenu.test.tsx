import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
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
      </NavigationMenu>,
    );

    expect(screen.getByText("Getting Started")).toBeInTheDocument();
  });
});
