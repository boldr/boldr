import request from 'superagent';
import { API_USERS } from '../../../../../core/config';
import { notificationSend } from '../../../../Boldr/state/notifications';

export const LOAD_MEMBERS_REQUEST = 'LOAD_MEMBERS_REQUEST';
export const LOAD_MEMBERS_SUCCESS = 'LOAD_MEMBERS_SUCCESS';
export const LOAD_MEMBERS_FAIL = 'LOAD_MEMBERS_FAIL';

const loadMembers = () => ({
  type: LOAD_MEMBERS_REQUEST
});

const loadMembersSuccess = (response) => ({
  type: LOAD_MEMBERS_SUCCESS,
  isLoading: false,
  payload: response.body
});

// Fail receivers
const failedToLoadMembers = (err) => ({
  type: LOAD_MEMBERS_FAIL,
  isLoading: false,
  error: err
});

// Public action creators
export function loadSiteMembers() {
  return dispatch => {
    dispatch(loadMembers());
    return request
      .get(`${API_USERS}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(loadMembersSuccess(response));
        }
      })
      .catch(err => {
        dispatch(failedToLoadMembers(err));
      });
  };
}

const UPDATE_MEMBER_REQUEST = 'UPDATE_MEMBER_REQUEST';
const UPDATE_MEMBER_SUCCESS = 'UPDATE_MEMBER_SUCCESS';
const UPDATE_MEMBER_FAILURE = 'UPDATE_MEMBER_FAILURE';
const beginUpdateMember = () => {
  return { type: UPDATE_MEMBER_REQUEST };
};

const doneUpdateMember = (response) => {
  return { type: UPDATE_MEMBER_SUCCESS };
};

const failUpdateMember = (err) => {
  return {
    type: UPDATE_MEMBER_FAILURE,
    error: err
  };
};

export function updateMember(userData) {
  const payload = {
    displayName: userData.displayName,
    firstName: userData.firstName,
    lastName: userData.lastName,
    roleId: userData.roleId
  };
  return dispatch => {
    dispatch(beginUpdateMember(userData));
    return request
      .put(`${API_USERS}/${userData.id}`)
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .send(payload)
      .then(response => {
        dispatch(doneUpdateMember(response));
        dispatch(notificationSend({
          message: 'Updated user.',
          kind: 'info',
          dismissAfter: 3000
        }));
      })
      .catch(
        err => {
          dispatch(failUpdateMember(err.message));
          dispatch(notificationSend({
            message: 'There was a problem updating the user.',
            kind: 'error',
            dismissAfter: 3000
          }));
        });
  };
}


export const MEMBER_SELECTED = 'MEMBER_SELECTED';

export function memberSelected(userId) {
  return {
    type: MEMBER_SELECTED,
    id: userId
  };
}
const INITIAL_STATE = {
  isLoading: false,
  members: [],
  error: null,
  selected: {}
};

export default function membersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_MEMBERS_REQUEST:
    case UPDATE_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_MEMBERS_SUCCESS:
      return {
        ...state,
        members: action.payload
      };
    case LOAD_MEMBERS_FAIL:
    case UPDATE_MEMBER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case UPDATE_MEMBER_SUCCESS:
      return {
        ...state
      };
    case MEMBER_SELECTED:
      return {
        ...state,
        selected: state.members.map((member, index) => {
          console.log(member.id === action.id, member.id, action.id);
          return Object.assign(member, {
            selected: (member.id === action.id ? true : false)
          });
        })
      };
    default:
      return state;
  }
}
