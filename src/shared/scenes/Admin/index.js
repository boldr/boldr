import { loadRoute, errorLoading } from 'boldr-utils';
import { RequireAuth } from '../../components';
import DashboardLayout from './Dashboard/DashboardLayout';
import DashboardContainer from './Dashboard/DashboardContainer';

export default store => {
  /* istanbul ignore next */
  return {
    path: 'admin',
    component: RequireAuth(DashboardLayout),
    indexRoute: {
      getComponent(nextState, cb) {
        import('./Dashboard/DashboardContainer').then(loadRoute(cb)).catch(errorLoading);
      },
    },
    childRoutes: [
      {
        path: 'posts',
        getComponent(nextState, cb) {
          import('./Post/PostList/PostListContainer').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'posts/editor/:slug',
        getComponent(nextState, cb) {
          import('./Post/PostEditor').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'posts/new',
        getComponent(nextState, cb) {
          import('./Post/NewPost/NewPostContainer').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'filemanager',
        getComponent(nextState, cb) {
          import('./FileManager').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'filemanager/:id/editor',
        getComponent(nextState, cb) {
          import('./FileManager/FileEditor').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'navigation',
        getComponent(nextState, cb) {
          import('./Navigation').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'members',
        getComponent(nextState, cb) {
          import('./Members').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'settings',
        getComponent(nextState, cb) {
          import('./Settings').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'templates',
        getComponent(nextState, cb) {
          import('./Templates').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'tags',
        getComponent(nextState, cb) {
          import('./Tags/TagsContainer').then(loadRoute(cb)).catch(errorLoading);
        },
      },
      {
        path: 'tags/:name',
        getComponent(nextState, cb) {
          import('./Tags/components/TaggedPost').then(loadRoute(cb)).catch(errorLoading);
        },
      },
    ],
  };
};
