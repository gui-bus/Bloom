"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { Separator } from "@/components/ui/separator/separator";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
} from "@/components/ui/stepper/stepper";
import { stepperCode } from "@/components/ui/stepper/stepper.code";

function StepperDefaultDemo() {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div className="w-full space-y-6">
      <Stepper activeStep={activeStep} onStepClick={setActiveStep}>
        <StepperItem step={0}>
          <StepperIndicator step={0} />
          <div>
            <StepperTitle>Account Details</StepperTitle>
            <StepperDescription>Enter your email & password</StepperDescription>
          </div>
        </StepperItem>
        <StepperSeparator step={0} />
        <StepperItem step={1}>
          <StepperIndicator step={1} />
          <div>
            <StepperTitle>Organization</StepperTitle>
            <StepperDescription>Setup workspace team</StepperDescription>
          </div>
        </StepperItem>
        <StepperSeparator step={1} />
        <StepperItem step={2}>
          <StepperIndicator step={2} />
          <div>
            <StepperTitle>Confirmation</StepperTitle>
            <StepperDescription>Review and launch</StepperDescription>
          </div>
        </StepperItem>
      </Stepper>
      <div className="flex gap-2 justify-end pt-2">
        <Button
          variant="flat"
          color="default"
          size="sm"
          isDisabled={activeStep === 0}
          onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
        >
          Previous
        </Button>
        <Button
          color="primary"
          size="sm"
          isDisabled={activeStep === 2}
          onClick={() => setActiveStep((s) => Math.min(2, s + 1))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

function StepperControlledDemo() {
  const [activeStep, setActiveStep] = React.useState(1);
  return (
    <div className="w-full space-y-6">
      <Stepper activeStep={activeStep}>
        <StepperItem step={0}>
          <StepperIndicator step={0} />
          <div>
            <StepperTitle>Personal Info</StepperTitle>
            <StepperDescription>Basic details</StepperDescription>
          </div>
        </StepperItem>
        <StepperSeparator step={0} />
        <StepperItem step={1}>
          <StepperIndicator step={1} />
          <div>
            <StepperTitle>Payment</StepperTitle>
            <StepperDescription>Billing method</StepperDescription>
          </div>
        </StepperItem>
        <StepperSeparator step={1} />
        <StepperItem step={2}>
          <StepperIndicator step={2} />
          <div>
            <StepperTitle>Review</StepperTitle>
            <StepperDescription>Confirm order</StepperDescription>
          </div>
        </StepperItem>
      </Stepper>
      <div className="flex gap-2 justify-center">
        {[0, 1, 2].map((step) => (
          <Button
            key={step}
            size="sm"
            variant={activeStep === step ? "default" : "flat"}
            color={activeStep === step ? "primary" : "default"}
            onClick={() => setActiveStep(step)}
          >
            Step {step + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}

function StepperValidationDemo() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  const handleNext = () => {
    if (activeStep === 0) {
      if (!name.trim() || !email.trim()) {
        setError("Please fill in all fields before continuing.");
        return;
      }
      if (!email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
    }
    setError("");
    setActiveStep((s) => Math.min(2, s + 1));
  };

  return (
    <div className="w-full space-y-6">
      <Stepper activeStep={activeStep}>
        <StepperItem step={0}>
          <StepperIndicator step={0} />
          <div>
            <StepperTitle>Account Setup</StepperTitle>
            <StepperDescription>Fill in your details</StepperDescription>
          </div>
        </StepperItem>
        <StepperSeparator step={0} />
        <StepperItem step={1}>
          <StepperIndicator step={1} />
          <div>
            <StepperTitle>Preferences</StepperTitle>
            <StepperDescription>Customize your experience</StepperDescription>
          </div>
        </StepperItem>
        <StepperSeparator step={1} />
        <StepperItem step={2}>
          <StepperIndicator step={2} />
          <div>
            <StepperTitle>Done</StepperTitle>
            <StepperDescription>All set!</StepperDescription>
          </div>
        </StepperItem>
      </Stepper>

      <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 bg-white dark:bg-zinc-900 space-y-4">
        {activeStep === 0 && (
          <>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Step 1 — Account Setup
            </p>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="val-name">Full Name</Label>
                <Input
                  id="val-name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="val-email">Email Address</Label>
                <Input
                  id="val-email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />
              </div>
              {error && <p className="text-xs text-rose-500">{error}</p>}
            </div>
          </>
        )}
        {activeStep === 1 && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Step 1 complete! Set your preferences here.
          </p>
        )}
        {activeStep === 2 && (
          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
            All steps completed successfully!
          </p>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        <Button
          variant="flat"
          color="default"
          size="sm"
          isDisabled={activeStep === 0}
          onClick={() => {
            setError("");
            setActiveStep((s) => Math.max(0, s - 1));
          }}
        >
          Previous
        </Button>
        {activeStep < 2 ? (
          <Button color="primary" size="sm" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button
            color="primary"
            size="sm"
            onClick={() => {
              setActiveStep(0);
              setName("");
              setEmail("");
              setError("");
            }}
          >
            Restart
          </Button>
        )}
      </div>
    </div>
  );
}

export default function StepperComponentPage() {
  const [errorStep] = React.useState(1);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Stepper"
        description="Guides users through multi-step forms or workflows with progress indicators, status titles, icons, error handling, and interactive step navigation."
      />

      <ImportSnippet
        importCode={`import { Stepper, StepperItem, StepperIndicator, StepperTitle, StepperDescription, StepperSeparator } from "@/components/ui/stepper/stepper";`}
      />

      <InstallationBlock componentName="stepper" />

      <CodeBlock
        code={stepperCode}
        componentName="stepper.tsx"
        description="Core implementation of the Stepper component."
        tags={["React", "Stepper", "Progress", "Form"]}
      />

      <DocsComponent
        title="Default"
        description="Standard horizontal multi-step progress bar with dynamic line highlights and navigation buttons."
        preview={<StepperDefaultDemo />}
        code={`const [activeStep, setActiveStep] = React.useState(0);

<Stepper activeStep={activeStep} onStepClick={setActiveStep}>
  <StepperItem step={0}>
    <StepperIndicator step={0} />
    <div>
      <StepperTitle>Account Details</StepperTitle>
      <StepperDescription>Enter your email & password</StepperDescription>
    </div>
  </StepperItem>
  <StepperSeparator step={0} />
  <StepperItem step={1}>
    <StepperIndicator step={1} />
    <div>
      <StepperTitle>Organization</StepperTitle>
      <StepperDescription>Setup workspace team</StepperDescription>
    </div>
  </StepperItem>
  <StepperSeparator step={1} />
  <StepperItem step={2}>
    <StepperIndicator step={2} />
    <div>
      <StepperTitle>Confirmation</StepperTitle>
      <StepperDescription>Review and launch</StepperDescription>
    </div>
  </StepperItem>
</Stepper>

<Button variant="flat" color="default" onClick={() => setActiveStep((s) => Math.max(0, s - 1))}>
  Previous
</Button>
<Button color="primary" onClick={() => setActiveStep((s) => Math.min(2, s + 1))}>
  Next
</Button>`}
      />

      <DocsComponent
        title="Controlled"
        description="Control the active step programmatically by binding the activeStep prop to external state."
        preview={<StepperControlledDemo />}
        code={`const [activeStep, setActiveStep] = React.useState(1);

<Stepper activeStep={activeStep}>
  <StepperItem step={0}>...</StepperItem>
  <StepperSeparator step={0} />
  <StepperItem step={1}>...</StepperItem>
  <StepperSeparator step={1} />
  <StepperItem step={2}>...</StepperItem>
</Stepper>

<Button onClick={() => setActiveStep(0)}>Step 1</Button>
<Button onClick={() => setActiveStep(1)}>Step 2</Button>
<Button onClick={() => setActiveStep(2)}>Step 3</Button>`}
        props={["activeStep: number"]}
      />

      <DocsComponent
        title="Step Validation"
        description="Block advancing to the next step until all required fields in the current step are filled."
        preview={<StepperValidationDemo />}
        code={`const [activeStep, setActiveStep] = React.useState(0);
const [email, setEmail] = React.useState("");
const [name, setName] = React.useState("");
const [error, setError] = React.useState("");

const handleNext = () => {
  if (activeStep === 0) {
    if (!name.trim() || !email.trim()) {
      setError("Please fill in all fields before continuing.");
      return;
    }
  }
  setError("");
  setActiveStep((s) => s + 1);
};

<Stepper activeStep={activeStep}>...</Stepper>

{error && <p className="text-xs text-rose-500">{error}</p>}

<Button color="primary" onClick={handleNext}>Next</Button>`}
      />

      <DocsComponent
        title="Colors"
        description="All steps and connection lines strictly adhere to the chosen theme color."
        preview={
          <div className="w-full space-y-6">
            {(
              [
                "primary",
                "success",
                "warning",
                "danger",
                "secondary",
                "default",
              ] as const
            ).map((color) => (
              <div key={color}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  {color}
                </span>
                <Stepper color={color} activeStep={1}>
                  <StepperItem step={0}>
                    <StepperIndicator step={0} />
                    <StepperTitle>Step 1</StepperTitle>
                  </StepperItem>
                  <StepperSeparator step={0} />
                  <StepperItem step={1}>
                    <StepperIndicator step={1} />
                    <StepperTitle>Step 2</StepperTitle>
                  </StepperItem>
                  <StepperSeparator step={1} />
                  <StepperItem step={2}>
                    <StepperIndicator step={2} />
                    <StepperTitle>Step 3</StepperTitle>
                  </StepperItem>
                </Stepper>
              </div>
            ))}
          </div>
        }
        code={`<Stepper color="primary" activeStep={1}>...</Stepper>
<Stepper color="success" activeStep={1}>...</Stepper>
<Stepper color="warning" activeStep={1}>...</Stepper>
<Stepper color="danger" activeStep={1}>...</Stepper>`}
        props={[
          "color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'",
        ]}
      />

      <DocsComponent
        title="Variants"
        description="Choose between different step indicator visual structures."
        preview={
          <div className="w-full space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                Default
              </span>
              <Stepper variant="default" activeStep={1}>
                <StepperItem step={0}>
                  <StepperIndicator step={0} />
                  <div>
                    <StepperTitle>Account</StepperTitle>
                    <StepperDescription>Basic info</StepperDescription>
                  </div>
                </StepperItem>
                <StepperSeparator step={0} />
                <StepperItem step={1}>
                  <StepperIndicator step={1} />
                  <div>
                    <StepperTitle>Details</StepperTitle>
                    <StepperDescription>Extra info</StepperDescription>
                  </div>
                </StepperItem>
                <StepperSeparator step={1} />
                <StepperItem step={2}>
                  <StepperIndicator step={2} />
                  <div>
                    <StepperTitle>Done</StepperTitle>
                    <StepperDescription>All set</StepperDescription>
                  </div>
                </StepperItem>
              </Stepper>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                Cards
              </span>
              <Stepper variant="cards" activeStep={1}>
                <StepperItem step={0}>
                  <StepperIndicator step={0} />
                  <div>
                    <StepperTitle>Account</StepperTitle>
                    <StepperDescription>Basic info</StepperDescription>
                  </div>
                </StepperItem>
                <StepperItem step={1}>
                  <StepperIndicator step={1} />
                  <div>
                    <StepperTitle>Details</StepperTitle>
                    <StepperDescription>Extra info</StepperDescription>
                  </div>
                </StepperItem>
                <StepperItem step={2}>
                  <StepperIndicator step={2} />
                  <div>
                    <StepperTitle>Done</StepperTitle>
                    <StepperDescription>All set</StepperDescription>
                  </div>
                </StepperItem>
              </Stepper>
            </div>
          </div>
        }
        code={`<Stepper variant="default" activeStep={1}>...</Stepper>
<Stepper variant="cards" activeStep={1}>...</Stepper>`}
        props={["variant: 'default' | 'cards'"]}
      />

      <DocsComponent
        title="Error State & Custom Icons"
        description="Render error indicators and custom Iconify icons on individual steps."
        preview={
          <div className="w-full">
            <Stepper activeStep={errorStep}>
              <StepperItem step={0}>
                <StepperIndicator step={0} icon="hugeicons:user-02" />
                <div>
                  <StepperTitle>User Profile</StepperTitle>
                  <StepperDescription>Completed profile</StepperDescription>
                </div>
              </StepperItem>
              <StepperSeparator step={0} />
              <StepperItem step={1} isError>
                <StepperIndicator step={1} isError />
                <div>
                  <StepperTitle className="text-rose-500">
                    Payment Failed
                  </StepperTitle>
                  <StepperDescription className="text-rose-500/80">
                    Card declined by bank
                  </StepperDescription>
                </div>
              </StepperItem>
              <StepperSeparator step={1} />
              <StepperItem step={2}>
                <StepperIndicator step={2} icon="hugeicons:rocket" />
                <div>
                  <StepperTitle>Deployment</StepperTitle>
                  <StepperDescription>Pending resolution</StepperDescription>
                </div>
              </StepperItem>
            </Stepper>
          </div>
        }
        code={`<Stepper activeStep={1}>
  <StepperItem step={1} isError>
    <StepperIndicator step={1} isError />
    <div>
      <StepperTitle className="text-rose-500">Payment Failed</StepperTitle>
      <StepperDescription>Card declined</StepperDescription>
    </div>
  </StepperItem>
</Stepper>`}
        props={["isError: boolean", "icon: string"]}
      />

      <DocsComponent
        title="Vertical Orientation"
        description="Vertical stepper layout suitable for side panels, timeline checklists, and long forms."
        preview={
          <div className="max-w-sm w-full">
            <Stepper orientation="vertical" activeStep={1}>
              <StepperItem step={0}>
                <StepperIndicator step={0} />
                <div>
                  <StepperTitle>Identity Verification</StepperTitle>
                  <StepperDescription>
                    Upload passport document
                  </StepperDescription>
                </div>
              </StepperItem>
              <StepperSeparator step={0} />
              <StepperItem step={1}>
                <StepperIndicator step={1} />
                <div>
                  <StepperTitle>Billing Setup</StepperTitle>
                  <StepperDescription>Add payment method</StepperDescription>
                </div>
              </StepperItem>
              <StepperSeparator step={1} />
              <StepperItem step={2}>
                <StepperIndicator step={2} />
                <div>
                  <StepperTitle>Complete Profile</StepperTitle>
                  <StepperDescription>All set to start</StepperDescription>
                </div>
              </StepperItem>
            </Stepper>
          </div>
        }
        code={`<Stepper orientation="vertical" activeStep={1}>
  <StepperItem step={0}>...</StepperItem>
  <StepperSeparator step={0} />
  <StepperItem step={1}>...</StepperItem>
</Stepper>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Stepper"
        description="Supported properties for Stepper."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    activeStep
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">0</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    0-indexed active step index.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'cards'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual layout structure variant.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Indicator dimensions and font size.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'primary' | 'secondary' | 'success' | 'warning' | 'danger' |
                    'default'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Color theme accent for active step indicator.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    orientation
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'horizontal' | 'vertical'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    'horizontal'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Stepper orientation layout.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    onStepClick
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (step: number) =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback triggered on step indicator click.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsPagination />
    </div>
  );
}
