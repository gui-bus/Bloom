"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";
import { accordionCode } from "@/components/ui/accordion/accordion.code";
import { Button } from "@/components/ui/button/button";
import { Separator } from "@/components/ui/separator/separator";

export default function AccordionPage() {
  const [controlledValue, setControlledValue] =
    React.useState<string>("item-2");

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Accordion"
        description="A vertically stacked set of interactive headings that expand or collapse associated content sections, supporting controlled states, custom icons, and disabled items."
      />

      <ImportSnippet
        importCode={`import { Accordion } from "@/components/ui/accordion/accordion";`}
      />

      <InstallationBlock componentName="accordion" />

      <CodeBlock
        code={accordionCode}
        componentName="accordion.tsx"
        description="Accordion component powered by Radix Primitives supporting controlled state, start/end content icons, disabled states, and visual variants."
        tags={["React", "Radix UI", "Tailwind", "UI Component", "Accordion"]}
      />

      <DocsComponent
        title="Default"
        description="A standard, uncontrolled accordion allowing vertical expansion and collapse of content sections."
        preview={
          <div className="w-full">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to WAI-ARIA standards and handles keyboard
                  navigation automatically.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is it styled with Tailwind CSS?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It utilizes semantic Tailwind CSS tokens for consistent
                  light and dark mode styling.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I use it with custom icons?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. You can pass startContent or endContent to render custom
                  icons inside triggers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        }
        code={`<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to WAI-ARIA standards.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled with Tailwind CSS?</AccordionTrigger>
    <AccordionContent>
      Yes. It utilizes semantic Tailwind CSS tokens.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        props={["type: 'single' | 'multiple'", "collapsible: boolean"]}
      />

      <DocsComponent
        title="Controlled"
        description="Control which panel is currently open programmatically using the 'value' and 'onValueChange' props."
        preview={
          <div className="w-full  space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="sm"
                variant={controlledValue === "item-1" ? "default" : "bordered"}
                onClick={() => setControlledValue("item-1")}
              >
                Open Item 1
              </Button>
              <Button
                size="sm"
                variant={controlledValue === "item-2" ? "default" : "bordered"}
                onClick={() => setControlledValue("item-2")}
              >
                Open Item 2
              </Button>
              <Button
                size="sm"
                variant={controlledValue === "item-3" ? "default" : "bordered"}
                onClick={() => setControlledValue("item-3")}
              >
                Open Item 3
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setControlledValue("")}
              >
                Close All
              </Button>
            </div>

            <div className="text-xs font-mono text-muted-foreground bg-muted p-2 rounded-md">
              Active value:{" "}
              <span className="text-primary font-bold">
                {controlledValue || "(none)"}
              </span>
            </div>

            <Accordion
              type="single"
              collapsible
              value={controlledValue}
              onValueChange={setControlledValue}
              variant="bordered"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>User Profile</AccordionTrigger>
                <AccordionContent>
                  Manage your personal information, avatar, and account
                  preferences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Security & Authentication</AccordionTrigger>
                <AccordionContent>
                  Configure two-factor authentication, change your password, and
                  view active sessions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Notifications</AccordionTrigger>
                <AccordionContent>
                  Choose which alerts you wish to receive via email or push
                  notifications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        }
        code={`const [value, setValue] = useState("item-2");

return (
  <div className="space-y-4">
    <div className="flex gap-2">
      <Button onClick={() => setValue("item-1")}>Open Item 1</Button>
      <Button onClick={() => setValue("item-2")}>Open Item 2</Button>
      <Button onClick={() => setValue("")}>Close All</Button>
    </div>

    <Accordion type="single" collapsible value={value} onValueChange={setValue} variant="bordered">
      <AccordionItem value="item-1">
        <AccordionTrigger>User Profile</AccordionTrigger>
        <AccordionContent>Manage your personal information.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Security & Authentication</AccordionTrigger>
        <AccordionContent>Configure two-factor authentication.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);`}
        props={[
          "value: string | string[]",
          "onValueChange: (value: any) => void",
        ]}
      />

      <DocsComponent
        title="Start & End Icons (startContent & endContent)"
        description="Add custom icons before the title using 'startContent', or customize/replace the right-side arrow indicator using 'endContent'."
        preview={
          <div className="w-full ">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              variant="splitted"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger
                  startContent={
                    <Icon
                      icon="hugeicons:user-02"
                      className="size-5 text-primary"
                    />
                  }
                >
                  My Account
                </AccordionTrigger>
                <AccordionContent>
                  Update your display name, contact email, and profile avatar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger
                  startContent={
                    <Icon
                      icon="hugeicons:security-check"
                      className="size-5 text-emerald-500"
                    />
                  }
                  endContent={
                    <Icon
                      icon="hugeicons:shield-02"
                      className="size-4 text-emerald-500"
                    />
                  }
                >
                  Advanced Security (Custom End Icon)
                </AccordionTrigger>
                <AccordionContent>
                  Data protection featuring end-to-end encryption and physical
                  security keys.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger
                  startContent={
                    <Icon
                      icon="hugeicons:settings-02"
                      className="size-5 text-amber-500"
                    />
                  }
                  endContent={
                    <Icon
                      icon="hugeicons:plus-sign"
                      className="size-4 text-amber-500"
                    />
                  }
                >
                  System Settings
                </AccordionTrigger>
                <AccordionContent>
                  Adjust time zone, application language, and color theme.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        }
        code={`<Accordion type="single" collapsible defaultValue="item-1" variant="splitted">
  <AccordionItem value="item-1">
    <AccordionTrigger startContent={<Icon icon="hugeicons:user-02" className="size-5 text-primary" />}>
      My Account
    </AccordionTrigger>
    <AccordionContent>Update display name and email.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger
      startContent={<Icon icon="hugeicons:security-check" className="size-5 text-emerald-500" />}
      endContent={<Icon icon="hugeicons:shield-02" className="size-4 text-emerald-500" />}
    >
      Advanced Security
    </AccordionTrigger>
    <AccordionContent>End-to-end encryption data protection.</AccordionContent>
  </AccordionItem>
</Accordion>`}
        props={[
          "startContent: ReactNode",
          "endContent: ReactNode",
          "hideIndicator: boolean",
        ]}
      />

      <DocsComponent
        title="Disabled State (isDisabled)"
        description="Disable specific accordion items or an entire accordion block using the 'isDisabled' (or 'disabled') prop."
        preview={
          <div className="w-full  space-y-6">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Specific Disabled Item
              </p>
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                variant="bordered"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    startContent={
                      <Icon icon="hugeicons:package" className="size-5" />
                    }
                  >
                    Free Plan (Active)
                  </AccordionTrigger>
                  <AccordionContent>
                    Access to up to 3 projects and community support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" isDisabled>
                  <AccordionTrigger
                    startContent={
                      <Icon icon="hugeicons:crown" className="size-5" />
                    }
                  >
                    Enterprise Plan (Locked / Disabled)
                  </AccordionTrigger>
                  <AccordionContent>
                    Dedicated enterprise features with 99.9% uptime SLA.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Entire Accordion Disabled
              </p>
              <Accordion
                type="single"
                collapsible
                isDisabled
                variant="bordered"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Unavailable Section</AccordionTrigger>
                  <AccordionContent>
                    Content currently unavailable.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        }
        code={`
<Accordion type="single" collapsible defaultValue="item-1" variant="bordered">
  <AccordionItem value="item-1">
    <AccordionTrigger>Free Plan</AccordionTrigger>
    <AccordionContent>Access to basic projects.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" isDisabled>
    <AccordionTrigger>Enterprise Plan (Disabled)</AccordionTrigger>
    <AccordionContent>Locked content.</AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible isDisabled variant="bordered">
  <AccordionItem value="item-1">
    <AccordionTrigger>Unavailable Section</AccordionTrigger>
    <AccordionContent>Content unavailable.</AccordionContent>
  </AccordionItem>
</Accordion>`}
        props={["isDisabled: boolean"]}
      />

      <DocsComponent
        title="Variants"
        description="Choose from multiple visual styles using the 'variant' prop ('default', 'bordered', 'splitted', 'shadow', 'compact')."
        preview={
          <div className="w-full  space-y-6">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="default"
              </span>
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                variant="default"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Default Accordion</AccordionTrigger>
                  <AccordionContent>
                    Standard style with clean, subtle bottom dividers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="bordered"
              </span>
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                variant="bordered"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bordered Accordion</AccordionTrigger>
                  <AccordionContent>
                    Enclosed by a clean outer border frame.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="splitted"
              </span>
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                variant="splitted"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Splitted Accordion Item 1</AccordionTrigger>
                  <AccordionContent>
                    Each panel rendered as an independent card with spacing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Splitted Accordion Item 2</AccordionTrigger>
                  <AccordionContent>
                    Ideal for clear visual separation between distinct topics.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="shadow"
              </span>
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                variant="shadow"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Shadow Accordion</AccordionTrigger>
                  <AccordionContent>
                    Features moderate drop shadows for prominent interface
                    hierarchy.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="compact"
              </span>
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                variant="compact"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Compact Accordion</AccordionTrigger>
                  <AccordionContent>
                    Reduced vertical padding designed for high-density layouts.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        }
        code={`<Accordion type="single" collapsible variant="splitted">
  <AccordionItem value="item-1">
    <AccordionTrigger>Splitted Accordion</AccordionTrigger>
    <AccordionContent>Independent card panel item.</AccordionContent>
  </AccordionItem>
</Accordion>`}
        props={[
          "variant: 'default' | 'bordered' | 'splitted' | 'shadow' | 'compact'",
        ]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Accordion (Root)"
        description="Properties for configuring the Root Accordion container."
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
                  <td className="px-3 py-2 font-mono text-primary">type</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'single' | 'multiple'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'single'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Determines whether single or multiple items can be opened
                    simultaneously.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">value</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"string | string[]"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Controlled open state value managed via React useState.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    defaultValue
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"string | string[]"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The initial value of item(s) to expand when uncontrolled.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    onValueChange
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {"(value: any) => void"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Event handler called when the expanded state changes.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'splitted' | 'shadow' | 'compact'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual variant style of the Accordion container.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    collapsible
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    When type is 'single', allows closing an open item by
                    clicking its trigger again.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    isDisabled
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction with all accordion items.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — AccordionItem"
        description="Properties for configuring individual Accordion item wrappers."
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
                  <td className="px-3 py-2 font-mono text-primary">value</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    A unique value identifying the item panel.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    isDisabled
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction with this specific item.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — AccordionTrigger"
        description="Properties for configuring the Accordion header trigger element."
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
                  <td className="px-3 py-2 font-mono text-primary">
                    startContent
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Element (such as an icon) rendered before the trigger title.
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
                    Custom element or icon that replaces the default right-hand
                    indicator arrow.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    hideIndicator
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Hides the right-hand arrow indicator completely.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    isDisabled
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables this individual trigger element.
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
