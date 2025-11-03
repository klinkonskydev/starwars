import { Pagination } from "../Pagination";
import { Card } from "../PlanetCard";
import { client } from "../../lib/apollo-client";
import { GET_PLANETS } from "../../lib/graphql/queries";
import { PlanetsResponse } from "../../types/backend/planets";

type PlanetCardListProps = { page: number; search?: string };

export async function PlanetCardList({ page, search }: PlanetCardListProps) {
  const { data, error } = await client.query<{ planets: PlanetsResponse }>({
    query: GET_PLANETS,
    variables: { page, search },
  });

  if (error) return null;

  return (
    <>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {data.planets.results.map((result) => (
          <Card {...result} key={result.name} />
        ))}
      </section>

      <div className="py-10 pb-16">
        <Pagination total={data.planets.count} />
      </div>
    </>
  );
}
