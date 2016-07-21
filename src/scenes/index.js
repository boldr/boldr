export default (store) => {
  if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);

  return {
    path: '/',
    component: require('../components/tpl.CoreLayout').default,
    indexRoute: {
      component: require('./Home').default
    },
    childRoutes: [{
      path: 'about',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./About').default);
        });
      }
    },
    {
      path: 'account',
      component: require('./Account').default,
      childRoutes: [
        {
          path: 'forgot-password',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./Account/ForgotPassword').default);
            });
          }
        },
        {
          path: 'login',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./Account/Login').default);
            });
          }
        },
        {
          path: 'reset-password',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./Account/ResetPassword').default);
            });
          }
        },
        {
          path: 'signup',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./Account/Signup').default);
            });
          }
        }
      ]
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
      path: 'dashboard',
      component: require('./Dashboard/components/tpl.DashboardLayout').default,
      childRoutes: [{
        path: 'articles',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Dashboard/Articles').default);
          });
        }
      },
      {
        path: 'collections',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Dashboard/Collections').default);
          });
        }
      },
      {
        path: 'media',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Dashboard/Media').default);
          });
        }
      },
      {
        path: 'pages',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Dashboard/Pages').default);
          });
        }
      },
      {
        path: 'settings',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Dashboard/Settings').default);
          });
        }
      },
      {
        path: 'users',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Dashboard/Users').default);
          });
        }
      }]
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
