"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
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

      <Tabs defaultValue="tour">
        <TabsList background={false}>
          <TabsTrigger
            value="tour"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            tour.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tour">
          <CodeBlock
            code={tourCode}
            componentName="tour.tsx"
            description="Core implementation of the Tour component showcasing CSS spotlights, document resize callbacks, and step direction positioning."
            tags={["React", "Tailwind", "Onboarding", "Tour", "Guide"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A standard multi-step guide highlighting targets without triggering additional effects upon completion."
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

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Prop
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Type
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Default
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  steps
                </td>
                <td className="px-4 py-3 font-mono text-primary">TourStep[]</td>
                <td className="px-4 py-3 font-mono">[]</td>
                <td className="px-4 py-3">
                  List of step objects specifying targets, text descriptions,
                  and directions.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  run
                </td>
                <td className="px-4 py-3 font-mono text-primary">boolean</td>
                <td className="px-4 py-3 font-mono">false</td>
                <td className="px-4 py-3">
                  A active switch state that displays/mounts the tour layout.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onClose
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  () =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Fires when the guide is skipped or completed.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  radius
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  keyof typeof designRadius
                </td>
                <td className="px-4 py-3 font-mono">"md"</td>
                <td className="px-4 py-3">
                  Corner radius of spotlight box and info card.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  showConfetti
                </td>
                <td className="px-4 py-3 font-mono text-primary">boolean</td>
                <td className="px-4 py-3 font-mono">false</td>
                <td className="px-4 py-3">
                  Triggers celebratory confetti particles when user clicks
                  "Finish" on the final step.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination
        prev={{ title: "Diff Viewer", href: "/components/diffViewer" }}
        next={{ title: "Audio Recorder", href: "/components/audioRecorder" }}
      />
    </div>
  );
}
