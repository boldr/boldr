import request from 'superagent';
import decode from 'jwt-decode';
import fetch from 'isomorphic-fetch';
import { API_BASE, API_NAVIGATION, API_LINKS, TOKEN_KEY } from 'core';

export function doUpdateNavigationLinks(data) {
  return request.put(`${API_LINKS}/${data.id}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(data);
}

export function doAddNavigationLinks(data) {
  return request.post(`${API_LINKS}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(data);
}
