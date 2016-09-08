import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  failureRedirectPath: '/account/login',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  predicate: auth => auth.isAuthenticated === true,
  allowRedirectBack: true
});

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default (store, connect) => ({

  path: 'account',
  component: require('./components/tpl.AccountLayout').default,
  childRoutes: [{
    path: 'forgot-password',
    getComponent(nextState, cb) {
      System.import('./ForgotPassword')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'login',
    getComponent(nextState, cb) {
      System.import('./Login')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'preferences',
    onEnter: connect(UserIsAuthenticated.onEnter),
    getComponent(nextState, cb) {
      System.import('./Preferences/components/tpl.Preferences')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'reset-password/:token',
    getComponent(nextState, cb) {
      System.import('./ResetPassword')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'signup',
    getComponent(nextState, cb) {
      System.import('./Signup')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  }]
});
