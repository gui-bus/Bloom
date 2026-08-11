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
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/contextMenu/contextMenu";
import { contextMenuCode } from "@/components/ui/contextMenu/contextMenu.code";
import { Separator } from "@/components/ui/separator/separator";

function TargetWrapperDemo() {
  const targetRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="w-full space-y-4">
      <div
        ref={targetRef}
        className="p-6 rounded-2xl border border-sky-200 dark:border-sky-900/40 bg-sky-50/50 dark:bg-sky-950/20 text-center select-none cursor-pointer"
      >
        <p className="text-sm font-semibold text-sky-900 dark:text-sky-200">
          Target Element Attached via Ref
        </p>
        <p className="text-xs text-sky-600 dark:text-sky-400 mt-1">
          Right click anywhere on this custom card box
        </p>
      </div>

      <ContextMenu>
        <ContextMenuTrigger target={targetRef} />
        <ContextMenuContent>
          <ContextMenuItem>
            <Icon icon="hugeicons:copy-01" className="size-4 mr-2" />
            <span>Copy Target Content</span>
            <ContextMenuShortcut>Ctrl + C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Icon icon="hugeicons:share-01" className="size-4 mr-2" />
            <span>Share Element</span>
            <ContextMenuShortcut>Ctrl + S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem color="danger">
            <Icon icon="hugeicons:delete-02" className="size-4 mr-2" />
            <span>Remove Target</span>
            <ContextMenuShortcut>Shift + Del</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}

export default function ContextMenuComponentPage() {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [showFullUrls, setShowFullUrls] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Context Menu"
        description="Displays an interactive context menu popup upon right-click or tap-and-hold interaction, supporting target element binding, nested submenus with smooth hover delays, keyboard shortcuts, and selectable toggles."
      />

      <ImportSnippet
        importCode={`import { ContextMenu, ContextMenuTrigger, ContextMenuContent } from "@/components/ui/contextMenu/contextMenu";`}
      />

      <InstallationBlock componentName="contextMenu" />

      <CodeBlock
        code={contextMenuCode}
        componentName="contextMenu.tsx"
        description="Core implementation of the ContextMenu component with target element wrapping and nested submenu primitives."
        tags={["React", "Radix UI", "Tailwind", "Overlays", "ContextMenu"]}
      />

      <DocsComponent
        title="Custom Target Element Binding (ContextMenuTrigger target={...})"
        description="Bind the right-click context menu trigger to any standalone DOM element or ref using the 'target' prop on ContextMenuTrigger."
        preview={<TargetWrapperDemo />}
        code={`const targetRef = React.useRef<HTMLDivElement>(null);

<div ref={targetRef} className="p-6 rounded-2xl border bg-sky-50">
  Right click anywhere on this custom card box
</div>

<ContextMenu>
  <ContextMenuTrigger target={targetRef} />
  <ContextMenuContent>
    <ContextMenuItem>
      <span>Copy Target Content</span>
      <ContextMenuShortcut>Ctrl + C</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        props={["target: HTMLElement | RefObject<HTMLElement> | string"]}
      />

      <DocsComponent
        title="Submenu Nesting with Smooth Hover Delay"
        description="Hierarchical submenu nesting with smooth delay transitions. Hover over items with sub-options to expand them."
        preview={
          <div className="w-full">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-xs font-semibold text-zinc-500 dark:text-zinc-400 select-none">
                Right click for nested submenus
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>
                  <Icon icon="hugeicons:file-01" className="size-4 mr-2" />
                  <span>New File</span>
                  <ContextMenuShortcut>Ctrl + N</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Icon icon="hugeicons:folder-01" className="size-4 mr-2" />
                    <span>Open Recent</span>
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>Project Alpha</ContextMenuItem>
                    <ContextMenuItem>ZoeUI Core</ContextMenuItem>
                    <ContextMenuSub>
                      <ContextMenuSubTrigger>
                        More Projects
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent>
                        <ContextMenuItem>Acme Dashboard</ContextMenuItem>
                        <ContextMenuItem>Bloom Design System</ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Icon icon="hugeicons:developer" className="size-4 mr-2" />
                    <span>Developer Tools</span>
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>
                      <span>Inspect Element</span>
                      <ContextMenuShortcut>
                        Ctrl + Shift + I
                      </ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>View Source</ContextMenuItem>
                    <ContextMenuItem>Console Logs</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        }
        code={`<ContextMenu>
  <ContextMenuTrigger className="border-dashed p-8">Right click for submenus</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuSub>
      <ContextMenuSubTrigger>Open Recent</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Project Alpha</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}
      />

      <DocsComponent
        title="Shortcut Key Hints Display Column"
        description="Render aligned keyboard shortcut hints on the right side of menu items using ContextMenuShortcut."
        preview={
          <div className="w-full">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-xs font-semibold text-zinc-500 dark:text-zinc-400 select-none">
                Right click to see keyboard shortcuts
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>
                  <span>Cut</span>
                  <ContextMenuShortcut>Ctrl + X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <span>Copy</span>
                  <ContextMenuShortcut>Ctrl + C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <span>Paste</span>
                  <ContextMenuShortcut>Ctrl + V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem color="danger">
                  <span>Delete Permanently</span>
                  <ContextMenuShortcut>Shift + Del</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        }
        code={`<ContextMenuItem>
  <span>Copy</span>
  <ContextMenuShortcut>Ctrl + C</ContextMenuShortcut>
</ContextMenuItem>
<ContextMenuItem color="danger">
  <span>Delete Permanently</span>
  <ContextMenuShortcut>Shift + Del</ContextMenuShortcut>
</ContextMenuItem>`}
      />

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
                  <ContextMenuRadioItem value="pedro">
                    Pedro Duarte
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">
                    Colm Tuite
                  </ContextMenuRadioItem>
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

      <DocsComponent
        title="Sub-components — ContextMenu"
        description="Available primitives for building right-click context menus."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Component
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    ContextMenu
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Main root wrapper component with modal=false scroll locking
                    fix.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    ContextMenuTrigger
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Target element area receiving right clicks.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    ContextMenuContent
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Floating popover content panel holding context menu items.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    ContextMenuItem
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Selectable context action option item with optional
                    color="danger".
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    ContextMenuCheckboxItem
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Checkbox item supporting boolean toggle states.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    ContextMenuRadioGroup / RadioItem
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Single-selection radio group within context menu.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    ContextMenuSub / SubTrigger / SubContent
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Nested sub-level popup menu primitives.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    ContextMenuShortcut
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Keyboard shortcut hint badge rendered on the right.
                  </td>
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
