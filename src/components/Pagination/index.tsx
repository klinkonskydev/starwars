"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import ResponsivePagination from "react-responsive-pagination";
import { QUERY_PARAMS } from "../../utils/constant";

const MAX_ITEMS_PER_PAGE = 10;

export function Pagination({ total }: { total: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const current = Number(searchParams.get(QUERY_PARAMS.PAGE)) ?? 1;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleWithPage = (page: number) => {
    router.push(
      pathname + "?" + createQueryString(QUERY_PARAMS.PAGE, String(page)),
    );
  };

  return (
    <ResponsivePagination
      current={current}
      total={total / MAX_ITEMS_PER_PAGE}
      onPageChange={handleWithPage}
    />
  );
}
