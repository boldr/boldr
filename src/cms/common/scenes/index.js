import BoldrWrapper from './BoldrWrapper';
import Account from './Account';
import Blog from './Blog';
import Dashboard from './Dashboard';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default (store) => {
  const connect = (fn) => (nextState, replaceState) => fn(store, nextState, replaceState);
  if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);

  return {
    path: '/',
    component: BoldrWrapper,
    indexRoute: {
      component: require('../pages/Home').default
    },
    childRoutes: [
      Account(store, connect),
      Blog(store, connect),
      Dashboard(store, connect),
      {
        path: 'about',
        getComponent(nextState, cb) {
          require.ensure(['../pages/About'], (require) => {
            const AboutPage = require('../pages/About').default;

            cb(null, AboutPage);
          });
        }
      },
      {
        path: '*',
        getComponent(location, cb) {
          System.import('../pages/Error404')
            .then(loadModule(cb))
            .catch(errorLoading);
        }
      }
    ]
  };
};
