import { API_ACTIVITY } from 'core/config/endpoints';
import * as types from './constants';

const loadActivities = () => ({
  type: types.LOAD_ACTIVITIES_REQUEST
});

const loadActivitiesSuccess = (response) => {
  return {
    type: types.LOAD_ACTIVITIES_SUCCESS,
    payload: response.body
  };
};

// Fail receivers
const failedToLoadActivities = (err) => ({
  type: types.LOAD_ACTIVITIES_FAILURE,
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

export function isLoaded(globalState) {
  return globalState.activities && globalState.activities.loaded;
}

export function fetchActivities() {
  return {
    types: [types.LOAD_ACTIVITIES_REQUEST, types.LOAD_ACTIVITIES_SUCCESS, types.LOAD_ACTIVITIES_FAILURE],
    promise: (client) => client.get(`${API_ACTIVITY}`)
  };
}
