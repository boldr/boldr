import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import postsReducer from 'scenes/Blog/state/post';
import articleReducer from 'scenes/Dashboard/scenes/Articles/state/article';
import siteUsersReducer from 'scenes/Dashboard/scenes/Users/state/siteUsers';
import mediaReducer from 'scenes/Dashboard/scenes/Media/state/media';
import accountReducer from 'scenes/Account/state/account';
import authReducer from 'scenes/Account/state/auth';

import boldrReducer from './boldr';
import notificationReducer from './notifications';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  notifications: notificationReducer,
  auth: authReducer,
  boldr: boldrReducer,
  posts: postsReducer,
  article: articleReducer,
  siteUsers: siteUsersReducer,
  media: mediaReducer,
  account: accountReducer
});

export default reducers;
