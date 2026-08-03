"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Switch } from "@/components/ui/switch/switch";
import { switchCode } from "@/components/ui/switch/switch.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SwitchComponentPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [billingPeriod, setBillingPeriod] = React.useState(false);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Switch"
        description="A premium toggle control allowing users to switch between on and off states featuring animated thumb icons (e.g. Sun/Moon), track background icons, dual labels on both ends, clickable card containers, and color themes."
      />

      <ImportSnippet
        importCode={`import { Switch } from "@/components/ui/switch/switch";`}
      />

      <InstallationBlock componentName="switch" />

      <Tabs defaultValue="switch">
        <TabsList background={false}>
          <TabsTrigger
            value="switch"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            switch.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="switch">
          <CodeBlock
            code={switchCode}
            componentName="switch.tsx"
            description="Core implementation of the Switch component."
            tags={[
              "React",
              "Radix UI",
              "Switch",
              "Toggle",
              "Thumb Icons",
              "Dual Labels",
            ]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default Switch"
        description="Standard toggle switch with label."
        preview={
          <div className="flex items-center gap-6">
            <Switch label="Enable Notifications" defaultChecked />
          </div>
        }
        code={`<Switch label="Enable Notifications" defaultChecked />`}
      />

      {/* Premium Thumb & Track Icons (Dark / Light Mode) */}
      <DocsComponent
        title="Premium Dark / Light Mode Switch"
        description="Features track icons and smooth spring animated sliding thumb."
        preview={
          <div className="flex flex-col gap-4">
            <Switch
              size="lg"
              color="default"
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              checkedThumbIcon={
                <Icon
                  icon="hugeicons:moon-02"
                  className="size-3.5 text-indigo-400"
                />
              }
              uncheckedThumbIcon={
                <Icon
                  icon="hugeicons:sun-01"
                  className="size-3.5 text-amber-500"
                />
              }
              label={`Theme Mode: ${isDarkMode ? "Dark" : "Light"}`}
            />
          </div>
        }
        code={`const [isDarkMode, setIsDarkMode] = React.useState(true);

<Switch
  size="lg"
  color="default"
  checked={isDarkMode}
  onCheckedChange={setIsDarkMode}
  checkedThumbIcon={<Icon icon="hugeicons:moon-02" className="size-3.5 text-indigo-400" />}
  uncheckedThumbIcon={<Icon icon="hugeicons:sun-01" className="size-3.5 text-amber-500" />}
  label="Theme Mode"
/>`}
        props={[
          "checkedThumbIcon: ReactNode",
          "uncheckedThumbIcon: ReactNode",
          "thumbIcon: ReactNode",
        ]}
      />

      {/* Dual Labels */}
      <DocsComponent
        title="Dual Labels (Start & End Extremities)"
        description="Display text labels on both ends of the switch track simultaneously."
        preview={
          <div className="flex flex-col gap-4">
            <Switch
              size="md"
              color="primary"
              checked={billingPeriod}
              onCheckedChange={setBillingPeriod}
              startLabel="Monthly Billing"
              endLabel="Annual Billing (Save 20%)"
            />
          </div>
        }
        code={`const [annual, setAnnual] = React.useState(false);

<Switch
  startLabel="Monthly Billing"
  endLabel="Annual Billing (Save 20%)"
  checked={annual}
  onCheckedChange={setAnnual}
/>`}
        props={["startLabel: ReactNode", "endLabel: ReactNode"]}
      />

      {/* Card Selection Options */}
      <DocsComponent
        title="Card Selection Options"
        description="Wrap toggle settings in full-width clickable card containers."
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
              label="Two-Factor Authentication (2FA)"
              description="Require an extra verification code when logging in."
              color="success"
            />
          </div>
        }
        code={`<Switch isCard label="Automatic Updates" description="Download updates automatically." defaultChecked />
<Switch isCard label="Two-Factor Auth" description="Extra verification code." color="success" />`}
        props={["isCard: boolean", "isDisabled: boolean"]}
      />

      {/* Colors & Sizes */}
      <DocsComponent
        title="Colors & Sizes"
        description="Dimensions ('sm', 'md', 'lg') and color themes ('default', 'primary', 'secondary', 'accent', 'success', 'warning', 'danger')."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Switch
              size="sm"
              color="primary"
              defaultChecked
              label="Small (sm)"
            />
            <Switch
              size="md"
              color="success"
              defaultChecked
              label="Medium (md)"
            />
            <Switch
              size="lg"
              color="accent"
              defaultChecked
              label="Large (lg)"
            />
          </div>
        }
        code={`<Switch size="sm" color="primary" defaultChecked label="Small" />
<Switch size="md" color="success" defaultChecked label="Medium" />
<Switch size="lg" color="accent" defaultChecked label="Large" />`}
        props={[
          "size: 'sm' | 'md' | 'lg'",
          "color: 'primary' | 'success' | ...",
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
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
                    Icon rendered inside the sliding thumb when checked (e.g.
                    Moon).
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
                    Icon rendered inside the sliding thumb when unchecked (e.g.
                    Sun).
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
                    Text label placed at the left extremity of the switch track.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">endLabel</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Text label placed at the right extremity of the switch
                    track.
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
