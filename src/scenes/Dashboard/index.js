export default (store) => ({

    path: 'dashboard',
    component: require('./components/tpl.DashboardLayout').default,
    childRoutes: [{
      path: 'articles',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Articles').default);
        });
      }
    },
    {
      path: 'collections',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Collections').default);
        });
      }
    },
    {
      path: 'media',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Media').default);
        });
      }
    },
    {
      path: 'pages',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Pages').default);
        });
      }
    },
    {
      path: 'settings',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Settings').default);
        });
      }
    },
    {
      path: 'users',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Users').default);
        });
      }
    }]
  })
