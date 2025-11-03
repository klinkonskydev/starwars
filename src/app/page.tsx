import { Usable, use } from "react";
import { PlanetCardList } from "../components/PlanetCardList";
import { SearchPlanet } from "../components/SearchPlanet";
import { QUERY_PARAMS } from "../utils/constant";

export default function Home({
  searchParams,
}: {
  searchParams?: Usable<{ [key: string]: string | undefined }>;
}) {
  const params = use(searchParams);
  const pageParam = Number(params?.[QUERY_PARAMS.PAGE]) ?? 1;
  const searchParam = params?.[QUERY_PARAMS.SEARCH_PLANET_BY_NAME] ?? "";

  return (
    <main className="px-10 mx-auto max-w-7xl space-y-8">
      <SearchPlanet initialValue={searchParam} />
      <PlanetCardList page={pageParam} search={searchParam} />
    </main>
  );
}
