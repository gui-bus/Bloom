"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
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

export default function StepperComponentPage() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [errorStep, _setErrorStep] = React.useState(1);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Stepper"
        description="Guides users through multi-step forms or workflows with progress indicators, status titles, icons, error handling, card layouts, and interactive step navigation."
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
        title="Default Interactive"
        description="Standard horizontal multi-step progress bar with dynamic line highlights and navigation buttons."
        preview={
          <div className="w-full max-w-2xl space-y-6">
            <Stepper activeStep={activeStep} onStepClick={setActiveStep}>
              <StepperItem step={0}>
                <StepperIndicator step={0} />
                <div>
                  <StepperTitle>Account Details</StepperTitle>
                  <StepperDescription>
                    Enter your email & password
                  </StepperDescription>
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
                variant="bordered"
                size="sm"
                isDisabled={activeStep === 0}
                onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
              >
                Previous Step
              </Button>
              <Button
                color="primary"
                size="sm"
                isDisabled={activeStep === 2}
                onClick={() => setActiveStep((s) => Math.min(2, s + 1))}
              >
                Next Step
              </Button>
            </div>
          </div>
        }
        code={`const [activeStep, setActiveStep] = React.useState(1);

<Stepper activeStep={activeStep} onStepClick={setActiveStep}>
  <StepperItem step={0}>
    <StepperIndicator step={0} />
    <div>
      <StepperTitle>Account</StepperTitle>
      <StepperDescription>Details</StepperDescription>
    </div>
  </StepperItem>
  <StepperSeparator step={0} />
  <StepperItem step={1}>...</StepperItem>
</Stepper>`}
      />

      <DocsComponent
        title="Color Themes (color)"
        description="All steps and connection lines strictly adhere to the chosen theme color."
        preview={
          <div className="w-full max-w-2xl space-y-6">
            <div>
              <span className="text-xs text-zinc-500 font-semibold block mb-2">
                Success Theme (color='success')
              </span>
              <Stepper color="success" activeStep={1}>
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

            <div>
              <span className="text-xs text-zinc-500 font-semibold block mb-2">
                Secondary Theme (color='secondary')
              </span>
              <Stepper color="secondary" activeStep={1}>
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
          </div>
        }
        code={`<Stepper color="success" activeStep={1}>...</Stepper>
<Stepper color="secondary" activeStep={1}>...</Stepper>`}
        props={[
          "color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'",
        ]}
      />

      <DocsComponent
        title="Cards Variant (variant='cards')"
        description="Encapsulates each step in an interactive card panel container with distinct border state styling."
        preview={
          <div className="w-full max-w-2xl">
            <Stepper variant="cards" activeStep={1}>
              <StepperItem step={0}>
                <StepperIndicator step={0} />
                <div>
                  <StepperTitle>Personal Information</StepperTitle>
                  <StepperDescription>Name and birth date</StepperDescription>
                </div>
              </StepperItem>

              <StepperItem step={1}>
                <StepperIndicator step={1} />
                <div>
                  <StepperTitle>Address & Location</StepperTitle>
                  <StepperDescription>Street, city and zip</StepperDescription>
                </div>
              </StepperItem>

              <StepperItem step={2}>
                <StepperIndicator step={2} />
                <div>
                  <StepperTitle>Review & Submit</StepperTitle>
                  <StepperDescription>Final verification</StepperDescription>
                </div>
              </StepperItem>
            </Stepper>
          </div>
        }
        code={`<Stepper variant="cards" activeStep={1}>
  <StepperItem step={0}>
    <StepperIndicator step={0} />
    <div>
      <StepperTitle>Personal Information</StepperTitle>
      <StepperDescription>Name and birth date</StepperDescription>
    </div>
  </StepperItem>
</Stepper>`}
        props={["variant: 'default' | 'cards'"]}
      />

      <DocsComponent
        title="Error State & Custom Icons"
        description="Render error indicators with 'isError' and custom Iconify icons on individual steps."
        preview={
          <div className="w-full max-w-2xl">
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
        title="Vertical Orientation (orientation='vertical')"
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
