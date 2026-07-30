"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import { cn } from "@/lib/utils";

import { Icon } from "@iconify/react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchPlaceholder?: string;
  searchColumn?: string;
  enableExport?: boolean;
  exportFileName?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchPlaceholder = "Filter rows...",
  enableExport = true,
  exportFileName = "data-table-export",
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter,
    },
  });

  const exportToCSV = React.useCallback(() => {
    const rows = table.getFilteredRowModel().rows;
    if (!rows.length) return;

    const headers = columns
      .map((col) => (typeof col.header === "string" ? col.header : (col as any).accessorKey || ""))
      .filter(Boolean);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row
          .getVisibleCells()
          .map((cell) => `"${String(cell.getValue() ?? "").replace(/"/g, '""')}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${exportFileName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [table, columns, exportFileName]);

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center justify-between gap-3">
        <Input
          placeholder={searchPlaceholder}
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-xs"
          size="sm"
          startContent={<Icon icon="hugeicons:search-01" className="size-4 text-zinc-400" />}
          isClearable
        />
        {enableExport && (
          <Button
            variant="bordered"
            size="sm"
            onClick={exportToCSV}
            startContent={<Icon icon="hugeicons:download-02" className="size-4 shrink-0" />}
            className="shrink-0 whitespace-nowrap px-4"
          >
            Export CSV
          </Button>
        )}
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const canSort = header.column.getCanSort();
                const isSorted = header.column.getIsSorted();

                return (
                  <TableHead
                    key={header.id}
                    onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                    className={cn(canSort && "cursor-pointer select-none hover:text-zinc-900 dark:hover:text-zinc-100")}
                  >
                    <div className="flex items-center gap-1.5">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {canSort && (
                        <span className="text-zinc-400 dark:text-zinc-500">
                          {isSorted === "asc" ? (
                            <Icon icon="hugeicons:arrow-up-01" className="size-3.5 text-sky-500" />
                          ) : isSorted === "desc" ? (
                            <Icon icon="hugeicons:arrow-down-01" className="size-3.5 text-sky-500" />
                          ) : (
                            <Icon icon="hugeicons:arrow-up-down" className="size-3.5 opacity-50" />
                          )}
                        </span>
                      )}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-zinc-400 dark:text-zinc-500">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between py-2">
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          Showing {table.getRowModel().rows.length} records
        </span>
        <div className="flex items-center space-x-2">
          <Button
            variant="bordered"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="bordered"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
