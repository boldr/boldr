import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { notificationSend } from 'state/dux/notifications';
import { API_BASE, API_AUTH } from 'core/config';
import * as types from '../actionTypes';


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
      headers: { 'Content-Type': 'application/json', Authorization: `${token}` }
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
  display_name: '',
  email: '',
  first_name: '',
  gender: '',
  id: '',
  last_name: '',
  location: '',
  avatar_url: '',
  roleId: '',
  role: '',
  website: ''
};

/**
 * Profile Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function profileReducer(state = INITIAL_STATE, action = {}) {
  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case types.GET_MY_PROFILE_REQUEST:
    case types.PUBLIC_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case types.GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bio: action.payload.user.bio,
        display_name: action.payload.user.display_name,
        email: action.payload.user.email,
        first_name: action.payload.user.first_name,
        id: action.payload.user.id,
        last_name: action.payload.user.last_name,
        location: action.payload.user.location,
        avatar_url: action.payload.user.avatar_url,
        roleId: action.payload.user.roleId,
        website: action.payload.user.website
      };
    case types.GET_MY_PROFILE_FAIL:
    case types.PUBLIC_PROFILE_FAIL:
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
          display_name: action.payload.display_name,
          first_name: action.payload.first_name,
          roleId: action.payload.roleId,
          id: action.payload.id
        }
      };
    default:
      return state;
  }
}
