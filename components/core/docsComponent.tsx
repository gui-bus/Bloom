"use client";

interface DocsComponentProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DocsComponent({
  title,
  description,
  children,
}: DocsComponentProps) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold">{title}</h3>

      {description && (
        <p className="text-sm text-muted-foreground max-w-xl">
          {description}
        </p>
      )}

      <div className="rounded-2xl border p-4 flex flex-wrap gap-4">
        {children}
      </div>
    </section>
  );
}
