import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Alert Dialog",
  description: "Modal dialog for critical actions requiring user confirmation built on Radix UI.",
};

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alertDialog/alertDialog";
import { Button } from "@/components/ui/button/button";
import { alertDialogCode } from "@/components/ui/alertDialog/alertDialog.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function AlertDialogComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Alert Dialog"
        description="A confirmation dialog that interrupts the user with important content and requires an explicit response before proceeding."
      />

      <Tabs defaultValue="alertDialog">
        <TabsList background={false}>
          <TabsTrigger
            value="alertDialog"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            alertDialog.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alertDialog">
          <CodeBlock
            code={alertDialogCode}
            componentName="alertDialog.tsx"
            description="Core implementation of the AlertDialog component."
            tags={["React", "Radix UI", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Confirmation modal for destructive actions."
        preview={
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button color="danger">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete Account</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        }
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button color="danger">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete Account</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — AlertDialog"
        description="Available primitives for building confirmation dialogs."
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
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogAction</td>
                  <td className="px-3 py-2 text-muted-foreground">Primary action button for confirming critical operation.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogCancel</td>
                  <td className="px-3 py-2 text-muted-foreground">Cancel button to dismiss dialog without executing action.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
