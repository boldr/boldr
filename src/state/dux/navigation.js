import request from 'superagent';
import { notificationSend } from 'state/dux/notifications';
import * as api from 'core/api/navigationService';
import * as types from '../actionTypes';

const beginUpdateNav = () => {
  return { type: types.UPDATE_NAVIGATION_REQUEST };
};

const doneUpdateNav = (response) => {
  return { type: types.UPDATE_NAVIGATION_SUCCESS };
};

const failUpdateNav = (err) => {
  return {
    type: types.UPDATE_NAVIGATION_SUCCESS,
    error: err
  };
};

export function updateNav(data) {
  console.log('updatenav ', data);
  return dispatch => {
    dispatch(beginUpdateNav());
    return api.doUpdateNavigation(data)
      .then(response => {
        dispatch(doneUpdateNav(response));
        dispatch(notificationSend({
          message: 'Updated user.',
          kind: 'info',
          dismissAfter: 3000
        }));
      })
      .catch(
        err => {
          dispatch(failUpdateNav(err.message));
          dispatch(notificationSend({
            message: 'There was a problem updating the user.',
            kind: 'error',
            dismissAfter: 3000
          }));
        });
  };
}


const initialState = {
  loaded: false
};

export default function navigationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOAD_NAVIGATION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.LOAD_NAVIGATION_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        primary: action.result
      };
    case types.LOAD_NAVIGATION_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.navigation && globalState.navigation.loaded;
}

export function loadPrimary() {
  return {
    types: [LOAD_NAVIGATION_REQUEST, LOAD_NAVIGATION_SUCCESS, LOAD_NAVIGATION_FAILURE],
    promise: (client) => client.get('/navigations/1')
  };
}
