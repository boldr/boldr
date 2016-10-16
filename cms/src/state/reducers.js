import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { merge } from 'lodash';
import currentPost from 'scenes/Blog/SinglePost/reducer';
import tagReducer from './dux/tag';
import attachmentReducer from './dux/attachment';
import boldrReducer from './dux/boldr';
import notificationReducer from './dux/notifications';
import authReducer from './dux/auth';
import navigationReducer from './dux/navigation';
import postsReducer from './dux/post';
import profileReducer from './dux/profile';
import pageReducer from './dux/page';
import entities from './dux/entities';
import settings from './dux/setting';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    form: formReducer,
    notifications: notificationReducer,
    auth: authReducer,
    pages: pageReducer,
    boldr: boldrReducer,
    navigation: navigationReducer,
    currentPost,
    attachments: attachmentReducer,
    tags: tagReducer,
    profile: profileReducer,
    posts: postsReducer,
    settings,
    entities,
    ...asyncReducers
  });
}
