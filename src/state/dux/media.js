import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { notificationSend } from 'state/dux/notifications';
import { API_BASE, API_MEDIA, TOKEN_KEY } from 'core/config';
import * as api from 'core/api/mediaService';
import * as types from '../actionTypes';

const fetchMediaStart = () => {
  return { type: types.GET_MEDIA_REQUEST };
};
// Fetch Articles Success
export function fetchMediaSuccess(response) {
  return {
    type: types.GET_MEDIA_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
export function fetchMediaFail(err) {
  return {
    type: types.GET_MEDIA_FAIL,
    error: err
  };
}

export function fetchMedia() {
  return (dispatch) => {
    dispatch(fetchMediaStart());
    return api.doFetchMedia()
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
  return { type: types.UPLOAD_REQUEST };
};
// Fetch Articles Success
export function uploadSuccess(response) {
  return {
    type: types.UPLOAD_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
export function uploadFail(err) {
  return {
    type: types.UPLOAD_FAIL,
    error: err
  };
}

export function uploadFiles(payload) {
  return (dispatch) => {
    dispatch(beginUpload());
    return api.doUpload(payload)
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
    case types.GET_MEDIA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_MEDIA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        files: action.payload
      };
    case types.GET_MEDIA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
