import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Context Menu",
  description: "Right-click context menu popup component built on Radix UI Context Menu primitive.",
};

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/contextMenu/contextMenu";
import { contextMenuCode } from "@/components/ui/contextMenu/contextMenu.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ContextMenuComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Context Menu"
        description="Displays a menu to the user upon right-click or tap-and-hold."
      />

      <Tabs defaultValue="contextMenu">
        <TabsList background={false}>
          <TabsTrigger
            value="contextMenu"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            contextMenu.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contextMenu">
          <CodeBlock
            code={contextMenuCode}
            componentName="contextMenu.tsx"
            description="Core implementation of the ContextMenu component."
            tags={["React", "Radix UI", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Right-click target area."
        preview={
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-full max-w-md items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 text-xs font-semibold text-muted-foreground select-none">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Reload</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        }
        code={`<ContextMenu>
  <ContextMenuTrigger className="border-dashed p-8">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — ContextMenu"
        description="Available primitives for building context menus."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">ContextMenuTrigger</td>
                  <td className="px-3 py-2 text-muted-foreground">Target element area receiving right clicks.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">ContextMenuItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Individual context action option item.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
