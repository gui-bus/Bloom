"use client";

import { Snippet } from "@/components/ui/snippet/snippet";

export function InstallationBlock({
  componentName,
}: {
  componentName: string;
}) {
  const command = `npx @bloomui-react/cli add ${componentName}`;
  return <Snippet variant="mac" symbol="$" code={command} />;
}
