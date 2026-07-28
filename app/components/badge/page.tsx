import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Badge } from "@/components/ui/badge/badge";
import { badgeCode } from "@/components/ui/badge/badge.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function BadgeComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Badge"
        description="A compact label used to highlight status, categories, or contextual metadata. Supports multiple color palettes, visual variants, sizes, and optional dot indicators or icon slots."
      />

      <Tabs defaultValue="badge">
        <TabsList background={false}>
          <TabsTrigger
            value="badge"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            badge.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="badge">
          <CodeBlock
            code={badgeCode}
            componentName="badge.tsx"
            description="Core implementation of the Badge component with color, variant, size, radius, dot, and slot support."
            tags={["React", "Tailwind", "UI Component", "Accessibility"]}
          />
        </TabsContent>
      </Tabs>

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Controls the visual appearance of the badge. 'flat' is the default and works well for most contexts."
        preview={
          <div className="flex flex-wrap gap-3">
            <Badge variant="default" color="primary">Default</Badge>
            <Badge variant="bordered" color="primary">Bordered</Badge>
            <Badge variant="flat" color="primary">Flat</Badge>
            <Badge variant="light" color="primary">Light</Badge>
          </div>
        }
        props={["variant: 'default' | 'bordered' | 'flat' | 'light'"]}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Semantic color scale for the badge. Use it to communicate context (success, warning, danger, etc.)."
        preview={
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3">
              <Badge color="default">Default</Badge>
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="accent">Accent</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="danger">Danger</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge color="default" variant="bordered">Default</Badge>
              <Badge color="primary" variant="bordered">Primary</Badge>
              <Badge color="secondary" variant="bordered">Secondary</Badge>
              <Badge color="accent" variant="bordered">Accent</Badge>
              <Badge color="success" variant="bordered">Success</Badge>
              <Badge color="warning" variant="bordered">Warning</Badge>
              <Badge color="danger" variant="bordered">Danger</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge color="default" variant="default">Default</Badge>
              <Badge color="primary" variant="default">Primary</Badge>
              <Badge color="secondary" variant="default">Secondary</Badge>
              <Badge color="accent" variant="default">Accent</Badge>
              <Badge color="success" variant="default">Success</Badge>
              <Badge color="warning" variant="default">Warning</Badge>
              <Badge color="danger" variant="default">Danger</Badge>
            </div>
          </div>
        }
        props={["color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Three size options to adapt to different UI contexts."
        preview={
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="sm" color="primary">Small</Badge>
            <Badge size="md" color="primary">Medium</Badge>
            <Badge size="lg" color="primary">Large</Badge>
          </div>
        }
        props={["size: 'sm' | 'md' | 'lg'"]}
      />

      {/* Radius */}
      <DocsComponent
        title="Radius"
        description="Control the border radius. Defaults to 'full' for a pill shape."
        preview={
          <div className="flex flex-wrap items-center gap-3">
            <Badge radius="none" color="primary">None</Badge>
            <Badge radius="sm" color="primary">Small</Badge>
            <Badge radius="md" color="primary">Medium</Badge>
            <Badge radius="lg" color="primary">Large</Badge>
            <Badge radius="xl" color="primary">XL</Badge>
            <Badge radius="full" color="primary">Full</Badge>
          </div>
        }
        props={["radius: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'"]}
      />

      {/* Dot */}
      <DocsComponent
        title="Dot indicator"
        description="Adds a small colored dot before the label — useful for status or presence indicators."
        preview={
          <div className="flex flex-wrap gap-3">
            <Badge dot color="success">Online</Badge>
            <Badge dot color="warning">Away</Badge>
            <Badge dot color="danger">Offline</Badge>
            <Badge dot color="default">Unknown</Badge>
          </div>
        }
        props={["dot: boolean"]}
      />

      {/* Start/End Content */}
      <DocsComponent
        title="Icon slots"
        description="Use 'startContent' or 'endContent' to place icons or any ReactNode inside the badge."
        preview={
          <div className="flex flex-wrap gap-3">
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
          </div>
        }
        props={["startContent: ReactNode", "endContent: ReactNode"]}
      />
    </main>
  );
}
