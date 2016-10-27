import { API_ACTIVITY } from 'core/config/endpoints';
import * as api from 'core/services/api';
const LOAD_ACTIVITY_REQUEST = '@boldr/activity/LOAD_ACTIVITY_REQUEST';
const LOAD_ACTIVITY_SUCCESS = '@boldr/activity/LOAD_ACTIVITY_SUCCESS';
const LOAD_ACTIVITY_FAILURE = '@boldr/activity/LOAD_ACTIVITY_FAILURE';
const LOAD_ACTIVITIES_REQUEST = '@boldr/activity/LOAD_ACTIVITIES_REQUEST';
const LOAD_ACTIVITIES_SUCCESS = '@boldr/activity/LOAD_ACTIVITIES_SUCCESS';
const LOAD_ACTIVITIES_FAILURE = '@boldr/activity/LOAD_ACTIVITIES_FAILURE';

const loadActivities = () => ({
  type: LOAD_ACTIVITIES_REQUEST
});

const loadActivitiesSuccess = (response) => {
  return {
    type: LOAD_ACTIVITIES_SUCCESS,
    payload: response.body
  };
};

// Fail receivers
const failedToLoadActivities = (err) => ({
  type: LOAD_ACTIVITIES_FAILURE,
  isLoading: false,
  error: err
});

export function loadSiteActivity() {
  return dispatch => {
    dispatch(loadActivities());
    return api.doGetActivities()
      .then(response => {
        if (response.status !== 200) {
          dispatch(failedToLoadActivities(response));
        }
        dispatch(loadActivitiesSuccess(response));
      })
      .catch(err => {
        dispatch(failedToLoadActivities(err));
      });
  };
}

const INITIAL_STATE = {
  loaded: false,
  activities: [],
  error: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_ACTIVITIES_REQUEST:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case LOAD_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload,
        loaded: true,
        loading: false
      };
    case LOAD_ACTIVITIES_FAILURE:
      return {
        ...state,
        error: action.error,
        loaded: true,
        loading: false
      };

    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.activity && globalState.activity.loaded;
}

export function fetchActivities() {
  return {
    types: [LOAD_ACTIVITIES_REQUEST, LOAD_ACTIVITIES_SUCCESS, LOAD_ACTIVITIES_FAILURE],
    promise: (client) => client.get(`${API_ACTIVITY}`)
  };
}
