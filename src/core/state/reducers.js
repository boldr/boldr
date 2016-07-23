import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import postReducer from 'scenes/Blog/state';
import { articleReducer } from 'scenes/Dashboard/scenes';
import { siteUsersReducer } from 'scenes/Dashboard/scenes/Users';
import { accountReducer, authReducer } from 'scenes/Account';
import boldrReducer from './boldr';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
  boldr: boldrReducer,
  post: postReducer,
  article: articleReducer,
  siteUsers: siteUsersReducer,
  account: accountReducer
});

export default reducers;
