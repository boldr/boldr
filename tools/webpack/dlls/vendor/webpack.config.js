const path = require('path');
const webpack = require('webpack');

const ROOT_DIR = path.resolve(__dirname, '..', '..', '..', '..');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? null : 'inline-source-map',

  output: {
    path: path.join(ROOT_DIR, 'static', 'dist', 'dlls'),
    filename: 'dll__[name].js',
    library: 'DLL_[name]_[hash]'
  },

  entry: {
    vendor: [
      'babel-polyfill',
      'core-js',
      'lodash',
      /*
        <babel-runtime>
        Generate this list using the following command against the stdout of
        webpack running against the source bundle config (dev/prod.js):
        ./node_modules/.bin/webpack \
          --config ./tools/webpack/dev.config.js \
          --display-modules | egrep -o 'babel-runtime/\S+' | sed 's/\.js$//' | sort | uniq

          If you see babel-runtime/~/core-js/** you will want to remove everything up to the core-js/
          like ive done below.

          IMPORTANT list your vendor files (react deps) after the babel stuff.
       */
      'babel-runtime/core-js/is-iterable',
      'babel-runtime/core-js/object/assign',
      'babel-runtime/core-js/object/create',
      'babel-runtime/core-js/object/define-property',
      'babel-runtime/core-js/object/set-prototype-of',
      'babel-runtime/core-js/symbol',
      'babel-runtime/core-js/symbol/iterator',
      'babel-runtime/helpers/classCallCheck',
      'babel-runtime/helpers/createClass',
      'babel-runtime/helpers/defineProperty',
      'babel-runtime/helpers/extends',
      'babel-runtime/helpers/inherits',
      'babel-runtime/helpers/objectWithoutProperties',
      'babel-runtime/helpers/possibleConstructorReturn',
      'babel-runtime/helpers/slicedToArray',
      'babel-runtime/helpers/typeof',

      // </babel-runtime>
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
      'webfontloader'
    ]
  },

  resolve: {
    root: path.resolve(ROOT_DIR, 'node_modules'),
    extensions: ['', '.js'],
    postfixes: []
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    new webpack.DllPlugin({
      path: path.join(ROOT_DIR, 'tools/webpack/dlls/manifests/[name].json'),
      name: 'DLL_[name]_[hash]',
      exclude: [
        'sequelize',
        'body-parser',
        'passport',
        'compression',
        'helmet',
        'lusca',
        'hpp',
        'express',
        'method-override',
        'aws-sdk',
        'bluebird',
        'boom',
        'composable-middleware',
        'connect-redis',
        'cors',
        'express-flash',
        'express-jwt',
        'express-session',
        'express-winston',
        'http-proxy',
        'ioredis',
        'limax',
        'morgan',
        'multer',
        'multer-s3',
        'node-uuid',
        'nodemailer',
        'nodemailer-mailgun-transport',
        'passport-facebook',
        'passport-github',
        'passport-google-oauth',
        'passport-local',
        'passport-twitter',
        'pg-native',
        'pretty-error',
        'serve-favicon',
        'winston'
      ]
    })
  ]
};
