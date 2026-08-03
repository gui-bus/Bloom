"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Progress } from "@/components/ui/progress/progress";
import { progressCode } from "@/components/ui/progress/progress.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ProgressComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Progress"
        description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      />

      <ImportSnippet
        importCode={`import { Progress } from "@/components/ui/progress/progress";`}
      />

      <InstallationBlock componentName="progress" />

      <Tabs defaultValue="progress">
        <TabsList background={false}>
          <TabsTrigger
            value="progress"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            progress.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="progress">
          <CodeBlock
            code={progressCode}
            componentName="progress.tsx"
            description="Core implementation of the Progress component."
            tags={["React", "Radix UI", "Progress", "Feedback"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Standard progress bar."
        preview={
          <div className="max-w-md w-full">
            <Progress value={65} />
          </div>
        }
        code={`<Progress value={65} />`}
      />

      <DocsComponent
        title="With Label & Percentage"
        description="Display text header and percentage badge using 'label' and 'showValueLabel'."
        preview={
          <div className="max-w-md w-full">
            <Progress
              label="Downloading System Update..."
              showValueLabel
              value={82}
            />
          </div>
        }
        code={`<Progress label="Downloading System Update..." showValueLabel value={82} />`}
        props={["label: string", "showValueLabel: boolean"]}
      />

      <DocsComponent
        title="Sizes"
        description="Bar height scale using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-col gap-4 max-w-md w-full">
            <Progress size="sm" value={30} label="Small (sm)" showValueLabel />
            <Progress size="md" value={60} label="Medium (md)" showValueLabel />
            <Progress size="lg" value={90} label="Large (lg)" showValueLabel />
          </div>
        }
        code={`<Progress size="sm" value={30} />
<Progress size="md" value={60} />
<Progress size="lg" value={90} />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="Colors"
        description="Indicator color variants: 'primary', 'secondary', 'accent', 'success', 'warning', or 'danger'."
        preview={
          <div className="flex flex-col gap-4 max-w-md w-full">
            <Progress
              color="primary"
              value={45}
              label="Primary (Sky)"
              showValueLabel
            />
            <Progress
              color="success"
              value={75}
              label="Success (Emerald)"
              showValueLabel
            />
            <Progress
              color="warning"
              value={55}
              label="Warning (Amber)"
              showValueLabel
            />
            <Progress
              color="danger"
              value={95}
              label="Danger (Rose)"
              showValueLabel
            />
          </div>
        }
        code={`<Progress color="primary" value={45} />
<Progress color="success" value={75} />
<Progress color="warning" value={55} />
<Progress color="danger" value={95} />`}
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
      />

      <DocsComponent
        title="Indeterminate & Barber-Pole Animated Stripes"
        description="Indeterminate loading bar with smooth barber-pole animated stripes using 'isBarberPole'."
        preview={
          <div className="flex flex-col gap-4 max-w-md w-full">
            <Progress
              label="Connecting to Server..."
              isIndeterminate
              color="primary"
            />
            <Progress
              label="Uploading Assets (Barber Pole)..."
              isIndeterminate
              isBarberPole
              color="success"
            />
          </div>
        }
        code={`<Progress label="Connecting..." isIndeterminate />
<Progress label="Uploading..." isIndeterminate isBarberPole color="success" />`}
        props={["isIndeterminate: boolean", "isBarberPole: boolean"]}
      />

      <DocsComponent
        title="Circular Progress Ring"
        description='Circular progress ring variant rendered as responsive SVG with type="circle".'
        preview={
          <div className="flex items-center gap-6">
            <Progress
              type="circle"
              value={45}
              size="sm"
              showValueLabel
              color="primary"
              label="Storage"
            />
            <Progress
              type="circle"
              value={75}
              size="md"
              showValueLabel
              color="success"
              label="Memory"
            />
            <Progress
              type="circle"
              value={92}
              size="lg"
              showValueLabel
              color="danger"
              label="CPU Load"
            />
          </div>
        }
        code={`<Progress type="circle" value={45} size="sm" showValueLabel label="Storage" />
<Progress type="circle" value={75} size="md" showValueLabel label="Memory" />
<Progress type="circle" value={92} size="lg" showValueLabel label="CPU Load" />`}
        props={["type: 'line' | 'circle'"]}
      />

      <DocsComponent
        title="Milestone Step Markers"
        description="Render step milestone dots along the progress track with the 'steps' prop."
        preview={
          <div className="max-w-md w-full">
            <Progress
              value={60}
              color="primary"
              label="Onboarding Progress (25%, 50%, 75% steps)"
              showValueLabel
              steps={[{ value: 25 }, { value: 50 }, { value: 75 }]}
            />
          </div>
        }
        code={`<Progress
  value={60}
  color="primary"
  label="Onboarding Progress"
  showValueLabel
  steps={[{ value: 25 }, { value: 50 }, { value: 75 }]}
/>`}
        props={["steps: (number | ProgressStep)[]"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Progress"
        description="Supported properties for the Progress component."
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
                  <td className="px-3 py-2 font-mono text-primary">type</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'line' | 'circle'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'line'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Progress visual format (horizontal bar or circular ring).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isBarberPole
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Applies animated barber-pole diagonal stripes overlay.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">steps</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    (number | ProgressStep)[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Milestone step markers rendered along the track.
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
