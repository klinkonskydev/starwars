import { NextResponse } from "next/server";
import { cache } from "react";
import { PlanetsResponse } from "../../../../types/back-end/planets";
import { ONE_DAY_IN_SECONDS } from "../../../../utils/constant";

export const dynamic = 'force-static'

export const GET = cache(async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SWAPI}/planets`, {
      headers: { 'Content-Type': 'application/json' },
      cache: "force-cache", 
      next: { revalidate: ONE_DAY_IN_SECONDS } 
    });

    const data: PlanetsResponse = await response.json();
    console.log(data)
    return Response.json(data)
  } catch(err) {
    console.error({ err })
    const errorMessage = "Erro ao buscar os planetas, talvez estamos na criação do universo?!" 
    return NextResponse.json(
      { message: errorMessage, ok: false },
      { status: 500, statusText: errorMessage }
    )
  }
})
