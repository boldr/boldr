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


if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);
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
      require.ensure([], (require) => {
        cb(null, require('./scenes/Articles').default);
      });
    }
  },
  {
    path: 'articles/editor(/:slug)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./scenes/Articles/components/pg.ArticleEditor').default);
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
    path: 'setup',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pg.Setup').default);
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
