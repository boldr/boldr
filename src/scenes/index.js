import Dashboard from './Dashboard/index';
import Account from './Account/index';

export default (store) => {
  if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);

  return {
    path: '/',
    component: require('../components/tpl.CoreLayout').default,
    indexRoute: {
      component: require('./Home').default
    },
    childRoutes: [
      Dashboard(store),
      Account(store),
      {
        path: 'about',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./About').default);
          });
        }
      },
      {
        path: 'blog',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Blog').default);
          });
        }
      },
      {
        path: 'profile',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Profile').default);
          });
        }
      }
    ]
  };
};
