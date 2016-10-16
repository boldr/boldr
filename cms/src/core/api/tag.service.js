import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { API_PREFIX, API_POSTS, TOKEN_KEY, processResponse } from 'core';

export function doFetchPosts() {
  return fetch(`${API_POSTS}?include=[author,tags]`)
    .then(response => processResponse(response));
}

export function doFetchTags(tagName) {
  return fetch(`${API_TAGS}/posts/${tagName}`)
    .then(response => processResponse(response));
}
