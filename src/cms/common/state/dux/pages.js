import { arrayOf, normalize } from 'normalizr';
import { uniq } from 'lodash';
import { camelizeKeys } from 'humps';
import { notificationSend } from 'state/dux/notifications';
import * as api from 'core/services/api';
import { page as pageSchema } from 'core/services/schemas';
import * as notif from 'core/config/notifications';

const LOAD_PAGES_REQUEST = 'LOAD_PAGES_REQUEST';
const LOAD_PAGES_SUCCESS = 'LOAD_PAGES_SUCCESS';
const LOAD_PAGES_FAILURE = 'LOAD_PAGES_FAILURE';
const LOAD_PAGE_REQUEST = 'LOAD_PAGE_REQUEST';
const LOAD_PAGE_SUCCESS = 'LOAD_PAGE_SUCCESS';
const LOAD_PAGE_FAILURE = 'LOAD_PAGE_FAILURE';


/**
  * FETCH PAGES
  * -------------------------
  * @exports fetchPagesIfNeeded
  * @exports fetchPages
  *****************************************************************/
export function fetchPagesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPages(getState())) {
      return dispatch(fetchPages());
    }

    return Promise.resolve();
  };
}

export function fetchPages() {
  return dispatch => {
    dispatch(requestPages());
    return api.doFetchPages()
      .then(response => {
        if (response.status !== 200) {
          dispatch(receivePagesFailed());
        }
        const camelizedJson = camelizeKeys(response.body);
        const normalized = normalize(camelizedJson, arrayOf(pageSchema));
        dispatch(receivePages(normalized));
      })
      .catch(err => {
        dispatch(receivePagesFailed(err));
      });
  };
}

function shouldFetchPages(state) {
  const pages = state.pages;
  if (!pages.length) {
    console.log('SHOULD FETCH PAGES');
    return true;
  }
  if (pages.length) {
    console.log(pages, 'SHOULD NOT FETCH PAGES');
    return false;
  }
  return pages;
}

const requestPages = () => {
  return { type: LOAD_PAGES_REQUEST };
};
const receivePages = (normalized) => ({
  type: LOAD_PAGES_SUCCESS,
  payload: normalized
});
const receivePagesFailed = (err) => ({
  type: LOAD_PAGES_FAILURE, error: err
});

/**
  * FETCH PAGE
  * -------------------------
  * @exports fetchPageByUrl
  *****************************************************************/
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
        dispatch(receivePage(response));
      })
      .catch(err => {
        dispatch(receivePageFailed(err));
      });
  };
}
const requestPage = () => {
  return { type: LOAD_PAGE_REQUEST };
};

const receivePage = (response) => ({
  type: LOAD_PAGE_SUCCESS,
  payload: response.body
});

const receivePageFailed = (err) => ({
  type: LOAD_PAGE_FAILURE, error: err
});


/**
  * PAGE REDUCER
  * -------------------------
  * @exports pagesReducer
  *****************************************************************/
const initialState = {
  loaded: false,
  all: {},
  ids: [],
  meta: {},
  filter: {}
};

export default function pagesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PAGES_REQUEST:
    case LOAD_PAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOAD_PAGES_SUCCESS:
      return {
        loading: false,
        loaded: true,
        all: action.payload.entities.pages,
        ids: action.payload.result
      };
    case LOAD_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case LOAD_PAGES_FAILURE:
    case LOAD_PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
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
    types: [LOAD_PAGES_REQUEST, LOAD_PAGES_SUCCESS, LOAD_PAGES_FAILURE],
    schema: arrayOf(pageSchema),
    promise: (client) => client.get('/pages')
  };
}
