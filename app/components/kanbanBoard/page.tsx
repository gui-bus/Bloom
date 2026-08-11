"use client";

import { Icon } from "@iconify/react";
import * as React from "react";
import { AccessibilityCard } from "@/components/core/accessibilityCard";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { DocsPagination } from "@/components/core/docsPagination";
import DocsTitle from "@/components/core/docsTitle";
import { ImportSnippet } from "@/components/core/importSnippet";
import { InstallationBlock } from "@/components/core/installationBlock";
import { Separator } from "@/components/ui/separator/separator";
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
        props={["columns: KanbanColumn[]", "cards: KanbanCard[]", "onCardMove: (cardId: string, targetColumnId: string) => void", "onAddCard: (columnId: string) => void"]}
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
        props={["variant: 'default' | 'flat' | 'bordered'"]}
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
        props={["isDisabled: boolean"]}
        preview={
          <div className="w-full">
            <KanbanBoard columns={initialColumns} cards={cards} isDisabled />
          </div>
        }
        code={`<KanbanBoard columns={columns} cards={cards} isDisabled />`}
      />

      <Separator label={<span className="px-2">API Reference</span>} gradient />

      <DocsComponent
        title="Props — KanbanBoard"
        description="Props for the KanbanBoard component."
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
                  <td className="px-3 py-2 font-mono text-primary">columns</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">KanbanColumn[]</td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">List of columns config containing ID, title, and color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">cards</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">KanbanCard[]</td>
                  <td className="px-3 py-2 text-muted-foreground">[]</td>
                  <td className="px-3 py-2 text-muted-foreground">List of task cards mapped to column IDs</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onCardMove</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">(cardId: string, targetColumnId: string) =&gt; void</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">Callback fired when a card is dropped on a column</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">onAddCard</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">(columnId: string) =&gt; void</td>
                  <td className="px-3 py-2 text-muted-foreground">undefined</td>
                  <td className="px-3 py-2 text-muted-foreground">Optional callback to show an add action on the column headers</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">variant</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">'default' | 'flat' | 'bordered'</td>
                  <td className="px-3 py-2 text-muted-foreground">'default'</td>
                  <td className="px-3 py-2 text-muted-foreground">Style of the column wrappers</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono text-primary">radius</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">keyof typeof designRadius</td>
                  <td className="px-3 py-2 text-muted-foreground">'lg'</td>
                  <td className="px-3 py-2 text-muted-foreground">Corner radius of columns</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-primary">isDisabled</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-3 py-2 text-muted-foreground">false</td>
                  <td className="px-3 py-2 text-muted-foreground">Prevents all dragging, drop interactions, and blocks the add card action</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <AccessibilityCard />
      <DocsPagination />
    </div>
  );
}
