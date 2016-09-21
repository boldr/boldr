import fetch from 'isomorphic-fetch';
import { API_BASE, API_POSTS } from 'core/config';
import { processResponse } from 'core/api/helpers';
import * as types from '../actionTypes';
/**
 * Select Post
 * @description Used when on the article list state.
 */
const requestTag = () => {
  return {
    type: types.LOAD_TAG_REQUEST
  };
};

const receiveTag = (json) => ({
  type: types.LOAD_TAG_SUCCESS,
  result: json
});

const failedToReceiveTag = (err) => ({
  type: types.LOAD_TAG_FAILURE,
  error: err
});

export function requestPostTags(tagId) {
  return dispatch => {
    dispatch(requestTag());
    return fetch(`${API_BASE}/tags/${tagId}/posts`)
      .then(response => processResponse(response))
      .then(json => dispatch(receiveTag(json)))
      .catch(err => {
        dispatch(failedToReceiveTag(err));
      });
  };
}


const INITIAL_STATE = {
  isLoading: false,
  error: false,
  id: '',
  name: '',
  description: '',
  posts: []
};

/**
 * Blog Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
export default function tagsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.LOAD_TAG_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_TAG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.result.id,
        name: action.result.name,
        posts: action.result.posts,
        description: action.result.description
      };
    case types.LOAD_TAG_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
