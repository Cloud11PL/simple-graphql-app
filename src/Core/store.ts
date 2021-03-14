import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { movieReducer } from 'Core/reducers';

const rootReducer = combineReducers({
  movieReducer: movieReducer,
});

const store = createStore(rootReducer, {}, composeWithDevTools());

export default store;
