import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import postReducer from 'scenes/Blog/state';
import { articleReducer } from 'scenes/Dashboard/scenes';
import { siteUsersReducer } from 'scenes/Dashboard/scenes/Users';
import accountReducer from 'scenes/Account/state/account';
import authReducer from 'scenes/Account/state/auth';
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
