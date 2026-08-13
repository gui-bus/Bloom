"use client";

import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command/command";
import { commandCode } from "@/components/ui/command/command.code";
import { Separator } from "@/components/ui/separator/separator";

export default function CommandComponentPage() {
  return (
    <div className="space-y-8">
      <DocsTitle
        title="Command"
        description="A fast, composable, spotlight-style command menu palette built on cmdk for keyboard-driven navigation and search actions."
      />

      <ImportSnippet
        importCode={`import { Command } from "@/components/ui/command/command";`}
      />

      <InstallationBlock componentName="command" />

      <CodeBlock
        code={commandCode}
        componentName="command.tsx"
        description="Core implementation of the Command component."
        tags={["React", "cmdk", "Tailwind", "Overlays", "Command"]}
      />

      <DocsComponent
        title="Default"
        description="Standard command menu palette with search input, items, shortcuts, and grouped sections."
        preview={
          <div className="w-full">
            <Command className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Icon
                      icon="hugeicons:calendar-01"
                      className="size-4 text-sky-500"
                    />
                    <span>Calendar</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Icon
                      icon="hugeicons:search-01"
                      className="size-4 text-sky-500"
                    />
                    <span>Search Emoji</span>
                    <CommandShortcut>⌘E</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Icon
                      icon="hugeicons:settings-01"
                      className="size-4 text-sky-500"
                    />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Actions">
                  <CommandItem>
                    <Icon
                      icon="hugeicons:user-add-01"
                      className="size-4 text-emerald-500"
                    />
                    <span>Add Member</span>
                    <CommandShortcut>⌘M</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Icon
                      icon="hugeicons:mail-01"
                      className="size-4 text-emerald-500"
                    />
                    <span>Send Email</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        }
        code={`<Command className="rounded-2xl border border-zinc-200 dark:border-zinc-800">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Icon icon="hugeicons:calendar-01" className="size-4 text-sky-500" />
        <span>Calendar</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Icon icon="hugeicons:settings-01" className="size-4 text-sky-500" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
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
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Component
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">Command</td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Main root wrapper component powering the menu palette.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    CommandInput
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Search text input field for command filtering.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    CommandList
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Scrollable container holding filtered command items.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    CommandGroup
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Group container with an optional section heading.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    CommandItem
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Selectable command option item.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">
                    CommandShortcut
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Keyboard shortcut hint badge rendered on the right.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">
                    CommandSeparator
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    Visual divider line separating command groups.
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
