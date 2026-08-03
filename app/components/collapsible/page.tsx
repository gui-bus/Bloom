"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Badge } from "@/components/ui/badge/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible/collapsible";
import { collapsibleCode } from "@/components/ui/collapsible/collapsible.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

function DefaultDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-3"
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="w-full flex items-center justify-between gap-4 px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 text-left cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
        >
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            @guilherme starred 3 repositories
          </h4>
          <span className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors">
            <Icon
              icon="hugeicons:arrow-down-01"
              className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </span>
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-3">
        <div className="px-4 py-3 font-mono text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300">
          @bloomui/core
        </div>
        <div className="px-4 py-3 font-mono text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300">
          @bloomui/cli
        </div>
        <div className="px-4 py-3 font-mono text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300">
          @bloomui/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function DefaultOpenDemo() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-3"
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="w-full flex items-center justify-between gap-4 px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 text-left cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
        >
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Project Settings
          </h4>
          <span className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors">
            <Icon
              icon="hugeicons:arrow-down-01"
              className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </span>
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-3">
        <div className="px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between">
          <span className="text-sm text-zinc-700 dark:text-zinc-300">
            Notifications
          </span>
          <Badge color="success">Enabled</Badge>
        </div>
        <div className="px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between">
          <span className="text-sm text-zinc-700 dark:text-zinc-300">
            Two-Factor Authentication
          </span>
          <Badge color="warning">Pending</Badge>
        </div>
        <div className="px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between">
          <span className="text-sm text-zinc-700 dark:text-zinc-300">
            API Access
          </span>
          <Badge color="danger">Restricted</Badge>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function DisabledDemo() {
  return (
    <Collapsible disabled className="w-full space-y-2">
      <CollapsibleTrigger asChild>
        <button
          type="button"
          disabled
          className="w-full flex items-center justify-between gap-4 px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 text-left opacity-60 cursor-not-allowed"
        >
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Archived Project (disabled)
          </h4>
          <span className="p-1.5 rounded-lg text-zinc-500">
            <Icon icon="hugeicons:arrow-down-01" className="size-4" />
          </span>
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-2">
        <div className="px-4 py-3 font-mono text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300">
          This content will never be shown.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function CardStyleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs overflow-hidden">
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-5 py-4 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <Icon icon="hugeicons:shield-01" className="size-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Security & Privacy
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Manage your account security preferences
                </p>
              </div>
            </div>
            <Icon
              icon="hugeicons:arrow-down-01"
              className={`size-4 text-zinc-500 dark:text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="border-t border-zinc-200 dark:border-zinc-800 px-5 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Password
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Last changed 30 days ago
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Login Alerts
              </span>
              <Badge color="success">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Session Timeout
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                30 minutes
              </span>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function LazyRenderingDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="w-full flex items-center justify-between gap-4 px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 text-left cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
        >
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Heavy Analytics Module (Lazy)
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Content only renders in DOM when expanded for the first time
            </p>
          </div>
          <span className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors">
            <Icon
              icon="hugeicons:arrow-down-01"
              className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </span>
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent lazy className="space-y-2">
        <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 space-y-2">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            📊 Heavy charts and complex datasets loaded lazily!
          </p>
          <Badge color="primary">Lazy Mounted</Badge>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function CollapsiblePage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Collapsible"
        description="An interactive component that expands and collapses content panels with smooth CSS Grid auto-height transitions and optional lazy content rendering."
      />

      <ImportSnippet
        importCode={`import { Collapsible } from "@/components/ui/collapsible/collapsible";`}
      />

      <InstallationBlock componentName="collapsible" />

      <Tabs defaultValue="collapsible">
        <TabsList background={false}>
          <TabsTrigger
            value="collapsible"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            collapsible.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="collapsible">
          <CodeBlock
            code={collapsibleCode}
            componentName="collapsible.tsx"
            description="Collapsible panel built with Radix Primitives for expanding and contracting UI elements."
            tags={[
              "React",
              "Radix UI",
              "Tailwind",
              "UI Component",
              "Collapsible",
            ]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Standard collapsible panel with a trigger button that reveals hidden items using a smooth height animation."
        preview={<DefaultDemo />}
        code={`<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
  <div className="flex items-center justify-between gap-4 px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900">
    <h4 className="text-sm font-semibold">@guilherme starred 3 repositories</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" isIconOnly ariaLabel="Toggle details">
        <Icon icon="hugeicons:arrow-down-01" className={\`size-4 transition-transform \${isOpen ? "rotate-180" : ""}\`} />
      </Button>
    </CollapsibleTrigger>
  </div>

  <div className="px-4 py-3 font-mono text-sm border rounded-xl">@bloomui/core</div>

  <CollapsibleContent className="space-y-2">
    <div className="px-4 py-3 font-mono text-sm border rounded-xl">@bloomui/cli</div>
    <div className="px-4 py-3 font-mono text-sm border rounded-xl">@bloomui/react</div>
  </CollapsibleContent>
</Collapsible>`}
      />

      <DocsComponent
        title="Lazy Content Rendering"
        description="Defers rendering of child components until the panel is expanded for the first time, optimizing initial load performance."
        preview={<LazyRenderingDemo />}
        code={`<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
  <div className="flex items-center justify-between gap-4 px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900">
    <h4>Heavy Analytics Module (Lazy)</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" isIconOnly ariaLabel="Toggle analytics">
        <Icon icon="hugeicons:arrow-down-01" className={\`size-4 transition-transform \${isOpen ? "rotate-180" : ""}\`} />
      </Button>
    </CollapsibleTrigger>
  </div>

  <CollapsibleContent lazy className="space-y-2">
    <div className="p-4 border rounded-xl">
      📊 Heavy charts and complex datasets loaded lazily!
    </div>
  </CollapsibleContent>
</Collapsible>`}
        props={["lazy: boolean"]}
      />

      <DocsComponent
        title="Default Open"
        description="Pre-expanded collapsible panel using controlled state initialized as open."
        preview={<DefaultOpenDemo />}
        code={`<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
  <div className="flex items-center justify-between ...">
    <h4>Project Settings</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" isIconOnly ariaLabel="Toggle settings">
        <Icon icon="hugeicons:arrow-down-01" />
      </Button>
    </CollapsibleTrigger>
  </div>

  <CollapsibleContent className="space-y-2">
    <div>Notifications — <Badge color="success">Enabled</Badge></div>
    <div>Two-Factor Authentication — <Badge color="warning">Pending</Badge></div>
    <div>API Access — <Badge color="danger">Restricted</Badge></div>
  </CollapsibleContent>
</Collapsible>`}
        props={["open: boolean", "defaultOpen: boolean"]}
      />

      <DocsComponent
        title="Card Style"
        description="A collapsible section styled as a bordered card container with icon, heading, and description in the trigger."
        preview={<CardStyleDemo />}
        code={`<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs overflow-hidden">
    <CollapsibleTrigger asChild>
      <button className="w-full flex items-center justify-between gap-4 px-5 py-4 cursor-pointer">
        <div className="flex items-center gap-3">
          <Icon icon="hugeicons:shield-01" />
          <div>
            <p className="text-sm font-semibold">Security & Privacy</p>
            <p className="text-xs text-zinc-500">Manage your account security preferences</p>
          </div>
        </div>
        <Icon icon="hugeicons:arrow-down-01" />
      </button>
    </CollapsibleTrigger>

    <CollapsibleContent>
      <div className="border-t border-zinc-200 dark:border-zinc-800 px-5 py-4 space-y-3">
        <div>Password — Last changed 30 days ago</div>
        <div>Login Alerts — <Badge color="success">Active</Badge></div>
        <div>Session Timeout — 30 minutes</div>
      </div>
    </CollapsibleContent>
  </div>
</Collapsible>`}
      />

      <DocsComponent
        title="Disabled State"
        description="Disables user interaction with the collapsible trigger, preventing expand or collapse."
        preview={<DisabledDemo />}
        code={`<Collapsible disabled className="w-full space-y-2">
  <div className="flex items-center justify-between gap-4 px-4 py-3 border rounded-xl opacity-60">
    <h4>Archived Project (disabled)</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" isIconOnly isDisabled>
        <Icon icon="hugeicons:arrow-down-01" />
      </Button>
    </CollapsibleTrigger>
  </div>

  <CollapsibleContent>
    <div>This content will never be shown.</div>
  </CollapsibleContent>
</Collapsible>`}
        props={["disabled: boolean"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Collapsible & CollapsibleContent"
        description="Properties for configuring the Collapsible and CollapsibleContent components."
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
                  <td className="px-3 py-2 font-mono text-primary">open</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Controlled open state of the collapsible panel.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    defaultOpen
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Initial open state when using uncontrolled mode.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    onOpenChange
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"(open: boolean) => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback function fired when the open state changes.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">disabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction with the collapsible trigger.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">lazy</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Defers rendering child DOM elements until expanded for the
                    first time.
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
