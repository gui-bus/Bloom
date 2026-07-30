"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Button } from "@/components/ui/button/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdownMenu/dropdownMenu";
import { dropdownMenuCode } from "@/components/ui/dropdownMenu/dropdownMenu.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function DropdownMenuDocsPage() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Dropdown Menu"
        description="A contextual popover menu presenting a list of actions or shortcuts, powered by Radix UI primitives with zero layout shift."
      />

      <InstallationBlock componentName="dropdownMenu" />

      <Tabs defaultValue="dropdownMenu">
        <TabsList background={false}>
          <TabsTrigger
            value="dropdownMenu"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            dropdownMenu.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dropdownMenu">
          <CodeBlock
            code={dropdownMenuCode}
            componentName="dropdownMenu.tsx"
            description="Dropdown menu component built on Radix Primitives supporting submenus, keyboard shortcuts, and checkbox/radio items."
            tags={["React", "Radix UI", "Tailwind", "UI Component", "Menu"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A standard dropdown menu triggered by a button with menu labels, items, keyboard shortcuts, and dividers."
        preview={
          <div className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="bordered" endContent={<Icon icon="hugeicons:arrow-down-01" className="size-4" />}>
                  My Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Icon icon="hugeicons:user-circle" className="mr-2 size-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon icon="hugeicons:credit-card" className="mr-2 size-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon icon="hugeicons:settings-01" className="mr-2 size-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem color="danger">
                  <Icon icon="hugeicons:logout-01" className="mr-2 size-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        }
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="bordered">My Account</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <span>Profile</span>
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Settings</span>
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem color="danger">
      <span>Log out</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      />

      {/* Checkboxes & Radio Items */}
      <DocsComponent
        title="Checkboxes & Radio Items"
        description="Supports toggleable checkbox items and single-selection radio groups inside the popover."
        preview={
          <div className="w-full flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="bordered">View Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showActivityBar}
                  onCheckedChange={setShowActivityBar}
                >
                  Activity Bar
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="bordered">Panel Position</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Location</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        }
        code={`{/* Checkboxes */}
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="bordered">View Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
      Status Bar
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      />

      {/* Nested Submenus */}
      <DocsComponent
        title="Nested Submenus"
        description="Nest submenus recursively using 'DropdownMenuSub', 'DropdownMenuSubTrigger', and 'DropdownMenuSubContent'."
        preview={
          <div className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="bordered">Actions & Share</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Icon icon="hugeicons:folder-01" className="mr-2 size-4" />
                  <span>New Folder</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Icon icon="hugeicons:share-01" className="mr-2 size-4" />
                    <span>Invite users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-48">
                    <DropdownMenuItem>Email link</DropdownMenuItem>
                    <DropdownMenuItem>Slack workspace</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Copy link</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        }
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="bordered">Actions & Share</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <span>Invite users</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent className="w-48">
        <DropdownMenuItem>Email link</DropdownMenuItem>
        <DropdownMenuItem>Slack workspace</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props DropdownMenu Table */}
      <DocsComponent
        title="Props — DropdownMenu"
        description="Sub-components for composing accessible Dropdown Menu overlays."
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
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenu</td>
                  <td className="px-3 py-2 text-muted-foreground">Root container managing menu state (defaults to modal=false).</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuTrigger</td>
                  <td className="px-3 py-2 text-muted-foreground">The button or element that toggles the menu open/closed.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Floating popover container containing menu items.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Interactive menu item with optional color="danger" support.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuCheckboxItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Menu item supporting checkable boolean state.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuRadioItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Menu item for single choice radio selection.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuSeparator</td>
                  <td className="px-3 py-2 text-muted-foreground">Horizontal line separating groups of items.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuShortcut</td>
                  <td className="px-3 py-2 text-muted-foreground">Right-aligned keyboard hotkey indicator text.</td>
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
