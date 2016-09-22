import request from 'superagent';
import decode from 'jwt-decode';
import fetch from 'isomorphic-fetch';
import { API_BASE, API_POSTS, TOKEN_KEY } from 'core/config';
import { processResponse } from './helpers';

export function doFetchPosts() {
  return fetch(`${API_BASE}/posts?include=[author,tags]`)
    .then(response => processResponse(response));
}

export function doCreatePost(data) {
  return request
    .post(API_POSTS)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send({
      title: data.title,
      content: data.content,
      feature_image: data.feature_image,
      tags: data.tags,
      status: data.status,
      excerpt: data.excerpt
    });
}

export function doSelectPost(postId) {
  return request
    .get(`${API_POSTS}/id/${postId}`);
}
