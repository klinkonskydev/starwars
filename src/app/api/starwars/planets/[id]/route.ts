import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";
import { Planet } from "../../../../../types/backend/planets";
import { ONE_DAY_IN_SECONDS } from "../../../../../utils/constant";

export const dynamic = "force-static";

export const GET = cache(
  async (
    _req: NextRequest,
    ctx: RouteContext<"/api/starwars/planets/[id]">,
  ) => {
    const { id } = await ctx.params;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SWAPI}/planets/${id}`,
        {
          headers: { "Content-Type": "application/json" },
          cache: "force-cache",
          next: { revalidate: ONE_DAY_IN_SECONDS },
        },
      );

      const planet: Planet = await response.json();

      return Response.json(planet);
    } catch (err) {
      return NextResponse.json(
        {
          message:
            "Erro ao buscar o planeta, será que me esqueci da criação deste planeta?!",
        },
        { status: 500 },
      );
    }
  },
);
