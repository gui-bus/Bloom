import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { AnimatedProgressDemo } from "./animated-progress-demo";

export const metadata: Metadata = {
  title: "Progress",
  description: "Displays a bar showing completion progress of a task, built on Radix Progress primitive.",
};
import { Progress } from "@/components/ui/progress/progress";
import { progressCode } from "@/components/ui/progress/progress.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ProgressPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Progress"
        description="Linear progress bar indicating completion status of a process or task."
      />

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
            description="Progress bar built with Radix Primitive supporting colors, sizes, indeterminate state, and labels."
            tags={["React", "Radix UI", "Tailwind", "UI Component", "Progress"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Displays a progress bar with a numeric percentage value from 0 to 100."
        preview={
          <div className="space-y-4 max-w-md">
            <Progress value={25} />
            <Progress value={60} />
            <Progress value={90} />
          </div>
        }
        code={`<div className="space-y-4 max-w-md">
  <Progress value={25} />
  <Progress value={60} />
  <Progress value={90} />
</div>`}
        props={["value: number"]}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Apply custom color themes using the 'color' prop."
        preview={
          <div className="space-y-4 max-w-md">
            <Progress value={60} color="default" />
            <Progress value={60} color="primary" />
            <Progress value={60} color="secondary" />
            <Progress value={60} color="accent" />
            <Progress value={60} color="success" />
            <Progress value={60} color="warning" />
            <Progress value={60} color="danger" />
          </div>
        }
        code={`<div className="space-y-4 max-w-md">
  <Progress value={60} color="default" />
  <Progress value={60} color="primary" />
  <Progress value={60} color="secondary" />
  <Progress value={60} color="accent" />
  <Progress value={60} color="success" />
  <Progress value={60} color="warning" />
  <Progress value={60} color="danger" />
</div>`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Adjust the height scale using 'sm', 'md', or 'lg'."
        preview={
          <div className="space-y-4 max-w-md">
            <Progress value={50} size="sm" />
            <Progress value={50} size="md" />
            <Progress value={50} size="lg" />
          </div>
        }
        code={`<div className="space-y-4 max-w-md">
  <Progress value={50} size="sm" />
  <Progress value={50} size="md" />
  <Progress value={50} size="lg" />
</div>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      {/* Labels & Percentage */}
      <DocsComponent
        title="Labels & Value Display"
        description="Combine text description and numeric percentage with 'label' and 'showValueLabel'."
        preview={
          <div className="space-y-4 max-w-md">
            <Progress value={75} label="Uploading file..." showValueLabel color="primary" />
            <Progress value={100} label="Storage used" showValueLabel color="success" />
          </div>
        }
        code={`<div className="space-y-4 max-w-md">
  <Progress value={75} label="Uploading file..." showValueLabel color="primary" />
  <Progress value={100} label="Storage used" showValueLabel color="success" />
</div>`}
        props={["label: string", "showValueLabel: boolean"]}
      />

      {/* Animated Loading 0-100 */}
      <DocsComponent
        title="Animated Progress (0% to 100%)"
        description="Demonstrates a real-time animated progress simulation from 0% to 100% with restart capability."
        preview={<AnimatedProgressDemo />}
        code={`"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress/progress";
import { Button } from "@/components/ui/button/button";

export function AnimatedProgressDemo() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4 max-w-md">
      <Progress
        value={progress}
        label="Simulating download..."
        showValueLabel
        color="primary"
      />
      <Button
        size="sm"
        variant="bordered"
        onClick={() => setProgress(0)}
      >
        Reset Progress
      </Button>
    </div>
  );
}`}
      />

      {/* Indeterminate State */}
      <DocsComponent
        title="Indeterminate State"
        description="Set 'isIndeterminate' for ongoing processes without a fixed completion percentage."
        preview={
          <div className="space-y-4 max-w-md">
            <Progress isIndeterminate label="Fetching server status..." color="accent" />
          </div>
        }
        code={`<Progress isIndeterminate label="Fetching server status..." color="accent" />`}
        props={["isIndeterminate: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Progress"
        description="Properties for configuring the Progress component."
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
                  <td className="px-3 py-2 font-mono text-primary">value</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">number</td>
                  <td className="px-3 py-2 text-muted-foreground">0</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Completion percentage value from 0 to 100.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Height dimension of the progress track.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Color theme fill of the indicator bar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isIndeterminate</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables animated continuous loading mode without fixed value.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Optional text label displayed above the progress bar.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">showValueLabel</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays formatted percentage text on the top right.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
