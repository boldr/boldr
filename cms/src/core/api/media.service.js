import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { API_PREFIX, API_MEDIA, TOKEN_KEY, processResponse } from 'core';

export function doFetchMedia() {
  return request
    .get(`${API_MEDIA}`);
}

export function doUpload(payload) {
  return request
    .post(`${API_MEDIA}/dashboard`, payload)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}
