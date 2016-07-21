import AccountBase from './AccountBase';

export const Account = {

  path: 'account',
  component: AccountBase,
  childRoutes: [{
    path: 'forgot-password',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./ForgotPassword').default);
      });
    }
  },
  {
    path: 'login',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./Login').default);
      });
    }
  },
  {
    path: 'reset-password',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./ResetPassword').default);
      });
    }
  },
  {
    path: 'signup',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./Signup').default);
      });
    }
  }]
};
