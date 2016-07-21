import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import boldrReducer from './boldrReducer';
import postReducer from '../../scenes/Blog/state';
import articleReducer from '../../scenes/Dashboard/Articles/state';
import siteUsersReducer from '../../scenes/Dashboard/Users/state';
import { accountReducer } from '../../scenes/Account/state';

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
