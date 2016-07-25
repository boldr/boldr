import request from 'superagent';
import { push } from 'react-router-redux';
import cookies from 'react-cookie';
import fetch from 'core/fetch';
import { API_ARTICLES } from 'core/api';
import { processResponse } from 'core/api/ApiClient';
import { getAuthToken } from 'core/util/token';

/**
 * GET ARTICLE ACTIONS
 */
export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAIL = 'FETCH_ARTICLES_FAIL';

export function requestArticles() {
  return { type: FETCH_ARTICLES_REQUEST };
}

export function receiveArticles(json) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    result: json
  };
}

function fetchArticles() {
  return dispatch => {
    dispatch(requestArticles());
    return fetch(`${API_ARTICLES}`)
      .then(response => processResponse(response))
      .then(json => dispatch(receiveArticles(json)));
  };
}

function shouldFetchArticles(state) {
  const article = state.article;
  if (!article.articles) {
    return true;
  }
  if (article.isLoading) {
    return false;
  }
  return article;
}

export function fetchArticlesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchArticles(getState())) {
      return dispatch(fetchArticles());
    }

    return Promise.resolve();
  };
}

export const SELECT_ARTICLE = 'SELECT_ARTICLE';

function articleSelected(articleId) {
  return {
    type: SELECT_ARTICLE,
    id: articleId
  };
}

export function selectArticle(articleId) {
  return (dispatch) => {
    dispatch(articleSelected(articleId));
  };
}

/**
 * CREATE` ARTICLE ACTIONS
 * @TODO Before sending data, or in the server, split the tags by , and put them
 * in as tags:[{tagname: tag}]
 */
export const CREATE_ARTICLE_REQUEST = 'CREATE_ARTICLE_REQUEST';
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAIL = 'CREATE_ARTICLE_FAIL';

const beginCreateArticle = () => {
  return { type: CREATE_ARTICLE_REQUEST };
};
// Fetch Articles Success
export function createArticleSuccess(response) {
  return {
    type: CREATE_ARTICLE_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
export function errorCreatingArticle(err) {
  return {
    type: CREATE_ARTICLE_FAIL,
    error: err
  };
}
// Fetch Articles Action
export function createArticle(articleData) {
  return (dispatch) => {
    const token = getAuthToken();
    dispatch(beginCreateArticle());
    return request
      .post(API_ARTICLES)
      .set('Authorization', `Bearer ${cookies.load('token')}`)
      .send({
        title: articleData.title,
        content: articleData.content,
        tags: articleData.tags,
        status: articleData.status
      })
      .then(response => {
        if (response.status === 201) {
          dispatch(createArticleSuccess(response));
        }
      })
      .catch(err => {
        dispatch(errorCreatingArticle(err));
      });
  };
}

export const INITIAL_STATE = {
  isLoading: false,
  message: undefined,
  articles: []
};

/**
 * Article Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function article(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: action.result
      };
    case FETCH_ARTICLES_FAIL:
      return {
        ...state,
        isLoading: false,
        message: action.error
      };
    case CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: false,
        message: action.error
      };
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.error
      };
    case CREATE_ARTICLE_FAIL:
      return {
        ...state,
        isLoading: false,
        message: action.error
      };
    case SELECT_ARTICLE:
      return {
        ...state,
        isLoading: false,
        id: action.id
      };
    default:
      return state;
  }
}
