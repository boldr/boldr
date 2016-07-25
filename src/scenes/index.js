import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import Dashboard from './Dashboard/index';
import Account from './Account/index';

import { isLoaded as isAuthLoaded, load as loadAuth } from './Account/state/auth';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth, // how to get the user state
  failureRedirectPath: '/account/login',
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  predicate: auth => auth.isAuthenticated === true,
  allowRedirectBack: true
});

export default (store) => {
  const connect = (fn) => (nextState, replaceState) => fn(store, nextState, replaceState);
  if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);

  return {
    path: '/',
    component: require('../components/tpl.CoreLayout').default,
    indexRoute: {
      component: require('./Home').default
    },
    childRoutes: [
      Dashboard(store, connect),
      Account(store, connect),

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
        onEnter: connect(UserIsAuthenticated.onEnter),
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, UserIsAuthenticated(require('./Profile').default));
          });
        }
      }
    ]
  };
};
