import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Planet {
    name: String!
    rotation_period: String!
    orbital_period: String!
    diameter: String!
    climate: String!
    gravity: String!
    terrain: String!
    surface_water: String!
    population: String!
    residents: [Person!]!
    films: [Film!]!
    url: String!
  }

  type PlanetsResponse {
    count: Int!
    next: String
    previous: String
    results: [Planet!]!
  }

  type Person {
    name: String!
    hair_color: String!
    eye_color: String!
    gender: String!
    species: [Species!]!
    vehicles: [Vehicle!]!
  }

  type Film {
    title: String!
    episode_id: Int!
    director: String!
    release_date: String!
  }

  type Species {
    name: String!
    classification: String!
    designation: String!
    language: String!
  }

  type Vehicle {
    name: String!
    model: String!
    manufacturer: String!
    vehicle_class: String!
  }

  type Query {
    planets(page: Int, search: String): PlanetsResponse!
    planet(id: Int!): Planet
  }
`;
