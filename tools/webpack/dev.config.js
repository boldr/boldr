/* eslint-disable new-cap */ /* eslint-disable no-use-before-define */
require('babel-polyfill');

// Webpack config for development
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const autoprefixer = require('autoprefixer');

const WebpackHelpers = require('./helpers');
const babelish = require('./loaders/babel.loader');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic.config'));
const styling = require('./loaders/styling.loader');

const ROOT_DIR = path.join(__dirname, '..', '..');
const assetsPath = path.resolve(__dirname, '../../static/dist');
const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT + 1) || 3001;
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

const cssChunkNaming = '[name]__[local]___[hash:base64:5]';

const cssLoader = [
  'css?modules',
  'sourceMap',
  'importLoaders=2',
  `localIdentName=${cssChunkNaming}`
].join('&');
const postCSSConfig = function() {
  return [
    require('postcss-import')({
      path: path.join(ROOT_DIR, 'src', 'styles'),
      // addDependencyTo is used for hot-reloading in webpack
      addDependencyTo: webpack
    }),
    // Note: you must set postcss-mixins before simple-vars and nested
    require('postcss-mixins')(),
    require('postcss-simple-vars')(),
    // Unwrap nested rules like how Sass does it
    require('postcss-nested')(),
    //  parse CSS and add vendor prefixes to CSS rules
    require('autoprefixer')({
      browsers: ['last 2 versions', 'IE > 8']
    }),
    // A PostCSS plugin to console.log() the messages registered by other
    // PostCSS plugins
    require('postcss-reporter')({
      clearMessages: true
    })
  ];
};
const webpackConfig = module.exports = {
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  context: path.resolve(ROOT_DIR),
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
      path.resolve(ROOT_DIR, './src/client.js')
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'http://' + host + ':' + port + '/dist/'
  },
  module: {
    loaders: [
      createSourceLoader({
        happy: { id: 'jsx' },
        test: /\.jsx?$/,
        loaders: ['babel?' + JSON.stringify(babelish)]
      }),

      createSourceLoader({
        happy: { id: 'json' },
        test: /\.json$/,
        loader: 'json-loader'
      }),

      createSourceLoader({
        happy: { id: 'sass' },
        test: /\.scss$/,
        loaders: [
          'style', 'css', 'postcss', 'sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
        ]
      }),
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
    ]
  },
  progress: true,
  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    alias: {
      components: path.resolve(ROOT_DIR, 'src/components'),
      src: path.resolve(ROOT_DIR, 'src'),
      state: path.resolve(ROOT_DIR, 'src/state'),
      scenes: path.resolve(ROOT_DIR, 'src/scenes'),
      server: path.resolve(ROOT_DIR, 'server')
    }
  },
  postcss: postCSSConfig,
  plugins: [
    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'exports?self.fetch!whatwg-fetch',
      React: 'react'
    }),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
      __DLLS__: process.env.WEBPACK_DLLS === '1'
    }),
    webpackIsomorphicToolsPlugin.development(),

    createHappyPlugin('jsx'),
    createHappyPlugin('json'),
    createHappyPlugin('sass')
  ]
};

if (process.env.WEBPACK_DLLS === '1') {
  WebpackHelpers.installVendorDLL(webpackConfig, 'vendor');
}

// restrict loader to files under /src
function createSourceLoader(spec) {
  return Object.keys(spec).reduce((x, key) => {
    x[key] = spec[key];

    return x;
  }, {
    include: [path.resolve(ROOT_DIR, 'src')]
  });
}

function createHappyPlugin(id) {
  return new HappyPack({
    id,
    threadPool: happyThreadPool,

    // disable happypack with HAPPY=0
    enabled: process.env.HAPPY !== '0',

    // disable happypack caching with HAPPY_CACHE=0
    cache: process.env.HAPPY_CACHE !== '0',

    // make happypack more verbose with HAPPY_VERBOSE=1
    verbose: process.env.HAPPY_VERBOSE === '1'
  });
}
