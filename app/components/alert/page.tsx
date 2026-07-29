import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Alert",
  description: "Contextual alert banner component displaying info, success, warning or danger messages.",
};

import { Alert } from "@/components/ui/alert/alert";
import { alertCode } from "@/components/ui/alert/alert.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function AlertComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Alert"
        description="Displays a callout for user attention with semantic color styling and icon integration."
      />

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
            description="Core implementation of the Alert component."
            tags={["React", "Tailwind", "Feedback", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Semantic alert banners."
        preview={
          <div className="w-full flex flex-col gap-4">
            <Alert variant="info" title="Heads up!">
              You can add components to your app using the cli.
            </Alert>
            <Alert variant="success" title="Success">
              Your profile has been updated successfully.
            </Alert>
            <Alert variant="warning" title="Warning">
              Your subscription is expiring in 3 days.
            </Alert>
            <Alert variant="danger" title="Error">
              Failed to save changes. Please try again.
            </Alert>
          </div>
        }
        code={`<div className="space-y-4">
  <Alert variant="info" title="Heads up!">You can add components using the CLI.</Alert>
  <Alert variant="success" title="Success">Profile updated successfully.</Alert>
  <Alert variant="warning" title="Warning">Subscription expiring soon.</Alert>
  <Alert variant="danger" title="Error">Failed to save changes.</Alert>
</div>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Alert"
        description="Properties to configure the Alert component."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'info' | 'success' | 'warning' | 'danger'</td>
                  <td className="px-3 py-2 text-muted-foreground">'info'</td>
                  <td className="px-3 py-2 text-muted-foreground">Semantic color theme variant.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">title</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Header title text for the alert box.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
