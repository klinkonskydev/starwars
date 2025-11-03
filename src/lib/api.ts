import { Planet, PlanetsResponse } from "../types/backend/planets";
import { ONE_DAY_IN_SECONDS } from "../utils/constant";

type FetchPlanetsParams = { page?: number; search?: string; id?: number };

export async function fetchPlanets({
  page,
  search,
}: FetchPlanetsParams): Promise<PlanetsResponse> {
  const queryString = new URLSearchParams({
    ...(!!page && { page: String(page) }),
    ...(!!search && { search }),
  }).toString();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/starwars/planets?${queryString}`,
  );

  if (!response.ok) {
    return {} as PlanetsResponse;
  }

  return await response.json();
}

export async function fetchPlanet({ id }: FetchPlanetsParams): Promise<Planet> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/starwars/planets/${id}`,
  );

  if (!response.ok) {
    return {} as Planet;
  }

  return await response.json();
}

export async function fetchMultiple<T>(urls: string[]): Promise<T[]> {
  if (urls.length === 0) return [];

  const promises = urls.map((url) =>
    fetch(url, {
      next: { revalidate: ONE_DAY_IN_SECONDS },
    }).then((res) => res.json()),
  );

  return Promise.all(promises);
}
