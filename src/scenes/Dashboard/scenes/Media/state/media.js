import request from 'superagent';
import fetch from '../../../../../core/fetch';
import { notificationSend } from '../../../../Boldr/state/notifications';
import { API_BASE, API_MEDIA } from '../../../../../core/config';
import * as at from './constants';

const fetchMediaStart = () => {
  return { type: at.GET_MEDIA_REQUEST };
};
// Fetch Articles Success
export function fetchMediaSuccess(response) {
  return {
    type: at.GET_MEDIA_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
export function fetchMediaFail(err) {
  return {
    type: at.GET_MEDIA_FAIL,
    error: err
  };
}

export function fetchMedia() {
  return (dispatch) => {
    dispatch(fetchMediaStart());
    return request
      .get(`${API_MEDIA}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(fetchMediaSuccess(response));
        }
      })
      .catch(err => {
        dispatch(fetchMediaFail(err));
      });
  };
}

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
  isLoading: false,
  error: null,
  files: []
};
/**
 * Media Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function mediaReducer(state = INITIAL_STATE, action = {}) {
  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case at.GET_MEDIA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case at.GET_MEDIA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        files: action.payload
      };
    case at.GET_MEDIA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
