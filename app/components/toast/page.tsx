"use client";

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
        description="A rich feedback notification popover with status accent bars, background icons, spinner loaders, progress indicator timers, and interactive action buttons."
      />

      <Toast position="bottom-right" />

      <ImportSnippet
        importCode={`import { Toast, toast } from "@/components/ui/toast/toast";`}
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
        description="Standard clean notification toast with title and description."
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
        props={["variant: 'default' | 'bordered' | 'bar'"]}
        title="Variants"
        description="Choose from default clean layout, bordered outline style, or bar accent highlights on the left."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="primary"
              onClick={() =>
                toast("System Updated", {
                  variant: "default",
                  description: "Default clean layout active.",
                })
              }
            >
              Default Variant
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.success("Design System Saved", {
                  variant: "bordered",
                  description: "Thin colored border all around.",
                })
              }
            >
              Bordered Variant
            </Button>
            <Button
              color="secondary"
              onClick={() =>
                toast("Bar Notification", {
                  variant: "bar",
                  description: "Accent color bar on the left edge.",
                })
              }
            >
              Bar Variant
            </Button>
          </div>
        }
        code={`toast("Default Layout", { variant: "default" });
toast.success("Design System Saved", { variant: "bordered" });
toast("Bar Notification", { variant: "bar" });`}
      />

      <DocsComponent
        props={["size: 'sm' | 'md' | 'lg'"]}
        title="Sizes"
        description="Toasts support small, medium, or large sizes altering widths and inner layout spaces."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast("Small Toast Notification", {
                  size: "sm",
                  description: "Compact text size.",
                })
              }
            >
              Small Size
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast("Medium Toast Notification", {
                  size: "md",
                  description: "Standard layout dimensions.",
                })
              }
            >
              Medium Size
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast("Large Toast Notification", {
                  size: "lg",
                  description: "Extra prominent alert details.",
                })
              }
            >
              Large Size
            </Button>
          </div>
        }
        code={`toast("Small Toast Notification", { size: "sm" });
toast("Medium Toast Notification", { size: "md" });
toast("Large Toast Notification", { size: "lg" });`}
      />

      <DocsComponent
        props={[
          "radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
        ]}
        title="Radius"
        description="Configure standard border-radius styles ranging from square to fully rounded nodes."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast("Radius: None", {
                  radius: "none",
                  description: "Completely square corners.",
                })
              }
            >
              Radius None
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast("Radius: Medium", {
                  radius: "md",
                  description: "Subtle modern corner rounding.",
                })
              }
            >
              Radius MD
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast("Radius: Extra Large", {
                  radius: "xl",
                  description: "Standard layout rounding style.",
                })
              }
            >
              Radius XL
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast("Radius: Full", {
                  radius: "full",
                  description: "Fully rounded pill shape layout.",
                })
              }
            >
              Radius Full
            </Button>
          </div>
        }
        code={`toast("Radius: None", { radius: "none" });
toast("Radius: Medium", { radius: "md" });
toast("Radius: Extra Large", { radius: "xl" });
toast("Radius: Full", { radius: "full" });`}
      />

      <DocsComponent
        props={["richColors: boolean"]}
        title="Rich Colors"
        description="Fills the entire background color of the toast matching the semantic status color."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="success"
              onClick={() =>
                toast.success("Successfully Completed", {
                  richColors: true,
                  description: "Your files were fully uploaded.",
                })
              }
            >
              Rich Success
            </Button>
            <Button
              color="danger"
              onClick={() =>
                toast.error("Operation Aborted", {
                  richColors: true,
                  description: "Authentication token expired.",
                })
              }
            >
              Rich Error
            </Button>
            <Button
              color="warning"
              onClick={() =>
                toast.warning("Server Capacity Warning", {
                  richColors: true,
                  description: "Resource usage exceeds 85%.",
                })
              }
            >
              Rich Warning
            </Button>
            <Button
              color="primary"
              onClick={() =>
                toast.info("Database Synchronized", {
                  richColors: true,
                  description: "Read replicas synced cleanly.",
                })
              }
            >
              Rich Info
            </Button>
          </div>
        }
        code={`toast.success("Successfully Completed", { richColors: true });
toast.error("Operation Aborted", { richColors: true });
toast.warning("Server Capacity Warning", { richColors: true });
toast.info("Database Synchronized", { richColors: true });`}
      />

      <DocsComponent
        props={["showBgIcon: boolean"]}
        title="Background Icon Decoration"
        description="Fades a large low-opacity decorative status icon in the background of the toast."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.success("System Optimized", {
                  showBgIcon: true,
                  description: "Cleaned cache and files.",
                })
              }
            >
              Show Toast with Background Icon
            </Button>
          </div>
        }
        code={`toast.success("System Optimized", {
  showBgIcon: true,
  description: "Cleaned cache and files."
});`}
      />

      <DocsComponent
        props={["showProgress: boolean"]}
        title="Timer Progress Bar"
        description="Render a timer indicator bar showing remaining duration."
        preview={
          <div className="flex flex-wrap gap-3">
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.success("Closing Automatically", {
                  showProgress: true,
                  description: "Closing soon via visual timer track.",
                  duration: 5000,
                })
              }
            >
              Progress Timer
            </Button>
          </div>
        }
        code={`toast.success("Closing Automatically", {
  showProgress: true,
  duration: 5000
});`}
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
        title="Loading Toast Variations"
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
              Spinner: Docs
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
                toast.loading("Routing Connection...", {
                  spinnerVariant: "ring",
                })
              }
            >
              Spinner: Ring
            </Button>
            <Button
              color="primary"
              variant="bordered"
              onClick={() =>
                toast.loading("Applying Updates...", {
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
toast.loading("Routing Connection...", { spinnerVariant: "ring" });
toast.loading("Applying Updates...", { spinnerVariant: "gradient" });`}
        props={[
          "spinnerVariant?: 'dots' | 'bars' | 'pulse' | 'ring' | 'gradient'",
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Prop
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Type
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Default
              </th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                variant
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'default' | 'bordered' | 'bar'
              </td>
              <td className="px-4 py-3 text-zinc-400">'default'</td>
              <td className="px-4 py-3">The visual style layout variant.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">size</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'sm' | 'md' | 'lg'
              </td>
              <td className="px-4 py-3 text-zinc-400">'md'</td>
              <td className="px-4 py-3">Sizing coordinates and text sizes.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                radius
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |
                'full'
              </td>
              <td className="px-4 py-3 text-zinc-400">'xl'</td>
              <td className="px-4 py-3">
                Corner border-radius rounding token.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                richColors
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                boolean
              </td>
              <td className="px-4 py-3 text-zinc-400">false</td>
              <td className="px-4 py-3">
                Fills the whole background card matching status color.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                showBgIcon
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                boolean
              </td>
              <td className="px-4 py-3 text-zinc-400">false</td>
              <td className="px-4 py-3">
                Renders a huge faded background status icon decoration.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-sky-500">
                showProgress
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                boolean
              </td>
              <td className="px-4 py-3 text-zinc-400">false</td>
              <td className="px-4 py-3">Displays a closing progress line.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsPagination />
    </div>
  );
}
