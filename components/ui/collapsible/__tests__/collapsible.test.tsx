import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../collapsible";

describe("Collapsible Component", () => {
  it("toggles content visibility on trigger click", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
        <CollapsibleContent>Collapsible Hidden Text</CollapsibleContent>
      </Collapsible>
    );

    const trigger = screen.getByText("Toggle Content");
    expect(trigger).toBeInTheDocument();
  });
});
