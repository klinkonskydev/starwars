import { Card } from "../../components/Planet";
import { client } from "../../lib/apollo-cient";
import { GET_PLANETS } from "../../lib/graphql/queries";
import { PlanetsResponse } from "../../types/back-end/planets";

export async function PlanetsLayout() {
  const { data, error } = await client.query<{ planets: PlanetsResponse }>({
    query: GET_PLANETS,
  });

  if (error) return null;

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {data.planets.results.map((result) => (
        <Card {...result} key={result.name} />
      ))}
    </section>
  );
}
