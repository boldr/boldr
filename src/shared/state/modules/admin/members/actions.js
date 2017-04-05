import { notificationSend } from '../../notifications/notifications';
import * as api from '../../../../core/api';
import * as notif from '../../../../core/constants';
import * as t from '../../actionTypes';

/**
  * FETCH MEMBERS ACTIONS
  * -------------------------
  * @exports loadSiteMembers
  *****************************************************************/
export const fetchMembers = (axios: any): ThunkAction =>
  (dispatch: Dispatch) => {
    dispatch({ type: t.LOAD_MEMBERS_REQUEST });

    return axios
      .get('/api/v1/users')
      .then(res => {
        dispatch({ type: t.LOAD_MEMBERS_SUCCESS,
          payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: t.LOAD_MEMBERS_FAILURE,
          error: err });
      });
  };

export function loadSiteMembers() {
  return (dispatch, getState) => {
    if (shouldFetchMembers(getState())) {
      return dispatch(fetchMembers(axios));
    }
    /* istanbul ignore next */
    return null;
  };
}
function shouldFetchMembers(state) {
  const { members } = state.admin.members;
  if (!members.length) {
    return true;
  }
  if (members.length) {
    return false;
  }
  return members;
}
const loadMembers = () => ({
  type: t.LOAD_MEMBERS_REQUEST,
});

const loadMembersSuccess = response => {
  return {
    type: t.LOAD_MEMBERS_SUCCESS,
    payload: response.body.results,
  };
};

const failedToLoadMembers = err => ({
  type: t.LOAD_MEMBERS_FAILURE,
  loading: false,
  error: err,
});

/**
  * UPDATE MEMBER ACTIONS
  * -------------------------
  * @exports updateMember
  *****************************************************************/

export function updateMember(userData) {
  return dispatch => {
    dispatch(beginUpdateMember());
    return api
      .doUpdateMember(userData)
      .then(response => {
        dispatch(doneUpdateMember(response));
        dispatch(notificationSend(notif.MSG_UPDATE_MEMBER_SUCCESS));
      })
      .catch(err => {
        dispatch(failUpdateMember(err.message));
        dispatch(notificationSend(notif.MSG_UPDATE_MEMBER_ERROR));
      });
  };
}

const beginUpdateMember = () => {
  return { type: t.UPDATE_MEMBER_REQUEST };
};

const doneUpdateMember = response => {
  return {
    type: t.UPDATE_MEMBER_SUCCESS,
    payload: response,
  };
};

const failUpdateMember = err => {
  return {
    type: t.UPDATE_MEMBER_FAILURE,
    error: err,
  };
};

/**
  * SELECT MEMBER ACTIONS
  * -------------------------
  * @exports memberSelected
  *****************************************************************/

export function memberSelected(userId) {
  return {
    type: t.MEMBER_SELECTED,
    id: userId,
  };
}
