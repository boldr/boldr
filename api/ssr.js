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
import renderHtmlPage from './Html';

export default (req, res) => {
  if (__DEV__) {
    webpackIsomorphicTools.refresh();
  }
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({
    history,
    routes: getRoutes(store)
  }, (err, redirectLocation, renderProps) => {
    if (err) { return res.status(500).end('internal server error'); }
    if (redirectLocation) { return res.redirect(redirectLocation.pathname); }
    if (!renderProps) { return res.status(404).end('not found'); }
    const { dispatch } = store;

    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
      dispatch
    };

    const { components } = renderProps;

    trigger('fetch', components, locals).then(() => {
      const content = ReactDOM.renderToString(
          <Provider store={ store } key="provider">
              <RouterContext { ...renderProps } />
          </Provider>
        );
      const initialState = store.getState();
      res.status(200).send(renderHtmlPage(content, initialState));
    }).catch(err => res.status(500).send(err.stack));
  });
};
