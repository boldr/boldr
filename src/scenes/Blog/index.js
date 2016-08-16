import BlogContainer from './BlogContainer';

if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default (store, connect) => ({
  path: '/blog',
  component: BlogContainer,
  indexRoute: {
    component: require('./scenes/PostListing').default
  },
  childRoutes: [{
    path: ':slug',
    getComponent(nextState, cb) {
      System.import('./scenes/SinglePost')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  }, {
    path: 'search/:query',
    getComponent(nextState, cb) {
      System.import('./scenes/Search')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  }, {
    path: 'tags',
    getComponent(nextState, cb) {
      System.import('./scenes/TagList')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  }]
});
