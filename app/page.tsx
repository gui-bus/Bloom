import { CodeBlock } from "@/components/core/codeBlock";
import { Button } from "@/components/ui/button/button";
import { buttonCode } from "@/components/ui/button/button.code";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button</h2>

        <div className="flex gap-4">
          <Button>Primary</Button>

          <Button variant="secondary">Secondary</Button>

          <Button variant="outline">Outline</Button>

          <Button variant="ghost">Ghost</Button>

          <Button variant="destructive">Delete</Button>

          <Button size="lg">Large CTA</Button>

          <Button isLoading loadingText="Enviando">
            Enviar
          </Button>

          <Button startContent={<span>🚀</span>}>Start Icon</Button>

          <Button endContent={<span>👉</span>}>End Icon</Button>

          <Button isDisabled>Desativado</Button>
        </div>

        <CodeBlock code={buttonCode} />
      </section>
    </main>
  );
}
