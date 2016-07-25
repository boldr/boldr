import request from 'superagent';
import { push } from 'react-router-redux';
import decode from 'jwt-decode';
import cookie from 'react-cookie';
import moment from 'moment';

import fetch from 'core/fetch';
import { API_BASE, API_AUTH } from 'core/api';
import { populateAccount } from './account';

/**
 * LOGIN ACTIONS
 */
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'AUTH/LOGIN_FAIL';

const beginLogin = () => {
  return { type: LOGIN_REQUEST };
};
// Login Success
export function loginSuccess(response) {
  const decoded = decode(response.body.token);
  return {
    type: LOGIN_SUCCESS,
    token: response.body.token,
    role: response.body.role
  };
}
// Login Error
export function loginError(err) {
  return {
    type: LOGIN_FAIL,
    error: err
  };
}
// Login Action
export function doLogin(data) {
  return (dispatch) => {
    dispatch(beginLogin());
    return request
      .post(`${API_AUTH}/login`)
      .send(data)
      .then(response => {
        // setAuthToken(response.body.token);
        cookie.save('token', response.body.token, { expires: moment().add(5, 'hour').toDate() });
        dispatch(loginSuccess(response));
        dispatch(push('/'));
        // dispatch(showSnackBarMessage('Successfully logged in.'));
      })
      .catch(err => {
        dispatch(loginError(err));
      });
  };
}

/**
 * LOGOUT ACTIONS
 */
export const LOGOUT_USER = 'AUTH/LOGOUT_USER';
export const LOGOUT_USER_FAIL = 'AUTH/LOGOUT_USER_FAIL';
export function logoutSuccess() {
  return { type: LOGOUT_USER };
}
export function logoutError() {
  return { type: LOGOUT_USER_FAIL };
}
// Logout Action
export function logOut() {
  return (dispatch) => {
    return request
      .get(`${API_AUTH}/logout`)
      .then(response => {
        cookie.remove('token');
        dispatch(logoutSuccess());
      })
  .catch(err => {
    dispatch(logoutError(err));
  });
  };
}

/**
 * TOKEN CHECK ACTIONS
 */
export const CHECK_AUTH_REQUEST = 'AUTH/CHECK_AUTH_REQUEST';
export const CHECK_AUTH_SUCCESS = 'AUTH/CHECK_AUTH_SUCCESS';
export const CHECK_AUTH_FAIL = 'AUTH/CHECK_AUTH_FAIL';

function checkAuthRequest() {
  return { type: CHECK_AUTH_REQUEST };
}

function checkAuthSuccess(response, token) {
  return {
    type: CHECK_AUTH_SUCCESS,
    payload: response.body,
    role: response.body.profile.role,
    token,
    email: response.body.email,
    firstName: response.body.profile.firstName,
    lastName: response.body.profile.lastName
  };
}

function checkAuthFailure(error) {
  return {
    type: CHECK_AUTH_FAIL,
    payload: error
  };
}

export function checkAuth() {
  const token = cookie.load('token');
  return (dispatch) => {
    if (!token || token === '') { return; }
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

export const LOAD = 'auth/LOAD';
export const LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
const LOAD_FAIL = 'auth/LOAD_FAIL';

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/auth/check')
  };
}
/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  loaded: false,
  isLoading: false,
  role: '',
  token: '',
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
    case LOAD:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        token: action.result.token,
        role: action.result.role,
        email: action.result.email
      };
    case LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        loaded: false,
        error: action.error
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        loaded: false,
        token: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        role: action.role,
        token: action.token
      };
    case 'OAUTH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        token: action.token
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false
      };
    case CHECK_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        loaded: false
      };
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        token: action.token,
        role: action.role,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email
      };
    case CHECK_AUTH_FAIL:
      return {
        ...state,
        loaded: false,
        isLoading: false,
        isAuthenticated: false
      };
    case LOGOUT_USER:
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
