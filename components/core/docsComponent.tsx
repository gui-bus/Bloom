"use client";

import { useState } from "react";

interface DocsComponentProps {
  title: string;
  description?: string;
  preview?: React.ReactNode;
  code?: React.ReactNode;
}

export function DocsComponent({
  title,
  description,
  preview,
  code,
}: DocsComponentProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold">{title}</h3>

      {description && (
        <p className="text-sm text-muted-foreground max-w-xl">{description}</p>
      )}

      {/* TABS */}
      <div className="flex gap-2 border-b border-gray-700">
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "preview"
              ? "border-b-2 border-blue-500"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "code"
              ? "border-b-2 border-blue-500"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("code")}
        >
          Código
        </button>
      </div>

      {/* CONTEÚDO DAS TABS */}
      <div className="mt-5">
        {activeTab === "preview" && preview}
        {activeTab === "code" && code}
      </div>
    </section>
  );
}
