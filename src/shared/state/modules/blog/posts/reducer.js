/* @flow */
import { combineReducers } from 'redux';
import removeByKey from 'boldr-utils/es/objects/removeByKey';
import removeIdFromArray from 'boldr-utils/es/arrays/removeIdFromArray';
import * as notif from '../../../../core/constants';

import { notificationSend } from '../../../../state/modules/notifications';
import * as t from '../constants';
import { getPosts } from './selectors';

export const STATE_KEY = 'posts';

const all = (state = {}, action) => {
  switch (action.type) {
    case t.FETCH_POSTS_SUCCESS:
    case t.CREATE_POST_SUCCESS:
    case t.FETCH_POST_SUCCESS:
      return {
        ...state,
        ...action.payload.entities.posts,
      };
    case t.DELETE_POST_SUCCESS:
      return removeByKey(state, action.id);
    default:
      return state;
  }
};

const ids = (state = [], action) => {
  switch (action.type) {
    case t.FETCH_POSTS_SUCCESS:
      // case t.FETCH_POST_SUCCESS:
      return action.payload.result;
    case t.DELETE_POST_SUCCESS:
      return removeIdFromArray(state, action.id);
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case t.FETCH_POSTS_REQUEST:
    case t.CREATE_POST_REQUEST:
    case t.FETCH_POST_REQUEST:
      return true;
    case t.FETCH_POSTS_SUCCESS:
    case t.CREATE_POST_SUCCESS:
    case t.FETCH_POST_SUCCESS:
      return false;
    default:
      return state;
  }
};

const currentPost = (state = {}, action) => {
  switch (action.type) {
    case t.SELECT_POST:
      return {
        ...state,
        ...action.post,
      };
    case t.FETCH_POST_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

/**
 *  postsReducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */

export default combineReducers({
  all,
  ids,
  isFetching,
  currentPost,
});

export const getPublishedPosts = (state: Object, filter: string): Function => {
  const allPosts = getPosts(state);
  switch (filter) {
    case 'all':
      return allPosts;
    case 'published':
      return (
        allPosts.filter(p => p.published) && allPosts.filter(p => !p.featured)
      );
    case 'draft':
      return allPosts.filter(p => !p.published);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

export const getFeaturedPosts = (state: Object, filter: string): Function => {
  const allPosts = getPosts(state);
  switch (filter) {
    case 'all':
      return allPosts;
    case 'featured':
      return allPosts.filter(p => p.featured);
    case 'not':
      return allPosts.filter(p => !p.featured);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};
