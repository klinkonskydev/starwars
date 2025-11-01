import { gql } from "@apollo/client";

export const GET_PLANETS = gql`
  query GetPlanets($page: Int, $search: String) {
    planets(page: $page, search: $search) {
      count
      next
      previous
      results {
        name
        diameter
        climate
        terrain
        url
        films {
          title
          episode_id
        }
      }
    }
  }
`;

export const GET_PLANET_DETAILS = gql`
  query GetPlanetDetails($id: Int!) {
    planet(id: $id) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      population
      residents {
        name
        hair_color
        eye_color
        gender
        species {
          name
        }
        vehicles {
          name
          model
        }
      }
    }
  }
`;
