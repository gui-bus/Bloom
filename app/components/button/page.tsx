

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Button } from "@/components/ui/button/button";
import { buttonCode } from "@/components/ui/button/button.code";
import { buttonCSSCode } from "@/components/ui/button/button.css.code";
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
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Button"
        description="A button is a UI element used to trigger an action, such as navigation, form submission, or other frequent interactions within the interface."
      />

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
            tags={["React", "Tailwind", "UI Component", "Accessibility"]}
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
        title="Variants"
        description="Defines the visual appearance of the tabs through the 'variant' prop, allowing the style to adapt to the interface context. When not specified, the default variant is used."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            
            <Button variant="default">Default</Button>

            <Button variant="bordered">Bordered</Button>

            <Button variant="light">Light</Button>

            <Button variant="flat">Flat</Button>

            <Button variant="ghost">Ghost</Button>

            <Button variant="shadow">Shadow</Button>

            <Button variant="link">Link</Button>
          </div>
        }
        props={[
          "variant: 'default' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow' | 'link'",
        ]}
      />

      <DocsComponent
        title="Colors"
        description="Defines the button color scheme through the 'color' prop. This approach ensures visual consistency without limiting design flexibility."
        preview={
          <div className="space-y-5">
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button variant="default" color="default">
                Default
              </Button>

              <Button variant="default" color="primary">
                Primary
              </Button>

              <Button variant="default" color="secondary">
                Secondary
              </Button>

              <Button variant="default" color="accent">
                Accent
              </Button>

              <Button variant="default" color="success">
                Success
              </Button>

              <Button variant="default" color="warning">
                Warning
              </Button>

              <Button variant="default" color="danger">
                Danger
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button variant="bordered" color="default">
                Default
              </Button>

              <Button variant="bordered" color="primary">
                Primary
              </Button>

              <Button variant="bordered" color="secondary">
                Secondary
              </Button>

              <Button variant="bordered" color="accent">
                Accent
              </Button>

              <Button variant="bordered" color="success">
                Success
              </Button>

              <Button variant="bordered" color="warning">
                Warning
              </Button>

              <Button variant="bordered" color="danger">
                Danger
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button variant="light" color="default">
                Default
              </Button>

              <Button variant="light" color="primary">
                Primary
              </Button>

              <Button variant="light" color="secondary">
                Secondary
              </Button>

              <Button variant="light" color="accent">
                Accent
              </Button>

              <Button variant="light" color="success">
                Success
              </Button>

              <Button variant="light" color="warning">
                Warning
              </Button>

              <Button variant="light" color="danger">
                Danger
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button variant="flat" color="default">
                Default
              </Button>

              <Button variant="flat" color="primary">
                Primary
              </Button>

              <Button variant="flat" color="secondary">
                Secondary
              </Button>

              <Button variant="flat" color="accent">
                Accent
              </Button>

              <Button variant="flat" color="success">
                Success
              </Button>

              <Button variant="flat" color="warning">
                Warning
              </Button>

              <Button variant="flat" color="danger">
                Danger
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button variant="ghost" color="default">
                Default
              </Button>

              <Button variant="ghost" color="primary">
                Primary
              </Button>

              <Button variant="ghost" color="secondary">
                Secondary
              </Button>

              <Button variant="ghost" color="accent">
                Accent
              </Button>

              <Button variant="ghost" color="success">
                Success
              </Button>

              <Button variant="ghost" color="warning">
                Warning
              </Button>

              <Button variant="ghost" color="danger">
                Danger
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button variant="shadow" color="default">
                Default
              </Button>

              <Button variant="shadow" color="primary">
                Primary
              </Button>

              <Button variant="shadow" color="secondary">
                Secondary
              </Button>

              <Button variant="shadow" color="accent">
                Accent
              </Button>

              <Button variant="shadow" color="success">
                Success
              </Button>

              <Button variant="shadow" color="warning">
                Warning
              </Button>

              <Button variant="shadow" color="danger">
                Danger
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button variant="link" color="default">
                Default
              </Button>

              <Button variant="link" color="primary">
                Primary
              </Button>

              <Button variant="link" color="secondary">
                Secondary
              </Button>

              <Button variant="link" color="accent">
                Accent
              </Button>

              <Button variant="link" color="success">
                Success
              </Button>

              <Button variant="link" color="warning">
                Warning
              </Button>

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

      <DocsComponent
        title="Sizes"
        description="Allows adjusting the visual scale of buttons through the 'size' prop. The default size is 'md', with options that adapt to different interface densities and contexts."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 items-center">
            
            <Button variant="default" size="xs">
              xs
            </Button>

            <Button variant="default" size="sm">
              sm
            </Button>

            <Button variant="default" size="md">
              md
            </Button>

            <Button variant="default" size="lg">
              lg
            </Button>

            <Button variant="default" size="xl">
              xl
            </Button>

            <Button variant="default" size="2xl">
              2xl
            </Button>

            <Button variant="default" size="3xl">
              3xl
            </Button>
          </div>
        }
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      <DocsComponent
        title="Radius"
        description="Allows adjusting the visual radius of buttons through the 'radius' prop. The default radius is 'lg', with options that adapt to different interface densities and contexts."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-5">
            
            <Button variant="default" radius="none" size="2xl">
              none
            </Button>

            <Button variant="default" radius="xs" size="2xl">
              xs
            </Button>

            <Button variant="default" radius="sm" size="2xl">
              sm
            </Button>

            <Button variant="default" radius="md" size="2xl">
              md
            </Button>

            <Button variant="default" radius="lg" size="2xl">
              lg
            </Button>

            <Button variant="default" radius="xl" size="2xl">
              xl
            </Button>

            <Button variant="default" radius="2xl" size="2xl">
              2xl
            </Button>

            <Button variant="default" radius="3xl" size="2xl">
              3xl
            </Button>

            <Button variant="default" radius="full" size="2xl">
              Full
            </Button>
          </div>
        }
        props={[
          "radius: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
        ]}
      />

      <DocsComponent
        title="Hovers"
        description="Defines how the button behaves on user interaction, such as hover and active states. Use the 'hover' prop to control motion, depth, and feedback without affecting the button color."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 items-center">
            <Button variant="default" hover="scale">
              Scale
            </Button>

            <Button variant="default" hover="lift">
              Lift
            </Button>
          </div>
        }
        props={["hover: 'scale' | 'lift'"]}
      />

      <DocsComponent
        title="Icons"
        description="Adds icons to the button, either at the start or end, to enhance visual context and improve recognition. Use 'startContent' or 'endContent' props to pass a ReactNode icon."
        preview={
          <div className="space-y-5">
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button
                variant="default"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              <Button
                variant="bordered"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              <Button
                variant="light"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              <Button
                variant="flat"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              <Button
                variant="ghost"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              <Button
                variant="shadow"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>

              <Button
                variant="link"
                startContent={
                  <Icon icon="hugeicons:home-03" className="size-5" />
                }
              >
                Home
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button
                variant="default"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              <Button
                variant="bordered"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              <Button
                variant="light"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              <Button
                variant="flat"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              <Button
                variant="ghost"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

              <Button
                variant="shadow"
                endContent={
                  <Icon icon="hugeicons:user-square" className="size-5" />
                }
              >
                Profile
              </Button>

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

      <DocsComponent
        title="Badges"
        description="Displays a badge on the button to provide additional contextual information, such as counts or notifications. Use the 'badgeContent' prop to define the badge value and 'badgePosition' to set whether it appears at the start or end of the button."
        preview={
          <div className="space-y-5">
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button variant="default" badgeContent="20">
                Inbox
              </Button>

              <Button variant="bordered" badgeContent="20">
                Inbox
              </Button>

              <Button variant="light" badgeContent="20">
                Inbox
              </Button>

              <Button variant="flat" badgeContent="20">
                Inbox
              </Button>

              <Button variant="ghost" badgeContent="20">
                Inbox
              </Button>

              <Button variant="shadow" badgeContent="20">
                Inbox
              </Button>

              <Button variant="link" badgeContent="20">
                Inbox
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              
              <Button variant="default" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              <Button
                variant="bordered"
                badgeContent="20"
                badgePosition="start"
              >
                Inbox
              </Button>

              <Button variant="light" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              <Button variant="flat" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              <Button variant="ghost" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              <Button variant="shadow" badgeContent="20" badgePosition="start">
                Inbox
              </Button>

              <Button variant="link" badgeContent="20" badgePosition="start">
                Inbox
              </Button>
            </div>
          </div>
        }
        props={["badgeContent: 'string'", "badgePosition: 'start' | 'end'"]}
      />

      <DocsComponent
        title="Custom badges"
        description="Allows customizing the badge appearance using any Tailwind CSS classes. Use 'badgeCustomClassname' to apply custom styles."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            
            <Button
              variant="default"
              badgeContent="20"
              badgeCustomClassname="bg-sky-600"
            >
              Inbox
            </Button>

            <Button
              variant="default"
              badgeContent="20"
              badgeCustomClassname="bg-white text-black rounded-bl-3xl"
            >
              Inbox
            </Button>

            <Button
              variant="default"
              badgeContent="20"
              badgeCustomClassname="bg-rose-600 animate-pulse"
            >
              Inbox
            </Button>
          </div>
        }
        props={["badgeCustomClassname: 'string'"]}
      />

      <DocsComponent
        title="Icon Only"
        description="Displays the button with only an icon, without any text, for compact or minimalist UI patterns. Use the 'isIconOnly' prop to enable this mode. When 'isIconOnly' is true, the 'ariaLabel' prop is required to ensure accessibility."
        preview={
          <div className="flex items-center gap-5">
            
            <Button
              variant="default"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            <Button
              variant="bordered"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            <Button
              variant="light"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            <Button
              variant="flat"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            <Button
              variant="ghost"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

            <Button
              variant="shadow"
              startContent={
                <Icon icon="hugeicons:home-03" className="size-5" />
              }
              isIconOnly
              ariaLabel="Home"
            />

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
        title="Animations"
        description="Controls the ripple effect on button clicks, providing visual feedback of user interaction. By default, the ripple animation is enabled; set 'disableRipple' to 'true' to turn it off."
        preview={
          <div className="flex items-center gap-5">
            
            <Button variant="default">Click me (with ripple animation)</Button>

            <Button variant="default" disableRipple>
              Click me (without ripple animation)
            </Button>
          </div>
        }
        props={["disableRipple: 'true' | 'false'"]}
      />

      <DocsComponent
        title="Loading state"
        description="Displays the button in a loading state to provide visual feedback that an action is in progress. Use the 'isLoading' prop to toggle the loading state. Optionally, use the 'loadingText' prop to show custom text while the button is loading."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            
            <Button variant="default" isLoading>
              Default
            </Button>

            <Button variant="bordered" isLoading>
              Bordered
            </Button>

            <Button variant="light" isLoading>
              Light
            </Button>

            <Button variant="flat" isLoading>
              Flat
            </Button>

            <Button variant="ghost" isLoading>
              Ghost
            </Button>

            <Button variant="shadow" isLoading>
              Shadow
            </Button>

            <Button variant="link" isLoading>
              Link
            </Button>
          </div>
        }
        props={["isLoading: 'true' | 'false'", "loadingText: 'string'"]}
      />

      <DocsComponent
        title="Loading icon"
        description="Allows replacing the default loading spinner with any custom ReactNode. Use the 'loadingIcon' prop to pass your own icon or animation."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            
            <Button
              variant="default"
              isLoading
              loadingIcon={
                <div className="flex space-x-1">
                  <span className="h-1 w-1 bg-current rounded-full animate-bounce"></span>
                  <span className="h-1 w-1 bg-current rounded-full animate-bounce delay-150"></span>
                  <span className="h-1 w-1 bg-current rounded-full animate-bounce delay-300"></span>
                </div>
              }
            >
              Default
            </Button>

            <Button
              variant="default"
              isLoading
              loadingIcon={
                <div className="h-2 w-2 rounded-full border-2 border-current opacity-50 animate-ping"></div>
              }
            >
              Bordered
            </Button>

            <Button
              variant="default"
              isLoading
              loadingIcon={
                <div className="flex justify-center items-center space-x-1">
                  <span className="h-4 w-1 bg-current animate-growY"></span>
                  <span className="h-4 w-1 bg-current animate-growY delay-150"></span>
                  <span className="h-4 w-1 bg-current animate-growY delay-300"></span>
                </div>
              }
            >
              Flat
            </Button>

            <Button
              variant="default"
              isLoading
              loadingIcon={
                <div className="relative h-4 w-4">
                  <div className="absolute inset-0 border-2 border-t-transparent border-current rounded-full animate-spin"></div>
                  <div className="absolute inset-1 border-2 border-b-transparent border-current rounded-full animate-spin-reverse"></div>
                </div>
              }
            >
              Ghost
            </Button>
          </div>
        }
        props={["loadingIcon: 'ReactNode'"]}
      />

      <DocsComponent
        title="Disabled state"
        description="Disables the button, preventing any user interaction and visually indicating that the action is unavailable. The 'isDisabled' prop accepts 'true' or 'false' to toggle this state."
        preview={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            
            <Button variant="default" isDisabled>
              Default
            </Button>

            <Button variant="bordered" isDisabled>
              Bordered
            </Button>

            <Button variant="light" isDisabled>
              Light
            </Button>

            <Button variant="flat" isDisabled>
              Flat
            </Button>

            <Button variant="ghost" isDisabled>
              Ghost
            </Button>

            <Button variant="shadow" isDisabled>
              Shadow
            </Button>

            <Button variant="link" isDisabled>
              Link
            </Button>
          </div>
        }
        props={["isDisabled: 'true' | 'false'"]}
      />

      <DocsComponent
        title="Props — Button (Base)"
        description="Core properties for the Button component."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Prop</th>
                  <th className="text-left py-2 px-3">Type</th>
                  <th className="text-left py-2 px-3">Default</th>
                  <th className="text-left py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">variant</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">default</td>
                  <td className="px-3 py-2">Visual style of the button.</td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">size</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">md</td>
                  <td className="px-3 py-2">
                    Controls the button's size and density.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">color</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">default</td>
                  <td className="px-3 py-2">Color scheme of the button.</td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">radius</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">xl</td>
                  <td className="px-3 py-2">Border radius of the button.</td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">hover</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">scale</td>
                  <td className="px-3 py-2">Hover behavior of the button.</td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">isDisabled</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2">false</td>
                  <td className="px-3 py-2">
                    Disables the button, preventing any interaction.
                  </td>
                </tr>

                <tr>
                  <td className="px-3 py-2 font-mono">disableRipple</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2">false</td>
                  <td className="px-3 py-2">
                    Disables the ripple click effect.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — Button (Badge)"
        description="Properties related to badges displayed on the button."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Prop</th>
                  <th className="text-left py-2 px-3">Type</th>
                  <th className="text-left py-2 px-3">Default</th>
                  <th className="text-left py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">badgeContent</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Displays a badge with informative content on the button.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">badgePosition</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">end</td>
                  <td className="px-3 py-2">
                    Badge position relative to button text ('start' or 'end').
                  </td>
                </tr>

                <tr>
                  <td className="px-3 py-2 font-mono">badgeCustomClassname</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Custom CSS classes for the badge container.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — Button (Loading & Icon Only)"
        description="Properties controlling loading states and icon-only buttons. Note: 'ariaLabel' is required when 'isIconOnly' is true."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Prop</th>
                  <th className="text-left py-2 px-3">Type</th>
                  <th className="text-left py-2 px-3">Default</th>
                  <th className="text-left py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">isLoading</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2">false</td>
                  <td className="px-3 py-2">
                    Shows a loading spinner and blocks interaction.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">loadingText</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Text displayed alongside the loading spinner.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">loadingIcon</td>
                  <td className="px-3 py-2 font-mono">ReactNode</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Custom icon displayed during loading.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">isIconOnly</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2">false</td>
                  <td className="px-3 py-2">
                    Displays only the icon. Requires 'ariaLabel' for
                    accessibility
                  </td>
                </tr>

                <tr>
                  <td className="px-3 py-2 font-mono">ariaLabel</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Descriptive text for screen readers. Mandatory if
                    'isIconOnly' is true.
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
