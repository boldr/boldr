import { normalize, schema } from 'normalizr';
import * as api from '../../../../core/api';
import * as notif from '../../../../core/constants';
import { notificationSend } from '../../notifications/notifications';
import * as t from '../../actionTypes';
import { detail, menu } from './schema';

/**
  * FETCH MENUS ACTIONS
  * -------------------------
  * @exports fetchMenusIfNeeded
  * @exports fetchMenus
  *****************************************************************/

/* istanbul ignore next */
export const fetchMenusIfNeeded = (): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, axios: any) => {
    /* istanbul ignore next */
    if (shouldFetchMenus(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchMenus(axios));
    }

    /* istanbul ignore next */
    return null;
  };

export const fetchMenus = (axios: any): ThunkAction =>
  (dispatch: Dispatch) => {
    dispatch({ type: t.GET_MAIN_MENU_REQUEST });

    return axios
      .get('/api/v1/menus/1')
      .then(res => {
        dispatch({ type: t.GET_MAIN_MENU_SUCCESS,
          payload: res.data });
      })
      .catch(err => {
        dispatch({ type: t.GET_MAIN_MENU_SUCCESS,
          error: err });
      });
  };
function shouldFetchMenus(state) {
  const menu = state.boldr.menu.main.details;
  if (!menu.length) {
    return true;
  }
  if (menu.length) {
    return false;
  }
  return menu;
}

function beginFetchMenus() {
  return {
    type: t.GET_MAIN_MENU_REQUEST,
  };
}

function fetchMenusError(error) {
  return {
    type: t.GET_MAIN_MENU_FAILURE,
    error,
  };
}

function fetchMenusSuccess(menuData) {
  return {
    type: t.GET_MAIN_MENU_SUCCESS,
    payload: menuData,
  };
}

/**
  * UPDATE MENU DETAIL ACTIONS
  * -------------------------
  * @exports updateMenuDetails
  *****************************************************************/

export function updateMenuDetails(data) {
  return dispatch => {
    dispatch(beginUpdateMenuDetails());
    return api
      .doUpdateMenuDetails(data)
      .then(response => {
        dispatch(updateMenuDetailsSuccess(response));
        dispatch(notificationSend(notif.MSG_UPDATE_LINK_SUCCESS));
      })
      .catch(err => {
        dispatch(updateMenuDetailsFailure(err.message));
        dispatch(notificationSend(notif.MSG_UPDATE_LINK_ERROR));
      });
  };
}

function beginUpdateMenuDetails() {
  return {
    type: t.UPDATE_MENU_REQUEST,
  };
}

function updateMenuDetailsSuccess(response) {
  return {
    type: t.UPDATE_MENU_SUCCESS,
    payload: response.body,
  };
}

function updateMenuDetailsFailure(err) {
  return {
    type: t.UPDATE_MENU_FAILURE,
    error: err,
  };
}

/**
  * ADD MENU DETAIL ACTIONS
  * -------------------------
  * @exports addMenuDetail
  *****************************************************************/

export function addMenuDetail(values) {
  return dispatch => {
    dispatch(beginAddMenuDetail());
    return api.doAddNavigationLinks(values).then(response => {
      if (!response.status === 201) {
        dispatch(addMenuDetailFailure(response));
        dispatch(notificationSend(notif.MSG_ADD_LINK_ERROR));
      }
      dispatch(addMenuDetailSuccess(response));
      dispatch(notificationSend(notif.MSG_ADD_LINK_SUCCESS));
    });
  };
}

function beginAddMenuDetail() {
  return {
    type: t.ADD_MENU_DETAIL_REQUEST,
  };
}

function addMenuDetailSuccess(response) {
  return {
    type: t.ADD_MENU_DETAIL_SUCCESS,
    payload: response.body,
  };
}

function addMenuDetailFailure(err) {
  return {
    type: t.ADD_MENU_DETAIL_FAILURE,
    error: err,
  };
}
