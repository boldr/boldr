import * as types from '../state/constants';

const INITIAL_STATE = {
  isEditing: false,
  isLoading: false,
  error: null,
  title: '',
  slug: '',
  id: '',
  featureImage: '',
  content: '',
  user: {},
  tags: []
};

function currentPost(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.LOAD_POST_REQUEST:
    case types.UPDATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        title: action.title,
        slug: action.slug,
        id: action.id,
        featureImage: action.featureImage,
        content: action.content,
        user: action.user,
        tags: action.tags
      };
    case types.LOAD_POST_FAILURE:
    case types.UPDATE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case types.CLEAR_CURRENT_POST:
      return {
        ...state,
        isLoading: false,
        title: '',
        slug: '',
        id: '',
        featureImage: '',
        content: '',
        user: '',
        tags: ''
      };
    default:
      return state;
  }
}

export default currentPost;
