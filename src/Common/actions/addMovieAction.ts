import createAction from 'Core/utils/createAction';
import { addMovie } from 'Core/actions';

const addMovieAction = (payload: any) => createAction(addMovie, payload);

export default addMovieAction;
