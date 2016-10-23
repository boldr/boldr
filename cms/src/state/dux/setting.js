import { push } from 'react-router-redux';
import { arrayOf, normalize } from 'normalizr';
import { combineReducers } from 'redux';
import { uniq } from 'lodash';
import { createSelector } from 'reselect';
import { camelizeKeys } from 'humps';
import * as api from 'core/services/api';
import { setting as settingSchema } from 'core/services/schemas';
import * as types from '../actionTypes';
import { notificationSend } from './notifications';

/**
  * GET SETTINGS ACTIONS
  * -------------------------
  * @exports fetchSettingsIfNeeded
  *****************************************************************/

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

const loadSettings = () => ({
  type: types.LOAD_SETTINGS
});

function doneLoadSettings(normalized) {
  return {
    type: types.LOAD_SETTINGS_SUCCESS,
    settings: normalized.entities.settings,
    result: normalized.result
  };
}

const failLoadSettings = () => ({
  type: types.LOAD_SETTINGS_FAILURE
});

function loadBoldrSettings() {
  return dispatch => {
    dispatch(loadSettings());
    return api.doLoadSettings()
      .then(response => {
        if (response.status !== 200) {
          dispatch(failLoadSettings());
        }
        const camelizedJson = camelizeKeys(response.body);
        const normalized = normalize(camelizedJson, arrayOf(settingSchema));
        dispatch(doneLoadSettings(normalized));
      })
      .catch(err => {
        dispatch(failLoadSettings(err));
      });
  };
}

/**
 * Called by fetchSettingsIfNeeded
 * @param  {Object} state   The boldr state which contains the settings
 */
function shouldFetchSettings(state) {
  const settings = state.settings.keys;
  if (!settings.length) {
    console.log('SHOULD FETCH SETTINGS');
    return true;
  }
  if (settings.length) {
    console.log(settings, 'SHOULD NOT FETCH SETTINGS');
    return false;
  }
  return settings;
}

/**
  * UPDATE SETTINGS ACTIONS
  * -------------------------
  * @exports updateBoldrSettings
  *****************************************************************/

export function updateBoldrSettings(payload) {
  return dispatch => {
    dispatch(beginUpdateSettings());
    console.log(payload)
    return api.doUpdateSettings(payload)
      .then(response => {
        dispatch(doneUpdateSettings(response));
        dispatch(loadSettings());
        dispatch(notificationSend({
          message: 'Updated your settings.',
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


export const getSettings = createSelector(
  [
    (state) => state.settings.keys,
    (state) => state.settings.byKey
  ],
  (keys, byKey) => keys.map(key => byKey[key])
);

/**
  * REDUCER
  * -------------------------
  * @exports combineReducers
  *****************************************************************/

const byKey = (state = {}, action) => {
  let nextState;
  switch (action.type) {
    case types.LOAD_SETTINGS_SUCCESS:
    // case types.LOAD_SETTINGS_SUCCESS:

      let i = 0;
      for (const prop in action.settings) {
        i++;
        if (action.settings.hasOwnProperty(prop)) {
          console.log('prop', prop);
          Object.assign(action.settings[prop]);
        }
      }

      return {
        ...state,
        ...action.settings
      };

    case types.EDIT_SETTING:
      nextState = { ...state };
      nextState[action.key] = {
        ...state[action.key], key: action.key, value: action.value, description: action.description };

      return nextState;
    case types.DELETE_SETTING:
      nextState = { ...state };
      delete nextState[action.key];

      return nextState;

    default:
      return state;
  }
};

const keys = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_SETTINGS_SUCCESS:
      return [...state, ...action.result];

    case types.FETCH_SETTING_SUCCESS:
      return [...state, uniq(action.result)];

    case types.DELETE_SETTING:
      return state.filter(key => key !== action.key);

    default:
      return state;
  }
};


export default combineReducers({
  byKey,
  keys
});
