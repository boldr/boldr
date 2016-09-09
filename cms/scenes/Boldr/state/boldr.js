import request from 'superagent';
import { combineReducers } from 'redux';
import { push } from 'react-router-redux';
import fetch from '../../../core/fetch';
import {
  API_SETTINGS,
  API_BASE,
  API_NAVIGATION,
  TOKEN_KEY,
  processResponse,
  credentials,
  jsonHeaders
} from '../../../core';
import { notificationSend } from './notifications';
import * as types from './constants';

debug.enable(process.env.DEBUG);
const log = {
  boldr: debug('boldr'),
  err: debug('boldr:error')
};
// ------------------------------------
// React-Router-Redux push location
// ------------------------------------
export function goHome() {
  return (dispatch) => {
    dispatch(push('/'));
  };
}

// ------------------------------------
// Load Menu
// ------------------------------------
const beginLoadMenus = () => ({ type: types.LOAD_MENUS_REQUEST });

const doneLoadMenus = (json) => ({
  type: types.LOAD_MENUS_SUCCESS,
  payload: json
});

const failLoadMenus = (err) => ({
  type: types.LOAD_MENUS_FAILURE,
  error: err
});

/**
 * Function to retrieve menus from the api.
 * @return {Array} Menus returned as an array of menu objects.
 */
function loadMenus() {
  return dispatch => {
    dispatch(beginLoadMenus());
    return fetch(`${API_NAVIGATION}`)
      .then(response => processResponse(response))
      .then(json => dispatch(doneLoadMenus(json)))
      .catch(err => {
        dispatch(failLoadMenus(err));
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
  const navs = state.boldr.navs;
  if (!navs) {
    return true;
  }
  if (state.boldr.isLoading) {
    return false;
  }
  return navs;
}

// ------------------------------------
// Load Settings
// ------------------------------------
const loadSettings = () => ({ type: types.LOAD_SETTINGS });

function doneLoadSettings(response) {
  return {
    type: types.LOAD_SETTINGS_SUCCESS,
    siteName: response.body.site_name,
    description: response.body.site_description,
    logo: response.body.site_logo,
    slogan: response.body.site_slogan,
    siteUrl: response.body.site_url,
    favicon: response.body.site_favicon,
    analyticsId: response.body.google_analytics,
    configuration: response.body.configuration
  };
}

const failLoadSettings = (err) => ({
  type: types.LOAD_SETTINGS_FAILURE,
  error: err
});

function loadBoldrSettings() {
  return dispatch => {
    dispatch(loadSettings());
    return request(`${API_SETTINGS}`)
    .then(response => {
      dispatch(doneLoadSettings(response));
    })
    .catch(err => {
      dispatch(failLoadSettings(err));
    });
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

/**
 * @function fetchSettingsIfNeeded
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

// ------------------------------------
// Update Settings
// ------------------------------------
const beginUpdateSettings = () => ({
  type: types.UPDATE_SETTINGS_REQUEST
});

const doneUpdateSettings = (response) => ({
  type: types.UPDATE_SETTINGS_SUCCESS,
  payload: response.body
});

// Fail receivers
const failUpdateSettings = (err) => ({
  type: types.UPDATE_SETTINGS_FAILURE,
  error: err
});

export function updateBoldrSettings(data, id) {
  return dispatch => {
    dispatch(beginUpdateSettings());
    return request
      .put(`${API_SETTINGS}/${id}`)
      .set('Authorization', `Bearer ${localStorage.getItem(TOKEN_KEY)}`)
      .send(data)
      .then(response => {
        dispatch(doneUpdateSettings(response));
        dispatch(loadSettings());
        dispatch(notificationSend({
          message: 'Your site is set up!',
          kind: 'info',
          dismissAfter: 3000
        }));
        dispatch(push('/dashboard'));
      })
      .catch(err => {
        dispatch(failUpdateSettings(err));
        dispatch(notificationSend({
          message: `We ran into a problem with your set up ${err}`,
          kind: 'error',
          dismissAfter: 3000
        }));
      });
  };
}

// ------------------------------------
// Reducer
// ------------------------------------
const INITIAL_STATE = {
  isLoading: true,
  siteName: null,
  description: null,
  logo: null,
  siteUrl: null,
  favicon: null,
  slogan: null,
  analyticsId: null,
  configuration: {},
  primaryNav: null
};

export default function boldrReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_SETTINGS:
    case types.LOAD_MENUS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_SETTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        siteName: action.siteName,
        description: action.description,
        logo: action.logo,
        siteUrl: action.siteUrl,
        favicon: action.favicon,
        slogan: action.slogan,
        analyticsId: action.analyticsId,
        configuration: action.configuration
      };
    case types.LOAD_SETTINGS_FAILURE:
    case types.LOAD_MENUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case types.LOAD_MENUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        primaryNav: {
          id: action.payload[0].id,
          name: action.payload[0].name,
          location: action.payload[0].location,
          primary: action.payload[0].primary,
          restricted: action.payload[0].restricted,
          links: action.payload[0].items.links
        }
      };
    default:
      return state;
  }
}
