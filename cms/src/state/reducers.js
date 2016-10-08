import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import currentPost from 'scenes/Blog/SinglePost/reducer';
import tagReducer from './dux/tag';
import membersReducer from './dux/members';
import mediaReducer from './dux/media';
import boldrReducer from './dux/boldr';
import notificationReducer from './dux/notifications';
import authReducer from './dux/auth';
import navigationReducer from './dux/navigation';
import postsReducer from './dux/post';
import profileReducer from './dux/profile';
import pageReducer, { pageSelector } from './dux/page';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  notifications: notificationReducer,
  auth: authReducer,
  pages: pageReducer,
  boldr: boldrReducer,
  posts: postsReducer,
  pagebyurl: pageSelector,
  navigation: navigationReducer,
  currentPost,
  members: membersReducer,
  media: mediaReducer,
  tags: tagReducer,
  profile: profileReducer
});

export default reducers;
