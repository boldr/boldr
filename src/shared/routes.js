/* @flow */

// import type { Dispatch } from './types';
import { fetchSettingsIfNeeded } from './state/modules/boldr/settings';

import Home from './pages/Home';
import About from './pages/About';
import AdminContainer from './scenes/Admin/AdminContainer';
import BlogContainer from './scenes/Blog/BlogContainer';
import PostListingContainer from './scenes/Blog/PostListing/PostListingContainer';
import Error404 from './pages/Error404';

import { fetchPostsIfNeeded } from './state/modules/blog/posts';
import { fetchTagsIfNeeded } from './state/modules/blog/tags/actions';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    // loadData: (dispatch: Dispatch) => Promise.all([
    //    // Register your server-side call action(s) here
    //   dispatch(fetchUsersIfNeeded()),
    // ]),
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/blog/posts',
    exact: true,
    component: PostListingContainer,
    loadData: (dispatch) => Promise.all([
       // Register your server-side call action(s) here
      dispatch(fetchPostsIfNeeded()),
      dispatch(fetchTagsIfNeeded()),
    ]),
  },
  {
    path: '/admin',
    exact: true,
    component: AdminContainer,
    routes: [

    ],
  },
  {
    path: '*',
    component: Error404,
  },
];
