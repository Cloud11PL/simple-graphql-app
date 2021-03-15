import { createReducer } from '@reduxjs/toolkit';
import { addMovie } from 'Core/actions';
import { PlanetPreview } from 'Common/types';

type ManuallyAddedMovie = {
  title: string;
  planets: PlanetPreview[];
};

type MovieState = {
  movies: ManuallyAddedMovie[];
};

const initialState: MovieState = {
  movies: [],
};

type AddMovieActionType<T> = {
  type: string;
  payload: T;
};

const movieReducer = createReducer(initialState, {
  [addMovie]: (
    state: MovieState,
    {
      payload,
    }: AddMovieActionType<{ movieTitle: string; planets: PlanetPreview[] }>
  ) =>
    {
      const { movieTitle, planets } = payload;
      const newEntry: ManuallyAddedMovie = {
        title: movieTitle,
        planets,
      };
      state.movies.push(newEntry);
    },
});

export { movieReducer };
