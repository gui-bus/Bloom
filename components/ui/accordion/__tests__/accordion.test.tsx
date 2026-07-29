import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../accordion";

describe("Accordion Component", () => {
  it("renders trigger items and content structure", () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to WAI-ARIA standards.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Is it accessible?")).toBeInTheDocument();
    expect(screen.getByText("Yes. It adheres to WAI-ARIA standards.")).toBeInTheDocument();
  });
});
