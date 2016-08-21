import request from 'superagent';
import { push } from 'react-router-redux';
import fetch from '../../../core/fetch';
import { API_SETTINGS, API_BASE, TOKEN_KEY, API_MENU } from '../../../core/config';
import { processResponse } from '../../../core/api/helpers';
import { notificationSend } from './notifications';

export const DONE_LOADING = 'DONE_LOADING';
export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const LOAD_SETTINGS_SUCCESS = 'LOAD_SETTINGS_SUCCESS';
export const LOAD_SETTINGS_FAILURE = 'LOAD_SETTINGS_FAILURE';

export const LOAD_MENUS_REQUEST = 'LOAD_MENUS_REQUEST';
export const LOAD_MENUS_SUCCESS = 'LOAD_MENUS_SUCCESS';
export const LOAD_MENUS_FAILURE = 'LOAD_MENUS_FAILURE';

export function goHome(data) {
  return (dispatch) => {
    dispatch(push('/'));
  };
}
const beginLoadMenus = () => ({
  type: LOAD_MENUS_REQUEST
});

const loadMenusSuccess = (json) => ({
  type: LOAD_MENUS_SUCCESS,
  payload: json
});

// Fail receivers
const failedToLoadMenus = (err) => ({
  type: LOAD_MENUS_FAILURE,
  error: err
});

/**
 * Function to retrieve menus from the api.
 * @return {Array} Menus returned as an array of menu objects.
 */
export function loadMenus() {
  return dispatch => {
    dispatch(beginLoadMenus());
    return fetch(`${API_MENU}`)
      .then(response => processResponse(response))
      .then(json => dispatch(loadMenusSuccess(json)))
      .catch(err => {
        dispatch(failedToLoadSettings(err));
      });
  };
}
/**
 * @function fetchMenusIfNeeded
 * @description Function that determines whether or not menus need to be
 * fetched from the api. Dispatches either the loadMenus Function
 * or returns the resolved promise if the menus are up to date.
 * @return {Promise} Menus Promise that resolves when menus are fetched
 * or they arent required to be refreshed.
 */
export function fetchMenusIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchMenus(getState())) {
      return dispatch(loadMenus());
    }

    return Promise.resolve();
  };
}
/**
 * Called by fetchMenusIfNeeded to retrieve the state containing menus
 * @param  {Object} state   The blog state which contains menus
 */
function shouldFetchMenus(state) {
  const menus = state.boldr.menus;
  if (!menus) {
    return true;
  }
  if (state.boldr.isLoading) {
    return false;
  }
  return menus;
}


const loadSettings = () => ({
  type: LOAD_SETTINGS
});

const loadSettingsSuccess = (response) => ({
  type: LOAD_SETTINGS_SUCCESS,
  siteName: response.body[0].siteName,
  description: response.body[0].description,
  logo: response.body[0].logo,
  siteUrl: response.body[0].siteUrl,
  favicon: response.body[0].favicon,
  analyticsId: response.body[0].analyticsId,
  allowRegistration: response.body[0].allowRegistration
});

// Fail receivers
const failedToLoadSettings = (err) => ({
  type: LOAD_SETTINGS_FAILURE,
  error: err
});

// Public action creators
export function loadBoldrSettings(data) {
  return dispatch => {
    dispatch(loadSettings());
    return request
      .get(`${API_SETTINGS}`)
      .then(response => {
        dispatch(loadSettingsSuccess(response));
      })
      .catch(err => {
        dispatch(failedToLoadSettings(err));
      });
  };
}
/**
 * @function fetchMenusIfNeeded
 * @description Function that determines whether or not menus need to be
 * fetched from the api. Dispatches either the loadMenus Function
 * or returns the resolved promise if the menus are up to date.
 * @return {Promise} Menus Promise that resolves when menus are fetched
 * or they arent required to be refreshed.
 */
export function fetchSettingsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchSettings(getState())) {
      return dispatch(loadBoldrSettings());
    }

    return Promise.resolve();
  };
}
/**
 * Called by fetchMenusIfNeeded to retrieve the state containing menus
 * @param  {Object} state   The blog state which contains menus
 */
function shouldFetchSettings(state) {
  const settings = state.boldr;
  if (!settings.siteName) {
    return true;
  }
  if (state.boldr.isLoading) {
    return false;
  }
  return settings;
}

const SAVE_SETUP_REQUEST = 'SAVE_SETUP_REQUEST';
const SAVE_SETUP_SUCCESS = 'SAVE_SETUP_SUCCESS';
const SAVE_SETUP_FAIL = 'SAVE_SETUP_FAIL';

const startSaveSetup = () => ({
  type: SAVE_SETUP_REQUEST
});

const saveSetupSuccess = (response) => ({
  type: SAVE_SETUP_SUCCESS,
  payload: response.body
});

// Fail receivers
const failedToSaveSetup = (data) => ({
  type: SAVE_SETUP_FAIL,
  data
});

// Public action creators
export function saveBoldrSetup(data) {
  return dispatch => {
    dispatch(startSaveSetup());
    return request
      .post(`${API_SETTINGS}`)
      .set('Authorization', `Bearer ${localStorage.getItem(TOKEN_KEY)}`)
      .send(data)
      .then(response => {
        if (response.status === 201) {
          console.log(response);
          dispatch(saveSetupSuccess(response));
          dispatch(loadSettings());
          dispatch(notificationSend({
            message: 'Your site is set up!',
            kind: 'info',
            dismissAfter: 3000
          }));
          dispatch(push('/dashboard'));
        }
      })
      .catch(err => {
        dispatch(failedToSaveSetup(err));
        dispatch(notificationSend({
          message: `We ran into a problem with your set up ${err}`,
          kind: 'error',
          dismissAfter: 3000
        }));
      });
  };
}
const beginUpdateSettings = () => ({
  type: UPDATE_SETTINGS_REQUEST
});

const updateSettingsSuccess = (response) => ({
  type: UPDATE_SETTINGS_SUCCESS,
  payload: response.body
});

// Fail receivers
const updateSettingsFailed = (data) => ({
  type: UPDATE_SETTINGS_FAILURE,
  data
});

export function updateBoldrSettings(data, id) {
  return dispatch => {
    dispatch(beginUpdateSettings());
    return request
      .put(`${API_SETTINGS}/${id}`)
      .set('Authorization', `Bearer ${localStorage.getItem(TOKEN_KEY)}`)
      .send(data)
      .then(response => {
        console.log(response);
        dispatch(updateSettingsSuccess(response));
        dispatch(loadSettings());
        dispatch(notificationSend({
          message: 'Your site is set up!',
          kind: 'info',
          dismissAfter: 3000
        }));
        dispatch(push('/dashboard'));
      })
      .catch(err => {
        dispatch(updateSettingsFailed(err));
        dispatch(notificationSend({
          message: `We ran into a problem with your set up ${err}`,
          kind: 'error',
          dismissAfter: 3000
        }));
      });
  };
}

export const INITIAL_STATE = {
  isLoading: false,
  siteName: null,
  description: null,
  logo: null,
  siteUrl: null,
  favicon: null,
  analyticsId: null,
  allowRegistration: null,
  menus: []
};

export default function boldrReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_SETTINGS:
    case LOAD_MENUS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_SETTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        siteName: action.siteName,
        description: action.description,
        logo: action.logo,
        siteUrl: action.siteUrl,
        favicon: action.favicon,
        analyticsId: action.analyticsId,
        allowRegistration: action.allowRegistration
      };
    case LOAD_SETTINGS_FAILURE:
    case LOAD_MENUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case LOAD_MENUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menus: action.payload
      };
    case SAVE_SETUP_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SAVE_SETUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        siteName: action.payload.siteName,
        description: action.payload.description,
        logo: action.payload.logo,
        siteUrl: action.payload.siteUrl,
        favicon: action.payload.favicon,
        analyticsId: action.payload.analyticsId,
        allowRegistration: action.payload.allowRegistration
      };
    case SAVE_SETUP_FAIL:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
