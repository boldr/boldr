import request from 'superagent';
import { combineReducers } from 'redux';
import { push } from 'react-router-redux';
import * as api from 'core/api/boldrService';
import { API_SETTINGS, TOKEN_KEY } from 'core';
import * as types from '../actionTypes';
import { notificationSend } from './notifications';
// ------------------------------------
// React-Router-Redux push location
// ------------------------------------
export function goHome() {
  return (dispatch) => {
    dispatch(push('/'));
  };
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
    return api.doLoadSettings()
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
  if (state.boldr.siteName) {
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

const failUpdateSettings = (err) => ({
  type: types.UPDATE_SETTINGS_FAILURE,
  error: err
});

export function updateBoldrSettings(data, id) {
  return dispatch => {
    dispatch(beginUpdateSettings());
    return api.doUpdateSettings()
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
  isLoading: false,
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
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
