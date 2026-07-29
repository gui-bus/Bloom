import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Sheet",
  description: "Side drawer overlay panel component built on Radix UI Dialog primitive.",
};

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet/sheet";
import { Button } from "@/components/ui/button/button";
import { sheetCode } from "@/components/ui/sheet/sheet.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function SheetComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Sheet"
        description="Extends the Dialog component to display content that complements the main view, sliding out from the screen edge."
      />

      <Tabs defaultValue="sheet">
        <TabsList background={false}>
          <TabsTrigger
            value="sheet"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            sheet.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sheet">
          <CodeBlock
            code={sheetCode}
            componentName="sheet.tsx"
            description="Core implementation of the Sheet component."
            tags={["React", "Radix UI", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Slide-out drawer panels."
        preview={
          <div className="flex flex-wrap gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="bordered">Open Right Sheet</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Explore links and options.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="bordered">Open Left Sheet</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filter Options</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        }
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — SheetContent"
        description="Properties to configure the SheetContent component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">side</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'top' | 'bottom' | 'left' | 'right'</td>
                  <td className="px-3 py-2 text-muted-foreground">'right'</td>
                  <td className="px-3 py-2 text-muted-foreground">Screen edge direction from which the sheet slides out.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
