import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import currentPost from 'scenes/Blog/SinglePost/reducer';
import profileReducer from 'scenes/Profile/reducer';
import tagReducer from './dux/tag';
import membersReducer from './dux/members';
import mediaReducer from './dux/media';
import boldrReducer from './dux/boldr';
import notificationReducer from './dux/notifications';
import authReducer from './dux/auth';
import navigationReducer from './dux/navigation';
import postsReducer from './dux/post';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,

  notifications: notificationReducer,
  auth: authReducer,
  boldr: boldrReducer,
  posts: postsReducer,
  navigation: navigationReducer,
  currentPost,
  members: membersReducer,
  media: mediaReducer,
  tags: tagReducer,
  profile: profileReducer
});

export default reducers;
