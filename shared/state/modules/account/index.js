import { combineReducers } from 'redux';

import authReducer, { STATE_KEY as AUTH_STATE_KEY } from './auth';
import userReducer, { STATE_KEY as USER_STATE_KEY } from './user';

export const STATE_KEY = 'account';

const accountReducer = combineReducers({
  [AUTH_STATE_KEY]: authReducer,
  [USER_STATE_KEY]: userReducer,
});

export default accountReducer;
