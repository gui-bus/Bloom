"use client";

import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination/pagination";

export function PaginationInteractiveDemo() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5;

  return (
    <div className="space-y-4 w-full max-w-lg">
      <div className="text-center text-sm font-medium text-muted-foreground">
        Active Page:{" "}
        <span className="text-foreground font-bold">{currentPage}</span> of{" "}
        {totalPages}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
