import fetch from 'core/fetch';
import { processResponse } from 'core/api/ApiClient';
/**
 * GET ARTICLE ACTIONS
 */
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

// Fetch Articles Action

export function requestPosts() {
  return { type: FETCH_POSTS_REQUEST };
}

export function receivePosts(json) {
  return {
    type: FETCH_POSTS_SUCCESS,
    result: json
  };
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return fetch('/api/v1/articles')
      .then(response => processResponse(response))
      .then(json => dispatch(receivePosts(json)));
  };
}

function shouldFetchPosts(state) {
  const post = state.post;
  if (!post.posts) {
    return true;
  }
  if (post.isLoading) {
    return false;
  }
  return post;
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }

    return Promise.resolve();
  };
}
export const INITIAL_STATE = {
  isLoading: false,
  error: undefined,
  posts: []
};
/**
 * Article Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function postReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        posts: action.result
      });
    case FETCH_POSTS_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}
