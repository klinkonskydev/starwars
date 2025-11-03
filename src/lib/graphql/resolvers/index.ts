import {
  Planet,
  PlanetsResponse,
  Person,
  Film,
  Species,
  Vehicle,
} from "../../../types/backend/planets";
import { GraphqlPerson, GraphqlPlanet } from "../../../types/graphql/planets";
import { fetchPlanets, fetchMultiple, fetchPlanet } from "../../api";

export const resolvers = {
  Query: {
    planets: async (
      _: any,
      { page, search }: { page?: number; search?: string },
    ): Promise<PlanetsResponse> => {
      return fetchPlanets({ page, search });
    },

    planet: async (_: any, { id }: { id?: number }): Promise<Planet> => {
      return fetchPlanet({ id });
    },
  },

  Planet: {
    residents: async (parent: GraphqlPlanet): Promise<Person[]> => {
      return fetchMultiple<Person>(parent.residents);
    },

    films: async (parent: GraphqlPlanet): Promise<Film[]> => {
      return fetchMultiple<Film>(parent.films);
    },
  },

  Person: {
    species: async (parent: GraphqlPerson): Promise<Species[]> => {
      return fetchMultiple<Species>(parent.species);
    },

    vehicles: async (parent: GraphqlPerson): Promise<Vehicle[]> => {
      return fetchMultiple<Vehicle>(parent.vehicles);
    },
  },
};
