import BlogContainer from './BlogContainer';
import PostListing from './components/pg.PostListing';

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
    component: require('./components/pg.PostListing').default
  },
  childRoutes: [
  {
    path: ':slug',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pg.SinglePost').default);
      });
    }
  }]
});
