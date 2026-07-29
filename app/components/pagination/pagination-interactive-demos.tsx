"use client";

import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationFirst,
  PaginationLast,
  PaginationEllipsis,
} from "@/components/ui/pagination/pagination";

export function PaginationFirstLastDemo() {
  const [currentPage, setCurrentPage] = React.useState(12);
  const totalPages = 20;

  return (
    <div className="space-y-4 w-full max-w-xl">
      <div className="text-center text-sm font-medium text-muted-foreground">
        Active Page: <span className="text-primary font-bold">{currentPage}</span> of {totalPages}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationFirst
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              label="First"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            />
          </PaginationItem>

          {currentPage > 2 && (
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(1)}>1</PaginationLink>
            </PaginationItem>
          )}

          {currentPage > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {currentPage > 1 && (
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(currentPage - 1)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink isActive>{currentPage}</PaginationLink>
          </PaginationItem>

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(currentPage + 1)}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {currentPage < totalPages - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {currentPage < totalPages - 1 && (
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(totalPages)}>{totalPages}</PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLast
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
              label="Last"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export function PaginationCompactDemo() {
  const [currentPage, setCurrentPage] = React.useState(2);
  const totalPages = 5;

  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="text-center text-sm font-medium text-muted-foreground">
        Active Page: <span className="text-primary font-bold">{currentPage}</span> of {totalPages}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationFirst
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              label=""
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              label=""
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, idx) => {
            const page = idx + 1;
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
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              label=""
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLast
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
              label=""
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
