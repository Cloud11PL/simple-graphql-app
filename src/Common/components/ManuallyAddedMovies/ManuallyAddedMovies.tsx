import * as React from 'react';
import { isNil } from 'ramda';
import { useSelector } from 'react-redux';

import type { ReduxState } from 'Core/store';
import { CustomMovie } from './components';

const ManuallyAddedMovies = () => {
  const movies = useSelector((state: ReduxState) => state.movies?.movies);

  return (
    <>
      {!isNil(movies)
        ? movies.map((movie) => (
            <CustomMovie title={movie.title} planets={movie.planets} />
          ))
        : null}
    </>
  );
};

export default ManuallyAddedMovies;
