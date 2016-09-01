import request from 'superagent';
import { push } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';
import fetch from '../../../core/fetch';
import { notificationSend } from '../../Boldr/state/notifications';
import { API_BASE, API_AUTH } from '../../../core/config';
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
    type: types.CREATE_ACCOUNT_FAIL,
    error: err
  };
};

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
 * FORGOT PASSWORD ACTION TYPES
 */

export function forgotPassword(email) {
  return (dispatch) => {
    dispatch({
      type: types.FORGOT_PASSWORD_REQUEST
    });
    return fetch(`${API_AUTH}/forgot`, {
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
            type: types.FORGOT_PASSWORD_FAIL,
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
            type: types.RESET_PASSWORD_SUCCESS,
            error: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: types.RESET_PASSWORD_FAIL,
            error: Array.isArray(json) ? json : [json]
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

export function populateAccount(response) {
  return {
    type: types.POPULATE_ACCOUNT,
    bio: response.body.bio,
    birthday: response.body.birthday,
    displayName: response.body.displayName,
    email: response.body.email,
    firstName: response.body.firstName,
    gender: response.body.gender,
    id: response.body.id,
    lastName: response.body.lastName,
    location: response.body.location,
    avatarUrl: response.body.avatarUrl,
    roleId: response.body.roleId,
    website: response.body.website
  };
}

export function loginPopulateAccount(response) {
  return {
    type: types.LOGIN_POPULATE_ACCOUNT,
    bio: response.body.user.bio,
    birthday: response.body.user.birthday,
    displayName: response.body.user.displayName,
    email: response.body.user.email,
    firstName: response.body.user.firstName,
    gender: response.body.user.gender,
    id: response.body.user.id,
    lastName: response.body.user.lastName,
    location: response.body.user.location,
    avatarUrl: response.body.user.avatarUrl,
    roleId: response.body.user.roles[0].id,
    website: response.body.user.website
  };
}
/**
 * MY PROFILE ACTION TYPES
 */


export function getMyProfile() {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    dispatch({
      type: types.GET_MY_PROFILE_REQUEST
    });
    return fetch(`${API_AUTH}/check`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: types.GET_MY_PROFILE_SUCCESS,
            payload: json
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: types.GET_MY_PROFILE_FAIL,
            error: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}
/**
 * PUBLIC PROFILE ACTION TYPES
 */

export function getPublicProfile(userId) {
  return (dispatch) => {
    dispatch({
      type: types.PUBLIC_PROFILE_REQUEST
    });
    return request.get(`${API_BASE}/users/${userId}`)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: types.PUBLIC_PROFILE_SUCCESS,
            payload: response.body
          });
        }
      })
      .catch(err => {
        dispatch({
          type: types.PUBLIC_PROFILE_FAIL,
          error: err
        });
      });
  };
}
/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  isLoading: false,
  error: null,
  public: {},
  hydrated: false,
  bio: '',
  birthday: '',
  displayName: '',
  email: '',
  firstName: '',
  gender: '',
  id: '',
  lastName: '',
  location: '',
  avatarUrl: '',
  roleId: '',
  website: ''
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
    case types.CREATE_ACCOUNT_REQUEST:
    case types.FORGOT_PASSWORD_REQUEST:
    case types.GET_MY_PROFILE_REQUEST:
    case types.PUBLIC_PROFILE_REQUEST:
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true
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
    case types.GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bio: action.payload.bio,
        birthday: action.payload.birthday,
        displayName: action.payload.displayName,
        email: action.payload.email,
        firstName: action.payload.firstName,
        gender: action.payload.gender,
        id: action.payload.id,
        lastName: action.payload.lastName,
        location: action.payload.location,
        avatarUrl: action.payload.avatarUrl,
        roleId: action.payload.roleId,
        website: action.payload.website
      };
    case types.GET_MY_PROFILE_FAIL:
    case types.PUBLIC_PROFILE_FAIL:
    case types.FORGOT_PASSWORD_FAIL:
    case types.CREATE_ACCOUNT_FAIL:
    case types.RESET_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case types.PUBLIC_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        public: {
          email: action.payload.email,
          displayName: action.payload.displayName,
          firstName: action.payload.firstName,
          roleId: action.payload.roleId,
          id: action.payload.id
        }
      };
    case types.POPULATE_ACCOUNT:
    case types.LOGIN_POPULATE_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        bio: action.bio,
        birthday: action.birthday,
        displayName: action.displayName,
        email: action.email,
        firstName: action.firstName,
        gender: action.gender,
        id: action.id,
        lastName: action.lastName,
        location: action.location,
        avatarUrl: action.avatarUrl,
        roleId: action.roleId,
        website: action.website
      };
    default:
      return state;
  }
}
