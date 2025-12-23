//#region Imports

import { Icon } from "@iconify/react";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Button } from "@/components/ui/button/button";
import { ButtonGroup } from "@/components/ui/buttonGroup/buttonGroup";
import { Separator } from "@/components/ui/separator/separator";
//#endregion

export default function ButtonGroupPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Button Group"
        description="ButtonGroup allows grouping multiple buttons together, creating a visually connected set. Supports variants, colors, sizes, badges, and iconOnly buttons while preserving individual button states."
      />

      <Separator label={<span className="px-2">Core</span>} gradient />

      {/* VARIANTS */}
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

      {/* COLORS */}
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

      {/* SIZES */}
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

      {/* ICON ONLY */}
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

      {/* BADGES */}
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
        props={["badgeContent: 'string'", "badgePosition: 'start' | 'end'"]}
      />
    </main>
  );
}
