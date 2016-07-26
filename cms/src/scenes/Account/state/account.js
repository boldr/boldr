import request from 'superagent';
import { push } from 'react-router-redux';
import decode from 'jwt-decode';
import cookie from 'react-cookie';
import browserHistory from 'react-router/lib/browserHistory';
import fetch from 'core/fetch';
import { API_BASE, API_AUTH } from 'core/api';

/**
 * SIGNUP ACTION TYPES
 */
export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAIL = 'CREATE_ACCOUNT_FAIL';

// Signup
const beginSignUp = () => {
  return { type: CREATE_ACCOUNT_REQUEST };
};
// Signup Success
export function signUpSuccess(response) {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    payload: response
  };
}
// Signup Error
export function signUpError(err) {
  return {
    type: CREATE_ACCOUNT_FAIL,
    message: err
  };
}
// Signup Action
export function createAccount(data) {
  return (dispatch) => {
    dispatch(beginSignUp());

    return request
      .post(`${API_AUTH}/signup`)
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
 * FORGOT PASSWORD ACTION TYPES
 */
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';

export function forgotPassword(email) {
  return (dispatch) => {
    dispatch({
      type: 'FORGOT_PASSWORD_REQUEST'
    });
    return fetch(`${API_AUTH}/forgot`, {
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

/**
 * RESET PASSWORD ACTION TYPES
 */
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

export function resetPassword(password, confirm, pathToken) {
  return (dispatch) => {
    dispatch({
      type: 'RESET_PASSWORD_REQUEST'
    });
    return fetch(`${API_AUTH}/reset/${pathToken}`, {
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

/**
 * Populate account helper action type
 * @type {String}
 */
const POPULATE_ACCOUNT = 'POPULATE_ACCOUNT';

export function populateAccount(response) {
  return {
    type: 'POPULATE_ACCOUNT',
    role: response.body.profile.role,
    email: response.body.email,
    firstName: response.body.profile.firstName,
    lastName: response.body.profile.lastName,
    id: response.body.id
  };
}

/**
 * MY PROFILE ACTION TYPES
 */
export const GET_MY_PROFILE_REQUEST = 'GET_MY_PROFILE_REQUEST';
export const GET_MY_PROFILE_SUCCESS = 'GET_MY_PROFILE_SUCCESS';
export const GET_MY_PROFILE_FAIL = 'GET_MY_PROFILE_FAIL';

export function getMyProfile() {
  return (dispatch) => {
    dispatch({
      type: 'GET_MY_PROFILE_REQUEST'
    });
    return fetch(`${API_AUTH}/check`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cookie.load('token')}` }
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: 'GET_MY_PROFILE_SUCCESS',
            payload: json
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'GET_MY_PROFILE_FAIL',
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  isLoading: false,
  id: null,
  firstName: null,
  lastName: null,
  displayName: null,
  email: null,
  role: null,
  hydrated: false
};

/**
 * Account Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function accountReducer(state = INITIAL_STATE, action = {}) {
  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case CREATE_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case CREATE_ACCOUNT_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case 'AUTH/LOGIN_SUCCESS': {
      return {
        ...state,
        role: action.role
      };
    }
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state
      };
    case FORGOT_PASSWORD_FAIL:
      return {
        ...state
      };
    case GET_MY_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        email: action.payload.email,
        displayName: action.payload.profile.displayName,
        firstName: action.payload.profile.firstName,
        role: action.payload.profile.role,
        id: action.payload.id
      };
    case GET_MY_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case POPULATE_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        id: action.id,
        role: action.role
      };
    default:
      return state;
  }
}
