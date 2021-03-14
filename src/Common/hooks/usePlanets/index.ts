import { useQuery, QueryResult } from '@apollo/client';
import { path } from 'ramda';

import { fetchAllPlanets } from 'Common/services/queries';
import type { PlanetPreview } from 'Common/types';

type PlanetsResponse = {
  allPlanets: {
    planets: PlanetPreview[];
  };
};

const useAllPlanets = (): QueryResult => {
  const { data, ...rest } = useQuery<PlanetsResponse>(fetchAllPlanets);

  const planets: PlanetPreview[] | null =
    path(['allPlanets', 'planets'], data) || null;

  return { ...rest, data: planets };
};

export default useAllPlanets;
