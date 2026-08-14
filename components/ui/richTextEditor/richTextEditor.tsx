"use client";

import { Icon } from "@iconify/react";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
  value?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
  isDisabled?: boolean;
  label?: React.ReactNode;
  isRequired?: boolean;
  className?: string;
}

interface ToolbarButtonProps {
  icon: string;
  isActive?: boolean;
  onClick: () => void;
  title?: string;
  isDisabled?: boolean;
}

function ToolbarButton({
  icon,
  isActive = false,
  onClick,
  title,
  isDisabled,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      title={title}
      className={cn(
        "flex items-center justify-center size-8 rounded-lg transition-colors",
        isActive
          ? "bg-sky-500/10 text-sky-500"
          : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-300",
        isDisabled && "opacity-40 cursor-not-allowed",
      )}
    >
      <Icon icon={icon} className="size-4" />
    </button>
  );
}

function ToolbarSeparator() {
  return <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 mx-0.5" />;
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing...",
  minHeight = "150px",
  isDisabled = false,
  label,
  isRequired = false,
  className,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder })],
    content: value || "",
    editable: !isDisabled,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: cn(
          "prose dark:prose-invert max-w-none px-4 py-3 outline-none text-sm",
          "prose-headings:font-bold prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100",
          "prose-p:text-zinc-700 dark:prose-p:text-zinc-300",
          "prose-p:my-1 prose-headings:my-2",
          "prose-blockquote:border-l-sky-500 prose-blockquote:text-zinc-500",
          "prose-ul:my-1 prose-ol:my-1 prose-li:my-0",
        ),
        style: `min-height: ${minHeight}`,
      },
    },
  });

  if (!editor) {
    const fallback = (
      <div
        className={cn(
          "rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 animate-pulse",
          className,
        )}
        style={{ minHeight: `calc(${minHeight} + 48px)` }}
      />
    );
    if (label) {
      return (
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
            {label}
            {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
          </label>
          {fallback}
        </div>
      );
    }
    return fallback;
  }

  const editorContent = (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-colors",
        !isDisabled &&
          "focus-within:ring-2 focus-within:ring-sky-500/20 focus-within:border-sky-500",
        isDisabled && "opacity-60",
        className,
      )}
    >
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-3 py-2 flex items-center gap-1 flex-wrap">
        <ToolbarButton
          icon="hugeicons:text-bold"
          isActive={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold"
          isDisabled={isDisabled}
        />
        <ToolbarButton
          icon="hugeicons:text-italic"
          isActive={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic"
          isDisabled={isDisabled}
        />
        <ToolbarButton
          icon="hugeicons:text-strikethrough"
          isActive={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          title="Strikethrough"
          isDisabled={isDisabled}
        />

        <ToolbarSeparator />

        <ToolbarButton
          icon="hugeicons:heading-01"
          isActive={editor.isActive("heading", { level: 1 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          title="Heading 1"
          isDisabled={isDisabled}
        />
        <ToolbarButton
          icon="hugeicons:heading-02"
          isActive={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          title="Heading 2"
          isDisabled={isDisabled}
        />
        <ToolbarButton
          icon="hugeicons:heading-03"
          isActive={editor.isActive("heading", { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          title="Heading 3"
          isDisabled={isDisabled}
        />

        <ToolbarSeparator />

        <ToolbarButton
          icon="hugeicons:left-to-right-list-bullet"
          isActive={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Bullet List"
          isDisabled={isDisabled}
        />
        <ToolbarButton
          icon="hugeicons:left-to-right-list-number"
          isActive={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Ordered List"
          isDisabled={isDisabled}
        />

        <ToolbarSeparator />

        <ToolbarButton
          icon="hugeicons:quote-down"
          isActive={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          title="Blockquote"
          isDisabled={isDisabled}
        />
      </div>

      <EditorContent editor={editor} />
    </div>
  );

  if (label) {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 select-none">
          {label}
          {isRequired && <span className="text-rose-500 ml-0.5">*</span>}
        </label>
        {editorContent}
      </div>
    );
  }

  return editorContent;
}
