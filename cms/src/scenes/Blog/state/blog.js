import fetch from 'core/fetch';
import request from 'superagent';
import { API_BASE } from 'core/api';
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

// export function receivePosts(json) {
//   return {
//     type: FETCH_POSTS_SUCCESS,
//     result: json
//   };
// }
const receivePosts = (response) => ({
  type: FETCH_POSTS_SUCCESS,
  posts: response.body
});
const receivePostsFailed = (err) => ({
  type: FETCH_POSTS_FAIL,
  message: err
});
export function fetchPosts(data) {
  return dispatch => {
    dispatch(requestPosts());
    return request
      .get(`${API_BASE}/articles`)
      .then(response => {
        if (response.status === 200) {
          dispatch(receivePosts(response));
        }
      })
      .catch(err => {
        dispatch(receivePostsFailed(err));
      });
  };
}

function shouldFetchPosts(state) {
  const blog = state.blog;
  if (!blog.posts) {
    return true;
  }
  if (blog.isLoading) {
    return false;
  }
  return blog;
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
 * Blog Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function blogReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.posts
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
