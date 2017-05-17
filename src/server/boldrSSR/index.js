/* @flow */
import 'isomorphic-fetch';
import React from 'react';
import type { $Response, $Request } from 'express';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import { StaticRouter } from 'react-router-dom';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
// $FlowIssue
import styleSheet from 'styled-components/lib/models/StyleSheet';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { serverClient } from '../../shared/core/apollo';
import { configureStore } from '../../shared/state';
import renderRoutes from '../../shared/core/addRoutes';
import routes from '../../shared/routes';
import muiTheme from '../../shared/templates/muiTheme';
import CreateHtml from './CreateHtml';

const debug = require('debug')('boldr:ssrMW');

async function boldrSSR(req: $Request, res: $Response) {
  if (typeof res.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }

  const { nonce } = res.locals;
  global.navigator = { userAgent: req.headers['user-agent'] };

  // Create a new server Apollo client for this request
  const client = serverClient();

  const history = createHistory({ initialEntries: [req.url] });
  const store = configureStore(client, history, {
    boldr: { settings: { meta: { initialPageLoad: true } } },
  });

  const routerContext = {};

  // Generate the HTML from our React tree.  We're wrapping the result
  // in `react-router`'s <StaticRouter> which will pull out URL info and
  // store it in our empty `route` object
  const appComponent = (
    <StaticRouter location={req.url} context={routerContext}>
      <ApolloProvider store={store} client={client}>
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          {renderRoutes(routes)}
        </MuiThemeProvider>
      </ApolloProvider>
    </StaticRouter>
  );

  // Wait for GraphQL data to be available in our initial render,
  // before dumping HTML back to the client
  await getDataFromTree(appComponent)
    .then(() => {
      // Checking is page is 404
      const status = routerContext.status === '404' ? 404 : 200;
      // render the application wrapped with provider, static router and the
      // store.

      const helmet = Helmet.rewind();
      // render styled-components styleSheets to string.
      const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
      const reactAppString = renderToString(appComponent);
      const html = renderToStaticMarkup(
        <CreateHtml
          reactAppString={reactAppString}
          nonce={nonce}
          helmet={helmet}
          styles={styles}
          preloadedState={store.getState()}
        />,
      );

      // Check if the render result contains a redirect, if so we need to set
      // the specific status and redirect header and end the response
      if (routerContext.url) {
        res.writeHead(301, {
          Location: routerContext.url,
        });
        res.end();

        return;
      }

      // Pass the route and initial state into html template
      return res.status(status).send(`<!DOCTYPE html>${html}`);
    })
    .catch(err => {
      debug(`💩  Ran into issues rendering routes: ${err}`);
      return res.status(500).send(`Ran into a few issues: ${err}`);
    });
}
export default boldrSSR;
