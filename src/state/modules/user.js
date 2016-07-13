/* @flow */

import request from 'superagent';
import { push } from 'react-router-redux';
import decode from 'jwt-decode';
import cookie from 'react-cookie';

import { API_BASE } from '../../config-api';

/**
 * LOGIN ACTIONS
 */
export const LOGIN_USER_REQUEST:string = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS:string = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL:string = 'LOGIN_USER_FAIL';

const beginLogin = () => {
  return { type: LOGIN_USER_REQUEST };
};
// Login Success
export function loginSuccess(response:Object) {
  cookie.save('boldr:jwt', response.body.token, { path: '/' });
  localStorage.setItem('boldr:jwt', response.body.token);
  const decoded = decode(response.body.token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: response.body.token,
    role: decoded.role
  };
}
// Login Error
export function loginError(err:string) {
  return {
    type: LOGIN_USER_FAIL,
    error: err
  };
}
// Login Action
export function manualLogin(data:Object) {
  return (dispatch:Function) => {
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
 * SIGNUP ACTIONS
 */
export const SIGNUP_USER_REQUEST:string = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS:string = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAIL:string = 'SIGNUP_USER_FAIL';

// Signup
const beginSignUp = () => {
  return { type: SIGNUP_USER_REQUEST };
};
// Signup Success
export function signUpSuccess(response:Object) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: response
  };
}
// Signup Error
export function signUpError(err:string) {
  return {
    type: SIGNUP_USER_FAIL,
    message: err
  };
}
// Signup Action
export function signUp(data:Object) {
  return (dispatch:Function) => {
    dispatch(beginSignUp());

    return request
      .post(`${API_BASE}/auth/signup`)
      .send(data)
      .then(response => {
        if (response.status === 200) {
          dispatch(signUpSuccess(response));
          dispatch(push('/'));
        } else {
          dispatch(signUpError('Oops! Something went wrong'));
        }
      })
      .catch(err => {
        dispatch(signUpError(err));
      });
  };
}

/**
 * LOGOUT ACTIONS
 */
export const LOGOUT_USER:string = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS:string = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAIL:string = 'LOGOUT_USER_FAIL';

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
  return (dispatch:Function) => {
    dispatch(beginLogout());

    return request
      .post(`${API_BASE}/auth/logout`)
      .send({})
      .then(response => {
        dispatch(logoutSuccess());
      });
  };
}

/**
 * TOKEN CHECK ACTIONS
 */
export const CHECK_TOKEN_VALIDITY_REQUEST = 'CHECK_TOKEN_VALIDITY_REQUEST';
export const CHECK_TOKEN_VALIDITY_SUCCESS = 'CHECK_TOKEN_VALIDITY_SUCCESS';
export const CHECK_TOKEN_VALIDITY_FAIL = 'CHECK_TOKEN_VALIDITY_FAIL';

function checkTokenValidityRequest() {
  return { type: CHECK_TOKEN_VALIDITY_REQUEST };
}

function checkTokenValiditySuccess(response, token) {
  const decoded = decode(token);
  return {
    type: CHECK_TOKEN_VALIDITY_SUCCESS,
    payload: response.body,
    role: decoded.role,
    token,
    email: response.body.email,
    name: response.body.profile.name
  };
}

function checkTokenValidityFailure(error) {
  return {
    type: CHECK_TOKEN_VALIDITY_FAIL,
    payload: error
  };
}

export function checkTokenValidity() {
  const token = localStorage.getItem('boldr:jwt') || cookie.load('boldr:jwt');
  return (dispatch:Function) => {
    if (!token || token === '') { return; }
    dispatch(checkTokenValidityRequest());
    request
      .get(`${API_BASE}/auth/check`)
      .set('Authorization', `Bearer ${token}`)
    .then(response => {
      dispatch(checkTokenValiditySuccess(response, token));
    })
    .catch(() => {
      dispatch(checkTokenValidityFailure('Token is invalid'));
      localStorage.removeItem('boldr:jwt');
    });
  };
}


/**
 * INITIAL STATE
 */
export const INITIAL_USER_STATE = {
  isLoading: false,
  authenticated: false,
  users: [],
  currentUser: {
    name: '',
    email: '',
    role: '',
    token: undefined
  }
};

/**
 * User Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function user(state:Object = INITIAL_USER_STATE, action:Object = {}) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: true,
        currentUser: {
          token: action.payload,
          role: action.role
        }
      });
    case LOGIN_USER_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: false
      });
    case CHECK_TOKEN_VALIDITY_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        authenticated: false
      });
    case CHECK_TOKEN_VALIDITY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: true,
        currentUser: {
          token: action.token,
          role: action.role,
          name: action.name,
          email: action.email
        }
      });
    case CHECK_TOKEN_VALIDITY_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: false,
        currentUser: {
          token: ''
        }
      });
    case SIGNUP_USER_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case SIGNUP_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: true
      });
    case SIGNUP_USER_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: false
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        isLoading: true
      });
    case LOGOUT_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: false
      });
    case LOGOUT_USER_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: true
      });
    default:
      return state;
  }
}
