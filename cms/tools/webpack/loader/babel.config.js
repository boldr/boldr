const BABELQUERY = {
  babelrc: false,
  cacheDirectory: true,
  // Do not include superfluous whitespace characters and line terminators.
  // When set to "auto" compact is set to true on input sizes of >100KB.
  compact: 'auto',
  presets: ['react-hmre', 'react', 'es2015-webpack', 'stage-0'],
  plugins: [['transform-runtime', { polyfill: true, regenerator: false }],
    'react-hot-loader/babel', 'transform-decorators-legacy']
};

export default BABELQUERY;
