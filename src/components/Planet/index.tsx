import { Planet } from "../../types/back-end/planets";

export function Card(planet: Planet) {
  return (
    <div className="bg-black border border-primary flex flex-col gap-5 py-5 px-10 text-white rounded-lg h-84">
      <p className="text-center text-primary font-medium text-xl">{planet.name}</p>
      <p><b>Terrain:</b> <span className="text-neutral-500 capitalize">{planet.terrain}</span></p>
      <p><b>Diameter:</b> <span className="text-neutral-500">{planet.diameter}</span></p>
      <p><b>Climate:</b> <span className="text-neutral-500 capitalize">{planet.climate}</span></p>

      <div>
        <p className="font-semibold">Appears in:</p>
        {planet.films.map((film, i) => (
          <span key={film.title} className="text-neutral-500">
            {film.title}
            {i < planet.films.length - 1 && ','}
          </span>
        ))}
      </div>
    </div>
  )
}
