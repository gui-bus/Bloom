"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Separator } from "@/components/ui/separator/separator";
import { separatorCode } from "@/components/ui/separator/separator.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SeparatorComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Separator"
        description="Visually or semantically separates content with horizontal/vertical lines, gradients, and section labels."
      />

      <ImportSnippet
        importCode={`import { Separator } from "@/components/ui/separator/separator";`}
      />

      <InstallationBlock componentName="separator" />

      <Tabs defaultValue="separator">
        <TabsList background={false}>
          <TabsTrigger
            value="separator"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            separator.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="separator">
          <CodeBlock
            code={separatorCode}
            componentName="separator.tsx"
            description="Core implementation of the Separator component."
            tags={["React", "Radix UI", "Separator", "Layout"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard horizontal divider line."
        preview={
          <div className="max-w-md w-full space-y-3">
            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
              Top Section
            </p>
            <Separator />
            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
              Bottom Section
            </p>
          </div>
        }
        code={`<p>Top Section</p>
<Separator />
<p>Bottom Section</p>`}
      />

      {/* Labels & Gradients */}
      <DocsComponent
        title="Labels & Gradients"
        description="Add centered text labels and smooth gradient fade lines using label and gradient props."
        preview={
          <div className="max-w-md w-full space-y-6">
            <Separator label="OR CONTINUE WITH" />
            <Separator label="API REFERENCE" gradient color="primary" />
          </div>
        }
        code={`<Separator label="OR CONTINUE WITH" />
<Separator label="API REFERENCE" gradient color="primary" />`}
        props={[
          "label: ReactNode",
          "gradient: boolean",
          "color: 'default' | 'primary' | 'secondary' | ...",
        ]}
      />

      {/* Vertical Orientation */}
      <DocsComponent
        title="Vertical Orientation"
        description="Vertical divider line for inline button groups or navigation header links."
        preview={
          <div className="flex items-center gap-3 h-5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <span>Dashboard</span>
            <Separator orientation="vertical" />
            <span>Analytics</span>
            <Separator orientation="vertical" />
            <span>Settings</span>
          </div>
        }
        code={`<div className="flex items-center gap-3 h-5">
  <span>Dashboard</span>
  <Separator orientation="vertical" />
  <span>Analytics</span>
</div>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Separator"
        description="Supported properties for Separator."
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
                  <td className="px-3 py-2 font-mono text-primary">label</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Centered title text inserted between divider lines.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">gradient</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Fades edges with a smooth gradient line.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    orientation
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'horizontal' | 'vertical'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    'horizontal'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Divider line orientation.
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
