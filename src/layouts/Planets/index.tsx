import { Pagination } from "../../components/Pagination";
import { Card } from "../../components/PlanetCard";
import { client } from "../../lib/apollo-cient";
import { GET_PLANETS } from "../../lib/graphql/queries";
import { PlanetsResponse } from "../../types/back-end/planets";

type PlanetsLayoutProps = { page: number };

export async function PlanetsLayout({ page }: PlanetsLayoutProps) {
  const { data, error } = await client.query<{ planets: PlanetsResponse }>({
    query: GET_PLANETS,
    variables: { page },
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
