import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Toast",
  description: "Temporary toast notification component built on Sonner.",
};

import { ToastDemo } from "./toast-demo";
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
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Toast"
        description="A succinct message displayed temporarily to provide feedback about an operation."
      />

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
            description="Core implementation of the Toast component."
            tags={["React", "Sonner", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Toast notifications."
        preview={<ToastDemo />}
        code={`<Toast />
<Button onClick={() => toast.success("Event created!")}>
  Show Toast
</Button>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Toast"
        description="Properties to configure the Toast component."
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
                  <td className="px-3 py-2 font-mono text-primary">position</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">'bottom-right'</td>
                  <td className="px-3 py-2 text-muted-foreground">Screen position where toast popups appear.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
