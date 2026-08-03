"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable/resizable";
import { resizableCode } from "@/components/ui/resizable/resizable.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ResizableComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Resizable"
        description="Accessible resizable panel layout groups with horizontal and vertical drag handles built on react-resizable-panels."
      />

      <ImportSnippet
        importCode={`import { Resizable } from "@/components/ui/resizable/resizable";`}
      />

      <InstallationBlock componentName="resizable" />

      <Tabs defaultValue="resizable">
        <TabsList background={false}>
          <TabsTrigger
            value="resizable"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            resizable.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="resizable">
          <CodeBlock
            code={resizableCode}
            componentName="resizable.tsx"
            description="Core implementation of the Resizable component."
            tags={["React", "Resizable", "Layout", "Split Pane"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="Horizontal resizable panels with drag handle grip."
        preview={
          <div className="h-48 w-full max-w-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xs">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={30}>
                <div className="flex h-full items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  Sidebar (30%)
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={70}>
                <div className="flex h-full items-center justify-center p-4 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  Main Content (70%)
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        }
        code={`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={30}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>Main Content</ResizablePanel>
</ResizablePanelGroup>`}
      />

      <DocsComponent
        title="Vertical Layout"
        description="Vertical layout direction using direction='vertical'."
        preview={
          <div className="h-64 w-full max-w-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xs">
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={40}>
                <div className="flex h-full items-center justify-center p-4 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  Top Viewport (40%)
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  Bottom Terminal / Console (60%)
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        }
        code={`<ResizablePanelGroup direction="vertical">
  <ResizablePanel defaultSize={40}>Top Viewport</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={60}>Bottom Terminal</ResizablePanel>
</ResizablePanelGroup>`}
        props={["direction: 'horizontal' | 'vertical'"]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Resizable Components"
        description="Supported properties for Resizable subcomponents."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Component
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    ResizablePanelGroup
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    direction
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'horizontal' | 'vertical'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Split direction layout for panels.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    ResizablePanel
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    defaultSize
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Initial percentage size of the panel.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    ResizableHandle
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    withHandle
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders drag grip handle icon badge.
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
