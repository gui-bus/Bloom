"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { CircularProgress } from "@/components/ui/circularProgress/circularProgress";
import { circularProgressCode } from "@/components/ui/circularProgress/circularProgress.code";
import { Separator } from "@/components/ui/separator/separator";

function RealTimeCircularDemo() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue((oldVal) => {
        if (oldVal === 100) return 0;
        return Math.min(100, oldVal + 2);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-6 flex-wrap">
      <CircularProgress
        value={value}
        size="md"
        color="primary"
        showValueLabel
        label="Syncing data..."
      />
      <CircularProgress
        value={value}
        size="lg"
        color="success"
        showValueLabel
        label="Completed"
      />
    </div>
  );
}

export default function CircularProgressComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Circular Progress"
        description="Circular progress indicators show completion percentages of tasks or background actions in a radial circle style."
      />

      <ImportSnippet
        importCode={`import { CircularProgress } from "@/components/ui/circularProgress/circularProgress";`}
      />

      <InstallationBlock componentName="circularProgress" />

      <CodeBlock
        code={circularProgressCode}
        componentName="circularProgress.tsx"
        description="Core implementation of the CircularProgress component."
        tags={["React", "Tailwind", "Circular Progress", "Loader"]}
      />

      <DocsComponent
        title="Default"
        description="Standard radial circular indicator."
        preview={
          <div className="flex items-center gap-4">
            <CircularProgress value={70} showValueLabel />
            <CircularProgress value={45} showValueLabel label="Running tasks" />
          </div>
        }
        code={`<CircularProgress value={70} showValueLabel />
<CircularProgress value={45} showValueLabel label="Running tasks" />`}
      />

      <DocsComponent
        title="Colors"
        description="Supports theme-aligned alert colors: primary, success, warning, danger, and default."
        preview={
          <div className="flex items-center gap-6 flex-wrap">
            <CircularProgress value={65} color="primary" label="Primary" />
            <CircularProgress value={85} color="success" label="Success" />
            <CircularProgress value={40} color="warning" label="Warning" />
            <CircularProgress value={20} color="danger" label="Danger" />
            <CircularProgress value={95} color="default" label="Default" />
          </div>
        }
        code={`<CircularProgress value={65} color="primary" />
<CircularProgress value={85} color="success" />
<CircularProgress value={40} color="warning" />
<CircularProgress value={20} color="danger" />
<CircularProgress value={95} color="default" />`}
        props={[
          "color: 'primary' | 'success' | 'warning' | 'danger' | 'default'",
        ]}
      />

      <DocsComponent
        title="Sizes"
        description="Render radial progress rings in different sizes: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex items-end gap-6 flex-wrap">
            <CircularProgress
              value={50}
              size="sm"
              showValueLabel
              label="Small (sm)"
            />
            <CircularProgress
              value={50}
              size="md"
              showValueLabel
              label="Medium (md)"
            />
            <CircularProgress
              value={50}
              size="lg"
              showValueLabel
              label="Large (lg)"
            />
          </div>
        }
        code={`<CircularProgress value={50} size="sm" showValueLabel />
<CircularProgress value={50} size="md" showValueLabel />
<CircularProgress value={50} size="lg" showValueLabel />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="Indeterminate Spin"
        description="Pass 'isIndeterminate' to spin the circular boundary continuously during loading states."
        preview={
          <div className="flex items-center gap-6">
            <CircularProgress isIndeterminate size="sm" label="Connecting..." />
            <CircularProgress
              isIndeterminate
              size="md"
              color="success"
              label="Saving profile..."
            />
          </div>
        }
        code={`<CircularProgress isIndeterminate size="sm" label="Connecting..." />
<CircularProgress isIndeterminate size="md" color="success" />`}
        props={["isIndeterminate: boolean"]}
      />

      <DocsComponent
        title="Real-Time Simulated Progress"
        description="Radial circular progress bar dynamically moving from 0 to 100."
        preview={<RealTimeCircularDemo />}
        code={`function Demo() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue((oldVal) => (oldVal === 100 ? 0 : oldVal + 2));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return <CircularProgress value={value} showValueLabel label="Syncing..." />;
}`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — CircularProgress"
        description="Supported properties for the CircularProgress component."
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
                    Completion percentage value (0 to 100).
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
                    Outer radial dimension size mapping.
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
                    Stroke color palette of the indicator circle.
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
                    Spin circular outline indefinitely for loading state.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-sky-500">
                    showValueLabel
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    boolean
                  </td>
                  <td className="px-4 py-3 text-zinc-400">false</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                    Renders percentage number centered inside circular
                    container.
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
