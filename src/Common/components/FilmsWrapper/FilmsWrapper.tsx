import * as React from 'react';
import { isNil } from 'ramda';

import { FilmRow, LoadingBox } from 'Common/components';
import type { Film } from 'Common/types';
import { useFilms } from 'Common/hooks';

const FilmsWrapper = () => {
  const { loading, data: films } = useFilms();

  return (
    <>
      {!loading && !isNil(films) ? (
        films.map((film: Film) => (
          <FilmRow title={film.title} filmId={film.id} key={film.id} />
        ))
      ) : (
        <LoadingBox />
      )}
    </>
  );
};

export default FilmsWrapper;
