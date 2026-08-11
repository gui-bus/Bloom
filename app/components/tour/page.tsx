"use client";

import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { Separator } from "@/components/ui/separator/separator";
import { Tour, type TourStep } from "@/components/ui/tour/tour";
import { tourCode } from "@/components/ui/tour/tour.code";

export default function TourPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenConfetti, setIsOpenConfetti] = React.useState(false);

  const steps: TourStep[] = [
    {
      target: "#tour-start-btn",
      title: "Interactive Guide Trigger",
      content:
        "This button fires the multi-step spotlight guide overlay. Let's see how it highlights sections.",
      placement: "bottom",
    },
    {
      target: "#demo-box-1",
      title: "Feature Spotlight Area",
      content:
        "Notice how the dimmed overlay cuts out directly around the target box, creating a clear focus point.",
      placement: "right",
    },
    {
      target: "#demo-box-2",
      title: "Customizable Directions",
      content:
        "Popovers can be configured to open on top, left, right, or bottom relative to the selected target.",
      placement: "top",
    },
  ];

  const stepsConfetti: TourStep[] = [
    {
      target: "#tour-start-btn-confetti",
      title: "Interactive Guide with Confetti",
      content:
        "This onboarding guide is configured to celebrate when you finish. Continue to the next step!",
      placement: "bottom",
    },
    {
      target: "#demo-box-3",
      title: "Final Target Step",
      content:
        "Click 'Finish' now to trigger the celebratory confetti explosion overlay!",
      placement: "top",
    },
  ];

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Tour Guide"
        description="An onboarding assistant spotlighting structural DOM elements step-by-step with focus containers, dimmed background overlay, and directional tooltip cards."
      />

      <ImportSnippet
        importCode={`import { Tour } from "@/components/ui/tour/tour";`}
      />

      <InstallationBlock componentName="tour" />

      <CodeBlock
        code={tourCode}
        componentName="tour.tsx"
        description="Core implementation of the Tour component showcasing CSS spotlights, document resize callbacks, and step direction positioning."
        tags={["React", "Tailwind", "Onboarding", "Tour", "Guide"]}
      />

      <DocsComponent
        title="Default"
        description="A standard multi-step guide highlighting targets without triggering additional effects upon completion."
        props={[
          "steps: TourStep[]",
          "run: boolean",
          "onClose: () => void",
          "showConfetti: boolean",
        ]}
        preview={
          <div className="w-full space-y-8 p-4">
            <div className="flex justify-center">
              <Button id="tour-start-btn" onClick={() => setIsOpen(true)}>
                Start Onboarding Tour (No Confetti)
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                id="demo-box-1"
                className="p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 rounded-lg text-center"
              >
                <h4 className="font-semibold text-sm">Target Area 1</h4>
                <p className="text-xs text-zinc-500">
                  First step targets this panel.
                </p>
              </div>

              <div
                id="demo-box-2"
                className="p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 rounded-lg text-center"
              >
                <h4 className="font-semibold text-sm">Target Area 2</h4>
                <p className="text-xs text-zinc-500">
                  Second step targets this panel.
                </p>
              </div>
            </div>

            <Tour
              steps={steps}
              run={isOpen}
              onClose={() => setIsOpen(false)}
              showConfetti={false}
            />
          </div>
        }
        code={`const steps = [
  {
    target: "#tour-start-btn",
    title: "Interactive Guide Trigger",
    content: "This button fires the multi-step spotlight guide..."
  },
  ...
];

<Button id="tour-start-btn" onClick={() => setIsOpen(true)}>
  Start Onboarding Tour (No Confetti)
</Button>

<Tour steps={steps} run={isOpen} onClose={() => setIsOpen(false)} showConfetti={false} />`}
      />

      <DocsComponent
        title="With Confetti"
        description="Celebrate onboarding completion. Setting showConfetti={true} fires particle effects when clicking 'Finish'."
        props={["showConfetti: boolean"]}
        preview={
          <div className="w-full space-y-8 p-4">
            <div className="flex justify-center">
              <Button
                id="tour-start-btn-confetti"
                onClick={() => setIsOpenConfetti(true)}
              >
                Start Tour with Confetti Celebration
              </Button>
            </div>

            <div className="flex justify-center">
              <div
                id="demo-box-3"
                className="w-full max-w-sm p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 rounded-lg text-center"
              >
                <h4 className="font-semibold text-sm">Celebration Zone</h4>
                <p className="text-xs text-zinc-500">
                  Finish the tour on this element to trigger confetti.
                </p>
              </div>
            </div>

            <Tour
              steps={stepsConfetti}
              run={isOpenConfetti}
              onClose={() => setIsOpenConfetti(false)}
              showConfetti={true}
            />
          </div>
        }
        code={`const stepsConfetti = [
  ...
];

<Button id="tour-start-btn-confetti" onClick={() => setIsOpenConfetti(true)}>
  Start Tour with Confetti Celebration
</Button>

<Tour steps={stepsConfetti} run={isOpenConfetti} onClose={() => setIsOpenConfetti(false)} showConfetti={true} />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Tour"
        description="Configuration options for the Tour component."
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
                  <td className="px-3 py-2 font-mono text-primary">steps</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    TourStep[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    List of step objects specifying targets, text descriptions,
                    and directions
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">run</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    A active switch state that displays/mounts the tour layout
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onClose</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    () =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Fires when the guide is skipped or completed
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    keyof typeof designRadius
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Corner radius of spotlight box and info card
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    showConfetti
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Triggers celebratory confetti particles when user clicks
                    'Finish' on the final step
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
