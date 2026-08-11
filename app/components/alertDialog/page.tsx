"use client";

import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alertDialog/alertDialog";
import { alertDialogCode } from "@/components/ui/alertDialog/alertDialog.code";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { Separator } from "@/components/ui/separator/separator";

export default function AlertDialogComponentPage() {
  const [confirmInput, setConfirmInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAsyncAction = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Alert Dialog"
        description="A confirmation dialog modal that interrupts the user with critical content requiring an explicit response, text validation verification, or async operation loading states before proceeding."
      />

      <ImportSnippet
        importCode={`import { AlertDialog } from "@/components/ui/alertDialog/alertDialog";`}
      />

      <InstallationBlock componentName="alertDialog" />

      <CodeBlock
        code={alertDialogCode}
        componentName="alertDialog.tsx"
        description="Core implementation of the AlertDialog component featuring accessible Radix UI primitives and neutral theme colors."
        tags={["React", "Radix UI", "Tailwind", "Overlays", "Dialog"]}
      />

      <DocsComponent
        title="Default"
        description="A standard confirmation dialog modal that interrupts the user with critical content requiring an explicit response before proceeding."
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
                    This action cannot be undone. This will permanently delete
                    your account and erase all stored workspace data from our
                    servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction color="danger">
                    Delete Account
                  </AlertDialogAction>
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

      <DocsComponent
        title="Text Validation Confirmation"
        description="Require the user to type an exact confirmation string (e.g. 'DELETE') to unlock the action button."
        preview={
          <div className="w-full">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button color="danger">Delete Production Database</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Critical Destruction Warning
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Please type{" "}
                    <strong className="text-rose-500 font-mono">DELETE</strong>{" "}
                    in the box below to confirm permanent destruction.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="my-2">
                  <Input
                    placeholder="Type DELETE to confirm"
                    value={confirmInput}
                    onChange={(e) => setConfirmInput(e.target.value)}
                  />
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setConfirmInput("")}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    color="danger"
                    disabled={confirmInput !== "DELETE"}
                  >
                    Permanently Destroy
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        }
        code={`const [confirmInput, setConfirmInput] = useState("");

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button color="danger">Delete Production Database</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Critical Destruction Warning</AlertDialogTitle>
      <AlertDialogDescription>
        Type DELETE to confirm.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <Input
      placeholder="Type DELETE to confirm"
      value={confirmInput}
      onChange={(e) => setConfirmInput(e.target.value)}
    />
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction color="danger" disabled={confirmInput !== "DELETE"}>
        Permanently Destroy
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      />

      <DocsComponent
        title="Async Action Loading (isLoading)"
        description="Render a loading spinner state on the action button during asynchronous operations."
        preview={
          <div className="w-full">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button color="primary">Sync Remote Cluster</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Sync Cluster Nodes?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will sync all state data across 24 edge servers
                    worldwide.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    color="primary"
                    isLoading={isLoading}
                    onClick={handleAsyncAction}
                  >
                    Start Sync Process
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        }
        code={`const [isLoading, setIsLoading] = useState(false);

<AlertDialogAction color="primary" isLoading={isLoading} onClick={handleAsyncAction}>
  Start Sync Process
</AlertDialogAction>`}
        props={["isLoading: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — AlertDialogAction"
        description="Properties for customizing the confirmation action button."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'danger' | 'primary' | 'warning' | 'success' | 'default'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'danger'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Semantic color theme for the confirmation action button.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    isLoading
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays a loading spinner indicator and disables
                    interaction.
                  </td>
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
