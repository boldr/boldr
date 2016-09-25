import request from 'superagent';
import decode from 'jwt-decode';
import fetch from 'isomorphic-fetch';
import { API_BASE, API_SETTINGS, TOKEN_KEY } from 'core/config';

export function doUpdateSettings(data, id) {
  return request.put(`${API_SETTINGS}/${id}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(data);
}

export function doLoadSettings() {
  return request(`${API_SETTINGS}`);
}
