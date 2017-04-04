import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from './reducers';
import createMiddleware from './middleware/clientMiddleware';

export default function configureStore(preloadedState, history) {
  const reduxRouterMiddleware = routerMiddleware(history);

  // const middleware = [thunk.withExtraArgument(axios), reduxRouterMiddleware];

  // const enhancers = [applyMiddleware(...middleware)];
  const middlewares = [thunk.withExtraArgument(axios), reduxRouterMiddleware];

  const enhancers = [
    applyMiddleware(...middlewares),
    __DEV__ && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  ];

  // Creating the store
  const store = createStore(rootReducer, preloadedState, compose(...enhancers));

  // Hot reload
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
