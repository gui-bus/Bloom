"use client";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Toast, toast } from "@/components/ui/toast/toast";
import { Button } from "@/components/ui/button/button";
import { toastCode } from "@/components/ui/toast/toast.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ToastComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Toast"
        description="A rich glassmorphic feedback notification popover with status accent bars, glow icon badges, descriptions, interactive action buttons, and dismiss controls."
      />

      <Toast position="bottom-right" />

      <InstallationBlock componentName="toast" />

      <Tabs defaultValue="toast">
        <TabsList background={false}>
          <TabsTrigger
            value="toast"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            toast.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="toast">
          <CodeBlock
            code={toastCode}
            componentName="toast.tsx"
            description="Core implementation of the custom Toast component."
            tags={["React", "Sonner", "Toast", "Notification", "Glassmorphism"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="Standard glassmorphic notification toast with title and description."
        preview={
          <div className="flex flex-wrap gap-4">
            <Button
              color="primary"
              onClick={() => toast("New Workspace Created", { description: "Your workspace is ready for team members." })}
            >
              Show Default Toast
            </Button>
          </div>
        }
        code={`import { toast } from "@/components/ui/toast/toast";

toast("New Workspace Created", { description: "Your workspace is ready for team members." });`}
      />

      {/* Status Variants (Success, Error, Warning, Info) */}
      <DocsComponent
        title="Status Variants (Success, Error, Warning, Info)"
        description="Trigger feedback notifications with contextual status icons, side accent bars, and color themes."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="success"
              onClick={() => toast.success("Project Saved Successfully", { description: "All recent changes have been synchronized." })}
            >
              Success Toast
            </Button>
            <Button
              color="danger"
              onClick={() => toast.error("Connection Refused", { description: "Could not reach database server on port 5432." })}
            >
              Error Toast
            </Button>
            <Button
              color="warning"
              onClick={() => toast.warning("Subscription Expiring", { description: "Your trial plan expires in 3 days." })}
            >
              Warning Toast
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() => toast.info("System Update Available", { description: "Version v2.4.0 is ready to install." })}
            >
              Info Toast
            </Button>
          </div>
        }
        code={`toast.success("Project Saved Successfully", { description: "All changes synchronized." });
toast.error("Connection Refused", { description: "Could not reach database server." });
toast.warning("Subscription Expiring", { description: "Trial plan expires in 3 days." });
toast.info("System Update Available", { description: "Version v2.4.0 is ready." });`}
      />

      {/* Interactive Action Toast */}
      <DocsComponent
        title="Interactive Action Toast"
        description="Include clickable inline action callbacks inside notifications."
        preview={
          <div className="flex flex-wrap gap-4">
            <Button
              color="secondary"
              onClick={() =>
                toast.success("File Deleted", {
                  description: "Report_2026.pdf was moved to trash.",
                  action: {
                    label: "Undo Deletion",
                    onClick: () => toast.info("Action Undone", { description: "File was restored to folder." }),
                  },
                })
              }
            >
              Trigger Action Toast
            </Button>
          </div>
        }
        code={`toast.success("File Deleted", {
  description: "Report_2026.pdf was moved to trash.",
  action: {
    label: "Undo Deletion",
    onClick: () => console.log("Restored!"),
  },
});`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Table */}
      <DocsComponent
        title="Props & Methods — Toast"
        description="Supported helper functions and options for Toast."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Method / Option</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">toast.success(title, options)</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">function</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Triggers an emerald success notification with checkmark icon badge.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">toast.error(title, options)</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">function</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Triggers a rose error alert toast.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">options.description</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Contextual body text below the title.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">options.action</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">&#123; label, onClick &#125;</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Interactive action button config.</td>
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
