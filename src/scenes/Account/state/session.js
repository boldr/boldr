import request from 'superagent';
import { push } from 'react-router-redux';
import decode from 'jwt-decode';
import cookie from 'react-cookie';
import browserHistory from 'react-router/lib/browserHistory';
import fetch from '../../../core/fetch';
import { API_BASE } from '../../../core/api';

/**
 * LOGIN ACTIONS
 */
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

const beginLogin = () => {
  return { type: LOGIN_USER_REQUEST };
};
// Login Success
export function loginSuccess(response) {
  cookie.save('boldr:jwt', response.body.token, { path: '/' });
  // localStorage.setItem('boldr:jwt', response.body.token);
  const decoded = decode(response.body.token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: response.body.token,
    role: decoded.role
  };
}
// Login Error
export function loginError(err) {
  return {
    type: LOGIN_USER_FAIL,
    error: err
  };
}
// Login Action
export function manualLogin(data) {
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
 * SIGNUP ACTIONS
 */
export const SIGNUP_USER_REQUEST = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAIL = 'SIGNUP_USER_FAIL';

// Signup
const beginSignUp = () => {
  return { type: SIGNUP_USER_REQUEST };
};
// Signup Success
export function signUpSuccess(response) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: response
  };
}
// Signup Error
export function signUpError(err) {
  return {
    type: SIGNUP_USER_FAIL,
    message: err
  };
}
// Signup Action
export function signUp(data) {
  return (dispatch) => {
    dispatch(beginSignUp());

    return request
      .post(`${API_BASE}/auth/signup`)
      .send(data)
      .then(response => {
        if (response.status === 201) {
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
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAIL = 'LOGOUT_USER_FAIL';

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
    firstName: response.body.profile.firstName,
    lastName: response.body.profile.lastName
  };
}

function checkTokenValidityFailure(error) {
  return {
    type: CHECK_TOKEN_VALIDITY_FAIL,
    payload: error
  };
}

export function checkTokenValidity() {
  const token = cookie.load('boldrToken');
  return (dispatch) => {
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
      cookie.remove('boldrToken');
    });
  };
}


/**
 * INITIAL STATE
 */
export const INITIAL_USER_STATE = {
  isLoading: false,
  authenticated: false,
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  role: '',
  token: undefined,
  hydrated: false
};

/**
 * User Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function user(state = INITIAL_USER_STATE, action = {}) {
  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_USER_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: true,
        token: action.payload
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
        token: action.token,
        role: action.role,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email
      });
    case CHECK_TOKEN_VALIDITY_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        authenticated: false,
        token: ''
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
