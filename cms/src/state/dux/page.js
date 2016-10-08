import request from 'superagent';
import { notificationSend } from 'state/dux/notifications';
import * as api from 'core/api/page.service';
import * as notif from 'core/notificationMessages';
import * as types from '../actionTypes';

const requestPages = () => {
  return { type: types.LOAD_PAGES_REQUEST };
};
const receivePages = (response) => ({
  type: types.LOAD_PAGES_SUCCESS,
  payload: response.body
});
const receivePagesFailed = (err) => ({
  type: types.LOAD_PAGES_FAILURE, error: err
});

/**
 * @function fetchPostsIfNeeded
 * @description Function that determines whether or not posts need to be
 * fetched from the api. Dispatches either the fetchPosts Function
 * or returns the resolved promise if the posts are up to date.
 * @return {Promise} Posts Promise that resolves when posts are fetched
 * or they arent required to be refreshed.
 */
export function fetchPagesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPages(getState())) {
      return dispatch(fetchPages());
    }

    return Promise.resolve();
  };
}
/**
 * Called by fetchPostsIfNeeded to retrieve the state containing posts
 * @param  {Object} state   The blog state which contains posts
 */
function shouldFetchPages(state) {
  const pages = state.pages;
  if (!pages) {
    return true;
  }
  if (pages.isLoading) {
    return false;
  }
  return pages;
}

/**
 * Function to retrieve posts from the api.
 * @return {Array} Posts returned as an array of post objects.
 */
export function fetchPages() {
  return dispatch => {
    dispatch(requestPages());
    return api.doFetchPages()
      .then(response => {
        if (!response.status === 200) {
          dispatch(receivePagesFailed());
        }
        console.log(response);
        dispatch(receivePages(response));
      })
      .catch(err => {
        dispatch(receivePagesFailed(err));
      });
  };
}

const requestPage = () => {
  return { type: types.LOAD_PAGE_REQUEST };
};

const receivePage = (response) => ({
  type: types.LOAD_PAGE_SUCCESS,
  payload: response.body
});

const receivePageFailed = (err) => ({
  type: types.LOAD_PAGE_FAILURE, error: err
});

/**
 * Function to retrieve posts from the api.
 * @return {Array} Posts returned as an array of post objects.
 */
export function fetchPageByUrl(url) {
  return dispatch => {
    dispatch(requestPage());
    if (url === undefined) {
      url = 'home';
    }
    return api.doFetchPageUrl(url)
      .then(response => {
        if (response.status !== 200) {
          dispatch(receivePageFailed());
        }
        console.log(response);
        dispatch(receivePage(response));
      })
      .catch(err => {
        dispatch(receivePageFailed(err));
      });
  };
}
const initialState = {
  loaded: false
};
export const pageSelector = id => state => state.pages[url];
export default function pageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOAD_PAGES_REQUEST:
    case types.LOAD_PAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.LOAD_PAGES_SUCCESS:
      const page = action.payload;
      return {
        isLoading: false,
        loaded: true,
        entities: action.payload.reduce((pages, page) => {
          pages[page.url] = page;
          return pages;
        }, {})
      };
    case types.LOAD_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case types.LOAD_PAGES_FAILURE:
    case types.LOAD_PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.pages && globalState.pages.loaded;
}

export function loadPages() {
  return {
    types: [types.LOAD_PAGES_REQUEST, types.LOAD_PAGES_SUCCESS, types.LOAD_PAGES_FAILURE],
    promise: (client) => client.get('/pages')
  };
}
