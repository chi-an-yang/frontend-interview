import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from '@redux-devtools/extension';

import { fullSearchReducer } from '../reducer';
import rootSaga from '../saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(fullSearchReducer, bindMiddleware(sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
