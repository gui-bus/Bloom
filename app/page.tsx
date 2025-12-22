//#region Imports
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import { Button } from "@/components/ui/button/button";
import { buttonCode } from "@/components/ui/button/button.code";
import { buttonCSSCode } from "@/components/ui/button/button.css.code";
//#endregion

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6 space-y-14">
      <section className="space-y-10">
        <h2 className="text-xl font-semibold">Button</h2>

        <CodeBlock
          code={buttonCode}
          componentName="button.tsx"
          description="Implementação principal do componente Button."
          tags={["React", "Tailwind", "Accessibility"]}
        />

        <CodeBlock
          code={buttonCSSCode}
          componentName="globals.css"
          language="css"
          description="Tokens e estilos globais usados pelo Button."
        />

        <DocsComponent
          title="Loading"
          description="Passe a prop isLoading para indicar que uma ação está em progresso."
          preview={
            <div className="flex gap-4 flex-wrap">
              <Button isLoading loadingText="Enviando">
                Enviar
              </Button>
              <Button isLoading variant="secondary">
                Salvando
              </Button>
            </div>
          }
          code={
            <CodeBlock
              code={buttonCode}
              componentName="button.tsx"
              description="Implementação principal do componente Button."
              tags={["React", "Tailwind", "Accessibility"]}
            />
          }
        />

        <DocsComponent
          title="Icons"
          description="Utilize startContent e endContent para reforçar ações visuais comuns, como navegação ou ações frequentes."
          preview={
            <div className="flex gap-4 flex-wrap">
              <Button startContent={<span>🚀</span>}>Ação principal</Button>
              <Button endContent={<span>👉</span>}>Continuar</Button>
              <Button
                isIconOnly
                aria-label="Excluir"
                variant="ghost"
                startContent={<span>🗑️</span>}
              />
            </div>
          }
          code={
            <CodeBlock
              code={`
<Button startContent={<span>🚀</span>}>Ação principal</Button>
<Button endContent={<span>👉</span>}>Continuar</Button>
<Button
  isIconOnly
  aria-label="Excluir"
  variant="ghost"
  startContent={<span>🗑️</span>}
/>
      `}
              componentName="button.tsx"
              description="Exemplos de botões com ícones."
              tags={["React", "Tailwind"]}
            />
          }
        />

        <DocsComponent
          title="Variants"
          description="Diferentes variantes visuais para representar hierarquia e intenção da ação."
          preview={
            <div className="flex gap-4 flex-wrap">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          }
          code={
            <CodeBlock
              code={`
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
      `}
              componentName="button.tsx"
              description="Exemplos das diferentes variantes visuais do Button."
              tags={["React", "Tailwind"]}
            />
          }
        />
      </section>
    </main>
  );
}
