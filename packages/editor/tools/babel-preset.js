const BABEL_ENV = process.env.BABEL_ENV;
const building = BABEL_ENV != undefined && BABEL_ENV !== 'cjs';

const plugins = [];

if (BABEL_ENV === 'umd') {
  plugins.push('external-helpers');
}

if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-flow-strip-types', 'dev-expression', 'transform-react-remove-prop-types');
}

module.exports = {
  presets: [
    [
      'env',
      {
        loose: true,
        modules: building ? false : 'commonjs',
      },
    ],
    'stage-1',
    'react',
  ],
  plugins: plugins,
};
