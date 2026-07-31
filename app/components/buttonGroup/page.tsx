"use client";

import { ImportSnippet } from "@/components/core/importSnippet";

import { DocsPagination } from "@/components/core/docsPagination";

import { InstallationBlock } from "@/components/core/installationBlock";

import * as React from "react";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Button } from "@/components/ui/button/button";
import { ButtonGroup } from "@/components/ui/buttonGroup/buttonGroup";
import { buttonGroupCode } from "@/components/ui/buttonGroup/buttonGroup.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function ButtonGroupPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Button Group"
        description="ButtonGroup allows grouping multiple buttons together, creating a visually connected set. Propagates variants, colors, sizes, loading, and disabled states to child buttons."
      />

      <ImportSnippet importCode={`import { ButtonGroup } from "@/components/ui/buttonGroup/buttonGroup";`} />

      <InstallationBlock componentName="buttonGroup" />

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
            tags={["React", "Tailwind", "UI Component", "Layout", "ButtonGroup"]}
          />
        </TabsContent>
      </Tabs>

      {/* Default */}
      <DocsComponent
        title="Default"
        description="A standard connected button group propagating default styling to its child buttons."
        preview={
          <div className="w-full">
            <ButtonGroup ariaLabel="Default actions">
              <Button>Years</Button>
              <Button>Months</Button>
              <Button>Days</Button>
            </ButtonGroup>
          </div>
        }
        code={`<ButtonGroup ariaLabel="Default actions">
  <Button>Years</Button>
  <Button>Months</Button>
  <Button>Days</Button>
</ButtonGroup>`}
      />

      {/* Variants */}
      <DocsComponent
        title="Variants"
        description="Defines the visual style of each button inside the group via the 'variant' prop."
        preview={
          <div className="w-full flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">variant="default"</span>
              <ButtonGroup variant="default">
                <Button>Solid 1</Button>
                <Button>Solid 2</Button>
                <Button>Solid 3</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">variant="bordered"</span>
              <ButtonGroup variant="bordered">
                <Button>Bordered 1</Button>
                <Button>Bordered 2</Button>
                <Button>Bordered 3</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">variant="flat"</span>
              <ButtonGroup variant="flat">
                <Button>Flat 1</Button>
                <Button>Flat 2</Button>
                <Button>Flat 3</Button>
              </ButtonGroup>
            </div>
          </div>
        }
        code={`<ButtonGroup variant="bordered">
  <Button>Bordered 1</Button>
  <Button>Bordered 2</Button>
  <Button>Bordered 3</Button>
</ButtonGroup>`}
        props={[
          "variant: 'default' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow' | 'link'",
        ]}
      />

      {/* Colors */}
      <DocsComponent
        title="Colors"
        description="Defines the color theme of all buttons inside the group via the 'color' prop. Stacked vertically for clear visual comparison."
        preview={
          <div className="w-full flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="default"</span>
              <ButtonGroup color="default">
                <Button>Option A</Button>
                <Button>Option B</Button>
                <Button>Option C</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="primary"</span>
              <ButtonGroup color="primary">
                <Button>Option A</Button>
                <Button>Option B</Button>
                <Button>Option C</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="secondary"</span>
              <ButtonGroup color="secondary">
                <Button>Option A</Button>
                <Button>Option B</Button>
                <Button>Option C</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="accent"</span>
              <ButtonGroup color="accent">
                <Button>Option A</Button>
                <Button>Option B</Button>
                <Button>Option C</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="success"</span>
              <ButtonGroup color="success">
                <Button>Option A</Button>
                <Button>Option B</Button>
                <Button>Option C</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="warning"</span>
              <ButtonGroup color="warning">
                <Button>Option A</Button>
                <Button>Option B</Button>
                <Button>Option C</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">color="danger"</span>
              <ButtonGroup color="danger">
                <Button>Option A</Button>
                <Button>Option B</Button>
                <Button>Option C</Button>
              </ButtonGroup>
            </div>
          </div>
        }
        code={`<div className="space-y-4">
  <ButtonGroup color="primary">...</ButtonGroup>
  <ButtonGroup color="success">...</ButtonGroup>
  <ButtonGroup color="danger">...</ButtonGroup>
</div>`}
        props={[
          "color: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'",
        ]}
      />

      {/* Sizes */}
      <DocsComponent
        title="Sizes"
        description="Adjusts the size scale of each button in the group using the 'size' prop."
        preview={
          <div className="w-full flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">size="sm"</span>
              <ButtonGroup size="sm" color="primary">
                <Button>Small A</Button>
                <Button>Small B</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">size="md"</span>
              <ButtonGroup size="md" color="primary">
                <Button>Medium A</Button>
                <Button>Medium B</Button>
              </ButtonGroup>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">size="lg"</span>
              <ButtonGroup size="lg" color="primary">
                <Button>Large A</Button>
                <Button>Large B</Button>
              </ButtonGroup>
            </div>
          </div>
        }
        code={`<ButtonGroup size="lg" color="primary">
  <Button>Large A</Button>
  <Button>Large B</Button>
</ButtonGroup>`}
        props={["size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"]}
      />

      {/* Loading state */}
      <DocsComponent
        title="Loading state (isLoading)"
        description="Pass 'isLoading' to ButtonGroup to propagate active loading spinners across all buttons in the group."
        preview={
          <div className="w-full">
            <ButtonGroup isLoading color="primary">
              <Button>Processing</Button>
              <Button>Saving</Button>
            </ButtonGroup>
          </div>
        }
        code={`<ButtonGroup isLoading color="primary">
  <Button>Processing</Button>
  <Button>Saving</Button>
</ButtonGroup>`}
        props={["isLoading: boolean"]}
      />

      {/* Disabled state */}
      <DocsComponent
        title="Disabled state (isDisabled)"
        description="Pass 'isDisabled' to ButtonGroup to disable interaction for all buttons in the group."
        preview={
          <div className="w-full">
            <ButtonGroup isDisabled color="primary">
              <Button>Locked 1</Button>
              <Button>Locked 2</Button>
              <Button>Locked 3</Button>
            </ButtonGroup>
          </div>
        }
        code={`<ButtonGroup isDisabled color="primary">
  <Button>Locked 1</Button>
  <Button>Locked 2</Button>
</ButtonGroup>`}
        props={["isDisabled: boolean"]}
      />

      {/* Icon Only */}
      <DocsComponent
        title="Icon Only"
        description="Supports icon-only buttons grouped together seamlessly."
        preview={
          <div className="w-full">
            <ButtonGroup ariaLabel="Navigation actions">
              <Button
                isIconOnly
                ariaLabel="Home"
                startContent={<Icon icon="hugeicons:home-03" className="size-5" />}
              />
              <Button
                isIconOnly
                ariaLabel="Profile"
                startContent={<Icon icon="hugeicons:user-square" className="size-5" />}
              />
              <Button
                isIconOnly
                ariaLabel="Settings"
                startContent={<Icon icon="hugeicons:settings-01" className="size-5" />}
              />
            </ButtonGroup>
          </div>
        }
        code={`<ButtonGroup ariaLabel="Navigation actions">
  <Button
    isIconOnly
    ariaLabel="Home"
    startContent={<Icon icon="hugeicons:home-03" className="size-5" />}
  />
  <Button
    isIconOnly
    ariaLabel="Profile"
    startContent={<Icon icon="hugeicons:user-square" className="size-5" />}
  />
</ButtonGroup>`}
        props={["isIconOnly: boolean", "ariaLabel: string"]}
      />

      {/* Vertical Orientation */}
      <DocsComponent
        title="Vertical Orientation (orientation)"
        description="Stack buttons vertically using orientation='vertical'."
        preview={
          <div className="w-full">
            <ButtonGroup orientation="vertical" color="primary">
              <Button>Top Action</Button>
              <Button>Middle Action</Button>
              <Button>Bottom Action</Button>
            </ButtonGroup>
          </div>
        }
        code={`<ButtonGroup orientation="vertical" color="primary">
  <Button>Top Action</Button>
  <Button>Middle Action</Button>
  <Button>Bottom Action</Button>
</ButtonGroup>`}
        props={["orientation: 'horizontal' | 'vertical'"]}
      />

      {/* Spaced Out Buttons */}
      <DocsComponent
        title="Spaced Out Buttons (isAttached={false})"
        description="Set isAttached={false} to add clean spacing between buttons instead of merging borders."
        preview={
          <div className="w-full">
            <ButtonGroup isAttached={false} color="primary" variant="bordered">
              <Button>Detached 1</Button>
              <Button>Detached 2</Button>
              <Button>Detached 3</Button>
            </ButtonGroup>
          </div>
        }
        code={`<ButtonGroup isAttached={false} color="primary" variant="bordered">
  <Button>Detached 1</Button>
  <Button>Detached 2</Button>
</ButtonGroup>`}
        props={["isAttached: boolean"]}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      {/* Props ButtonGroup Table */}
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
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isLoading</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Propagates loading spinners and disables interaction across all buttons.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">isDisabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Disables interaction across all buttons in the group.
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
    
      <DocsPagination />
    </div>
  );
}
