import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Command, CommandInput, CommandItem, CommandList } from "../command";

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
      </Command>,
    );

    expect(
      screen.getByPlaceholderText("Type a command..."),
    ).toBeInTheDocument();
    expect(screen.getByText("Calendar")).toBeInTheDocument();
  });
});
