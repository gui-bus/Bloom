"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import {
  KanbanBoard,
  type KanbanCard,
  type KanbanColumn,
} from "@/components/ui/kanbanBoard/kanbanBoard";
import { kanbanBoardCode } from "@/components/ui/kanbanBoard/kanbanBoard.code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export default function KanbanBoardPage() {
  const initialColumns: KanbanColumn[] = [
    { id: "todo", title: "To Do", color: "primary" },
    { id: "in-progress", title: "In Progress", color: "warning" },
    { id: "done", title: "Done", color: "success" },
  ];

  const [cards, setCards] = React.useState<KanbanCard[]>([
    {
      id: "card-1",
      columnId: "todo",
      title: "Design System Refactoring",
      description:
        "Review current component structure and update theme values in tailwind.",
      tags: ["Design", "Refactor"],
      dueDate: "Aug 15",
    },
    {
      id: "card-2",
      columnId: "todo",
      title: "Write documentation",
      description:
        "Ensure all new components contain explicit props tables and API reference.",
      tags: ["Docs"],
    },
    {
      id: "card-3",
      columnId: "in-progress",
      title: "Fix dialog component portal",
      description: "Repair keyboard trap in responsive drawer/sheet modals.",
      tags: ["Bug", "High Priority"],
      dueDate: "Aug 11",
    },
    {
      id: "card-4",
      columnId: "done",
      title: "Setup biome environment",
      description:
        "Configure Biome config and verify formatting speed runs successfully.",
      tags: ["CI/CD"],
    },
  ]);

  const handleCardMove = (cardId: string, targetColumnId: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === cardId ? { ...card, columnId: targetColumnId } : card,
      ),
    );
  };

  const handleAddCard = (columnId: string) => {
    const title = window.prompt("Enter card title:");
    if (!title) return;
    const description =
      window.prompt("Enter card description (optional):") || undefined;
    const newCard: KanbanCard = {
      id: `card-${Date.now()}`,
      columnId,
      title,
      description,
      tags: ["User Added"],
    };
    setCards((prev) => [...prev, newCard]);
  };

  return (
    <div className="space-y-8">
      <DocsTitle
        title="Kanban Board"
        description="A task management board with multiple columns supporting native drag-and-drop interactions, card tags, and quick actions."
      />

      <ImportSnippet
        importCode={`import { KanbanBoard } from "@/components/ui/kanbanBoard/kanbanBoard";`}
      />

      <InstallationBlock componentName="kanbanBoard" />

      <Tabs defaultValue="kanbanBoard">
        <TabsList background={false}>
          <TabsTrigger
            value="kanbanBoard"
            startContent={<Icon icon="devicon:react" className="size-5" />}
          >
            kanbanBoard.tsx
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kanbanBoard">
          <CodeBlock
            code={kanbanBoardCode}
            componentName="kanbanBoard.tsx"
            description="Core implementation of the Kanban Board using native HTML5 drag-and-drop handles and theme card wrappers."
            tags={["React", "Tailwind", "Board", "Kanban", "Drag and Drop"]}
          />
        </TabsContent>
      </Tabs>

      <DocsComponent
        title="Default"
        description="A responsive kanban board layout showing column cards, due dates, tags, and column counts."
        preview={
          <div className="w-full">
            <KanbanBoard
              columns={initialColumns}
              cards={cards}
              onCardMove={handleCardMove}
              onAddCard={handleAddCard}
            />
          </div>
        }
        code={`const initialColumns = [
  { id: "todo", title: "To Do", color: "primary" },
  { id: "in-progress", title: "In Progress", color: "warning" },
  { id: "done", title: "Done", color: "success" },
];

const [cards, setCards] = React.useState([
  { id: "card-1", columnId: "todo", title: "Design System Refactoring" },
  ...
]);

const handleCardMove = (cardId, targetColumnId) => {
  setCards(prev => prev.map(c => c.id === cardId ? { ...c, columnId: targetColumnId } : c));
};

<KanbanBoard
  columns={initialColumns}
  cards={cards}
  onCardMove={handleCardMove}
/>`}
      />

      <DocsComponent
        title="Variants"
        description="Supports different outer styles including bordered and flat columns."
        preview={
          <div className="w-full space-y-8">
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="flat"
              </span>
              <KanbanBoard
                columns={initialColumns}
                cards={cards}
                onCardMove={handleCardMove}
                variant="flat"
              />
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground block mb-2">
                variant="bordered"
              </span>
              <KanbanBoard
                columns={initialColumns}
                cards={cards}
                onCardMove={handleCardMove}
                variant="bordered"
              />
            </div>
          </div>
        }
        code={`<KanbanBoard columns={columns} cards={cards} variant="flat" />
<KanbanBoard columns={columns} cards={cards} variant="bordered" />`}
      />

      <DocsComponent
        title="Disabled State"
        description="Prevents all dragging, drop interactions, and blocks the add card action."
        preview={
          <div className="w-full">
            <KanbanBoard columns={initialColumns} cards={cards} isDisabled />
          </div>
        }
        code={`<KanbanBoard columns={columns} cards={cards} isDisabled />`}
      />

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Prop
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Type
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Default
                </th>
                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  columns
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  KanbanColumn[]
                </td>
                <td className="px-4 py-3 font-mono">[]</td>
                <td className="px-4 py-3">
                  List of columns config containing ID, title, and color.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  cards
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  KanbanCard[]
                </td>
                <td className="px-4 py-3 font-mono">[]</td>
                <td className="px-4 py-3">
                  List of task cards mapped to column IDs.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onCardMove
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (cardId: string, targetColumnId: string) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Callback fired when a card is dropped on a column.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  onAddCard
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  (columnId: string) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono">undefined</td>
                <td className="px-4 py-3">
                  Optional callback to show an add action on the column headers.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  variant
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  "default" | "flat" | "bordered"
                </td>
                <td className="px-4 py-3 font-mono">"default"</td>
                <td className="px-4 py-3">Style of the column wrappers.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  radius
                </td>
                <td className="px-4 py-3 font-mono text-primary">
                  keyof typeof designRadius
                </td>
                <td className="px-4 py-3 font-mono">"lg"</td>
                <td className="px-4 py-3">Corner radius of columns.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <DocsPagination />
    </div>
  );
}
