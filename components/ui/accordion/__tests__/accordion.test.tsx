import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";

describe("Accordion Component", () => {
  it("renders trigger items and content structure", () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to WAI-ARIA standards.
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByText("Is it accessible?")).toBeInTheDocument();
    expect(
      screen.getByText("Yes. It adheres to WAI-ARIA standards."),
    ).toBeInTheDocument();
  });

  it("renders startContent and custom endContent icons", () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger
            startContent={<span data-testid="start-icon">StartIcon</span>}
            endContent={<span data-testid="end-icon">EndIcon</span>}
          >
            With Custom Icons
          </AccordionTrigger>
          <AccordionContent>Content with icons</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("applies disabled attributes and classes when isDisabled is set on AccordionItem", () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" isDisabled data-testid="disabled-item">
          <AccordionTrigger data-testid="disabled-trigger">
            Disabled Section
          </AccordionTrigger>
          <AccordionContent>Disabled Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByTestId("disabled-trigger");
    expect(trigger).toHaveAttribute("data-disabled");
  });

  it("disables entire accordion when isDisabled is set on root", () => {
    render(
      <Accordion
        type="single"
        collapsible
        isDisabled
        data-testid="disabled-root"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="root-disabled-trigger">
            Root Disabled
          </AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByTestId("root-disabled-trigger");
    expect(trigger).toHaveAttribute("data-disabled");
  });

  it("works as a controlled component with value and onValueChange", () => {
    const handleValueChange = vi.fn();
    render(
      <Accordion type="single" value="item-1" onValueChange={handleValueChange}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("renders visual variants without crashing", () => {
    const variants = [
      "default",
      "bordered",
      "splitted",
      "shadow",
      "compact",
    ] as const;

    for (const variant of variants) {
      const { container } = render(
        <Accordion type="single" variant={variant}>
          <AccordionItem value="item-1">
            <AccordionTrigger>{variant} variant</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );
      expect(container.firstChild).toBeInTheDocument();
    }
  });
});
