import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const createStoreWitMiddleware = applyMiddleware(sagaMiddleware)(createStore);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStoreWitMiddleware(rootReducer);
  sagaMiddleware.run(rootSaga);

  return store;
}
