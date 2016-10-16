import * as api from 'core/api/post.service';
import * as notif from 'core/notificationMessages';
import * as types from '../actionTypes';
import { notificationSend } from './notifications';

/**
  * FETCH POST ACTIONS
  * -------------------------
  * @exports fetchPosts
  * @exports fetchPostsIfNeeded
  *****************************************************************/

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
 * Function to retrieve posts from the api.
 * @return {Array} Posts returned as an array of post objects.
 */
export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return api.doFetchPosts()
      .then(response => {
        if (response.status !== 200) {
          dispatch(receivePostsFailed());
        }
        // const camelizedJson = camelizeKeys(response.body);
        // const normalized = normalize(camelizedJson, arrayOf(postSchema, { idAttribute: 'slug' }));
        dispatch(receivePosts(response));
      })
      .catch(err => {
        dispatch(receivePostsFailed(err));
      });
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

const requestPosts = () => {
  return { type: types.FETCH_POSTS_REQUEST };
};

const receivePosts = (response) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: response.body
  };
};

const receivePostsFailed = (err) => ({
  type: types.FETCH_POSTS_FAILURE, error: err
});

/**
  * CREATE POST ACTIONS
  * -------------------------
  * @exports createPost
  *****************************************************************/

/**
 * Create a new post takes the submitted form-data as data and
 * sends the information to the api.
 * @param  {Object} data        The data from the form / post editor
 * @return {Object}             Response object.
 */
export function createPost(data) {
  return (dispatch) => {
    dispatch(beginCreatePost());
    return api.doCreatePost(data)
      .then(response => {
        if (response.status !== 201) {
          dispatch(errorCreatingPost(response));
        }
        dispatch(createPostSuccess(response));
        dispatch(notificationSend(notif.MSG_CREATE_POST_SUCCESS));
      })
      .catch(err => {
        dispatch(errorCreatingPost(err));
        dispatch(notificationSend(notif.MSG_CREATE_POST_FAILURE));
      });
  };
}

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
  * DELETE POST ACTIONS
  * -------------------------
  * @exports deletePost
  *****************************************************************/

export function deletePost(id) {
  return (dispatch) => {
    dispatch({
      type: types.DELETE_POST_REQUEST
    });
    return api.doDeletePost(id)
      .then(response => {
        if (response.status !== 204) {
          dispatch(deletePostFail(response));
        }
        dispatch({
          type: types.DELETE_POST_SUCCESS,
          id
        });
      })
      .catch(err => {
        dispatch(deletePostFail(err));
      });
  };
}

const deletePostFail = (err) => ({
  type: types.DELETE_POST_FAILURE,
  error: err
});


//
// Selectors
// -----------------

export const postsToState = (list) => (
  list.reduce((list, a) => ({
    ...list,
    [a.slug]: a
  }), {})
);

export const getPosts = state => state.posts.list;
//
// Reducer
// -----------------
const INITIAL_STATE = {
  isLoading: false,
  error: null
};

/**
 *  postsReducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */

export default function postsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
    case types.LOAD_POST_REQUEST:
    case types.CREATE_POST_REQUEST:
    case types.DELETE_POST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
        bySlug: action.payload.reduce((list, a) => ({
          ...list,
          [a.slug]: a
        }), {})
      };
    case types.LOAD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        current: action.payload
      };
    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        entities: [...state.entities].filter((entity) => entity.id !== action.id)
      };
    case types.FETCH_POSTS_FAILURE:
    case types.LOAD_POST_FAILURE:
    case types.CREATE_POST_FAIL:
    case types.DELETE_POST_FAILURE:
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
