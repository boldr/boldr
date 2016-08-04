import fetch from 'core/fetch';
import request from 'superagent';
import { API_ADDR } from 'core/api';
import { processResponse } from 'core/api/ApiClient';
import * as at from './constants';

/**
 * GET ARTICLE ACTIONS
 */
const requestPosts = () => {
  return { type: at.FETCH_POSTS_REQUEST };
};
const receivePosts = (response) => ({
  type: at.FETCH_POSTS_SUCCESS,
  posts: response.body
});
const receivePostsFailed = (err) => ({
  type: at.FETCH_POSTS_FAIL,
  error: err
});

/**
 * @function fetchPostsIfNeeded
 * @description Function that determines whether or not posts need to be
 * fetched from the api. Dispatches either the fetchPosts Function
 * or returns the resolved promise if the posts are up to date.
 * @return {Promise} Posts Promise that resolves when posts are fetched
 * or they arent required to be refreshed.
 */
export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }

    return Promise.resolve();
  };
}
/**
 * Called by fetchPostsIfNeeded to retrieve the state containing posts
 * @param  {Object} state   The blog state which contains posts
 */
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
/**
 * Function to retrieve posts from the api.
 * @return {Array} Posts returned as an array of post objects.
 */
export function fetchPosts() {
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

const requestPost = () => {
  return { type: at.FETCH_POST_REQUEST };
};
const receivePost = (response) => ({
  type: at.FETCH_POST_SUCCESS,
  payload: response.body
});
const receivePostFailed = (err) => ({
  type: at.FETCH_POST_FAIL,
  error: err
});

/**
 * Retrieves a specific post from the API based on the value of its slug
 * @param  {string} slug the slug is the title of the post normalized / sluggified
 * @return {Object}      The post object
 */
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
    case at.FETCH_POSTS_REQUEST:
    case at.FETCH_POST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case at.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.posts
      };
    case at.FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedPost: action.payload
      };
    case at.FETCH_POSTS_FAIL:
    case at.FETCH_POST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
