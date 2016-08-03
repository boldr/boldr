import request from 'superagent';
import fetch from 'core/fetch';
import { notificationSend } from 'core/state/notifications';
import { API_BASE, API_MEDIA } from 'core/api';
import * as at from './constants';


const beginUpload = () => {
  return { type: at.UPLOAD_REQUEST };
};
// Fetch Articles Success
export function uploadSuccess(response) {
  return {
    type: at.UPLOAD_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
export function uploadFail(err) {
  return {
    type: at.UPLOAD_FAIL,
    error: err
  };
}

export function uploadFiles(payload) {
  return (dispatch) => {
    dispatch(beginUpload());
    return request
      .post(`${API_MEDIA}/dashboard`, payload)
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .then(response => {
        if (response.status === 201) {
          dispatch(uploadSuccess(response));
        }
      })
      .catch(err => {
        dispatch(uploadFail(err));
      });
  };
}

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
