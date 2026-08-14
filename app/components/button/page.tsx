"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Button } from "@/components/ui/button/button";
import { buttonCode } from "@/components/ui/button/button.code";
import { buttonCSSCode } from "@/components/ui/button/button.css.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { rippleCode } from "@/lib/ripple/ripple.code";
import { useRippleCode } from "@/lib/ripple/useRipple.code";

export default function ButtonComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Button"
        description="A button is an interactive UI element used to trigger actions such as navigation, form submissions, or contextual commands."
      />

      <ImportSnippet
        importCode={`import { Button } from "@/components/ui/button/button";`}
      />

      <InstallationBlock componentName="button" />

      <Tabs defaultValue="button" variant="underline">
        <TabsList background={false}>
          <TabsTrigger
            value="button"
            color="default"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            button.tsx
          </TabsTrigger>

          <TabsTrigger
            value="rippleC"
            color="default"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            ripple.tsx
          </TabsTrigger>

          <TabsTrigger
            value="globals"
            color="default"
            startContent={<Icon icon="skill-icons:css" className="size-5" />}
          >
            globals.css
          </TabsTrigger>

          <TabsTrigger
            value="rippleH"
            color="default"
            startContent={
              <Icon icon="skill-icons:typescript" className="size-5" />
            }
          >
            useRipple.ts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="button">
          <CodeBlock
            code={buttonCode}
            componentName="button.tsx"
            description="Main implementation of the Button component, handling all visual variants, interactive states, and user interactions."
            tags={[
              "React",
              "Tailwind",
              "UI Component",
              "Accessibility",
              "Button",
            ]}
          />
        </TabsContent>

        <TabsContent value="globals">
          <CodeBlock
            code={buttonCSSCode}
            componentName="globals.css"
            language="css"
            description="Global CSS variables and utility classes used by the Button component for consistent spacing, colors, and styling."
            tags={["CSS", "Tailwind", "Design Tokens", "Styling"]}
          />
        </TabsContent>

        <TabsContent value="rippleC">
          <CodeBlock
            code={rippleCode}
            componentName="ripple.tsx"
            language="typescript"
            description="Implementation of the ripple animation effect for buttons, handling visual feedback on user clicks."
            tags={["React", "TypeScript", "UI Animation", "Interaction"]}
          />
        </TabsContent>

        <TabsContent value="rippleH">
          <CodeBlock
            code={useRippleCode}
            componentName="useRipple.ts"
            language="typescript"
            description="Custom React hook that encapsulates the ripple effect logic for reuse across button components."
            tags={["React", "TypeScript", "Custom Hook", "Animation"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A standard button component displaying a neutral primary action state."
        preview={
          <div className="w-full flex items-center gap-4">
            <Button>Default Button</Button>
          </div>
        }
        code={`<Button>Default Button</Button>`}
      />

      <DocsComponent
        title="Variants"
        description="Defines the visual appearance of buttons through the 'variant' prop."
        preview={
          <div className="w-full flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="bordered">Bordered</Button>
            <Button variant="flat">Flat</Button>
            <Button variant="light">Light</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="shadow">Shadow</Button>
            <Button variant="link">Link</Button>
          </div>
        }
        code={`<div className="flex flex-wrap gap-4">
  <Button variant="default">Default</Button>
  <Button variant="bordered">Bordered</Button>
  <Button variant="flat">Flat</Button>
  <Button variant="light">Light</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="shadow">Shadow</Button>
  <Button variant="link">Link</Button>
</div>`}
        props={[
          "variant: 'default' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow' | 'link'",
        ]}
      />

      <DocsComponent
        title="Colors"
        description="Defines the button color scheme through the 'color' prop. Each color is shown across all seven variants for a complete reference."
        preview={
          <div className="w-full flex flex-col gap-6">
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
                  <Button color={color} variant="default">
                    Default
                  </Button>
                  <Button color={color} variant="bordered">
                    Bordered
                  </Button>
                  <Button color={color} variant="flat">
                    Flat
                  </Button>
                  <Button color={color} variant="light">
                    Light
                  </Button>
                  <Button color={color} variant="ghost">
                    Ghost
                  </Button>
                  <Button color={color} variant="shadow">
                    Shadow
                  </Button>
                  <Button color={color} variant="link">
                    Link
                  </Button>
                </div>
              </div>
            ))}
          </div>
        }
        code={`<Button color="primary" variant="default">Default</Button>
<Button color="primary" variant="bordered">Bordered</Button>
<Button color="primary" variant="flat">Flat</Button>
<Button color="primary" variant="light">Light</Button>
<Button color="primary" variant="ghost">Ghost</Button>
<Button color="primary" variant="shadow">Shadow</Button>
<Button color="primary" variant="link">Link</Button>`}
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
      />

      <DocsComponent
        title="Sizes"
        description="Adjusts the visual scale of buttons through the 'size' prop."
        preview={
          <div className="w-full flex flex-wrap items-center gap-3">
            <Button size="xs">xs</Button>
            <Button size="sm">sm</Button>
            <Button size="md">md</Button>
            <Button size="lg">lg</Button>
            <Button size="xl">xl</Button>
            <Button size="2xl">2xl</Button>
            <Button size="3xl">3xl</Button>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-3">
  <Button size="xs">xs</Button>
  <Button size="sm">sm</Button>
  <Button size="md">md</Button>
  <Button size="lg">lg</Button>
  <Button size="xl">xl</Button>
  <Button size="2xl">2xl</Button>
  <Button size="3xl">3xl</Button>
</div>`}
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      <DocsComponent
        title="Radius"
        description="Adjusts the border radius of buttons through the 'radius' prop."
        preview={
          <div className="w-full flex flex-wrap items-center gap-3">
            <Button radius="none">none</Button>
            <Button radius="xs">xs</Button>
            <Button radius="sm">sm</Button>
            <Button radius="md">md</Button>
            <Button radius="lg">lg</Button>
            <Button radius="xl">xl</Button>
            <Button radius="2xl">2xl</Button>
            <Button radius="3xl">3xl</Button>
            <Button radius="full">Full</Button>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-3">
  <Button radius="none">none</Button>
  <Button radius="sm">sm</Button>
  <Button radius="md">md</Button>
  <Button radius="lg">lg</Button>
  <Button radius="xl">xl</Button>
  <Button radius="full">Full</Button>
</div>`}
        props={[
          "radius: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
        ]}
      />

      <DocsComponent
        title="Hovers"
        description="Controls micro-interaction motion on user hover using the 'hover' prop ('scale' or 'lift')."
        preview={
          <div className="w-full flex flex-wrap items-center gap-4">
            <Button hover="scale">Scale Hover</Button>
            <Button hover="lift">Lift Hover</Button>
          </div>
        }
        code={`<div className="flex items-center gap-4">
  <Button hover="scale">Scale Hover</Button>
  <Button hover="lift">Lift Hover</Button>
</div>`}
        props={["hover: 'scale' | 'lift'"]}
      />

      <DocsComponent
        title="Icons"
        description="Adds icons to the button at the start or end position to enhance visual recognition."
        preview={
          <div className="w-full flex flex-wrap gap-4">
            <Button
              color="primary"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
            >
              Home
            </Button>
            <Button
              color="success"
              variant="bordered"
              endContent={
                <Icon icon="hugeicons:arrow-right-01" className="size-5" />
              }
            >
              Continue
            </Button>
          </div>
        }
        code={`<Button
  color="primary"
  startContent={<Icon icon="hugeicons:home-03" className="size-5" />}
>
  Home
</Button>`}
        props={["startContent: ReactNode", "endContent: ReactNode"]}
      />

      <DocsComponent
        title="Icon Only"
        description="Displays a compact button with only an icon. Mandatory 'ariaLabel' ensures full accessibility."
        preview={
          <div className="w-full flex flex-wrap items-center gap-4">
            <Button
              isIconOnly
              ariaLabel="Home"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
            />
            <Button
              isIconOnly
              color="primary"
              ariaLabel="Settings"
              startContent={
                <Icon icon="hugeicons:settings-01" className="size-5" />
              }
            />
            <Button
              isIconOnly
              color="danger"
              variant="bordered"
              ariaLabel="Delete"
              startContent={
                <Icon icon="hugeicons:delete-02" className="size-5" />
              }
            />
          </div>
        }
        code={`<Button
  isIconOnly
  color="primary"
  ariaLabel="Settings"
  startContent={<Icon icon="hugeicons:settings-01" className="size-5" />}
/>`}
        props={["isIconOnly: boolean", "ariaLabel: string"]}
      />

      <DocsComponent
        title="Loading state"
        description="Displays an active loading spinner and disables user interaction during async processes."
        preview={
          <div className="w-full flex flex-wrap gap-4">
            <Button isLoading color="primary">
              Loading...
            </Button>
            <Button isLoading variant="bordered">
              Processing
            </Button>
          </div>
        }
        code={`<Button isLoading color="primary">Loading...</Button>`}
        props={["isLoading: boolean", "loadingText: string"]}
      />

      <DocsComponent
        title="Full Width"
        description="Expands the button to span 100% of its parent container width."
        preview={
          <div className="w-full max-w-sm border border-border p-4 rounded-xl">
            <Button isFullWidth color="primary">
              Full Width Action
            </Button>
          </div>
        }
        code={`<Button isFullWidth color="primary">
  Full Width Action
</Button>`}
        props={["isFullWidth: boolean"]}
      />

      <DocsComponent
        title="Disable Ripple"
        description="Set 'disableRipple' to remove the click ripple effect. Useful for icon-only buttons or when integrating with custom interaction feedback."
        preview={
          <div className="w-full flex flex-wrap gap-4">
            <Button color="primary">With Ripple</Button>
            <Button color="primary" disableRipple>
              No Ripple
            </Button>
            <Button
              isIconOnly
              ariaLabel="Settings"
              color="primary"
              startContent={
                <Icon icon="hugeicons:settings-01" className="size-5" />
              }
            />
            <Button
              isIconOnly
              ariaLabel="Settings no ripple"
              color="primary"
              disableRipple
              startContent={
                <Icon icon="hugeicons:settings-01" className="size-5" />
              }
            />
          </div>
        }
        code={`<Button color="primary">With Ripple</Button>
<Button color="primary" disableRipple>No Ripple</Button>`}
        props={["disableRipple: boolean"]}
      />

      <DocsComponent
        title="Copy Button"
        description="A specialized button type configured by passing the 'isCopy' prop. When clicked, it copies the string text (either from its 'copyText' property or directly from its text children) and transitions to showing a smooth animated checkmark and a 'Copied' state."
        preview={
          <div className="w-full flex items-center gap-4">
            <Button isCopy copyText="npm install bloom-ui">
              Copy command
            </Button>
            <Button
              isCopy
              variant="flat"
              color="primary"
              copyText="Hello from Bloom UI!"
            >
              Copy Greeting
            </Button>
          </div>
        }
        code={`<Button isCopy copyText="npm install bloom-ui">
  Copy command
</Button>
<Button isCopy variant="flat" color="primary" copyText="Hello from Bloom UI!">
  Copy Greeting
</Button>`}
        props={["isCopy: boolean", "copyText: string"]}
      />

      <DocsComponent
        title="Disabled State"
        description="Disables the button, preventing interaction and applying muted opacity styling."
        preview={
          <div className="w-full flex flex-wrap gap-4">
            <Button isDisabled>Disabled Button</Button>
            <Button isDisabled color="primary">
              Disabled Primary
            </Button>
          </div>
        }
        code={`<Button isDisabled color="primary">Disabled Primary</Button>`}
        props={["isDisabled: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — Button"
        description="Core properties for configuring the Button component."
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
                    'default' | 'bordered' | 'light' | 'flat' | 'ghost' |
                    'shadow' | 'link'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual style variant of the button.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' |
                    'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Color theme of the button.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'md'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Controls size scale and density.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |
                    'full'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'xl'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Border radius scale.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">hover</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'scale' | 'lift'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">'scale'</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Micro-animation hover behavior.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isIconOnly
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Compact icon-only button mode. Requires 'ariaLabel'.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    isLoading
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Shows loading spinner and disables interactions.
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
                    Disables user interaction.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    disableRipple
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables click ripple effect.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isCopy</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Enables copying functionality and animation.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">copyText</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    The specific text to be copied to the clipboard. Defaults to
                    children.
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
