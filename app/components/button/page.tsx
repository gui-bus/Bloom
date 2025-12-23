//#region Imports
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Button } from "@/components/ui/button/button";
import { Separator } from "@/components/ui/separator/separator";
import { Icon } from "@iconify/react";
//#endregion

export default function ButtonComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Button"
        description="A button is a UI element used to trigger an action, such as navigation, form submission, or other frequent interactions within the interface."
      />

      <Separator label={<span className="px-2">Core</span>} gradient />

      {/* <CodeBlock
        code={buttonCode}
        componentName="button.tsx"
        description="Implementação principal do componente Button."
        tags={["React", "Tailwind", "Accessibility"]}
      />

      <CodeBlock
        code={buttonCSSCode}
        componentName="globals.css"
        language="css"
        description="Tokens e estilos globais usados pelo Button."
      /> */}

      <Separator label={<span className="px-2">Styles</span>} gradient />

      {/* VARIANTS */}
      <DocsComponent
        title="Variants"
        description="Defines the visual appearance of the tabs through the 'variant' prop, allowing the style to adapt to the interface context. When not specified, the default variant is used."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {/* DEFAULT */}
            <Button variant="default">Default</Button>

            {/* BORDERED */}
            <Button variant="bordered">Bordered</Button>

            {/* LIGHT */}
            <Button variant="light">Light</Button>

            {/* FLAT */}
            <Button variant="flat">Flat</Button>

            {/* GHOST */}
            <Button variant="ghost">Ghost</Button>

            {/* SHADOW */}
            <Button variant="shadow">Shadow</Button>

            {/* LINK */}
            <Button variant="link">Link</Button>
          </div>
        }
        props={[
          "variant: 'default' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow' | 'link'",
        ]}
      />

      {/* COLORS */}
      <DocsComponent
        title="Colors"
        description="Defines the button color scheme through the 'color' prop. This approach ensures visual consistency without limiting design flexibility."
        preview={
          <div className="space-y-5">
            {/* DEFAULT */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {/* DEFAULT */}
              <Button variant="default" color="default">
                Default
              </Button>

              {/* PRIMARY */}
              <Button variant="default" color="primary">
                Primary
              </Button>

              {/* SECONDARY */}
              <Button variant="default" color="secondary">
                Secondary
              </Button>

              {/* SUCCESS */}
              <Button variant="default" color="success">
                Success
              </Button>

              {/* WARNING */}
              <Button variant="default" color="warning">
                Warning
              </Button>

              {/* DANGER */}
              <Button variant="default" color="danger">
                Danger
              </Button>
            </div>

            {/* BORDERED */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {/* DEFAULT */}
              <Button variant="bordered" color="default">
                Default
              </Button>

              {/* PRIMARY */}
              <Button variant="bordered" color="primary">
                Primary
              </Button>

              {/* SECONDARY */}
              <Button variant="bordered" color="secondary">
                Secondary
              </Button>

              {/* SUCCESS */}
              <Button variant="bordered" color="success">
                Success
              </Button>

              {/* WARNING */}
              <Button variant="bordered" color="warning">
                Warning
              </Button>

              {/* DANGER */}
              <Button variant="bordered" color="danger">
                Danger
              </Button>
            </div>

            {/* LIGHT */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {/* DEFAULT */}
              <Button variant="light" color="default">
                Default
              </Button>

              {/* PRIMARY */}
              <Button variant="light" color="primary">
                Primary
              </Button>

              {/* SECONDARY */}
              <Button variant="light" color="secondary">
                Secondary
              </Button>

              {/* SUCCESS */}
              <Button variant="light" color="success">
                Success
              </Button>

              {/* WARNING */}
              <Button variant="light" color="warning">
                Warning
              </Button>

              {/* DANGER */}
              <Button variant="light" color="danger">
                Danger
              </Button>
            </div>

            {/* FLAT */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {/* DEFAULT */}
              <Button variant="flat" color="default">
                Default
              </Button>

              {/* PRIMARY */}
              <Button variant="flat" color="primary">
                Primary
              </Button>

              {/* SECONDARY */}
              <Button variant="flat" color="secondary">
                Secondary
              </Button>

              {/* SUCCESS */}
              <Button variant="flat" color="success">
                Success
              </Button>

              {/* WARNING */}
              <Button variant="flat" color="warning">
                Warning
              </Button>

              {/* DANGER */}
              <Button variant="flat" color="danger">
                Danger
              </Button>
            </div>

            {/* GHOST */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {/* DEFAULT */}
              <Button variant="ghost" color="default">
                Default
              </Button>

              {/* PRIMARY */}
              <Button variant="ghost" color="primary">
                Primary
              </Button>

              {/* SECONDARY */}
              <Button variant="ghost" color="secondary">
                Secondary
              </Button>

              {/* SUCCESS */}
              <Button variant="ghost" color="success">
                Success
              </Button>

              {/* WARNING */}
              <Button variant="ghost" color="warning">
                Warning
              </Button>

              {/* DANGER */}
              <Button variant="ghost" color="danger">
                Danger
              </Button>
            </div>

            {/* SHADOW */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {/* DEFAULT */}
              <Button variant="shadow" color="default">
                Default
              </Button>

              {/* PRIMARY */}
              <Button variant="shadow" color="primary">
                Primary
              </Button>

              {/* SECONDARY */}
              <Button variant="shadow" color="secondary">
                Secondary
              </Button>

              {/* SUCCESS */}
              <Button variant="shadow" color="success">
                Success
              </Button>

              {/* WARNING */}
              <Button variant="shadow" color="warning">
                Warning
              </Button>

              {/* DANGER */}
              <Button variant="shadow" color="danger">
                Danger
              </Button>
            </div>

            {/* LINK */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {/* DEFAULT */}
              <Button variant="link" color="default">
                Default
              </Button>

              {/* PRIMARY */}
              <Button variant="link" color="primary">
                Primary
              </Button>

              {/* SECONDARY */}
              <Button variant="link" color="secondary">
                Secondary
              </Button>

              {/* SUCCESS */}
              <Button variant="link" color="success">
                Success
              </Button>

              {/* WARNING */}
              <Button variant="link" color="warning">
                Warning
              </Button>

              {/* DANGER */}
              <Button variant="link" color="danger">
                Danger
              </Button>
            </div>
          </div>
        }
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
        ]}
      />

      {/* SIZES */}
      <DocsComponent
        title="Sizes"
        description="Allows adjusting the visual scale of buttons through the 'size' prop. The default size is 'md', with options that adapt to different interface densities and contexts."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 items-center">
            {/* XS */}
            <Button variant="default" size="xs">
              xs
            </Button>

            {/* SM */}
            <Button variant="default" size="sm">
              sm
            </Button>

            {/* MD */}
            <Button variant="default" size="md">
              md
            </Button>

            {/* LG */}
            <Button variant="default" size="lg">
              lg
            </Button>

            {/* XL */}
            <Button variant="default" size="xl">
              xl
            </Button>

            {/* 2XL */}
            <Button variant="default" size="2xl">
              2xl
            </Button>

            {/* 3XL */}
            <Button variant="default" size="3xl">
              3xl
            </Button>
          </div>
        }
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      {/* RADIUS */}
      <DocsComponent
        title="Radius"
        description="Allows adjusting the visual radius of buttons through the 'radius' prop. The default radius is 'lg', with options that adapt to different interface densities and contexts."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-5">
            {/* NONE */}
            <Button variant="default" radius="none" size="2xl">
              none
            </Button>

            {/* XS */}
            <Button variant="default" radius="xs" size="2xl">
              xs
            </Button>

            {/* SM */}
            <Button variant="default" radius="sm" size="2xl">
              sm
            </Button>

            {/* MD */}
            <Button variant="default" radius="md" size="2xl">
              md
            </Button>

            {/* LG */}
            <Button variant="default" radius="lg" size="2xl">
              lg
            </Button>

            {/* XL */}
            <Button variant="default" radius="xl" size="2xl">
              xl
            </Button>

            {/* 2XL */}
            <Button variant="default" radius="2xl" size="2xl">
              2xl
            </Button>

            {/* 3XL */}
            <Button variant="default" radius="3xl" size="2xl">
              3xl
            </Button>

            {/* FULL */}
            <Button variant="default" radius="full" size="2xl">
              Full
            </Button>
          </div>
        }
        props={[
          "radius: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
        ]}
      />

      {/* LOADING STATE */}
      <DocsComponent
        title="Loading state"
        description="Displays the button in a loading state to provide visual feedback that an action is in progress. Use the 'isLoading' prop to toggle the loading state. Optionally, use the 'loadingText' prop to show custom text while the button is loading."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {/* DEFAULT */}
            <Button variant="default" isLoading>
              Default
            </Button>

            {/* BORDERED */}
            <Button variant="bordered" isLoading>
              Bordered
            </Button>

            {/* LIGHT */}
            <Button variant="light" isLoading>
              Light
            </Button>

            {/* FLAT */}
            <Button variant="flat" isLoading>
              Flat
            </Button>

            {/* GHOST */}
            <Button variant="ghost" isLoading>
              Ghost
            </Button>

            {/* SHADOW */}
            <Button variant="shadow" isLoading>
              Shadow
            </Button>

            {/* LINK */}
            <Button variant="link" isLoading>
              Link
            </Button>
          </div>
        }
        props={["isLoading: 'true' | 'false'", "loadingText: 'string'"]}
      />

      {/* DISABLED STATE */}
      <DocsComponent
        title="Disabled state"
        description="Disables the button, preventing any user interaction and visually indicating that the action is unavailable. The 'isDisabled' prop accepts 'true' or 'false' to toggle this state."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {/* DEFAULT */}
            <Button variant="default" isDisabled>
              Default
            </Button>

            {/* BORDERED */}
            <Button variant="bordered" isDisabled>
              Bordered
            </Button>

            {/* LIGHT */}
            <Button variant="light" isDisabled>
              Light
            </Button>

            {/* FLAT */}
            <Button variant="flat" isDisabled>
              Flat
            </Button>

            {/* GHOST */}
            <Button variant="ghost" isDisabled>
              Ghost
            </Button>

            {/* SHADOW */}
            <Button variant="shadow" isDisabled>
              Shadow
            </Button>

            {/* LINK */}
            <Button variant="link" isDisabled>
              Link
            </Button>
          </div>
        }
        props={["isDisabled: 'true' | 'false'"]}
      />

      {/* WITH ICONS */}
      <DocsComponent
        title="With icons"
        description="Adds icons to the button, either at the start or end, to enhance visual context and improve recognition. Use 'startContent' or 'endContent' props to pass a ReactNode icon."
        preview={
          <div className="space-y-5">
            {/* START CONTENT */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {/* DEFAULT */}
              <Button
                variant="default"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              {/* BORDERED */}
              <Button
                variant="bordered"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              {/* LIGHT */}
              <Button
                variant="light"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              {/* FLAT */}
              <Button
                variant="flat"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              {/* GHOST */}
              <Button
                variant="ghost"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              {/* SHADOW */}
              <Button
                variant="shadow"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              {/* LINK */}
              <Button
                variant="link"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>
            </div>

            {/* END CONTENT */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {/* DEFAULT */}
              <Button
                variant="default"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              {/* BORDERED */}
              <Button
                variant="bordered"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              {/* LIGHT */}
              <Button
                variant="light"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              {/* FLAT */}
              <Button
                variant="flat"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              {/* GHOST */}
              <Button
                variant="ghost"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              {/* SHADOW */}
              <Button
                variant="shadow"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              {/* LINK */}
              <Button
                variant="link"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>
            </div>
          </div>
        }
        props={["startContent: 'ReactNode'", "endContent: 'ReactNode'"]}
      />

      {/* BADGE */}
      <DocsComponent
        title="With badge"
        description="Displays a badge on the button to provide additional contextual information, such as counts or notifications. Use the 'badgeContent' prop to define the badge value and 'badgePosition' to set whether it appears at the start or end of the button."
        preview={
          <div className="space-y-5">
            {/* BADGE CONTENT - START POSITION */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {/* DEFAULT */}
              <Button variant="default" badgeContent="20">
                Inbox
              </Button>

              {/* BORDERED */}
              <Button variant="bordered" badgeContent="20">
                Inbox
              </Button>

              {/* LIGHT */}
              <Button variant="light" badgeContent="20">
                Inbox
              </Button>

              {/* FLAT */}
              <Button variant="flat" badgeContent="20">
                Inbox
              </Button>

              {/* GHOST */}
              <Button variant="ghost" badgeContent="20">
                Inbox
              </Button>

              {/* SHADOW */}
              <Button variant="shadow" badgeContent="20">
                Inbox
              </Button>

              {/* LINK */}
              <Button variant="link" badgeContent="20">
                Inbox
              </Button>
            </div>

            {/* BADGE CONTENT - END POSITION */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {/* DEFAULT */}
              <Button variant="default" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              {/* BORDERED */}
              <Button
                variant="bordered"
                badgeContent="20"
                badgePosition="start"
              >
                Inbox
              </Button>

              {/* LIGHT */}
              <Button variant="light" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              {/* FLAT */}
              <Button variant="flat" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              {/* GHOST */}
              <Button variant="ghost" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              {/* SHADOW */}
              <Button variant="shadow" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              {/* LINK */}
              <Button variant="link" badgeContent="20" badgePosition="start">
                Inbox
              </Button>
            </div>
          </div>
        }
        props={["badgeContent: 'string'", "badgePosition: 'start' | 'end'"]}
      />

      {/* BADGE CLASSES */}
      <DocsComponent
        title="Badge classes"
        description="Allows customizing the badge appearance using any Tailwind CSS classes. Use 'badgeCustomClassname' to apply custom styles."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {/* DEFAULT */}
            <Button variant="default" badgeContent="20" badgeCustomClassname="bg-sky-600">
              Inbox
            </Button>

            {/* DEFAULT */}
            <Button variant="default" badgeContent="20" badgeCustomClassname="bg-white text-black rounded-bl-3xl">
              Inbox
            </Button>

            {/* DEFAULT */}
            <Button variant="default" badgeContent="20" badgeCustomClassname="bg-rose-600 animate-pulse">
              Inbox
            </Button>
          </div>
        }
        props={["badgeCustomClassname: 'string'"]}
      />

      {/* ICON ONLY */}
      <DocsComponent
        title="Icon Only"
        description="Displays the button with only an icon, without any text, for compact or minimalist UI patterns. Use the 'isIconOnly' prop to enable this mode. When 'isIconOnly' is true, the 'ariaLabel' prop is required to ensure accessibility."
        preview={
          <div className="flex items-center gap-5">
            {/* DEFAULT */}
            <Button
              variant="default"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            {/* BORDERED */}
            <Button
              variant="bordered"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            {/* LIGHT */}
            <Button
              variant="light"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            {/* FLAT */}
            <Button
              variant="flat"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            {/* GHOST */}
            <Button
              variant="ghost"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            {/* SHADOW */}
            <Button
              variant="shadow"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            {/* LINK */}
            <Button
              variant="link"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />
          </div>
        }
        props={["isIconOnly: 'true' | 'false'", "ariaLabel: 'string'"]}
      />

      <DocsComponent
        title="Ripple animation"
        description="Controls the ripple effect on button clicks, providing visual feedback of user interaction. By default, the ripple animation is enabled; set 'disableRipple' to 'true' to turn it off."
        preview={
          <div className="flex items-center gap-5">
            {/* WITH RIPPLE ANIMATION */}
            <Button variant="default">Click me (with ripple animation)</Button>

            {/* WITHOUT RIPPLE ANIMATION */}
            <Button variant="default" disableRipple>
              Click me (without ripple animation)
            </Button>
          </div>
        }
        props={["disableRipple: 'true' | 'false'"]}
      />
    </main>
  );
}
