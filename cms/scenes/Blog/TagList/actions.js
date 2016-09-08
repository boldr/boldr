import fetch from '../../../core/fetch';
import { API_BASE, API_POSTS } from '../../../core/config';
import { processResponse } from '../../../core/api/helpers';

export const LOAD_TAG_REQUEST = 'LOAD_TAG_REQUEST';
export const LOAD_TAG_SUCCESS = 'LOAD_TAG_SUCCESS';
export const LOAD_TAG_FAILURE = 'LOAD_TAG_FAILURE';

/**
 * Select Post
 * @description Used when on the article list state.
 */
const requestTag = () => {
  return {
    type: LOAD_TAG_REQUEST
  };
};

const receiveTag = (json) => ({
  type: LOAD_TAG_SUCCESS,
  payload: json
});

const failedToReceiveTag = (err) => ({
  type: LOAD_TAG_FAILURE,
  error: err
});

export function requestPostTags(tagId) {
  return dispatch => {
    dispatch(requestTag());
    return fetch(`${API_BASE}/tags/${tagId}`)
      .then(response => processResponse(response))
      .then(json => dispatch(receiveTag(json)))
      .catch(err => {
        dispatch(failedToReceiveTag(err));
      });
  };
}

export { requestPostTags }
