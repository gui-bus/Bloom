"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Separator } from "@/components/ui/separator/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs/tabs";
import { tabsCode } from "@/components/ui/tabs/tabs.code";

export default function TabsComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Tabs"
        description="Tabbed navigation used to organize related content and facilitate toggling between sections without losing context."
      />

      <Tabs defaultValue="tabs">
        <TabsList background={false}>
          <TabsTrigger
            value="tabs"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            tabs.tsx
          </TabsTrigger>
          <TabsTrigger
            value="css"
            startContent={<Icon icon="skill-icons:css" className="size-5" />}
          >
            globals.css
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tabs">
          <CodeBlock
            code={tabsCode}
            componentName="tabs.tsx"
            description="Main implementation of the Tabs component, managing layouts, variants, sizes, and accessibility."
            tags={["React", "Radix UI", "UI Component", "Accessibility"]}
          />
        </TabsContent>

        <TabsContent value="css">
          <CodeBlock
            code={`
@layer utilities {
  .tabs-custom {
    &[data-state="active"] {
      background-color: var(--tabs-active-bg);
      border-color: var(--tabs-active-border);
      color: var(--tabs-active-text);
    }
  }
}`}
            componentName="globals.css"
            language="css"
            description="Tailwind CSS custom variant overrides for the active tab state styling."
            tags={["CSS", "Tailwind", "Utilities", "Theme"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Variants"
        description="Defines the visual appearance of the tab triggers through the 'variant' prop, allowing the style to adapt to the interface context. When not specified, the default variant is used."
        props={["variant: 'default' | 'ghost' | 'bordered' | 'underline'"]}
        preview={
          <div className="space-y-5">
            
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="config">Settings</TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" variant="ghost">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" variant="ghost">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" variant="ghost">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" variant="bordered">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" variant="bordered">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" variant="bordered">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList background={false}>
                <TabsTrigger value="profile" variant="underline">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" variant="underline">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" variant="underline">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`      
<div className="space-y-5">
  
  <Tabs defaultValue="profile">                 
    <TabsList>
      <TabsTrigger value="profile">Profile</TabsTrigger>
      <TabsTrigger value="documents">Documents</TabsTrigger>
      <TabsTrigger value="config">Settings</TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">                  
    <TabsList>
      <TabsTrigger value="profile" variant="ghost">
        Profile
      </TabsTrigger>
      <TabsTrigger value="documents" variant="ghost">
        Documents
      </TabsTrigger>
      <TabsTrigger value="config" variant="ghost">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">                  
    <TabsList>
      <TabsTrigger value="profile" variant="bordered">
        Profile
      </TabsTrigger>
      <TabsTrigger value="documents" variant="bordered">
        Documents
      </TabsTrigger>
      <TabsTrigger value="config" variant="bordered">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">                  
    <TabsList background={false}>
      <TabsTrigger value="profile" variant="underline">
        Profile
      </TabsTrigger>
      <TabsTrigger value="documents" variant="underline">
        Documents
      </TabsTrigger>
      <TabsTrigger value="config" variant="underline">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
              `}
          />
        }
      />

      <DocsComponent
        title="Icons and Indicators"
        description="Use 'startContent' and 'endContent' to add optional visual elements that help reinforce the meaning of the tabs and make navigation faster and more intuitive."
        props={["startContent: 'React.ReactNode'", "endContent: 'React.ReactNode'"]}
        preview={
          <div className="space-y-5">
            
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger
                  value="profile"
                  startContent={
                    <Icon icon="hugeicons:user-account" className="size-5" />
                  }
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  startContent={
                    <Icon
                      icon="hugeicons:document-validation"
                      className="size-5"
                    />
                  }
                >
                  Documents
                </TabsTrigger>
                <TabsTrigger
                  value="config"
                  startContent={
                    <Icon
                      icon="hugeicons:configuration-02"
                      className="size-5"
                    />
                  }
                >
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger
                  value="profile"
                  endContent={
                    <Icon icon="hugeicons:user-account" className="size-5" />
                  }
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  endContent={
                    <Icon
                      icon="hugeicons:document-validation"
                      className="size-5"
                    />
                  }
                >
                  Documents
                </TabsTrigger>
                <TabsTrigger
                  value="config"
                  endContent={
                    <Icon
                      icon="hugeicons:configuration-02"
                      className="size-5"
                    />
                  }
                >
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger
        value="profile"
        startContent={
          <Icon icon="hugeicons:user-account" className="size-5" />
        }
      >
        Profile
      </TabsTrigger>
      <TabsTrigger
        value="documents"
        startContent={
          <Icon
            icon="hugeicons:document-validation"
            className="size-5"
          />
        }
      >
        Documents
      </TabsTrigger>
      <TabsTrigger
        value="config"
        startContent={
          <Icon
            icon="hugeicons:configuration-02"
            className="size-5"
          />
        }
      >
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger
        value="profile"
        endContent={
          <Icon icon="hugeicons:user-account" className="size-5" />
        }
      >
        Profile
      </TabsTrigger>
      <TabsTrigger
        value="documents"
        endContent={
          <Icon
            icon="hugeicons:document-validation"
            className="size-5"
          />
        }
      >
        Documents
      </TabsTrigger>
      <TabsTrigger
        value="config"
        endContent={
          <Icon
            icon="hugeicons:configuration-02"
            className="size-5"
          />
        }
      >
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
            `}
          />
        }
      />

      <DocsComponent
        title="Badges"
        description="Visual indicators used to highlight notifications, states, or quantities associated with the tabs, with positioning control via 'badgePosition'."
        props={["badgeContent: 'string'", "badgePosition: 'start' | 'end'"]}
        preview={
          <div className="space-y-5">
            
            <Tabs defaultValue="inbox">
              <TabsList>
                <TabsTrigger value="inbox" badgeContent="12">
                  Inbox
                </TabsTrigger>

                <TabsTrigger value="documents" badgeContent="6">
                  Archived
                </TabsTrigger>

                <TabsTrigger value="trash" badgeContent="FULL">
                  Trash
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="inbox">
              <TabsList>
                <TabsTrigger
                  value="inbox"
                  badgeContent="12"
                  badgePosition="start"
                >
                  Inbox
                </TabsTrigger>

                <TabsTrigger
                  value="documents"
                  badgeContent="6"
                  badgePosition="start"
                >
                  Archived
                </TabsTrigger>

                <TabsTrigger
                  value="trash"
                  badgeContent="FULL"
                  badgePosition="start"
                >
                  Trash
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  
  <Tabs defaultValue="inbox">
    <TabsList>
      <TabsTrigger value="inbox" badgeContent="12">
        Inbox
      </TabsTrigger>

      <TabsTrigger value="documents" badgeContent="6">
        Archived
      </TabsTrigger>

      <TabsTrigger value="trash" badgeContent="FULL">
        Trash
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="inbox">
    <TabsList>
      <TabsTrigger
        value="inbox"
        badgeContent="12"
        badgePosition="start"
      >
        Inbox
      </TabsTrigger>

      <TabsTrigger
        value="documents"
        badgeContent="6"
        badgePosition="start"
      >
        Archived
      </TabsTrigger>

      <TabsTrigger
        value="trash"
        badgeContent="FULL"
        badgePosition="start"
      >
        Trash
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
            `}
          />
        }
      />

      <DocsComponent
        title="Background"
        description="Defines the background display in the tab group. By default, the background is shown, but can be disabled via the 'background' prop."
        props={["background: 'boolean'"]}
        preview={
          <div className="space-y-5">
            
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="config">Settings</TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList background={false}>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="config">Settings</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile">Profile</TabsTrigger>
      <TabsTrigger value="documents">Documents</TabsTrigger>
      <TabsTrigger value="config">Settings</TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList background={false}>
      <TabsTrigger value="profile">Profile</TabsTrigger>
      <TabsTrigger value="documents">Documents</TabsTrigger>
      <TabsTrigger value="config">Settings</TabsTrigger>
    </TabsList>
  </Tabs>
</div>
                `}
          />
        }
      />

      <DocsComponent
        title="Sizes"
        description="Allows adjusting the visual scale of tabs through the 'size' prop. The default size is 'md', with options that adapt to different interface densities and contexts."
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'"]}
        preview={
          <div className="space-y-5">
            
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="xs">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" size="xs">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" size="xs">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="sm">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" size="sm">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" size="sm">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="md">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" size="md">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" size="md">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="lg">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" size="lg">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" size="lg">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="xl">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" size="xl">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" size="xl">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="xs">
        Profile
      </TabsTrigger>
      <TabsTrigger value="documents" size="xs">
        Documents
      </TabsTrigger>
      <TabsTrigger value="config" size="xs">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="sm">
        Profile
      </TabsTrigger>
      <TabsTrigger value="documents" size="sm">
        Documents
      </TabsTrigger>
      <TabsTrigger value="config" size="sm">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="md">
        Profile
      </TabsTrigger>
      <TabsTrigger value="documents" size="md">
        Documents
      </TabsTrigger>
      <TabsTrigger value="config" size="md">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="lg">
        Profile
      </TabsTrigger>
      <TabsTrigger value="documents" size="lg">
        Documents
      </TabsTrigger>
      <TabsTrigger value="config" size="lg">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="xl">
        Profile
      </TabsTrigger>
      <TabsTrigger value="documents" size="xl">
        Documents
      </TabsTrigger>
      <TabsTrigger value="config" size="xl">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
              `}
          />
        }
      />

      <DocsComponent
        title="Colors"
        description="Defines the active tab color scheme through the 'color' prop. You can use predefined semantic colors (like primary, success, or danger) or apply custom styles with 'customColor' (HEX). This ensures visual consistency without limiting design flexibility."
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'custom'",
          "customColor: 'string' (HEX)",
        ]}
        preview={
          <div className="space-y-5">
            
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="primary">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" color="primary">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" color="primary">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="secondary">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" color="secondary">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" color="secondary">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="success">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" color="success">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" color="success">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="warning">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" color="warning">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" color="warning">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="danger">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="documents" color="danger">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="config" color="danger">
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger
                  value="profile"
                  color="custom"
                  customColor="#9106D1"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  color="custom"
                  customColor="#9106D1"
                >
                  Documents
                </TabsTrigger>
                <TabsTrigger
                  value="config"
                  color="custom"
                  customColor="#9106D1"
                >
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="primary">
        Profile
      </TabsTrigger>

      <TabsTrigger value="documents" color="primary">
        Documents
      </TabsTrigger>

      <TabsTrigger value="config" color="primary">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="secondary">
        Profile
      </TabsTrigger>

      <TabsTrigger value="documents" color="secondary">
        Documents
      </TabsTrigger>

      <TabsTrigger value="config" color="secondary">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="success">
        Profile
      </TabsTrigger>
                  
      <TabsTrigger value="documents" color="success">
        Documents
      </TabsTrigger>

      <TabsTrigger value="config" color="success">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="warning">
        Profile
      </TabsTrigger>
      <TabsTrigger value="documents" color="warning">
        Documents
      </TabsTrigger>
      <TabsTrigger value="config" color="warning">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="danger">
        Profile
      </TabsTrigger>

      <TabsTrigger value="documents" color="danger">
        Documents
      </TabsTrigger>

      <TabsTrigger value="config" color="danger">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>

  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger
        value="profile"
        color="custom"
        customColor="#9106D1"
      >
        Profile
      </TabsTrigger>

      <TabsTrigger
        value="documents"
        color="custom"
        customColor="#9106D1"
      >
        Documents
      </TabsTrigger>

      <TabsTrigger
        value="config"
        color="custom"
        customColor="#9106D1"
      >
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
            `}
          />
        }
      />

      <DocsComponent
        title="Disabled State"
        description="Indicates tabs that are unavailable for interaction, applying an appropriate visual and behavioral state via the 'isDisabled' prop."
        props={["isDisabled: 'boolean'"]}
        preview={
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="documents" isDisabled>
                Documents
              </TabsTrigger>
              <TabsTrigger value="config" isDisabled>
                Settings
              </TabsTrigger>
            </TabsList>
          </Tabs>
        }
        code={
          <CodeBlock
            code={`
<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile">Profile</TabsTrigger>
    <TabsTrigger value="documents" isDisabled>Documents</TabsTrigger>
    <TabsTrigger value="config" isDisabled>Settings</TabsTrigger>
  </TabsList>
</Tabs>
                `}
          />
        }
      />

      <DocsComponent
        title="Loading State"
        description="Represents tabs performing asynchronous processing. When using the 'isLoading' prop, interaction is temporarily blocked and a loading spinner is displayed."
        props={["isLoading: 'boolean'"]}
        preview={
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="documents" isLoading>
                Documents
              </TabsTrigger>
              <TabsTrigger value="config">Settings</TabsTrigger>
            </TabsList>
          </Tabs>
        }
        code={
          <CodeBlock
            code={`
<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile">Profile</TabsTrigger>
    <TabsTrigger value="documents" isLoading>Documents</TabsTrigger>
    <TabsTrigger value="config">Settings</TabsTrigger>
  </TabsList>
</Tabs>
                `}
          />
        }
      />

      <Separator label={<span className="px-2">Props</span>} gradient />

      <DocsComponent
        title="Props — Tabs"
        description="Available properties for the root Tabs component."
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
                  <td className="px-3 py-2 font-mono">defaultValue</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Defines the initial active tab when used in an uncontrolled way.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">value</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Manually controls the active tab.
                  </td>
                </tr>

                <tr>
                  <td className="px-3 py-2 font-mono">onTabChange</td>
                  <td className="px-3 py-2 font-mono">
                    (value: string) =&gt; void
                  </td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Callback fired whenever the active tab changes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — TabsList"
        description="Configures the container wrapping the tab triggers."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Prop</th>
                  <th className="text-left py-2 px-3">Type</th>
                  <th className="text-left py-2 px-3">Options</th>
                  <th className="text-left py-2 px-3">Default</th>
                  <th className="text-left py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 font-mono">background</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2 font-mono">true | false</td>
                  <td className="px-3 py-2">true</td>
                  <td className="px-3 py-2">
                    Controls the background display wrapping the tabs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — TabsTrigger"
        description="Properties responsible for tab appearance, behaviors, and states."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Prop</th>
                  <th className="text-left py-2 px-3">Type</th>
                  <th className="text-left py-2 px-3">Options</th>
                  <th className="text-left py-2 px-3">Default</th>
                  <th className="text-left py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">variant</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">
                    default | ghost | bordered | underline
                  </td>
                  <td className="px-3 py-2">default</td>
                  <td className="px-3 py-2">Defines the tab's visual style.</td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">size</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">
                    xs | sm | md | lg | xl
                  </td>
                  <td className="px-3 py-2">md</td>
                  <td className="px-3 py-2">
                    Controls the visual size and density of the tab.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">color</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">
                    primary | secondary | success | danger | custom
                  </td>
                  <td className="px-3 py-2">primary</td>
                  <td className="px-3 py-2">
                    Defines the active state color scheme.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">customColor</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">HEX</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Custom color used when <code>color="custom"</code>.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">startContent</td>
                  <td className="px-3 py-2 font-mono">ReactNode</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Element displayed before the text (icons, avatars).
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">endContent</td>
                  <td className="px-3 py-2 font-mono">ReactNode</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">Element displayed after the text.</td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">badgeContent</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Displays an informational badge next to the tab.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">badgePosition</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">start | end</td>
                  <td className="px-3 py-2">end</td>
                  <td className="px-3 py-2">
                    Defines the position of the badge relative to the text.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">isDisabled</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2 font-mono">true | false</td>
                  <td className="px-3 py-2">false</td>
                  <td className="px-3 py-2">Disables tab interaction.</td>
                </tr>

                <tr>
                  <td className="px-3 py-2 font-mono">isLoading</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2 font-mono">true | false</td>
                  <td className="px-3 py-2">false</td>
                  <td className="px-3 py-2">
                    Displays a loading state and blocks interaction.
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
