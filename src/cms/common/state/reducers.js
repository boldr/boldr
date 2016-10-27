import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as formReducer } from 'redux-form';
import notificationReducer from './dux/notifications';
import entitiesReducer from './dux/entities';
import pagesReducer from './dux/pages';
import authReducer from './dux/auth';
import attachmentReducer from './dux/attachment';
import boldrReducer from './dux/boldr';
import postReducer from './dux/post';
import tagReducer from './dux/tag';
import dashboard from 'scenes/Dashboard/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    reduxAsyncConnect,
    notifications: notificationReducer,
    entities: entitiesReducer,
    dashboard,
    auth: authReducer,
    pages: pagesReducer,
    posts: postReducer,
    attachments: attachmentReducer,
    boldr: boldrReducer,
    tags: tagReducer,
    form: formReducer,
    ...asyncReducers
  });
}
