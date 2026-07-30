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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
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
  const [showGrid, setShowGrid] = React.useState(true);
  const [showRuler, setShowRuler] = React.useState(false);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Menubar"
        description="A desktop-style horizontal top navigation bar menu with keyboard shortcuts, checkboxes, and submenus."
      />

      <ImportSnippet importCode={`import { Menubar } from "@/components/ui/menubar/menubar";`} />

      <InstallationBlock componentName="menubar" />

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
            tags={["React", "Radix UI", "Menubar", "Navigation"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Desktop menu bar featuring File, Edit, View, and Help dropdowns."
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
                <MenubarItem>
                  Share Project...
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Print <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
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
                <MenubarSeparator />
                <MenubarItem>
                  Cut <MenubarShortcut>⌘X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Copy <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Paste <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
                  Show Layout Grid
                </MenubarCheckboxItem>
                <MenubarCheckboxItem checked={showRuler} onCheckedChange={setShowRuler}>
                  Show Ruler Bounds
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem>Toggle Full Screen</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        }
        code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — Menubar Primitives"
        description="Supported properties for Menubar subcomponents."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">MenubarContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">align</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'start' | 'center' | 'end'</td>
                  <td className="px-3 py-2 text-muted-foreground">Alignment relative to trigger button.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">MenubarItem</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">inset</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">Adds left padding alignment offset.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">MenubarCheckboxItem</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">checked</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">Checked state of toggle item with checkmark icon.</td>
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
