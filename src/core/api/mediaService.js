import request from 'superagent';
import decode from 'jwt-decode';
import fetch from 'isomorphic-fetch';
import { API_BASE, API_MEDIA, TOKEN_KEY } from 'core/config';
import { processResponse } from './helpers';

export function doFetchMedia() {
  return request
    .get(`${API_MEDIA}`);
}

export function doUpload(payload) {
  return request
    .post(`${API_MEDIA}/dashboard`, payload)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}
