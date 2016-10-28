import { getAsyncInjectors } from 'core/utils/injectAsync';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  // HMR falls over when a Route uses a dynamic component resolution
  // property (i.e. getComponent or getComponents).  As a workaround for any
  // of your components that are resolved dynamically require them here
  require('./DashboardWidgets');
  require('./Post/PostList');
  require('./Post/PostEditor');
}
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
    childRoutes: [
      {
        path: 'posts',
        getComponent(nextState, cb) {
          System.import('./Post/PostList')
          .then(loadModule(cb))
          .catch(errorLoading);
        }
      },
      {
        path: 'posts/editor/:slug',
        getComponent(nextState, cb) {
          System.import('./Post/PostEditor')
          .then(loadModule(cb))
          .catch(errorLoading);
        }
      },
      {
        path: 'posts/new',
        getComponent(nextState, cb) {
          System.import('./Post/NewPost/NewPostContainer')
          .then(loadModule(cb))
          .catch(errorLoading);
        }
      },
      {
        path: 'filemanager',
        getComponent(nextState, cb) {
          System.import('./FileManager')
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