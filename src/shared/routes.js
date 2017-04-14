/* eslint-disable */
import Loadable from 'react-loadable';
import {Loader} from 'boldr-ui';
import type {Dispatch} from './types/redux';
import App from './components/App';
import Home from './pages/Home';
import About from './pages/About';
import LoginContainer from './scenes/Account/Login/LoginContainer';
import SignupContainer from './scenes/Account/Signup/SignupContainer';
import ForgotPassword from './scenes/Account/ForgotPassword';
import ResetPassword from './scenes/Account/ResetPassword';
import Verify from './scenes/Account/Verify';
import ProfileContainer from './scenes/Profile/ProfileContainer';
import PostListingContainer from './scenes/Blog/PostListing/PostListingContainer';
import SinglePost from './scenes/Blog/SinglePost/SinglePost';
import TagListContainer from './scenes/Blog/TagList/TagListContainer';

import PostEditor from './scenes/Admin/Post/PostEditor';
import NewPostContainer from './scenes/Admin/Post/NewPost/NewPostContainer';
import FileManagerContainer from './scenes/Admin/FileManager/FileManagerContainer';
import FileEditor from './scenes/Admin/FileManager/FileEditor';
import Navigation from './scenes/Admin/Navigation';
import Members from './scenes/Admin/Members';
import Settings from './scenes/Admin/Settings';
import TagsContainer from './scenes/Admin/Tags/TagsContainer';
import TaggedPost from './scenes/Admin/Tags/components/TaggedPost';
import Error404 from './pages/Error404';

import {fetchSettingsIfNeeded} from './state/modules/boldr/settings';
import {fetchMembersIfNeeded} from './state/modules/admin/members';
import {fetchMedia} from './state/modules/attachments/actions';
import {fetchProfileIfNeeded} from './state/modules/users';
import {fetchStatsIfNeeded, fetchActivityIfNeeded} from './state/modules/admin/dashboard/actions';
import {fetchMenusIfNeeded} from './state/modules/boldr/menu/actions';
import {fetchPostsIfNeeded, fetchPostIfNeeded} from './state/modules/blog/posts';
import {fetchTagsIfNeeded, fetchTagPostsIfNeeded} from './state/modules/blog/tags/actions';

function LoadingComponent({error}) {
  if (error) {
    console.log(error);
    return <p>Error: {error}</p>;
  } else {
    return <Loader />;
  }
}

const PostListContainer = Loadable({
  loader: () => import('./scenes/Admin/Post/PostList/PostListContainer'),
  LoadingComponent,
});
const AdminDashboard = Loadable({
  loader: () => import('./scenes/Admin/AdminDashboard'),
  LoadingComponent,
});

export default [
  {
    component: App,
    loadData: async (dispatch: Dispatch) => Promise.all([await dispatch(fetchSettingsIfNeeded())]),
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/about',
        exact: true,
        component: About,
      },
      {
        path: '/blog',
        exact: true,
        component: PostListingContainer,
        loadData: async (dispatch: Dispatch) =>
          Promise.all([await dispatch(fetchPostsIfNeeded()), await dispatch(fetchTagsIfNeeded())]),
      },
      {
        path: '/blog/:slug',
        exact: true,
        component: SinglePost,
        loadData: async (dispatch: Dispatch, params: Object) =>
          Promise.all([await dispatch(fetchPostIfNeeded(params.slug))]),
      },
      {
        path: '/blog/tags/:name',
        exact: true,
        component: TagListContainer,
        loadData: async (dispatch: Dispatch, params: Object) =>
          Promise.all([await dispatch(fetchTagPostsIfNeeded(params.name))]),
      },
      {
        path: '/account/login',
        exact: true,
        component: LoginContainer,
      },
      {
        path: '/account/signup',
        exact: true,
        component: SignupContainer,
      },
      {
        path: '/account/forgot-password',
        exact: true,
        component: ForgotPassword,
      },
      {
        path: '/account/reset-password/:token',
        exact: true,
        component: ResetPassword,
      },
      {
        path: '/account/verify/:token',
        exact: true,
        component: Verify,
      },
      {
        path: '/profiles/:username',
        component: ProfileContainer,
        loadData: async (dispatch: Dispatch, params: Object) =>
          Promise.all([await dispatch(fetchProfileIfNeeded(params.username))]),
      },
      {
        path: '/admin',
        component: AdminDashboard,
        auth: {
          required: true,
          redirect: '/account/login',
          status: 307,
        },
        routes: [
          {
            path: '/admin/posts',
            exact: true,
            strict: true,
            component: PostListContainer,
            loadData: async (dispatch: Dispatch) => Promise.all([await dispatch(fetchPostsIfNeeded())]),
          },
          {
            path: '/admin/new-post',
            exact: true,
            component: NewPostContainer,
          },
          {
            path: '/admin/post-editor/:slug',
            exact: true,
            component: PostEditor,
            loadData: async (dispatch: Dispatch, params: Object) =>
              Promise.all([await dispatch(fetchPostIfNeeded(params.slug))]),
          },
          {
            path: '/admin/filemanager',
            exact: true,
            component: FileManagerContainer,
            loadData: async (dispatch: Dispatch) => Promise.all([await dispatch(fetchMedia())]),
          },
          {
            path: '/admin/file-editor/:id',
            exact: true,
            component: FileEditor,
          },
          {
            path: '/admin/navigation',
            exact: true,
            component: Navigation,
            loadData: async (dispatch: Dispatch) => Promise.all([await dispatch(fetchMenusIfNeeded())]),
          },
          {
            path: '/admin/members',
            exact: true,
            component: Members,
            loadData: async (dispatch: Dispatch) => Promise.all([await dispatch(fetchMembersIfNeeded())]),
          },
          {
            path: '/admin/settings',
            exact: true,
            component: Settings,
          },
          {
            path: '/admin/tags',
            exact: true,
            component: TagsContainer,
            loadData: async (dispatch: Dispatch) => Promise.all([await dispatch(fetchTagsIfNeeded())]),
          },
          {
            path: '/admin/tags/:name',
            exact: true,
            component: TaggedPost,
          },
        ],
      },
      {
        path: '*',
        component: Error404,
      },
    ],
  },
];
