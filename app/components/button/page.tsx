"use client";

import { Icon } from "@iconify/react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
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

      <Tabs defaultValue="button">
        <TabsList background={false}>
          <TabsTrigger
            value="button"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            button.tsx
          </TabsTrigger>

          <TabsTrigger
            value="rippleC"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            ripple.tsx
          </TabsTrigger>

          <TabsTrigger
            value="globals"
            startContent={<Icon icon="skill-icons:css" className="size-5" />}
          >
            globals.css
          </TabsTrigger>

          <TabsTrigger
            value="rippleH"
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

      {/* Default */}
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

      {/* Variants */}
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

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Defines the button color scheme through the 'color' prop. Stacked vertically for clear visual comparison."
        preview={
          <div className="w-full flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="default"
              </span>
              <div className="flex flex-wrap gap-3">
                <Button color="default" variant="default">
                  Solid
                </Button>
                <Button color="default" variant="bordered">
                  Bordered
                </Button>
                <Button color="default" variant="flat">
                  Flat
                </Button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="primary"
              </span>
              <div className="flex flex-wrap gap-3">
                <Button color="primary" variant="default">
                  Solid
                </Button>
                <Button color="primary" variant="bordered">
                  Bordered
                </Button>
                <Button color="primary" variant="flat">
                  Flat
                </Button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="secondary"
              </span>
              <div className="flex flex-wrap gap-3">
                <Button color="secondary" variant="default">
                  Solid
                </Button>
                <Button color="secondary" variant="bordered">
                  Bordered
                </Button>
                <Button color="secondary" variant="flat">
                  Flat
                </Button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="accent"
              </span>
              <div className="flex flex-wrap gap-3">
                <Button color="accent" variant="default">
                  Solid
                </Button>
                <Button color="accent" variant="bordered">
                  Bordered
                </Button>
                <Button color="accent" variant="flat">
                  Flat
                </Button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="success"
              </span>
              <div className="flex flex-wrap gap-3">
                <Button color="success" variant="default">
                  Solid
                </Button>
                <Button color="success" variant="bordered">
                  Bordered
                </Button>
                <Button color="success" variant="flat">
                  Flat
                </Button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="warning"
              </span>
              <div className="flex flex-wrap gap-3">
                <Button color="warning" variant="default">
                  Solid
                </Button>
                <Button color="warning" variant="bordered">
                  Bordered
                </Button>
                <Button color="warning" variant="flat">
                  Flat
                </Button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                color="danger"
              </span>
              <div className="flex flex-wrap gap-3">
                <Button color="danger" variant="default">
                  Solid
                </Button>
                <Button color="danger" variant="bordered">
                  Bordered
                </Button>
                <Button color="danger" variant="flat">
                  Flat
                </Button>
              </div>
            </div>
          </div>
        }
        code={`<div className="space-y-4">
  <Button color="default">Default</Button>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="accent">Accent</Button>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
  <Button color="danger">Danger</Button>
</div>`}
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
      />

      {/* Sizes */}
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

      {/* Radius */}
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

      {/* Hovers */}
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

      {/* Icons */}
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

      {/* Icon Only */}
      <DocsComponent
        title="Icon Only (isIconOnly)"
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

      {/* Loading state */}
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

      {/* Full Width */}
      <DocsComponent
        title="Full Width (isFullWidth)"
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

      {/* Disabled state */}
      <DocsComponent
        title="Disabled state"
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

      {/* Accessibility & ARIA Section */}
      <AccessibilityCard />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props Button Table */}
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
                <tr>
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
              </tbody>
            </table>
          </div>
        }
      />

      <DocsPagination />
    </div>
  );
}
