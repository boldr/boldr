import Dashboard from './Dashboard/index';

import { isLoaded as isAuthLoaded, load as loadAuth } from './Account/state/auth';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
      function checkAuth() {
        const { auth: { isAuthenticated }} = store.getState();
        if (!isAuthenticated) {
          // oops, not logged in, so can't be here!
          replace('/');
        }
        cb();
      }

      if (!isAuthLoaded(store.getState())) {
        store.dispatch(loadAuth()).then(checkAuth);
      } else {
        checkAuth();
      }
    };
  if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);

  return {
    path: '/',
    component: require('../components/tpl.CoreLayout').default,
    indexRoute: {
      component: require('./Home').default
    },
    childRoutes: [
      Dashboard(store),

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
        path: 'account/forgot-password',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Account/scenes/ForgotPassword').default);
          });
        }
      },
      {
        path: 'account/login',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Account/scenes/Login').default);
          });
        }
      },
      {
        path: 'account/reset-password',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Account/scenes/ResetPassword').default);
          });
        }
      },
      {
        path: 'account/signup',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Account/scenes/Signup').default);
          });
        }
      },
      {
        path: 'profile',
        onEnter: requireLogin,
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Profile').default);
          });
        }
      }
    ]
  };
};
