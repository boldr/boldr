import * as types from './actions';

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  id: '',
  name: '',
  description: '',
  posts: []
};

/**
 * Blog Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function tagsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.LOAD_TAG_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_TAG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.result.id,
        name: action.result.name,
        posts: action.result.posts,
        description: action.result.description
      };
    case types.LOAD_TAG_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
