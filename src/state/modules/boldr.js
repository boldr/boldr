import request from 'superagent';
import cookie from 'react-cookie';
import { push } from 'react-router-redux';
import { API_BASE } from '../../config/api';

export const TOGGLE_SIDE_BAR = 'TOGGLE_SIDE_BAR';
export const DONE_LOADING = 'DONE_LOADING';
export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const LOAD_SETTINGS_SUCCESS = 'LOAD_SETTINGS_SUCCESS';
export const LOAD_SETTINGS_FAILURE = 'LOAD_SETTINGS_FAILURE';
export const SETTINGS_ENDPOINT = `${API_BASE}/settings`;

export const finishLoading = status => {
  return {
    type: DONE_LOADING
  };
};

export const toggleSideBar = () => {
  return {
    type: TOGGLE_SIDE_BAR
  };
};

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
      .set('Authorization', `Bearer ${cookie.load('boldr:jwt')}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(loadSettingsSuccess(response));
        } else {
          dispatch(failedToLoadSettings('Oops! Something went wrong!'));
        }
      })
      .catch(err => {
        dispatch(failedToLoadSettings(err));
        dispatch(push('/dashboard/setup'));
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
  payload: response.body,
  message: 'Boldr did its thing, now you do yours.'
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
      .post(SETTINGS_ENDPOINT)
      .set('Authorization', `Bearer ${cookie.load('boldr:jwt')}`)
      .send(data)
      .then(response => {
        if (response.status === 201) {
          dispatch(saveSetupSuccess(response));
          dispatch(loadSettings());
        }
      })
      .catch(err => {
        dispatch(failedToSaveSetup(err));
      });
  };
}

const INITIAL_STATE = {
  isLoading: true,
  siteName: '',
  description: '',
  logo: '',
  siteUrl: '',
  favicon: '',
  analyticsId: '',
  allowRegistration: ''
};

export default function boldr(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DONE_LOADING:
      return {
        ...state,
        isLoading: false
      };
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
        payload: action.payload,
        message: action.message
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
