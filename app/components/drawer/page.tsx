import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Drawer",
  description: "Touch-friendly bottom sheet drawer component built on Vaul primitive.",
};

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer/drawer";
import { Button } from "@/components/ui/button/button";
import { drawerCode } from "@/components/ui/drawer/drawer.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function DrawerComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Drawer"
        description="A touch-focused bottom sheet panel for mobile-first views with drag gesture support."
      />

      <Tabs defaultValue="drawer">
        <TabsList background={false}>
          <TabsTrigger
            value="drawer"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            drawer.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="drawer">
          <CodeBlock
            code={drawerCode}
            componentName="drawer.tsx"
            description="Core implementation of the Drawer component."
            tags={["React", "Vaul", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Bottom sheet drawer."
        preview={
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="bordered">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Mobile Action Menu</DrawerTitle>
                <DrawerDescription>
                  Swipe down or click close to dismiss this drawer.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="flat">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        }
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — Drawer"
        description="Available primitives for building bottom drawers."
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
                  <td className="px-3 py-2 font-mono text-primary">Drawer</td>
                  <td className="px-3 py-2 text-muted-foreground">Root drawer wrapper.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">DrawerContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Sliding sheet panel positioned at screen bottom.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
