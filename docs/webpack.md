#### @wp1
We need to state that we are targetting "node" for our server bundle.
    `target: ifServer('node', 'web')`
#### @wp2
We have to set this to be able to use these items when executing a
server bundle.  Otherwise strangeness happens, like __dirname resolving
to '/'.  There is no effect on our client bundle.

```javascript
    node: {
      __dirname: true,
      __filename: true,
      module: false,
      clearImmediate: false,
      setImmediate: false,
      fs: 'empty'
    }
```
#### @wp3
Anything listed in externals will not be included in our bundle. We don't want our node_modules to be bundled with our server package, prefering them to be resolved via native node module system. Therefore we use the `webpack-node-externals` library to help us generate an externals config that will ignore all node_modules. 

Checkout the binaryDirs and understand this is slightly hacky. We don't want normalize.css to be set as an external, which would essentially make it ignored by our webpack bundle process.  We want 'normalize.css' to be processed by our css loader configuration.  Therefore we lie and say it's a binary which will make webpack ignore the entry.

```javascript
      // @wp3
    externals: removeEmpty([
      // @wp3.1
    ifServer(nodeExternals({
      // @wp3.2
        binaryDirs: ['normalize.css']
      }))
    ])
  ```

#### @wp4
We want to be able to get nice stack traces when running our server bundle. To fully support this we'll also need to configure the `node-source-map-support` module to execute at the start of the server bundle.  This module will allow the node to make use of thesource maps. We also want to be able to link to the source in chrome dev tools whilst we are in development mode. :) When in production client mode we don't want any source maps to decrease our payload sizes. This form has almost no cost.

**@wp4.1** When in production client mode we don't want any source maps to decrease our payload sizes. This form has almost no cost.

```javascript
 devtool: ifElse(isServer || isDev)(
      // @wp4
      'source-map',
      // @wp4.1
      'hidden-source-map'
    ),
```

#### @wp5
Define our entry chunks for our bundle.

We create a seperate chunk containing our vendor modules. This can avoid unnecessary downloads by users as well as speed up development rebuild times by not having to rebundle everything with every change.

```javascript
  entry: merge(
      {
        main: removeEmpty([
          ifDevClient('react-hot-loader/patch'),
          ifDevClient(`webpack-hot-middleware/client?reload=true&path=http://localhost:${process.env.WP_DS_PORT}/__webpack_hmr`),
          path.resolve(ROOT_DIR, `./src/${target}/index.js`)
        ])
      },
      ifClient({
      // @wp5.1
        vendor: removeEmpty([
          'react',
          'react-dom',
          'redux',
          'react-router',
          'react-router-redux',
          'react-redux',
          'axios',
          'redux-thunk',
          'socket.io-client'
        ])
      })
    )
  ```

#### @wp6

Output - The directory in which our bundle should be output. The filename format for our bundle's entries.

@wp6.2 - We include a hash for client caching purposes.  Including a unique has for every build will ensure browsers always fetch our newest bundle.

@wp6.3 - We want a determinable file name when running our server bundles, as we need to be able to target our server start file from our npm scripts.  We don't care about caching on the server anyway. We also want our client development builds to have a determinable name for our hot reloading client bundle server.

@wp6.4 This is the web path under which our webpack bundled output should be considered as being served from.

@wp6.5 - As we run a seperate server for our client and server bundles we need to use an absolute http path for our assets public path. Otherwise we expect our bundled output to be served from this path. 

@wp6.6 - When in server mode we will output our bundle as a commonjs2 module.

```javascript
  output: {
      // @wp6.1
    path: path.resolve(ROOT_DIR, `./build/${target}`),
      filename: ifProdClient(
       // @wp6.2
        '[name]-[hash].js',
        // @wp6.3
        '[name].js'
      ),
      chunkFilename: '[name]-[chunkhash].js',
      // @wp6.4
      publicPath: ifDev(
      // @wp6.5
        `http://localhost:${process.env.WP_DS_PORT}/assets/`,
        '/assets/'
      ),
      // @wp6.6
      libraryTarget: ifServer('commonjs2', 'var')
    },
  ```

#### @wp7
Each key passed into DefinePlugin is an identifier. The values for each key will be inlined into the code replacing any instances of the keys that are found.

If the value is a string it will be used as a code fragment.  
If the value isn’t a string, it will be stringified (including functions).  
If the value is an object all keys are removeEmpty the same way.  
If you prefix typeof to the key, it’s only removeEmpty for typeof calls.  

@wp7.1 - NOTE: The NODE_ENV key is especially important for production builds as React relies on process.env.NODE_ENV for optimizations.

```javascript
new webpack.DefinePlugin({
        'process.env': {
        // @wp7.`
          NODE_ENV: JSON.stringify(mode),
          SSR_PORT: JSON.stringify(process.env.SSR_PORT),
          WP_DS_PORT: JSON.stringify(process.env.CLIENT_DEVSSR_PORT),
          DISABLE_SSR: process.env.DISABLE_SSR,
          WEBSITE_TITLE: JSON.stringify(process.env.WEBSITE_TITLE),
          WEBSITE_DESC: JSON.stringify(process.env.WEBSITE_DESCRIPTION)
        }
      }),
  ```

#### @wp8
Generates a JSON file containing a map of all the output files for our webpack bundle.  A necessisty for our server rendering process as we need to interogate these files in order to know what JS/CSS we need to inject into our HTML.

```javascript
      new AssetsPlugin({
        filename: 'assets.json',
        path: path.resolve(ROOT_DIR, `./build/${target}`)
      }),
```

#### @wp9
Ensures all our vendor bundle is a single file output and that any shared code between our main and vendor bundles are put into the vendor bundle.

```javascript
      ifClient(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: Infinity
        })
      ),
```

#### @wp10
We don't want webpack errors to occur during development as it will kill our dev servers.  
`ifDev(new webpack.NoErrorsPlugin())`

