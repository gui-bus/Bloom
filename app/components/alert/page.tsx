"use client";

import { AccessibilityCard } from "@/components/core/accessibilityCard";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert/alert";
import { alertCode } from "@/components/ui/alert/alert.code";
import { Button } from "@/components/ui/button/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar/avatar";
import { Badge } from "@/components/ui/badge/badge";
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
        description="Displays a clean contextual banner for user attention with theme-adaptive neutral backgrounds, colored titles & icons, and custom slot support."
      />

      <ImportSnippet importCode={`import { Alert } from "@/components/ui/alert/alert";`} />

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
            <Alert
              color="info"
              title="System Information"
            >
              A new software update is available for installation. Please save your work before updating.
            </Alert>
          </div>
        }
        code={`<Alert color="info" title="System Information">
  A new software update is available for installation.
</Alert>`}
        props={["color: 'info'", "title: string"]}
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
              Unable to connect to the database server. Please check network logs.
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
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Control the card framing and depth using the 'variant' prop ('default', 'bordered', 'flat', 'ghost', 'shadow')."
        preview={
          <div className="w-full space-y-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">variant="default"</span>
              <Alert variant="default" color="success" title="Default Variant">
                Standard clean card with subtle border and light shadow.
              </Alert>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">variant="bordered"</span>
              <Alert variant="bordered" color="info" title="Bordered Variant">
                Transparent card background enclosed by a crisp border frame.
              </Alert>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">variant="flat"</span>
              <Alert variant="flat" color="primary" title="Flat Variant">
                Subtle muted background without outer border lines.
              </Alert>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">variant="shadow"</span>
              <Alert variant="shadow" color="warning" title="Shadow Variant">
                Elevated card with a prominent drop shadow.
              </Alert>
            </div>
          </div>
        }
        code={`<Alert variant="default" color="success" title="Default Variant">Card with border.</Alert>
<Alert variant="bordered" color="info" title="Bordered Variant">Transparent with border.</Alert>
<Alert variant="flat" color="primary" title="Flat Variant">Subtle muted background.</Alert>
<Alert variant="shadow" color="warning" title="Shadow Variant">Elevated with drop shadow.</Alert>`}
        props={["variant: 'default' | 'bordered' | 'flat' | 'ghost' | 'shadow'"]}
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
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              }
              endContent={
                <Badge variant="flat" color="primary">New</Badge>
              }
            >
              Sarah Jenkins has joined the Design System workspace as Lead UI Engineer.
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
</Alert>

<Alert
  color="success"
  title="Deployment Completed"
  endContent={<Button size="xs" variant="bordered" color="success">View Logs</Button>}
>
  Production build deployed.
</Alert>`}
        props={["startContent: ReactNode", "endContent: ReactNode"]}
      />

      {/* Closable Alerts */}
      <DocsComponent
        title="Dismissible Alert (isClosable)"
        description="Enable dismissible behavior by setting 'isClosable' to true. Handles state internally and triggers 'onClose' callback when dismissed."
        preview={
          <div className="w-full">
            <Alert
              color="warning"
              title="Maintenance Scheduled"
              isClosable
              onClose={() => console.log("Alert dismissed")}
            >
              Scheduled database maintenance will occur tonight at 02:00 UTC. Systems will remain read-only.
            </Alert>
          </div>
        }
        code={`<Alert
  color="warning"
  title="Maintenance Scheduled"
  isClosable
  onClose={() => console.log("Alert dismissed")}
>
  Scheduled maintenance will occur tonight.
</Alert>`}
        props={["isClosable: boolean", "onClose: () => void"]}
      />

      {/* Compound Usage */}
      <DocsComponent
        title="Compound Components (AlertTitle & AlertDescription)"
        description="Compose flexible alert layouts using 'AlertTitle' and 'AlertDescription' subcomponents."
        preview={
          <div className="w-full">
            <Alert color="danger">
              <AlertTitle>Security Vulnerability Detected</AlertTitle>
              <AlertDescription>
                An outdated dependency package was flagged by automated security audit. Please upgrade immediately.
              </AlertDescription>
            </Alert>
          </div>
        }
        code={`<Alert color="danger">
  <AlertTitle>Security Vulnerability Detected</AlertTitle>
  <AlertDescription>
    An outdated dependency package was flagged by automated security audit.
  </AlertDescription>
</Alert>`}
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
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Default</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'info'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Semantic color applied exclusively to the title header and status icon.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'flat' | 'ghost' | 'shadow'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual card style determining background depth and border framing.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">title</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Title header text rendered with the status color.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">startContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom element (icon, avatar) rendered before the title and message.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">endContent</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom element (action button, badge) rendered on the right side.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">icon</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom icon replacing the default status type icon.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">hideIcon</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Hides the leading icon completely.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isClosable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Renders a close button on the right to dismiss the alert banner.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">onClose</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">() =&gt; void</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback function fired when the alert is dismissed.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — AlertTitle"
        description="Properties for configuring the AlertTitle component."
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
                  <td className="px-3 py-2 font-mono text-primary">className</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom CSS class names for styling the title element.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — AlertDescription"
        description="Properties for configuring the AlertDescription component."
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
                  <td className="px-3 py-2 font-mono text-primary">className</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Custom CSS class names for styling the description container.
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
