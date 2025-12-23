"use client";
//#region Imports
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

//#endregion

//#region Interfaces
interface DocsComponentProps {
  title: string;
  description?: string;
  preview?: React.ReactNode;
  code?: React.ReactNode;
}
//#endregion

export function DocsComponent({
  title,
  description,
  preview,
  code,
}: DocsComponentProps) {
  //#region Handle functions
  function renderWithInlineCode(text: string) {
    const regex = /'([^']+)'/g;
    const parts = text.split(regex);

    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <code
          key={part}
          className="mx-1 rounded-full border border-border px-2 py-1 font-sans font-semibold text-xs text-primary shadow-[inset_0_-1px_0_rgba(0,0,0,0.05)]"
        >
          {part}
        </code>
      ) : (
        <span key={part}>{part}</span>
      )
    );
  }
  //#endregion

  //#region Constants
  const hasPreview = Boolean(preview);
  const hasCode = Boolean(code);
  const hasBoth = hasPreview && hasCode;
  //#endregion

  return (
    <section className="space-y-2">
      <div className="space-y-1">
        <h3 className="font-semibold text-xl">{title}</h3>

        {description && (
          <p className="font-light text-sm leading-relaxed">
            {renderWithInlineCode(description)}
          </p>
        )}
      </div>

      {hasBoth && (
        <Tabs defaultValue="preview">
          <TabsList background={false}>
            <TabsTrigger value="preview" variant="underline">
              Preview
            </TabsTrigger>

            <TabsTrigger value="code" variant="underline">
              Código
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="border rounded-3xl">
            {preview}
          </TabsContent>

          <TabsContent value="code" className="p-0">
            {code}
          </TabsContent>
        </Tabs>
      )}

      {!hasBoth && hasPreview && (
        <div className="border rounded-3xl flex-1 outline-none p-5 transition-all duration-300 ease-in-out">{preview}</div>
      )}

      {!hasBoth && hasCode && <div className="p-0 flex-1 outline-none transition-all duration-300 ease-in-out">{code}</div>}
    </section>
  );
}
