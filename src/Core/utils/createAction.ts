export type ReduxAction<T> = {
  type: string;
  payload?: T;
};

const createAction = <T>(type: string, payload?: T): ReduxAction<T> => {
  return {
    type,
    payload,
  };
};

export default createAction;
