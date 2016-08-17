import request from 'superagent';
import { push } from 'react-router-redux';
import { API_BASE, TOKEN_KEY } from '../../../core/config';
import { notificationSend } from './notifications';

export const DONE_LOADING = 'DONE_LOADING';
export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const LOAD_SETTINGS_SUCCESS = 'LOAD_SETTINGS_SUCCESS';
export const LOAD_SETTINGS_FAILURE = 'LOAD_SETTINGS_FAILURE';

export const SETTINGS_ENDPOINT = `${API_BASE}/boldr`;

export function goHome(data) {
  return (dispatch) => {
    dispatch(push('/'));
  };
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
const failedToLoadSettings = (data) => ({
  type: LOAD_SETTINGS_FAILURE,
  data
});

// Public action creators
export function loadBoldrSettings(data) {
  return dispatch => {
    dispatch(loadSettings());
    return request
      .get(SETTINGS_ENDPOINT)
      .set('Authorization', `Bearer ${localStorage.getItem(TOKEN_KEY)}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(loadSettingsSuccess(response));
        } else {
          dispatch(failedToLoadSettings('Oops! Something went wrong!'));
        }
      })
      .catch(err => {
        dispatch(failedToLoadSettings(err));
      });
  };
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
      .post(`${SETTINGS_ENDPOINT}`)
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
      .put(`${SETTINGS_ENDPOINT}/${id}`)
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
  allowRegistration: null
};

export default function boldrReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_SETTINGS:
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
        allowRegistration: action.allowRegistration,
        message: action.message
      };
    case LOAD_SETTINGS_FAILURE:
      return {
        ...state,
        isLoading: false
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
