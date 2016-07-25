import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth, // how to get the user state
  failureRedirectPath: '/account/login',
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  predicate: auth => auth.isAuthenticated === true,
  allowRedirectBack: true
});


if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);
export default (store, connect) => ({

  path: 'account',
  component: require('./components/tpl.AccountLayou').default,
  childRoutes: [{
        path: 'forgot-password',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./scenes/ForgotPassword').default);
          });
        }
      },
      {
        path: 'login',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./scenes/Login').default);
          });
        }
      },
      {
        path: 'preferences',
        onEnter: connect(UserIsAuthenticated.onEnter),
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, UserIsAuthenticated(require('./scenes/Preferences/components/tpl.Preferences').default));
          });
        }
      },
      {
        path: 'reset-password',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./scenes/ResetPassword').default);
          });
        }
      },
      {
        path: 'signup',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./scenes/Signup').default);
          });
        }
      }]
});
