import { useQuery, QueryResult } from '@apollo/client';
import { path } from 'ramda';

import { fetchMoviesQuery } from 'Common/services/queries';
import type { Film } from 'Common/types';

type FilmsResponse = {
  allFilms: {
    films: Film[];
  };
};

const useFilms = (): QueryResult => {
  const { data, ...rest } = useQuery<FilmsResponse>(fetchMoviesQuery);

  const films: Film[] | undefined = path(['allFilms', 'films'], data);

  return { ...rest, data: films };
};

export default useFilms;
