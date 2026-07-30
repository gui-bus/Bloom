"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from "@/components/ui/stepper/stepper";
import { Button } from "@/components/ui/button/button";
import { stepperCode } from "@/components/ui/stepper/stepper.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function StepperComponentPage() {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Stepper"
        description="Guides users through multi-step forms or workflows with progress indicators, status titles, icons, and interactive step navigation."
      />

      <Tabs defaultValue="stepper">
        <TabsList background={false}>
          <TabsTrigger
            value="stepper"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            stepper.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="stepper">
          <CodeBlock
            code={stepperCode}
            componentName="stepper.tsx"
            description="Core implementation of the Stepper component."
            tags={["React", "Stepper", "Progress", "Form"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard horizontal multi-step progress bar with interactive controls."
        preview={
          <div className="w-full max-w-2xl space-y-6">
            <Stepper activeStep={activeStep} onStepClick={setActiveStep}>
              <StepperItem step={0}>
                <StepperIndicator step={0} />
                <div>
                  <StepperTitle>Account Details</StepperTitle>
                  <StepperDescription>Enter your email & password</StepperDescription>
                </div>
              </StepperItem>
              <StepperSeparator />

              <StepperItem step={1}>
                <StepperIndicator step={1} />
                <div>
                  <StepperTitle>Organization</StepperTitle>
                  <StepperDescription>Setup workspace team</StepperDescription>
                </div>
              </StepperItem>
              <StepperSeparator />

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
  <StepperSeparator />
  <StepperItem step={1}>...</StepperItem>
</Stepper>`}
      />

      {/* Vertical Orientation */}
      <DocsComponent
        title="Vertical Orientation"
        description="Vertical stepper layout suitable for side panels and timeline checklists."
        preview={
          <div className="max-w-sm w-full">
            <Stepper orientation="vertical" activeStep={1}>
              <StepperItem step={0}>
                <StepperIndicator step={0} />
                <div>
                  <StepperTitle>Identity Verification</StepperTitle>
                  <StepperDescription>Upload passport document</StepperDescription>
                </div>
              </StepperItem>
              <StepperSeparator />

              <StepperItem step={1}>
                <StepperIndicator step={1} />
                <div>
                  <StepperTitle>Billing Setup</StepperTitle>
                  <StepperDescription>Add payment method</StepperDescription>
                </div>
              </StepperItem>
              <StepperSeparator />

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
  <StepperSeparator />
  <StepperItem step={1}>...</StepperItem>
</Stepper>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Stepper"
        description="Supported properties for Stepper."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">activeStep</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">0</td>
                  <td className="px-3 py-2 text-muted-foreground">0-indexed active step index.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">orientation</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'horizontal' | 'vertical'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'horizontal'</td>
                  <td className="px-3 py-2 text-muted-foreground">Stepper orientation layout.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">onStepClick</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (step: number) =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback triggered on step indicator click.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
