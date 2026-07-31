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
  ColumnFiltersState,
  VisibilityState,
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
  enableExport?: boolean;
  onExportCSV?: (table: any) => void;
  onExportExcel?: (table: any) => void;
  enableColumnReorder?: boolean;
  enableColumnVisibility?: boolean;
  enableColumnFilters?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchPlaceholder = "Search all columns...",
  enableExport = true,
  onExportCSV,
  onExportExcel,
  enableColumnReorder = true,
  enableColumnVisibility = true,
  enableColumnFilters = true,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnOrder, setColumnOrder] = React.useState<string[]>(() =>
    columns.map((col) => col.id || (col as any).accessorKey || "")
  );

  const [showVisibilityMenu, setShowVisibilityMenu] = React.useState(false);
  const [showFilterBuilder, setShowFilterBuilder] = React.useState(false);
  const [draggedColumnId, setDraggedColumnId] = React.useState<string | null>(null);

  const visibilityRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (visibilityRef.current && !visibilityRef.current.contains(e.target as Node)) {
        setShowVisibilityMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    state: {
      sorting,
      globalFilter,
      columnFilters,
      columnVisibility,
      columnOrder,
    },
  });

  // Drag & drop column reordering
  const handleDragStart = (columnId: string) => {
    if (!enableColumnReorder) return;
    setDraggedColumnId(columnId);
  };

  const handleDragOver = (e: React.DragEvent, targetColumnId: string) => {
    if (!enableColumnReorder || !draggedColumnId || draggedColumnId === targetColumnId) return;
    e.preventDefault();

    const currentOrder = [...table.getState().columnOrder];
    const draggedIndex = currentOrder.indexOf(draggedColumnId);
    const targetIndex = currentOrder.indexOf(targetColumnId);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      currentOrder.splice(draggedIndex, 1);
      currentOrder.splice(targetIndex, 0, draggedColumnId);
      setColumnOrder(currentOrder);
    }
  };

  const handleDragEnd = () => {
    setDraggedColumnId(null);
  };

  return (
    <div className="space-y-4 w-full">
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-[240px] max-w-sm">
          <Input
            placeholder={searchPlaceholder}
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full"
            size="sm"
            startContent={<Icon icon="hugeicons:search-01" className="size-4 text-zinc-400" />}
            isClearable
          />
          {enableColumnFilters && (
            <Button
              variant={showFilterBuilder ? "flat" : "bordered"}
              size="sm"
              onClick={() => setShowFilterBuilder((prev) => !prev)}
              startContent={<Icon icon="hugeicons:filter" className="size-3.5" />}
              className="shrink-0"
            >
              Filters
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Column Visibility Picker Dropdown */}
          {enableColumnVisibility && (
            <div ref={visibilityRef} className="relative">
              <Button
                variant="bordered"
                size="sm"
                onClick={() => setShowVisibilityMenu((prev) => !prev)}
                startContent={<Icon icon="hugeicons:view" className="size-3.5" />}
              >
                Columns
              </Button>

              {showVisibilityMenu && (
                <div className="absolute right-0 top-full z-50 mt-1.5 w-48 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2 shadow-xl animate-in fade-in-80">
                  <div className="px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    Toggle Columns
                  </div>
                  <div className="space-y-1 mt-1 max-h-48 overflow-y-auto">
                    {table.getAllLeafColumns().map((column) => (
                      <label
                        key={column.id}
                        className="flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          checked={column.getIsVisible()}
                          onChange={column.getToggleVisibilityHandler()}
                          className="rounded text-sky-500 focus:ring-sky-500/40"
                        />
                        <span className="truncate">{column.id}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Export Actions */}
          {enableExport && (
            <div className="flex items-center gap-1.5">
              <Button
                variant="bordered"
                size="sm"
                onClick={() => onExportCSV?.(table)}
                startContent={<Icon icon="hugeicons:download-02" className="size-3.5" />}
              >
                CSV
              </Button>
              <Button
                variant="bordered"
                size="sm"
                onClick={() => onExportExcel?.(table)}
                startContent={<Icon icon="hugeicons:file-02" className="size-3.5" />}
              >
                Excel
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Per-Column Filter Builder Bar */}
      {enableColumnFilters && showFilterBuilder && (
        <div className="p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 space-y-2 animate-in fade-in-80">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <span>Per-Column Filter Builder</span>
            {columnFilters.length > 0 && (
              <button
                type="button"
                onClick={() => setColumnFilters([])}
                className="text-[11px] text-rose-500 hover:underline"
              >
                Reset all filters
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {table.getAllLeafColumns().map((column) => (
              <div key={column.id} className="flex flex-col gap-1">
                <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 capitalize">
                  {column.id}
                </span>
                <Input
                  size="sm"
                  placeholder={`Filter ${column.id}...`}
                  value={(column.getFilterValue() as string) ?? ""}
                  onChange={(e) => column.setFilterValue(e.target.value)}
                  isClearable
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Table */}
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
                    draggable={enableColumnReorder}
                    onDragStart={() => handleDragStart(header.column.id)}
                    onDragOver={(e) => handleDragOver(e, header.column.id)}
                    onDragEnd={handleDragEnd}
                    className={cn(
                      "group relative select-none",
                      enableColumnReorder && "cursor-grab active:cursor-grabbing"
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      {enableColumnReorder && (
                        <Icon
                          icon="hugeicons:drag-drop-vertical"
                          className="size-3.5 text-zinc-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                        />
                      )}
                      <div
                        onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                        className={cn(
                          "flex items-center gap-1.5 flex-1 min-w-0",
                          canSort && "cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100"
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                        {canSort && (
                          <span className="text-zinc-400 dark:text-zinc-500">
                            {isSorted === "asc" ? (
                              <Icon icon="hugeicons:arrow-up-01" className="size-3.5 text-sky-500" />
                            ) : isSorted === "desc" ? (
                              <Icon icon="hugeicons:arrow-down-01" className="size-3.5 text-sky-500" />
                            ) : (
                              <Icon icon="hugeicons:arrow-up-down" className="size-3.5 opacity-40" />
                            )}
                          </span>
                        )}
                      </div>
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
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
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

      {/* Pagination Footer */}
      <div className="flex items-center justify-between py-2 text-xs text-zinc-500 dark:text-zinc-400">
        <span>
          Showing {table.getRowModel().rows.length} of {data.length} records
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
