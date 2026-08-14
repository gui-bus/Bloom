"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Alert } from "@/components/ui/alert/alert";
import { alertCode } from "@/components/ui/alert/alert.code";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";

export default function AlertComponentPage() {
  const [dismissKey, setDismissKey] = React.useState(0);
  const [closableKey, setClosableKey] = React.useState(0);
  const [progressVal, setProgressVal] = React.useState(100);

  React.useEffect(() => {
    setProgressVal(100);
    const startTime = Date.now();
    const duration = 5000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgressVal(remaining);
      if (elapsed >= duration) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [dismissKey]);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Alert"
        description="Displays a clean contextual banner for user attention with theme-adaptive neutral backgrounds, colored titles & icons, dismiss timers, action buttons, and accent border variants."
      />

      <ImportSnippet
        importCode={`import { Alert } from "@/components/ui/alert/alert";`}
      />

      <InstallationBlock componentName="alert" />

      <CodeBlock
        code={alertCode}
        componentName="alert.tsx"
        description="Core implementation of the Alert component featuring clean neutral cards, status-colored titles, and custom slots."
        tags={["React", "Tailwind", "Feedback", "UI Component", "Alert"]}
      />

      <DocsComponent
        title="Default"
        description="A clean, subtle alert banner with a neutral background, status-colored title, and status icon."
        preview={
          <div className="w-full">
            <Alert color="info" title="System Information">
              A new software update is available for installation. Please save
              your work before updating.
            </Alert>
          </div>
        }
        code={`<Alert color="info" title="System Information">
  A new software update is available for installation.
</Alert>`}
        props={["color: 'info'", "title: string"]}
      />

      <DocsComponent
        title="Variants"
        description="Visual card framing variations including thick left accent borders, borders, flat fills, ghost look, shadows, and vibrant glowing shadow borders."
        preview={
          <div className="w-full space-y-4">
            <Alert variant="default" color="default" title="Default Variant">
              The standard alert variant with a subtle background and border.
            </Alert>
            <Alert variant="bordered" color="default" title="Bordered Variant">
              Clean borders with a transparent background.
            </Alert>
            <Alert variant="flat" color="default" title="Flat Variant">
              Filled solid background without prominent borders.
            </Alert>
            <Alert variant="ghost" color="default" title="Ghost Variant">
              Minimalist design with no background or border.
            </Alert>
            <Alert variant="shadow" color="default" title="Shadow Variant">
              Prominent elevation layout with soft drop shadows.
            </Alert>
            <Alert
              variant="accent-left"
              color="default"
              title="Accent Left Variant"
            >
              High priority alert banner featuring a 4px solid left accent
              border line.
            </Alert>
            <Alert variant="glow" color="default" title="Glow Variant">
              Vibrant ambient glow border for critical announcements and
              featured callouts.
            </Alert>
          </div>
        }
        code={`<Alert variant="default" color="default" title="Default">Default style.</Alert>
<Alert variant="bordered" color="default" title="Bordered">Bordered style.</Alert>
<Alert variant="flat" color="default" title="Flat">Flat background style.</Alert>
<Alert variant="ghost" color="default" title="Ghost">Ghost layout.</Alert>
<Alert variant="shadow" color="default" title="Shadow">Shadow elevation.</Alert>
<Alert variant="accent-left" color="default" title="Accent Left">4px solid left accent line.</Alert>
<Alert variant="glow" color="default" title="Glow">Vibrant ambient glow shadow border.</Alert>`}
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'ghost' | 'shadow' | 'accent-left' | 'glow'",
        ]}
      />

      <DocsComponent
        title="Colors"
        description="Select semantic colors via the 'color' prop. The card background stays clean and neutral while only the title and status icon inherit the semantic accent color."
        preview={
          <div className="w-full space-y-3.5">
            <Alert color="default" title="Default Status">
              A standard default alert message with neutral colors.
            </Alert>
            <Alert color="info" title="Information">
              Your session will expire in 15 minutes due to inactivity.
            </Alert>
            <Alert color="success" title="Payment Successful">
              Your order #84920 has been processed successfully.
            </Alert>
            <Alert color="warning" title="Storage Limit Warning">
              You have used 85% of your available cloud storage.
            </Alert>
            <Alert color="danger" title="Connection Error">
              Unable to connect to the database server. Please check network
              logs.
            </Alert>
          </div>
        }
        code={`<div className="space-y-3.5">
  <Alert color="default" title="Default Status">Default notification.</Alert>
  <Alert color="info" title="Information">Your session expires soon.</Alert>
  <Alert color="success" title="Payment Successful">Order #84920 processed.</Alert>
  <Alert color="warning" title="Storage Limit Warning">85% cloud storage used.</Alert>
  <Alert color="danger" title="Connection Error">Unable to connect to database.</Alert>
</div>`}
        props={["color: 'default' | 'info' | 'success' | 'warning' | 'danger'"]}
      />

      <DocsComponent
        title="Auto Dismiss Timer"
        description="Automatically dismiss the alert banner after a specified duration in milliseconds. Click the button to trigger/reset the alert."
        preview={
          <div className="w-full space-y-4">
            <div>
              <Button
                size="sm"
                variant="flat"
                color="primary"
                radius="sm"
                onClick={() => setDismissKey((prev) => prev + 1)}
              >
                Trigger Alert
              </Button>
            </div>
            <Alert
              key={dismissKey}
              color="success"
              title="Auto-Dismissing Banner"
              isDismissible
              durationMs={5000}
            >
              <div className="space-y-3">
                <p>
                  This alert notification will automatically hide in 5 seconds.
                </p>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full"
                    style={{
                      width: `${progressVal}%`,
                      transition:
                        progressVal === 100 ? "none" : "width 50ms linear",
                    }}
                  />
                </div>
              </div>
            </Alert>
          </div>
        }
        code={`const [dismissKey, setDismissKey] = useState(0);
const [progressVal, setProgressVal] = useState(100);

useEffect(() => {
  setProgressVal(100);
  const startTime = Date.now();
  const duration = 5000;
  const interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
    setProgressVal(remaining);
    if (elapsed >= duration) {
      clearInterval(interval);
    }
  }, 50);
  return () => clearInterval(interval);
}, [dismissKey]);

return (
  <div className="space-y-4">
    <Button size="sm" variant="flat" color="primary" radius="sm" onClick={() => setDismissKey(prev => prev + 1)}>
      Trigger Alert
    </Button>
    <Alert
      key={dismissKey}
      color="success"
      title="Auto-Dismissing Banner"
      isDismissible
      durationMs={5000}
    >
      <div className="space-y-3">
        <p>This alert notification will automatically hide in 5 seconds.</p>
        <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1 overflow-hidden">
          <div
            className="bg-emerald-500 h-full rounded-full"
            style={{
              width: \`\${progressVal}%\`,
              transition: progressVal === 100 ? "none" : "width 50ms linear"
            }}
          />
        </div>
      </div>
    </Alert>
  </div>
);`}
        props={["isDismissible: boolean", "durationMs: number"]}
      />

      <DocsComponent
        title="Closable Alert"
        description="Allow users to dismiss the alert manually using a close button, without setting a timer, by configuring the isClosable prop. Click the button to trigger/reset the alert."
        preview={
          <div className="w-full space-y-4">
            <div>
              <Button
                size="sm"
                variant="flat"
                color="primary"
                radius="sm"
                onClick={() => setClosableKey((prev) => prev + 1)}
              >
                Trigger Alert
              </Button>
            </div>
            <Alert
              key={closableKey}
              color="info"
              title="Dismissible Update"
              isClosable
            >
              This alert contains a close button in the top-right corner. It
              stays visible until you click the close icon.
            </Alert>
          </div>
        }
        code={`const [closableKey, setClosableKey] = useState(0);

return (
  <div className="space-y-4">
    <Button size="sm" variant="flat" color="primary" radius="sm" onClick={() => setClosableKey(prev => prev + 1)}>
      Trigger Alert
    </Button>
    <Alert key={closableKey} color="info" title="Dismissible Update" isClosable>
      This alert stays visible until you click the close icon.
    </Alert>
  </div>
);`}
        props={["isClosable: boolean"]}
      />

      <DocsComponent
        title="Background Watermark Icon"
        description="Display the alert status icon as a large semi-transparent background watermark rather than inline beside the title. Available for all status types and supports custom icons."
        preview={
          <div className="w-full space-y-4">
            <Alert color="default" title="Default Status" showWatermark>
              Default layout featuring a large neutral background watermark.
            </Alert>
            <Alert color="info" title="Information Notice" showWatermark>
              Information banner displaying an info watermark icon.
            </Alert>
            <Alert color="success" title="Success Notification" showWatermark>
              Success banner displaying a checkmark watermark icon.
            </Alert>
            <Alert color="warning" title="Warning Warning" showWatermark>
              Warning banner displaying an alert triangle watermark icon.
            </Alert>
            <Alert color="danger" title="Critical Failure" showWatermark>
              Danger banner displaying an alert circle watermark icon.
            </Alert>
            <Alert
              color="default"
              title="System Settings"
              customIcon={
                <Icon icon="hugeicons:settings-02" className="size-24" />
              }
              showWatermark
            >
              This alert uses a custom settings icon as its background
              watermark.
            </Alert>
          </div>
        }
        code={`<Alert color="default" title="Default Status" showWatermark>Default watermark.</Alert>
<Alert color="info" title="Information Notice" showWatermark>Info watermark.</Alert>
<Alert color="success" title="Success Notification" showWatermark>Success watermark.</Alert>
<Alert color="warning" title="Warning Warning" showWatermark>Warning watermark.</Alert>
<Alert color="danger" title="Critical Failure" showWatermark>Danger watermark.</Alert>
<Alert color="default" title="System Settings" customIcon={<Icon icon="hugeicons:settings-02" className="size-24" />} showWatermark>
  Custom settings watermark.
</Alert>`}
        props={["showWatermark: boolean", "customIcon: ReactNode"]}
      />

      <DocsComponent
        title="Action Layout"
        description="Embed interactive action controls directly inside the alert content."
        preview={
          <div className="w-full">
            <Alert
              color="danger"
              variant="flat"
              title="Subscription Suspended"
              action={
                <div className="flex items-center gap-2.5 mt-2.5">
                  <Button
                    size="md"
                    color="primary"
                    variant="default"
                    radius="md"
                  >
                    Update Billing
                  </Button>
                  <Button size="md" color="default" variant="flat" radius="md">
                    Contact Support
                  </Button>
                </div>
              }
            >
              Your subscription has been suspended due to an outstanding balance
              on invoice #10492. Please update your payment details immediately
              to restore access.
            </Alert>
          </div>
        }
        code={`<Alert
  color="danger"
  variant="flat"
  title="Subscription Suspended"
  action={
    <div className="flex gap-2.5 mt-2.5">
      <Button size="md" color="primary" variant="default" radius="md">Update Billing</Button>
      <Button size="md" color="default" variant="flat" radius="md">Contact Support</Button>
    </div>
  }
>
  Your subscription has been suspended due to an outstanding balance.
</Alert>`}
        props={["action: ReactNode"]}
      />

      <DocsComponent
        title="Start and End Slots"
        description="Inject custom elements before the title using 'startContent', or trailing action controls and badges using 'endContent'."
        preview={
          <div className="w-full space-y-4">
            <Alert
              color="info"
              title="New Team Member"
              startContent={
                <Avatar size="sm">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                    alt="Sarah Jenkins"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              }
              endContent={
                <Badge variant="flat" color="primary">
                  New
                </Badge>
              }
            >
              Sarah Jenkins has joined the Design System workspace as Lead UI
              Engineer.
            </Alert>

            <Alert
              color="info"
              title="Deployment Completed"
              endContent={
                <Button size="xs" variant="flat" color="primary" radius="sm">
                  View Logs
                </Button>
              }
            >
              Production build v2.4.1 deployed successfully to AWS East region.
            </Alert>
          </div>
        }
        code={`<Alert
  color="info"
  title="New Team Member"
  startContent={
    <Avatar size="sm">
      <AvatarImage src="..." alt="Sarah Jenkins" />
      <AvatarFallback>SJ</AvatarFallback>
    </Avatar>
  }
  endContent={<Badge variant="flat" color="primary">New</Badge>}
>
  Sarah Jenkins joined the team.
</Alert>`}
        props={["startContent: ReactNode", "endContent: ReactNode"]}
      />

      <DocsComponent
        title="Props — Alert"
        description="Properties for configuring the Alert banner component."
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
                    'default' | 'info' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'info'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Semantic color applied exclusively to the title header and
                    status icon.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'flat' | 'ghost' | 'shadow' |
                    'accent-left' | 'glow'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual card style determining background depth and border
                    framing.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">action</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Action buttons or controls container rendered inside the
                    alert.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isClosable
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables a manual close button to dismiss the alert.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isDismissible
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables dismissible behavior with close button and timer
                    support.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    durationMs
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Duration in milliseconds before automatically dismissing the
                    alert.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    customIcon
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom icon to render in the Alert instead of the default
                    status icon.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    showWatermark
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays the status icon (or custom icon) as a large
                    background watermark.
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
