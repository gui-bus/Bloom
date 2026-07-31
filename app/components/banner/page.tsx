"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Banner } from "@/components/ui/banner/banner";
import { bannerCode } from "@/components/ui/banner/banner.code";
import { Separator } from "@/components/ui/separator/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";

export default function BannerPage() {
  const [isVisible, setIsVisible] = React.useState(true);
  
  return (
    <div className="space-y-8">
      <DocsTitle 
        title="Banner" 
        description="A global announcement or notification bar that spans the width of its container." 
      />
      
      <ImportSnippet importCode={`import { Banner } from "@/components/ui/banner/banner";`} />
      
      <InstallationBlock componentName="banner" />
      
      <Tabs defaultValue="banner">
        <TabsList>
          <TabsTrigger value="banner">Banner</TabsTrigger>
        </TabsList>
        <TabsContent value="banner" className="space-y-8">
          
          {/* Default */}
          <DocsComponent 
            title="Default" 
            description="A standard banner for general information." 
            preview={
              <Banner icon={<Icon icon="hugeicons:information-circle" className="h-5 w-5" />}>
                We have updated our terms of service and privacy policy. Please review them at your earliest convenience.
              </Banner>
            } 
            code={`<Banner icon={<Icon icon="hugeicons:information-circle" className="h-5 w-5" />}>
  We have updated our terms of service and privacy policy. Please review them at your earliest convenience.
</Banner>`} 
          />
          
          {/* Variants */}
          <DocsComponent 
            title="Variants" 
            description="Banners come in multiple variants to indicate the severity or type of the message." 
            preview={
              <div className="flex w-full flex-col gap-4">
                <Banner variant="default" icon={<Icon icon="hugeicons:notification-01" className="h-5 w-5" />}>
                  System maintenance scheduled for tonight at 2:00 AM UTC.
                </Banner>
                <Banner variant="primary" icon={<Icon icon="hugeicons:information-circle" className="h-5 w-5" />}>
                  A new software update is available for download!
                </Banner>
                <Banner variant="success" icon={<Icon icon="hugeicons:tick-circle" className="h-5 w-5" />}>
                  Your data export has successfully completed and is ready to download.
                </Banner>
                <Banner variant="warning" icon={<Icon icon="hugeicons:alert-02" className="h-5 w-5" />}>
                  Your subscription will expire in 3 days. Please renew to avoid interruption.
                </Banner>
                <Banner variant="danger" icon={<Icon icon="hugeicons:alert-circle" className="h-5 w-5" />}>
                  Payment failed. Please update your billing information immediately.
                </Banner>
              </div>
            } 
            code={`<Banner variant="default" icon={<Icon icon="hugeicons:notification-01" className="h-5 w-5" />}>
  System maintenance scheduled for tonight at 2:00 AM UTC.
</Banner>

<Banner variant="primary" icon={<Icon icon="hugeicons:information-circle" className="h-5 w-5" />}>
  A new software update is available for download!
</Banner>

<Banner variant="success" icon={<Icon icon="hugeicons:tick-circle" className="h-5 w-5" />}>
  Your data export has successfully completed and is ready to download.
</Banner>

<Banner variant="warning" icon={<Icon icon="hugeicons:alert-02" className="h-5 w-5" />}>
  Your subscription will expire in 3 days. Please renew to avoid interruption.
</Banner>

<Banner variant="danger" icon={<Icon icon="hugeicons:alert-circle" className="h-5 w-5" />}>
  Payment failed. Please update your billing information immediately.
</Banner>`} 
          />
          
          {/* Dismissible */}
          <DocsComponent 
            title="Dismissible" 
            description="A banner that can be dismissed by the user." 
            preview={
              <div className="w-full">
                {isVisible ? (
                  <Banner 
                    variant="primary" 
                    isDismissible 
                    onDismiss={() => setIsVisible(false)}
                    icon={<Icon icon="hugeicons:sparkles" className="h-5 w-5" />}
                  >
                    Check out our new features introduced in the latest release!
                  </Banner>
                ) : (
                  <div className="flex h-14 items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <button 
                      onClick={() => setIsVisible(true)}
                      className="text-sm font-medium text-sky-500 hover:underline"
                    >
                      Reset Banner
                    </button>
                  </div>
                )}
              </div>
            } 
            code={`const [isVisible, setIsVisible] = React.useState(true);

{isVisible && (
  <Banner 
    variant="primary" 
    isDismissible 
    onDismiss={() => setIsVisible(false)}
    icon={<Icon icon="hugeicons:sparkles" className="h-5 w-5" />}
  >
    Check out our new features introduced in the latest release!
  </Banner>
)}`} 
          />

          {/* With Action */}
          <DocsComponent 
            title="With Action" 
            description="Banners can include custom actions or inline buttons." 
            preview={
              <Banner 
                variant="warning"
                icon={<Icon icon="hugeicons:wifi-error-01" className="h-5 w-5" />}
                action={
                  <button className="rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors">
                    Retry Connection
                  </button>
                }
              >
                Network connection lost. Some changes may not be saved.
              </Banner>
            } 
            code={`<Banner 
  variant="warning"
  icon={<Icon icon="hugeicons:wifi-error-01" className="h-5 w-5" />}
  action={
    <button className="rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors">
      Retry Connection
    </button>
  }
>
  Network connection lost. Some changes may not be saved.
</Banner>`} 
          />

          {/* Multi-Announcement Carousel */}
          <DocsComponent 
            title="Announcement Carousel (announcements)" 
            description="Cycle through multiple announcements with next/previous controls." 
            preview={
              <Banner 
                variant="primary"
                announcements={[
                  { id: 1, content: "🚀 Version 3.0 launched! Check out the changelog.", icon: <Icon icon="hugeicons:rocket" className="h-5 w-5" /> },
                  { id: 2, content: "🎉 We reached 10,000 active developers on Bloom UI!", icon: <Icon icon="hugeicons:party-popper" className="h-5 w-5" /> },
                  { id: 3, content: "📚 New video tutorials available in the documentation.", icon: <Icon icon="hugeicons:video-01" className="h-5 w-5" /> }
                ]}
              />
            } 
            code={`<Banner 
  variant="primary"
  announcements={[
    { id: 1, content: "Version 3.0 launched!", icon: <Icon icon="hugeicons:rocket" /> },
    { id: 2, content: "10,000 active developers!", icon: <Icon icon="hugeicons:party-popper" /> }
  ]}
/>`}
            props={["announcements: AnnouncementItem[]"]}
          />

          {/* Sticky Positioning & Storage Persistence */}
          <DocsComponent 
            title="Sticky Positioning & LocalStorage Persistence" 
            description="Fix banner at top or bottom with 'position' prop ('sticky-top', 'sticky-bottom') and persist dismiss state across reloads with 'storageKey'." 
            preview={
              <Banner 
                variant="success" 
                position="static"
                storageKey="header-promo-v1"
                isDismissible
                icon={<Icon icon="hugeicons:gift" className="h-5 w-5" />}
              >
                Persistent Promo Banner: Dismiss state is saved to localStorage!
              </Banner>
            } 
            code={`<Banner 
  variant="success" 
  position="sticky-top"
  storageKey="header-promo-v1"
  isDismissible
>
  Persistent Promo Banner
</Banner>`}
            props={["position: 'static' | 'sticky-top' | 'sticky-bottom'", "storageKey: string"]}
          />
          
        </TabsContent>
      </Tabs>
      
      <Separator label={<span className="px-2">API Reference</span>} gradient />
      
      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/50">
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Prop</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Type</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Default</th>
              <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-zinc-100">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 font-mono text-xs text-sky-500">children</td>
              <td className="px-4 py-3 font-mono text-xs">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-zinc-500">-</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">The content of the banner.</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 font-mono text-xs text-sky-500">variant</td>
              <td className="px-4 py-3 font-mono text-xs">"default" | "primary" | "success" | "warning" | "danger"</td>
              <td className="px-4 py-3 font-mono text-xs text-zinc-500">"default"</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">The visual style variant of the banner.</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 font-mono text-xs text-sky-500">isDismissible</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-zinc-500">false</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Whether to show a dismiss button.</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 font-mono text-xs text-sky-500">onDismiss</td>
              <td className="px-4 py-3 font-mono text-xs">() =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-zinc-500">-</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Callback fired when the dismiss button is clicked.</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 font-mono text-xs text-sky-500">action</td>
              <td className="px-4 py-3 font-mono text-xs">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-zinc-500">-</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Optional action component (e.g., button) placed before the dismiss button.</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 font-mono text-xs text-sky-500">icon</td>
              <td className="px-4 py-3 font-mono text-xs">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-zinc-500">-</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Optional icon displayed at the start of the banner.</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <DocsPagination />
    </div>
  );
}
