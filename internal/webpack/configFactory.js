/* eslint-disable eqeqeq */
import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import appRootDir from 'app-root-dir';
import BabiliPlugin from 'babili-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import NamedModulesPlugin from 'webpack/lib/NamedModulesPlugin';
import { removeNil, mergeDeep, ifElse, logger } from 'boldr-utils';
import config from '../../config';
import { happyPackPlugin } from '../utils';
import withServiceWorker from './withServiceWorker'; // eslint-disable-line

const ROOT_DIR = appRootDir.get();

const prefetches = [];

const prefetchPlugins = prefetches.map(
  specifier => new webpack.PrefetchPlugin(specifier),
);

function removeEmptyKeys(obj) {
  const copy = {};
  for (const key in obj) {
    if (!(obj[key] == null || obj[key].length === 0)) {
      copy[key] = obj[key];
    }
  }

  return copy;
}
const vendors = [
  'react',
  'react-dom',
  'redux',
  'react-router-dom',
  'redux-thunk',
  'react-redux',
  'react-router-redux',
  'react-router-config',
  'axios',
  'react-dropzone',
  'draft-js',
  'boldr-ui',
  'react-loadable',
  'animate-components',
  'classnames',
  'date-fns',
  'draft-js-import-html',
  'draftjs-to-html',
  'normalizr',
  'react-draft-wysiwyg',
  'react-transition-group',
  'reselect',
  'serialize-javascript',
  'styled-components',
  'webfontloader',
];
/**
 * @param  {Object} buildOptions - The build options.
 * @param  {target} buildOptions.target - The bundle target
 *  (e.g 'clinet' || 'server').
 * @param  {target} buildOptions.optimize - Build an optimised
 * version of the bundle?
 *
 * @return {Object} The webpack configuration.
 */
export default function webpackConfigFactory(buildOptions) {
  const { target, optimize = false } = buildOptions;

  const isProd = optimize;
  const isDev = !isProd;
  const isClient = target === 'client';
  const isServer = target === 'server';
  const isNode = !isClient;

  const ifDev = ifElse(isDev);
  const ifProd = ifElse(isProd);
  const ifNode = ifElse(isNode);
  const ifClient = ifElse(isClient);
  const ifDevClient = ifElse(isDev && isClient);
  const ifProdClient = ifElse(isProd && isClient);

  logger.start(
    `Creating ${isProd ? 'an optimized' : 'a development'} bundle for the "${target}"`,// eslint-disable-line
  );

  const bundleConfig = config(['bundles', target]);

  if (!bundleConfig) {
    logger.error(`No bundle configuration exists for target: ${target}`);
    throw new Error();
  }

  let webpackConfig = {// eslint-disable-line
    target: isClient ? 'web' : 'node',

    entry: removeEmptyKeys({
      index: removeNil([
        ifDevClient(
          () =>
            `webpack-hot-middleware/client?reload=true&path=http://${config('host')}:${config('hmrPort')}/__webpack_hmr`,
        ), // eslint-disable-line
        path.resolve(ROOT_DIR, `src/${target}/index.js`),
      ]),
      vendor: ifProd(vendors),
    }),
    output: {
      path: path.resolve(ROOT_DIR, bundleConfig.outputPath),
      filename: ifProdClient('[name]-[chunkhash].js', '[name].js'),
      chunkFilename: '[name]-[chunkhash].js',
      libraryTarget: ifNode('commonjs2', 'var'),
      publicPath: ifDev(
        `http://${config('host')}:${config('hmrPort')}${config('bundles.client.webPath')}`,
        bundleConfig.webPath,
      ),
    },
    cache: true,
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss'],
      modules: [
        path.resolve(ROOT_DIR, './src'),
        path.resolve(ROOT_DIR, './node_modules'),
      ],
      mainFields: ifNode(
        ['module', 'jsnext:main', 'main'],
        ['web', 'browser', 'style', 'module', 'jsnext:main', 'main'],
      ),
    },
    node: {
      __dirname: true,
      __filename: true,
      fs: 'empty',
      global: true,
      crypto: 'empty',
    },
    externals: removeNil([
      ifNode(() =>
        nodeExternals({
          whitelist: removeNil(['source-map-support/register']).concat(
            config('extWhitelist') || [],
          ), // eslint-disable-line
        }),
      ),
    ]),

    devtool: isDev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
    performance: ifProdClient({ hints: 'warning' }, false),
    plugins: removeNil([
      ...prefetchPlugins,
      new webpack.LoaderOptionsPlugin({
        minimize: isProd,
        debug: !isProd,
      }),
      ifNode(
        () =>
          new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: false,
          }),
      ),
      ifDev(() => new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        // show a warning when there is a circular dependency
        failOnError: false,
      })),
      ifDev(() => new CaseSensitivePathsPlugin()),
      ifProdClient(() => new WebpackMd5Hash()),
      new webpack.EnvironmentPlugin({
        NODE_ENV: isProd ? 'production' : 'development',
        BUILD_FLAG_IS_CLIENT: isClient,
        BUILD_FLAG_IS_SERVER: isServer,
        BUILD_FLAG_IS_NODE: isNode,
        BUILD_FLAG_IS_DEV: isDev,
      }),
      new webpack.DefinePlugin({
        IS_DEV: JSON.stringify(isDev),
        __SERVER__: JSON.stringify(isServer),
        DEBUG: JSON.stringify(process.env.DEBUG),
        __USE_PROXY__: JSON.stringify(process.env.USE_PROXY),
      }),

      ifClient(
        () =>
          new AssetsPlugin({
            filename: 'assets.json',
            path: path.resolve(ROOT_DIR, bundleConfig.outputPath),
          }),
      ),
      ifDev(() => new webpack.NoEmitOnErrorsPlugin()),
      ifDevClient(() => new webpack.HotModuleReplacementPlugin()),

      happyPackPlugin({
        name: 'hp-js',
        loaders: [
          {
            path: 'babel-loader',
            query: {
              babelrc: false,
              compact: true,
              cacheDirectory: true,
              sourceMaps: false,
              comments: false,
              presets: [
                ifClient([
                  'env',
                  {
                    useBuiltIns: true,
                    debug: false,
                    modules: false,
                    targets: {
                      node: 'current',
                    },
                    exclude: [
                      'transform-async-to-generator',
                      'transform-regenerator',
                    ], // eslint-disable-line
                  },
                ]),
                ifNode([
                  'env',
                  {
                    useBuiltIns: true,
                    debug: false,
                    modules: false,
                    targets: {
                      node: 'current',
                    },
                    exclude: [
                      'transform-async-to-generator',
                      'transform-regenerator',
                    ], // eslint-disable-line
                  },
                ]),
                'stage-2',
                'react',
              ].filter(x => x != null),
              plugins: [
                'syntax-dynamic-import',
                'syntax-flow',
                'syntax-trailing-function-commas',
                'transform-decorators-legacy',
                'fast-async',
                ifClient([
                  'react-loadable/babel',
                  {
                    server: true,
                    webpack: true,
                  },
                ]),
                ifNode('dynamic-import-node'),
                ifClient('dynamic-import-webpack'),
                ifClient(['transform-react-jsx', { useBuiltIns: true }]),
                ifProd('transform-flow-strip-types'),
                ifProdClient([
                  'transform-react-remove-prop-types',
                  { removeImport: true },
                ]),
                ifDev('transform-react-jsx-self'),
                ifDev('transform-react-jsx-source'),
              ].filter(x => x != null),
            },
          },
        ],
      }),
      happyPackPlugin({
        name: 'hp-scss',
        loaders: [
          { path: 'style-loader' },
          {
            path: 'css-loader',
            use: {
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              sourceMap: true,
              modules: true,
            },
          },
          {
            path: 'postcss-loader',
          },
          {
            path: 'sass-loader',
          },
        ],
      }),
      ifDevClient(() => new NamedModulesPlugin()),
      ifProdClient(() => new webpack.HashedModuleIdsPlugin()),
      ifProdClient(() => new BabiliPlugin({}, { comments: false })),
      ifProdClient(
        () =>
          new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module =>
              module.context && module.context.includes('node_modules'),
          }),
      ),
      ifProdClient(
        () =>
          new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity,
          }),
      ),
      ifProdClient(
        () =>
          new webpack.optimize.CommonsChunkPlugin({
            async: true,
            children: true,
            minChunks: 4,
          }),
      ),
      ifProdClient(() => new webpack.optimize.AggressiveMergingPlugin()),
      ifProdClient(
        () =>
          new ExtractTextPlugin({
            filename: '[name]-[chunkhash].css',
            allChunks: true,
          }),
      ),
    ]),
    module: {
      rules: removeNil([
        {
          test: /\.jsx?$/,
          use: ['cache-loader', 'happypack/loader?id=hp-js'],
          exclude: [
            /node_modules/,
            path.resolve(ROOT_DIR, './.happypack'),
            path.resolve(ROOT_DIR, './boldrCMS'),
            path.resolve(ROOT_DIR, './internal'),
            path.resolve(ROOT_DIR, './.cache-loader'),
          ],
          include: removeNil([
            ...bundleConfig.srcPaths.map(srcPath =>
              path.resolve(ROOT_DIR, srcPath),
            ),
            ifProdClient(path.resolve(ROOT_DIR, 'src/html')),
          ]),
        },
        ifElse(isClient || isServer)(
          mergeDeep(
            { test: /(\.scss|\.css)$/ },
            ifDevClient({
              loaders: ['happypack/loader?id=hp-scss'],
            }),
            ifProdClient(() => ({
              loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?sourceMap&importLoaders=2!postcss-loader!sass-loader', // eslint-disable-line
              }),
            })),
            ifNode({
              loaders: ['css-loader/locals', 'postcss-loader', 'sass-loader'], // eslint-disable-line
            }),
          ),
        ),
        {
          test: /\.svg(\?v=\d+.\d+.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]', // eslint-disable-line
        },
        {
          test: /\.(eot|woff|woff2|ttf|otf|png|jpg|jpeg|jp2|jpx|jxr|gif|webp|mp4|mp3|ogg|pdf|html)$/, // eslint-disable-line
          loader: 'file-loader',
          options: {
            name: ifProdClient('file-[hash:base62:8].[ext]', '[name].[ext]'),
            emitFile: isClient,
          },
        },
      ]),
    },
  };
  // if (isProd && isClient) {
  //   webpackConfig = withServiceWorker(webpackConfig, bundleConfig);
  // }
  // Apply the configuration middleware.
  return config('plugins.webpackConfig')(webpackConfig, buildOptions);
}
