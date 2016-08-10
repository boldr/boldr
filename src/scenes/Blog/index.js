import BlogContainer from './BlogContainer';
import PostListing from './components/pg.PostListing';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default (store, connect) => ({
  path: 'blog',
  component: BlogContainer,
  indexRoute: {
    getComponent(nextState, cb) {
      System.import('./components/pg.PostListing')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  childRoutes: [{
    path: '/:slug',
    getComponent(nextState, cb) {
      System.import('./components/pg.SinglePost')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  }]
});
