"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigationMenu/navigationMenu";
import { navigationMenuCode } from "@/components/ui/navigationMenu/navigationMenu.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function NavigationMenuComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Navigation Menu"
        description="A collection of navigation links and dropdown content cards for site headers built on Radix UI Navigation Menu."
      />

      <Tabs defaultValue="navigationMenu">
        <TabsList background={false}>
          <TabsTrigger
            value="navigationMenu"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            navigationMenu.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="navigationMenu">
          <CodeBlock
            code={navigationMenuCode}
            componentName="navigationMenu.tsx"
            description="Core implementation of the NavigationMenu component."
            tags={["React", "Radix UI", "NavigationMenu", "Header"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Site header navigation menu with dropdown panels."
        preview={
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-sky-500/10 to-sky-500/20 p-6 no-underline outline-none border border-sky-500/20"
                          href="#"
                        >
                          <Icon icon="hugeicons:layers-01" className="size-6 text-sky-500 mb-2" />
                          <div className="mb-1 text-sm font-bold text-foreground">Zoe UI Library</div>
                          <p className="text-xs text-muted-foreground">
                            Beautifully designed neutral components built with Tailwind CSS & Radix UI.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <a href="#" className="block space-y-1 rounded-xl p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        <div className="text-xs font-semibold">Introduction</div>
                        <p className="text-[11px] text-muted-foreground">Re-usable component architecture & rules.</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block space-y-1 rounded-xl p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        <div className="text-xs font-semibold">Installation</div>
                        <p className="text-[11px] text-muted-foreground">How to install dependencies and configure theme.</p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <a href="#" className="block space-y-1 rounded-xl p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        <div className="text-xs font-semibold">Buttons & Badges</div>
                        <p className="text-[11px] text-muted-foreground">Interactive action triggers.</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block space-y-1 rounded-xl p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        <div className="text-xs font-semibold">Dialogs & Drawers</div>
                        <p className="text-[11px] text-muted-foreground">Modal overlay components.</p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        }
        code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px]">
          <li><a href="#">Introduction</a></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — NavigationMenu Primitives"
        description="Supported properties for NavigationMenu components."
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
                  <td className="px-3 py-2 font-mono text-primary">NavigationMenuTrigger</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">asChild</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">Merges trigger behavior onto child element.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">NavigationMenuLink</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">active</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">Highlights link when active route matches.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
