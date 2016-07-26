import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import blogReducer from 'scenes/Blog/state/blog';
import articleReducer from 'scenes/Dashboard/scenes/Articles/state/article';
import siteUsersReducer from 'scenes/Dashboard/scenes/Users/state/siteUsers';
import accountReducer from 'scenes/Account/state/account';
import authReducer from 'scenes/Account/state/auth';
import boldrReducer from './boldr';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
  boldr: boldrReducer,
  blog: blogReducer,
  article: articleReducer,
  siteUsers: siteUsersReducer,
  account: accountReducer
});

export default reducers;
