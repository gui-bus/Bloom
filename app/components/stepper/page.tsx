import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { StepperInteractiveDemo } from "./stepper-demo";
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from "@/components/ui/stepper/stepper";
import { stepperCode } from "@/components/ui/stepper/stepper.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export const metadata: Metadata = {
  title: "Stepper",
  description: "Displays progress through numbered or icon steps in a multi-step workflow with clickable step navigation and status indicators.",
};

export default function StepperDocsPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Stepper"
        description="A progress indicator component for guiding users through a multi-step sequence, supporting custom icons, error states, and direct step clicking."
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
            description="Stepper component with step indicators, completed state checkmarks, error indicators, custom icons, and horizontal/vertical orientations."
            tags={["React", "Tailwind", "UI Component", "Navigation", "Stepper"]}
          />
        </TabsContent>
      </Tabs>

      {/* Clickable Icon Stepper */}
      <DocsComponent
        title="Clickable Icon Stepper"
        description="Pass 'onStepClick' to allow users to jump directly to completed or active steps, and pass custom icons to StepperIndicator."
        preview={<StepperInteractiveDemo />}
        code={`<Stepper activeStep={activeStep} onStepClick={(step) => setActiveStep(step)}>
  <StepperItem step={0}>
    <StepperIndicator step={0} icon="hugeicons:user-circle" />
    <div>
      <StepperTitle>Account Info</StepperTitle>
      <StepperDescription>Personal details</StepperDescription>
    </div>
  </StepperItem>
  <StepperSeparator />
  <StepperItem step={1}>
    <StepperIndicator step={1} icon="hugeicons:credit-card" />
    <div>
      <StepperTitle>Payment Setup</StepperTitle>
      <StepperDescription>Credit card info</StepperDescription>
    </div>
  </StepperItem>
</Stepper>`}
      />

      {/* Error & Status States */}
      <DocsComponent
        title="Error State Handling"
        description="Pass 'isError' to StepperItem and StepperIndicator to indicate validation issues on a specific step."
        preview={
          <Stepper activeStep={1} className="max-w-xl">
            <StepperItem step={0} isCompleted>
              <StepperIndicator step={0} />
              <div>
                <StepperTitle>Account Info</StepperTitle>
                <StepperDescription>Verified</StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator />
            <StepperItem step={1} isError>
              <StepperIndicator step={1} isError />
              <div>
                <StepperTitle className="text-danger">Payment Error</StepperTitle>
                <StepperDescription className="text-danger">Invalid card number</StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator />
            <StepperItem step={2}>
              <StepperIndicator step={2} />
              <div>
                <StepperTitle>Confirmation</StepperTitle>
                <StepperDescription>Pending</StepperDescription>
              </div>
            </StepperItem>
          </Stepper>
        }
        code={`<StepperItem step={1} isError>
  <StepperIndicator step={1} isError />
  <div>
    <StepperTitle className="text-danger">Payment Error</StepperTitle>
    <StepperDescription className="text-danger">Invalid card number</StepperDescription>
  </div>
</StepperItem>`}
        props={["isError: boolean"]}
      />

      {/* Vertical Stepper */}
      <DocsComponent
        title="Vertical Stepper"
        description="Set 'orientation' to 'vertical' for vertical step layouts."
        preview={
          <Stepper orientation="vertical" activeStep={1} className="max-w-xs">
            <StepperItem step={0}>
              <StepperIndicator step={0} icon="hugeicons:shopping-cart-01" />
              <div>
                <StepperTitle>Order Placed</StepperTitle>
                <StepperDescription>July 28, 2026</StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator />
            <StepperItem step={1}>
              <StepperIndicator step={1} icon="hugeicons:package" />
              <div>
                <StepperTitle>Processing</StepperTitle>
                <StepperDescription>Preparing items</StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator />
            <StepperItem step={2}>
              <StepperIndicator step={2} icon="hugeicons:truck-02" />
              <div>
                <StepperTitle>Shipped</StepperTitle>
                <StepperDescription>On the way</StepperDescription>
              </div>
            </StepperItem>
          </Stepper>
        }
        code={`<Stepper orientation="vertical" activeStep={1}>
  <StepperItem step={0}>
    <StepperIndicator step={0} icon="hugeicons:shopping-cart-01" />
    <div>
      <StepperTitle>Order Placed</StepperTitle>
    </div>
  </StepperItem>
  <StepperSeparator />
  <StepperItem step={1}>
    <StepperIndicator step={1} icon="hugeicons:package" />
    <div>
      <StepperTitle>Processing</StepperTitle>
    </div>
  </StepperItem>
</Stepper>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Stepper"
        description="Sub-components for building accessible progress step flows."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Props</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">Stepper</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">activeStep?: number, onStepClick?: (step: number) =&gt; void, orientation?: 'horizontal'|'vertical'</td>
                  <td className="px-3 py-2 text-muted-foreground">Root container managing active step index and layout axis.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">StepperItem</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">step: number, isCompleted?: boolean, isError?: boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">Individual step container.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">StepperIndicator</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">step: number, icon?: string, isError?: boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">Circle badge displaying step number, icon, or error alert.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">StepperSeparator</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">className?: string</td>
                  <td className="px-3 py-2 text-muted-foreground">Connecting divider line between adjacent steps.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
