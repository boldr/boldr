const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default (store, connect) => ({
  path: 'dashboard',
  component: require('./Dashboard').default,
  indexRoute: {
    component: require('./DashboardWidgets').default
  },
  childRoutes: [{
    path: 'articles',
    getComponent(nextState, cb) {
      System.import('./ArticleList')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'articles/editor/:slug',
    getComponent(nextState, cb) {
      System.import('./ArticleEditor')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'articles/new',
    getComponent(nextState, cb) {
      System.import('./NewArticle/NewArticleContainer')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'media',
    getComponent(nextState, cb) {
      System.import('./Media')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'navigation',
    getComponent(nextState, cb) {
      System.import('./Navigation')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'pages',
    getComponent(nextState, cb) {
      System.import('./Pages')
        .then(loadModule(cb))
        .catch(errorLoading);
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
    path: 'members',
    getComponent(nextState, cb) {
      System.import('./Members')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  }]
});
