import fetch from 'core/fetch';
import request from 'superagent';
import { API_ADDR } from 'core/api';
import { processResponse } from 'core/api/ApiClient';
/**
 * GET ARTICLE ACTIONS
 */
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

// Fetch Articles Action
export const requestPosts = () => {
  return { type: FETCH_POSTS_REQUEST };
};

const receivePosts = (response) => ({
  type: FETCH_POSTS_SUCCESS,
  posts: response.body
});
const receivePostsFailed = (err) => ({
  type: FETCH_POSTS_FAIL,
  error: err
});
export function fetchPosts(data) {
  return dispatch => {
    dispatch(requestPosts());
    return request
      .get(`${API_ADDR}/articles`)
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

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL';

export const requestPost = () => {
  return { type: FETCH_POST_REQUEST };
};
const receivePost = (response) => ({
  type: FETCH_POST_SUCCESS,
  payload: response.body
});
const receivePostFailed = (err) => ({
  type: FETCH_POST_FAIL,
  error: err
});
export function fetchPost(slug) {
  return dispatch => {
    dispatch(requestPost());
    return request
      .get(`${API_ADDR}/articles/${slug}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(receivePost(response));
        }
      })
      .catch(err => {
        dispatch(receivePostFailed(err));
      });
  };
}

export const INITIAL_STATE = {
  isLoading: false,
  error: null,
  posts: [],
  selectedPost: {}
};
/**
 * Blog Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function blogReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
    case FETCH_POST_REQUEST:
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
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedPost: action.payload
      };
    case FETCH_POSTS_FAIL:
    case FETCH_POST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
