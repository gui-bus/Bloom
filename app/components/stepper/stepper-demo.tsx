"use client";

import * as React from "react";
import { Button } from "@/components/ui/button/button";
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from "@/components/ui/stepper/stepper";

export function StepperInteractiveDemo() {
  const [activeStep, setActiveStep] = React.useState(1);

  const steps = [
    { title: "Account Info", description: "Personal details", icon: "hugeicons:user-circle" },
    { title: "Payment Setup", description: "Credit card info", icon: "hugeicons:credit-card" },
    { title: "Confirmation", description: "Review and submit", icon: "hugeicons:tick-circle" },
  ];

  return (
    <div className="space-y-6 w-full max-w-2xl">
      {/* Clickable Steps Header */}
      <Stepper activeStep={activeStep} onStepClick={(step) => setActiveStep(step)}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <StepperItem step={index}>
              <StepperIndicator step={index} icon={step.icon} />
              <div>
                <StepperTitle>{step.title}</StepperTitle>
                <StepperDescription>{step.description}</StepperDescription>
              </div>
            </StepperItem>
            {index < steps.length - 1 && <StepperSeparator />}
          </React.Fragment>
        ))}
      </Stepper>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button
          size="sm"
          variant="bordered"
          isDisabled={activeStep === 0}
          onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
        >
          Previous
        </Button>

        <Button
          size="sm"
          onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
        >
          {activeStep === steps.length - 1 ? "Complete" : "Next Step"}
        </Button>
      </div>
    </div>
  );
}
