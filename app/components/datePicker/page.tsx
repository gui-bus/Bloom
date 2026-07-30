"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { DatePicker } from "@/components/ui/datePicker/datePicker";
import { datePickerCode } from "@/components/ui/datePicker/datePicker.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function DatePickerComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Date Picker"
        description="A visual date selection component featuring an interactive calendar dropdown, date formatting, clearable selection, and error state validation."
      />

      <InstallationBlock componentName="datePicker" />

      <Tabs defaultValue="datePicker">
        <TabsList background={false}>
          <TabsTrigger
            value="datePicker"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            datePicker.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="datePicker">
          <CodeBlock
            code={datePickerCode}
            componentName="datePicker.tsx"
            description="Core implementation of the DatePicker component."
            tags={["React", "Tailwind", "Calendar", "Forms", "DatePicker"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard date picker input with interactive calendar grid popup."
        preview={
          <div className="w-full">
            <DatePicker label="Birth Date" placeholder="Select your birth date..." />
          </div>
        }
        code={`<DatePicker label="Birth Date" placeholder="Select your birth date..." />`}
      />

      {/* Clearable State */}
      <DocsComponent
        title="Clearable State"
        description="Set 'isClearable' to true to render a clear action button when a date is selected."
        preview={
          <div className="w-full">
            <DatePicker
              isClearable
              label="Event Date (Clearable)"
              value={new Date()}
            />
          </div>
        }
        code={`<DatePicker
  isClearable
  label="Event Date (Clearable)"
  value={new Date()}
/>`}
        props={["isClearable: boolean"]}
      />

      {/* Invalid State */}
      <DocsComponent
        title="Invalid State"
        description="Applies error border and text styling for form validation errors."
        preview={
          <div className="w-full">
            <DatePicker
              isInvalid
              label="Departure Date (Required)"
              placeholder="Date selection is required"
            />
          </div>
        }
        code={`<DatePicker
  isInvalid
  label="Departure Date (Required)"
  placeholder="Date selection is required"
/>`}
        props={["isInvalid: boolean"]}
      />

      {/* Disabled State */}
      <DocsComponent
        title="Disabled State"
        description="Disables user interaction and applies muted opacity styling."
        preview={
          <div className="w-full">
            <DatePicker
              disabled
              label="Locked Date"
              value={new Date()}
            />
          </div>
        }
        code={`<DatePicker
  disabled
  label="Locked Date"
  value={new Date()}
/>`}
        props={["disabled: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props DatePicker Table */}
      <DocsComponent
        title="Props — DatePicker"
        description="Properties to configure the DatePicker component."
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
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">Date</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Controlled selected Date object.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onChange</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(date: Date | undefined) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback fired when a date is selected or cleared.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Label element rendered above the input button.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">placeholder</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'Select date...'</td>
                  <td className="px-3 py-2 text-muted-foreground">Placeholder text when no date is selected.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isClearable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders a clear button to reset selected date.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isInvalid</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Applies red error border and text styling.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">disabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Disables user interaction and applies muted opacity styling.</td>
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
