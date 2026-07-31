"use client";

import { ImportSnippet } from "@/components/core/importSnippet";
import { DocsPagination } from "@/components/core/docsPagination";
import { InstallationBlock } from "@/components/core/installationBlock";
import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
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
    <div className="space-y-8">
      <DocsTitle
        title="Avatar"
        description="Avatars represent a user or entity using an image, initials fallback, editable photo uploads, or status indicator. Built on top of Radix UI primitive with support for interactive press states and standardized neutral dark/light themes."
      />

      <ImportSnippet importCode={`import { Avatar } from "@/components/ui/avatar/avatar";`} />

      <InstallationBlock componentName="avatar" />

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
            description="Avatar component featuring image fallbacks, pressable interactions, editable overlays, status dots, and clean dark/light neutral colors."
            tags={["React", "Tailwind", "Radix UI", "UI Component", "Avatar"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A standard avatar component displaying a user image with an automated initials fallback when the image is absent or loading."
        preview={
          <div className="w-full flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
              <AvatarFallback>SJ</AvatarFallback>
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
    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
    <AvatarFallback>SJ</AvatarFallback>
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

      {/* Editable Upload Overlay */}
      <DocsComponent
        title="Editable Photo Upload Overlay (isEditable)"
        description="Render a hover photo upload icon overlay using 'isEditable' and trigger 'onUpload' callback."
        preview={
          <div className="w-full flex flex-wrap items-center gap-5">
            <Avatar size="xl" isEditable onUpload={() => alert("Upload photo clicked!")}>
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <Avatar size="xl" isEditable isBordered color="primary" onUpload={() => alert("Upload photo clicked!")}>
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<Avatar size="xl" isEditable onUpload={() => handleUpload()}>
  <AvatarImage src="..." alt="Sarah Jenkins" />
  <AvatarFallback>SJ</AvatarFallback>
</Avatar>`}
        props={["isEditable: boolean", "onUpload: () => void"]}
      />

      {/* Pressable */}
      <DocsComponent
        title="Pressable Avatars (isPressable)"
        description="Enable interactive press behavior using 'isPressable' for profile triggers, user menus, or clickable list avatars."
        preview={
          <div className="w-full flex flex-wrap items-center gap-5">
            <Avatar isPressable onClick={() => alert("Clicked avatar 1")}>
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Jenkins" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <Avatar isPressable isBordered color="primary" onClick={() => alert("Clicked avatar 2")}>
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Alex Rivera" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <Avatar isPressable color="success" onClick={() => alert("Clicked avatar 3")}>
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-5">
  <Avatar isPressable onClick={() => console.log("Clicked")}>
    <AvatarImage src="..." alt="Sarah Jenkins" />
    <AvatarFallback>SJ</AvatarFallback>
  </Avatar>

  <Avatar isPressable isBordered color="primary" onClick={() => console.log("Clicked")}>
    <AvatarImage src="..." alt="Alex Rivera" />
    <AvatarFallback>AR</AvatarFallback>
  </Avatar>

  <Avatar isPressable color="success" onClick={() => console.log("Clicked")}>
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
</div>`}
        props={["isPressable: boolean"]}
      />

      {/* Colors & Bordered */}
      <DocsComponent
        title="Colors & Bordered Rings"
        description="Pair 'isBordered' with any design system color to highlight user status, active stories, or primary roles. Fallbacks automatically adapt soft accent colors."
        preview={
          <div className="w-full flex flex-wrap items-center gap-4">
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
              <AvatarFallback>SU</AvatarFallback>
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
  <Avatar isBordered color="default"><AvatarFallback>DF</AvatarFallback></Avatar>
  <Avatar isBordered color="primary"><AvatarFallback>PR</AvatarFallback></Avatar>
  <Avatar isBordered color="secondary"><AvatarFallback>SC</AvatarFallback></Avatar>
  <Avatar isBordered color="accent"><AvatarFallback>AC</AvatarFallback></Avatar>
  <Avatar isBordered color="success"><AvatarFallback>SU</AvatarFallback></Avatar>
  <Avatar isBordered color="warning"><AvatarFallback>WR</AvatarFallback></Avatar>
  <Avatar isBordered color="danger"><AvatarFallback>DG</AvatarFallback></Avatar>
</div>`}
        props={["isBordered: boolean", "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'"]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Scales seamlessly from 'xs' (24px) to '3xl' (80px) across predefined design scale tokens."
        preview={
          <div className="w-full flex flex-wrap items-center gap-4">
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
  <Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
  <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
  <Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>
  <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
  <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
  <Avatar size="2xl"><AvatarFallback>2X</AvatarFallback></Avatar>
  <Avatar size="3xl"><AvatarFallback>3X</AvatarFallback></Avatar>
</div>`}
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      {/* Status Indicators */}
      <DocsComponent
        title="Status Indicators"
        description="Adds a status dot indicator (online, away, offline, dnd) positioned at any corner."
        preview={
          <div className="w-full flex flex-wrap items-center gap-6">
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
  <Avatar status="success" statusPosition="bottom-right"><AvatarFallback>ON</AvatarFallback></Avatar>
  <Avatar status="warning" statusPosition="top-right"><AvatarFallback>AW</AvatarFallback></Avatar>
  <Avatar status="danger" statusPosition="bottom-left"><AvatarFallback>OFF</AvatarFallback></Avatar>
  <Avatar status="secondary" statusPosition="top-left"><AvatarFallback>DND</AvatarFallback></Avatar>
</div>`}
        props={["status: AvatarColor", "statusPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Avatar Table */}
      <DocsComponent
        title="Props — Avatar"
        description="Properties for configuring the Avatar root component."
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
                  <td className="px-3 py-2 font-mono text-primary">isEditable</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Renders a photo camera icon overlay on hover for image updates.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onUpload</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">() =&gt; void</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback triggered when clicking the upload overlay icon.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Sets the dimension scale of the avatar.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Theme color for the outer ring when isBordered is true, and for the fallback background.
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
