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
      System.import('./scenes/ForgotPassword')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'login',
    getComponent(nextState, cb) {
      System.import('./scenes/Login')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'preferences',
    onEnter: connect(UserIsAuthenticated.onEnter),
    getComponent(nextState, cb) {
      System.import('./scenes/Preferences/components/tpl.Preferences')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'reset-password/:token',
    getComponent(nextState, cb) {
      System.import('./scenes/ResetPassword')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'signup',
    getComponent(nextState, cb) {
      System.import('./scenes/Signup')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  }]
});
