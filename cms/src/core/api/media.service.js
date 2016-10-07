import request from 'superagent';
import decode from 'jwt-decode';
import fetch from 'isomorphic-fetch';
import { API_BASE, API_MEDIA, TOKEN_KEY, processResponse } from 'core';

export function doFetchMedia() {
  return request
    .get(`${API_MEDIA}`);
}

export function doUpload(payload) {
  return request
    .post(`${API_MEDIA}/dashboard`, payload)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}

export function doRemoveMedia(id) {
  return request
    .delete(`${API_MEDIA}/${id}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}
