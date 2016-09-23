import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth, // how to get the user state
  failureRedirectPath: '/account/login',
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
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

  path: 'dashboard',
  onEnter: connect(UserIsAuthenticated.onEnter),
  component: UserIsAuthenticated(require('./Dashboard').default),
  indexRoute: {
    component: require('./scenes/DashboardWidgets').default
  },
  childRoutes: [{
    path: 'articles',
    getComponent(nextState, cb) {
      System.import('./scenes/Articles')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  },
  {
    path: 'articles/editor/:slug',
    getComponent(nextState, cb) {
      System.import('./scenes/Articles/components/pg.ArticleEditor')
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
      System.import('./scenes/Media')
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
      System.import('./scenes/Pages')
        .then(loadModule(cb))
        .catch(errorLoading);
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
    path: 'members',
    getComponent(nextState, cb) {
      System.import('./scenes/Members')
        .then(loadModule(cb))
        .catch(errorLoading);
    }
  }]
});
