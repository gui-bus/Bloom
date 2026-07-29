import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "../command";

describe("Command Component", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = () => {};
  });

  it("renders search input and item list", () => {
    render(
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandItem>Calendar</CommandItem>
        </CommandList>
      </Command>
    );

    expect(screen.getByPlaceholderText("Type a command...")).toBeInTheDocument();
    expect(screen.getByText("Calendar")).toBeInTheDocument();
  });
});
