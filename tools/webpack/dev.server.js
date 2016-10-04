const Express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const debug = require('debug')('boldr:webpack-ds');
const config = require('../../config');
const conf = config.conf;
const wpConfig = require('./index.js');

const compiler = webpack(wpConfig);

const serverOptions = {
  contentBase: `http://${conf.get('ssr.host')}:${conf.get('hmr')}`,
  quiet: true,
  noInfo: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  inline: true,
  serverSideRender: true,
  lazy: false,
  stats: { colors: true },
  publicPath: wpConfig.output.publicPath
};

const app = new Express();

app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));

app.listen(conf.get('hmr'), (err) => {
  if (err) {
    debug(err);
  } else {
    debug('==> 🚧  Webpack development server listening on port %s', conf.get('hmr'));
  }
});
