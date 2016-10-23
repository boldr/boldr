import { notificationSend } from 'state/dux/notifications';
import * as api from 'core/services/api';
import * as types from '../actionTypes';

const fetchMediaStart = () => {
  return { type: types.GET_ATTACHMENT_REQUEST };
};
// Fetch Articles Success
export function fetchMediaSuccess(response) {
  return {
    type: types.GET_ATTACHMENT_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
export function fetchMediaFail(err) {
  return {
    type: types.GET_ATTACHMENT_FAILURE,
    error: err
  };
}

export function fetchMedia() {
  return (dispatch) => {
    dispatch(fetchMediaStart());
    return api.doFetchMedia()
      .then(response => {
        if (response.status !== 200) {
          dispatch(fetchMediaFail());
        }
        dispatch(fetchMediaSuccess(response));
      })
      .catch(err => {
        dispatch(fetchMediaFail(err));
      });
  };
}

const beginUpload = () => {
  return { type: types.UPLOAD_REQUEST };
};

function uploadSuccess(response) {
  return {
    type: types.UPLOAD_SUCCESS,
    payload: response.body
  };
}

function uploadFail(err) {
  return {
    type: types.UPLOAD_FAILURE,
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

const deleteMediaFail = (err) => ({
  type: types.DELETE_ATTACHMENT_FAILURE,
  error: err
});

export function deleteMedia(id) {
  return (dispatch) => {
    dispatch({
      type: types.DELETE_ATTACHMENT_REQUEST
    });
    return api.doRemoveMedia(id)
      .then(response => {
        dispatch({
          type: types.DELETE_ATTACHMENT_SUCCESS,
          id
        });
      })
      .catch(err => {
        dispatch(deleteMediaFail(err));
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
export default function attachmentReducer(state = INITIAL_STATE, action = {}) {
  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case types.GET_ATTACHMENT_REQUEST:
    case types.UPLOAD_REQUEST:
    case types.DELETE_ATTACHMENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_ATTACHMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        files: action.payload
      };
    case types.UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        files: [...state.files, ...action.payload]
      };
    case types.DELETE_ATTACHMENT_SUCCESS:
      return {
        ...state,
        files: [...state.files].filter((file) => file.id !== parseInt(action.id, 10))
      };
    case types.GET_ATTACHMENT_FAILURE:
    case types.UPLOAD_FAILURE:
    case types.DELETE_ATTACHMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
