"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Badge } from "@/components/ui/badge/badge";
import { badgeCode } from "@/components/ui/badge/badge.code";
import { toast } from "@/components/ui/toast/toast";

export default function BadgeComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Badge"
        description="A compact label used to highlight status, categories, or contextual metadata. Supports multiple color palettes, visual variants, sizes, pressable interactions, and optional dot indicators or icon slots."
      />

      <ImportSnippet
        importCode={`import { Badge } from "@/components/ui/badge/badge";`}
      />

      <InstallationBlock componentName="badge" />

      <CodeBlock
        code={badgeCode}
        componentName="badge.tsx"
        description="Core implementation of the Badge component with color, variant, size, radius, pressable interaction, and slot support."
        tags={["React", "Tailwind", "UI Component", "Accessibility", "Badge"]}
      />

      <DocsComponent
        title="Default"
        description="A standard badge component displaying a neutral status label."
        preview={
          <div className="w-full flex items-center gap-3">
            <Badge>Default Badge</Badge>
          </div>
        }
        code={`<Badge>Default Badge</Badge>`}
      />

      <DocsComponent
        title="Variants"
        description="Controls the visual appearance of the badge. 'flat' is the default and works well for most contexts."
        preview={
          <div className="w-full flex flex-wrap gap-3">
            <Badge variant="default" color="primary">
              Default
            </Badge>
            <Badge variant="bordered" color="primary">
              Bordered
            </Badge>
            <Badge variant="flat" color="primary">
              Flat
            </Badge>
            <Badge variant="ghost" color="primary">
              Ghost
            </Badge>
            <Badge variant="shadow" color="primary">
              Shadow
            </Badge>
            <Badge variant="dot" color="primary">
              Dot
            </Badge>
          </div>
        }
        code={`<div className="flex flex-wrap gap-3">
  <Badge variant="default" color="primary">Default</Badge>
  <Badge variant="bordered" color="primary">Bordered</Badge>
  <Badge variant="flat" color="primary">Flat</Badge>
  <Badge variant="ghost" color="primary">Ghost</Badge>
  <Badge variant="shadow" color="primary">Shadow</Badge>
  <Badge variant="dot" color="primary">Dot</Badge>
</div>`}
        props={[
          "variant: 'default' | 'bordered' | 'flat' | 'ghost' | 'shadow' | 'dot'",
        ]}
      />

      <DocsComponent
        title="Colors"
        description="Semantic color scale for the badge. Each color is shown across all six visual variants for clear comparison."
        preview={
          <div className="w-full flex flex-col gap-4">
            {(
              [
                "default",
                "primary",
                "secondary",
                "accent",
                "success",
                "warning",
                "danger",
              ] as const
            ).map((color) => (
              <div key={color}>
                <span className="text-xs font-mono text-muted-foreground block mb-2">
                  color="{color}"
                </span>
                <div className="flex flex-wrap gap-2">
                  <Badge color={color} variant="flat">
                    Flat
                  </Badge>
                  <Badge color={color} variant="bordered">
                    Bordered
                  </Badge>
                  <Badge color={color} variant="default">
                    Solid
                  </Badge>
                  <Badge color={color} variant="ghost">
                    Ghost
                  </Badge>
                  <Badge color={color} variant="shadow">
                    Shadow
                  </Badge>
                  <Badge color={color} variant="dot">
                    Dot
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        }
        code={`<div className="space-y-4">
  <Badge color="primary" variant="flat">Flat</Badge>
  <Badge color="primary" variant="bordered">Bordered</Badge>
  <Badge color="primary" variant="default">Solid</Badge>
  <Badge color="primary" variant="ghost">Ghost</Badge>
  <Badge color="primary" variant="shadow">Shadow</Badge>
  <Badge color="primary" variant="dot">Dot</Badge>
</div>`}
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
      />

      <DocsComponent
        title="Sizes"
        description="Three size options to adapt to different UI contexts."
        preview={
          <div className="w-full flex flex-wrap items-center gap-3">
            <Badge size="sm" color="primary">
              Small
            </Badge>
            <Badge size="md" color="primary">
              Medium
            </Badge>
            <Badge size="lg" color="primary">
              Large
            </Badge>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-3">
  <Badge size="sm" color="primary">Small</Badge>
  <Badge size="md" color="primary">Medium</Badge>
  <Badge size="lg" color="primary">Large</Badge>
</div>`}
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      <DocsComponent
        title="Radius"
        description="Control the border radius. Defaults to 'full' for a pill shape."
        preview={
          <div className="w-full flex flex-wrap items-center gap-3">
            <Badge radius="none" color="primary">
              None
            </Badge>
            <Badge radius="sm" color="primary">
              Small
            </Badge>
            <Badge radius="md" color="primary">
              Medium
            </Badge>
            <Badge radius="lg" color="primary">
              Large
            </Badge>
            <Badge radius="xl" color="primary">
              XL
            </Badge>
            <Badge radius="full" color="primary">
              Full
            </Badge>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-3">
  <Badge radius="none" color="primary">None</Badge>
  <Badge radius="sm" color="primary">Small</Badge>
  <Badge radius="md" color="primary">Medium</Badge>
  <Badge radius="lg" color="primary">Large</Badge>
  <Badge radius="xl" color="primary">XL</Badge>
  <Badge radius="full" color="primary">Full</Badge>
</div>`}
        props={[
          "radius: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
        ]}
      />

      <DocsComponent
        title="Pressable"
        description="Add 'isPressable' to make badges interactive with scale micro-animations and active press feedback."
        preview={
          <div className="w-full flex flex-wrap items-center gap-3">
            <Badge
              isPressable
              color="primary"
              onClick={() =>
                toast.success("Clicked Primary Badge", {
                  description: "The primary badge was pressed.",
                })
              }
            >
              Clickable Primary
            </Badge>
            <Badge
              isPressable
              color="success"
              variant="bordered"
              onClick={() =>
                toast.success("Clicked Success Badge", {
                  description: "The success badge was pressed.",
                })
              }
            >
              Clickable Success
            </Badge>
            <Badge
              isPressable
              color="danger"
              variant="flat"
              onClick={() =>
                toast.error("Clicked Danger Badge", {
                  description: "The danger badge was pressed.",
                })
              }
            >
              Clickable Danger
            </Badge>
          </div>
        }
        code={`<Badge isPressable color="primary" onClick={() => toast.success("Clicked")}>
  Clickable Primary
</Badge>`}
        props={["isPressable: boolean"]}
      />

      <DocsComponent
        title="Dot indicator"
        description="Adds a small colored dot before the label — useful for status or presence indicators."
        preview={
          <div className="w-full flex flex-wrap gap-3">
            <Badge dot color="success">
              Online
            </Badge>
            <Badge dot color="warning">
              Away
            </Badge>
            <Badge dot color="danger">
              Offline
            </Badge>
            <Badge dot color="default">
              Unknown
            </Badge>
          </div>
        }
        code={`<div className="flex flex-wrap gap-3">
  <Badge dot color="success">Online</Badge>
  <Badge dot color="warning">Away</Badge>
  <Badge dot color="danger">Offline</Badge>
  <Badge dot color="default">Unknown</Badge>
</div>`}
        props={["dot: boolean"]}
      />

      <DocsComponent
        title="Icon slots"
        description="Use 'startContent' or 'endContent' to place icons or any ReactNode inside the badge."
        preview={
          <div className="w-full flex flex-wrap gap-3">
            <Badge
              color="success"
              startContent={
                <Icon
                  icon="hugeicons:checkmark-circle-02"
                  className="size-3.5"
                />
              }
            >
              Verified
            </Badge>
            <Badge
              color="warning"
              startContent={
                <Icon icon="hugeicons:alert-02" className="size-3.5" />
              }
            >
              Warning
            </Badge>
            <Badge
              color="primary"
              endContent={
                <Icon icon="hugeicons:arrow-right-01" className="size-3.5" />
              }
            >
              New
            </Badge>
            <Badge
              color="danger"
              startContent={
                <Icon icon="hugeicons:cancel-circle" className="size-3.5" />
              }
            >
              Error
            </Badge>
          </div>
        }
        code={`<div className="flex flex-wrap gap-3">
  <Badge
    color="success"
    startContent={<Icon icon="hugeicons:checkmark-circle-02" className="size-3.5" />}
  >
    Verified
  </Badge>
  <Badge
    color="warning"
    startContent={<Icon icon="hugeicons:alert-02" className="size-3.5" />}
  >
    Warning
  </Badge>
  <Badge
    color="primary"
    endContent={<Icon icon="hugeicons:arrow-right-01" className="size-3.5" />}
  >
    New
  </Badge>
  <Badge
    color="danger"
    startContent={<Icon icon="hugeicons:cancel-circle" className="size-3.5" />}
  >
    Error
  </Badge>
</div>`}
        props={["startContent: ReactNode", "endContent: ReactNode"]}
      />

      <DocsComponent
        title="Live Pulsing Status"
        description="Use 'isPulsing' to render a live animated pulse ring effect for real-time status indicators (e.g. 'LIVE', 'Recording')."
        preview={
          <div className="w-full flex flex-wrap items-center gap-4">
            <Badge color="danger" isPulsing dot>
              LIVE
            </Badge>
            <Badge color="success" isPulsing dot>
              Recording System
            </Badge>
            <Badge color="warning" isPulsing dot>
              Processing Stream
            </Badge>
            <div className="flex items-center gap-2">
              <Badge color="success" isDot isPulsing />
              <span className="text-xs text-muted-foreground font-medium">
                Server Online
              </span>
            </div>
          </div>
        }
        code={`<Badge color="danger" isPulsing dot>LIVE</Badge>
<Badge color="success" isPulsing dot>Recording System</Badge>
<Badge color="warning" isPulsing dot>Processing Stream</Badge>
<Badge color="success" isDot isPulsing />`}
        props={["isPulsing: boolean", "isDot: boolean"]}
      />

      <DocsComponent
        title="Removable Tags"
        description="Render a dismiss close button inside the badge using 'isRemovable' and 'onRemove'."
        preview={
          <div className="w-full flex flex-wrap items-center gap-2">
            <Badge
              color="primary"
              variant="flat"
              isRemovable
              onRemove={() =>
                toast("Tag removed", {
                  description: "React tag was dismissed.",
                })
              }
            >
              React
            </Badge>
            <Badge
              color="secondary"
              variant="flat"
              isRemovable
              onRemove={() =>
                toast("Tag removed", {
                  description: "Next.js tag was dismissed.",
                })
              }
            >
              Next.js
            </Badge>
            <Badge
              color="accent"
              variant="flat"
              isRemovable
              onRemove={() =>
                toast("Tag removed", {
                  description: "Tailwind tag was dismissed.",
                })
              }
            >
              Tailwind
            </Badge>
          </div>
        }
        code={`<Badge color="primary" isRemovable onRemove={() => handleRemove()}>
  React
</Badge>`}
        props={["isRemovable: boolean", "onRemove: () => void"]}
      />

      <DocsComponent
        title="Props — Badge"
        description="Properties to configure the Badge component."
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
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' |
                    'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets the color theme of the badge.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'flat' | 'ghost' | 'shadow' | 'dot'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'flat'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets the visual variant style.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets the size scale of the badge.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |
                    'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'full'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets border-radius of the badge.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isPressable
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables interactive hover scale and click feedback.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isDisabled
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction and applies opacity filter.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isInvisible
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Hides the badge when true.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">dot</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays a small colored status dot before the content.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    startContent
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Element rendered before the badge label (e.g. an icon).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    endContent
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Element rendered after the badge label.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">live</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables aria-live="polite" region for dynamic status/count
                    updates.
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
