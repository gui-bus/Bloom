import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";

export const metadata: Metadata = {
  title: "Command",
  description: "Spotlight-style command palette component built on cmdk.",
};

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command/command";
import { commandCode } from "@/components/ui/command/command.code";
import { Separator } from "@/components/ui/separator/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function CommandComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Command"
        description="Fast, composable, unstyled command menu for React (Spotlight / CMD+K style)."
      />

      <Tabs defaultValue="command">
        <TabsList background={false}>
          <TabsTrigger
            value="command"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            command.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="command">
          <CodeBlock
            code={commandCode}
            componentName="command.tsx"
            description="Core implementation of the Command component."
            tags={["React", "cmdk", "Tailwind", "Overlays"]}
          />
        </TabsContent>
      </Tabs>

      {/* Basic Usage */}
      <DocsComponent
        title="Basic Usage"
        description="Command menu palette."
        preview={
          <div className="w-full max-w-sm">
            <Command className="rounded-2xl border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    Calendar <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    Search Emoji <CommandShortcut>⌘E</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        }
        code={`<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Sub-components — Command"
        description="Available primitives for building command menus."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">CommandInput</td>
                  <td className="px-3 py-2 text-muted-foreground">Search text input for command filtering.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">CommandItem</td>
                  <td className="px-3 py-2 text-muted-foreground">Selectable command option item.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
