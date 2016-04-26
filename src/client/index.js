import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { trigger } from 'redial';
import { Provider } from 'react-redux';
import { Router, browserHistory, match } from 'react-router';
import { fetchComponentDataBeforeRender } from 'core/api/fetchComponentDataBeforeRender';
import createStore from 'core/redux/store';
import routes from 'core/routes';

import 'client/styles/main.scss';

const store = createStore(browserHistory, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

history.listen(location => {
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
      dispatch: store.dispatch
    };

    const { components } = renderProps;

    if (window.__INITIAL_STATE__) {
      delete window.__INITIAL_STATE__;
    } else {
      trigger('fetch', components, locals);
    }
  });
});

/**
 * Callback function handling frontend route changes.
 */
function onUpdate() {
  if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
    return;
  }
  const { state: { components, params } } = this;
  fetchComponentDataBeforeRender(store.dispatch, components, params);
}

const root = (
  <Provider store={ store }>
    <Router history={ history } onUpdate={ onUpdate } routes={ routes } />
  </Provider>
);

const rootNode = document.getElementById('root');

render(root, rootNode);
