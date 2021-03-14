import { gql } from '@apollo/client';

export const fetchMoviesQuery = gql`
  query {
    allFilms {
      films {
        title
        id
      }
    }
  }
`;

export const fetchMoviePlanets = gql`
  query($id: ID) {
    film(id: $id) {
      planetConnection {
        planets {
          name
          rotationPeriod
          orbitalPeriod
          diameter
          climates
          surfaceWater
          population
        }
      }
    }
  }
`;

export const fetchAllPlanets = gql`
  {
    allPlanets {
      planets {
        name
        id
      }
    }
  }
`;
