const LOAD = 'navigation/LOAD';
const LOAD_SUCCESS = 'navigation/LOAD_SUCCESS';
const LOAD_FAILURE = 'navigation/LOAD_FAILURE';

const initialState = {
  loaded: false
};

export default function navigationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        primary: action.result
      };
    case LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.navigation && globalState.navigation.loaded;
}

export function loadPrimary() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILURE],
    promise: (client) => client.get('/navigations/1')
  };
}
