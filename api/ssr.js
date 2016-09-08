import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { syncHistoryWithStore } from 'react-router-redux';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import RouterContext from 'react-router/lib/RouterContext';
import match from 'react-router/lib/match';
import { Provider } from 'react-redux';
import { trigger } from 'redial';

import createStore from '../cms/core/state/createStore';
import getRoutes from '../cms/scenes/index';
import Html from './Html';

export default (req, res) => {
  if (__DEV__) {
    webpackIsomorphicTools.refresh();
  }
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send('<!doctype html>\n' + // eslint-disable-line
      ReactDOM.renderToString(<Html assets={ webpackIsomorphicTools.assets() } store={ store } />));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({
    history,
    routes: getRoutes(store)
  }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      const { dispatch } = store;

      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        dispatch
      };

      const { components } = renderProps;

      trigger('fetch', components, locals).then(() => {
        const component = (
          <Provider store={ store } key="provider">
              <RouterContext { ...renderProps } />
          </Provider>
        );
        res.status(200);

        res.send('<!doctype html>\n' + // eslint-disable-line
          ReactDOM.renderToString(
            <Html assets={ webpackIsomorphicTools.assets() } component={ component } store={ store } />
          ));
      }).catch((mountError) => {
        console.log(mountError.stack);
        return res.status(500);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
};
