/**
 * BOLDR REDUCER
 * src/state/dux/boldr/index
 * @exports boldrReducer
 */
import { combineReducers } from 'redux';
import { push } from 'react-router-redux';
import * as api from 'core/services/api';
import navReducer from './nav';
import settingsReducer from './settings';


export function goHome() {
  return (dispatch) => {
    dispatch(push('/'));
  };
}

export function goTo(pathname, options = {}) {
  return push({
    pathname,
    search: options.search,
    state: options.state
  });
}

const boldrReducer = combineReducers({
  nav: navReducer,
  settings: settingsReducer
});

export default boldrReducer;
