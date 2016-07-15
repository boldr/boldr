require('babel-polyfill');

// Webpack config for creating the production bundle.
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic.config'));

const ROOT_DIR = path.join(__dirname, '..', '..');
const assetsPath = path.resolve(ROOT_DIR, './static/dist');

module.exports = {
  devtool: 'hidden-source-map',
  target: 'web',
  context: path.resolve(ROOT_DIR),
  entry: {
    main: [
      path.resolve(ROOT_DIR, './src/client.js')
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
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules|\.git/,
        babelrc: false,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'react-optimize', 'stage-0'],
          plugins: [
            'transform-decorators-legacy',
            'transform-runtime',
            'lodash'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!postcss!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
    ]
  },
  progress: true,
  resolve: {
    extensions: ['', '.json', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    fallback: path.join(ROOT_DIR, 'node_modules'),
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
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    // css files from the extract-text-plugin loader
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },

      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
    new webpack.ProvidePlugin({
      fetch: 'exports?self.fetch!whatwg-fetch',
      React: 'react'
    }),
    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        dead_code: true
      }
    }),

    webpackIsomorphicToolsPlugin
  ]
};
