import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import clientMiddleware from './middleware/clientMiddleware';
import createReducer from './reducers';

/**
 * createStore
 *
 * @param {Object} data     Initial state for store
 * @param {Object} history  the browser history
 * @param {Object} client   The client api middleware
 * @return {Object} Returns store with state
 */
export default function createStore(history, client, PRELOAD_STATE) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [clientMiddleware(client), thunkMiddleware, reduxRouterMiddleware];


  const finalCreateStore = applyMiddleware(...middleware)(_createStore);

  const store = finalCreateStore(createReducer(), PRELOAD_STATE);
  store.asyncReducers = {};
  return store;
}
