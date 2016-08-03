import request from 'superagent';
import { push } from 'react-router-redux';
import fetch from 'core/fetch';
import { API_ARTICLES, API_MEDIA } from 'core/api';
import { notificationSend } from 'core/state/notifications';
import { processResponse, credentials, jsonHeaders } from 'core/api/ApiClient';
import * as at from './constants';

/**
 * GET ARTICLE ACTIONS
 */
export function requestArticles() {
  return { type: at.FETCH_ARTICLES_REQUEST };
}

export function receiveArticles(json) {
  return {
    type: at.FETCH_ARTICLES_SUCCESS,
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

function articleSelected(articleId) {
  return {
    type: at.SELECT_ARTICLE,
    id: articleId
  };
}
const receiveArticle = (response) => ({
  type: at.SELECT_ARTICLE_SUCCESS,
  current: response.body
});
const receiveArticleFailed = (err) => ({
  type: at.SELECT_ARTICLE_FAIL,
  error: err
});
export function selectArticle(articleId) {
  return (dispatch) => {
    dispatch(articleSelected(articleId));
    return request
      .get(`${API_ARTICLES}/id/${articleId}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(receiveArticle(response));
        }
      })
      .catch(err => {
        dispatch(receiveArticleFailed(err));
      });
  };
}



const beginUploadImage = () => {
  return { type: at.UPLOAD_IMAGE_REQUEST };
};
// Fetch Articles Success
export function uploadImageSuccess(response) {
  return {
    type: at.UPLOAD_IMAGE_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
export function uploadImageFail(err) {
  return {
    type: at.UPLOAD_IMAGE_FAIL,
    error: err
  };
}

export function uploadFeatureImage(imageData) {
  return (dispatch) => {
    dispatch(beginUploadImage());
    return request
      .post(`${API_MEDIA}/articles`)
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .set('Content-Type', 'multipart/form-data')
      .attach('photo', imageData)
      .end()
      .then(response => {
        if (response.status === 201) {
          dispatch(uploadImageSuccess(response));
        }
      })
      .catch(err => {
        dispatch(uploadImageFail(err));
      });
  };
}

/**
 * CREATE ARTICLE ACTIONS
 */


const beginCreateArticle = () => {
  return { type: at.CREATE_ARTICLE_REQUEST };
};
// Fetch Articles Success
export function createArticleSuccess(response) {
  return {
    type: at.CREATE_ARTICLE_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
export function errorCreatingArticle(err) {
  return {
    type: at.CREATE_ARTICLE_FAIL,
    error: err
  };
}
// Fetch Articles Action
export function createArticle(articleData) {
  return (dispatch) => {
    dispatch(beginCreateArticle());
    return request
      .post(API_ARTICLES)
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .send({
        title: articleData.title,
        content: articleData.content,
        tags: articleData.tags,
        status: articleData.status
      })
      .then(response => {
        if (response.status === 201) {
          dispatch(createArticleSuccess(response));
          dispatch(notificationSend({
            message: 'Article created successfully.',
            kind: 'info',
            dismissAfter: 3000
          }));
        }
      })
      .catch(err => {
        dispatch(errorCreatingArticle(err));
      });
  };
}

export function updateArticleDetails() {
  return {
    type: at.UPDATE_ARTICLE_REQUEST
  };
}
export function updateArticleSuccess() {
  return {
    type: at.UPDATE_ARTICLE_SUCCESS
  };
}
export function errorUpdatingArticle(err) {
  return {
    type: at.UPDATE_ARTICLE_FAIL,
    error: err
  };
}
export function updateArticle(articleData) {
  // const articleSlug = slug(articleData.title);
  const payload = {
    title: articleData.title,
    content: articleData.content,
    excerpt: articleData.excerpt,
    featureImage: articleData.featureImage,
    status: articleData.status
  };
  return dispatch => {
    dispatch(updateArticleDetails(articleData));
    return request
      .put(`${API_ARTICLES}/${articleData.origSlug}`)
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .send({
        // title: articleData.title,
        content: articleData.content,
        excerpt: articleData.excerpt,
        featureImage: articleData.featureImage,
        tags: articleData.tags,
        status: articleData.status
      })
      .then(response => {
        dispatch(updateArticleSuccess(response));
        dispatch(notificationSend({
          message: 'Updated article.',
          kind: 'info',
          dismissAfter: 3000
        }));
      })
      .catch(
        err => {
          dispatch(errorUpdatingArticle(err.message));
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
  message: undefined,
  error: null,
  articles: [],
  current: {},
  isEditing: false
};

/**
 * Article Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function article(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case at.FETCH_ARTICLES_REQUEST:
    case at.CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case at.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: action.result
      };
    case at.FETCH_ARTICLES_FAIL:
    case at.CREATE_ARTICLE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case at.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.error
      };
    case at.SELECT_ARTICLE:
      return {
        ...state,
        isLoading: false,
        id: action.id,
        isEditing: true
      };
    case at.SELECT_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        current: action.current,
        isEditing: true
      };
    case at.SELECT_ARTICLE_FAIL:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        isEditing: true
      };
    default:
      return state;
  }
}
