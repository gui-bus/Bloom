import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Dialog",
  description: "Accessible modal dialog window built on Radix UI Dialog primitive.",
};

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
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Dialog"
        description="A modal window component overlaid on the primary view with backdrop blurring and keyboard accessibility."
      />

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
            description="Core implementation of the Dialog component."
            tags={["React", "Radix UI", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Modal dialog trigger and dialog content."
        preview={
          <Dialog>
            <DialogTrigger asChild>
              <Button>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="flat">Cancel</Button>
                </DialogClose>
                <Button>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — Dialog"
        description="Available primitives for building dialog modals."
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
                  <td className="px-3 py-2 font-mono text-primary">Dialog</td>
                  <td className="px-3 py-2 text-muted-foreground">Root modal wrapper.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">DialogTrigger</td>
                  <td className="px-3 py-2 text-muted-foreground">Button that opens the modal.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">DialogContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Floating dialog window content.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
