/* eslint-disable new-cap */ /* eslint-disable no-use-before-define */
require('babel-polyfill');

// Webpack config for development
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic.config'));

const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const ROOT_DIR = path.join(__dirname, '..', '..');
const assetsPath = path.resolve(__dirname, '../../static/dist');
const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT + 1) || 3001;

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
    require('postcss-custom-media')(),
    require('postcss-media-minmax')(),
    require('lost')(),
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
      'webpack-hot-middleware/client?reload=true&path=http://' + host + ':' + port + '/__webpack_hmr',
      path.resolve(ROOT_DIR, 'src/client.js')
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-router',
      'react-router-redux',
      'react-redux',
      'superagent',
      'redux-thunk',
      'redux-form',
      'material-ui',
      'react-tap-event-plugin',
      'redial',
      'react-router-scroll',
      'webfontloader',
      'react-cookie'
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
        loader: 'babel-loader',
        exclude: /node_modules|\.git/,
        babelrc: false,
        query: {
          cacheDirectory: true,
          presets: ['react-hmre', 'es2015', 'react', 'stage-0'],
          plugins: [
            'transform-decorators-legacy',
            'transform-runtime',
            'transform-flow-strip-types',
            'lodash',
            'react-hot-loader/babel'
          ]
        }
      }),
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      createSourceLoader({
        happy: { id: 'sass' },
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }),
      createSourceLoader({
        happy: { id: 'css' },
        test: /\.css$/,
        loader: 'style!css?modules&camelCase&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]!postcss'
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
      src: path.join(ROOT_DIR, 'src'),
      state: path.resolve(ROOT_DIR, 'src/state'),
      scenes: path.resolve(ROOT_DIR, 'src/scenes'),
      core: path.resolve(ROOT_DIR, 'src/core'),
      api: path.resolve(ROOT_DIR, 'src/api'),
      db: path.resolve(ROOT_DIR, 'src/db')
    }
  },
  postcss: postCSSConfig,
  node: {
    global: true,
    fs: 'empty'
  },
  plugins: [
    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'exports?self.fetch!whatwg-fetch',
      React: 'react'
    }),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    webpackIsomorphicToolsPlugin.development(),
    createHappyPlugin('jsx'),
    createHappyPlugin('sass'),
    createHappyPlugin('css')
  ]
};

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
    enabled: true,

    // disable happypack caching with HAPPY_CACHE=0
    cache: true,

    // make happypack more verbose with HAPPY_VERBOSE=1
    verbose: true
  });
}
