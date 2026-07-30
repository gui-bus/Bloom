"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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

      <ImportSnippet importCode={`import { Progress } from "@/components/ui/progress/progress";`} />

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

      {/* Default */}
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

      {/* With Label & Percentage */}
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

      {/* Sizes */}
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

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Indicator color variants: 'primary', 'secondary', 'accent', 'success', 'warning', or 'danger'."
        preview={
          <div className="flex flex-col gap-4 max-w-md w-full">
            <Progress color="primary" value={45} label="Primary (Sky)" showValueLabel />
            <Progress color="success" value={75} label="Success (Emerald)" showValueLabel />
            <Progress color="warning" value={55} label="Warning (Amber)" showValueLabel />
            <Progress color="danger" value={95} label="Danger (Rose)" showValueLabel />
          </div>
        }
        code={`<Progress color="primary" value={45} />
<Progress color="success" value={75} />
<Progress color="warning" value={55} />
<Progress color="danger" value={95} />`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Indeterminate */}
      <DocsComponent
        title="Indeterminate State"
        description="Animated loading indicator for ongoing tasks of unknown duration using 'isIndeterminate'."
        preview={
          <div className="max-w-md w-full">
            <Progress label="Connecting to Server..." isIndeterminate color="primary" />
          </div>
        }
        code={`<Progress label="Connecting to Server..." isIndeterminate />`}
        props={["isIndeterminate: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Progress"
        description="Supported properties for the Progress component."
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
                  <td className="px-3 py-2 text-muted-foreground">Current percentage value (0 to 100).</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Progress bar track height scale.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">Indicator theme color accent.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Text title above progress bar.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">showValueLabel</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Displays percentage label text.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isIndeterminate</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders infinite looping animation for pending tasks.</td>
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
