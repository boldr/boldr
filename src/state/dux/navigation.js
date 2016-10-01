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
    type: types.UPDATE_NAVIGATION_FAILURE,
    error: err
  };
};

export function updateNavLinks(data) {
  return dispatch => {
    dispatch(beginUpdateNav());
    return api.doUpdateNavigationLinks(data)
      .then(response => {
        dispatch(doneUpdateNav(response));
        dispatch(notificationSend({
          message: 'Updated link.',
          kind: 'info',
          dismissAfter: 3000
        }));
      })
      .catch(
        err => {
          dispatch(failUpdateNav(err.message));
          dispatch(notificationSend({
            message: 'There was a problem updating the navigation link.',
            kind: 'error',
            dismissAfter: 3000
          }));
        });
  };
}

const beginAddNavLink = () => {
  return { type: types.ADD_NAVIGATION_LINK_REQUEST };
};

const doneAddNavLink = (response) => {
  return { type: types.ADD_NAVIGATION_LINK_SUCCESS };
};

const failAddNavLink = (err) => {
  return {
    type: types.ADD_NAVIGATION_LINK_FAILURE,
    error: err
  };
};

export function addNavLinks(data) {
  return dispatch => {
    dispatch(beginAddNavLink());
    return api.doAddNavigationLinks(data)
      .then(response => {
        dispatch(doneAddNavLink(response));
        dispatch(notificationSend({
          message: 'Link added.',
          kind: 'info',
          dismissAfter: 3000
        }));
      })
      .catch(
        err => {
          dispatch(failAddNavLink(err.message));
          dispatch(notificationSend({
            message: 'There was a problem creating the link.',
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
    case types.UPDATE_NAVIGATION_REQUEST:
    case types.ADD_NAVIGATION_LINK_REQUEST:
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
    case types.UPDATE_NAVIGATION_FAILURE:
    case types.ADD_NAVIGATION_LINK_FAILURE:
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
