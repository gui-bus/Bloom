"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
    <div className="space-y-8">
      <DocsTitle
        title="Alert Dialog"
        description="A confirmation dialog modal that interrupts the user with critical content requiring an explicit response before proceeding."
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
            description="Core implementation of the AlertDialog component featuring accessible Radix UI primitives and neutral theme colors."
            tags={["React", "Radix UI", "Tailwind", "Overlays", "Dialog"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage (Destructive)"
        description="Modal confirmation dialog for destructive actions. Uses clean neutral card styling and a clear action button."
        preview={
          <div className="w-full">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button color="danger">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and erase all stored workspace data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction color="danger">Delete Account</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        }
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button color="danger">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction color="danger">Delete Account</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      />

      {/* Action Button Colors */}
      <DocsComponent
        title="Action Colors (Primary, Success & Warning)"
        description="Customize the confirm action button using the 'color' prop on AlertDialogAction ('danger', 'primary', 'warning', 'success', 'default')."
        preview={
          <div className="w-full flex flex-wrap gap-4">
            {/* Primary Action */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button color="primary">Publish Release</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Publish Version v2.4.0?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This release will immediately become live for all production users across 12 region deployment clusters.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction color="primary">Confirm & Publish</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Warning Action */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button color="warning">Deactivate API Key</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Deactivate Production API Key?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Any active applications using this API key will lose access immediately until a new key is issued.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction color="warning">Deactivate Key</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        }
        code={`{/* Primary Action */}
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button color="primary">Publish Release</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Publish Version v2.4.0?</AlertDialogTitle>
      <AlertDialogDescription>
        This release will immediately become live for production users.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction color="primary">Confirm & Publish</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Sub-components Reference */}
      <DocsComponent
        title="Subcomponents — AlertDialog"
        description="Primitives available for building accessible confirmation dialogs."
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
                  <td className="px-3 py-2 font-mono text-primary">AlertDialog</td>
                  <td className="px-3 py-2 text-muted-foreground">Root container component managing open state.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogTrigger</td>
                  <td className="px-3 py-2 text-muted-foreground">Button or element that opens the dialog modal.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogContent</td>
                  <td className="px-3 py-2 text-muted-foreground">Modal overlay card container formatted with clean dark/light neutral colors.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogHeader</td>
                  <td className="px-3 py-2 text-muted-foreground">Header container wrapping the dialog title and description.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogTitle</td>
                  <td className="px-3 py-2 text-muted-foreground">Accessible heading title for the confirmation dialog.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogDescription</td>
                  <td className="px-3 py-2 text-muted-foreground">Body text explaining the consequences of the confirmation action.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogFooter</td>
                  <td className="px-3 py-2 text-muted-foreground">Footer layout container aligning action buttons.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogAction</td>
                  <td className="px-3 py-2 text-muted-foreground">Primary action button executing the operation. Supports 'color' prop.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">AlertDialogCancel</td>
                  <td className="px-3 py-2 text-muted-foreground">Cancel button closing the dialog with neutral hover background.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      {/* Props AlertDialogAction Table */}
      <DocsComponent
        title="Props — AlertDialogAction"
        description="Properties for customizing the confirmation action button."
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
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'danger' | 'primary' | 'warning' | 'success' | 'default'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'danger'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Semantic color theme for the confirmation action button.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
}
