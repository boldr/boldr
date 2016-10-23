import * as types from './constants';

const INITIAL_STATE = {
  docked: true,
  open: true,
  loaded: false,
  isLoading: false,
  error: null
};

export default function dashboard(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SHOW_SIDEBAR:
      return {
        ...state,
        loaded: true,
        docked: true,
        open: true
      };
    case types.HIDE_SIDEBAR:
      return {
        ...state,
        open: false,
        docked: false
      };
    default:
      return state;
  }
}
