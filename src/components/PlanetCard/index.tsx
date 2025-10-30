import Link from "next/link";
import { Film, Planet } from "../../types/back-end/planets";

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
      <p className="text-center text-primary font-medium text-xl">
        {planet.name}
      </p>
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
        {!!planet.films.length &&
          planet.films.map((film, i) => (
            <span key={film.title} className="text-neutral-500">
              {film.title}
              {i < planet.films.length - 1 && ", "}
            </span>
          ))}
        {!planet.films.length && (
          <span className="text-neutral-500">Unknown</span>
        )}
      </div>
    </Link>
  );
}
