import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import postsReducer from '../../scenes/Blog/state/post';
import currentPost from '../../scenes/Blog/scenes/SinglePost/reducer';
import membersReducer from '../../scenes/Dashboard/scenes/Members/state/members';
import mediaReducer from '../../scenes/Dashboard/scenes/Media/state/media';
import accountReducer from '../../scenes/Account/state/account';
import authReducer from '../../scenes/Account/state/auth';
import boldrReducer from '../../scenes/Boldr/state/boldr';
import notificationReducer from '../../scenes/Boldr/state/notifications';


const reducers = combineReducers({
  routing: routerReducer,
  notifications: notificationReducer,
  auth: authReducer,
  boldr: boldrReducer,
  posts: postsReducer,
  currentPost,
  members: membersReducer,
  media: mediaReducer,
  users: accountReducer,
  form: formReducer
});

export default reducers;
