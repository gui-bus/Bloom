"use client";

import * as React from "react";
import { DataTable } from "@/components/ui/dataTable/dataTable";

export function DataTableDemo() {
  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "role", header: "Role" },
  ];

  const data = [
    { id: "1", name: "Guilherme Santos", email: "gui@example.com", role: "Frontend Lead" },
    { id: "2", name: "Beatriz Lima", email: "bea@example.com", role: "UI Designer" },
    { id: "3", name: "Carlos Eduardo", email: "carlos@example.com", role: "Backend Dev" },
  ];

  return <DataTable columns={columns} data={data} searchPlaceholder="Search users..." />;
}
