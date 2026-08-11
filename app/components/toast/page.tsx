"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { Separator } from "@/components/ui/separator/separator";
import { Toast, toast } from "@/components/ui/toast/toast";
import { toastCode } from "@/components/ui/toast/toast.code";

export default function ToastComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Toast"
        description="A rich glassmorphic feedback notification popover with status accent bars, glow icon badges, descriptions, interactive action buttons, and dismiss controls."
      />

      <Toast position="bottom-right" />

      <ImportSnippet
        importCode={`import { Toast } from "@/components/ui/toast/toast";`}
      />

      <InstallationBlock componentName="toast" />

      <CodeBlock
        code={toastCode}
        componentName="toast.tsx"
        description="Core implementation of the custom Toast component."
        tags={["React", "Sonner", "Toast", "Notification", "Glassmorphism"]}
      />

      <DocsComponent
        title="Default"
        description="Standard glassmorphic notification toast with title and description."
        preview={
          <div className="flex flex-wrap gap-4">
            <Button
              color="primary"
              onClick={() =>
                toast("New Workspace Created", {
                  description: "Your workspace is ready for team members.",
                })
              }
            >
              Show Default Toast
            </Button>
          </div>
        }
        code={`import { toast } from "@/components/ui/toast/toast";

toast("New Workspace Created", { description: "Your workspace is ready for team members." });`}
      />

      <DocsComponent
        title="Status Variants (Success, Error, Warning, Info)"
        description="Trigger feedback notifications with contextual status icons, side accent bars, and color themes."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="success"
              onClick={() =>
                toast.success("Project Saved Successfully", {
                  description: "All recent changes have been synchronized.",
                })
              }
            >
              Success Toast
            </Button>
            <Button
              color="danger"
              onClick={() =>
                toast.error("Connection Refused", {
                  description: "Could not reach database server on port 5432.",
                })
              }
            >
              Error Toast
            </Button>
            <Button
              color="warning"
              onClick={() =>
                toast.warning("Subscription Expiring", {
                  description: "Your trial plan expires in 3 days.",
                })
              }
            >
              Warning Toast
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.info("System Update Available", {
                  description: "Version v2.4.0 is ready to install.",
                })
              }
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
                    onClick: () =>
                      toast.info("Action Undone", {
                        description: "File was restored to folder.",
                      }),
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

      <DocsComponent
        title="Loading Toast Variations (Loading -> Success / Error)"
        description="Trigger animated loading spinner toasts, and dynamically update them to success or error results after asynchronous tasks."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="primary"
              variant="bordered"
              onClick={() => {
                const id = "loading-toast-1";
                toast.loading("Synchronizing Data...", {
                  id,
                  description: "Connecting to remote cloud storage.",
                });
              }}
            >
              Loading Only
            </Button>

            <Button
              color="success"
              onClick={() => {
                const id = "async-success-toast";
                toast.loading("Uploading Assets...", {
                  id,
                  description: "Sending 5 files to bucket.",
                });
                setTimeout(() => {
                  toast.success("Upload Complete!", {
                    id,
                    description: "All assets are now live in CDN.",
                  });
                }, 2500);
              }}
            >
              Loading → Success
            </Button>

            <Button
              color="danger"
              onClick={() => {
                const id = "async-error-toast";
                toast.loading("Connecting to Database...", {
                  id,
                  description: "Establishing TLS connection.",
                });
                setTimeout(() => {
                  toast.error("Connection Failed!", {
                    id,
                    description: "Timeout reaching db-primary:5432.",
                  });
                }, 2500);
              }}
            >
              Loading → Error
            </Button>
          </div>
        }
        code={`
toast.loading("Synchronizing Data...", { id: "my-toast" });

const id = "upload-toast";
toast.loading("Uploading Assets...", { id });
setTimeout(() => {
  toast.success("Upload Complete!", { id, description: "All assets are live." });
}, 2500);

toast.loading("Connecting to DB...", { id: "db-toast" });
setTimeout(() => {
  toast.error("Connection Failed!", { id: "db-toast" });
}, 2500);`}
        props={["toast.loading(title, options)", "id?: string | number"]}
      />

      <DocsComponent
        title="Custom Spinner Variants"
        description="Choose custom spinner animation styles for loading toasts using spinnerVariant ('dots', 'bars', 'pulse', 'ring', 'gradient')."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.loading("Fetching Records...", { spinnerVariant: "dots" })
              }
            >
              Spinner: Dots
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.loading("Processing Order...", { spinnerVariant: "bars" })
              }
            >
              Spinner: Bars
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.loading("Syncing Files...", { spinnerVariant: "pulse" })
              }
            >
              Spinner: Pulse
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.loading("Generating PDF...", { spinnerVariant: "ring" })
              }
            >
              Spinner: Ring
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.loading("Compiling Code...", {
                  spinnerVariant: "gradient",
                })
              }
            >
              Spinner: Gradient
            </Button>
          </div>
        }
        code={`toast.loading("Fetching Records...", { spinnerVariant: "dots" });
toast.loading("Processing Order...", { spinnerVariant: "bars" });
toast.loading("Syncing Files...", { spinnerVariant: "pulse" });
toast.loading("Generating PDF...", { spinnerVariant: "ring" });
toast.loading("Compiling Code...", { spinnerVariant: "gradient" });`}
        props={[
          "spinnerVariant: 'default' | 'dots' | 'bars' | 'pulse' | 'ring' | 'gradient'",
        ]}
      />

      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props & Methods — Toast"
        description="Supported helper functions and options for Toast."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Method / Option
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
                  <td className="px-3 py-2 font-mono text-primary">
                    toast.success(title, options)
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    function
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Triggers an emerald success notification with checkmark icon
                    badge.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    toast.error(title, options)
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    function
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Triggers a rose error alert toast.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    options.description
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Contextual body text below the title.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    options.action
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    &#123; label, onClick &#125;
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Interactive action button config.
                  </td>
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
