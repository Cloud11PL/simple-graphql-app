import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { movieReducer } from 'Core/reducers';

const rootReducer = combineReducers({
  movies: movieReducer,
});

const store = createStore(rootReducer, {}, composeWithDevTools());
export type ReduxState = ReturnType<typeof rootReducer>;

export default store;
