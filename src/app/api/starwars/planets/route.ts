import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";
import { PlanetsResponse } from "../../../../types/backend/planets";
import { ONE_DAY_IN_SECONDS, QUERY_PARAMS } from "../../../../utils/constant";

export const GET = cache(async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get(QUERY_PARAMS.PAGE);
    const search = searchParams.get(QUERY_PARAMS.SEARCH_PLANET_BY_NAME);
    const queryString = searchParams.toString();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SWAPI}/planets?${queryString}`,
      {
        headers: { "Content-Type": "application/json" },
        cache: "force-cache",
        next: {
          revalidate: ONE_DAY_IN_SECONDS,
          tags: ["planets", "page", page, search],
        },
      },
    );

    const data: PlanetsResponse = await response.json();

    return Response.json(data);
  } catch (err) {
    console.error({ err });
    const errorMessage =
      "Erro ao buscar os planetas, talvez estamos na criação do universo?!";
    return NextResponse.json(
      { message: errorMessage, ok: false },
      { status: 500, statusText: errorMessage },
    );
  }
});
