import request from 'superagent';
import { push } from 'react-router-redux';
import decode from 'jwt-decode';
import fetch from '../../../core/fetch';
import { API_BASE, API_AUTH } from '../../../core/config';

import { notificationSend } from '../../Boldr/state/notifications';
import * as types from './constants';

/**
 * SIGNUP ACTION TYPES
 */

// Signup
const beginSignUp = () => {
  return { type: types.CREATE_ACCOUNT_REQUEST };
};

// Signup Success
const signUpSuccess = (response) => {
  return {
    type: types.CREATE_ACCOUNT_SUCCESS,
    payload: response
  };
};

// Signup Error
const signUpError = (err) => {
  return {
    type: types.CREATE_ACCOUNT_FAILURE,
    error: err
  };
};

// Signup Action
export function signup(data) {
  return (dispatch) => {
    dispatch(beginSignUp());

    return request
      .post(`${API_AUTH}/signup`)
      .send(data)
      .then(response => {
        if (response.status === 201) {
          dispatch(signUpSuccess(response));
          dispatch(push('/'));
          dispatch(notificationSend({
            message: 'Your account has been created!',
            kind: 'info',
            dismissAfter: 3000
          }));
        } else {
          dispatch(signUpError('Oops! Something went wrong'));
          dispatch(notificationSend({
            message: 'There was a problem creating your account.',
            kind: 'error',
            dismissAfter: 3000
          }));
        }
      })
      .catch(err => {
        dispatch(signUpError(err));
      });
  };
}


/**
 * LOGIN ACTIONS
 */

const beginLogin = () => {
  return { type: types.LOGIN_REQUEST };
};

// Login Success
function loginSuccess(response) {
  const decodeToken = decode(response.body.token);
  return {
    type: types.LOGIN_SUCCESS,
    token: response.body.token,
    user: {
      display_name: response.body.user.display_name,
      email: response.body.user.email,
      first_name: response.body.user.first_name,
      id: response.body.user.id,
      last_name: response.body.user.last_name,
      avatar_url: response.body.user.avatar_url,
      roleId: decodeToken.roleId,
      role: decodeToken.role
    }
  };
}
// Login Error
function loginError(err) {
  return {
    type: types.LOGIN_FAILURE,
    error: err
  };
}
// Login Action
export function login(loginData, redir) {
  return (dispatch) => {
    dispatch(beginLogin());
    return request
      .post(`${API_BASE}/auth/login`)
      .send(loginData)
      .then(response => {
        localStorage.setItem('token', response.body.token);
        dispatch(loginSuccess(response));
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
  const decodeToken = decode(token);
  return {
    type: types.CHECK_AUTH_SUCCESS,
    token: token, // eslint-disable-line
    user: {
      display_name: response.body.user.display_name,
      email: response.body.user.email,
      first_name: response.body.user.first_name,
      id: response.body.user.id,
      last_name: response.body.user.last_name,
      avatar_url: response.body.user.avatar_url,
      roleId: decodeToken.roleId,
      role: decodeToken.role
    }
  };
}

function checkAuthFailure(error) {
  return {
    type: types.CHECK_AUTH_FAILURE,
    payload: error
  };
}

export function checkAuth(token) {
  return (dispatch) => {
    dispatch(checkAuthRequest());
    return request
      .get(`${API_AUTH}/check`)
      .set('Authorization', `${token}`)
      .then(response => {
        dispatch(checkAuthSuccess(response, token));
      })
      .catch(() => {
        dispatch(checkAuthFailure('Token is invalid'));
        dispatch(notificationSend({
          message: 'There was a problem authenticating. Please login again.',
          kind: 'error',
          dismissAfter: 3000
        }));
      });
  };
}


/**
 * FORGOT PASSWORD ACTION TYPES
 */

export function forgotPassword(email) {
  return (dispatch) => {
    dispatch({
      type: types.FORGOT_PASSWORD_REQUEST
    });
    return fetch(`${API_AUTH}/forgot-password`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: types.FORGOT_PASSWORD_SUCCESS,
            error: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: types.FORGOT_PASSWORD_FAILURE,
            error: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

/**
 * RESET PASSWORD ACTION TYPES
 */

export function resetPassword(password, confirm, pathToken) {
  return (dispatch) => {
    dispatch({
      type: types.RESET_PASSWORD_REQUEST
    });
    return fetch(`${API_AUTH}/reset-password/${pathToken}`, {
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
            type: types.RESET_PASSWORD_SUCCESS,
            error: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: types.RESET_PASSWORD_FAILURE,
            error: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}
