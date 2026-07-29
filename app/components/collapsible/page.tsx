import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { CollapsibleDemo } from "./collapsible-demo";

export const metadata: Metadata = {
  title: "Collapsible",
  description: "An interactive component which expands and collapses a panel with smooth height transitions.",
};
import { collapsibleCode } from "@/components/ui/collapsible/collapsible.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function CollapsiblePage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Collapsible"
        description="An interactive component that expands and collapses content panels with smooth height transitions."
      />

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
            tags={["React", "Radix UI", "Tailwind", "UI Component", "Collapsible"]}
          />
        </TabsContent>
      </Tabs>

      {/* Interactive Example */}
      <DocsComponent
        title="Interactive Example"
        description="Toggle hidden items using a trigger button with rotation icon transition."
        preview={<CollapsibleDemo />}
        code={`"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible/collapsible";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between space-x-4 rounded-xl border border-border px-4 py-3">
        <h4 className="text-sm font-semibold">@guilherme starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" isIconOnly ariaLabel="Toggle details">
            <Icon
              icon="hugeicons:arrow-down-01"
              className={\`size-4 transition-transform duration-200 \${
                isOpen ? "rotate-180" : ""
              }\`}
            />
          </Button>
        </CollapsibleTrigger>
      </div>

      <div className="rounded-xl border border-border px-4 py-3 font-mono text-sm">
        @bloomui/core
      </div>

      <CollapsibleContent className="space-y-2">
        <div className="rounded-xl border border-border px-4 py-3 font-mono text-sm">
          @bloomui/cli
        </div>
        <div className="rounded-xl border border-border px-4 py-3 font-mono text-sm">
          @bloomui/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Collapsible"
        description="Properties for configuring the Collapsible component."
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
                  <td className="px-3 py-2 font-mono text-primary">open</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Controlled open state of the collapsible panel.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">defaultOpen</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Initial open state when uncontrolled.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onOpenChange</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{"(open: boolean) => void"}</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback function fired when the open state changes.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">disabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction with the collapsible trigger.
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
