"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
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
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function AlertComponentPage() {
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

      <Tabs defaultValue="alert">
        <TabsList background={false}>
          <TabsTrigger
            value="alert"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            alert.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alert">
          <CodeBlock
            code={alertCode}
            componentName="alert.tsx"
            description="Core implementation of the Alert component featuring clean neutral cards, status-colored titles, and custom slots."
            tags={["React", "Tailwind", "Feedback", "UI Component", "Alert"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
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

      {/* Action Button */}
      <DocsComponent
        title="Action Layout (action)"
        description="Embed interactive action controls directly inside the alert content."
        preview={
          <div className="w-full">
            <Alert
              color="warning"
              title="Database Backup Required"
              action={
                <div className="flex items-center gap-2">
                  <Button size="xs" color="warning">
                    Backup Now
                  </Button>
                  <Button size="xs" variant="bordered">
                    Remind Later
                  </Button>
                </div>
              }
            >
              Your database has not been backed up for over 14 days. We strongly
              recommend creating a snapshot.
            </Alert>
          </div>
        }
        code={`<Alert
  color="warning"
  title="Database Backup Required"
  action={
    <div className="flex gap-2">
      <Button size="xs" color="warning">Backup Now</Button>
      <Button size="xs" variant="bordered">Remind Later</Button>
    </div>
  }
>
  Your database has not been backed up.
</Alert>`}
        props={["action: ReactNode"]}
      />

      {/* Variants (accent-left & glow) */}
      <DocsComponent
        title="Variants (accent-left & glow)"
        description="Visual card framing variations including thick left accent borders and vibrant glowing shadow borders."
        preview={
          <div className="w-full space-y-4">
            <Alert
              variant="accent-left"
              color="danger"
              title="Accent Left Variant"
            >
              High priority alert banner featuring a 4px solid left accent
              border line.
            </Alert>
            <Alert variant="glow" color="primary" title="Glow Variant">
              Vibrant ambient glow border for critical announcements and
              featured callouts.
            </Alert>
          </div>
        }
        code={`<Alert variant="accent-left" color="danger" title="Accent Left">4px solid left accent line.</Alert>
<Alert variant="glow" color="primary" title="Glow">Vibrant ambient glow shadow border.</Alert>`}
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'ghost' | 'shadow' | 'accent-left' | 'glow'",
        ]}
      />

      {/* Auto-Dismiss Timer */}
      <DocsComponent
        title="Auto-Dismiss Timer (durationMs)"
        description="Automatically dismiss the alert banner after a specified duration in milliseconds."
        preview={
          <div className="w-full">
            <Alert
              color="success"
              title="Auto-Dismissing Banner (5s)"
              isDismissible
              durationMs={5000}
            >
              This alert notification will automatically hide in 5 seconds.
            </Alert>
          </div>
        }
        code={`<Alert
  color="success"
  title="Auto-Dismissing Banner"
  isDismissible
  durationMs={5000}
>
  This alert notification will automatically hide in 5 seconds.
</Alert>`}
        props={["isDismissible: boolean", "durationMs: number"]}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Select semantic colors via the 'color' prop. The card background stays clean and neutral while only the title and status icon inherit the semantic accent color."
        preview={
          <div className="w-full space-y-3.5">
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
            <Alert color="primary" title="Primary Highlight">
              Explore new features in the latest v2.0 release dashboard.
            </Alert>
          </div>
        }
        code={`<div className="space-y-3.5">
  <Alert color="info" title="Information">Your session expires soon.</Alert>
  <Alert color="success" title="Payment Successful">Order #84920 processed.</Alert>
  <Alert color="warning" title="Storage Limit Warning">85% cloud storage used.</Alert>
  <Alert color="danger" title="Connection Error">Unable to connect to database.</Alert>
</div>`}
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
        ]}
      />

      {/* StartContent & EndContent */}
      <DocsComponent
        title="Start & End Slots (startContent & endContent)"
        description="Inject custom elements before the title using 'startContent', or trailing action controls and badges using 'endContent'."
        preview={
          <div className="w-full space-y-4">
            <Alert
              color="primary"
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
              color="success"
              title="Deployment Completed"
              endContent={
                <Button size="xs" variant="bordered" color="success">
                  View Logs
                </Button>
              }
            >
              Production build v2.4.1 deployed successfully to AWS East region.
            </Alert>
          </div>
        }
        code={`<Alert
  color="primary"
  title="New Team Member"
  startContent={
    <Avatar size="sm">
      <AvatarImage src="..." alt="Sarah Jenkins" />
      <AvatarFallback>SJ</AvatarFallback>
    </Avatar>
  }
  endContent={<Badge variant="flat">New</Badge>}
>
  Sarah Jenkins joined the team.
</Alert>`}
        props={["startContent: ReactNode", "endContent: ReactNode"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* API Reference Table */}
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
                    'default' | 'primary' | 'secondary' | 'accent' | 'info' |
                    'success' | 'warning' | 'danger'
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
