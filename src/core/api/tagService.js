import request from 'superagent';
import decode from 'jwt-decode';
import fetch from 'isomorphic-fetch';
import { API_BASE, API_POSTS, TOKEN_KEY } from 'core/config';
import { processResponse } from './helpers';

export function doFetchPosts() {
  return fetch(`${API_BASE}/posts?include=[author,tags]`)
    .then(response => processResponse(response));
}

export function doFetchTags(tagId) {
  return fetch(`${API_BASE}/tags/${tagId}/posts`)
    .then(response => processResponse(response));
}
