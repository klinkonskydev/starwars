"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ResponsivePagination from "react-responsive-pagination";
import { QUERY_PARAMS } from "../../utils/constant";
import { useQueryString } from "../../hooks/useQueryString";

const MAX_ITEMS_PER_PAGE = 10;

function Pagination({ total }: { total: number }) {
  const { createQueryString } = useQueryString();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const current = Number(searchParams.get(QUERY_PARAMS.PAGE)) ?? 1;

  const handleWithPage = (page: number) => {
    router.push(
      pathname + "?" + createQueryString(QUERY_PARAMS.PAGE, String(page)),
    );
  };

  return (
    <ResponsivePagination
      current={current}
      total={Math.ceil(total / MAX_ITEMS_PER_PAGE)}
      onPageChange={handleWithPage}
      key="Pagination"
    />
  );
}

export { Pagination };
