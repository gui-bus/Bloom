"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Timeline, TimelineItem } from "@/components/ui/timeline/timeline";
import { timelineCode } from "@/components/ui/timeline/timeline.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function TimelinePage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Timeline"
        description="A vertically stacked chronological sequence of events with status indicators, custom icons, timestamps, and connecting lines for activity feeds and order tracking."
      />

      <ImportSnippet importCode={`import { Timeline, TimelineItem } from "@/components/ui/timeline/timeline";`} />

      <InstallationBlock componentName="timeline" />

      <Tabs defaultValue="timeline">
        <TabsList background={false}>
          <TabsTrigger
            value="timeline"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            timeline.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="timeline">
          <CodeBlock
            code={timelineCode}
            componentName="timeline.tsx"
            description="Timeline component with status indicators, custom icons, and chronological event display."
            tags={["React", "Tailwind", "UI Component", "Timeline"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A basic timeline displaying a sequence of chronological events with default status dots."
        preview={
          <div className="w-full max-w-lg">
            <Timeline>
              <TimelineItem
                title="Order Placed"
                description="Your order #1234 has been successfully placed."
                time="2 hours ago"
              />
              <TimelineItem
                title="Payment Confirmed"
                description="Payment of $129.99 has been processed."
                time="1 hour ago"
              />
              <TimelineItem
                title="Processing"
                description="Your order is being prepared for shipment."
                time="30 min ago"
              />
              <TimelineItem
                title="Shipped"
                description="Package has been dispatched via express delivery."
                time="Just now"
              />
            </Timeline>
          </div>
        }
        code={`<Timeline>
  <TimelineItem
    title="Order Placed"
    description="Your order #1234 has been successfully placed."
    time="2 hours ago"
  />
  <TimelineItem
    title="Payment Confirmed"
    description="Payment of $129.99 has been processed."
    time="1 hour ago"
  />
  <TimelineItem
    title="Processing"
    description="Your order is being prepared for shipment."
    time="30 min ago"
  />
  <TimelineItem
    title="Shipped"
    description="Package has been dispatched via express delivery."
    time="Just now"
  />
</Timeline>`}
      />

      {/* Status Variants */}
      <DocsComponent
        title="Status Variants"
        description="Timeline items support semantic status colors to indicate the nature of each event."
        preview={
          <div className="w-full max-w-lg">
            <Timeline>
              <TimelineItem
                status="success"
                title="Deployment Successful"
                description="v2.4.1 deployed to production."
                time="10:30 AM"
              />
              <TimelineItem
                status="primary"
                title="Build Started"
                description="CI pipeline triggered by push to main."
                time="10:28 AM"
              />
              <TimelineItem
                status="warning"
                title="Deprecation Warning"
                description="Legacy API endpoint will be removed in v3.0."
                time="10:15 AM"
              />
              <TimelineItem
                status="danger"
                title="Test Failure"
                description="3 unit tests failed in auth module."
                time="10:00 AM"
              />
            </Timeline>
          </div>
        }
        code={`<Timeline>
  <TimelineItem status="success" title="Deployment Successful" description="v2.4.1 deployed to production." time="10:30 AM" />
  <TimelineItem status="primary" title="Build Started" description="CI pipeline triggered by push to main." time="10:28 AM" />
  <TimelineItem status="warning" title="Deprecation Warning" description="Legacy API endpoint will be removed in v3.0." time="10:15 AM" />
  <TimelineItem status="danger" title="Test Failure" description="3 unit tests failed in auth module." time="10:00 AM" />
</Timeline>`}
      />

      {/* With Icons */}
      <DocsComponent
        title="With Icons"
        description="Replace status dots with custom icons for richer visual context."
        preview={
          <div className="w-full max-w-lg">
            <Timeline>
              <TimelineItem
                status="success"
                icon={<Icon icon="hugeicons:checkmark-circle-02" className="size-4" />}
                title="Account Created"
                description="Welcome to the platform!"
                time="Jan 15"
              />
              <TimelineItem
                status="primary"
                icon={<Icon icon="hugeicons:mail-01" className="size-4" />}
                title="Email Verified"
                description="Your email address has been confirmed."
                time="Jan 15"
              />
              <TimelineItem
                status="primary"
                icon={<Icon icon="hugeicons:user-edit-01" className="size-4" />}
                title="Profile Updated"
                description="Added profile picture and bio."
                time="Jan 16"
              />
              <TimelineItem
                status="success"
                icon={<Icon icon="hugeicons:trophy" className="size-4" />}
                title="First Achievement"
                description="Completed onboarding tutorial."
                time="Jan 17"
              />
            </Timeline>
          </div>
        }
        code={`<Timeline>
  <TimelineItem
    status="success"
    icon={<Icon icon="hugeicons:checkmark-circle-02" className="size-4" />}
    title="Account Created"
    description="Welcome to the platform!"
    time="Jan 15"
  />
  <TimelineItem
    status="primary"
    icon={<Icon icon="hugeicons:mail-01" className="size-4" />}
    title="Email Verified"
    description="Your email address has been confirmed."
    time="Jan 15"
  />
</Timeline>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Timeline</h3>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">children</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">ReactNode</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">TimelineItem elements to render.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">className</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Additional CSS classes.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">TimelineItem</h3>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
                <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">title</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">ReactNode</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Event title text.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">description</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">ReactNode</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Optional description text.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">time</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">string</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Timestamp label displayed on the right.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">icon</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">ReactNode</td><td className="px-4 py-3 text-zinc-400">—</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Custom icon replacing the status dot.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">status</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{`"default" | "primary" | "success" | "warning" | "danger"`}</td><td className="px-4 py-3 text-zinc-400">"default"</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Semantic status color.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs text-sky-500">isLast</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">boolean</td><td className="px-4 py-3 text-zinc-400">false</td><td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">Hides the vertical connector line for the last item. Auto-set by Timeline.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
