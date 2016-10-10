import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { merge } from 'lodash';
import currentPost from 'scenes/Blog/SinglePost/reducer';
import tagReducer from './dux/tag';
import mediaReducer from './dux/media';
import boldrReducer from './dux/boldr';
import notificationReducer from './dux/notifications';
import authReducer from './dux/auth';
import navigationReducer from './dux/navigation';
import postsReducer from './dux/post';
import profileReducer from './dux/profile';
import pageReducer, { pageSelector } from './dux/page';

function entities(state = {}, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }
  return state;
}

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    form: formReducer,
    notifications: notificationReducer,
    auth: authReducer,
    pages: pageReducer,
    boldr: boldrReducer,
    posts: postsReducer,
    navigation: navigationReducer,
    currentPost,
    entities,
    media: mediaReducer,
    tags: tagReducer,
    profile: profileReducer,
    ...asyncReducers
  });
}
