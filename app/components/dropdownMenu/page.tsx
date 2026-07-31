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
  DropdownMenuArrow,
  DropdownMenuSearchInput,
} from "@/components/ui/dropdownMenu/dropdownMenu";
import { dropdownMenuCode } from "@/components/ui/dropdownMenu/dropdownMenu.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

function SearchFilterMenuDemo() {
  const [search, setSearch] = React.useState("");
  const countries = [
    "Argentina", "Australia", "Brazil", "Canada", "Denmark",
    "Egypt", "France", "Germany", "India", "Japan",
    "Mexico", "Netherlands", "Portugal", "Spain", "United States"
  ];

  const filtered = countries.filter((c) => c.toLowerCase().includes(search.toLowerCase()));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="bordered" startContent={<Icon icon="hugeicons:globe-02" className="size-4" />}>
          Select Country (Filtered Menu)
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" showArrow>
        <DropdownMenuSearchInput
          placeholder="Filter countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="max-h-48 overflow-y-auto space-y-0.5">
          {filtered.length === 0 ? (
            <p className="px-3 py-2 text-xs text-zinc-400 text-center">No countries match</p>
          ) : (
            filtered.map((country) => (
              <DropdownMenuItem key={country}>
                <span>{country}</span>
              </DropdownMenuItem>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function DropdownMenuDocsPage() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Dropdown Menu"
        description="A contextual popover menu presenting a list of actions or shortcuts, featuring radio item groups, checkable item groups, search input filters, custom arrow pointers, and submenus."
      />

      <ImportSnippet importCode={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdownMenu/dropdownMenu";`} />

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
            description="Dropdown menu component supporting search input filters, arrow pointers, radio/checkbox groups, and submenus."
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
        title="Checkboxes & Radio Item Groups"
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

      {/* Search Input Filter & Arrow Pointer */}
      <DocsComponent
        title="Search Filter Input & Custom Arrow Pointer"
        description="Pass 'showArrow' on DropdownMenuContent to render a pointing arrow stem, and use 'DropdownMenuSearchInput' to filter long list items dynamically."
        preview={
          <div className="w-full">
            <SearchFilterMenuDemo />
          </div>
        }
        code={`const [search, setSearch] = React.useState("");

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="bordered">Select Country</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent showArrow className="w-56">
    <DropdownMenuSearchInput
      placeholder="Filter countries..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <div className="max-h-48 overflow-y-auto">
      {filtered.map((country) => (
        <DropdownMenuItem key={country}>{country}</DropdownMenuItem>
      ))}
    </div>
  </DropdownMenuContent>
</DropdownMenu>`}
        props={["showArrow: boolean", "DropdownMenuSearchInput"]}
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
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuContent showArrow</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders a directional pointing arrow stem pointing back to trigger element.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuSearchInput</td>
                  <td className="px-3 py-2 text-muted-foreground">Header input field for filtering items inside long dropdown menus.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuCheckboxItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Menu item supporting checkable boolean state.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuRadioGroup / RadioItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Group and item primitives for single choice radio selection.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuSub / SubTrigger / SubContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Primitives for constructing recursive nested submenus.</td>
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
