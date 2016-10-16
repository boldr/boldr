import { push } from 'react-router-redux';
import * as api from 'core/api/auth.service';
import { TOKEN_KEY } from 'core/services/api';
import * as notif from 'core/notificationMessages';
import * as types from '../actionTypes';
import { notificationSend } from './notifications';

/**
  * SIGNUP ACTIONS
  * -------------------------
  * @exports signup
  *****************************************************************/

export function signup(data) {
  return (dispatch) => {
    dispatch(beginSignUp());

    return api.doSignup(data)
      .then(response => {
        if (!response.status === 201) {
          dispatch(signUpError('Oops! Something went wrong'));
          dispatch(notificationSend(notif.MSG_SIGNUP_ERROR));
        }
        dispatch(signUpSuccess(response));
        dispatch(push('/'));
        dispatch(notificationSend(notif.MSG_SIGNUP_SUCCESS));
      });
  };
}

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

/**
  * LOGIN ACTIONS
  * -------------------------
  * @exports login
  *****************************************************************/

export function login(loginData, redir) {
  return (dispatch) => {
    dispatch(beginLogin());
    return api.doLogin(loginData)
      .then(response => {
        if (response.status !== 200) {
          dispatch(loginError());
          dispatch(notificationSend(notif.MSG_LOGIN_ERROR('Unable to login')));
        }
        localStorage.setItem(TOKEN_KEY, response.body.token);
        dispatch(loginSuccess(response));
        dispatch(notificationSend(notif.MSG_LOGIN_SUCCESS));
        dispatch(push('/'));
      });
  };
}
const beginLogin = () => {
  return { type: types.LOGIN_REQUEST };
};

function loginSuccess(response) {
  return {
    type: types.LOGIN_SUCCESS,
    token: response.body.token,
    account: response.body.account
  };
}

function loginError(err) {
  return {
    type: types.LOGIN_FAILURE,
    error: err
  };
}

/**
  * LOGOUT ACTIONS
  * -------------------------
  * @exports logout
  *****************************************************************/
function logoutSuccess() {
  return { type: types.LOGOUT_USER };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem(TOKEN_KEY);
    dispatch(logoutSuccess());
    dispatch(notificationSend(notif.MSG_LOGOUT));
  };
}

/**
  * AUTH CHECK ACTIONS
  * -------------------------
  * @exports checkAuth
  *****************************************************************/

export function checkAuth(token) {
  return (dispatch) => {
    dispatch(checkAuthRequest());
    return api.doAuthCheck(token)
      .then(response => {
        if (response.status !== 200) {
          dispatch(checkAuthFailure('Token is invalid'));
          dispatch(notificationSend(notif.MSG_AUTH_ERROR));
        }
        dispatch(checkAuthSuccess(response, token));
      });
  };
}

function checkAuthRequest() {
  return { type: types.CHECK_AUTH_REQUEST };
}

function checkAuthSuccess(response, token) {
  return {
    type: types.CHECK_AUTH_SUCCESS,
    token: token, // eslint-disable-line
    account: response.body.account
  };
}

function checkAuthFailure(error) {
  return {
    type: types.CHECK_AUTH_FAILURE,
    payload: error
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
            dispatch(notificationSend(notif.MSG_FORGOT_PW_ERROR));
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
            push('/login');
            dispatch({
              type: types.RESET_PASSWORD_SUCCESS
            });
            dispatch(push('/'));
            dispatch(notificationSend(notif.MSG_RESET_PW_SUCCESS));
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
  account: {}
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
        account: action.account
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: '',
        account: ''
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
