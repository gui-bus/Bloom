"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Banner } from "@/components/ui/banner/banner";
import { bannerCode } from "@/components/ui/banner/banner.code";
import { Button } from "@/components/ui/button/button";
import { Separator } from "@/components/ui/separator/separator";

export default function BannerPage() {
  const [dismissKey, setDismissKey] = React.useState(0);

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Banner"
        description="A global announcement or notification bar that spans the width of its container. Supports variants, radius, dismissal, action slots, custom icons, and auto-playing announcement carousels with a progress bar."
      />

      <ImportSnippet
        importCode={`import { Banner } from "@/components/ui/banner/banner";`}
      />

      <InstallationBlock componentName="banner" />

      <CodeBlock
        code={bannerCode}
        componentName="banner.tsx"
        description="Banner component supporting variants, radius, icon slots, announcements carousel with auto-play and progress bar, sticky positioning, and localStorage persistence."
        tags={["React", "Tailwind", "UI Component", "Banner", "Notification"]}
      />

      <DocsComponent
        title="Default"
        description="A standard banner for general information."
        preview={
          <Banner
            icon={
              <Icon icon="hugeicons:information-circle" className="h-4 w-4" />
            }
          >
            We have updated our terms of service and privacy policy. Please
            review them at your earliest convenience.
          </Banner>
        }
        code={`<Banner icon={<Icon icon="hugeicons:information-circle" className="h-4 w-4" />}>
  We have updated our terms of service and privacy policy.
</Banner>`}
      />

      <DocsComponent
        title="Variants"
        description="Banners come in multiple variants to indicate the severity or type of the message."
        preview={
          <div className="flex w-full flex-col gap-3">
            <Banner
              variant="default"
              icon={
                <Icon icon="hugeicons:notification-01" className="h-4 w-4" />
              }
            >
              System maintenance scheduled for tonight at 2:00 AM UTC.
            </Banner>
            <Banner
              variant="primary"
              icon={
                <Icon icon="hugeicons:information-circle" className="h-4 w-4" />
              }
            >
              A new software update is available for download!
            </Banner>
            <Banner
              variant="success"
              icon={
                <Icon
                  icon="hugeicons:checkmark-circle-02"
                  className="h-4 w-4"
                />
              }
            >
              Your data export has successfully completed and is ready to
              download.
            </Banner>
            <Banner
              variant="warning"
              icon={<Icon icon="hugeicons:alert-02" className="h-4 w-4" />}
            >
              Your subscription will expire in 3 days. Please renew to avoid
              interruption.
            </Banner>
            <Banner
              variant="danger"
              icon={<Icon icon="hugeicons:alert-circle" className="h-4 w-4" />}
            >
              Payment failed. Please update your billing information
              immediately.
            </Banner>
          </div>
        }
        code={`<Banner variant="default" icon={<Icon icon="hugeicons:notification-01" className="h-4 w-4" />}>
  System maintenance scheduled for tonight at 2:00 AM UTC.
</Banner>
<Banner variant="primary" icon={<Icon icon="hugeicons:information-circle" className="h-4 w-4" />}>
  A new software update is available for download!
</Banner>
<Banner variant="success" icon={<Icon icon="hugeicons:checkmark-circle-02" className="h-4 w-4" />}>
  Your data export has successfully completed.
</Banner>
<Banner variant="warning" icon={<Icon icon="hugeicons:alert-02" className="h-4 w-4" />}>
  Your subscription will expire in 3 days.
</Banner>
<Banner variant="danger" icon={<Icon icon="hugeicons:alert-circle" className="h-4 w-4" />}>
  Payment failed. Please update your billing information immediately.
</Banner>`}
        props={[
          "variant: 'default' | 'primary' | 'success' | 'warning' | 'danger'",
        ]}
      />

      <DocsComponent
        title="Radius"
        description="Control the border radius of the banner. Defaults to '2xl'."
        preview={
          <div className="flex w-full flex-col gap-3">
            {(["none", "sm", "md", "lg", "xl", "2xl"] as const).map((r) => (
              <Banner key={r} variant="primary" radius={r}>
                <span>
                  <span className="font-mono text-xs opacity-60 mr-2">
                    radius="{r}"
                  </span>
                  Border radius variant.
                </span>
              </Banner>
            ))}
          </div>
        }
        code={`<Banner radius="none">None</Banner>
<Banner radius="sm">Small</Banner>
<Banner radius="md">Medium</Banner>
<Banner radius="lg">Large</Banner>
<Banner radius="xl">XL</Banner>
<Banner radius="2xl">2XL (default)</Banner>`}
        props={["radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'"]}
      />

      <DocsComponent
        title="Dismissible"
        description="A banner that can be dismissed by the user. Click 'Trigger Banner' to re-show it."
        preview={
          <div className="w-full space-y-3">
            <div>
              <Button
                size="sm"
                variant="flat"
                color="primary"
                radius="sm"
                onClick={() => setDismissKey((prev) => prev + 1)}
              >
                Trigger Banner
              </Button>
            </div>
            <Banner
              key={dismissKey}
              variant="primary"
              isDismissible
              icon={<Icon icon="hugeicons:sparkles" className="h-4 w-4" />}
            >
              Check out our new features introduced in the latest release!
            </Banner>
          </div>
        }
        code={`const [dismissKey, setDismissKey] = useState(0);

<Button size="sm" variant="flat" color="primary" radius="sm"
  onClick={() => setDismissKey(prev => prev + 1)}>
  Trigger Banner
</Button>

<Banner key={dismissKey} variant="primary" isDismissible
  icon={<Icon icon="hugeicons:sparkles" className="h-4 w-4" />}>
  Check out our new features introduced in the latest release!
</Banner>`}
        props={["isDismissible: boolean", "onDismiss: () => void"]}
      />

      <DocsComponent
        title="With Action"
        description="Banners can include custom actions placed to the right of the content."
        preview={
          <Banner
            variant="warning"
            icon={<Icon icon="hugeicons:wifi-error-01" className="h-4 w-4" />}
            action={
              <Button size="sm" variant="default" color="primary" radius="md">
                Retry Connection
              </Button>
            }
          >
            Network connection lost. Some changes may not be saved.
          </Banner>
        }
        code={`<Banner
  variant="warning"
  icon={<Icon icon="hugeicons:wifi-error-01" className="h-4 w-4" />}
  action={
    <Button size="sm" variant="default" color="primary" radius="md">
      Retry Connection
    </Button>
  }
>
  Network connection lost. Some changes may not be saved.
</Banner>`}
        props={["action: ReactNode"]}
      />

      <DocsComponent
        title="Without Icon"
        description="Use 'hideIcon' to suppress the icon slot and render a text-only banner."
        preview={
          <div className="flex w-full flex-col gap-3">
            <Banner variant="primary" hideIcon>
              New version available — update now to get the latest features.
            </Banner>
            <Banner variant="warning" hideIcon>
              Scheduled maintenance tonight from 01:00 to 03:00 UTC.
            </Banner>
          </div>
        }
        code={`<Banner variant="primary" hideIcon>
  New version available — update now to get the latest features.
</Banner>`}
        props={["hideIcon: boolean"]}
      />

      <DocsComponent
        title="Custom Icon"
        description="Use 'customIcon' to replace the default icon with any ReactNode rendered inside a styled icon container."
        preview={
          <div className="flex w-full flex-col gap-3">
            <Banner
              variant="success"
              customIcon={
                <Icon
                  icon="hugeicons:checkmark-circle-02"
                  className="h-4 w-4"
                />
              }
            >
              Identity verified — your account is fully secured.
            </Banner>
            <Banner
              variant="danger"
              customIcon={
                <Icon icon="hugeicons:cancel-square" className="h-4 w-4" />
              }
            >
              Suspicious login attempt blocked from an unknown device.
            </Banner>
          </div>
        }
        code={`<Banner
  variant="success"
  customIcon={<Icon icon="hugeicons:checkmark-circle-02" className="h-4 w-4" />}
>
  Identity verified — your account is fully secured.
</Banner>`}
        props={["customIcon: ReactNode"]}
      />

      <DocsComponent
        title="Announcement Carousel"
        description="Cycle through multiple announcements with previous/next controls."
        preview={
          <Banner
            variant="primary"
            hideIcon
            announcements={[
              {
                id: 1,
                content: "🚀 Version 3.0 launched! Check out the changelog.",
              },
              {
                id: 2,
                content: "🎉 We reached 10,000 active developers on Bloom UI!",
              },
              {
                id: 3,
                content:
                  "📚 New video tutorials available in the documentation.",
              },
            ]}
          />
        }
        code={`<Banner
  variant="primary"
  hideIcon
  announcements={[
    { id: 1, content: "🚀 Version 3.0 launched! Check out the changelog." },
    { id: 2, content: "🎉 We reached 10,000 active developers on Bloom UI!" },
    { id: 3, content: "📚 New video tutorials available in the documentation." },
  ]}
/>`}
        props={["announcements: AnnouncementItem[]"]}
      />

      <DocsComponent
        title="Auto-Play Carousel"
        description="Set 'autoPlay' to cycle announcements automatically. Enable 'showProgress' to display a live countdown progress bar at the bottom of the banner — identical to the Alert timer pattern."
        preview={
          <Banner
            variant="primary"
            hideIcon
            autoPlay
            showProgress
            autoPlayInterval={3500}
            announcements={[
              {
                id: 1,
                content: "🚀 Version 3.0 launched! Check out the changelog.",
              },
              {
                id: 2,
                content: "🎉 We reached 10,000 active developers on Bloom UI!",
              },
              {
                id: 3,
                content:
                  "📚 New video tutorials available in the documentation.",
              },
            ]}
          />
        }
        code={`<Banner
  variant="primary"
  hideIcon
  autoPlay
  showProgress
  autoPlayInterval={3500}
  announcements={[
    { id: 1, content: "🚀 Version 3.0 launched!" },
    { id: 2, content: "🎉 10,000 active developers!" },
    { id: 3, content: "📚 New video tutorials available." },
  ]}
/>`}
        props={[
          "autoPlay: boolean",
          "autoPlayInterval: number",
          "showProgress: boolean",
        ]}
      />

      <DocsComponent
        title="Sticky Positioning & LocalStorage Persistence"
        description="Fix banner at top or bottom with 'position' prop ('sticky-top', 'sticky-bottom'). Persist dismiss state across reloads with 'storageKey'."
        preview={
          <Banner
            variant="success"
            position="static"
            storageKey="docs-banner-demo-v1"
            isDismissible
            icon={<Icon icon="hugeicons:gift" className="h-4 w-4" />}
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
        props={[
          "position: 'static' | 'sticky-top' | 'sticky-bottom'",
          "storageKey: string",
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Banner"
        description="Properties to configure the Banner component."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The visual style variant of the banner.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'2xl'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Controls the border radius. Ignored when position is sticky.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">position</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'static' | 'sticky-top' | 'sticky-bottom'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'static'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Controls sticky positioning behavior.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">icon</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Icon displayed inside a colored badge container at the
                    start.
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
                    Overrides the icon prop with a custom ReactNode.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">hideIcon</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Suppresses the icon slot entirely.
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
                    Shows a dismiss (×) button.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    onDismiss
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    () =&gt; void
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Callback fired when the dismiss button is clicked.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">action</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Action element placed before the dismiss button.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    announcements
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    AnnouncementItem[]
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Array of announcement items for carousel mode.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">autoPlay</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Auto-advances the carousel at a fixed interval.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    autoPlayInterval
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">4000</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Interval in milliseconds between auto-play slides.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    showProgress
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays a progress bar at the bottom indicating time until
                    the next slide.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    storageKey
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    localStorage key to persist the dismissed state across
                    reloads.
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
