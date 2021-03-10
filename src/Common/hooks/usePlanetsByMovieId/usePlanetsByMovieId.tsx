import { useQuery, QueryResult } from '@apollo/client';
import { path } from 'ramda';

import { fetchMoviePlanets } from 'Common/services/queries';

type Variables = {
  id: string;
};

type Planets = {
  name: string;
  diameter: number;
  orbitalPeriod: number;
  population: number;
  rotationPeriod: number;
  surfaceWater: number;
  climates: string[];
};

type PlanetResponse = {
  film: {
    planetConnection: {
      planets: Planets[];
    };
  };
};

const usePlanetsByMovieId = ({ filmId }: { filmId: string }): QueryResult => {
  const { loading, data, ...rest } = useQuery<PlanetResponse, Variables>(fetchMoviePlanets, {
    variables: { id: filmId },
  });

  const planets = path(['film', 'planetConnection', 'planets'], data);

  return { ...rest, loading, data: planets };
};

export default usePlanetsByMovieId;
