/* @flow */
import request from 'superagent';
import { push } from 'react-router-redux';

import { API_ARTICLES } from '../../config-api';

/**
 * GET ARTICLE ACTIONS
 */
export const FETCH_ARTICLES_REQUEST:string = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS:string = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAIL:string = 'FETCH_ARTICLES_FAIL';

// Fetch Articles Action

export function loadArticles() {
  return {
    types: [FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAIL],
    promise: (client) => client.get('/articles') // params not used, just shown as demonstration
  };
}

/**
 * CREATE` ARTICLE ACTIONS
 * @TODO Before sending data, or in the server, split the tags by , and put them
 * in as tags:[{tagname: tag}]
 */
export const CREATE_ARTICLE_REQUEST:string = 'CREATE_ARTICLE_REQUEST';
export const CREATE_ARTICLE_SUCCESS:string = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAIL:string = 'CREATE_ARTICLE_FAIL';

const beginCreateArticle = () => {
  return { type: CREATE_ARTICLE_REQUEST };
};
// Fetch Articles Success
export function createArticleSuccess(response:Object) {
  return {
    type: CREATE_ARTICLE_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
export function errorCreatingArticle(err:Object) {
  return {
    type: CREATE_ARTICLE_FAIL,
    error: err
  };
}
// Fetch Articles Action
export function createArticle(articleData:Object) {
  return (dispatch:Function) => {
    dispatch(beginCreateArticle());
    return request
      .post(API_ARTICLES)
      .set('Authorization', `Bearer ${localStorage.getItem('boldr:jwt')}`)
      .send({
        title: articleData.title,
        content: articleData.content,
        tags: [
          { tagname: articleData.tag }
        ], status: articleData.status
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
  error: undefined,
  message: '',
  articles: [],
  articleList: [
    {
      title: ''
    }
  ]
};

/**
 * Article Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function article(state:Object = INITIAL_STATE, action:Object = {}) {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        articleList: action.result,
        articles: action.payload
      });
    case FETCH_ARTICLES_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case CREATE_ARTICLE_REQUEST:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case CREATE_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case CREATE_ARTICLE_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}
