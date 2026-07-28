import { Icon } from "@iconify/react";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Button } from "@/components/ui/button/button";
import { ButtonGroup } from "@/components/ui/buttonGroup/buttonGroup";
import { Separator } from "@/components/ui/separator/separator";
import { CodeBlock } from "@/components/core/codeBlock";
import { buttonGroupCode } from "@/components/ui/buttonGroup/buttonGroup.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ButtonGroupPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Button Group"
        description="ButtonGroup allows grouping multiple buttons together, creating a visually connected set. Supports variants, colors, sizes, badges, and iconOnly buttons while preserving individual button states."
      />

      <Tabs defaultValue="buttonGroup">
        <TabsList background={false}>
          <TabsTrigger
            value="buttonGroup"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            buttonGroup.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="buttonGroup">
          <CodeBlock
            code={buttonGroupCode}
            componentName="buttonGroup.tsx"
            description="Implementation of the ButtonGroup component, managing layout logic and propagating visual traits to children buttons."
            tags={["React", "Tailwind", "UI Component", "Layout"]}
          />
        </TabsContent>
      </Tabs>

      <Separator label={<span className="px-2">Core</span>} gradient />

      <DocsComponent
        title="Variants"
        description="Defines the visual style of each button inside the group via 'variant'."
        preview={
          <div className="space-y-5">
            <ButtonGroup>
              <Button variant="default">Default</Button>
              <Button variant="default">Middle</Button>
              <Button variant="default">Last</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant="bordered">Default</Button>
              <Button variant="bordered">Middle</Button>
              <Button variant="bordered">Last</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant="ghost">Default</Button>
              <Button variant="ghost">Middle</Button>
              <Button variant="ghost">Last</Button>
            </ButtonGroup>
          </div>
        }
        props={[
          "variant: 'default' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow' | 'link'",
        ]}
      />

      <DocsComponent
        title="Colors"
        description="Defines the color of each button inside the group via 'color'."
        preview={
          <div className="space-y-5">
            <ButtonGroup>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="success">Success</Button>
              <Button color="danger">Danger</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant="bordered" color="primary">
                Primary
              </Button>
              <Button variant="bordered" color="secondary">
                Secondary
              </Button>
              <Button variant="bordered" color="success">
                Success
              </Button>
              <Button variant="bordered" color="danger">
                Danger
              </Button>
            </ButtonGroup>
          </div>
        }
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
        ]}
      />

      <DocsComponent
        title="Sizes"
        description="Adjusts the size of each button in the group using 'size' prop."
        preview={
          <div className="space-y-5">
            <ButtonGroup>
              <Button size="sm">Small</Button>
              <Button size="sm">Small</Button>
              <Button size="sm">Small</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="md">Medium</Button>
              <Button size="md">Medium</Button>
              <Button size="md">Medium</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="lg">Large</Button>
              <Button size="lg">Large</Button>
              <Button size="lg">Large</Button>
            </ButtonGroup>
          </div>
        }
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      <DocsComponent
        title="Icon Only"
        description="Supports iconOnly buttons inside the group."
        preview={
          <ButtonGroup>
            <Button
              isIconOnly
              ariaLabel="Home"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
            />
            <Button
              isIconOnly
              ariaLabel="Profile"
              startContent={
                <Icon icon="hugeicons:user-square" className="size-5" />
              }
            />
            <Button
              isIconOnly
              ariaLabel="Settings"
              startContent={
                <Icon icon="material-symbols:settings" className="size-5" />
              }
            />
          </ButtonGroup>
        }
        props={["isIconOnly: 'true' | 'false'", "ariaLabel: 'string'"]}
      />

      <DocsComponent
        title="With badges"
        description="Each button in the group can have a badge, using 'badgeContent' and 'badgePosition'."
        preview={
          <ButtonGroup>
            <Button badgeContent="5">Inbox</Button>
            <Button badgeContent="10" badgePosition="start">
              Alerts
            </Button>
            <Button badgeContent="20">Messages</Button>
          </ButtonGroup>
        }
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — ButtonGroup"
        description="Properties to configure the ButtonGroup container."
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
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow' | 'link'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Applies visual style variant to all child buttons.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">color</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Applies color theme to all child buttons.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">size</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Applies size scale to all child buttons.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">ariaLabel</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">string</td>
                  <td className="px-3 py-2 text-muted-foreground">—</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Accessible label describing the purpose of the group for screen readers.
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
