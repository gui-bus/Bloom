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
  const [isSelected, setIsSelected] = React.useState(true);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Switch"
        description="A toggle control allowing users to switch between on and off states with support for labels, descriptions, icons, card layout, and color variants."
      />

      <ImportSnippet importCode={`import { Switch } from "@/components/ui/switch/switch";`} />

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
            tags={["React", "Radix UI", "Switch", "Toggle", "Form"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
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

      {/* Controlled */}
      <DocsComponent
        title="Controlled"
        description="Manage checked state programmatically using checked and onCheckedChange props."
        preview={
          <div className="flex flex-col gap-3">
            <Switch
              checked={isSelected}
              onCheckedChange={setIsSelected}
              label={`Airplane Mode: ${isSelected ? "ON" : "OFF"}`}
            />
            <p className="text-xs text-zinc-500 font-mono">
              Current state value: <span className="font-bold text-sky-500">{String(isSelected)}</span>
            </p>
          </div>
        }
        code={`const [isSelected, setIsSelected] = React.useState(true);

<Switch checked={isSelected} onCheckedChange={setIsSelected} label={\`Airplane Mode: \${isSelected ? "ON" : "OFF"}\`} />`}
        props={["checked: boolean", "onCheckedChange: (checked: boolean) => void"]}
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
            <Switch
              isCard
              isDisabled
              label="Legacy API Access (Disabled)"
              description="This feature has been deprecated in your current plan."
            />
          </div>
        }
        code={`<Switch isCard label="Automatic Updates" description="Download updates automatically." defaultChecked />
<Switch isCard label="Two-Factor Auth" description="Extra verification code." color="success" />
<Switch isCard isDisabled label="Legacy Access (Disabled)" />`}
        props={["isCard: boolean", "isDisabled: boolean"]}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Choose from theme color variants: 'default', 'primary', 'secondary', 'accent', 'success', 'warning', or 'danger'."
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
        code={`<Switch color="default" defaultChecked label="Default" />
<Switch color="primary" defaultChecked label="Primary" />
<Switch color="secondary" defaultChecked label="Secondary" />
<Switch color="accent" defaultChecked label="Accent" />
<Switch color="success" defaultChecked label="Success" />
<Switch color="warning" defaultChecked label="Warning" />
<Switch color="danger" defaultChecked label="Danger" />`}
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scale toggle dimensions: 'sm', 'md', or 'lg'."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Switch size="sm" color="primary" defaultChecked label="Small (sm)" />
            <Switch size="md" color="primary" defaultChecked label="Medium (md)" />
            <Switch size="lg" color="primary" defaultChecked label="Large (lg)" />
          </div>
        }
        code={`<Switch size="sm" color="primary" defaultChecked label="Small" />
<Switch size="md" color="primary" defaultChecked label="Medium" />
<Switch size="lg" color="primary" defaultChecked label="Large" />`}
        props={["size: 'sm' | 'md' | 'lg'"]}
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
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">checked / defaultChecked</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Controlled / uncontrolled active toggle state.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Primary label text for the toggle option.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isCard</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Wraps toggle in a full-width clickable card.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'primary'</td>
                  <td className="px-3 py-2 text-muted-foreground">Active state track color.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Dimension scale of toggle track and thumb.</td>
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
