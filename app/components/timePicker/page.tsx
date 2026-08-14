"use client";

import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
import { TimePicker } from "@/components/ui/timePicker/timePicker";
import { timePickerCode } from "@/components/ui/timePicker/timePicker.code";

export default function TimePickerPage() {
  const [time, setTime] = React.useState("02:30 PM");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Time Picker"
        description="A specialized input component for selecting hours, minutes, and periods (AM/PM) with intuitive keyboard and mouse controls."
      />

      <ImportSnippet
        importCode={`import { TimePicker } from "@/components/ui/timePicker/timePicker";`}
      />

      <InstallationBlock componentName="timePicker" />

      <CodeBlock
        code={timePickerCode}
        componentName="timePicker.tsx"
        description="TimePicker component supporting 12h/24h formats, minute step intervals, wheel column selectors, and custom sizes."
        tags={["React", "Tailwind", "UI Component", "Form", "TimePicker"]}
      />

      <DocsComponent
        title="Default"
        description="A standard 12-hour time picker with AM/PM toggle."
        preview={
          <div className="flex flex-col items-center justify-center space-y-4">
            <TimePicker
              value={time}
              onChange={setTime}
              label="Meeting Time"
              description="Select when the meeting begins."
            />
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Selected: {time}
            </p>
          </div>
        }
        code={`<TimePicker 
  value="02:30 PM"
  onChange={(time) => console.log(time)}
  label="Meeting Time"
  description="Select when the meeting begins."
/>`}
      />

      <DocsComponent
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'filled' | 'glow' | 'glassmorphism' | 'gradient-border' | 'underlined'",
        ]}
        title="Variants"
        description="Defines the visual appearance of the Time Picker trigger using the 'variant' prop."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <TimePicker label="Default" value="09:00 AM" variant="default" />
            <TimePicker label="Bordered" value="09:00 AM" variant="bordered" />
            <TimePicker label="Flat" value="09:00 AM" variant="flat" />
            <TimePicker label="Filled" value="09:00 AM" variant="filled" />
            <TimePicker label="Glow" value="09:00 AM" variant="glow" />
            <TimePicker
              label="Glassmorphism"
              value="09:00 AM"
              variant="glassmorphism"
            />
            <TimePicker
              label="Gradient Border"
              value="09:00 AM"
              variant="gradient-border"
            />
            <TimePicker
              label="Underlined"
              value="09:00 AM"
              variant="underlined"
            />
          </div>
        }
        code={`<TimePicker variant="default" label="Default" />
<TimePicker variant="bordered" label="Bordered" />
<TimePicker variant="flat" label="Flat" />
<TimePicker variant="filled" label="Filled" />
<TimePicker variant="glow" label="Glow" />
<TimePicker variant="glassmorphism" label="Glassmorphism" />
<TimePicker variant="gradient-border" label="Gradient Border" />
<TimePicker variant="underlined" label="Underlined" />`}
      />

      <DocsComponent
        props={["size: 'sm' | 'md' | 'lg'"]}
        title="Sizes"
        description="Available in three sizes: small, medium, and large."
        preview={
          <div className="flex flex-col items-center justify-center space-y-6">
            <TimePicker size="sm" label="Small (sm)" value="08:00 AM" />
            <TimePicker
              size="md"
              label="Medium (md) - Default"
              value="12:30 PM"
            />
            <TimePicker size="lg" label="Large (lg)" value="06:45 PM" />
          </div>
        }
        code={`<TimePicker size="sm" label="Small (sm)" />
<TimePicker size="md" label="Medium (md) - Default" />
<TimePicker size="lg" label="Large (lg)" />`}
      />

      <DocsComponent
        title="Required State"
        description="Displays an asterisk next to the label indicating that choosing a time is mandatory."
        preview={
          <div className="flex flex-col items-center justify-center space-y-4">
            <TimePicker isRequired label="Appointment Time" value="09:00 AM" />
          </div>
        }
        code={`<TimePicker
  isRequired
  label="Appointment Time"
/>`}
        props={["isRequired: boolean"]}
      />

      <DocsComponent
        props={["format: any", "h: any"]}
        title="12h vs 24h Format"
        description="The time picker supports both 12-hour (with AM/PM toggle) and 24-hour formats."
        preview={
          <div className="flex flex-col items-center justify-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
            <TimePicker format="12h" value="09:00 AM" label="12-Hour Format" />
            <TimePicker format="24h" value="21:00" label="24-Hour Format" />
          </div>
        }
        code={`<TimePicker format="12h" value="09:00 AM" label="12-Hour Format" />
<TimePicker format="24h" value="21:00" label="24-Hour Format" />`}
      />

      <DocsComponent
        props={["isDisabled: any", "isInvalid: any"]}
        title="States"
        description="Time pickers can show disabled or invalid states."
        preview={
          <div className="flex flex-col items-center justify-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
            <TimePicker isDisabled value="10:00 AM" label="Disabled" />
            <TimePicker isInvalid value="13:99 PM" label="Invalid" />
          </div>
        }
        code={`<TimePicker isDisabled value="10:00 AM" label="Disabled" />
<TimePicker isInvalid value="13:99 PM" label="Invalid" />`}
      />

      <DocsComponent
        title="Minute Step Intervals"
        description="Configure custom minute increment steps (e.g., step={15} for quarter-hour slots)."
        preview={
          <div className="flex flex-col items-center justify-center space-y-4">
            <TimePicker
              step={15}
              value="09:15 AM"
              label="Schedule Slot (15-min steps)"
              description="Clicking arrows increments by 15 minutes."
            />
          </div>
        }
        code={`<TimePicker step={15} value="09:15 AM" label="15-min Step Slot" />`}
        props={["step: number"]}
      />

      <DocsComponent
        title="Scrollable Wheel Time Selector"
        description="Render intuitive scrollable wheel column selectors for picking hours, minutes, and period with useWheel={true}."
        preview={
          <div className="flex flex-col items-center justify-center space-y-4">
            <TimePicker
              useWheel
              step={15}
              value="10:30 AM"
              label="Wheel Column Picker"
            />
          </div>
        }
        code={`<TimePicker useWheel step={15} value="10:30 AM" label="Wheel Column Picker" />`}
        props={["useWheel: boolean", "step: number"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
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
          <tbody>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                <code>value</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>string</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>"12:00 PM"</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                The current time value (e.g., "12:00 PM" or "23:00")
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                <code>onChange</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>(time: string) =&gt; void</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">-</td>
              <td className="px-4 py-3 text-zinc-500">
                Callback fired when the time value changes
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                <code>format</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>"12h" | "24h"</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>"12h"</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                The time format to display
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                <code>step</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>number</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>1</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                The minute step amount when using arrows
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                <code>size</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>"sm" | "md" | "lg"</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>"md"</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                The size of the time picker
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                <code>label</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>ReactNode</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">-</td>
              <td className="px-4 py-3 text-zinc-500">
                The label shown above the input
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                <code>description</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>ReactNode</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">-</td>
              <td className="px-4 py-3 text-zinc-500">
                Help text shown below the input
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                <code>isInvalid</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>boolean</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>false</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                Whether the input is in an error state
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                <code>isDisabled</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>boolean</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                <code>false</code>
              </td>
              <td className="px-4 py-3 text-zinc-500">
                Whether the input is disabled
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
