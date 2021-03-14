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

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addMovie: {
      const { payload } = action;
      const { movieTitle, planets } = payload;
      const newEntry: ManuallyAddedMovie = {
          title: movieTitle,
          planets,
      }
      state.movies = [...state.movies, newEntry];
      break;
    }
    default:
      return initialState;
  }
};

export { movieReducer };
