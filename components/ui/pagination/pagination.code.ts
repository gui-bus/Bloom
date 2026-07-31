export const paginationCode = `"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type PaginationVariant = "default" | "bordered" | "flat" | "light" | "pills" | "line";
type PaginationShape = "square" | "rounded" | "circle";

export interface PaginationToolbarProps {
  page: number;
  total: number;
  pageSize: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  showTotal?: boolean;
  showRowsPerPage?: boolean;
  showJumper?: boolean;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  variant?: PaginationVariant;
  shape?: PaginationShape;
}

export function PaginationToolbar({
  page, total, pageSize, onPageChange, onPageSizeChange,
  showTotal = true, showRowsPerPage = true, showJumper = true,
  showFirstButton = true, showLastButton = true, variant = "default", shape = "rounded",
}: PaginationToolbarProps) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex items-center justify-between w-full text-xs">
      {showTotal && <div>Showing 1-{pageSize} of {total} items</div>}
      <div className="flex items-center gap-3">
        {showRowsPerPage && <select value={pageSize} onChange={(e) => onPageSizeChange?.(Number(e.target.value))}><option value={10}>10</option></select>}
        {/* Pagination Controls */}
      </div>
    </div>
  );
}
`;
