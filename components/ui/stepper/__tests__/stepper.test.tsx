import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, it, expect } from "vitest";
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
} from "../stepper";

describe("Stepper Component", () => {
  it("renders stepper steps and titles", () => {
    render(
      <Stepper activeStep={1}>
        <StepperItem step={0}>
          <StepperIndicator step={0} />
          <div>
            <StepperTitle>Account Details</StepperTitle>
            <StepperDescription>Enter your info</StepperDescription>
          </div>
        </StepperItem>
        <StepperItem step={1}>
          <StepperIndicator step={1} />
          <div>
            <StepperTitle>Payment Method</StepperTitle>
          </div>
        </StepperItem>
      </Stepper>
    );

    expect(screen.getByText("Account Details")).toBeInTheDocument();
    expect(screen.getByText("Payment Method")).toBeInTheDocument();
  });
});
