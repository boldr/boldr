import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { syncHistoryWithStore } from 'react-router-redux';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import RouterContext from 'react-router/lib/RouterContext';
import match from 'react-router/lib/match';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
import Navigation from './modules/navigation/navigation.model';
import Setting from './modules/setting/setting.model';
import Post from './modules/post/post.model';
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
  const { dispatch, getState } = store;
  match({
    history,
    routes: getRoutes(store)
  }, (err, redirectLocation, renderProps) => {
    if (err) { return res.status(500).end('internal server error'); }
    if (redirectLocation) { return res.redirect(redirectLocation.pathname); }
    if (!renderProps) { return res.status(404).end('not found'); }
    const finds = [
      Navigation.query().findById(1),
      Setting.query().findById(1),
      Post.query().eager('[tags, author]')
    ];
    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
      dispatch,
      getState
    };

    const { components } = renderProps;

    // const initialState = store.getState();
    Promise.all(finds)
  .then(([primaryNav, boldr, posts]) => {
    const initialState = {
      boldr: {
        isLoading: true,
        siteName: boldr.site_name,
        description: boldr.site_description,
        logo: boldr.site_logo,
        siteUrl: boldr.site_url,
        favicon: boldr.site_favicon,
        slogan: boldr.site_slogan,
        analyticsId: boldr.google_analytics,
        configuration: boldr.configuration,
        primaryNav: {
          links: primaryNav.items.links
        }
      }
    };


    trigger('fetch', components, locals).then(() => {
      const content = ReactDOM.renderToString(
          <Provider store={ store } key="provider">
              <RouterContext { ...renderProps } />
          </Provider>
        );


      res.status(200).send(renderHtmlPage(content, initialState));
    }).catch(err => res.status(500).send(err.stack));
  });
    });
};
