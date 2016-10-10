import * as types from './constants';

const INITIAL_STATE = {
  isLoading: false,
  activities: [],
  error: null
};

function activityReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_ACTIVITIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload
      };
    case types.LOAD_ACTIVITIES_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
}

export default activityReducer;
