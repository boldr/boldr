import { arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import { getAllPosts } from 'core/services/api';
import { post as postSchema } from 'core/services/schemas';
// import * as notif from 'core/notificationMessages';
import * as types from '../actionTypes';
// import { notificationSend } from './notifications';

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
      return dispatch(fetchArticles());
    }

    return Promise.resolve();
  };
}

/**
 * Function to retrieve posts from the api.
 * @return {Array} Posts returned as an array of post objects.
 */
export function fetchArticles(post) {
  return (dispatch, getState) => {
    dispatch(requestPosts(post));
    return getAllPosts()
       .then(json => {
         const camelizedJson = camelizeKeys(json);
         const normalized = normalize(camelizedJson, arrayOf(postSchema));
         const result = normalized.result.reduce((arr, a) => {
           if (arr.indexOf(a) === -1) {
             arr.push(a);
           }
           return arr;
         }, []);
         dispatch(receivePosts(normalized.entities, result));
       })
     .catch(err => { dispatch(receivePostsFailed()); });
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

const requestPosts = (post) => {
  return { type: types.FETCH_POSTS_REQUEST, post };
};

const receivePosts = (entities, posts) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    entities,
    posts
  };
};

const receivePostsFailed = (err) => ({
  type: types.FETCH_POSTS_FAILURE, error: err
});

const initialPostState = {
  isLoading: false,
  loaded: true,
  items: []
};

function post(state = initialPostState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        loaded: false
      });
    case types.FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        loaded: true,
        items: [...state.items, ...action.posts]
      });
    case types.FETCH_POSTS_FAILURE:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        error: action.error
      });

    default:
      return state;
  }
}

const INITIAL_STATE = {
  byId: {
    isLoading: false,
    loaded: true,
    items: []
  }
};
/**
 *  postsReducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function articleReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        byId: post(state[action.posts], action)
      });
    case types.FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        byId: post(state[action.posts], action)
      });
    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        error: action.error
      };

    default:
      return state;
  }
}
