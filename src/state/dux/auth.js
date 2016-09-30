import { SubmissionError } from 'redux-form';
import decode from 'jwt-decode';
import { push } from 'react-router-redux';
import * as api from 'core/api/authService';
import { TOKEN_KEY } from 'core/config';
import * as types from '../actionTypes';
import { notificationSend } from './notifications';

/**
 * Error catcher to prevent redux-form from swallowing
 * @param {object} error
 * @returns {Promise.<*>}
 */
const catchValidation = error => {
  if (error.message) {
    if (error.message === 'Validation failed' && error.data) {
      throw new SubmissionError(error.data);
    }
    throw new SubmissionError({ _error: error.message });
  }
  return Promise.reject(error);
};

// Signup
// -----------------
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

    return api.doSignup(data)
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

// Login
// -----------------
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
    return api.doLogin(loginData)
      .then(response => {
        localStorage.setItem(TOKEN_KEY, response.body.token);
        dispatch(loginSuccess(response));
        dispatch(notificationSend({
          message: 'Welcome back!',
          kind: 'info',
          dismissAfter: 3000
        }));
        dispatch(push('/'));
      })
      .catch(err => {
        dispatch(loginError(err));
        dispatch(notificationSend({
          message: `There was a problem logging in ${err}`,
          kind: 'error',
          dismissAfter: 3000
        }));
      }, catchValidation);
  };
}

// Logout
// -----------------
function logoutSuccess() {
  return { type: types.LOGOUT_USER };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem(TOKEN_KEY);
    dispatch(logoutSuccess());
    dispatch(notificationSend({
      message: 'You are now logged out of your account.',
      kind: 'info',
      dismissAfter: 3000
    }));
  };
}

// Auth Check
// -----------------
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
    return api.doAuthCheck(token)
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

// Forgot Password
// -----------------
export function forgotPassword(email) {
  return (dispatch) => {
    dispatch({
      type: types.FORGOT_PASSWORD_REQUEST
    });
    return api.doForgotPassword(email)
      .then((response) => {
        if (response.ok) {
          return response.json().then((json) => {
            dispatch({
              type: types.FORGOT_PASSWORD_SUCCESS
            });
            dispatch(push('/'));
            dispatch(notificationSend({
              message: 'An email has been sent with instructions to reset your password.',
              kind: 'info',
              dismissAfter: 3000
            }));
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

// Reset Password
// -----------------
export function resetPassword(password, token) {
  return (dispatch) => {
    dispatch({
      type: types.RESET_PASSWORD_REQUEST
    });
    return api.doResetPassword(password, token)
      .then((response) => {
        if (response.ok) {
          return response.json().then((json) => {
            browserHistory.push('/login');
            dispatch({
              type: types.RESET_PASSWORD_SUCCESS
            });
            dispatch(push('/'));
            dispatch(notificationSend({
              message: 'Your password has been reset. You may now login with it.',
              kind: 'info',
              dismissAfter: 3000
            }));
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

/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  isAuthenticated: false,
  error: null,
  isLoading: false,
  token: null,
  hydrated: false,
  user: {
    display_name: null,
    email: null,
    first_name: null,
    id: null,
    last_name: null,
    avatar_url: null,
    roleId: null,
    role: null
  }
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
    case types.LOGIN_FAILURE:
    case types.FORGOT_PASSWORD_FAILURE:
    case types.CREATE_ACCOUNT_FAILURE:
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.error
      };
    case types.LOGIN_REQUEST:
    case types.CHECK_AUTH_REQUEST:
    case types.CREATE_ACCOUNT_REQUEST:
    case types.FORGOT_PASSWORD_REQUEST:
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false
      };
    case types.LOGIN_SUCCESS:
    case types.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.token,
        user: {
          display_name: action.user.display_name,
          email: action.user.email,
          first_name: action.user.first_name,
          id: action.user.id,
          last_name: action.user.last_name,
          avatar_url: action.user.avatar_url,
          roleId: action.user.roleId,
          role: action.user.role
        }
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: '',
        user: {}
      };
    case types.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
