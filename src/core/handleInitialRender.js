import PrettyError from 'pretty-error';
// React Deps
import React from 'react';
import ReactDOM from 'react-dom/server';
import match from 'react-router/lib/match';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import RouterContext from 'react-router/lib/RouterContext';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
import Post from '../api/modules/post/post.model';
import Setting from '../api/modules/setting/setting.model';
import Navigation from '../api/modules/navigation/navigation.model';
// Boldr Deps
import createStore from '../state/createStore';
import getRoutes from '../scenes/index';
import Html from '../components/atm.Html';
import { postsToState } from '../state/dux/post';
import ApiClient from './api/ApiClient';
import { API_PORT, API_HOST, SSR_PORT, HOST } from './config';

const pretty = new PrettyError();

async function handleInitialRender(req, res) {
  if (__DEV__) {
    webpackIsomorphicTools.refresh();
  }

  const preloadPostData = await Post.query().eager('[tags, author]');
  const preloadSettingsData = await Setting.query().findById(1);
  const preloadNavigationData = await Navigation.query().findById(1).eager('[links]');
  const PRELOAD_STATE = {
    posts: postsToState(preloadPostData),
    boldr: preloadSettingsData,
    navigation: preloadNavigationData
  };
  const client = new ApiClient(req);
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const location = memoryHistory.createLocation(req.originalUrl);
  const store = createStore(memoryHistory, client, PRELOAD_STATE);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send(`<!doctype html>
      ${ReactDOM.renderToString(<Html assets={ webpackIsomorphicTools.assets() } store={ store } />)}`);
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({ history, routes: getRoutes(store), location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      const { dispatch, getState } = store;

      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        helpers: client,
        dispatch,
        getState
      };

      const { components } = renderProps;

      trigger('fetch', components, locals).then(() => {
        const component = (
          <Provider store={ store } key="provider">
            <RouterContext { ...renderProps } />
          </Provider>
        );

        const renderHtml = <Html assets={ webpackIsomorphicTools.assets() } component={ component } store={ store } />;

        res.status(200);
        global.navigator = { userAgent: req.headers['user-agent'] };
        res.send(`<!doctype html>
        ${ReactDOM.renderToString(renderHtml)}`);
      }).catch((mountError) => {
        console.error('MOUNT ERROR:', pretty.render(mountError.stack));
        return res.status(500);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
}

export default handleInitialRender;
