import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { isServer } from '../util/helpers';
import reducers from './reducers';

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
 * @return {Object} Returns store with state
 */
export default function createStore(history, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);
  const logger = createLogger(loggerOptions); // dont show in production
  const middleware = [thunkMiddleware, reduxRouterMiddleware, logger];

  const finalCreateStore = compose(
      applyMiddleware(...middleware),
      !isServer ? window.devToolsExtension() : f => f // only if we're on the client
    )(_createStore);

  const store = finalCreateStore(reducers, data);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const nextReducers = reducerModule.default;
        // const nextReducers = createReducers(store.asyncReducers);
        store.replaceReducer(nextReducers);
      });
    });
  }
  return store;
}
