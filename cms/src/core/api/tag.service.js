import request from 'superagent';
import decode from 'jwt-decode';
import fetch from 'isomorphic-fetch';
import { API_BASE, API_POSTS, TOKEN_KEY, processResponse } from 'core';

export function doFetchPosts() {
  return fetch(`${API_BASE}/posts?include=[author,tags]`)
    .then(response => processResponse(response));
}

export function doFetchTags(tagName) {
  return fetch(`${API_BASE}/tags/posts/${tagName}`)
    .then(response => processResponse(response));
}
