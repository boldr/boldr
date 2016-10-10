import Dashboard from './Dashboard/index';
import Account from './Account/index';
import Blog from './Blog';

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
    component: require('./Boldr').default,
    indexRoute: {
      component: require('../pages/Home').default
    },
    childRoutes: [
      Dashboard(store, connect),
      Account(store, connect),
      Blog(store, connect),
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
        path: 'profile',
        getComponent(nextState, cb) {
          System.import('./Profile')
            .then(loadModule(cb))
            .catch(errorLoading);
        }
      },
      {
        path: 'profile/public/:id',
        getComponent(nextState, cb) {
          System.import('./Profile/PublicProfile')
            .then(loadModule(cb))
            .catch(errorLoading);
        }
      }
    ]
  };
};
