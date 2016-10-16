import { push } from 'react-router-redux';
import * as api from 'core/services/api';
import * as types from '../actionTypes';
import { notificationSend } from './notifications';
// ------------------------------------
// React-Router-Redux push location
// ------------------------------------
export function goHome() {
  return (dispatch) => {
    dispatch(push('/'));
  };
}

/**
 * Change route path.
 *
 * @param {string} pathname
 * @param {Object} [options]
 * @param {string} [options.param]
 * @param {string} [options.query]
 * @param {Object} [options.state]
 *
 * @returns {function}
 */
export function goTo(pathname, options = {}) {
  return push({
    pathname,
    search: options.search,
    state: options.state
  });
}

export default function boldrReducer(state = {}, action) {
  switch (action.type) {

    default:
      return state;
  }
}
