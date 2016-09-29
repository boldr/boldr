import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { isServer } from '../core/util/helpers';
import clientMiddleware from '../core/clientMiddleware';
import reducers from './reducers';

const ISDEV = process.env.NODE_ENV === 'development';

/**
 * createStore
 *
 * @param {Object} data     Initial state for store
 * @param {Object} history  the browser history
 * @return {Object} Returns store with state
 */
export default function createStore(history, client, PRELOAD_STATE) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);
  // Logs Redux actions / state to the console.
  const logger = createLogger(loggerOptions);
  const middleware = [clientMiddleware(client), thunkMiddleware, reduxRouterMiddleware, logger];

  const finalCreateStore = compose(
      applyMiddleware(...middleware),
      !isServer ? // if we are NOT the server,
        window.devToolsExtension() : // and redux-devtools is installed in the browser, use it
        f => f
    )(_createStore);

  const store = finalCreateStore(reducers, PRELOAD_STATE);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const nextReducers = reducerModule.default;
        store.replaceReducer(nextReducers);
      });
    });
  }
  return store;
}

const loggerOptions = {
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => action.type !== '@@router/LOCATION_CHANGE'
};
