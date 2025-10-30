export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Person[];
  films: Film[];
  created: string;
  edited: string;
  url: string;
};

export type PlanetsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

export type Person = {
  name: string;
  hair_color: string;
  eye_color: string;
  gender: string;
  species: Species[];
  vehicles: Vehicle[];
  url: string;
};

export type Film = {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  url: string;
};

export type Species = {
  name: string;
  classification: string;
  designation: string;
  language: string;
  url: string;
};

export type Vehicle = {
  name: string;
  model: string;
  manufacturer: string;
  vehicle_class: string;
  url: string;
};
