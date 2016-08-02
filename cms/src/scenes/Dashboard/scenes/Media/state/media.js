import request from 'superagent';
import fetch from 'core/fetch';
import { notificationSend } from 'core/state/notifications';
import { API_BASE, API_AUTH } from 'core/api';
import * as at from './constants';

const INITIAL_STATE = {

};
/**
 * Media Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function MediaReducer(state = INITIAL_STATE, action = {}) {
  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {

    default:
      return state;
  }
}
