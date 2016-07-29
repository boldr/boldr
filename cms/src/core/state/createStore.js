import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { isServer } from '../util/helpers';
import reducers from './reducers';
import createMiddleware from './clientMiddleware';

const ISDEV = process.env.NODE_ENV === 'development';
const loggerOptions = {
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => action.type !== '@@router/LOCATION_CHANGE'
};
/**
 * createStore
 *
 * @param {Object} data     Initial state for store
 * @param {Object} history  the browser history
 * @param {Object} client   The client api middleware
 * @return {Object} Returns store with state
 */
export default function createStore(history, client, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);
  const logger = ISDEV ? createLogger(loggerOptions) : f => f; // dont show in production
  const middleware = [thunkMiddleware, createMiddleware(client), reduxRouterMiddleware, logger];

  let finalCreateStore;
  if (ISDEV) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      !isServer ? window.devToolsExtension() : f => f // only if we're on the client
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  const store = finalCreateStore(reducers, data);


  if (ISDEV && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');

      store.replaceReducer(nextReducer.default || nextReducer);
    });
  }

  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  // store.replaceReducer(createReducer(store.asyncReducers));
}
