import request from 'superagent';
import { API_USERS } from 'core';
import { notificationSend } from 'state/dux/notifications';
import * as api from 'core/api/member.service';
import * as notif from 'core/notificationMessages';
import * as types from './constants';

const loadMembers = () => ({
  type: types.LOAD_MEMBERS_REQUEST
});

const loadMembersSuccess = (response) => {
  return {
    type: types.LOAD_MEMBERS_SUCCESS,
    payload: response.body
  };
};

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
        if (response.status !== 200) {
          dispatch(failedToLoadMembers(err));
        }
        dispatch(loadMembersSuccess(response));
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
