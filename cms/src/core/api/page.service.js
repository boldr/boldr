import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { API_PREFIX, API_PAGE, TOKEN_KEY, processResponse } from 'core';

export function doFetchPages() {
  return request
    .get(`${API_PAGE}`);
}
export function doFetchPageUrl(url) {
  return request
    .get(`${API_PAGE}/${url}`);
}
export function doCreatePage(payload) {
  return request
    .post(`${API_PAGE}/dashboard`, payload)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}

export function doRemoveMedia(id) {
  return request
    .delete(`${API_PAGE}/${id}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}
