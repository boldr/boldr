import request from 'superagent';
import { push } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';
import fetch from 'core/fetch';
import { notificationSend } from 'core/state/notifications';
import { API_BASE, API_AUTH } from 'core/api';
import * as at from './constants';

/**
 * SIGNUP ACTION TYPES
 */

// Signup
const beginSignUp = () => {
  return { type: at.CREATE_ACCOUNT_REQUEST };
};
// Signup Success
export function signUpSuccess(response) {
  return {
    type: at.CREATE_ACCOUNT_SUCCESS,
    payload: response
  };
}
// Signup Error
export function signUpError(err) {
  return {
    type: at.CREATE_ACCOUNT_FAIL,
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
      type: at.FORGOT_PASSWORD_REQUEST
    });
    return fetch(`${API_AUTH}/forgot`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: at.FORGOT_PASSWORD_SUCCESS,
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: at.FORGOT_PASSWORD_FAIL,
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

export function resetPassword(password, confirm, pathToken) {
  return (dispatch) => {
    dispatch({
      type: at.RESET_PASSWORD_REQUEST
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
            type: at.RESET_PASSWORD_SUCCESS,
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: at.RESET_PASSWORD_FAIL,
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

export function populateAccount(response) {
  return {
    type: at.POPULATE_ACCOUNT,
    bio: response.body.profile.bio,
    birthday: response.body.profile.birthday,
    displayName: response.body.profile.displayName,
    email: response.body.email,
    firstName: response.body.profile.firstName,
    gender: response.body.profile.gender,
    id: response.body.id,
    lastName: response.body.profile.lastName,
    location: response.body.profile.location,
    picture: response.body.profile.picture,
    role: response.body.profile.role,
    website: response.body.profile.website
  };
}

export function loginPopulateAccount(response) {
  return {
    type: at.LOGIN_POPULATE_ACCOUNT,
    bio: response.body.user.profile.bio,
    birthday: response.body.user.profile.birthday,
    displayName: response.body.user.profile.displayName,
    email: response.body.user.email,
    firstName: response.body.user.profile.firstName,
    gender: response.body.user.profile.gender,
    id: response.body.user.id,
    lastName: response.body.user.profile.lastName,
    location: response.body.user.profile.location,
    picture: response.body.user.profile.picture,
    role: response.body.user.profile.role,
    website: response.body.user.profile.website
  };
}
/**
 * MY PROFILE ACTION TYPES
 */


export function getMyProfile() {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    dispatch({
      type: at.GET_MY_PROFILE_REQUEST
    });
    return fetch(`${API_AUTH}/check`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: at.GET_MY_PROFILE_SUCCESS,
            payload: json
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: at.GET_MY_PROFILE_FAIL,
            messages: Array.isArray(json) ? json : [json]
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
      type: at.PUBLIC_PROFILE_REQUEST
    });
    return request.get(`${API_BASE}/users/${userId}`)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: at.PUBLIC_PROFILE_SUCCESS,
            payload: response.body
          });
        }
      })
      .catch(err => {
        dispatch({
          type: at.PUBLIC_PROFILE_FAIL,
          messages: err
        });
      });
  };
}
/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  isLoading: false,
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
  picture: '',
  role: '',
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
    case at.CREATE_ACCOUNT_REQUEST:
    case at.FORGOT_PASSWORD_REQUEST:
    case at.GET_MY_PROFILE_REQUEST:
    case at.PUBLIC_PROFILE_REQUEST:
    case at.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case at.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case at.CREATE_ACCOUNT_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case at.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case at.RESET_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case at.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state
      };
    case at.FORGOT_PASSWORD_FAIL:
      return {
        ...state
      };
    case at.GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bio: action.payload.profile.bio,
        birthday: action.payload.profile.birthday,
        displayName: action.payload.profile.displayName,
        email: action.payload.email,
        firstName: action.payload.profile.firstName,
        gender: action.payload.profile.gender,
        id: action.payload.id,
        lastName: action.payload.profile.lastName,
        location: action.payload.profile.location,
        picture: action.payload.profile.picture,
        role: action.payload.profile.role,
        website: action.payload.profile.website
      };
    case at.GET_MY_PROFILE_FAIL:
    case at.PUBLIC_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case at.PUBLIC_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        public: {
          email: action.payload.email,
          displayName: action.payload.profile.displayName,
          firstName: action.payload.profile.firstName,
          role: action.payload.profile.role,
          id: action.payload.id
        }
      };
    case at.POPULATE_ACCOUNT:
    case at.LOGIN_POPULATE_ACCOUNT:
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
        picture: action.picture,
        role: action.role,
        website: action.website
      };
    default:
      return state;
  }
}
