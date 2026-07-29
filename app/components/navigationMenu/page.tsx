import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Navigation Menu",
  description: "Complex responsive navigation menu component with submenus and animated viewports.",
};

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
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
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Navigation Menu"
        description="A component for building rich top-level navigation bars with dropdown submenus and animated transitions."
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
            tags={["React", "Radix UI", "Tailwind", "Navigation"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Navigation menu with interactive dropdowns."
        preview={
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[300px]">
                    <NavigationMenuLink href="/components/button" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent">
                      <div className="text-sm font-medium leading-none">Button</div>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        Interactive button component with variants.
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        }
        code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 w-[300px]">
          <NavigationMenuLink href="/components/button">
            <div className="text-sm font-medium">Button</div>
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — NavigationMenu"
        description="Available primitives for building navigation menus."
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
                  <td className="px-3 py-2 font-mono text-primary">NavigationMenu</td>
                  <td className="px-3 py-2 text-muted-foreground">Root container managing state and viewport.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">NavigationMenuList</td>
                  <td className="px-3 py-2 text-muted-foreground">Top level list item wrapper.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">NavigationMenuTrigger</td>
                  <td className="px-3 py-2 text-muted-foreground">Trigger button that opens the menu dropdown.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
