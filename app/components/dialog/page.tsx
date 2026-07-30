"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog/dialog";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { dialogCode } from "@/components/ui/dialog/dialog.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function DialogComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Dialog"
        description="A modal window component overlaid on the primary view with customizable backdrop blur/dark overlays, size options, keyboard accessibility, and zero layout shift."
      />

      <InstallationBlock componentName="dialog" />

      <Tabs defaultValue="dialog">
        <TabsList background={false}>
          <TabsTrigger
            value="dialog"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            dialog.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dialog">
          <CodeBlock
            code={dialogCode}
            componentName="dialog.tsx"
            description="Core implementation of the Dialog component with overlay variants and size scales."
            tags={["React", "Radix UI", "Tailwind", "Overlays", "Dialog"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard modal dialog window with header, description, and footer action buttons."
        preview={
          <div className="w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Edit Profile</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile details here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-2">
                  <Input label="Name" defaultValue="Guilherme Bus" />
                  <Input label="Username" defaultValue="@guilherme" />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="flat">Cancel</Button>
                  </DialogClose>
                  <Button color="primary">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        }
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile details here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-2">
      <Input label="Name" defaultValue="Guilherme Bus" />
      <Input label="Username" defaultValue="@guilherme" />
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="flat">Cancel</Button>
      </DialogClose>
      <Button color="primary">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      />

      {/* Overlay Styles */}
      <DocsComponent
        title="Overlay Styles"
        description="Customize the backdrop overlay style using the 'overlay' prop: 'blur', 'dark', 'light', 'transparent', or 'none'."
        preview={
          <div className="flex flex-wrap gap-3 w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="bordered">Blur Overlay</Button>
              </DialogTrigger>
              <DialogContent overlay="blur">
                <DialogHeader>
                  <DialogTitle>Blur Backdrop</DialogTitle>
                  <DialogDescription>Backdrop blur with subtle dark tinting.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild><Button variant="flat">Close</Button></DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="bordered">Dark Overlay</Button>
              </DialogTrigger>
              <DialogContent overlay="dark">
                <DialogHeader>
                  <DialogTitle>Solid Dark Backdrop</DialogTitle>
                  <DialogDescription>High contrast 80% opacity dark backdrop.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild><Button variant="flat">Close</Button></DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="bordered">Light Overlay</Button>
              </DialogTrigger>
              <DialogContent overlay="light">
                <DialogHeader>
                  <DialogTitle>Light Backdrop</DialogTitle>
                  <DialogDescription>Soft 20% opacity light backdrop.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild><Button variant="flat">Close</Button></DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        }
        code={`<DialogContent overlay="blur">...</DialogContent>
<DialogContent overlay="dark">...</DialogContent>
<DialogContent overlay="light">...</DialogContent>`}
        props={["overlay: 'blur' | 'dark' | 'light' | 'transparent' | 'none'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Dialog Sizes"
        description="Adjust the dialog window width scale using the 'size' prop: 'sm', 'md', 'lg', 'xl', or 'full'."
        preview={
          <div className="flex flex-wrap gap-3 w-full">
            <Dialog>
              <DialogTrigger asChild><Button size="sm" variant="flat">Small (sm)</Button></DialogTrigger>
              <DialogContent size="sm">
                <DialogHeader>
                  <DialogTitle>Small Modal</DialogTitle>
                  <DialogDescription>Compact modal for quick notifications.</DialogDescription>
                </DialogHeader>
                <DialogFooter><DialogClose asChild><Button size="sm">Done</Button></DialogClose></DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild><Button size="sm" variant="flat">Medium (md)</Button></DialogTrigger>
              <DialogContent size="md">
                <DialogHeader>
                  <DialogTitle>Medium Modal</DialogTitle>
                  <DialogDescription>Standard modal width container.</DialogDescription>
                </DialogHeader>
                <DialogFooter><DialogClose asChild><Button size="sm">Done</Button></DialogClose></DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild><Button size="sm" variant="flat">Large (lg)</Button></DialogTrigger>
              <DialogContent size="lg">
                <DialogHeader>
                  <DialogTitle>Large Modal</DialogTitle>
                  <DialogDescription>Expanded modal width for forms and tables.</DialogDescription>
                </DialogHeader>
                <DialogFooter><DialogClose asChild><Button size="sm">Done</Button></DialogClose></DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild><Button size="sm" variant="flat">Extra Large (xl)</Button></DialogTrigger>
              <DialogContent size="xl">
                <DialogHeader>
                  <DialogTitle>Extra Large Modal</DialogTitle>
                  <DialogDescription>Wide layout container for complex dashboards and rich content.</DialogDescription>
                </DialogHeader>
                <DialogFooter><DialogClose asChild><Button size="sm">Done</Button></DialogClose></DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        }
        code={`<DialogContent size="sm">...</DialogContent>
<DialogContent size="md">...</DialogContent>
<DialogContent size="lg">...</DialogContent>
<DialogContent size="xl">...</DialogContent>`}
        props={["size: 'sm' | 'md' | 'lg' | 'xl' | 'full'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Sub-components Table */}
      <DocsComponent
        title="Props — DialogContent"
        description="Properties to configure the DialogContent window primitive."
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
                  <td className="px-3 py-2 font-mono text-primary">overlay</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'blur' | 'dark' | 'light' | 'transparent' | 'none'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'blur'</td>
                  <td className="px-3 py-2 text-muted-foreground">Backdrop overlay style variant.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg' | 'xl' | 'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">Dialog container width scale.</td>
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
