import request from 'superagent';
import { push } from 'react-router-redux';
import decode from 'jwt-decode';
import cookie from 'react-cookie';
import moment from 'moment';
import fetch from 'core/fetch';
import { createRequestat } from 'core/util/action';
import { API_BASE, API_AUTH } from 'core/api';

import { notificationSend } from 'core/state/notifications';
import { populateAccount, loginPopulateAccount } from './account';
import * as at from './constants';

/**
 * LOGIN ACTIONS
 */
const beginLogin = () => {
  return { type: at.LOGIN_REQUEST };
};
// Login Success
export function loginSuccess(response) {
  return {
    type: at.LOGIN_SUCCESS,
    token: response.body.token,
    bio: response.body.user.profile.bio,
    birthday: response.body.user.profile.birthday,
    displayName: response.body.user.profile.displayName,
    email: response.body.user.email,
    firstName: response.body.user.profile.firstName,
    gender: response.body.user.profile.gender,
    id: response.body.user.id,
    lastName: response.body.user.profile.lastName,
    location: response.body.user.profile.location,
    picture: response.body.user.profile.picture,
    role: response.body.user.profile.role,
    website: response.body.user.profile.website
  };
}
// Login Error
export function loginError(err) {
  return {
    type: at.LOGIN_FAIL,
    error: err
  };
}
// Login Action
export function doLogin(loginData, redir) {
  return (dispatch) => {
    dispatch(beginLogin());
    return request
      .post(`${API_AUTH}/login`)
      .send(loginData)
      .then(response => {
        localStorage.setItem('token', response.body.token);
        dispatch(loginSuccess(response));
        dispatch(loginPopulateAccount(response));
        dispatch(notificationSend({
          message: 'Welcome back!',
          kind: 'info',
          dismissAfter: 13000
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
  return { type: at.LOGOUT_USER };
}

export function logoutError() {
  return { type: at.LOGOUT_USER_FAIL };
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
  return { type: at.CHECK_AUTH_REQUEST };
}

function checkAuthSuccess(response, token) {
  return {
    type: at.CHECK_AUTH_SUCCESS,
    payload: response.body,
    token,
    bio: response.body.profile.bio,
    birthday: response.body.profile.birthday,
    displayName: response.body.profile.displayName,
    email: response.body.email,
    firstName: response.body.profile.firstName,
    gender: response.body.profile.gender,
    id: response.body.profile.id,
    lastName: response.body.profile.lastName,
    location: response.body.profile.location,
    picture: response.body.profile.picture,
    role: response.body.profile.role,
    website: response.body.profile.website
  };
}

function checkAuthFailure(error) {
  return {
    type: at.CHECK_AUTH_FAIL,
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
        cookie.remove('token');
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
  isLoading: false,
  role: null,
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
    case at.LOAD:
      return {
        ...state,
        isLoading: true
      };
    case at.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        token: action.result.token,
        role: action.result.role,
        email: action.result.email
      };
    case at.LOAD_FAIL:
    case at.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        loaded: false,
        error: action.error
      };

    case at.LOGIN_REQUEST:
    case at.CHECK_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        loaded: false
      };
    case at.LOGIN_SUCCESS:
    case at.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        role: action.role,
        token: action.token
      };
    case at.LOGOUT_USER:
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
