/* eslint-disable dot-notation */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import { blogReducer } from '../scenes/Blog/state';
import { adminReducer } from '../scenes/Admin/state';

import api from '../core/api';
import {
  authReducer,
  boldrReducer,
  usersReducer,
  mediaReducer,
  notificationReducer,
  entitiesReducer,
} from './modules';

export default function configureStore(apolloClient, history, preloadedState) {
  const reduxRouterMiddleware = routerMiddleware(history);

  const middlewares = [
    thunk.withExtraArgument(api),
    apolloClient.middleware(),
    reduxRouterMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    IS_DEV &&
      typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  ];

  // Creating the store
  const store = createStore(
    combineReducers({
      apollo: apolloClient.reducer(),
      boldr: boldrReducer,
      blog: blogReducer,
      users: usersReducer,
      auth: authReducer,
      admin: adminReducer,
      media: mediaReducer,
      notifications: notificationReducer,
      entities: entitiesReducer,
      form: formReducer,
      router: routerReducer,
    }),
    preloadedState,
    compose(...enhancers),
  );

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
