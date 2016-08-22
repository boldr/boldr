import request from 'superagent';
import { API_USERS } from '../../../../../core/config';
import { notificationSend } from '../../../../Boldr/state/notifications';

export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAIL = 'LOAD_USERS_FAIL';

const loadUsers = () => ({
  type: LOAD_USERS_REQUEST
});

const loadUsersSuccess = (response) => ({
  type: LOAD_USERS_SUCCESS,
  isLoading: false,
  payload: response.body
});

// Fail receivers
const failedToLoadUsers = (err) => ({
  type: LOAD_USERS_FAIL,
  isLoading: false,
  error: err
});

// Public action creators
export function loadSiteUsers() {
  return dispatch => {
    dispatch(loadUsers());
    return request
      .get(API_USERS)
      .then(response => {
        if (response.status === 200) {
          dispatch(loadUsersSuccess(response));
        }
      })
      .catch(err => {
        dispatch(failedToLoadUsers(err));
      });
  };
}

const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
const updateUserDetails = () => {
  return { type: UPDATE_USER_REQUEST };
};
const updateUserSuccess = (response) => {
  return { type: UPDATE_USER_SUCCESS };
};
const errorUpdatingUser = (err) => {
  return {
    type: UPDATE_USER_FAILURE,
    error: err
  };
};

export function updateUser(userData) {
  const payload = {
    displayName: userData.displayName,
    firstName: userData.firstName,
    lastName: userData.lastName,
    roleId: userData.roleId
  };
  return dispatch => {
    dispatch(updateUserDetails(userData));
    return request
      .put(`${API_USERS}/${userData.id}`)
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .send(payload)
      .then(response => {
        dispatch(updateUserSuccess(response));
        dispatch(notificationSend({
          message: 'Updated user.',
          kind: 'info',
          dismissAfter: 3000
        }));
      })
      .catch(
        err => {
          dispatch(errorUpdatingUser(err.message));
          dispatch(notificationSend({
            message: 'There was a problem updating the user.',
            kind: 'error',
            dismissAfter: 3000
          }));
        });
  };
}


export const USER_SELECTED = 'USER_SELECTED';

export function userSelected(userId) {
  return {
    type: USER_SELECTED,
    id: userId
  };
}
const INITIAL_STATE = {
  isLoading: false,
  users: [],
  error: null,
  selected: {}
};

export default function siteUsersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_USERS_REQUEST:
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case LOAD_USERS_FAIL:
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state
      };
    case USER_SELECTED:
      return {
        ...state,
        selected: state.users.map((user, index) => {
          console.log(user.id === action.id, user.id, action.id);
          return Object.assign(user, {
            selected: (user.id === action.id ? true : false)
          });
        })
      };
    default:
      return state;
  }
}
