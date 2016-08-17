import request from 'superagent';
import { push } from 'react-router-redux';
import moment from 'moment';
import fetch from '../../../core/fetch';
import { API_BASE, API_AUTH } from '../../../core/config';

import { notificationSend } from '../../Boldr/state/notifications';
import { populateAccount, loginPopulateAccount } from './account';
import * as types from './constants';

/**
 * LOGIN ACTIONS
 */
const beginLogin = () => {
  return { type: types.LOGIN_REQUEST };
};
// Login Success
export function loginSuccess(response) {
  return {
    type: types.LOGIN_SUCCESS,
    token: response.body.token,
    bio: response.body.user.bio,
    birthday: response.body.user.birthday,
    displayName: response.body.user.displayName,
    email: response.body.user.email,
    firstName: response.body.user.firstName,
    gender: response.body.user.gender,
    id: response.body.user.id,
    lastName: response.body.user.lastName,
    location: response.body.user.location,
    avatarUrl: response.body.user.avatarUrl,
    roleId: response.body.user.roleId,
    website: response.body.user.website
  };
}
// Login Error
export function loginError(err) {
  return {
    type: types.LOGIN_FAIL,
    error: err
  };
}
// Login Action
export function doLogin(loginData, redir) {
  return (dispatch) => {
    dispatch(beginLogin());
    return request
      .post(`${API_BASE}/auth/login`)
      .send(loginData)
      .then(response => {
        localStorage.setItem('token', response.body.token);
        dispatch(loginSuccess(response));
        dispatch(loginPopulateAccount(response));
        dispatch(notificationSend({
          message: 'Welcome back!',
          kind: 'info',
          dismissAfter: 3000
        }));
        if (redir) {
          dispatch(push(redir));
        } else {
          dispatch(push('/'));
        }
        // dispatch(showSnackBarMessage('Successfully logged in.'));
      })
      .catch(err => {
        dispatch(loginError(err));
        dispatch(notificationSend({
          message: `There was a problem logging in ${err}`,
          kind: 'error',
          dismissAfter: 3000
        }));
      });
  };
}

/**
 * LOGOUT ACTIONS
 */

export function logoutSuccess() {
  return { type: types.LOGOUT_USER };
}

export function logoutError() {
  return { type: types.LOGOUT_USER_FAIL };
}

export function logOut() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
    dispatch(notificationSend({
      message: 'You are now logged out of your account.',
      kind: 'info',
      dismissAfter: 3000
    }));
  };
}

/**
 * TOKEN CHECK ACTIONS
 */

function checkAuthRequest() {
  return { type: types.CHECK_AUTH_REQUEST };
}

function checkAuthSuccess(response, token) {
  return {
    type: types.CHECK_AUTH_SUCCESS,
    payload: response.body,
    token,
    bio: response.body.bio,
    birthday: response.body.birthday,
    displayName: response.body.displayName,
    email: response.body.email,
    firstName: response.body.firstName,
    gender: response.body.gender,
    id: response.body.id,
    lastName: response.body.lastName,
    location: response.body.location,
    avatarUrl: response.body.avatarUrl,
    roleId: response.body.roleId,
    website: response.body.website
  };
}

function checkAuthFailure(error) {
  return {
    type: types.CHECK_AUTH_FAIL,
    payload: error
  };
}

export function checkAuth() {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    dispatch(checkAuthRequest());
    request
      .get(`${API_AUTH}/check`)
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        dispatch(checkAuthSuccess(response, token));
        dispatch(populateAccount(response));
      })
      .catch(() => {
        dispatch(checkAuthFailure('Token is invalid'));
        localStorage.removeItem('token');
        dispatch(notificationSend({
          message: 'There was a problem authenticating. Please login again.',
          kind: 'error',
          dismissAfter: 3000
        }));
      });
  };
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [at.LOAD, at.LOAD_SUCCESS, at.LOAD_FAIL],
    promise: (client) => client.get('/auth/check')
  };
}

/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  loaded: false,
  error: null,
  isLoading: false,
  roleId: null,
  token: null,
  hydrated: false
};

/**
 * Auth Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function authReducer(state = INITIAL_STATE, action = {}) {
  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case types.LOAD:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        token: action.result.token,
        roleId: action.result.roleId,
        email: action.result.email
      };
    case types.LOAD_FAIL:
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        loaded: false,
        error: action.error
      };

    case types.LOGIN_REQUEST:
    case types.CHECK_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        loaded: false
      };
    case types.LOGIN_SUCCESS:
    case types.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        roleId: action.roleId,
        token: action.token
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        loaded: false
      };
    default:
      return state;
  }
}
