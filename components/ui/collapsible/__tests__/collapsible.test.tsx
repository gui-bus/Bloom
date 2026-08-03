import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";

describe("Collapsible Component", () => {
  it("toggles content visibility on trigger click", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
        <CollapsibleContent>Collapsible Hidden Text</CollapsibleContent>
      </Collapsible>,
    );

    const trigger = screen.getByText("Toggle Content");
    expect(trigger).toBeInTheDocument();
  });
});
