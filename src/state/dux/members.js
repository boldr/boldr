import request from 'superagent';
import { API_USERS } from 'core';
import { notificationSend } from 'state/dux/notifications';
import * as api from 'core/api/member.service';
import * as notif from 'core/notificationMessages';
import * as types from '../actionTypes';

const loadMembers = () => ({
  type: types.LOAD_MEMBERS_REQUEST
});

const loadMembersSuccess = (response) => ({
  type: types.LOAD_MEMBERS_SUCCESS,
  isLoading: false,
  payload: response.body
});

// Fail receivers
const failedToLoadMembers = (err) => ({
  type: types.LOAD_MEMBERS_FAILURE,
  isLoading: false,
  error: err
});

// Public action creators
export function loadSiteMembers() {
  return dispatch => {
    dispatch(loadMembers());
    return api.doFetchMembers()
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

const beginUpdateMember = () => {
  return { type: types.UPDATE_MEMBER_REQUEST };
};

const doneUpdateMember = (response) => {
  return { type: types.UPDATE_MEMBER_SUCCESS };
};

const failUpdateMember = (err) => {
  return {
    type: types.UPDATE_MEMBER_FAILURE,
    error: err
  };
};

export function updateMember(userData) {
  return dispatch => {
    dispatch(beginUpdateMember());
    return api.doUpdateMember(userData)
      .then(response => {
        dispatch(doneUpdateMember(response));
        dispatch(notificationSend(notif.MSG_UPDATE_MEMBER_SUCCESS));
      })
      .catch(
        err => {
          dispatch(failUpdateMember(err.message));
          dispatch(notificationSend(notif.MSG_UPDATE_MEMBER_ERROR));
        });
  };
}

export function memberSelected(userId) {
  return {
    type: types.MEMBER_SELECTED,
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
    case types.LOAD_MEMBERS_REQUEST:
    case types.UPDATE_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_MEMBERS_SUCCESS:
      return {
        ...state,
        members: action.payload
      };
    case types.LOAD_MEMBERS_FAILURE:
    case types.UPDATE_MEMBER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case types.UPDATE_MEMBER_SUCCESS:
      return {
        ...state
      };
    case types.MEMBER_SELECTED:
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
