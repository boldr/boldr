import request from 'superagent';
import { push } from 'react-router-redux';
import decode from 'jwt-decode';
import cookie from 'react-cookie';
import browserHistory from 'react-router/lib/browserHistory';
import fetch from '../../../core/fetch';
import { API_BASE } from '../../../core/api';

/**
 * SIGNUP ACTIONS
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

/**
 * INITIAL STATE
 */
export const INITIAL_STATE = {
  isLoading: false,
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
export default function accountReducer(state = INITIAL_STATE, action = {}) {
  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case CREATE_ACCOUNT_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case CREATE_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true
      });
    case CREATE_ACCOUNT_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: false
      });
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
    default:
      return state;
  }
}
