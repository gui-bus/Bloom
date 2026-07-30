"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
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
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [showFullUrls, setShowFullUrls] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Context Menu"
        description="Displays an interactive context menu popup upon right-click or tap-and-hold interaction, without causing page layout shift."
      />

      <ImportSnippet importCode={`import { ContextMenu } from "@/components/ui/contextMenu/contextMenu";`} />

      <InstallationBlock componentName="contextMenu" />

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
            description="Core implementation of the ContextMenu component with modal=false scroll locking fix."
            tags={["React", "Radix UI", "Tailwind", "Overlays", "ContextMenu"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Right-click target area displaying standard menu items, shortcuts, and action colors."
        preview={
          <div className="w-full">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-xs font-semibold text-zinc-500 dark:text-zinc-400 select-none">
                Right click inside this container
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>
                  <Icon icon="hugeicons:arrow-left-01" className="size-4 mr-2" />
                  <span>Back</span>
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Icon icon="hugeicons:arrow-right-01" className="size-4 mr-2" />
                  <span>Forward</span>
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Icon icon="hugeicons:refresh" className="size-4 mr-2" />
                  <span>Reload</span>
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Icon icon="hugeicons:bookmark-02" className="size-4 mr-2" />
                  <span>Save Page As...</span>
                  <ContextMenuShortcut>⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem color="danger">
                  <Icon icon="hugeicons:delete-02" className="size-4 mr-2" />
                  <span>Delete Element</span>
                  <ContextMenuShortcut>⌫</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        }
        code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-36 w-full items-center justify-center border-dashed rounded-2xl">
    Right click inside this container
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <Icon icon="hugeicons:arrow-left-01" className="size-4 mr-2" />
      <span>Back</span>
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Icon icon="hugeicons:refresh" className="size-4 mr-2" />
      <span>Reload</span>
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem color="danger">
      <Icon icon="hugeicons:delete-02" className="size-4 mr-2" />
      <span>Delete</span>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      />

      {/* With Submenus */}
      <DocsComponent
        title="With Submenus"
        description="Nested context menus for hierarchical options and developer tools."
        preview={
          <div className="w-full">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-xs font-semibold text-zinc-500 dark:text-zinc-400 select-none">
                Right click for nested submenus
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>New Tab</ContextMenuItem>
                <ContextMenuItem>New Window</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Developer Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>Inspect Element</ContextMenuItem>
                    <ContextMenuItem>View Source</ContextMenuItem>
                    <ContextMenuItem>JavaScript Console</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Share Link</ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>Copy Link</ContextMenuItem>
                    <ContextMenuItem>Email Link</ContextMenuItem>
                    <ContextMenuItem>AirDrop</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        }
        code={`<ContextMenu>
  <ContextMenuTrigger className="border-dashed p-8">
    Right click for nested submenus
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuSub>
      <ContextMenuSubTrigger>Developer Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Inspect Element</ContextMenuItem>
        <ContextMenuItem>View Source</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}
      />

      {/* With Checkboxes and Radio Groups */}
      <DocsComponent
        title="With Checkboxes and Radio Groups"
        description="Selectable toggle options and single-choice radio items within a context menu."
        preview={
          <div className="w-full">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-xs font-semibold text-zinc-500 dark:text-zinc-400 select-none">
                Right click for selectable toggles
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuLabel>Display Settings</ContextMenuLabel>
                <ContextMenuCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  Show Bookmarks Bar
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showFullUrls}
                  onCheckedChange={setShowFullUrls}
                >
                  Show Full URLs
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuLabel>Assignee</ContextMenuLabel>
                <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                  <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        }
        code={`<ContextMenu>
  <ContextMenuContent>
    <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
      Show Bookmarks Bar
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
      <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Sub-components Table */}
      <DocsComponent
        title="Sub-components — ContextMenu"
        description="Available primitives for building right-click context menus."
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
                  <td className="px-3 py-2 font-mono text-primary">ContextMenu</td>
                  <td className="px-3 py-2 text-muted-foreground">Main root wrapper component with modal=false scroll locking fix.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">ContextMenuTrigger</td>
                  <td className="px-3 py-2 text-muted-foreground">Target element area receiving right clicks.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">ContextMenuContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Floating popover content panel holding context menu items.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">ContextMenuItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Selectable context action option item with optional color="danger".</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">ContextMenuCheckboxItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Checkbox item supporting boolean toggle states.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">ContextMenuRadioGroup / RadioItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Single-selection radio group within context menu.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">ContextMenuSub / SubTrigger / SubContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Nested sub-level popup menu primitives.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">ContextMenuShortcut</td>
                  <td className="px-3 py-2 text-muted-foreground">Keyboard shortcut hint badge rendered on the right.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    
      <AccessibilityCard />

      <DocsPagination />
    </div>
  );
}
