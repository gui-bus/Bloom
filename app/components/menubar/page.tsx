import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Menubar",
  description: "Desktop application style top menubar component with submenus and keyboard shortcuts.",
};

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar/menubar";
import { menubarCode } from "@/components/ui/menubar/menubar.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function MenubarComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Menubar"
        description="A desktop application menu bar providing horizontal menus with submenus and keyboard shortcut indicators."
      />

      <Tabs defaultValue="menubar">
        <TabsList background={false}>
          <TabsTrigger
            value="menubar"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            menubar.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="menubar">
          <CodeBlock
            code={menubarCode}
            componentName="menubar.tsx"
            description="Core implementation of the Menubar component."
            tags={["React", "Radix UI", "Tailwind", "Navigation"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="File & Edit desktop menu bar."
        preview={
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        }
        code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — Menubar"
        description="Available primitives for building menubars."
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
                  <td className="px-3 py-2 font-mono text-primary">Menubar</td>
                  <td className="px-3 py-2 text-muted-foreground">Root container bar.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">MenubarTrigger</td>
                  <td className="px-3 py-2 text-muted-foreground">Top level menu button.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">MenubarItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Action item inside menu content.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
