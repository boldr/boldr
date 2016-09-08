import * as types from './constants';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  isAuthenticated: false,
  error: null,
  isLoading: false,
  token: null,
  hydrated: false,
  user: {
    display_name: null,
    email: null,
    first_name: null,
    id: null,
    last_name: null,
    avatar_url: null,
    roleId: null,
    role: null
  }
};

/**
 * Auth Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function authReducer(state = INITIAL_STATE, action = {}) {
  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case types.LOGIN_FAILURE:
    case types.FORGOT_PASSWORD_FAILURE:
    case types.CREATE_ACCOUNT_FAILURE:
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.error
      };
    case types.LOGIN_REQUEST:
    case types.CHECK_AUTH_REQUEST:
    case types.CREATE_ACCOUNT_REQUEST:
    case types.FORGOT_PASSWORD_REQUEST:
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false
      };
    case types.LOGIN_SUCCESS:
    case types.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.token,
        user: {
          display_name: action.user.display_name,
          email: action.user.email,
          first_name: action.user.first_name,
          id: action.user.id,
          last_name: action.user.last_name,
          avatar_url: action.user.avatar_url,
          roleId: action.user.roleId,
          role: action.user.role
        }
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false
      };
    case types.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
