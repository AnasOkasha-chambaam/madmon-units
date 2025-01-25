"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useUnitsStore } from "@/store/use-units-store";

const PaginationButtons = () => {
  const { limit, page, setPage, total } = useUnitsStore();
  return (
    <ul className="flex items-center gap-2 sm:gap-4">
      <li>
        <Button
          variant={"madmon-pagination"}
          size={"icon"}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <ChevronLeftIcon className="!size-6" />
        </Button>
      </li>
      {[...Array(Math.ceil(total / limit))].map((_, i) => (
        <li key={i + "-pagination"}>
          <Button
            variant={
              i === page - 1 ? "madmon-pagination-active" : "madmon-pagination"
            }
            size={"icon"}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </Button>
        </li>
      ))}
      <li>
        <Button
          variant={"madmon-pagination"}
          size={"icon"}
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(total / limit)}
        >
          <ChevronRightIcon className="!size-6" />
        </Button>
      </li>
    </ul>
  );
};

export default PaginationButtons;
