import request from 'superagent';
import fetch from '../../../core/fetch';
import { API_BASE, API_POSTS } from '../../../core/config';
import { notificationSend } from '../../Boldr/state/notifications';
import { processResponse } from '../../../core/api/helpers';
import * as types from '../state/constants';

export function clearCurrentPost() {
  return { type: types.CLEAR_CURRENT_POST };
}

const requestPost = () => {
  return { type: types.LOAD_POST_REQUEST };
};
const receivedPost = (json) => ({
  type: types.LOAD_POST_SUCCESS,
  title: json.title,
  slug: json.slug,
  id: json.id,
  feature_image: json.feature_image,
  content: json.content,
  author: json.author,
  tags: json.tags
});
const receivePostFailed = (err) => ({
  type: types.LOAD_POST_FAILURE,
  error: err
});

/**
 * Retrieves a specific post from the API based on the value of its slug
 * @param  {string} slug the slug is the title of the post normalized / sluggified
 * @return {Object}      The post object
 */
export function loadPost(slug) {
  return dispatch => {
    dispatch(requestPost());
    return fetch(`${API_POSTS}/slug/${slug}`)
      .then(response => processResponse(response))
      .then(json => dispatch(receivedPost(json)))
      .catch(err => {
        dispatch(receivePostFailed(err));
      });
  };
}


const updatePostDetails = () => {
  return { type: types.UPDATE_POST_REQUEST };
};
const updatePostSuccess = (response) => {
  return { type: types.UPDATE_POST_SUCCESS };
};
const errorUpdatingPost = (err) => {
  return {
    type: types.UPDATE_POST_FAILURE,
    error: err
  };
};

export function updatePost(postData) {
  // const articleSlug = slug(articleData.title);
  const payload = {
    title: postData.title,
    content: postData.content,
    excerpt: postData.excerpt,
    feature_image: postData.feature_image,
    status: postData.status
  };
  return dispatch => {
    dispatch(updatePostDetails(postData));
    return request
      .put(`${API_POSTS}/pid/${postData.id}`)
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .send({
        // title: articleData.title,
        content: postData.content,
        excerpt: postData.excerpt,
        feature_image: postData.feature_image,
        tag: postData.tag,
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
