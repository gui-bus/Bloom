"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet/sheet";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
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
    <div className="space-y-8">
      <DocsTitle
        title="Sheet"
        description="Extends modal dialogs with side drawer panels (left, right, top, bottom) featuring customizable backdrop overlays matching Drawer."
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
            tags={["React", "Radix UI", "Sheet", "Drawer", "Overlay"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard side drawer panel sliding from the right."
        preview={
          <Sheet>
            <SheetTrigger asChild>
              <Button color="primary">Open Side Sheet</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Edit User Profile</SheetTitle>
                <SheetDescription>
                  Update workspace member credentials and notification preferences.
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 py-4 flex-1">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Guilherme Bus" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@gui_bus" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="bordered">Cancel</Button>
                </SheetClose>
                <Button color="primary">Save Changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        }
        code={`<Sheet>
  <SheetTrigger asChild><Button color="primary">Open Side Sheet</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>Update profile settings.</SheetDescription>
    </SheetHeader>
    <Input defaultValue="Guilherme Bus" />
    <SheetFooter>
      <Button color="primary">Save Changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      />

      {/* Side Positions (Left, Right, Top, Bottom) */}
      <DocsComponent
        title="Side Positions (Left, Right, Top, Bottom)"
        description="Change panel slide entry direction using the 'side' prop."
        preview={
          <div className="flex flex-wrap gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="bordered">Left Drawer</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>Left drawer panel for sidebar links.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="bordered">Top Banner</Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Announcement Banner</SheetTitle>
                  <SheetDescription>Top drawer panel for urgent notifications.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="bordered">Bottom Drawer</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Mobile Actions Sheet</SheetTitle>
                  <SheetDescription>Bottom sheet layout for touch devices.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        }
        code={`<SheetContent side="left">...</SheetContent>
<SheetContent side="top">...</SheetContent>
<SheetContent side="bottom">...</SheetContent>`}
        props={["side: 'top' | 'bottom' | 'left' | 'right'"]}
      />

      {/* Backdrop Overlays (Blur, Dark 80%, Light) */}
      <DocsComponent
        title="Backdrop Overlays (Blur, Dark, Light)"
        description="Custom backdrop overlay variants matching Drawer exactly: 'blur', 'dark' (80%), 'light', 'transparent', and 'none'."
        preview={
          <div className="flex flex-wrap gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="flat">Blur Backdrop</Button>
              </SheetTrigger>
              <SheetContent backdrop="blur">
                <SheetHeader>
                  <SheetTitle>Blur Backdrop</SheetTitle>
                  <SheetDescription>Frosted glass backdrop effect.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="flat">Dark Backdrop (80%)</Button>
              </SheetTrigger>
              <SheetContent backdrop="dark">
                <SheetHeader>
                  <SheetTitle>Dark Backdrop (80%)</SheetTitle>
                  <SheetDescription>80% opacity dark backdrop.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="flat">Light Backdrop</Button>
              </SheetTrigger>
              <SheetContent backdrop="light">
                <SheetHeader>
                  <SheetTitle>Light Backdrop</SheetTitle>
                  <SheetDescription>Subtle light backdrop effect.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        }
        code={`<SheetContent backdrop="blur">...</SheetContent>
<SheetContent backdrop="dark">...</SheetContent>
<SheetContent backdrop="light">...</SheetContent>`}
        props={["backdrop: 'blur' | 'dark' | 'light' | 'transparent' | 'none'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props — SheetContent"
        description="Supported properties for SheetContent."
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
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'top' | 'bottom' | 'left' | 'right'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'right'</td>
                  <td className="px-3 py-2 text-muted-foreground">Slide entry direction for the sheet panel.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">backdrop</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'blur' | 'dark' | 'light' | 'transparent' | 'none'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'blur'</td>
                  <td className="px-3 py-2 text-muted-foreground">Backdrop overlay style (same as Drawer).</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">showCloseButton</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">true</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders top-right close icon button.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
