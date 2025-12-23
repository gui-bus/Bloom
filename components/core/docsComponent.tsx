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
  props?: string[];
}
//#endregion

export function DocsComponent({
  title,
  description,
  preview,
  code,
  props,
}: DocsComponentProps) {
  //#region Handle functions
  function renderWithInlineCode(text: string) {
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    const regex = /'([^']+)'/g;
    let match: RegExpExecArray | null = regex.exec(text);

    while (match !== null) {
      if (match.index > lastIndex) {
        elements.push(
          <span key={lastIndex}>{text.slice(lastIndex, match.index)}</span>
        );
      }

      elements.push(
        <code
          key={match.index}
          className="mx-1 rounded-full border border-border px-2 py-1 font-sans font-semibold text-xs text-primary shadow-[inset_0_-1px_0_rgba(0,0,0,0.05)]"
        >
          {match[1]}
        </code>
      );

      lastIndex = match.index + match[0].length;
      match = regex.exec(text);
    }

    if (lastIndex < text.length) {
      elements.push(<span key={lastIndex}>{text.slice(lastIndex)}</span>);
    }

    return elements;
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
              Code
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
        <div>
          {props?.map((prop) => (
            <p className="font-light text-sm leading-relaxed mt-2 first:mt-5" key={prop}>
              {renderWithInlineCode(prop)}
            </p>
          ))}

          <div className="border rounded-3xl flex-1 outline-none p-5 transition-all duration-300 ease-in-out mt-5">
            {preview}
          </div>
        </div>
      )}

      {!hasBoth && hasCode && (
        <div className="p-0 flex-1 outline-none transition-all duration-300 ease-in-out mt-5">
          {code}
        </div>
      )}
    </section>
  );
}
