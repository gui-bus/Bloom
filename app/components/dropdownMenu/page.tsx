import type { Metadata } from "next";
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
} from "@/components/ui/dropdownMenu/dropdownMenu";
import { dropdownMenuCode } from "@/components/ui/dropdownMenu/dropdownMenu.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export const metadata: Metadata = {
  title: "Dropdown Menu",
  description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
};

export default function DropdownMenuDocsPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Dropdown Menu"
        description="A contextual popover menu presenting a list of actions or shortcuts, powered by Radix UI."
      />

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

      {/* Basic Menu */}
      <DocsComponent
        title="Basic Usage"
        description="Standard dropdown menu triggered by a button with shortcuts and separators."
        preview={
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
              <DropdownMenuItem className="text-danger focus:text-danger focus:bg-danger/10">
                <Icon icon="hugeicons:logout-01" className="mr-2 size-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
    <DropdownMenuItem className="text-danger">
      <span>Log out</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

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
                  <td className="px-3 py-2 text-muted-foreground">Root component managing menu open state.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuTrigger</td>
                  <td className="px-3 py-2 text-muted-foreground">The button or element that toggles the menu.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Floating popover container containing menu items.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DropdownMenuItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Interactive menu item element.</td>
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
    </main>
  );
}
