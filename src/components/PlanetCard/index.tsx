import Link from "next/link";
import { Film, Planet } from "../../types/backend/planets";

export type PlanetCardProps = {
  films: Pick<Film, "title">[];
} & Pick<Planet, "name" | "terrain" | "diameter" | "climate" | "url">;

export function Card(planet: PlanetCardProps) {
  const planetNumber = planet.url.endsWith("/")
    ? planet.url.slice(0, -1).split("/").slice(-1)[0]
    : planet.url.split("/").slice(-1)[0];

  return (
    <Link
      href={`/${planetNumber}`}
      className="bg-black border border-primary flex flex-col gap-5 py-5 px-10 text-white rounded-lg h-84 cursor-pointer hover:bg-yellow-950/5 transition-all"
    >
      <h3 className="text-center text-primary font-medium text-xl">
        {planet.name}
      </h3>
      <p>
        <b>Terrain:</b>&ensp;
        <span className="text-neutral-500 capitalize">{planet.terrain}</span>
      </p>
      <p>
        <b>Diameter:</b>&ensp;
        <span className="text-neutral-500">
          {new Intl.NumberFormat("en").format(Number(planet?.diameter)) ||
            "Unknown"}
        </span>
      </p>
      <p>
        <b>Climate:</b>&ensp;
        <span className="text-neutral-500 capitalize">{planet.climate}</span>
      </p>

      <div>
        <span className="font-semibold">Appears in:</span>&ensp;
        <span className="text-neutral-500">
          {!!planet.films.length
            ? planet.films.map(({ title }) => title).join(", ")
            : "Unknown"}
        </span>
      </div>
    </Link>
  );
}
