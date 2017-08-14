import { createStore , applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//NOTE : this is for inject initial state, ini berguna buat server side rendering
/*
  you can add middleware in store too, wow
 */
const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      reduxImmutableStateInvariant()
    )
  );
};

export default configureStore;