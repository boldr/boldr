import WebpackIsomorphicTools from 'webpack-isomorphic-tools';

import isomorphicToolsConfig from '../../tools/webpack/isomorphic.tools.config';
import projectConfig, { paths } from '../../tools/config';

const projectBasePath = paths('base');

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = projectConfig.__DEV__;
global.__PROD__ = projectConfig.__PROD__;
global.__DEBUG__ = projectConfig.__DEBUG__;

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools#mainjs
global.webpackIsomorphicTools =
  new WebpackIsomorphicTools(isomorphicToolsConfig)
    .development(__DEV__)
    .server(projectBasePath, () => {
      require('./server');
    });
