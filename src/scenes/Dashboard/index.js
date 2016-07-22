export default (store) => ({

  path: 'dashboard',
  component: require('./components/tpl.DashboardLayout').default,
  childRoutes: [{
    path: 'articles',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./scenes/Articles').default);
      });
    }
  },
  {
    path: 'collections',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./scenes/Collections').default);
      });
    }
  },
  {
    path: 'media',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./scenes/Media').default);
      });
    }
  },
  {
    path: 'pages',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./scenes/Pages').default);
      });
    }
  },
  {
    path: 'settings',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./scenes/Settings').default);
      });
    }
  },
  {
    path: 'users',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./scenes/Users').default);
      });
    }
  }]
});
