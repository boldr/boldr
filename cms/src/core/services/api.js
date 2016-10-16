import fetch from 'isomorphic-fetch';
import request from 'superagent';
import {
  API_POSTS,
  API_AUTH,
  API_SETTINGS,
  API_PAGES,
  API_TAGS,
  API_LINKS,
  API_ATTACHMENTS,
  API_ACTIVITY,
  TOKEN_KEY
} from '../config';

export function processResponse(response) {
  return response.json().then(json => {
    if (response.status >= 400) {
      throw new Error(json.data.message);
    }
    return json;
  });
}

export const credentials = 'same-origin';

export const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export function doFetchPosts() {
  return request.get(`${API_POSTS}?include=[author,tags]`);
}

export function doCreatePost(data) {
  return request
    .post(`${API_POSTS}`)
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

export function doDeletePost(postId) {
  return request
    .delete(`${API_POSTS}/pid/${postId}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}

export const doSignup = (data) => request.post(`${API_AUTH}/signup`).send(data);

export const doLogin = (loginData) => request.post(`${API_AUTH}/login`).send(loginData);

export function doForgotPassword(email) {
  return fetch(`${API_AUTH}/forgot-password`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email
    })
  });
}

export function doResetPassword(password, token) {
  return fetch(`${API_AUTH}/reset-password/${token}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password
    })
  });
}

export const doAuthCheck = (token) => {
  return request.get(`${API_AUTH}/check`).set('Authorization', `${token}`);
};

export function doUpdateSettings(data, id) {
  const payload = {
    site_url: data.siteUrl,
    site_favicon: data.favicon,
    site_name: data.siteName,
    site_logo: data.siteLogo,
    google_analytics: data.googleAnalytics,
    configuration: data.configuration
  };
  return request.put(`${API_SETTINGS}/1`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(payload);
}

export const doLoadSettings = () => {
  return request.get(`${API_SETTINGS}`);
};

export function doGetActivities(data, id) {
  return request
    .get(`${API_ACTIVITY}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}

export function doFetchMedia() {
  return request
    .get(`${API_ATTACHMENTS}`);
}

export function doUpload(payload) {
  return request
    .post(`${API_ATTACHMENTS}/dashboard`, payload)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}

export function doUpdateNavigationLinks(data) {
  return request.put(`${API_LINKS}/${data.id}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(data);
}

export function doAddNavigationLinks(data) {
  const payload = {
    name: data.name,
    href: data.href,
    icon: data.icon,
    position: data.position
  };
  return request.post(`${API_LINKS}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(payload);
}

export function doFetchPages() {
  return request
    .get(`${API_PAGES}`);
}
export function doFetchPageUrl(url) {
  return request
    .get(`${API_PAGES}/${url}`);
}
export function doCreatePage(payload) {
  return request
    .post(`${API_PAGES}/dashboard`, payload)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}

export function doRemoveMedia(id) {
  return request
    .delete(`${API_PAGES}/${id}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}

export function doFetchTags(tagName) {
  return fetch(`${API_TAGS}/posts/${tagName}`)
    .then(response => processResponse(response));
}