import request from 'superagent';
import { push } from 'react-router-redux';
import decode from 'jwt-decode';
import cookie from 'react-cookie';
import browserHistory from 'react-router/lib/browserHistory';
import fetch from '../fetch';
import { API_BASE } from '../api';

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
  cookie.save('boldr:jwt', response.body.token, { path: '/' });
  // localStorage.setItem('boldr:jwt', response.body.token);
  const decoded = decode(response.body.token);
  return {
    type: LOGIN_SUCCESS,
    payload: response.body.token,
    role: decoded.role
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
      .post(`${API_BASE}/auth/login`)
      .send(data)
      .then(response => {
        dispatch(loginSuccess(response));
        dispatch(push('/'));
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
export const LOGOUT_USER_SUCCESS = 'AUTH/LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAIL = 'AUTH/LOGOUT_USER_FAIL';

const beginLogout = () => {
  return { type: LOGOUT_USER };
};

export function logoutSuccess() {
  return { type: LOGOUT_USER_SUCCESS };
}

export function logoutError() {
  return { type: LOGOUT_USER_FAIL };
}

// Logout Action
export function logOut() {
  cookie.remove('token');
  browserHistory.push('/');
  return {
    type: 'LOGOUT_USER_SUCCESS'
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
  const decoded = decode(token);
  return {
    type: CHECK_AUTH_REQUEST,
    payload: response.body,
    role: decoded.role,
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
  const token = cookie.load('boldrToken') || '';
  return (dispatch) => {
    if (!token || token === '') { return; }
    dispatch(checkAuthRequest());
    request
      .get(`${API_BASE}/auth/check`)
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        dispatch(checkAuthSuccess(response, token));
      })
      .catch(() => {
        dispatch(checkAuthFailure('Token is invalid'));
        cookie.remove('boldrToken');
      });
  };
}

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';

export function forgotPassword(email) {
  return (dispatch) => {
    dispatch({
      type: 'FORGOT_PASSWORD_REQUEST'
    });
    return fetch(`${API_BASE}/auth/forgot`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: 'FORGOT_PASSWORD_SUCCESS',
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'FORGOT_PASSWORD_FAIL',
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

export function resetPassword(password, confirm, pathToken) {
  return (dispatch) => {
    dispatch({
      type: 'RESET_PASSWORD_REQUEST'
    });
    return fetch(`${API_BASE}/auth/reset/${pathToken}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          browserHistory.push('/login');
          dispatch({
            type: 'RESET_PASSWORD_SUCCESS',
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'RESET_PASSWORD_FAIL',
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

const LOAD = 'auth/LOAD';
const LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
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
const authCookie = cookie.load('boldrToken') || null;
export const INITIAL_STATE = {
  loaded: false,
  isLoading: false,
  isAuthenticated: authCookie ? true : false,
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
        role: action.result.profile.role,
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
      return Object.assign({}, state, {
        isLoading: true
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true,
        token: action.payload
      });
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: false
      });
    case CHECK_AUTH_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        loaded: false
      });
    case CHECK_AUTH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        token: action.token,
        role: action.role,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email
      });
    case CHECK_AUTH_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: false,
        loaded: false,
        token: ''
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        isLoading: true
      });
    case LOGOUT_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: false
      });
    case LOGOUT_USER_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true
      });
    default:
      return state;
  }
}
