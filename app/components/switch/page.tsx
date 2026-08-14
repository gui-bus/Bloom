"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Switch } from "@/components/ui/switch/switch";
import { switchCode } from "@/components/ui/switch/switch.code";

export default function SwitchComponentPage() {
  const [billingPeriod, setBillingPeriod] = React.useState(false);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Switch"
        description="A toggle control allowing users to switch between on and off states featuring animated thumb icons, dual labels, clickable card containers, and color themes."
      />

      <ImportSnippet
        importCode={`import { Switch } from "@/components/ui/switch/switch";`}
      />

      <InstallationBlock componentName="switch" />

      <CodeBlock
        code={switchCode}
        componentName="switch.tsx"
        description="Core implementation of the Switch component."
        tags={["React", "Radix UI", "Switch", "Toggle"]}
      />

      <DocsComponent
        title="Default"
        description="Standard toggle switch with label."
        preview={
          <div className="flex items-center gap-6">
            <Switch label="Enable Notifications" defaultChecked />
          </div>
        }
        code={`<Switch label="Enable Notifications" defaultChecked />`}
      />

      <DocsComponent
        title="Variants"
        description="Render as a card container for settings-style toggle rows."
        preview={
          <div className="max-w-md w-full space-y-3">
            <Switch
              isCard
              label="Automatic Updates"
              description="Download and install software updates automatically in the background."
              defaultChecked
            />
            <Switch
              isCard
              label="Two-Factor Authentication"
              description="Require an extra verification code when logging in."
              color="success"
            />
            <Switch
              isCard
              label="Marketing Emails"
              description="Receive occasional product news and feature announcements."
              color="primary"
              isDisabled
            />
          </div>
        }
        code={`<Switch isCard label="Automatic Updates" description="Download updates automatically." defaultChecked />
<Switch isCard label="Two-Factor Authentication" description="Extra verification code." color="success" />`}
        props={["isCard: boolean", "isDisabled: boolean"]}
      />

      <DocsComponent
        title="Colors"
        description="Apply theme alert colors to the active checked track."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Switch color="default" defaultChecked label="Default" />
            <Switch color="primary" defaultChecked label="Primary" />
            <Switch color="secondary" defaultChecked label="Secondary" />
            <Switch color="accent" defaultChecked label="Accent" />
            <Switch color="success" defaultChecked label="Success" />
            <Switch color="warning" defaultChecked label="Warning" />
            <Switch color="danger" defaultChecked label="Danger" />
          </div>
        }
        code={`<Switch color="default" defaultChecked />
<Switch color="primary" defaultChecked />
<Switch color="success" defaultChecked />
<Switch color="warning" defaultChecked />
<Switch color="danger" defaultChecked />`}
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
      />

      <DocsComponent
        title="Sizes"
        description="Choose from small, medium, or large switch dimensions."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Switch size="sm" defaultChecked label="Small" />
            <Switch size="md" defaultChecked label="Medium" />
            <Switch size="lg" defaultChecked label="Large" />
          </div>
        }
        code={`<Switch size="sm" defaultChecked label="Small" />
<Switch size="md" defaultChecked label="Medium" />
<Switch size="lg" defaultChecked label="Large" />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="Thumb Icons"
        description="Embed icons inside the sliding thumb to show context-aware state feedback."
        preview={
          <div className="flex flex-col gap-4">
            <Switch
              size="lg"
              color="success"
              defaultChecked
              checkedThumbIcon={
                <Icon
                  icon="hugeicons:tick-02"
                  className="size-3.5 text-emerald-500"
                />
              }
              uncheckedThumbIcon={
                <Icon
                  icon="hugeicons:cancel-01"
                  className="size-3.5 text-rose-400"
                />
              }
              label="Enabled"
            />
            <Switch
              size="lg"
              color="primary"
              checkedThumbIcon={
                <Icon
                  icon="hugeicons:lock-01"
                  className="size-3.5 text-sky-500"
                />
              }
              uncheckedThumbIcon={
                <Icon
                  icon="hugeicons:lock-key-01"
                  className="size-3.5 text-zinc-400"
                />
              }
              label="Locked"
            />
          </div>
        }
        code={`<Switch
  size="lg"
  color="success"
  checkedThumbIcon={<Icon icon="hugeicons:tick-02" className="size-3.5 text-emerald-500" />}
  uncheckedThumbIcon={<Icon icon="hugeicons:cancel-01" className="size-3.5 text-rose-400" />}
  label="Enabled"
/>`}
        props={[
          "checkedThumbIcon: ReactNode",
          "uncheckedThumbIcon: ReactNode",
          "thumbIcon: ReactNode",
        ]}
      />

      <DocsComponent
        title="Dual Labels"
        description="Display text labels on both ends of the switch track simultaneously."
        preview={
          <div className="flex flex-col gap-4">
            <Switch
              size="md"
              color="primary"
              checked={billingPeriod}
              onCheckedChange={setBillingPeriod}
              startLabel="Monthly"
              endLabel="Annual (Save 20%)"
            />
          </div>
        }
        code={`const [annual, setAnnual] = React.useState(false);

<Switch
  startLabel="Monthly"
  endLabel="Annual (Save 20%)"
  checked={annual}
  onCheckedChange={setAnnual}
/>`}
        props={["startLabel: ReactNode", "endLabel: ReactNode"]}
      />

      <DocsComponent
        title="Props — Switch"
        description="Supported properties for Switch."
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
                  <td className="px-3 py-2 font-mono text-primary">
                    checkedThumbIcon
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Icon rendered inside the thumb when checked.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    uncheckedThumbIcon
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Icon rendered inside the thumb when unchecked.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    startLabel
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Text label placed at the left extremity.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">endLabel</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Text label placed at the right extremity.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isCard</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Wraps the switch in a clickable card container.
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
