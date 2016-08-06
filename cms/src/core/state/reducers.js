import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import postsReducer from 'scenes/Blog/state/post';
import siteUsersReducer from 'scenes/Dashboard/scenes/Users/state/siteUsers';
import mediaReducer from 'scenes/Dashboard/scenes/Media/state/media';
import accountReducer from 'scenes/Account/state/account';
import authReducer from 'scenes/Account/state/auth';

import boldrReducer from 'scenes/Boldr/state/boldr';
import notificationReducer from 'scenes/Boldr/state/notifications';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  notifications: notificationReducer,
  auth: authReducer,
  boldr: boldrReducer,
  posts: postsReducer,
  siteUsers: siteUsersReducer,
  media: mediaReducer,
  account: accountReducer
});

export default reducers;
