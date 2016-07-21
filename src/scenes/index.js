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
        console.time('gettingComponent');
        require.ensure([], (require) => {
          cb(null, require('./About').default);

          console.timeEnd('gettingComponent');
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
              console.time('gettingComponent');
              require.ensure([], (require) => {
                cb(null, require('./Account/ForgotPassword').default);

                console.timeEnd('gettingComponent');
              });
            }
          },
          {
            path: 'login',
            getComponent(nextState, cb) {
              console.time('gettingComponent');
              require.ensure([], (require) => {
                cb(null, require('./Account/Login').default);

                console.timeEnd('gettingComponent');
              });
            }
          },
          {
            path: 'reset-password',
            getComponent(nextState, cb) {
              console.time('gettingComponent');
              require.ensure([], (require) => {
                cb(null, require('./Account/ResetPassword').default);

                console.timeEnd('gettingComponent');
              });
            }
          },
          {
            path: 'signup',
            getComponent(nextState, cb) {
              console.time('gettingComponent');
              require.ensure([], (require) => {
                cb(null, require('./Account/Signup').default);

                console.timeEnd('gettingComponent');
              });
            }
          }
        ]
      },
      {
        path: 'blog',
        getComponent(nextState, cb) {
          console.time('gettingComponent');
          require.ensure([], (require) => {
            cb(null, require('./Blog').default);

            console.timeEnd('gettingComponent');
          });
        }
      },

      {
        path: 'profile',
        getComponent(nextState, cb) {
          console.time('gettingComponent');
          require.ensure([], (require) => {
            cb(null, require('./Profile').default);

            console.timeEnd('gettingComponent');
          });
        }
      }
    ]
  };
};
