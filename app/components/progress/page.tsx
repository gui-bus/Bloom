"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Progress } from "@/components/ui/progress/progress";
import { progressCode } from "@/components/ui/progress/progress.code";
import { Separator } from "@/components/ui/separator/separator";

function RealTimeSimulatedProgressDemo() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue((oldValue) => {
        if (oldValue === 100) return 0;
        return Math.min(100, oldValue + 1);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-md w-full">
      <Progress
        value={value}
        showValueLabel
        label="Downloading Assets..."
        color="primary"
      />
    </div>
  );
}

export default function ProgressComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Progress"
        description="Clean progress bar indicator displaying the status of a task or dynamic operations."
      />

      <ImportSnippet
        importCode={`import { Progress } from "@/components/ui/progress/progress";`}
      />

      <InstallationBlock componentName="progress" />

      <CodeBlock
        code={progressCode}
        componentName="progress.tsx"
        description="Core implementation of the Progress component."
        tags={["React", "Tailwind", "Progress", "Indicator"]}
      />

      <DocsComponent
        title="Default"
        description="Standard progress bar representing a completed percentage."
        preview={
          <div className="max-w-md w-full">
            <Progress value={60} showValueLabel label="System Loading" />
          </div>
        }
        code={`<Progress value={60} showValueLabel label="System Loading" />`}
      />

      <DocsComponent
        title="Colors"
        description="Progress supports alert-aligned colors: primary, success, warning, danger, and default."
        preview={
          <div className="max-w-md w-full space-y-4">
            <Progress value={45} color="primary" label="Primary (sky-500)" />
            <Progress
              value={75}
              color="success"
              label="Success (emerald-500)"
            />
            <Progress value={60} color="warning" label="Warning (amber-500)" />
            <Progress value={30} color="danger" label="Danger (rose-500)" />
            <Progress value={90} color="default" label="Default (neutral)" />
          </div>
        }
        code={`<Progress value={45} color="primary" />
<Progress value={75} color="success" />
<Progress value={60} color="warning" />
<Progress value={30} color="danger" />
<Progress value={90} color="default" />`}
        props={[
          "color: 'primary' | 'success' | 'warning' | 'danger' | 'default'",
        ]}
      />

      <DocsComponent
        title="Sizes"
        description="Control height dimensions using the 'size' prop: 'sm', 'md', or 'lg'."
        preview={
          <div className="max-w-md w-full space-y-4">
            <Progress value={50} size="sm" label="Small (sm - h-1.5)" />
            <Progress value={50} size="md" label="Medium (md - h-2.5)" />
            <Progress value={50} size="lg" label="Large (lg - h-4)" />
          </div>
        }
        code={`<Progress value={50} size="sm" />
<Progress value={50} size="md" />
<Progress value={50} size="lg" />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="Indeterminate & Barber-Pole Animated Stripes"
        description="Use 'isIndeterminate' to display a looping loading bar when the progress duration is unknown, or combine with 'isBarberPole' for an animated striped pattern."
        preview={
          <div className="max-w-md w-full space-y-4">
            <Progress isIndeterminate label="Indeterminate operation..." />
            <Progress
              value={75}
              isBarberPole
              label="Barber-pole stripes animated"
            />
          </div>
        }
        code={`<Progress isIndeterminate label="Loading..." />
<Progress value={75} isBarberPole label="Processing..." />`}
        props={["isIndeterminate: boolean", "isBarberPole: boolean"]}
      />

      <DocsComponent
        title="Real-Time Simulated Progress"
        description="Continuously simulating a background operation moving from 0 to 100 to showcase real-time transitions."
        preview={<RealTimeSimulatedProgressDemo />}
        code={`function Demo() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue((oldValue) => (oldValue === 100 ? 0 : oldValue + 1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return <Progress value={value} showValueLabel label="Downloading..." />;
}`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Progress"
        description="Supported properties for the Progress component."
        preview={
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    value
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    number
                  </td>
                  <td className="px-4 py-3 text-zinc-400">0</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Current progress percentage value (0 to 100).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    size
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-4 py-3 text-zinc-400">'md'</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Height size configuration of the progress track.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    color
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    'default' | 'primary' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-4 py-3 text-zinc-400">'primary'</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Background color fill palette for progress indicator.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    isIndeterminate
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">false</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Removes exact value and displays infinite looping loader.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    isBarberPole
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">false</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Applies animated diagonal stripes background pattern over
                    progress bar.
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
