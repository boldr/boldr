import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { API_PREFIX, API_SETTINGS, TOKEN_KEY } from 'core';

export function doUpdateSettings(data, id) {
  return request.put(`${API_SETTINGS}/${id}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(data);
}

export function doLoadSettings() {
  return request.get(`${API_SETTINGS}`);
}
