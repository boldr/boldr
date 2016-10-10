import { getAsyncInjectors } from 'core/util/injectAsync';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default (store, connect) => {
  const { injectReducer } = getAsyncInjectors(store);
  return {
    path: 'dashboard',
    component: require('./Dashboard').default,
    indexRoute: {
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('./Activity/reducer'),
          System.import('./DashboardWidgets')
        ]);
        const renderRoute = loadModule(cb);
        importModules.then(([reducer, component]) => {
          injectReducer('activity', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
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
      path: 'content',
      getComponent(nextState, cb) {
        System.import('./Collections')
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
        const importModules = Promise.all([
          System.import('./Members/reducer'),
          System.import('./Members')
        ]);
        const renderRoute = loadModule(cb);
        importModules.then(([reducer, component]) => {
          injectReducer('members', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    }]
  };
};
