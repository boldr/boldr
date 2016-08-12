import fetch from 'core/fetch';
import request from 'superagent';
import normalize from 'normalizr';
import { push } from 'react-router-redux';
// import { API_BASE, API_POSTS } from 'core/api';
import { notificationSend } from 'scenes/Boldr/state/notifications';
import { processResponse } from 'core/api/ApiClient';
import * as at from './constants';
import * as schema from './schema';

const API_BASE = '/api/v1';
const API_POSTS = '/api/v1/posts';

export const POSTS_LIST_REQUEST = 'POSTS_LIST_REQUEST';
export const POSTS_LIST_SUCCESS = 'POSTS_LIST_SUCCESS';
export const POSTS_LIST_FAILURE = 'POSTS_LIST_FAILURE';

const requestPostList = () => ({
  type: POSTS_LIST_REQUEST
});
const failedGettingPostList = (err) => ({
  type: POSTS_LIST_FAILURE,
  error: err
});
const gotPostList = (response) => ({
  type: POSTS_LIST_SUCCESS,
  data: response.body
});

export function getPostsListing() {
  return dispatch => {
    dispatch(requestPostList());
    return request
      .get(API_POSTS)
      .then(response => {
        if (response.status === 200) {
          dispatch(gotPostList(response));
        }
      })
      .catch(err => {
        dispatch(failedGettingPostList(err));
      });
  };
}
/**
 * GET ARTICLE ACTIONS
 */
const requestPosts = () => {
  return { type: at.FETCH_POSTS_REQUEST };
};
const receivePosts = (json) => ({
  type: at.FETCH_POSTS_SUCCESS,
  payload: json
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
  const posts = state.posts;
  if (!posts.data) {
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
    return fetch('/api/v1/posts')
      .then(response => processResponse(response))
      .then(json => dispatch(receivePosts(json)));
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
      .get(`${API_BASE}/posts/${slug}`)
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
/**
 * CREATE ARTICLE ACTIONS
 */
const beginCreatePost = () => {
  return { type: at.CREATE_POST_REQUEST };
};

const createPostSuccess = (response) => {
  return {
    type: at.CREATE_POST_SUCCESS,
    payload: response.body
  };
};
const errorCreatingPost = (err) => {
  return {
    type: at.CREATE_POST_FAIL,
    error: err
  };
};

/**
 * Create a new article takes the submitted form-data as articleData and
 * sends the information to the api.
 * @param  {Object} articleData The data from the form / article editor
 * @return {Object}             Response object.
 */
export function createPost(postData) {
  return (dispatch) => {
    dispatch(beginCreatePost());
    return request
      .post(API_POSTS)
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .send({
        title: postData.title,
        content: postData.content,
        tags: postData.tags,
        status: postData.status
      })
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
 * Select Post
 * @description Used when on the article list state.
 */
const postSelected = (articleId) => {
  return {
    type: at.SELECT_POST,
    id: articleId
  };
};

const receiveSelectedPost = (response) => ({
  type: at.SELECT_POST_SUCCESS,
  current: response.body
});

const receiveSelectedPostFailed = (err) => ({
  type: at.SELECT_POST_FAIL,
  error: err
});

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
    return request
      .get(`${API_POSTS}/id/${postId}`)
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
const updatePostDetails = () => {
  return { type: at.UPDATE_POST_REQUEST };
};
const updatePostSuccess = () => {
  return { type: at.UPDATE_POST_SUCCESS };
};
const errorUpdatingPost = (err) => {
  return {
    type: at.UPDATE_POST_FAIL,
    error: err
  };
};

export function updatePost(postData) {
  // const articleSlug = slug(articleData.title);
  const payload = {
    title: postData.title,
    content: postData.content,
    excerpt: postData.excerpt,
    featureImage: postData.featureImage,
    status: postData.status
  };
  return dispatch => {
    dispatch(updatePostDetails(postData));
    return request
      .put(`${API_POSTS}/${postData.origSlug}`)
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .send({
        // title: articleData.title,
        content: postData.content,
        excerpt: postData.excerpt,
        featureImage: postData.featureImage,
        tags: postData.tags,
        status: postData.status
      })
      .then(response => {
        dispatch(updatePostSuccess(response));
        dispatch(notificationSend({
          message: 'Updated article.',
          kind: 'info',
          dismissAfter: 3000
        }));
      })
      .catch(
        err => {
          dispatch(errorUpdatingPost(err.message));
          dispatch(notificationSend({
            message: 'There was a problem updating the article.',
            kind: 'error',
            dismissAfter: 3000
          }));
        });
  };
}

export const INITIAL_STATE = {
  isLoading: false,
  error: null,
  data: [],
  selectedPost: {},
  current: {},
  isEditing: false
};

/**
 * Blog Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function postsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case at.FETCH_POSTS_REQUEST:
    case at.FETCH_POST_REQUEST:
    case at.CREATE_POST_REQUEST:
    case POSTS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case at.FETCH_POSTS_SUCCESS:
    case POSTS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case at.FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedPost: action.payload
      };
    case at.CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case at.FETCH_POSTS_FAIL:
    case at.FETCH_POST_FAIL:
    case at.CREATE_POST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case at.SELECT_POST:
      return {
        ...state,
        isLoading: false,
        id: action.id,
        isEditing: true
      };
    case at.SELECT_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        current: action.current,
        isEditing: true
      };
    case at.SELECT_POST_FAIL:
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
