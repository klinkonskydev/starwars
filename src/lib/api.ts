import { ONE_DAY_IN_SECONDS } from "../utils/constant";

type FetchPlanetsParams = { page?: number; limit?: number; id?: number };

export async function fetchPlanets<T>({
  page,
  limit,
}: FetchPlanetsParams): Promise<T> {
  const response = await fetch("http://localhost:3000/api/starwars/planets");

  if (!response.ok) {
    return {} as T;
  }

  return await response.json();
}

export async function fetchPlanet<T>({ id }: FetchPlanetsParams): Promise<T> {
  const response = await fetch(
    `http://localhost:3000/api/starwars/planets/${id}`,
  );

  if (!response.ok) {
    return {} as T;
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
