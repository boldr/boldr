import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import Dashboard from './Dashboard/index';
import Account from './Account/index';
import Blog from './Blog';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};
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
    component: require('./Boldr').default,
    indexRoute: {
      component: require('../pages/Home').default
    },
    childRoutes: [
      Dashboard(store, connect),
      Account(store, connect),
      Blog(store, connect),
      {
        path: 'profile',
        onEnter: connect(UserIsAuthenticated.onEnter),
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, UserIsAuthenticated(require('./Profile').default));
          });
        }
      },
      {
        path: 'profile/public/:id',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Profile/components/org.ProfilePublic').default);
          });
        }
      }
    ]
  };
};
