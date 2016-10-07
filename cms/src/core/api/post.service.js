import request from 'superagent';
import decode from 'jwt-decode';
import fetch from 'isomorphic-fetch';
import { API_BASE, API_POSTS, TOKEN_KEY, processResponse } from 'core';

export function doFetchPosts() {
  return request.get(`${API_POSTS}?include=[author,tags]`);
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

export function doChangeStatus(postId, postStatus) {
  return request
    .put(`${API_POSTS}/pid/${postId}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send({
      status: postStatus
    });
}
