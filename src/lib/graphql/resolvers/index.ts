import {
  Planet,
  PlanetsResponse,
  Person,
  Film,
  Species,
  Vehicle,
} from "../../../types/back-end/planets";
import { fetchPlanets, fetchMultiple, fetchPlanet } from "../../api";

export const resolvers = {
  Query: {
    planets: async (
      _: any,
      { page = 1, limit = 10 }: { page?: number; limit?: number },
    ): Promise<PlanetsResponse> => {
      return fetchPlanets({ page, limit });
    },

    planet: async (_: any, { id }: { id?: number }): Promise<Planet> => {
      return fetchPlanet({ id });
    },
  },

  Planet: {
    residents: async (parent: Planet): Promise<Person[]> => {
      return fetchMultiple<Person>(parent.residents);
    },

    films: async (parent: Planet): Promise<Film[]> => {
      return fetchMultiple<Film>(parent.films);
    },
  },

  Person: {
    species: async (parent: Person): Promise<Species[]> => {
      return fetchMultiple<Species>(parent.species);
    },

    vehicles: async (parent: Person): Promise<Vehicle[]> => {
      return fetchMultiple<Vehicle>(parent.vehicles);
    },
  },
};
