import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import createMiddleware from './clientMiddleware';

const ISDEV = process.env.NODE_ENV === 'development';
export default function createStore(history, client, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);
  const logger = createLogger();
  const middleware = [thunkMiddleware, createMiddleware(client), reduxRouterMiddleware, logger];

  let finalCreateStore;
  if (ISDEV) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f // eslint-disable-line
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  const store = finalCreateStore(reducers, data);


  if (ISDEV && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
