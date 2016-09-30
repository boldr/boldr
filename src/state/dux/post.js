/* eslint-disable default-case */
import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { merge } from 'lodash';
import { createSelector } from 'reselect';
import { API_BASE, API_POSTS, TOKEN_KEY } from 'core/config';
import { processResponse } from 'core/api/helpers';
import * as api from 'core/api/postService';
import * as types from '../actionTypes';
import { notificationSend } from './notifications';

const requestPosts = () => {
  return { type: types.FETCH_POSTS_REQUEST };
};
const receivePosts = (json) => ({
  type: types.FETCH_POSTS_SUCCESS,
  results: json.results
});
const receivePostsFailed = (err) => ({
  type: types.FETCH_POSTS_FAILURE, error: err
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
  const posts = state.posts;
  if (!posts) {
    return true;
  }
  if (posts.isLoading) {
    return false;
  }
  return posts;
}
/**
 * Function to retrieve posts from the api.
 * @return {Array} Posts returned as an array of post objects.
 */
export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return api.doFetchPosts()
      .then(json => dispatch(receivePosts(json)))
      .catch(err => {
        dispatch(receivePostsFailed(err));
      });
  };
}

/**
 * CREATE ARTICLE ACTIONS
 */
const beginCreatePost = () => {
  return { type: types.CREATE_POST_REQUEST };
};

const createPostSuccess = (response) => {
  return {
    type: types.CREATE_POST_SUCCESS,
    payload: response.body
  };
};
const errorCreatingPost = (err) => {
  return {
    type: types.CREATE_POST_FAIL,
    error: err
  };
};

/**
 * Create a new article takes the submitted form-data as articleData and
 * sends the information to the api.
 * @param  {Object} articleData The data from the form / article editor
 * @return {Object}             Response object.
 */
export function createPost(data) {
  return (dispatch) => {
    dispatch(beginCreatePost());
    return api.doCreatePost(data)
      .then(response => {
        if (response.status === 201) {
          dispatch(createPostSuccess(response));
          dispatch(notificationSend({
            message: 'Post created successfully.',
            kind: 'info',
            dismissAfter: 3000
          }));
        }
      })
      .catch(err => {
        dispatch(errorCreatingPost(err));
      });
  };
}


/**
 * Takes the user selected article and fetches the data from
 * the api.
 * @param  {String} articleId Technically its the uuid, but for all
 * intents and purposes its a String
 * @return {Object}           The post object.
 */
export function selectPost(postId) {
  return (dispatch) => {
    dispatch(postSelected(postId));
    return api.doSelectPost(postId)
      .then(response => {
        if (response.status === 200) {
          dispatch(receiveSelectedPost(response));
        }
      })
      .catch(err => {
        dispatch(receiveSelectedPostFailed(err));
      });
  };
}

const beginChangeStatus = () => {
  return { type: types.CHANGE_STATUS_REQUEST };
};

const changeStatusDone = (response) => {
  return {
    type: types.CHANGE_STATUS_SUCCESS,
    payload: response.body
  };
};
const changeStatusFailed = (err) => {
  return {
    type: types.CHANGE_STATUS_FAILURE,
    error: err
  };
};

export function changePostStatus(postId, postStatus) {
  return (dispatch) => {
    dispatch(beginChangeStatus());
    return api.doChangeStatus(postId, postStatus)
    .then(response => {
      if (response.status === 202) {
        dispatch(changeStatusDone(response));
      }
    })
    .catch(err => {
      dispatch(changeStatusFailed(err));
    });
  };
}

//
// Selectors
// -----------------

export const postsToState = (list) => (
  list.reduce((list, a) => ({
    ...list,
    [a.id]: a
  }), {})
);

export const getPosts = state => state.posts;
export const getPostIdParam = (state, params) => params.postId;

export const getSelectedPost = createSelector(
  getPosts,
  getPostIdParam,
  (posts, id) => posts[id]
);

export const getPostsArray = createSelector(
  getPosts,
  posts => Object.keys(posts).map(k => posts[k])
);

//
// Reducer
// -----------------
const INITIAL_STATE = {
  isLoading: false,
  error: null
};

/**
 * Blog Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function postsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
    case types.LOAD_POST_REQUEST:
    case types.CREATE_POST_REQUEST:
    case types.CHANGE_STATUS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false
        // pagination: action.pagination,
        // results: action.results
      };
    case types.LOAD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedPost: action.payload
      };
    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.CHANGE_STATUS_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          created_at: state.created_at,
          excerpt: state.excerpt,
          feature_image: action.payload.feature_image,
          id: action.payload.id,
          slug: action.payload.slug,
          title: action.payload.title,
          updated_at: action.payload.updated_at,
          user_id: action.payload.user_id,
          status: action.payload.status
        }
      };

    case types.FETCH_POSTS_FAILURE:
    case types.LOAD_POST_FAILURE:
    case types.CREATE_POST_FAIL:
    case types.CHANGE_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case types.SELECT_POST:
      return {
        ...state,
        isLoading: false,
        id: action.id,
        isEditing: true
      };
    case types.SELECT_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        current: action.current,
        isEditing: true
      };
    case types.SELECT_POST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        isEditing: true
      };
    default:
      return state;
  }
}
