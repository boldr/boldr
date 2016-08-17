if (process.env.NODE_ENV === 'production') {
  module.exports = require('./createStore.prod').default; // eslint-disable-line global-require
} else {
  module.exports = require('./createStore.dev').default; // eslint-disable-line global-require
}
