/* @flow */
import { combineReducers } from 'redux';
import type { Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import currentPost from 'scenes/Blog/SinglePost/reducer';
import tagReducer from './dux/tag';
import attachmentReducer from './dux/attachment';
import boldrReducer from './dux/boldr';
import notificationReducer from './dux/notifications';
import authReducer from './dux/auth';
import navigationReducer from './dux/navigation';
import postsReducer from './dux/post';
import type { State as PostState } from './dux/post';
import profileReducer from './dux/profile';
import pageReducer from './dux/page';
import entities from './dux/entities';
import settings from './dux/setting';
import dashboard from 'scenes/Dashboard/reducer';

import type { Action } from './actionTypes';

export type State = {
  posts: PostState
}

export type Dispatch<A: Action> = (action: A) => A;

export default function createReducer(asyncReducers: Object) {
  return combineReducers({
    routing: routerReducer,
    form: formReducer,
    notifications: notificationReducer,
    auth: authReducer,
    pages: pageReducer,
    boldr: boldrReducer,
    dashboard,
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
