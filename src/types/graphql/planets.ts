import { Person, Planet, PlanetsResponse } from "../backend/planets";

export type GraphqlPlanet = {
  residents: string[];
  films: string[];
} & Omit<Planet, "residents" | "films">;

export type GraphqlPlanetsResponse = {
  results: string[];
} & Omit<PlanetsResponse, "results">;

export type GraphqlPerson = {
  species: string[];
  vehicles: string[];
} & Omit<Person, "species" | "vehicles">;
