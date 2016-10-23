import { arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import * as api from 'core/services/api';
import { createSelector } from 'reselect';
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
    return api.doFetchPosts()
       .then(response => {
         const camelizedJson = camelizeKeys(response.body);
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
const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
const requestPosts = (post) => {
  return { type: FETCH_ARTICLES_REQUEST, post };
};

const receivePosts = (entities, posts) => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    entities,
    posts
  };
};

const receivePostsFailed = (err) => ({
  type: FETCH_ARTICLES_FAILURE, error: err
});

export const getArticles = createSelector(
  [
    (state) => state.articles.items,
    (state) => state.articles.bySlug
  ],
  (items, bySlug) => bySlug.map(slug => items[slug])
);

const INITIAL_STATE = {
  bySlug: [],
  items: {},
  isLoading: false
};
/**
 *  postsReducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function articleReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        bySlug: action.posts,
        items: action.entities.posts,
        isLoading: false
      });
    case FETCH_ARTICLES_FAILURE:
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
