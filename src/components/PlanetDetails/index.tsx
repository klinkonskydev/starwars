import { client } from "../../lib/apollo-client";
import { GET_PLANET_DETAILS } from "../../lib/graphql/queries";
import { Planet } from "../../types/backend/planets";

type PlanetCardListProps = { id: number };

export async function PlanetDetails({ id }: PlanetCardListProps) {
  const { data, error } = await client.query<{ planet: Planet }>({
    query: GET_PLANET_DETAILS,
    variables: { id },
  });

  if (error) return null;

  return (
    <section className="w-full space-y-12">
      <h1 className="text-3xl text-center">
        Welcome to the <b className="text-primary">{data.planet.name}</b>{" "}
        planet!
      </h1>

      <span className="text-center block text-neutral-300 text-lg ">
        Here's some details before your trip
      </span>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-full">
        <p className="text-center">
          <b>Name:</b>
          <br />
          <span className="text-neutral-500 capitalize">
            {data.planet.name}
          </span>
        </p>

        <p className="text-center">
          <b>Rotation period:</b>
          <br />
          <span className="text-neutral-500 capitalize">
            {data.planet.rotation_period}
          </span>
        </p>

        <p className="text-center">
          <b>Orbital period:</b>
          <br />
          <span className="text-neutral-500 capitalize">
            {data.planet.orbital_period}
          </span>
        </p>

        <p className="text-center">
          <b>Diameter:</b>
          <br />
          <span className="text-neutral-500 capitalize">
            {data.planet.diameter}
          </span>
        </p>

        <p className="text-center">
          <b>Climate:</b>
          <br />
          <span className="text-neutral-500 capitalize">
            {data.planet.climate}
          </span>
        </p>

        <p className="text-center">
          <b>Gravity:</b>
          <br />
          <span className="text-neutral-500 capitalize">
            {data.planet.gravity}
          </span>
        </p>

        <p className="text-center">
          <b>Terrain:</b>
          <br />
          <span className="text-neutral-500 capitalize">
            {data.planet.terrain}
          </span>
        </p>

        <p className="text-center">
          <b>Population:</b>
          <br />
          <span className="text-neutral-500 capitalize">
            {data.planet.population}
          </span>
        </p>
      </div>

      {!!data.planet.residents.length && (
        <h3 className="text-center block text-neutral-300 text-lg">
          Maybe you also must know the natives
        </h3>
      )}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
        {data.planet.residents.map((resident) => (
          <div
            className="bg-black border border-primary flex flex-col gap-5 py-5 px-10 text-white rounded-lg w-full min-h-96 aspect-square"
            key={resident.name}
          >
            <p className="text-center text-primary font-medium text-xl mb-5">
              {resident.name}
            </p>

            <p>
              <b>Hair Color:</b>&ensp;
              <span className="text-neutral-500 capitalize">
                {resident.hair_color}
              </span>
            </p>

            <p>
              <b>Eye Color:</b>&ensp;
              <span className="text-neutral-500 capitalize">
                {resident.eye_color}
              </span>
            </p>

            <p>
              <b>Gender:</b>&ensp;
              <span className="text-neutral-500 capitalize">
                {resident.gender}
              </span>
            </p>

            <p>
              <b>Species:</b>&ensp;
              <span className="text-neutral-500 capitalize">
                {!resident.species.length
                  ? "Unknown"
                  : resident.species.map(({ name }) => name).join(", ")}
              </span>
            </p>

            <p>
              <b>Vehicle:</b>&ensp;
              <span className="text-neutral-500 capitalize">
                {!resident.vehicles.length
                  ? "Unknown"
                  : resident.vehicles
                      .map(({ name, model }) => `${name} - ${model}`)
                      .join(", ")}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
