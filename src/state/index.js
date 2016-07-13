import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import user from 'state/modules/user';
import message from 'state/modules/message';
import boldr from 'state/modules/boldr';
import article from 'state/modules/article';
import siteUsers from 'scenes/Dashboard/Users/siteUsers.reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  user,
  message,
  boldr,
  article,
  siteUsers
});

export default rootReducer;
