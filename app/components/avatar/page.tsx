import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Avatar",
  description: "An image element with a fallback for representing a user or entity.",
};
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar/avatar";
import { avatarCode } from "@/components/ui/avatar/avatar.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function AvatarPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Avatar"
        description="Avatars represent a user or entity using an image, initials, or fallback icon. Built on top of Radix UI primitive with support for sizes, border indicators, and online status."
      />

      <Tabs defaultValue="avatar">
        <TabsList background={false}>
          <TabsTrigger
            value="avatar"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            avatar.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="avatar">
          <CodeBlock
            code={avatarCode}
            componentName="avatar.tsx"
            description="Avatar component built on Radix UI primitive with fallbacks, borders, status dots and design tokens."
            tags={["React", "Tailwind", "Radix UI", "UI Component"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic & Fallback */}
      <DocsComponent
        title="Basic & Fallbacks"
        description="Renders the user image or gracefully falls back to initials when the image fails or is absent."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="User" />
              <AvatarFallback>GB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="invalid-url.jpg" alt="Broken link" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-4">
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="User" />
    <AvatarFallback>GB</AvatarFallback>
  </Avatar>

  <Avatar>
    <AvatarImage src="invalid-url.jpg" alt="Broken link" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>

  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
</div>`}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scales from 'xs' to '3xl' across predefined design system sizes."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Avatar size="xs">
              <AvatarFallback>XS</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="md">
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar size="xl">
              <AvatarFallback>XL</AvatarFallback>
            </Avatar>
            <Avatar size="2xl">
              <AvatarFallback>2X</AvatarFallback>
            </Avatar>
            <Avatar size="3xl">
              <AvatarFallback>3X</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-4">
  <Avatar size="xs">
    <AvatarFallback>XS</AvatarFallback>
  </Avatar>
  <Avatar size="sm">
    <AvatarFallback>SM</AvatarFallback>
  </Avatar>
  <Avatar size="md">
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar size="lg">
    <AvatarFallback>LG</AvatarFallback>
  </Avatar>
  <Avatar size="xl">
    <AvatarFallback>XL</AvatarFallback>
  </Avatar>
  <Avatar size="2xl">
    <AvatarFallback>2X</AvatarFallback>
  </Avatar>
  <Avatar size="3xl">
    <AvatarFallback>3X</AvatarFallback>
  </Avatar>
</div>`}
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      {/* Bordered & Colors */}
      <DocsComponent
        title="Bordered & Color Themes"
        description="Enable 'isBordered' to apply an outer ring ringed with any design system color."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Avatar isBordered color="default">
              <AvatarFallback>DF</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="primary">
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="secondary">
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="accent">
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="success">
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="warning">
              <AvatarFallback>WR</AvatarFallback>
            </Avatar>
            <Avatar isBordered color="danger">
              <AvatarFallback>DG</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-4">
  <Avatar isBordered color="default">
    <AvatarFallback>DF</AvatarFallback>
  </Avatar>
  <Avatar isBordered color="primary">
    <AvatarFallback>PR</AvatarFallback>
  </Avatar>
  <Avatar isBordered color="secondary">
    <AvatarFallback>SC</AvatarFallback>
  </Avatar>
  <Avatar isBordered color="accent">
    <AvatarFallback>AC</AvatarFallback>
  </Avatar>
  <Avatar isBordered color="success">
    <AvatarFallback>SC</AvatarFallback>
  </Avatar>
  <Avatar isBordered color="warning">
    <AvatarFallback>WR</AvatarFallback>
  </Avatar>
  <Avatar isBordered color="danger">
    <AvatarFallback>DG</AvatarFallback>
  </Avatar>
</div>`}
        props={["isBordered: boolean", "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Radius */}
      <DocsComponent
        title="Border Radius"
        description="Customizes the avatar corner rounding."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Avatar radius="none">
              <AvatarFallback>SQ</AvatarFallback>
            </Avatar>
            <Avatar radius="md">
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar radius="xl">
              <AvatarFallback>XL</AvatarFallback>
            </Avatar>
            <Avatar radius="full">
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-4">
  <Avatar radius="none">
    <AvatarFallback>SQ</AvatarFallback>
  </Avatar>
  <Avatar radius="md">
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar radius="xl">
    <AvatarFallback>XL</AvatarFallback>
  </Avatar>
  <Avatar radius="full">
    <AvatarFallback>RD</AvatarFallback>
  </Avatar>
</div>`}
        props={["radius: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'"]}
      />

      {/* Status Indicators */}
      <DocsComponent
        title="Status Indicators"
        description="Adds a status dot (online, away, offline) positioned at any corner."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <Avatar status="success" statusPosition="bottom-right">
              <AvatarFallback>ON</AvatarFallback>
            </Avatar>
            <Avatar status="warning" statusPosition="top-right">
              <AvatarFallback>AW</AvatarFallback>
            </Avatar>
            <Avatar status="danger" statusPosition="bottom-left">
              <AvatarFallback>OFF</AvatarFallback>
            </Avatar>
            <Avatar status="secondary" statusPosition="top-left">
              <AvatarFallback>DND</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-6">
  <Avatar status="success" statusPosition="bottom-right">
    <AvatarFallback>ON</AvatarFallback>
  </Avatar>
  <Avatar status="warning" statusPosition="top-right">
    <AvatarFallback>AW</AvatarFallback>
  </Avatar>
  <Avatar status="danger" statusPosition="bottom-left">
    <AvatarFallback>OFF</AvatarFallback>
  </Avatar>
  <Avatar status="secondary" statusPosition="top-left">
    <AvatarFallback>DND</AvatarFallback>
  </Avatar>
</div>`}
        props={["status: AvatarColor", "statusPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'"]}
      />

      {/* Disabled */}
      <DocsComponent
        title="Disabled State"
        description="Applies grayscale filter and reduced opacity when 'isDisabled' is true."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Avatar isDisabled>
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
            <Avatar isDisabled isBordered color="primary">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="User" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-4">
  <Avatar isDisabled>
    <AvatarFallback>DS</AvatarFallback>
  </Avatar>
  <Avatar isDisabled isBordered color="primary">
    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="User" />
    <AvatarFallback>DS</AvatarFallback>
  </Avatar>
</div>`}
        props={["isDisabled: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Avatar"
        description="Properties for configuring the Avatar component."
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
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets the size scale of the avatar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Color theme for outer ring when isBordered is true.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'full'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Corner rounding scale.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isBordered</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables an outer color ring around the avatar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isDisabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction and applies opacity + grayscale.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">status</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">AvatarColor</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Displays a small status dot indicator.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">statusPosition</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'bottom-right'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Corner position for the status dot indicator.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
